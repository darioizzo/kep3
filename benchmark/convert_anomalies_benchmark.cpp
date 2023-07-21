// Copyright 2020, 2021, 2022 Francesco Biscani (bluescarni@gmail.com), Dario Izzo (dario.izzo@gmail.com)
//
// This file is part of the dsyre library.
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

#include <chrono>
#include <iostream>
#include <random>

#include <fmt/core.h>

#include<kep3/core_astro/convert_anomalies.hpp>


using namespace kep3;
using namespace std::chrono;

// In this benchmark we test the speed and accuracy of the Kepler's equation solvers

void perform_test_speed(double min_ecc, double max_ecc, unsigned N)
{
    //
    // Engines 
    //
    std::mt19937 rng_engine(122012203u);
    //
    // Distribtuions
    //
    std::uniform_real_distribution<double> ecc_d(min_ecc, max_ecc);
    std::uniform_real_distribution<double> M_d(-100, 100.);
    
    // We generate the random dataset
    std::vector<double> eccenricities(N);
    std::vector<double> mean_anomalies(N);

    for (auto i = 0u; i < N; ++i) {
        mean_anomalies[i] = M_d(rng_engine);
        eccenricities[i] = ecc_d(rng_engine);
    }

    // We log progress
    fmt::print("{:.2f} min_ecc, {:.2f} max_ecc, on {} data points: ", min_ecc, max_ecc, N);
    
    auto start = high_resolution_clock::now();
    for (auto i = 0u; i < N; ++i) {
        m2e(mean_anomalies[i], eccenricities[i]);
    }
    auto stop = high_resolution_clock::now();
    auto duration = duration_cast<microseconds>(stop - start);
    fmt::print("{:.3f}s\n", duration.count() / 1e6);
}

void perform_test_accuracy(double min_ecc, double max_ecc, unsigned N)
{
    //
    // Engines 
    //
    std::mt19937 rng_engine(122012203u);
    //
    // Distribtuions
    //
    std::uniform_real_distribution<double> ecc_d(min_ecc, max_ecc);
    std::uniform_real_distribution<double> M_d(-100, 100.);
    
    // We generate the random dataset
    std::vector<double> eccenricities(N);
    std::vector<double> mean_anomalies(N);

    for (auto i = 0u; i < N; ++i) {
        mean_anomalies[i] = M_d(rng_engine);
        eccenricities[i] = ecc_d(rng_engine);
    }

    // We log progress
    fmt::print("{:.2f} min_ecc, {:.2f} max_ecc, on {} data points: ", min_ecc, max_ecc, N);
    std::vector<double> err(N);
    for (auto i = 0u; i < N; ++i) {
        auto res = e2m(m2e(mean_anomalies[i], eccenricities[i]), eccenricities[i]);
        err[i] = std::abs(res - mean_anomalies[i]);
    }
    auto max_it = max_element(std::begin(err), std::end(err));
    auto min_it = min_element(std::begin(err), std::end(err));
    auto avg = std::accumulate(err.begin(), err.end(), 0.0) / err.size();
    fmt::print("{:.3e} avg, {:.3e} min, {:.3e} max\n", avg, *min_it, *max_it );
}


int main()
{
    unsigned seed = 7898935u;
    fmt::print("\nComputes speed different eccentricity ranges:\n");
    perform_test_speed(0, 0.5, 1000000);
    perform_test_speed(0.5, 0.9, 1000000);
    perform_test_speed(0.9, 0.99, 1000000);
    fmt::print("\nComputes error at different eccentricity ranges:\n");
    perform_test_accuracy(0, 0.5, 100000);
    perform_test_accuracy(0.5, 0.9, 100000);
    perform_test_accuracy(0.9, 0.99, 100000);
}