// Copyright 2023, 2024 Dario Izzo (dario.izzo@gmail.com), Francesco Biscani
// (bluescarni@gmail.com)
//
// This file is part of the kep3 library.
//
// This Source Code Form is subject to the terms of the Mozilla
// Public License v. 2.0. If a copy of the MPL was not distributed
// with this file, You can obtain one at http://mozilla.org/MPL/2.0/.

#include <fmt/core.h>

#include <kep3/planets/keplerian.hpp>

#include "catch.hpp"

TEST_CASE("constructor") {
  kep3::udpla::keplerian udpla{};
  fmt::print("{}", udpla);
}
