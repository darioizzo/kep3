Search.setIndex({"docnames": ["anomalies", "api", "constants", "elements", "epoch", "index", "lambert", "notebooks/anomalies", "notebooks/epochs", "planet", "tutorials", "udplas"], "filenames": ["anomalies.rst", "api.rst", "constants.rst", "elements.rst", "epoch.rst", "index.md", "lambert.rst", "notebooks/anomalies.ipynb", "notebooks/epochs.ipynb", "planet.rst", "tutorials.rst", "udplas.rst"], "titles": ["Anomalies Conversions", "API", "Global constants", "Orbital Elements", "Epoch class", "Welcome to pykep\u2019s documentation!", "Lambert class", "The various anomalies in pykep", "Epochs and Julian Dates", "Planet class", "Tutorials", "List of implemented planets"], "terms": {"In": [0, 2, 3, 4, 8, 9], "pykep": [0, 1, 3, 4, 6, 8, 9, 10, 11], "we": [0, 4, 7, 8, 9], "adopt": 0, "follow": [0, 8, 9], "name": [0, 2, 7, 9], "variou": [0, 2, 3, 10], "m": [0, 2, 3, 5, 7, 9], "i": [0, 1, 3, 4, 5, 7, 8, 9], "mean": [0, 3, 7], "e": [0, 3, 7, 8, 9], "eccentr": [0, 7], "l": [0, 3, 7], "true": [0, 3, 6, 7, 8, 9], "longitud": [0, 3, 7], "lambda": [0, 7], "h": [0, 3, 7], "hyperbol": [0, 7], "n": [0, 2, 7], "zeta": [0, 7], "gudermannian": [0, 7], "function": [0, 2, 3, 7, 8, 9], "variabl": [0, 6, 7], "symbol": [0, 2, 7], "can": [0, 2, 4, 7, 8, 9, 10], "spell": 0, "out": 0, "like": [0, 6], "made": [0, 6], "lowercas": 0, "below": 0, "list": [0, 1, 5, 9], "allow": [0, 5, 6, 8, 9], "convert": [0, 3, 7, 8], "from": [0, 3, 4, 7, 8, 9], "one": [0, 2, 4, 8, 9], "anoth": 0, "version": [0, 3, 7], "m2e": [0, 7], "ecc": [0, 7], "requir": 0, "1": [0, 2, 3, 4, 6, 7, 9], "arg": [0, 4, 6, 9], "float": [0, 4, 6, 8, 9], "rad": 0, "return": [0, 4, 6, 9], "pi": [0, 3, 6, 7, 9], "exampl": [0, 4, 6, 7, 9], "import": [0, 4, 6, 7, 8, 9], "pk": [0, 4, 6, 7, 8, 9], "2": [0, 2, 3, 6, 7, 9], "0": [0, 2, 3, 5, 6, 7, 8, 9], "296254963787226": 0, "e2m": 0, "5": [0, 7, 8], "4520574461395797": 0, "m2f": 0, "32": [0, 8], "65": 0, "4497431281728277": 0, "f2m": 0, "f": [0, 3, 7], "34": 0, "67": 0, "05065883735669101": 0, "e2f": 0, "5502639747136633": 0, "f2e": 0, "1082931139529482": 0, "n2h": [0, 7], "10": [0, 2, 8], "12836469743916526": 0, "h2n": 0, "14": 0, "377641187853621": 0, "n2f": 0, "13": [0, 4], "45": 0, "7373697968359353": 0, "f2n": 0, "7": [0, 2], "8": 0, "421335633880908": 0, "h2f": 0, "4": [0, 6, 7, 8], "7948251330114304": 0, "f2h": 0, "30083016696826936": 0, "zeta2f": 0, "see": [0, 8, 9], "battin": [0, 6], "an": [0, 4, 7, 8, 9], "introduct": 0, "mathemat": 0, "method": [0, 9], "astrodynam": [0, 10], "definit": 0, "treatment": 0, "result": 0, "equat": [0, 7, 9], "3290929552114266": 0, "f2zeta": 0, "3": [0, 2, 4, 7, 9], "36923933496389816": 0, "m2e_v": [0, 7], "numpi": [0, 6, 7], "ndarrai": 0, "np": [0, 6, 7], "linspac": [0, 7], "100": [0, 7], "375": 0, "shape": 0, "e2m_v": 0, "86345": 0, "m2f_v": 0, "f2m_v": [0, 7], "e2f_v": 0, "0256": 0, "f2e_v": 0, "23": 0, "n2h_v": 0, "h2n_v": 0, "n2f_v": 0, "f2n_v": 0, "h2f_v": 0, "f2h_v": 0, "zeta2f_v": 0, "f2zeta_v": 0, "design": [1, 5], "maxim": 1, "its": [1, 5, 6, 7, 8, 9, 10], "usabl": 1, "let": [1, 7, 8], "u": [1, 7, 8], "know": [1, 7, 9], "what": 1, "you": 1, "think": 1, "about": [1, 7, 9], "global": [1, 5], "constant": [1, 5, 9], "anomali": [1, 3, 5, 10], "convers": [1, 5, 9], "normal": 1, "vector": [1, 6, 7], "orbit": [1, 5, 7], "element": [1, 5, 9], "el_typ": [1, 3, 9], "ic2par": [1, 3, 9], "par2ic": [1, 3], "ic2eq": [1, 3], "eq2ic": [1, 3], "eq2par": [1, 3], "par2eq": [1, 3], "epoch": [1, 5, 9, 10], "class": [1, 3, 5, 8, 11], "lambert": [1, 5], "lambert_problem": [1, 6], "planet": [1, 5], "implement": [1, 5, 9], "keplerian": [1, 3, 9, 11], "null_udpla": [1, 9, 11], "access": [2, 9], "number": [2, 3, 4, 6, 7, 8], "common": 2, "ar": [2, 3, 7, 8, 9], "provid": [2, 3, 5, 9, 10], "conveni": 2, "The": [2, 3, 4, 6, 9, 10], "user": [2, 3, 4, 8, 9], "overwrit": 2, "valu": [2, 9], "need": [2, 6, 8], "These": [2, 3], "us": [2, 3, 4, 5, 7, 8, 9, 10, 11], "intern": [2, 9], "thei": [2, 9], "onli": 2, "instanti": [2, 3, 8, 9], "object": [2, 4, 8, 9], "": [2, 6, 7, 9], "unit": [2, 6, 9], "astronom": 2, "au": 2, "149597870700": 2, "cavendish": 2, "frac": [2, 3, 6, 9], "kg": 2, "36687e": 2, "sun": 2, "gravit": [2, 6, 9], "paramet": [2, 3, 6, 9], "mu_sun": 2, "sec": [2, 9], "32712440018e": 2, "20": 2, "earth": 2, "mu_earth": 2, "398600441800000": 2, "veloc": [2, 3, 6, 9], "earth_veloc": 2, "29784": 2, "691831696804": 2, "radiu": [2, 9], "earth_radiu": 2, "6378137": 2, "j_2": 2, "earth_j2": 2, "00108262668": 2, "second": [2, 4, 6, 7, 8, 9], "dai": [2, 4, 8], "day2sec": 2, "86400": 2, "degre": 2, "radian": 2, "rad2deg": 2, "57": 2, "29577951308232": 2, "default": [3, 4, 6, 8, 11], "oscul": [3, 9], "classic": 3, "set": 3, "omega": 3, "togeth": 3, "cartesian": [3, 6, 9], "posit": [3, 6, 9], "mathbf": 3, "r": [3, 6], "v": 3, "support": [3, 5, 8], "given": 3, "also": [3, 4, 7, 8, 9], "well": [3, 5], "equinocti": 3, "defin": [3, 4, 7, 9], "left": 3, "begin": 3, "arrai": [3, 6, 7], "p": 3, "co": 3, "g": [3, 7, 9], "sin": [3, 7], "tan": 3, "i2": 3, "right": 3, "k": 3, "end": [3, 7], "avoid": [3, 7, 9], "singular": 3, "except": [3, 9], "which": [3, 7, 9], "case": [3, 7, 9], "retrogad": 3, "convent": [3, 10], "hyperbola": 3, "enforc": 3, "thu": [3, 10], "abl": 3, "where": 3, "A": [3, 7, 11], "member": [3, 4, 6], "kep_m": 3, "kep_f": [3, 9], "meq": 3, "modifi": [3, 4, 8], "meq_r": 3, "retrograd": [3, 6], "posvel": 3, "represent": [4, 8, 9], "specif": [4, 8], "point": [4, 6, 8, 9], "time": [4, 6, 7, 8], "futur": [4, 8], "past": [4, 8], "rather": [4, 8], "confus": [4, 8], "opt": [4, 8], "offer": [4, 8], "dedic": [4, 7, 8], "call": [4, 9], "simpl": [4, 7, 8, 9], "interfac": [4, 8], "under": [4, 8], "hood": [4, 8], "seamlessli": [4, 8], "both": [4, 8], "c": [4, 8, 9], "std": [4, 8], "chrono": [4, 8], "librari": [4, 5, 8], "python": [4, 8, 9], "datetim": 4, "modul": [4, 8], "julian": [4, 10], "date": [4, 10], "repres": [4, 8, 9], "sinc": 4, "start": [4, 7, 10], "2000": [4, 8], "doe": [4, 8, 9], "account": [4, 8], "leap": [4, 8], "If": [4, 8, 9], "wish": [4, 8], "exact": [4, 8], "iso": [4, 8], "8601": [4, 8], "some": [4, 8, 9, 10], "includ": [4, 8], "he": [4, 8], "have": [4, 7, 8], "offset": [4, 8], "himself": [4, 8], "As": [4, 8], "2023": [4, 8], "thi": [4, 8, 9], "mai": [4, 7, 8, 9, 10], "maximum": [4, 6, 8], "28": [4, 8], "more": [4, 5, 8, 9], "info": [4, 8, 9], "when": [4, 8, 10], "julian_typ": [4, 8], "mjd2000": [4, 8], "construct": [4, 6, 8, 9, 11], "refer": [4, 9], "jd": [4, 8], "mjd": [4, 8], "12": [4, 8], "01": [4, 8], "13t07": 4, "00": [4, 8], "000000": [4, 8], "string_format": 4, "string": [4, 8, 9], "14t00": 4, "000001": 4, "year": [4, 8], "month": [4, 8], "13t00": 4, "format": 4, "static": 4, "now": [4, 8], "current": [4, 8], "utc": [4, 8], "__init__": 4, "coolbox": 5, "develop": 5, "european": 5, "space": [5, 7, 9], "agenc": 5, "advanc": 5, "concept": 5, "team": 5, "Its": 5, "main": [5, 9], "purpos": 5, "fast": 5, "prototyp": 5, "research": 5, "idea": 5, "interplanetari": 5, "trajectori": 5, "At": [5, 7], "core": [5, 9], "effici": 5, "algorithm": 5, "solv": [5, 6, 7], "multipl": [5, 6], "revolut": [5, 6], "problem": [5, 6, 9], "low": [5, 7], "thrust": 5, "asteroid": 5, "randezv": 5, "jpl": 5, "spice": 5, "sgp4": 5, "propag": 5, "heyoka": 5, "taylor": 5, "integr": 5, "suit": 5, "ha": 5, "been": 5, "dure": [5, 9], "differ": [5, 8], "optim": 5, "competit": 5, "gtoc": 5, "sever": 5, "paper": 5, "preliminari": 5, "mission": 5, "scenario": 5, "argo": 5, "cubesat": 5, "phase": 5, "studi": 5, "titan": 5, "enceladu": 5, "tandem": 5, "analysi": 5, "hera": 5, "api": 5, "tutori": 5, "basic": [5, 8, 9], "rf": 6, "tof": 6, "mu": [6, 9], "cw": 6, "fals": [6, 9], "max_rev": 6, "r1": 6, "1d": 6, "compon": 6, "first": [6, 9], "x": 6, "y": 6, "z": 6, "r2": 6, "xf": 6, "yf": 6, "zf": 6, "tot": 6, "flight": [6, 7], "bool": [6, 9], "motion": 6, "clockwis": 6, "comput": [6, 7, 9, 10], "consist": [6, 7], "multirev": 6, "upon": 6, "solut": 6, "store": [6, 9], "data": 6, "r0": 6, "lp": 6, "get_v": 6, "1028493158958256e": 6, "16": 6, "0000000000000002": 6, "get_nmax": 6, "iter": 6, "get_it": 6, "get_mu": 6, "attract": [6, 9], "bodi": [6, 9], "get_rf": 6, "get_r": 6, "get_tof": 6, "between": [6, 7, 8, 9], "two": 6, "get_vf": 6, "get_x": 6, "along": 6, "curv": 6, "typic": 7, "mechan": 7, "indic": 7, "them": 7, "throughout": 7, "code": 7, "document": [7, 9], "mostli": 7, "To": 7, "keep": 7, "our": 7, "scheme": 7, "do": 7, "capit": 7, "letter": 7, "so": 7, "transform": 7, "must": [7, 9], "singl": 7, "write": 7, "necessari": 7, "all": 7, "link": 7, "each": [7, 10], "other": [7, 9], "through": 7, "algebra": 7, "explicit": 7, "implicit": 7, "most": [7, 10], "famou": 7, "kepler": 7, "here": 7, "briefli": [7, 8], "showcas": 7, "matplotlib": 7, "pyplot": 7, "plt": 7, "consid": [7, 8, 9], "satellit": 7, "ellipt": 7, "relat": 7, "rel": 7, "print": [7, 8], "39017524962497735": 7, "same": 7, "note": 7, "subscript": 7, "fig": 7, "figur": 7, "figsiz": 7, "plot": 7, "xlabel": 7, "ylabel": 7, "final": 7, "want": 7, "comut": 7, "speed": 7, "100000": 7, "1e7": 7, "perf_count": 7, "rang": 7, "0f": 7, "3762799": 7, "take": 8, "care": 8, "show": 8, "creat": 8, "four": 8, "wai": 8, "pass": 8, "histor": 8, "directli": 8, "request": 8, "specifi": 8, "othewis": 8, "context": 8, "arithmet": 8, "alwai": 8, "01t00": 8, "durat": 8, "ep": [8, 9], "screen": 8, "explicitli": 8, "mention": 8, "type": [8, 9], "than": 8, "2460676": 8, "5000000": 8, "2025": 8, "correspond": [8, 9], "16t08": 8, "33": 8, "53": 8, "097468": 8, "28t00": 8, "02": 8, "120000": 8, "builtin": 8, "dt": 8, "2033": 8, "11": 8, "hour": 8, "minut": 8, "22": 8, "microsecond": 8, "14532": 8, "12t12": 8, "014532": 8, "63913": 8, "51541683486": 8, "addit": 8, "subtract": 8, "timedelta": 8, "assum": 8, "21": 8, "2353525": 8, "interpret": 8, "22t05": 8, "38": 8, "54": 8, "456000": 8, "comparison": 8, "oper": 8, "turn": 8, "handi": 8, "udpla": [9, 11], "eras": 9, "gener": 9, "move": 9, "anyth": 9, "frame": 9, "order": 9, "whose": 9, "describ": 9, "properti": 9, "ephemerid": 9, "possibli": 9, "etc": 9, "short": 9, "onc": 9, "instanc": 9, "everi": 9, "least": 9, "def": 9, "eph": 9, "self": 9, "expect": 9, "chosen": 9, "inform": 9, "how": [9, 10], "should": 9, "detail": 9, "mandatori": 9, "abov": 9, "minim": 9, "could": 9, "actual": 9, "just": 9, "fix": 9, "zero": 9, "complex": 9, "get_mu_central_bodi": 9, "get_mu_self": 9, "get_radiu": 9, "get_safe_radiu": 9, "period": 9, "elements_typ": 9, "get_nam": 9, "get_extra_info": 9, "option": 9, "either": 9, "rais": 9, "notimplementederror": 9, "unspecifi": 9, "ani": 9, "thrown": 9, "udp": 9, "invok": 9, "deep": 9, "copi": 9, "constructor": 9, "underli": 9, "failur": 9, "intersect": 9, "error": 9, "mismatch": 9, "signatur": 9, "el_ti": 9, "output": 9, "otherwis": 9, "extract": 9, "t": 9, "within": 9, "behaviour": 9, "depend": 9, "oppos": 9, "expos": 9, "without": 9, "none": 9, "fail": [9, 10], "typeerror": 9, "pla": 9, "jpl_lp": 9, "my_udpla": 9, "pla2": 9, "p2": 9, "__main__": 9, "0x7ff68b63d210": 9, "0x7f8f7241c350": 9, "extra": 9, "empti": 9, "contain": 9, "str": 9, "si": 9, "central": 9, "base": 9, "averag": 9, "safe": 9, "mainli": 9, "planetari": 9, "fly": 9, "manouvr": 9, "atmospher": 9, "circumv": 9, "radiat": 9, "environ": 9, "is_": 9, "check": 9, "compar": 9, "whether": 9, "sqrt": 9, "launch": 10, "onlin": 10, "interact": 10, "notebook": 10, "thank": 10, "infrastructur": 10, "binder": 10, "look": 10, "rocket": 10, "icon": 10, "top": 10, "page": 10, "featur": 10, "avail": 10, "yet": 10, "latest": 10, "stabl": 10, "releas": 10, "might": 10, "execut": 10, "correctli": 10, "get": 10, "gist": 10, "work": 10, "deal": 10, "notat": 10, "moot": 11}, "objects": {"pykep": [[0, 0, 1, "", "e2f"], [0, 0, 1, "", "e2f_v"], [0, 0, 1, "", "e2m"], [0, 0, 1, "", "e2m_v"], [3, 1, 1, "", "el_type"], [4, 1, 1, "", "epoch"], [3, 0, 1, "", "eq2ic"], [3, 0, 1, "", "eq2par"], [0, 0, 1, "", "f2e"], [0, 0, 1, "", "f2e_v"], [0, 0, 1, "", "f2h"], [0, 0, 1, "", "f2h_v"], [0, 0, 1, "", "f2m"], [0, 0, 1, "", "f2m_v"], [0, 0, 1, "", "f2n"], [0, 0, 1, "", "f2n_v"], [0, 0, 1, "", "f2zeta"], [0, 0, 1, "", "f2zeta_v"], [0, 0, 1, "", "h2f"], [0, 0, 1, "", "h2f_v"], [0, 0, 1, "", "h2n"], [0, 0, 1, "", "h2n_v"], [3, 0, 1, "", "ic2eq"], [3, 0, 1, "", "ic2par"], [6, 1, 1, "", "lambert_problem"], [0, 0, 1, "", "m2e"], [0, 0, 1, "", "m2e_v"], [0, 0, 1, "", "m2f"], [0, 0, 1, "", "m2f_v"], [0, 0, 1, "", "n2f"], [0, 0, 1, "", "n2f_v"], [0, 0, 1, "", "n2h"], [0, 0, 1, "", "n2h_v"], [3, 0, 1, "", "par2eq"], [3, 0, 1, "", "par2ic"], [9, 1, 1, "", "planet"], [0, 0, 1, "", "zeta2f"], [0, 0, 1, "", "zeta2f_v"]], "pykep.epoch": [[4, 2, 1, "", "__init__"], [4, 2, 1, "", "jd"], [4, 2, 1, "", "julian_type"], [4, 2, 1, "", "mjd"], [4, 2, 1, "", "mjd2000"], [4, 2, 1, "", "now"], [4, 2, 1, "", "string_format"]], "pykep.lambert_problem": [[6, 2, 1, "", "get_Nmax"], [6, 2, 1, "", "get_iters"], [6, 2, 1, "", "get_mu"], [6, 2, 1, "", "get_rf"], [6, 2, 1, "", "get_rs"], [6, 2, 1, "", "get_tof"], [6, 2, 1, "", "get_vf"], [6, 2, 1, "", "get_vs"], [6, 2, 1, "", "get_x"]], "pykep.planet": [[9, 2, 1, "", "elements"], [9, 2, 1, "", "extract"], [9, 2, 1, "", "get_extra_info"], [9, 2, 1, "", "get_mu_central_body"], [9, 2, 1, "", "get_mu_self"], [9, 2, 1, "", "get_name"], [9, 2, 1, "", "get_radius"], [9, 2, 1, "", "get_safe_radius"], [9, 2, 1, "", "is_"], [9, 2, 1, "", "period"]], "pykep.udpla": [[11, 1, 1, "", "keplerian"], [11, 1, 1, "", "null_udpla"]]}, "objtypes": {"0": "py:function", "1": "py:class", "2": "py:method"}, "objnames": {"0": ["py", "function", "Python function"], "1": ["py", "class", "Python class"], "2": ["py", "method", "Python method"]}, "titleterms": {"anomali": [0, 7], "convers": 0, "normal": 0, "vector": 0, "api": 1, "content": [1, 5], "global": 2, "constant": 2, "pykep": [2, 5, 7], "orbit": 3, "element": 3, "epoch": [4, 8], "class": [4, 6, 9], "welcom": 5, "": 5, "document": 5, "lambert": 6, "The": [7, 8], "variou": 7, "julian": 8, "date": 8, "datetim": 8, "interoper": 8, "math": 8, "planet": [9, 11], "tutori": 10, "basic": 10, "list": 11, "implement": 11}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 8, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 57}, "alltitles": {"Anomalies Conversions": [[0, "anomalies-conversions"]], "Normal": [[0, "normal"]], "Vectorized": [[0, "vectorized"]], "API": [[1, "api"]], "Contents": [[1, null], [5, null]], "Global constants": [[2, "global-constants"]], "Pykep global constants": [[2, "id1"]], "Orbital Elements": [[3, "orbital-elements"]], "Epoch class": [[4, "epoch-class"]], "Welcome to pykep\u2019s documentation!": [[5, "welcome-to-pykep-s-documentation"]], "Lambert class": [[6, "lambert-class"]], "The various anomalies in pykep": [[7, "the-various-anomalies-in-pykep"]], "Epochs and Julian Dates": [[8, "epochs-and-julian-dates"]], "Julian dates": [[8, "julian-dates"]], "Datetime interoperability": [[8, "datetime-interoperability"]], "The epoch math": [[8, "the-epoch-math"]], "Planet class": [[9, "planet-class"]], "Tutorials": [[10, "tutorials"]], "Basic": [[10, "basic"]], "List of implemented planets": [[11, "list-of-implemented-planets"]]}, "indexentries": {"e2f() (in module pykep)": [[0, "pykep.e2f"]], "e2f_v() (in module pykep)": [[0, "pykep.e2f_v"]], "e2m() (in module pykep)": [[0, "pykep.e2m"]], "e2m_v() (in module pykep)": [[0, "pykep.e2m_v"]], "f2e() (in module pykep)": [[0, "pykep.f2e"]], "f2e_v() (in module pykep)": [[0, "pykep.f2e_v"]], "f2h() (in module pykep)": [[0, "pykep.f2h"]], "f2h_v() (in module pykep)": [[0, "pykep.f2h_v"]], "f2m() (in module pykep)": [[0, "pykep.f2m"]], "f2m_v() (in module pykep)": [[0, "pykep.f2m_v"]], "f2n() (in module pykep)": [[0, "pykep.f2n"]], "f2n_v() (in module pykep)": [[0, "pykep.f2n_v"]], "f2zeta() (in module pykep)": [[0, "pykep.f2zeta"]], "f2zeta_v() (in module pykep)": [[0, "pykep.f2zeta_v"]], "h2f() (in module pykep)": [[0, "pykep.h2f"]], "h2f_v() (in module pykep)": [[0, "pykep.h2f_v"]], "h2n() (in module pykep)": [[0, "pykep.h2n"]], "h2n_v() (in module pykep)": [[0, "pykep.h2n_v"]], "m2e() (in module pykep)": [[0, "pykep.m2e"]], "m2e_v() (in module pykep)": [[0, "pykep.m2e_v"]], "m2f() (in module pykep)": [[0, "pykep.m2f"]], "m2f_v() (in module pykep)": [[0, "pykep.m2f_v"]], "n2f() (in module pykep)": [[0, "pykep.n2f"]], "n2f_v() (in module pykep)": [[0, "pykep.n2f_v"]], "n2h() (in module pykep)": [[0, "pykep.n2h"]], "n2h_v() (in module pykep)": [[0, "pykep.n2h_v"]], "zeta2f() (in module pykep)": [[0, "pykep.zeta2f"]], "zeta2f_v() (in module pykep)": [[0, "pykep.zeta2f_v"]], "el_type (class in pykep)": [[3, "pykep.el_type"]], "eq2ic() (in module pykep)": [[3, "pykep.eq2ic"]], "eq2par() (in module pykep)": [[3, "pykep.eq2par"]], "ic2eq() (in module pykep)": [[3, "pykep.ic2eq"]], "ic2par() (in module pykep)": [[3, "pykep.ic2par"]], "par2eq() (in module pykep)": [[3, "pykep.par2eq"]], "par2ic() (in module pykep)": [[3, "pykep.par2ic"]], "__init__() (pykep.epoch method)": [[4, "pykep.epoch.__init__"]], "epoch (class in pykep)": [[4, "pykep.epoch"]], "jd() (pykep.epoch method)": [[4, "pykep.epoch.jd"]], "julian_type() (pykep.epoch method)": [[4, "pykep.epoch.julian_type"]], "mjd() (pykep.epoch method)": [[4, "pykep.epoch.mjd"]], "mjd2000() (pykep.epoch method)": [[4, "pykep.epoch.mjd2000"]], "now() (pykep.epoch static method)": [[4, "pykep.epoch.now"]], "string_format() (pykep.epoch method)": [[4, "pykep.epoch.string_format"]], "get_nmax() (pykep.lambert_problem method)": [[6, "pykep.lambert_problem.get_Nmax"]], "get_iters() (pykep.lambert_problem method)": [[6, "pykep.lambert_problem.get_iters"]], "get_mu() (pykep.lambert_problem method)": [[6, "pykep.lambert_problem.get_mu"]], "get_rf() (pykep.lambert_problem method)": [[6, "pykep.lambert_problem.get_rf"]], "get_rs() (pykep.lambert_problem method)": [[6, "pykep.lambert_problem.get_rs"]], "get_tof() (pykep.lambert_problem method)": [[6, "pykep.lambert_problem.get_tof"]], "get_vf() (pykep.lambert_problem method)": [[6, "pykep.lambert_problem.get_vf"]], "get_vs() (pykep.lambert_problem method)": [[6, "pykep.lambert_problem.get_vs"]], "get_x() (pykep.lambert_problem method)": [[6, "pykep.lambert_problem.get_x"]], "lambert_problem (class in pykep)": [[6, "pykep.lambert_problem"]], "elements() (pykep.planet method)": [[9, "pykep.planet.elements"]], "extract() (pykep.planet method)": [[9, "pykep.planet.extract"]], "get_extra_info() (pykep.planet method)": [[9, "pykep.planet.get_extra_info"]], "get_mu_central_body() (pykep.planet method)": [[9, "pykep.planet.get_mu_central_body"]], "get_mu_self() (pykep.planet method)": [[9, "pykep.planet.get_mu_self"]], "get_name() (pykep.planet method)": [[9, "pykep.planet.get_name"]], "get_radius() (pykep.planet method)": [[9, "pykep.planet.get_radius"]], "get_safe_radius() (pykep.planet method)": [[9, "pykep.planet.get_safe_radius"]], "is_() (pykep.planet method)": [[9, "pykep.planet.is_"]], "period() (pykep.planet method)": [[9, "pykep.planet.period"]], "planet (class in pykep)": [[9, "pykep.planet"]], "keplerian (class in pykep.udpla)": [[11, "pykep.udpla.keplerian"]], "null_udpla (class in pykep.udpla)": [[11, "pykep.udpla.null_udpla"]]}})