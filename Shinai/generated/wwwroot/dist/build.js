"use strict";
/******/ (function (modules) {
    /******/ // The module cache
    /******/ var installedModules = {};
    /******/
    /******/ // The require function
    /******/ function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/ if (installedModules[moduleId]) {
            /******/ return installedModules[moduleId].exports;
            /******/ }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module = installedModules[moduleId] = {
            /******/ i: moduleId,
            /******/ l: false,
            /******/ exports: {}
            /******/ 
        };
        /******/
        /******/ // Execute the module function
        /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/ module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/ return module.exports;
        /******/ 
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/ __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/ __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/ __webpack_require__.d = function (exports, name, getter) {
        /******/ if (!__webpack_require__.o(exports, name)) {
            /******/ Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/ }
        /******/ 
    };
    /******/
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
        /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/ }
        /******/ Object.defineProperty(exports, '__esModule', { value: true });
        /******/ 
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/ __webpack_require__.t = function (value, mode) {
        /******/ if (mode & 1)
            value = __webpack_require__(value);
        /******/ if (mode & 8)
            return value;
        /******/ if ((mode & 4) && typeof value === 'object' && value && value.__esModule)
            return value;
        /******/ var ns = Object.create(null);
        /******/ __webpack_require__.r(ns);
        /******/ Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/ if (mode & 2 && typeof value != 'string')
            for (var key in value)
                __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
        /******/ return ns;
        /******/ 
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
        /******/ var getter = module && module.__esModule ?
            /******/ function getDefault() { return module['default']; } :
            /******/ function getModuleExports() { return module; };
        /******/ __webpack_require__.d(getter, 'a', getter);
        /******/ return getter;
        /******/ 
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/ __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
    /******/
    /******/ // __webpack_public_path__
    /******/ __webpack_require__.p = "";
    /******/
    /******/
    /******/ // Load entry module and return exports
    /******/ return __webpack_require__(__webpack_require__.s = "./wwwroot/app.js");
    /******/ 
})({
    /***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./wwwroot/components/app.vue": 
    /*!************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./wwwroot/components/app.vue ***!
      \************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        //
        //
        //
        //
        //
        //
        //
        //
        /***/ 
    }),
    /***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./wwwroot/components/application/experiment/experiment.vue": 
    /*!******************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./wwwroot/components/application/experiment/experiment.vue ***!
      \******************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        /*import moment from 'moment';*/
        exports.default = {
            name: 'experiment',
            data: function data() {
                return {
                    data: [{
                            mid: 20001,
                            date: '2018-01-23',
                            purchaseId: 1000017923,
                            transactionId: 1234435467,
                            status: 'auth',
                            currency: 'USD',
                            amount: 22.56,
                            url: 'my-little-pony.com'
                        }, {
                            mid: 2002,
                            date: '2018-01-23',
                            purchaseId: 23534345,
                            transactionId: 436534532,
                            status: 'not auth',
                            currency: 'EUR',
                            amount: -7.45,
                            url: 'dot.com'
                        }, {
                            mid: 12234,
                            date: '2018-01-23',
                            purchaseId: 3453,
                            transactionId: 436455,
                            status: 'auth',
                            currency: 'EUR',
                            amount: 7.56,
                            url: 'test.com'
                        }],
                    dateFrom: null,
                    dateTo: null,
                    testDate: new Date(),
                    pageSizes: [100, 200, 500],
                    columns: [{ id: 'mid', name: 'Merchant Id', type: 'number' }, { id: 'date', type: 'date' }, { id: 'purchaseId', type: 'number' }, { id: 'transactionId', type: 'number' }, 'status', 'currency', ['amount', 'Value', 'number'], 'url'],
                    options: ["20006 - DM Network LTD", ['20006.5 - DM dgdf LTD', 2006.5], {
                            text: "Merchants first group",
                            type: 'group',
                            selected: false,
                            items: [{
                                    text: '20007 - Quiston Limited',
                                    value: 20007,
                                    type: 'single',
                                    selected: false
                                }, {
                                    text: "20008 - SpaZar Productions",
                                    value: 20008
                                }, {
                                    text: "20009 - Leadcon Ventures Ltd",
                                    value: 20009
                                }, {
                                    text: "20010 - Schoppmann",
                                    value: 67890
                                }, {
                                    text: "20011 - Green District Online",
                                    value: 20011
                                }]
                        }, {
                            text: "Merchants second group",
                            type: 'group',
                            selected: false,
                            items: [{
                                    text: "20012 - Navesink House Ltd",
                                    value: 20012
                                }, {
                                    text: "20013 - Hampton Trading (UK) Ltd.",
                                    value: 20013
                                }, {
                                    text: "20014 - Geocomscalth",
                                    value: 20014
                                }, {
                                    text: "20015 - Alcrodant Ltd",
                                    value: 20015
                                }, {
                                    text: "20016 - Carson Investments and Finance",
                                    value: 20016
                                }]
                        }],
                    allOptionGroups: [{
                            groupHeader: "Merchants first group",
                            groupItems: [{
                                    text: "20006 - DM Network LTD",
                                    value: 20006,
                                    isSelected: false
                                }, {
                                    text: "20007 - Quiston Limited",
                                    value: 20007,
                                    isSelected: false
                                }, {
                                    text: "20008 - SpaZar Productions",
                                    value: 20008,
                                    isSelected: false
                                }, {
                                    text: "20009 - Leadcon Ventures Ltd",
                                    value: 20009,
                                    isSelected: false
                                }, {
                                    text: "20010 - Schoppmann",
                                    value: 67890,
                                    isSelected: false
                                }, {
                                    text: "20011 - Green District Online",
                                    value: 20011,
                                    isSelected: false
                                }, {
                                    text: "20012 - Navesink House Ltd",
                                    value: 20012,
                                    isSelected: false
                                }, {
                                    text: "20013 - Hampton Trading (UK) Ltd.",
                                    value: 20013,
                                    isSelected: false
                                }, {
                                    text: "20014 - Geocomscalth",
                                    value: 20014,
                                    isSelected: false
                                }, {
                                    text: "20015 - Alcrodant Ltd",
                                    value: 20015,
                                    isSelected: false
                                }, {
                                    text: "20016 - Carson Investments and Finance",
                                    value: 20016,
                                    isSelected: false
                                }]
                        }],
                    showChart: false,
                    text: ''
                };
            },
            created: function created() {
                this.addRandomData(100); // cols.reduce((a, b) => a + b, 0)
                this.addRandomDataForSelect(100);
            },
            methods: {
                test: function test() {
                    alert(this.text);
                    alert(this.dateFrom.format('MMMM D, YYYY'));
                    alert(this.dateTo.format('MMMM D, YYYY'));
                    //this.addRandomDataForSelect(100);
                },
                testSet: function testSet() {
                    this.showChart = !this.showChart;
                },
                addRandomData: function addRandomData(count) {
                    for (var i = 0; i < count; i++) {
                        this.data.push({
                            mid: this.getRandomInt(20000, 25000),
                            date: this.randomDate(new Date(2000, 1, 1, 1, 1, 1), new Date(2018, 1, 1, 1, 1, 1)),
                            purchaseId: this.getRandomInt(23452, 342355),
                            transactionId: this.getRandomInt(23452, 3243242343),
                            status: this.randomSecuence(),
                            currency: this.randomCurrency(),
                            amount: this.getRandomArbitrary(-50, 50),
                            url: this.randomUrl()
                        });
                    }
                },
                addRandomDataForSelect: function addRandomDataForSelect(count) {
                    for (var i = 0; i < count; i++) {
                        this.options.push({
                            text: 200019 + i + " - DM" + this.randomSecuence(),
                            value: 200019 + i,
                            isSelected: false
                        });
                    }
                },
                randomDate: function randomDate(start, end) {
                    var d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
                    if (month.length < 2)
                        month = '0' + month;
                    if (day.length < 2)
                        day = '0' + day;
                    return [year, month, day].join('-');
                },
                getRandomArbitrary: function getRandomArbitrary(min, max) {
                    return Math.random() * (max - min) + min;
                },
                getRandomInt: function getRandomInt(min, max) {
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                },
                randomSecuence: function randomSecuence() {
                    var things = ['rock', 'paper', 'scissor', 'test', 'what', 'best', 'wrost', 'things'];
                    var t = this.getRandomInt(3, things.length);
                    var result = "";
                    for (var i = 0; i < t; i++) {
                        result += things[Math.floor(Math.random() * things.length)] + " ";
                    }
                    return result;
                },
                randomCurrency: function randomCurrency() {
                    var things = ['USD', 'EUR', 'BTC', 'COIN', 'DOGE', 'ETH'];
                    return things[Math.floor(Math.random() * things.length)];
                },
                randomUrl: function randomUrl() {
                    var things = ['my-little-pony', 'dot', 'test', 'best-way', 'PAY'];
                    return things[Math.floor(Math.random() * things.length)] + '.com';
                },
                getDataForChart: function getDataForChart() {
                    var result = [];
                    for (var i in this.data) {
                        result.push({ x: new Date(Date.parse(this.data[i].date)), y: this.data[i].amount });
                    }
                    result.sort(function (a, b) {
                        return a.x > b.x ? 1 : a.x < b.x ? -1 : 0;
                    });
                    return result;
                }
            }
        };
        /***/ 
    }),
    /***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./wwwroot/components/application/home/home.vue": 
    /*!******************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./wwwroot/components/application/home/home.vue ***!
      \******************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        //
        //
        //
        //
        //
        exports.default = {
            name: 'home',
            created: function created() {
                this.state.base.setTitle('Home');
            }
        };
        /***/ 
    }),
    /***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./wwwroot/components/shared/s-datepicker-range/s-datepicker-range.vue": 
    /*!*****************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./wwwroot/components/shared/s-datepicker-range/s-datepicker-range.vue ***!
      \*****************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _vClickOutside = __webpack_require__(/*! v-click-outside */ "./node_modules/v-click-outside/dist/v-click-outside.min.umd.js");
        var _vClickOutside2 = _interopRequireDefault(_vClickOutside);
        var _dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
        var _dayjs2 = _interopRequireDefault(_dayjs);
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
        function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        } } //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        var DateRangeViewModel = function DateRangeViewModel(value, label) {
            _classCallCheck(this, DateRangeViewModel);
            this.value = value;
            this.label = label;
        };
        var DateRange = function DateRange(start, end) {
            _classCallCheck(this, DateRange);
            this.startDate = start;
            this.endDate = end;
        };
        var allDateRanges = {
            "TODAY": new DateRangeViewModel(new DateRange((0, _dayjs2.default)().startOf('day'), (0, _dayjs2.default)().endOf('day')), "Today"),
            "YESTERDAY": new DateRangeViewModel(new DateRange((0, _dayjs2.default)().startOf('day').add(-1, 'd'), (0, _dayjs2.default)().endOf('day').add(-1, 'd')), "Yesterday"),
            "THIS_WEEK": new DateRangeViewModel(new DateRange((0, _dayjs2.default)().startOf('day').startOf('w'), (0, _dayjs2.default)().endOf('day').endOf('w')), "This Week"),
            "LAST_WEEK": new DateRangeViewModel(new DateRange((0, _dayjs2.default)().startOf('day').add(-1, 'w').startOf('w'), (0, _dayjs2.default)().endOf('day').add(-1, 'w').endOf('w')), "Last Week"),
            "LAST_7_DAYS": new DateRangeViewModel(new DateRange((0, _dayjs2.default)().startOf('day').add(-6, 'd'), (0, _dayjs2.default)().endOf('day')), "Last 7 Days"),
            "THIS_MONTH": new DateRangeViewModel(new DateRange((0, _dayjs2.default)().startOf('day').startOf('M'), (0, _dayjs2.default)().endOf('day').endOf('M')), "This Month"),
            "LAST_MONTH": new DateRangeViewModel(new DateRange((0, _dayjs2.default)().startOf('day').add(-1, 'M').startOf('M'), (0, _dayjs2.default)().endOf('day').add(-1, 'M').endOf('M')), "Last Month"),
            "LAST_30_DAYS": new DateRangeViewModel(new DateRange((0, _dayjs2.default)().startOf('day').add(-29, 'd'), (0, _dayjs2.default)().endOf('day')), "Last 30 Days"),
            "CUSTOM_DATE_RANGE": new DateRangeViewModel(new DateRange((0, _dayjs2.default)().startOf('day'), (0, _dayjs2.default)().endOf('day')), "Custom Date Range")
        };
        exports.default = {
            name: 'datepicker-range',
            directives: {
                clickOutside: _vClickOutside2.default.directive
            },
            props: {
                startDate: {
                    type: Date,
                    required: true
                },
                endDate: {
                    type: Date,
                    required: true
                },
                dateRangeKeys: {
                    type: Array,
                    required: false,
                    default: ['TODAY', 'YESTERDAY', 'THIS_WEEK', 'LAST_WEEK', 'LAST_7_DAYS', 'THIS_MONTH', 'LAST_MONTH', 'LAST_30_DAYS', 'CUSTOM_DATE_RANGE']
                },
                initialRangeKey: {
                    type: String,
                    required: false,
                    default: 'TODAY'
                }
            },
            data: function data() {
                return {
                    expanded: false,
                    availableDateRanges: [],
                    selectedDateRange: undefined
                };
            },
            created: function created() {
                if (!this.startDate) {
                    this.selectedDateRange = (allDateRanges[this.initialRangeKey] || allDateRanges['TODAY']).value;
                    this.startDate = this.selectedDateRange.startDate;
                    this.endDate = this.selectedDateRange.endDate;
                }
                else {
                    if (!_dayjs2.default.isDayjs(this.startDate)) {
                        this.startDate = (0, _dayjs2.default)(this.startDate);
                    }
                    if (!this.endDate) {
                        this.endDate = this.startDate.clone().endOf('d');
                    }
                    else if (!_dayjs2.default.isDayjs(this.endDate)) {
                        this.endDate = (0, _dayjs2.default)(this.endDate);
                    }
                    this.selectedDateRange = new DateRange(this.startDate, this.endDate);
                }
                this.updateParentDate();
                for (var i in this.dateRangeKeys) {
                    var key = this.dateRangeKeys[i];
                    var dateRange = allDateRanges[key];
                    if (dateRange) {
                        dateRange.value.key = key;
                        this.availableDateRanges.push(dateRange);
                    }
                }
            },
            methods: {
                hide: function hide() {
                    this.expanded = false;
                },
                isSelected: function isSelected(dateRange) {
                    return this.selectedDateRange == dateRange;
                },
                selectDateRange: function selectDateRange(dateRange) {
                    this.selectedDateRange = dateRange;
                    if (dateRange.key != 'CUSTOM_DATE_RANGE') {
                        this.startDate = dateRange.startDate.clone();
                        this.endDate = dateRange.endDate.clone();
                        this.updateParentDate();
                        this.hide();
                    }
                },
                updateParentDate: function updateParentDate() {
                    this.$emit('update:startDate', this.startDate);
                    this.$emit('update:endDate', this.endDate);
                }
            }
        };
        /***/ 
    }),
    /***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./wwwroot/components/shared/s-datepicker/s-datepicker.vue": 
    /*!*****************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./wwwroot/components/shared/s-datepicker/s-datepicker.vue ***!
      \*****************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _dayjs = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
        var _dayjs2 = _interopRequireDefault(_dayjs);
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
        exports.default = {
            name: "datepicker",
            props: {
                date: {
                    type: Date,
                    required: true
                },
                additionalDate: {
                    type: Date,
                    required: false
                },
                allowRange: {
                    type: Boolean,
                    required: false,
                    default: false
                },
                showNow: {
                    type: Boolean,
                    required: false,
                    default: true
                },
                allowArrow: {
                    type: Object,
                    required: false,
                    default: {
                        previous: true,
                        next: true
                    }
                },
                dateBorder: {
                    type: Object,
                    required: false,
                    default: {
                        start: undefined,
                        end: undefined
                    }
                },
                supportedLevels: {
                    type: Array,
                    required: false,
                    default: ['DECAD', 'YEAR', 'MONTH', 'DAY']
                }
            },
            data: function data() {
                return {
                    currentLevel: 'DAY'
                };
            },
            created: function created() {
                if (!this.date) {
                    this.date = (0, _dayjs2.default)();
                }
                else {
                    this.date = (0, _dayjs2.default)(this.date);
                }
                if (this.allowRange && !this.additionalDate) {
                    this.additionalDate = this.date.clone();
                }
                this.additionalDate = (0, _dayjs2.default)(this.additionalDate);
            },
            methods: {
                formatDateOnCurrentLevel: function formatDateOnCurrentLevel() {
                    var date = (0, _dayjs2.default)(this.date).clone();
                    console.log(date);
                    switch (this.currentLevel) {
                        case 'DAY':
                            return date.clone().format('MMM, YYYY');
                        case 'MONTH':
                            return date.clone().format('YYYY');
                        case 'YEAR':
                            var decade = this.getDecade(date);
                            return decade.start.format('YYYY') + ' - ' + decade.end.format('YYYY');
                        case 'DECAD':
                            var century = this.getCentury(date);
                            return century.start.format('YYYY') + ' - ' + century.end.format('YYYY');
                    }
                },
                getDecade: function getDecade(date) {
                    var year = date.clone().format('YYYY');
                    year[3] = '0';
                    var startDecade = (0, _dayjs2.default)().year(+year).startOf('y').startOf('M').startOf('w').startOf('d');
                    return {
                        start: startDecade,
                        end: startDecade.add(9, 'y')
                    };
                },
                getCentury: function getCentury(date) {
                    var year = date.clone().format('YYYY');
                    var _ref = ['0', '0'];
                    year[3] = _ref[0];
                    year[2] = _ref[1];
                    var startCentury = (0, _dayjs2.default)().year(+year).startOf('y').startOf('M').startOf('w').startOf('d');
                    return {
                        start: startCentury,
                        end: startCentury.add(99, 'y')
                    };
                },
                getBordersInCurrentDate: function getBordersInCurrentDate() {
                    var date = this.date.clone();
                    switch (this.currentLevel) {
                        case 'DAY':
                            return {
                                startDateFocused: date.clone().startOf('month'),
                                endDateFocused: date.clone().endOf('month'),
                                startDateBlock: date.clone().startOf('month').set('day', 0),
                                endDateBlock: date.clone().endOf('month').add(7, 'day').set('day', 6),
                                iterator: {
                                    key: 'day',
                                    value: 1
                                }
                            };
                        case 'MONTH':
                            return {
                                startDateFocused: date.clone().startOf('year'),
                                endDateFocused: date.clone().endOf('year'),
                                startDateBlock: date.clone().startOf('year'),
                                endDateBlock: date.clone().endOf('year'),
                                iterator: {
                                    key: 'month',
                                    value: 1
                                }
                            };
                        case 'YEAR':
                            var decade = this.getDecade(date);
                            return {
                                startDateFocused: decade.start,
                                endDateFocused: decade.end,
                                startDateBlock: decade.start.clone().add(-1, 'year'),
                                endDateBlock: decade.end.clone().add(1, 'year'),
                                iterator: {
                                    key: 'year',
                                    value: 1
                                }
                            };
                        case 'DECAD':
                            var century = this.getCentury(date);
                            return {
                                startDateFocused: century.start,
                                endDateFocused: century.end,
                                startDateBlock: century.start.clone().add(-10, 'year'),
                                endDateBlock: century.end.clone().add(10, 'year'),
                                iterator: {
                                    key: 'year',
                                    value: 10
                                }
                            };
                    }
                },
                getItemsInCurrentDate: function getItemsInCurrentDate() {
                    var result = [];
                    var date = this.date.clone();
                    var borders = this.getBordersInCurrentDate();
                    for (var currentDate = borders.startDateBlock; currentDate.isBefore(borders.endDateBlock.add(1, 'ms')); currentDate = currentDate.clone().add(borders.iterator.value, borders.iterator.key)) {
                        var dateFormat = this.getDateFormat();
                        var text = "";
                        if (this.currentLevel == 'DECAD') {
                            text = currentDate.format(dateFormat) + ' - ' + currentDate.clone().add(9, 'year').format(dateFormat);
                        }
                        else {
                            text = currentDate.format(dateFormat);
                        }
                        var value = currentDate.clone();
                        result.push({
                            type: this.currentLevel,
                            text: text,
                            value: value,
                            selected: this.isSelected(currentDate),
                            focused: currentDate.isBefore(borders.endDateFocused.add(1, 'ms')) && currentDate.isAfter(borders.startDateFocused.add(-1, 'ms'))
                        });
                    }
                    return result;
                },
                getDateFormat: function getDateFormat() {
                    switch (this.currentLevel) {
                        case 'DAY':
                            return 'DD';
                        case 'MONTH':
                            return 'MM';
                        case 'YEAR':
                        case 'DECAD':
                            return 'YYYY';
                    }
                },
                isSelected: function isSelected(date) {
                    switch (this.currentLevel) {
                        case 'DAY':
                            return date.format("YYYY, MM, DD") == this.date.clone().format("YYYY, MM, DD");
                        case 'MONTH':
                            return date.format("YYYY, MM") == this.date.clone().format("YYYY, MM");
                        case 'YEAR':
                        case 'DECAD':
                            return date.format("YYYY") == this.date.clone().format("YYYY");
                    }
                },
                currentLevelIsDay: function currentLevelIsDay() {
                    return this.currentLevel == 'DAY';
                },
                currentLevelIsMonth: function currentLevelIsMonth() {
                    return this.currentLevel == 'MONTH';
                },
                currentLevelIsYear: function currentLevelIsYear() {
                    return this.currentLevel == 'YEAR';
                },
                currentLevelIsDecad: function currentLevelIsDecad() {
                    return this.currentLevel == 'DECAD';
                }
            }
        }; //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        //
        /***/ 
    }),
    /***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./wwwroot/components/shared/s-checkbox/s-checkbox.js": 
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./wwwroot/components/shared/s-checkbox/s-checkbox.js ***!
      \**********************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        } return target; };
        var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
        exports.default = {
            props: {
                value: {
                    required: true,
                    type: Boolean
                },
                callback: {
                    required: false,
                    type: Function
                }
            },
            computed: _extends({}, (0, _vuex.mapState)({
                styleClass: function styleClass(state) {
                    return state.base.styleClass;
                }
            })),
            methods: {
                onValueChange: function onValueChange() {
                    this.value = !this.value;
                    this.$emit('update:value', this.value);
                    if (this.callback) {
                        this.callback(this.value);
                    }
                    this.$forceUpdate();
                }
            }
        };
        /***/ 
    }),
    /***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./wwwroot/components/shared/s-material-input/s-material-input.js": 
    /*!**********************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./wwwroot/components/shared/s-material-input/s-material-input.js ***!
      \**********************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        } return target; };
        var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
        exports.default = {
            props: {
                value: {
                    type: String,
                    required: true
                },
                callback: {
                    type: Function,
                    required: false
                }
            },
            computed: _extends({}, (0, _vuex.mapState)({
                styleClass: function styleClass(state) {
                    return state.base.styleClass;
                }
            })),
            methods: {
                onValueChange: function onValueChange() {
                    this.$emit('update:value', this.value);
                    if (this.callback) {
                        this.callback(this.value);
                    }
                    this.$forceUpdate();
                }
            }
        };
        /***/ 
    }),
    /***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./wwwroot/components/shared/s-nav-menu-item/s-nav-menu-item.js": 
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./wwwroot/components/shared/s-nav-menu-item/s-nav-menu-item.js ***!
      \********************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        } return target; };
        var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
        exports.default = {
            props: {
                'data': {
                    type: Object,
                    required: true
                }
            },
            computed: _extends({}, (0, _vuex.mapState)({
                styleClass: function styleClass(state) {
                    return state.base.styleClass;
                }
            }), {
                items: function items() {
                    return this.data.children.map(function (x) {
                        if (!x.type) {
                            x.type = 'single';
                        }
                        return x;
                    });
                }
            }),
            methods: {
                show: function show() {
                    this.data.show = true;
                    this.$forceUpdate();
                },
                hide: function hide() {
                    this.data.show = false;
                    this.$forceUpdate();
                }
            }
        };
        /***/ 
    }),
    /***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./wwwroot/components/shared/s-nav-menu/s-nav-menu.js": 
    /*!**********************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./wwwroot/components/shared/s-nav-menu/s-nav-menu.js ***!
      \**********************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        } return target; };
        var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
        exports.default = {
            data: function data() {
                return {
                    headerItems: {
                        'performanceReporting': {
                            name: 'Performance Reporting',
                            type: 'group',
                            children: [{
                                    name: 'Sales Reporting',
                                    type: 'group',
                                    children: [{
                                            name: 'Transaction Summary',
                                            url: '#'
                                        }, {
                                            name: 'Transaction Detail Report',
                                            url: '#'
                                        }, {
                                            name: 'Approval Rates',
                                            url: '#'
                                        }, {
                                            name: 'Sales by Country',
                                            url: '#'
                                        }]
                                }, {
                                    name: 'Declined Transactions',
                                    url: '#',
                                    current: true
                                }, {
                                    name: 'Member Reports',
                                    type: 'group',
                                    children: [{
                                            name: 'Scheduled Rebills',
                                            url: '#'
                                        }, {
                                            name: 'Active Members',
                                            url: '#'
                                        }]
                                }, {
                                    name: 'Conversions',
                                    url: '#'
                                }]
                        },
                        'myWebsites': {
                            name: 'My Websites',
                            type: 'group',
                            children: [{
                                    name: 'Websites',
                                    url: '#'
                                }, {
                                    name: 'Price Points',
                                    url: '#'
                                }, {
                                    name: 'Country Block',
                                    url: '#'
                                }, {
                                    name: 'Postbacks',
                                    url: '#'
                                }, {
                                    name: 'Packages',
                                    type: 'group',
                                    children: [{
                                            name: 'Manage Packages',
                                            url: '#'
                                        }, {
                                            name: 'NATS Config',
                                            url: '#'
                                        }]
                                }, {
                                    name: 'Retention Offers',
                                    type: 'group',
                                    children: [{
                                            name: 'Retention Offers Report',
                                            url: '#'
                                        }, {
                                            name: 'Retention Offers Report',
                                            url: '#'
                                        }, {
                                            name: 'Reactivation',
                                            url: '#'
                                        }]
                                }]
                        },
                        'financialDetails': {
                            name: 'Financial Details',
                            type: 'group',
                            children: [{
                                    name: 'Payout Configuration',
                                    url: '#'
                                }, {
                                    name: 'Chargeback Report',
                                    url: '#'
                                }, {
                                    name: 'Invoice Report',
                                    url: '#'
                                }, {
                                    name: 'Payout Reporting',
                                    type: 'group',
                                    children: [{
                                            name: 'Detail Ledger Report',
                                            url: '#'
                                        }, {
                                            name: 'Daily Revenue Report',
                                            url: '#'
                                        }, {
                                            name: 'Statement Report',
                                            url: '#'
                                        }, {
                                            name: 'Payout Balance Report',
                                            url: '#'
                                        }]
                                }, {
                                    name: 'Reserves Report',
                                    url: '#'
                                }]
                        },
                        'myConsumers': {
                            name: 'My Consumers',
                            type: 'group',
                            children: [{
                                    name: 'Refund Void Reasons',
                                    url: '#'
                                }, {
                                    name: 'Manage Consumers',
                                    url: '#'
                                }, {
                                    name: 'Recent Cancel/Expire',
                                    url: '#'
                                }, {
                                    name: 'Custom Cancel Reasons',
                                    url: '#'
                                }]
                        }
                    }
                };
            },
            computed: _extends({}, (0, _vuex.mapState)({
                styleClass: function styleClass(state) {
                    return state.base.styleClass;
                }
            }))
        };
        /***/ 
    }),
    /***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./wwwroot/components/shared/s-select/s-select.js": 
    /*!******************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./wwwroot/components/shared/s-select/s-select.js ***!
      \******************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        } return target; };
        var _fuse = __webpack_require__(/*! fuse.js */ "./node_modules/fuse.js/dist/fuse.js");
        var _fuse2 = _interopRequireDefault(_fuse);
        var _vClickOutside = __webpack_require__(/*! v-click-outside */ "./node_modules/v-click-outside/dist/v-click-outside.min.umd.js");
        var _vClickOutside2 = _interopRequireDefault(_vClickOutside);
        var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
        var settingsFuse = {
            shouldSort: true,
            includeScore: true,
            threshold: 0.3,
            location: 0,
            distance: 100,
            maxPatternLength: 32,
            minMatchCharLength: 1,
            keys: ["text"]
        };
        exports.default = {
            directives: {
                clickOutside: _vClickOutside2.default.directive
            },
            model: {},
            props: {
                allOptionGroups: {
                    type: Array,
                    required: true
                },
                defaultTitle: {
                    type: String,
                    required: true
                },
                multipleSelectedTitleChunk: {
                    type: String,
                    required: true
                },
                allowMultiple: {
                    type: Boolean,
                    default: true
                }
            },
            data: function data() {
                return {
                    selectedIds: [],
                    optionGroups: this.allOptionGroups,
                    title: this.defaultTitle,
                    isExpanded: false,
                    isAllOptionsSelected: false,
                    groupToIsAllOptionsSelectedMap: {},
                    totalOptionsCount: 0,
                    searchString: "",
                    matchedItems: [],
                    allSelected: false
                };
            },
            computed: _extends({}, (0, _vuex.mapState)({
                styleClass: function styleClass(state) {
                    return state.base.styleClass;
                }
            }), {
                options: function options() {
                    var self = this;
                    return this.mapInputOptions(this.allOptionGroups);
                },
                allowAnimationForList: function allowAnimationForList() {
                    console.log(this.$data);
                    console.log(this.$props);
                    return this.options.length < 300;
                }
            }),
            methods: {
                /* MAPPERS */
                mapInputOptions: function mapInputOptions(options) {
                    var result = [];
                    for (var i in options) {
                        var option = options[i];
                        switch (typeof option === 'undefined' ? 'undefined' : _typeof(option)) {
                            case 'string':
                                result.push({
                                    text: option,
                                    value: option,
                                    selected: false,
                                    type: 'single'
                                });
                                break;
                            case 'object':
                                if (Array.isArray(option)) {
                                    result.push({
                                        text: option[0],
                                        value: option[1] || option[0],
                                        selected: option[2] || false,
                                        type: 'single'
                                    });
                                }
                                else {
                                    result.push({
                                        text: option.text,
                                        value: option.value || option.text,
                                        selected: !!option.isSelected,
                                        type: option.type || 'single',
                                        items: option.type == 'group' ? this.mapInputOptions(option.items) : undefined
                                    });
                                }
                                break;
                        }
                    }
                    return result;
                },
                getSelected: function getSelected(options) {
                    var result = [];
                    for (var i in options) {
                        var option = options[i];
                        if (option.type == 'single') {
                            if (option.selected) {
                                result.push(option);
                            }
                        }
                        else if (option.type == 'group') {
                            if (option.items) {
                                result.push.apply(result, this.getSelected(option.items));
                            }
                        }
                    }
                    return result;
                },
                /* SELECT STATE */
                setSelectStateForAll: function setSelectStateForAll(newState) {
                    this.options.forEach(function (x) {
                        x.selected = newState;
                        if (x.type == 'group') {
                            x.items.forEach(function (y) {
                                return y.selected = newState;
                            });
                        }
                    });
                    this.updateTitle();
                    this.$forceUpdate();
                },
                setSelectStateForGroup: function setSelectStateForGroup(newState, group) {
                    group.selected = newState;
                    group.items.forEach(function (x) {
                        return x.selected = newState;
                    });
                    this.allSelected = this.options.every(function (x) {
                        return x.selected;
                    });
                    this.updateTitle();
                    this.$forceUpdate();
                },
                selectStateChanged: function selectStateChanged() {
                    var allSelected = true;
                    this.options.forEach(function (x) {
                        if (x.type == 'group') {
                            x.selected = (x.items || []).every(function (y) {
                                return y.selected;
                            });
                        }
                        allSelected = allSelected && x.selected;
                    });
                    this.allSelected = allSelected;
                    this.updateTitle();
                    this.$forceUpdate();
                },
                /* FILTER */
                filter: function filter(option) {
                    if (!this.searchString || option.selected) {
                        return true;
                    }
                    if (this.isGroup(option)) {
                        if (!option.items) {
                            return false;
                        }
                        var self = this;
                        return option.items.some(function (x) {
                            return self.match(x);
                        });
                    }
                    else if (this.isSingle(option)) {
                        return this.match(option);
                    }
                },
                match: function match(option) {
                    return option.text.includes(this.searchString);
                    /*let fuse = new Fuse([option], settingsFuse);
           let result = fuse.search(this.searchString);
           return result.length > 0;*/
                },
                /* CHECKERS */
                isSingle: function isSingle(option) {
                    return option.type == 'single';
                },
                isGroup: function isGroup(option) {
                    return option.type == 'group';
                },
                /* OTHER */
                changeIsExpandedState: function changeIsExpandedState() {
                    this.isExpanded = !this.isExpanded;
                },
                updateTitle: function updateTitle() {
                    var selected = this.getSelected(this.options);
                    console.log(selected);
                    if (selected.length == 0 || !selected) {
                        this.title = this.defaultTitle;
                    }
                    if (selected.length == 1) {
                        this.title = '' + selected[0].text;
                    }
                    else {
                        this.title = selected.length + ' ' + this.multipleSelectedTitleChunk;
                    }
                },
                hide: function hide(event, element) {
                    if (event.target.className == "overSelect") {
                        return;
                    }
                    if (this.isExpanded) {
                        this.isExpanded = false;
                    }
                }
            }
        };
        /***/ 
    }),
    /***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./wwwroot/components/shared/s-side-nav-menu/s-side-nav-menu.js": 
    /*!********************************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./wwwroot/components/shared/s-side-nav-menu/s-side-nav-menu.js ***!
      \********************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        } return target; };
        var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
        exports.default = {
            props: {
                items: {
                    type: Array,
                    required: true
                },
                show: {
                    type: Boolean,
                    required: false,
                    default: true
                }
            },
            data: function data() {
                return {};
            },
            computed: _extends({}, (0, _vuex.mapState)({
                styleClass: function styleClass(state) {
                    return state.base.styleClass;
                }
            }), {
                navMenuItems: function navMenuItems() {
                    return this.items.map(function (x) {
                        var type = x.type || 'single';
                        x.type = type;
                        x.show = x.show == undefined && type == 'group' ? x.children.filter(function (x) {
                            return x.current;
                        }).length > 0 : x.show;
                        return x;
                    });
                }
            }),
            methods: {
                showHide: function showHide(item) {
                    item.show = !item.show;
                    for (var i in this.navMenuItems) {
                        if (this.navMenuItems[i] != item) {
                            this.navMenuItems[i].show = false;
                        }
                    }
                    this.$forceUpdate();
                }
            }
        };
        /***/ 
    }),
    /***/ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./wwwroot/components/shared/s-table/s-table.js": 
    /*!****************************************************************************************************************************************************!*\
      !*** ./node_modules/babel-loader/lib?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./wwwroot/components/shared/s-table/s-table.js ***!
      \****************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        } return target; };
        var _sTableFunctions = __webpack_require__(/*! ./s-table.functions.js */ "./wwwroot/components/shared/s-table/s-table.functions.js");
        var _sTableGates = __webpack_require__(/*! ./s-table.gates.js */ "./wwwroot/components/shared/s-table/s-table.gates.js");
        var _sTableData = __webpack_require__(/*! ./s-table.data.js */ "./wwwroot/components/shared/s-table/s-table.data.js");
        var _vClickOutside = __webpack_require__(/*! v-click-outside */ "./node_modules/v-click-outside/dist/v-click-outside.min.umd.js");
        var _vClickOutside2 = _interopRequireDefault(_vClickOutside);
        var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
        exports.default = {
            directives: {
                clickOutside: _vClickOutside2.default.directive,
                scroll: {
                    inserted: function inserted(el, binding) {
                        var f = function f(evt) {
                            if (binding.value(evt, el)) {
                                window.removeEventListener('scroll', f);
                            }
                        };
                        window.addEventListener('scroll', f);
                    }
                }
            },
            props: {
                items: {
                    type: Array,
                    required: true
                },
                columns: {
                    type: Array,
                    required: true
                },
                filtrable: {
                    type: Boolean,
                    default: true,
                    required: false
                },
                sortable: {
                    type: Boolean,
                    default: true,
                    required: false
                },
                groupable: {
                    type: Boolean,
                    default: true,
                    required: false
                },
                movable: {
                    type: Boolean,
                    default: true,
                    required: false
                },
                resizable: {
                    type: Boolean,
                    default: true,
                    required: false
                },
                pageable: {
                    type: Boolean,
                    default: true,
                    required: false
                },
                hidable: {
                    type: Boolean,
                    default: true,
                    required: false
                },
                pageSizes: {
                    type: Array,
                    default: function _default() {
                        return [25, 50, 100, 0];
                    },
                    required: false
                }
            },
            data: function data() {
                return {
                    state: {
                        columns: [],
                        sortable: this.sortable,
                        sortingColumns: [],
                        filtrable: this.filtrable,
                        filteringColumns: [],
                        groupable: this.groupable,
                        groupingColumns: [],
                        hiddenGroups: {},
                        enabledGroupingArea: true,
                        hidable: this.hidable,
                        hidingColumns: [],
                        movable: this.movable,
                        moving: {
                            dragable: null,
                            dropable: null
                        },
                        resizable: this.resizable,
                        resizing: {
                            column: null,
                            mousePosition: {
                                x: null,
                                y: null
                            }
                        },
                        pageable: this.pageable,
                        paging: {
                            size: this.pageSizes[0],
                            count: this.countPage(this.pageSizes[0]),
                            current: 1
                        },
                        fixedHeader: false,
                        recalculate: 1
                    },
                    gates: [_sTableGates.filter, _sTableGates.sort, _sTableGates.group, _sTableGates.page],
                    filteringModes: _sTableData.columnFilters,
                    groupAreaName: '*group-area*',
                    minWidthBias: 100,
                    hiddenColumnSize: screen.width < 1025 ? 40 : 20,
                    maxCountOfPage: 5
                };
            },
            created: function created() {
                this.state.columns = (0, _sTableFunctions.getColumns)(this.columns, this.sortable, this.filtrable, this.groupable, this.resizable, this.movable, this.hidable);
                var self = this;
                window.onresize = function (event) {
                    console.log('resize');
                    for (var i = 0; i < self.state.columns.length; i++) {
                        var column = self.state.columns[i];
                        column.width = (0, _sTableFunctions.calculateWidth)(column.name, column.hidable, column.filtrable, column.groupable, column.sortable);
                        console.log(column.width);
                    }
                };
            },
            watch: {
                'state.paging.size': function statePagingSize(size) {
                    this.state.paging.count = this.countPage(size);
                    if (this.state.paging.current > this.state.paging.count) {
                        this.state.paging.current = this.state.paging.count;
                    }
                }
            },
            computed: _extends({}, (0, _vuex.mapState)({
                styleClass: function styleClass(state) {
                    return state.base.styleClass;
                }
            }), {
                hasGrouped: function hasGrouped() {
                    return this.state.groupingColumns && this.state.groupingColumns.length > 0;
                },
                data: function data() {
                    var recalulate = this.state.recalculate;
                    var result = {
                        items: this.items.map(function (x) {
                            return x;
                        }),
                        paging: null
                    };
                    for (var i = 0; i < this.gates.length; i++) {
                        var gate = this.gates[i];
                        gate(result, this.state);
                    }
                    return result;
                }
            }),
            methods: {
                /* SORTING */
                sortByMany: function sortByMany(column) {
                    if (this.state.sortable || this.state.groupable) {
                        if (!column.sortingDirection) {
                            column.sortingDirection = 1;
                            this.state.sortingColumns.push(column);
                        }
                        else {
                            column.sortingDirection = column.sortingDirection === -1 ? 1 : -1;
                            this.forceUpdate();
                        }
                    }
                },
                sortByOne: function sortByOne(column) {
                    if (this.state.sortable || this.state.groupable) {
                        if (!column.sortingDirection) {
                            this.cleanSorting();
                        }
                        this.sortByMany(column);
                    }
                },
                cleanSorting: function cleanSorting() {
                    for (var i = this.state.sortingColumns.length - 1; i >= 0; i--) {
                        var column = this.state.sortingColumns[i];
                        var indexOfColumnInGrouping = this.state.groupingColumns.indexOf(column);
                        if (indexOfColumnInGrouping < 0) {
                            this.removeColumnForSorting(column);
                        }
                    }
                },
                removeColumnForSorting: function removeColumnForSorting(column) {
                    column.sortingDirection = undefined;
                    (0, _sTableFunctions.removeItemInArray)(this.state.sortingColumns, column);
                },
                /* GROUPING */
                addColumForGrouping: function addColumForGrouping(column) {
                    if (this.state.groupable && !column.grouping) {
                        this.cleanSorting();
                        this.sortByMany(column);
                        column.grouping = true;
                        this.state.hiddenGroups = {};
                        this.state.groupingColumns.push(column);
                    }
                },
                getGroupingItems: function getGroupingItems() {
                    var result = [];
                    var current = new Array(this.state.groupingColumns.length);
                    var levelHidden = Number.MAX_VALUE;
                    for (var i = 0; i < this.data.items.length; i++) {
                        var item = this.data.items[i];
                        var groupingValues = item.$_grouping_values;
                        var mismatchOnPrevStep = false;
                        var joinGroupedValues = "";
                        for (var j = 0; j < groupingValues.length; j++) {
                            joinGroupedValues += groupingValues[j];
                            if (current[j] !== groupingValues[j] || mismatchOnPrevStep) {
                                if (levelHidden >= j + 1) {
                                    if (this.hasHiddenGroup(joinGroupedValues)) {
                                        levelHidden = j + 1;
                                    }
                                    else {
                                        levelHidden = Number.MAX_VALUE;
                                    }
                                }
                                mismatchOnPrevStep = true;
                                current[j] = groupingValues[j];
                                result.push({
                                    level: j + 1,
                                    group: groupingValues[j],
                                    column: this.state.groupingColumns[j],
                                    hidden: j + 1 > levelHidden,
                                    hiding: j + 1 == levelHidden,
                                    joinGroupedValues: joinGroupedValues
                                });
                            }
                        }
                        result.push({
                            level: groupingValues.length,
                            item: item,
                            hidden: groupingValues.length >= levelHidden
                        });
                    }
                    return result;
                },
                removeColumForGrouping: function removeColumForGrouping(column) {
                    column.grouping = false;
                    this.state.hiddenGroups = {};
                    (0, _sTableFunctions.removeItemInArray)(this.state.groupingColumns, column);
                    this.cleanSorting();
                },
                hasHiddenGroup: function hasHiddenGroup(joinGroupedValues) {
                    return this.state.hiddenGroups[joinGroupedValues];
                },
                hideGroup: function hideGroup(joinGroupedValues) {
                    this.state.hiddenGroups[joinGroupedValues] = true;
                    this.forceUpdate();
                },
                showGroup: function showGroup(joinGroupedValues) {
                    this.state.hiddenGroups[joinGroupedValues] = false;
                    this.forceUpdate();
                },
                changeGroupingOrder: function changeGroupingOrder() {
                    var groupingColumn = this.state.groupingColumns.map(function (x) {
                        return x;
                    });
                    for (var i = this.state.groupingColumns.length - 1; i >= 0; i--) {
                        this.removeColumForGrouping(this.state.groupingColumns[i]);
                    }
                    for (var _i in groupingColumn) {
                        this.addColumForGrouping(groupingColumn[_i]);
                    }
                },
                /* FILTERING */
                addColumForFiltering: function addColumForFiltering(column) {
                    if (column.filtering && !column.filtering.enabled) {
                        column.filtering.enabled = true;
                        this.state.filteringColumns.push(column);
                    }
                    this.forceUpdate();
                },
                removeColumForFiltering: function removeColumForFiltering(column) {
                    if (column.filtering) {
                        column.filtering.enabled = false;
                        column.filtering.expected = '';
                        (0, _sTableFunctions.removeItemInArray)(this.state.filteringColumns, column);
                        this.forceUpdate();
                    }
                },
                selectFilter: function selectFilter(column, mode) {
                    column.filtering.filter = this.filteringModes[mode];
                    column.filtering.filterMode = mode;
                    if (column.filtering.filter.single || column.filtering.expected) {
                        this.addColumForFiltering(column);
                    }
                },
                selectValueForFilter: function selectValueForFilter(column, value) {
                    if (column.filtering) {
                        column.filtering.expected = value;
                        if (value) {
                            this.addColumForFiltering(column);
                        }
                        else {
                            this.removeColumForFiltering(column);
                        }
                    }
                },
                showFilterForm: function showFilterForm(column) {
                    if (!column.filtering) {
                        column.filtering = {
                            filter: this.filteringModes.eq,
                            expected: '',
                            enabled: false,
                            filterMode: 'eq'
                        };
                    }
                    column.showFilterForm = true;
                    this.forceUpdate();
                },
                hideFilterForm: function hideFilterForm(column) {
                    column.showFilterForm = false;
                    this.forceUpdate();
                },
                /* PAGING */
                goToPage: function goToPage(i) {
                    if (i > 0 && i <= this.data.paging.count) {
                        this.data.paging.current = i;
                    }
                },
                canShowPageNumber: function canShowPageNumber(i) {
                    var num = Math.floor((this.data.paging.current - 1) / this.maxCountOfPage) * this.maxCountOfPage;
                    return i >= num && i < num + this.maxCountOfPage;
                },
                countPage: function countPage(size) {
                    return size == 0 ? 1 : Math.ceil(this.items.length / size);
                },
                /* RESIZING */
                beginResizeColumn: function beginResizeColumn(column, event) {
                    var columnElement = event.target.parentNode.parentNode.parentNode;
                    this.state.resizing.column = column;
                    if (!this.state.resizing.column.width) {
                        this.state.resizing.column.width = this.getMinWidth(column) + this.minWidthBias;
                    }
                    this.state.resizing.mousePosition.x = event.clientX;
                },
                resizeColumn: function resizeColumn(event) {
                    if (this.state.resizing.column) {
                        var currentPosMouseX = event.clientX;
                        var currentWidth = this.state.resizing.column.width;
                        var deff = currentPosMouseX - this.state.resizing.mousePosition.x;
                        var minWidth = this.getMinWidth(this.state.resizing.column) + this.minWidthBias;
                        if (deff > 0 || currentWidth + deff > minWidth) {
                            this.state.resizing.column.width += currentPosMouseX - this.state.resizing.mousePosition.x;
                            this.state.resizing.mousePosition.x = currentPosMouseX;
                        }
                    }
                },
                stopResizeColumn: function stopResizeColumn() {
                    this.state.resizing.column = null;
                    this.state.resizing.mousePosition.x = null;
                },
                /* MOVING */
                move: function move(from, to, array) {
                    var indexOfDragable = array.indexOf(from);
                    var indexOfDropable = array.indexOf(to);
                    if (indexOfDropable > -1) {
                        array.splice(indexOfDragable, 1);
                        array.splice(indexOfDropable, 0, from);
                    }
                },
                /* HIDDING */
                hideColumn: function hideColumn(column, event) {
                    column.hidden = true;
                    this.forceUpdate();
                },
                showColumn: function showColumn(column, event) {
                    column.hidden = false;
                    this.forceUpdate();
                },
                /* SIZES */
                getTableWidth: function getTableWidth() {
                    var self = this;
                    var result = this.state.columns.reduce(function (a, b) {
                        return a + (!b.hidden ? b.width || b.name.length * 18 + 50 : self.hiddenColumnSize);
                    }, 0);
                    console.log(result);
                    return result;
                },
                getMinWidth: function getMinWidth(column) {
                    return (0, _sTableFunctions.getMinWidth)(column.name);
                },
                getColumnSizeById: function getColumnSizeById(columnId) {
                    return document.getElementById(columnId + "Column");
                },
                /* DRAG AND DROP */
                columnDragStart: function columnDragStart(column, event) {
                    var enabledGroupingArea = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
                    event.dataTransfer.setData('text/plain', 'anything');
                    this.state.enabledGroupingArea = enabledGroupingArea;
                    if (!this.state.resizing.column) {
                        this.state.moving.dragable = column;
                    }
                    else {
                        event.preventDefault();
                    }
                },
                columnDragEnter: function columnDragEnter(column, event) {
                    if (!this.state.resizing.column) {
                        this.state.moving.dropable = column;
                    }
                    else {
                        event.preventDefault();
                    }
                },
                columnDragEnd: function columnDragEnd(event, groupMove) {
                    if (!this.state.resizing.column) {
                        var dragableColumn = this.state.moving.dragable;
                        var dropableColumn = this.state.moving.dropable;
                        if (!dragableColumn || !dropableColumn) {
                            return;
                        }
                        if (dragableColumn != dropableColumn) {
                            if (dropableColumn == this.groupAreaName) {
                                this.addColumForGrouping(dragableColumn);
                            }
                            else if (groupMove) {
                                this.move(dragableColumn, dropableColumn, this.state.groupingColumns);
                                this.changeGroupingOrder();
                            }
                            else {
                                this.move(dragableColumn, dropableColumn, this.state.columns);
                            }
                        }
                        this.state.moving.dragable = null;
                        this.state.moving.dropable = null;
                        this.state.enabledGroupingArea = true;
                        this.forceUpdate();
                    }
                    else {
                        event.preventDefault();
                    }
                },
                /* OTHER */
                getCells: function getCells(items, key) {
                    var result = [];
                    for (var i in items) {
                        var item = items[i];
                        result.push(item[key]);
                    }
                    return result;
                },
                forceUpdate: function forceUpdate() {
                    var hard = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                    if (hard) {
                        this.state.recalculate = -this.state.recalculate;
                    }
                    this.$forceUpdate();
                },
                scroll: function scroll(evt, el) {
                    if (window.scrollY > el.offsetTop) {
                        this.state.fixedHeader = true;
                    }
                    else {
                        this.state.fixedHeader = false;
                    }
                    if (this.state.fixedHeaderCache !== this.state.fixedHeader) {
                        this.forceUpdate(false);
                    }
                    this.state.fixedHeaderCache = this.state.fixedHeader;
                }
            }
        };
        /***/ 
    }),
    /***/ "./node_modules/bootstrap/scss/bootstrap-grid.scss": 
    /*!*********************************************************!*\
      !*** ./node_modules/bootstrap/scss/bootstrap-grid.scss ***!
      \*********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/bootstrap/scss/bootstrap-reboot.scss": 
    /*!***********************************************************!*\
      !*** ./node_modules/bootstrap/scss/bootstrap-reboot.scss ***!
      \***********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/application/home/home.vue": 
    /*!******************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/application/home/home.vue ***!
      \******************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
        // imports
        // module
        exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", { "version": 3, "sources": [], "names": [], "mappings": "", "file": "home.vue", "sourceRoot": "" }]);
        // exports
        /***/ 
    }),
    /***/ "./node_modules/css-loader/lib/css-base.js": 
    /*!*************************************************!*\
      !*** ./node_modules/css-loader/lib/css-base.js ***!
      \*************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        /*
            MIT License http://www.opensource.org/licenses/mit-license.php
            Author Tobias Koppers @sokra
        */
        // css base code, injected by the css-loader
        module.exports = function (useSourceMap) {
            var list = [];
            // return the list of modules as css string
            list.toString = function toString() {
                return this.map(function (item) {
                    var content = cssWithMappingToString(item, useSourceMap);
                    if (item[2]) {
                        return "@media " + item[2] + "{" + content + "}";
                    }
                    else {
                        return content;
                    }
                }).join("");
            };
            // import a list of modules into the list
            list.i = function (modules, mediaQuery) {
                if (typeof modules === "string")
                    modules = [[null, modules, ""]];
                var alreadyImportedModules = {};
                for (var i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    if (typeof id === "number")
                        alreadyImportedModules[id] = true;
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
                        if (mediaQuery && !item[2]) {
                            item[2] = mediaQuery;
                        }
                        else if (mediaQuery) {
                            item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
                        }
                        list.push(item);
                    }
                }
            };
            return list;
        };
        function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || '';
            var cssMapping = item[3];
            if (!cssMapping) {
                return content;
            }
            if (useSourceMap && typeof btoa === 'function') {
                var sourceMapping = toComment(cssMapping);
                var sourceURLs = cssMapping.sources.map(function (source) {
                    return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
                });
                return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
            }
            return [content].join('\n');
        }
        // Adapted from convert-source-map (MIT)
        function toComment(sourceMap) {
            // eslint-disable-next-line no-undef
            var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
            var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
            return '/*# ' + data + ' */';
        }
        /***/ 
    }),
    /***/ "./node_modules/dayjs/dayjs.min.js": 
    /*!*****************************************!*\
      !*** ./node_modules/dayjs/dayjs.min.js ***!
      \*****************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        !function (t, e) { true ? module.exports = e() : undefined; }(this, function () {
            "use strict";
            var t = "millisecond", e = "second", n = "minute", r = "hour", s = "day", i = "week", a = "month", u = "year", c = /^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/, o = /\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, h = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, d = function (t, e, n) { var r = String(t); return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t; }, f = { padStart: d, padZoneStr: function (t) { var e = Math.abs(t), n = Math.floor(e / 60), r = e % 60; return (t <= 0 ? "+" : "-") + d(n, 2, "0") + ":" + d(r, 2, "0"); }, monthDiff: function (t, e) { var n = 12 * (e.year() - t.year()) + (e.month() - t.month()), r = t.clone().add(n, "months"), s = e - r < 0, i = t.clone().add(n + (s ? -1 : 1), "months"); return Number(-(n + (e - r) / (s ? r - i : i - r))); }, absFloor: function (t) { return t < 0 ? Math.ceil(t) || 0 : Math.floor(t); }, prettyUnit: function (c) { return { M: a, y: u, w: i, d: s, h: r, m: n, s: e, ms: t }[c] || String(c || "").toLowerCase().replace(/s$/, ""); }, isUndefined: function (t) { return void 0 === t; } }, $ = "en", l = {};
            l[$] = h;
            var m = function (t) { return t instanceof D; }, y = function (t, e, n) { var r; if (!t)
                return null; if ("string" == typeof t)
                l[t] && (r = t), e && (l[t] = e, r = t);
            else {
                var s = t.name;
                l[s] = t, r = s;
            } return n || ($ = r), r; }, M = function (t, e) { if (m(t))
                return t.clone(); var n = e || {}; return n.date = t, new D(n); }, S = function (t, e) { return M(t, { locale: e.$L }); }, p = f;
            p.parseLocale = y, p.isDayjs = m, p.wrapper = S;
            var D = function () { function h(t) { this.parse(t); } var d = h.prototype; return d.parse = function (t) { var e, n; this.$d = null === (e = t.date) ? new Date(NaN) : p.isUndefined(e) ? new Date : e instanceof Date ? e : "string" == typeof e && /.*[^Z]$/i.test(e) && (n = e.match(c)) ? new Date(n[1], n[2] - 1, n[3] || 1, n[5] || 0, n[6] || 0, n[7] || 0, n[8] || 0) : new Date(e), this.init(t); }, d.init = function (t) { this.$y = this.$d.getFullYear(), this.$M = this.$d.getMonth(), this.$D = this.$d.getDate(), this.$W = this.$d.getDay(), this.$H = this.$d.getHours(), this.$m = this.$d.getMinutes(), this.$s = this.$d.getSeconds(), this.$ms = this.$d.getMilliseconds(), this.$L = this.$L || y(t.locale, null, !0) || $; }, d.$utils = function () { return p; }, d.isValid = function () { return !("Invalid Date" === this.$d.toString()); }, d.$compare = function (t) { return this.valueOf() - M(t).valueOf(); }, d.isSame = function (t) { return 0 === this.$compare(t); }, d.isBefore = function (t) { return this.$compare(t) < 0; }, d.isAfter = function (t) { return this.$compare(t) > 0; }, d.year = function () { return this.$y; }, d.month = function () { return this.$M; }, d.day = function () { return this.$W; }, d.date = function () { return this.$D; }, d.hour = function () { return this.$H; }, d.minute = function () { return this.$m; }, d.second = function () { return this.$s; }, d.millisecond = function () { return this.$ms; }, d.unix = function () { return Math.floor(this.valueOf() / 1e3); }, d.valueOf = function () { return this.$d.getTime(); }, d.startOf = function (t, c) { var o = this, h = !!p.isUndefined(c) || c, d = function (t, e) { var n = S(new Date(o.$y, e, t), o); return h ? n : n.endOf(s); }, f = function (t, e) { return S(o.toDate()[t].apply(o.toDate(), h ? [0, 0, 0, 0].slice(e) : [23, 59, 59, 999].slice(e)), o); }; switch (p.prettyUnit(t)) {
                case u: return h ? d(1, 0) : d(31, 11);
                case a: return h ? d(1, this.$M) : d(0, this.$M + 1);
                case i: return d(h ? this.$D - this.$W : this.$D + (6 - this.$W), this.$M);
                case s:
                case "date": return f("setHours", 0);
                case r: return f("setMinutes", 1);
                case n: return f("setSeconds", 2);
                case e: return f("setMilliseconds", 3);
                default: return this.clone();
            } }, d.endOf = function (t) { return this.startOf(t, !1); }, d.$set = function (i, c) { switch (p.prettyUnit(i)) {
                case s:
                    this.$d.setDate(this.$D + (c - this.$W));
                    break;
                case "date":
                    this.$d.setDate(c);
                    break;
                case a:
                    this.$d.setMonth(c);
                    break;
                case u:
                    this.$d.setFullYear(c);
                    break;
                case r:
                    this.$d.setHours(c);
                    break;
                case n:
                    this.$d.setMinutes(c);
                    break;
                case e:
                    this.$d.setSeconds(c);
                    break;
                case t: this.$d.setMilliseconds(c);
            } return this.init(), this; }, d.set = function (t, e) { return this.clone().$set(t, e); }, d.add = function (t, c) { var o = this; t = Number(t); var h, d = p.prettyUnit(c), f = function (e, n) { var r = o.set("date", 1).set(e, n + t); return r.set("date", Math.min(o.$D, r.daysInMonth())); }, $ = function (e) { var n = new Date(o.$d); return n.setDate(n.getDate() + e * t), S(n, o); }; if (d === a)
                return f(a, this.$M); if (d === u)
                return f(u, this.$y); if (d === s)
                return $(1); if (d === i)
                return $(7); switch (d) {
                case n:
                    h = 6e4;
                    break;
                case r:
                    h = 36e5;
                    break;
                case e:
                    h = 1e3;
                    break;
                default: h = 1;
            } var l = this.valueOf() + t * h; return S(l, this); }, d.subtract = function (t, e) { return this.add(-1 * t, e); }, d.format = function (t) { var e = this, n = t || "YYYY-MM-DDTHH:mm:ssZ", r = p.padZoneStr(this.$d.getTimezoneOffset()), s = this.$locale(), i = s.weekdays, a = s.months, u = function (t, e, n, r) { return t && t[e] || n[e].substr(0, r); }; return n.replace(o, function (t) { if (t.indexOf("[") > -1)
                return t.replace(/\[|\]/g, ""); switch (t) {
                case "YY": return String(e.$y).slice(-2);
                case "YYYY": return String(e.$y);
                case "M": return String(e.$M + 1);
                case "MM": return p.padStart(e.$M + 1, 2, "0");
                case "MMM": return u(s.monthsShort, e.$M, a, 3);
                case "MMMM": return a[e.$M];
                case "D": return String(e.$D);
                case "DD": return p.padStart(e.$D, 2, "0");
                case "d": return String(e.$W);
                case "dd": return u(s.weekdaysMin, e.$W, i, 2);
                case "ddd": return u(s.weekdaysShort, e.$W, i, 3);
                case "dddd": return i[e.$W];
                case "H": return String(e.$H);
                case "HH": return p.padStart(e.$H, 2, "0");
                case "h":
                case "hh": return 0 === e.$H ? 12 : p.padStart(e.$H < 13 ? e.$H : e.$H - 12, "hh" === t ? 2 : 1, "0");
                case "a": return e.$H < 12 ? "am" : "pm";
                case "A": return e.$H < 12 ? "AM" : "PM";
                case "m": return String(e.$m);
                case "mm": return p.padStart(e.$m, 2, "0");
                case "s": return String(e.$s);
                case "ss": return p.padStart(e.$s, 2, "0");
                case "SSS": return p.padStart(e.$ms, 3, "0");
                case "Z": return r;
                default: return r.replace(":", "");
            } }); }, d.diff = function (t, c, o) { var h = p.prettyUnit(c), d = M(t), f = this - d, $ = p.monthDiff(this, d); switch (h) {
                case u:
                    $ /= 12;
                    break;
                case a: break;
                case "quarter":
                    $ /= 3;
                    break;
                case i:
                    $ = f / 6048e5;
                    break;
                case s:
                    $ = f / 864e5;
                    break;
                case r:
                    $ = f / 36e5;
                    break;
                case n:
                    $ = f / 6e4;
                    break;
                case e:
                    $ = f / 1e3;
                    break;
                default: $ = f;
            } return o ? $ : p.absFloor($); }, d.daysInMonth = function () { return this.endOf(a).$D; }, d.$locale = function () { return l[this.$L]; }, d.locale = function (t, e) { var n = this.clone(); return n.$L = y(t, e, !0), n; }, d.clone = function () { return S(this.toDate(), this); }, d.toDate = function () { return new Date(this.$d); }, d.toArray = function () { return [this.$y, this.$M, this.$D, this.$H, this.$m, this.$s, this.$ms]; }, d.toJSON = function () { return this.toISOString(); }, d.toISOString = function () { return this.toDate().toISOString(); }, d.toObject = function () { return { years: this.$y, months: this.$M, date: this.$D, hours: this.$H, minutes: this.$m, seconds: this.$s, milliseconds: this.$ms }; }, d.toString = function () { return this.$d.toUTCString(); }, h; }();
            return M.extend = function (t, e) { return t(e, D, M), M; }, M.locale = y, M.isDayjs = m, M.unix = function (t) { return M(1e3 * t); }, M.en = l[$], M;
        });
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-17c0c85a\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-table/s-table.material.scss": 
    /*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-17c0c85a","scoped":true,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./wwwroot/components/shared/s-table/s-table.material.scss ***!
      \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-17c0c85a\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-table/s-table.scss": 
    /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-17c0c85a","scoped":true,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./wwwroot/components/shared/s-table/s-table.scss ***!
      \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-2c26822c\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/shared/s-datepicker/s-datepicker.vue": 
    /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-2c26822c","scoped":true,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/shared/s-datepicker/s-datepicker.vue ***!
      \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-40d32dec\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-checkbox/s-checkbox.material.scss": 
    /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-40d32dec","scoped":true,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./wwwroot/components/shared/s-checkbox/s-checkbox.material.scss ***!
      \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-40d32dec\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-checkbox/s-checkbox.scss": 
    /*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-40d32dec","scoped":true,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./wwwroot/components/shared/s-checkbox/s-checkbox.scss ***!
      \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-40da7a2c\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-material-input/s-material-input.material.scss": 
    /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-40da7a2c","scoped":true,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./wwwroot/components/shared/s-material-input/s-material-input.material.scss ***!
      \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-40da7a2c\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-material-input/s-material-input.scss": 
    /*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-40da7a2c","scoped":true,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./wwwroot/components/shared/s-material-input/s-material-input.scss ***!
      \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-59e23b0a\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/application/experiment/experiment.vue": 
    /*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-59e23b0a","scoped":true,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/application/experiment/experiment.vue ***!
      \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-627842ec\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-nav-menu-item/s-nav-menu-item.material.scss": 
    /*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-627842ec","scoped":true,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./wwwroot/components/shared/s-nav-menu-item/s-nav-menu-item.material.scss ***!
      \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-627842ec\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-nav-menu-item/s-nav-menu-item.scss": 
    /*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-627842ec","scoped":true,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./wwwroot/components/shared/s-nav-menu-item/s-nav-menu-item.scss ***!
      \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-ecda202c\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-select/s-select.material.scss": 
    /*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-ecda202c","scoped":true,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./wwwroot/components/shared/s-select/s-select.material.scss ***!
      \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-ecda202c\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-select/s-select.scss": 
    /*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"id":"data-v-ecda202c","scoped":true,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./wwwroot/components/shared/s-select/s-select.scss ***!
      \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/app.vue": 
    /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/app.vue ***!
      \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/shared/s-datepicker-range/s-datepicker-range.vue": 
    /*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/shared/s-datepicker-range/s-datepicker-range.vue ***!
      \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./wwwroot/components/shared/s-datepicker-range/s-datepicker-range.vue": 
    /*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./wwwroot/components/shared/s-datepicker-range/s-datepicker-range.vue ***!
      \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-nav-menu/s-nav-menu.material.scss": 
    /*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./wwwroot/components/shared/s-nav-menu/s-nav-menu.material.scss ***!
      \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-nav-menu/s-nav-menu.scss": 
    /*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./wwwroot/components/shared/s-nav-menu/s-nav-menu.scss ***!
      \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-side-nav-menu/s-side-nav-menu.material.scss": 
    /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./wwwroot/components/shared/s-side-nav-menu/s-side-nav-menu.material.scss ***!
      \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-side-nav-menu/s-side-nav-menu.scss": 
    /*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/postcss-loader/src!./node_modules/resolve-url-loader!./node_modules/sass-loader/lib/loader.js?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./wwwroot/components/shared/s-side-nav-menu/s-side-nav-menu.scss ***!
      \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/font-awesome/css/font-awesome.css": 
    /*!********************************************************!*\
      !*** ./node_modules/font-awesome/css/font-awesome.css ***!
      \********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    }),
    /***/ "./node_modules/fuse.js/dist/fuse.js": 
    /*!*******************************************!*\
      !*** ./node_modules/fuse.js/dist/fuse.js ***!
      \*******************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        /*!
         * Fuse.js v3.3.0 - Lightweight fuzzy-search (http://fusejs.io)
         *
         * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
         * All Rights Reserved. Apache Software License 2.0
         *
         * http://www.apache.org/licenses/LICENSE-2.0
         */
        (function webpackUniversalModuleDefinition(root, factory) {
            if (true)
                module.exports = factory();
            else { }
        })(this, function () {
            return /******/ (function (modules) {
                /******/ // The module cache
                /******/ var installedModules = {};
                /******/
                /******/ // The require function
                /******/ function __webpack_require__(moduleId) {
                    /******/
                    /******/ // Check if module is in cache
                    /******/ if (installedModules[moduleId]) {
                        /******/ return installedModules[moduleId].exports;
                        /******/ }
                    /******/ // Create a new module (and put it into the cache)
                    /******/ var module = installedModules[moduleId] = {
                        /******/ i: moduleId,
                        /******/ l: false,
                        /******/ exports: {}
                        /******/ 
                    };
                    /******/
                    /******/ // Execute the module function
                    /******/ modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                    /******/
                    /******/ // Flag the module as loaded
                    /******/ module.l = true;
                    /******/
                    /******/ // Return the exports of the module
                    /******/ return module.exports;
                    /******/ 
                }
                /******/
                /******/
                /******/ // expose the modules object (__webpack_modules__)
                /******/ __webpack_require__.m = modules;
                /******/
                /******/ // expose the module cache
                /******/ __webpack_require__.c = installedModules;
                /******/
                /******/ // identity function for calling harmony imports with the correct context
                /******/ __webpack_require__.i = function (value) { return value; };
                /******/
                /******/ // define getter function for harmony exports
                /******/ __webpack_require__.d = function (exports, name, getter) {
                    /******/ if (!__webpack_require__.o(exports, name)) {
                        /******/ Object.defineProperty(exports, name, {
                            /******/ configurable: false,
                            /******/ enumerable: true,
                            /******/ get: getter
                            /******/ 
                        });
                        /******/ }
                    /******/ 
                };
                /******/
                /******/ // getDefaultExport function for compatibility with non-harmony modules
                /******/ __webpack_require__.n = function (module) {
                    /******/ var getter = module && module.__esModule ?
                        /******/ function getDefault() { return module['default']; } :
                        /******/ function getModuleExports() { return module; };
                    /******/ __webpack_require__.d(getter, 'a', getter);
                    /******/ return getter;
                    /******/ 
                };
                /******/
                /******/ // Object.prototype.hasOwnProperty.call
                /******/ __webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
                /******/
                /******/ // __webpack_public_path__
                /******/ __webpack_require__.p = "";
                /******/
                /******/ // Load entry module and return exports
                /******/ return __webpack_require__(__webpack_require__.s = 8);
                /******/ 
            })([
                /* 0 */
                /***/ (function (module, exports, __webpack_require__) {
                    "use strict";
                    module.exports = function (obj) {
                        return !Array.isArray ? Object.prototype.toString.call(obj) === '[object Array]' : Array.isArray(obj);
                    };
                    /***/ 
                }),
                /* 1 */
                /***/ (function (module, exports, __webpack_require__) {
                    "use strict";
                    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor)
                            descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    } } return function (Constructor, protoProps, staticProps) { if (protoProps)
                        defineProperties(Constructor.prototype, protoProps); if (staticProps)
                        defineProperties(Constructor, staticProps); return Constructor; }; }();
                    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    } }
                    var bitapRegexSearch = __webpack_require__(5);
                    var bitapSearch = __webpack_require__(7);
                    var patternAlphabet = __webpack_require__(4);
                    var Bitap = function () {
                        function Bitap(pattern, _ref) {
                            var _ref$location = _ref.location, location = _ref$location === undefined ? 0 : _ref$location, _ref$distance = _ref.distance, distance = _ref$distance === undefined ? 100 : _ref$distance, _ref$threshold = _ref.threshold, threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold, _ref$maxPatternLength = _ref.maxPatternLength, maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength, _ref$isCaseSensitive = _ref.isCaseSensitive, isCaseSensitive = _ref$isCaseSensitive === undefined ? false : _ref$isCaseSensitive, _ref$tokenSeparator = _ref.tokenSeparator, tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;
                            _classCallCheck(this, Bitap);
                            this.options = {
                                location: location,
                                distance: distance,
                                threshold: threshold,
                                maxPatternLength: maxPatternLength,
                                isCaseSensitive: isCaseSensitive,
                                tokenSeparator: tokenSeparator,
                                findAllMatches: findAllMatches,
                                minMatchCharLength: minMatchCharLength
                            };
                            this.pattern = this.options.isCaseSensitive ? pattern : pattern.toLowerCase();
                            if (this.pattern.length <= maxPatternLength) {
                                this.patternAlphabet = patternAlphabet(this.pattern);
                            }
                        }
                        _createClass(Bitap, [{
                                key: 'search',
                                value: function search(text) {
                                    if (!this.options.isCaseSensitive) {
                                        text = text.toLowerCase();
                                    }
                                    // Exact match
                                    if (this.pattern === text) {
                                        return {
                                            isMatch: true,
                                            score: 0,
                                            matchedIndices: [[0, text.length - 1]]
                                        };
                                    }
                                    // When pattern length is greater than the machine word length, just do a a regex comparison
                                    var _options = this.options, maxPatternLength = _options.maxPatternLength, tokenSeparator = _options.tokenSeparator;
                                    if (this.pattern.length > maxPatternLength) {
                                        return bitapRegexSearch(text, this.pattern, tokenSeparator);
                                    }
                                    // Otherwise, use Bitap algorithm
                                    var _options2 = this.options, location = _options2.location, distance = _options2.distance, threshold = _options2.threshold, findAllMatches = _options2.findAllMatches, minMatchCharLength = _options2.minMatchCharLength;
                                    return bitapSearch(text, this.pattern, this.patternAlphabet, {
                                        location: location,
                                        distance: distance,
                                        threshold: threshold,
                                        findAllMatches: findAllMatches,
                                        minMatchCharLength: minMatchCharLength
                                    });
                                }
                            }]);
                        return Bitap;
                    }();
                    // let x = new Bitap("od mn war", {})
                    // let result = x.search("Old Man's War")
                    // console.log(result)
                    module.exports = Bitap;
                    /***/ 
                }),
                /* 2 */
                /***/ (function (module, exports, __webpack_require__) {
                    "use strict";
                    var isArray = __webpack_require__(0);
                    var deepValue = function deepValue(obj, path, list) {
                        if (!path) {
                            // If there's no path left, we've gotten to the object we care about.
                            list.push(obj);
                        }
                        else {
                            var dotIndex = path.indexOf('.');
                            var firstSegment = path;
                            var remaining = null;
                            if (dotIndex !== -1) {
                                firstSegment = path.slice(0, dotIndex);
                                remaining = path.slice(dotIndex + 1);
                            }
                            var value = obj[firstSegment];
                            if (value !== null && value !== undefined) {
                                if (!remaining && (typeof value === 'string' || typeof value === 'number')) {
                                    list.push(value.toString());
                                }
                                else if (isArray(value)) {
                                    // Search each item in the array.
                                    for (var i = 0, len = value.length; i < len; i += 1) {
                                        deepValue(value[i], remaining, list);
                                    }
                                }
                                else if (remaining) {
                                    // An object. Recurse further.
                                    deepValue(value, remaining, list);
                                }
                            }
                        }
                        return list;
                    };
                    module.exports = function (obj, path) {
                        return deepValue(obj, path, []);
                    };
                    /***/ 
                }),
                /* 3 */
                /***/ (function (module, exports, __webpack_require__) {
                    "use strict";
                    module.exports = function () {
                        var matchmask = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                        var minMatchCharLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
                        var matchedIndices = [];
                        var start = -1;
                        var end = -1;
                        var i = 0;
                        for (var len = matchmask.length; i < len; i += 1) {
                            var match = matchmask[i];
                            if (match && start === -1) {
                                start = i;
                            }
                            else if (!match && start !== -1) {
                                end = i - 1;
                                if (end - start + 1 >= minMatchCharLength) {
                                    matchedIndices.push([start, end]);
                                }
                                start = -1;
                            }
                        }
                        // (i-1 - start) + 1 => i - start
                        if (matchmask[i - 1] && i - start >= minMatchCharLength) {
                            matchedIndices.push([start, i - 1]);
                        }
                        return matchedIndices;
                    };
                    /***/ 
                }),
                /* 4 */
                /***/ (function (module, exports, __webpack_require__) {
                    "use strict";
                    module.exports = function (pattern) {
                        var mask = {};
                        var len = pattern.length;
                        for (var i = 0; i < len; i += 1) {
                            mask[pattern.charAt(i)] = 0;
                        }
                        for (var _i = 0; _i < len; _i += 1) {
                            mask[pattern.charAt(_i)] |= 1 << len - _i - 1;
                        }
                        return mask;
                    };
                    /***/ 
                }),
                /* 5 */
                /***/ (function (module, exports, __webpack_require__) {
                    "use strict";
                    var SPECIAL_CHARS_REGEX = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
                    module.exports = function (text, pattern) {
                        var tokenSeparator = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : / +/g;
                        var regex = new RegExp(pattern.replace(SPECIAL_CHARS_REGEX, '\\$&').replace(tokenSeparator, '|'));
                        var matches = text.match(regex);
                        var isMatch = !!matches;
                        var matchedIndices = [];
                        if (isMatch) {
                            for (var i = 0, matchesLen = matches.length; i < matchesLen; i += 1) {
                                var match = matches[i];
                                matchedIndices.push([text.indexOf(match), match.length - 1]);
                            }
                        }
                        return {
                            // TODO: revisit this score
                            score: isMatch ? 0.5 : 1,
                            isMatch: isMatch,
                            matchedIndices: matchedIndices
                        };
                    };
                    /***/ 
                }),
                /* 6 */
                /***/ (function (module, exports, __webpack_require__) {
                    "use strict";
                    module.exports = function (pattern, _ref) {
                        var _ref$errors = _ref.errors, errors = _ref$errors === undefined ? 0 : _ref$errors, _ref$currentLocation = _ref.currentLocation, currentLocation = _ref$currentLocation === undefined ? 0 : _ref$currentLocation, _ref$expectedLocation = _ref.expectedLocation, expectedLocation = _ref$expectedLocation === undefined ? 0 : _ref$expectedLocation, _ref$distance = _ref.distance, distance = _ref$distance === undefined ? 100 : _ref$distance;
                        var accuracy = errors / pattern.length;
                        var proximity = Math.abs(expectedLocation - currentLocation);
                        if (!distance) {
                            // Dodge divide by zero error.
                            return proximity ? 1.0 : accuracy;
                        }
                        return accuracy + proximity / distance;
                    };
                    /***/ 
                }),
                /* 7 */
                /***/ (function (module, exports, __webpack_require__) {
                    "use strict";
                    var bitapScore = __webpack_require__(6);
                    var matchedIndices = __webpack_require__(3);
                    module.exports = function (text, pattern, patternAlphabet, _ref) {
                        var _ref$location = _ref.location, location = _ref$location === undefined ? 0 : _ref$location, _ref$distance = _ref.distance, distance = _ref$distance === undefined ? 100 : _ref$distance, _ref$threshold = _ref.threshold, threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng;
                        var expectedLocation = location;
                        // Set starting location at beginning text and initialize the alphabet.
                        var textLen = text.length;
                        // Highest score beyond which we give up.
                        var currentThreshold = threshold;
                        // Is there a nearby exact match? (speedup)
                        var bestLocation = text.indexOf(pattern, expectedLocation);
                        var patternLen = pattern.length;
                        // a mask of the matches
                        var matchMask = [];
                        for (var i = 0; i < textLen; i += 1) {
                            matchMask[i] = 0;
                        }
                        if (bestLocation !== -1) {
                            var score = bitapScore(pattern, {
                                errors: 0,
                                currentLocation: bestLocation,
                                expectedLocation: expectedLocation,
                                distance: distance
                            });
                            currentThreshold = Math.min(score, currentThreshold);
                            // What about in the other direction? (speed up)
                            bestLocation = text.lastIndexOf(pattern, expectedLocation + patternLen);
                            if (bestLocation !== -1) {
                                var _score = bitapScore(pattern, {
                                    errors: 0,
                                    currentLocation: bestLocation,
                                    expectedLocation: expectedLocation,
                                    distance: distance
                                });
                                currentThreshold = Math.min(_score, currentThreshold);
                            }
                        }
                        // Reset the best location
                        bestLocation = -1;
                        var lastBitArr = [];
                        var finalScore = 1;
                        var binMax = patternLen + textLen;
                        var mask = 1 << patternLen - 1;
                        for (var _i = 0; _i < patternLen; _i += 1) {
                            // Scan for the best match; each iteration allows for one more error.
                            // Run a binary search to determine how far from the match location we can stray
                            // at this error level.
                            var binMin = 0;
                            var binMid = binMax;
                            while (binMin < binMid) {
                                var _score3 = bitapScore(pattern, {
                                    errors: _i,
                                    currentLocation: expectedLocation + binMid,
                                    expectedLocation: expectedLocation,
                                    distance: distance
                                });
                                if (_score3 <= currentThreshold) {
                                    binMin = binMid;
                                }
                                else {
                                    binMax = binMid;
                                }
                                binMid = Math.floor((binMax - binMin) / 2 + binMin);
                            }
                            // Use the result from this iteration as the maximum for the next.
                            binMax = binMid;
                            var start = Math.max(1, expectedLocation - binMid + 1);
                            var finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
                            // Initialize the bit array
                            var bitArr = Array(finish + 2);
                            bitArr[finish + 1] = (1 << _i) - 1;
                            for (var j = finish; j >= start; j -= 1) {
                                var currentLocation = j - 1;
                                var charMatch = patternAlphabet[text.charAt(currentLocation)];
                                if (charMatch) {
                                    matchMask[currentLocation] = 1;
                                }
                                // First pass: exact match
                                bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
                                // Subsequent passes: fuzzy match
                                if (_i !== 0) {
                                    bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
                                }
                                if (bitArr[j] & mask) {
                                    finalScore = bitapScore(pattern, {
                                        errors: _i,
                                        currentLocation: currentLocation,
                                        expectedLocation: expectedLocation,
                                        distance: distance
                                    });
                                    // This match will almost certainly be better than any existing match.
                                    // But check anyway.
                                    if (finalScore <= currentThreshold) {
                                        // Indeed it is
                                        currentThreshold = finalScore;
                                        bestLocation = currentLocation;
                                        // Already passed `loc`, downhill from here on in.
                                        if (bestLocation <= expectedLocation) {
                                            break;
                                        }
                                        // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
                                        start = Math.max(1, 2 * expectedLocation - bestLocation);
                                    }
                                }
                            }
                            // No hope for a (better) match at greater error levels.
                            var _score2 = bitapScore(pattern, {
                                errors: _i + 1,
                                currentLocation: expectedLocation,
                                expectedLocation: expectedLocation,
                                distance: distance
                            });
                            // console.log('score', score, finalScore)
                            if (_score2 > currentThreshold) {
                                break;
                            }
                            lastBitArr = bitArr;
                        }
                        // console.log('FINAL SCORE', finalScore)
                        // Count exact matches (those with a score of 0) to be "almost" exact
                        return {
                            isMatch: bestLocation >= 0,
                            score: finalScore === 0 ? 0.001 : finalScore,
                            matchedIndices: matchedIndices(matchMask, minMatchCharLength)
                        };
                    };
                    /***/ 
                }),
                /* 8 */
                /***/ (function (module, exports, __webpack_require__) {
                    "use strict";
                    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor)
                            descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    } } return function (Constructor, protoProps, staticProps) { if (protoProps)
                        defineProperties(Constructor.prototype, protoProps); if (staticProps)
                        defineProperties(Constructor, staticProps); return Constructor; }; }();
                    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) {
                        throw new TypeError("Cannot call a class as a function");
                    } }
                    var Bitap = __webpack_require__(1);
                    var deepValue = __webpack_require__(2);
                    var isArray = __webpack_require__(0);
                    var Fuse = function () {
                        function Fuse(list, _ref) {
                            var _ref$location = _ref.location, location = _ref$location === undefined ? 0 : _ref$location, _ref$distance = _ref.distance, distance = _ref$distance === undefined ? 100 : _ref$distance, _ref$threshold = _ref.threshold, threshold = _ref$threshold === undefined ? 0.6 : _ref$threshold, _ref$maxPatternLength = _ref.maxPatternLength, maxPatternLength = _ref$maxPatternLength === undefined ? 32 : _ref$maxPatternLength, _ref$caseSensitive = _ref.caseSensitive, caseSensitive = _ref$caseSensitive === undefined ? false : _ref$caseSensitive, _ref$tokenSeparator = _ref.tokenSeparator, tokenSeparator = _ref$tokenSeparator === undefined ? / +/g : _ref$tokenSeparator, _ref$findAllMatches = _ref.findAllMatches, findAllMatches = _ref$findAllMatches === undefined ? false : _ref$findAllMatches, _ref$minMatchCharLeng = _ref.minMatchCharLength, minMatchCharLength = _ref$minMatchCharLeng === undefined ? 1 : _ref$minMatchCharLeng, _ref$id = _ref.id, id = _ref$id === undefined ? null : _ref$id, _ref$keys = _ref.keys, keys = _ref$keys === undefined ? [] : _ref$keys, _ref$shouldSort = _ref.shouldSort, shouldSort = _ref$shouldSort === undefined ? true : _ref$shouldSort, _ref$getFn = _ref.getFn, getFn = _ref$getFn === undefined ? deepValue : _ref$getFn, _ref$sortFn = _ref.sortFn, sortFn = _ref$sortFn === undefined ? function (a, b) {
                                return a.score - b.score;
                            } : _ref$sortFn, _ref$tokenize = _ref.tokenize, tokenize = _ref$tokenize === undefined ? false : _ref$tokenize, _ref$matchAllTokens = _ref.matchAllTokens, matchAllTokens = _ref$matchAllTokens === undefined ? false : _ref$matchAllTokens, _ref$includeMatches = _ref.includeMatches, includeMatches = _ref$includeMatches === undefined ? false : _ref$includeMatches, _ref$includeScore = _ref.includeScore, includeScore = _ref$includeScore === undefined ? false : _ref$includeScore, _ref$verbose = _ref.verbose, verbose = _ref$verbose === undefined ? false : _ref$verbose;
                            _classCallCheck(this, Fuse);
                            this.options = {
                                location: location,
                                distance: distance,
                                threshold: threshold,
                                maxPatternLength: maxPatternLength,
                                isCaseSensitive: caseSensitive,
                                tokenSeparator: tokenSeparator,
                                findAllMatches: findAllMatches,
                                minMatchCharLength: minMatchCharLength,
                                id: id,
                                keys: keys,
                                includeMatches: includeMatches,
                                includeScore: includeScore,
                                shouldSort: shouldSort,
                                getFn: getFn,
                                sortFn: sortFn,
                                verbose: verbose,
                                tokenize: tokenize,
                                matchAllTokens: matchAllTokens
                            };
                            this.setCollection(list);
                        }
                        _createClass(Fuse, [{
                                key: 'setCollection',
                                value: function setCollection(list) {
                                    this.list = list;
                                    return list;
                                }
                            }, {
                                key: 'search',
                                value: function search(pattern) {
                                    this._log('---------\nSearch pattern: "' + pattern + '"');
                                    var _prepareSearchers2 = this._prepareSearchers(pattern), tokenSearchers = _prepareSearchers2.tokenSearchers, fullSearcher = _prepareSearchers2.fullSearcher;
                                    var _search2 = this._search(tokenSearchers, fullSearcher), weights = _search2.weights, results = _search2.results;
                                    this._computeScore(weights, results);
                                    if (this.options.shouldSort) {
                                        this._sort(results);
                                    }
                                    return this._format(results);
                                }
                            }, {
                                key: '_prepareSearchers',
                                value: function _prepareSearchers() {
                                    var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                                    var tokenSearchers = [];
                                    if (this.options.tokenize) {
                                        // Tokenize on the separator
                                        var tokens = pattern.split(this.options.tokenSeparator);
                                        for (var i = 0, len = tokens.length; i < len; i += 1) {
                                            tokenSearchers.push(new Bitap(tokens[i], this.options));
                                        }
                                    }
                                    var fullSearcher = new Bitap(pattern, this.options);
                                    return { tokenSearchers: tokenSearchers, fullSearcher: fullSearcher };
                                }
                            }, {
                                key: '_search',
                                value: function _search() {
                                    var tokenSearchers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
                                    var fullSearcher = arguments[1];
                                    var list = this.list;
                                    var resultMap = {};
                                    var results = [];
                                    // Check the first item in the list, if it's a string, then we assume
                                    // that every item in the list is also a string, and thus it's a flattened array.
                                    if (typeof list[0] === 'string') {
                                        // Iterate over every item
                                        for (var i = 0, len = list.length; i < len; i += 1) {
                                            this._analyze({
                                                key: '',
                                                value: list[i],
                                                record: i,
                                                index: i
                                            }, {
                                                resultMap: resultMap,
                                                results: results,
                                                tokenSearchers: tokenSearchers,
                                                fullSearcher: fullSearcher
                                            });
                                        }
                                        return { weights: null, results: results };
                                    }
                                    // Otherwise, the first item is an Object (hopefully), and thus the searching
                                    // is done on the values of the keys of each item.
                                    var weights = {};
                                    for (var _i = 0, _len = list.length; _i < _len; _i += 1) {
                                        var item = list[_i];
                                        // Iterate over every key
                                        for (var j = 0, keysLen = this.options.keys.length; j < keysLen; j += 1) {
                                            var key = this.options.keys[j];
                                            if (typeof key !== 'string') {
                                                weights[key.name] = {
                                                    weight: 1 - key.weight || 1
                                                };
                                                if (key.weight <= 0 || key.weight > 1) {
                                                    throw new Error('Key weight has to be > 0 and <= 1');
                                                }
                                                key = key.name;
                                            }
                                            else {
                                                weights[key] = {
                                                    weight: 1
                                                };
                                            }
                                            this._analyze({
                                                key: key,
                                                value: this.options.getFn(item, key),
                                                record: item,
                                                index: _i
                                            }, {
                                                resultMap: resultMap,
                                                results: results,
                                                tokenSearchers: tokenSearchers,
                                                fullSearcher: fullSearcher
                                            });
                                        }
                                    }
                                    return { weights: weights, results: results };
                                }
                            }, {
                                key: '_analyze',
                                value: function _analyze(_ref2, _ref3) {
                                    var key = _ref2.key, _ref2$arrayIndex = _ref2.arrayIndex, arrayIndex = _ref2$arrayIndex === undefined ? -1 : _ref2$arrayIndex, value = _ref2.value, record = _ref2.record, index = _ref2.index;
                                    var _ref3$tokenSearchers = _ref3.tokenSearchers, tokenSearchers = _ref3$tokenSearchers === undefined ? [] : _ref3$tokenSearchers, _ref3$fullSearcher = _ref3.fullSearcher, fullSearcher = _ref3$fullSearcher === undefined ? [] : _ref3$fullSearcher, _ref3$resultMap = _ref3.resultMap, resultMap = _ref3$resultMap === undefined ? {} : _ref3$resultMap, _ref3$results = _ref3.results, results = _ref3$results === undefined ? [] : _ref3$results;
                                    // Check if the texvaluet can be searched
                                    if (value === undefined || value === null) {
                                        return;
                                    }
                                    var exists = false;
                                    var averageScore = -1;
                                    var numTextMatches = 0;
                                    if (typeof value === 'string') {
                                        this._log('\nKey: ' + (key === '' ? '-' : key));
                                        var mainSearchResult = fullSearcher.search(value);
                                        this._log('Full text: "' + value + '", score: ' + mainSearchResult.score);
                                        if (this.options.tokenize) {
                                            var words = value.split(this.options.tokenSeparator);
                                            var scores = [];
                                            for (var i = 0; i < tokenSearchers.length; i += 1) {
                                                var tokenSearcher = tokenSearchers[i];
                                                this._log('\nPattern: "' + tokenSearcher.pattern + '"');
                                                // let tokenScores = []
                                                var hasMatchInText = false;
                                                for (var j = 0; j < words.length; j += 1) {
                                                    var word = words[j];
                                                    var tokenSearchResult = tokenSearcher.search(word);
                                                    var obj = {};
                                                    if (tokenSearchResult.isMatch) {
                                                        obj[word] = tokenSearchResult.score;
                                                        exists = true;
                                                        hasMatchInText = true;
                                                        scores.push(tokenSearchResult.score);
                                                    }
                                                    else {
                                                        obj[word] = 1;
                                                        if (!this.options.matchAllTokens) {
                                                            scores.push(1);
                                                        }
                                                    }
                                                    this._log('Token: "' + word + '", score: ' + obj[word]);
                                                    // tokenScores.push(obj)
                                                }
                                                if (hasMatchInText) {
                                                    numTextMatches += 1;
                                                }
                                            }
                                            averageScore = scores[0];
                                            var scoresLen = scores.length;
                                            for (var _i2 = 1; _i2 < scoresLen; _i2 += 1) {
                                                averageScore += scores[_i2];
                                            }
                                            averageScore = averageScore / scoresLen;
                                            this._log('Token score average:', averageScore);
                                        }
                                        var finalScore = mainSearchResult.score;
                                        if (averageScore > -1) {
                                            finalScore = (finalScore + averageScore) / 2;
                                        }
                                        this._log('Score average:', finalScore);
                                        var checkTextMatches = this.options.tokenize && this.options.matchAllTokens ? numTextMatches >= tokenSearchers.length : true;
                                        this._log('\nCheck Matches: ' + checkTextMatches);
                                        // If a match is found, add the item to <rawResults>, including its score
                                        if ((exists || mainSearchResult.isMatch) && checkTextMatches) {
                                            // Check if the item already exists in our results
                                            var existingResult = resultMap[index];
                                            if (existingResult) {
                                                // Use the lowest score
                                                // existingResult.score, bitapResult.score
                                                existingResult.output.push({
                                                    key: key,
                                                    arrayIndex: arrayIndex,
                                                    value: value,
                                                    score: finalScore,
                                                    matchedIndices: mainSearchResult.matchedIndices
                                                });
                                            }
                                            else {
                                                // Add it to the raw result list
                                                resultMap[index] = {
                                                    item: record,
                                                    output: [{
                                                            key: key,
                                                            arrayIndex: arrayIndex,
                                                            value: value,
                                                            score: finalScore,
                                                            matchedIndices: mainSearchResult.matchedIndices
                                                        }]
                                                };
                                                results.push(resultMap[index]);
                                            }
                                        }
                                    }
                                    else if (isArray(value)) {
                                        for (var _i3 = 0, len = value.length; _i3 < len; _i3 += 1) {
                                            this._analyze({
                                                key: key,
                                                arrayIndex: _i3,
                                                value: value[_i3],
                                                record: record,
                                                index: index
                                            }, {
                                                resultMap: resultMap,
                                                results: results,
                                                tokenSearchers: tokenSearchers,
                                                fullSearcher: fullSearcher
                                            });
                                        }
                                    }
                                }
                            }, {
                                key: '_computeScore',
                                value: function _computeScore(weights, results) {
                                    this._log('\n\nComputing score:\n');
                                    for (var i = 0, len = results.length; i < len; i += 1) {
                                        var output = results[i].output;
                                        var scoreLen = output.length;
                                        var currScore = 1;
                                        var bestScore = 1;
                                        for (var j = 0; j < scoreLen; j += 1) {
                                            var weight = weights ? weights[output[j].key].weight : 1;
                                            var score = weight === 1 ? output[j].score : output[j].score || 0.001;
                                            var nScore = score * weight;
                                            if (weight !== 1) {
                                                bestScore = Math.min(bestScore, nScore);
                                            }
                                            else {
                                                output[j].nScore = nScore;
                                                currScore *= nScore;
                                            }
                                        }
                                        results[i].score = bestScore === 1 ? currScore : bestScore;
                                        this._log(results[i]);
                                    }
                                }
                            }, {
                                key: '_sort',
                                value: function _sort(results) {
                                    this._log('\n\nSorting....');
                                    results.sort(this.options.sortFn);
                                }
                            }, {
                                key: '_format',
                                value: function _format(results) {
                                    var finalOutput = [];
                                    if (this.options.verbose) {
                                        this._log('\n\nOutput:\n\n', JSON.stringify(results));
                                    }
                                    var transformers = [];
                                    if (this.options.includeMatches) {
                                        transformers.push(function (result, data) {
                                            var output = result.output;
                                            data.matches = [];
                                            for (var i = 0, len = output.length; i < len; i += 1) {
                                                var item = output[i];
                                                if (item.matchedIndices.length === 0) {
                                                    continue;
                                                }
                                                var obj = {
                                                    indices: item.matchedIndices,
                                                    value: item.value
                                                };
                                                if (item.key) {
                                                    obj.key = item.key;
                                                }
                                                if (item.hasOwnProperty('arrayIndex') && item.arrayIndex > -1) {
                                                    obj.arrayIndex = item.arrayIndex;
                                                }
                                                data.matches.push(obj);
                                            }
                                        });
                                    }
                                    if (this.options.includeScore) {
                                        transformers.push(function (result, data) {
                                            data.score = result.score;
                                        });
                                    }
                                    for (var i = 0, len = results.length; i < len; i += 1) {
                                        var result = results[i];
                                        if (this.options.id) {
                                            result.item = this.options.getFn(result.item, this.options.id)[0];
                                        }
                                        if (!transformers.length) {
                                            finalOutput.push(result.item);
                                            continue;
                                        }
                                        var data = {
                                            item: result.item
                                        };
                                        for (var j = 0, _len2 = transformers.length; j < _len2; j += 1) {
                                            transformers[j](result, data);
                                        }
                                        finalOutput.push(data);
                                    }
                                    return finalOutput;
                                }
                            }, {
                                key: '_log',
                                value: function _log() {
                                    if (this.options.verbose) {
                                        var _console;
                                        (_console = console).log.apply(_console, arguments);
                                    }
                                }
                            }]);
                        return Fuse;
                    }();
                    module.exports = Fuse;
                    /***/ 
                })
                /******/ 
            ]);
        });
        //# sourceMappingURL=fuse.js.map
        /***/ 
    }),
    /***/ "./node_modules/process/browser.js": 
    /*!*****************************************!*\
      !*** ./node_modules/process/browser.js ***!
      \*****************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // shim for using process in browser
        var process = module.exports = {};
        // cached from whatever global is present so that test runners that stub it
        // don't break things.  But we need to wrap it in a try catch in case it is
        // wrapped in strict mode code which doesn't define any globals.  It's inside a
        // function because try/catches deoptimize in certain engines.
        var cachedSetTimeout;
        var cachedClearTimeout;
        function defaultSetTimout() {
            throw new Error('setTimeout has not been defined');
        }
        function defaultClearTimeout() {
            throw new Error('clearTimeout has not been defined');
        }
        (function () {
            try {
                if (typeof setTimeout === 'function') {
                    cachedSetTimeout = setTimeout;
                }
                else {
                    cachedSetTimeout = defaultSetTimout;
                }
            }
            catch (e) {
                cachedSetTimeout = defaultSetTimout;
            }
            try {
                if (typeof clearTimeout === 'function') {
                    cachedClearTimeout = clearTimeout;
                }
                else {
                    cachedClearTimeout = defaultClearTimeout;
                }
            }
            catch (e) {
                cachedClearTimeout = defaultClearTimeout;
            }
        }());
        function runTimeout(fun) {
            if (cachedSetTimeout === setTimeout) {
                //normal enviroments in sane situations
                return setTimeout(fun, 0);
            }
            // if setTimeout wasn't available but was latter defined
            if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                cachedSetTimeout = setTimeout;
                return setTimeout(fun, 0);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedSetTimeout(fun, 0);
            }
            catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                    return cachedSetTimeout.call(null, fun, 0);
                }
                catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                    return cachedSetTimeout.call(this, fun, 0);
                }
            }
        }
        function runClearTimeout(marker) {
            if (cachedClearTimeout === clearTimeout) {
                //normal enviroments in sane situations
                return clearTimeout(marker);
            }
            // if clearTimeout wasn't available but was latter defined
            if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                cachedClearTimeout = clearTimeout;
                return clearTimeout(marker);
            }
            try {
                // when when somebody has screwed with setTimeout but no I.E. maddness
                return cachedClearTimeout(marker);
            }
            catch (e) {
                try {
                    // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                    return cachedClearTimeout.call(null, marker);
                }
                catch (e) {
                    // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                    // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                    return cachedClearTimeout.call(this, marker);
                }
            }
        }
        var queue = [];
        var draining = false;
        var currentQueue;
        var queueIndex = -1;
        function cleanUpNextTick() {
            if (!draining || !currentQueue) {
                return;
            }
            draining = false;
            if (currentQueue.length) {
                queue = currentQueue.concat(queue);
            }
            else {
                queueIndex = -1;
            }
            if (queue.length) {
                drainQueue();
            }
        }
        function drainQueue() {
            if (draining) {
                return;
            }
            var timeout = runTimeout(cleanUpNextTick);
            draining = true;
            var len = queue.length;
            while (len) {
                currentQueue = queue;
                queue = [];
                while (++queueIndex < len) {
                    if (currentQueue) {
                        currentQueue[queueIndex].run();
                    }
                }
                queueIndex = -1;
                len = queue.length;
            }
            currentQueue = null;
            draining = false;
            runClearTimeout(timeout);
        }
        process.nextTick = function (fun) {
            var args = new Array(arguments.length - 1);
            if (arguments.length > 1) {
                for (var i = 1; i < arguments.length; i++) {
                    args[i - 1] = arguments[i];
                }
            }
            queue.push(new Item(fun, args));
            if (queue.length === 1 && !draining) {
                runTimeout(drainQueue);
            }
        };
        // v8 likes predictible objects
        function Item(fun, array) {
            this.fun = fun;
            this.array = array;
        }
        Item.prototype.run = function () {
            this.fun.apply(null, this.array);
        };
        process.title = 'browser';
        process.browser = true;
        process.env = {};
        process.argv = [];
        process.version = ''; // empty string to avoid regexp issues
        process.versions = {};
        function noop() { }
        process.on = noop;
        process.addListener = noop;
        process.once = noop;
        process.off = noop;
        process.removeListener = noop;
        process.removeAllListeners = noop;
        process.emit = noop;
        process.prependListener = noop;
        process.prependOnceListener = noop;
        process.listeners = function (name) { return []; };
        process.binding = function (name) {
            throw new Error('process.binding is not supported');
        };
        process.cwd = function () { return '/'; };
        process.chdir = function (dir) {
            throw new Error('process.chdir is not supported');
        };
        process.umask = function () { return 0; };
        /***/ 
    }),
    /***/ "./node_modules/setimmediate/setImmediate.js": 
    /*!***************************************************!*\
      !*** ./node_modules/setimmediate/setImmediate.js ***!
      \***************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (global, process) {
            (function (global, undefined) {
                "use strict";
                if (global.setImmediate) {
                    return;
                }
                var nextHandle = 1; // Spec says greater than zero
                var tasksByHandle = {};
                var currentlyRunningATask = false;
                var doc = global.document;
                var registerImmediate;
                function setImmediate(callback) {
                    // Callback can either be a function or a string
                    if (typeof callback !== "function") {
                        callback = new Function("" + callback);
                    }
                    // Copy function arguments
                    var args = new Array(arguments.length - 1);
                    for (var i = 0; i < args.length; i++) {
                        args[i] = arguments[i + 1];
                    }
                    // Store and register the task
                    var task = { callback: callback, args: args };
                    tasksByHandle[nextHandle] = task;
                    registerImmediate(nextHandle);
                    return nextHandle++;
                }
                function clearImmediate(handle) {
                    delete tasksByHandle[handle];
                }
                function run(task) {
                    var callback = task.callback;
                    var args = task.args;
                    switch (args.length) {
                        case 0:
                            callback();
                            break;
                        case 1:
                            callback(args[0]);
                            break;
                        case 2:
                            callback(args[0], args[1]);
                            break;
                        case 3:
                            callback(args[0], args[1], args[2]);
                            break;
                        default:
                            callback.apply(undefined, args);
                            break;
                    }
                }
                function runIfPresent(handle) {
                    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
                    // So if we're currently running a task, we'll need to delay this invocation.
                    if (currentlyRunningATask) {
                        // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
                        // "too much recursion" error.
                        setTimeout(runIfPresent, 0, handle);
                    }
                    else {
                        var task = tasksByHandle[handle];
                        if (task) {
                            currentlyRunningATask = true;
                            try {
                                run(task);
                            }
                            finally {
                                clearImmediate(handle);
                                currentlyRunningATask = false;
                            }
                        }
                    }
                }
                function installNextTickImplementation() {
                    registerImmediate = function (handle) {
                        process.nextTick(function () { runIfPresent(handle); });
                    };
                }
                function canUsePostMessage() {
                    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
                    // where `global.postMessage` means something completely different and can't be used for this purpose.
                    if (global.postMessage && !global.importScripts) {
                        var postMessageIsAsynchronous = true;
                        var oldOnMessage = global.onmessage;
                        global.onmessage = function () {
                            postMessageIsAsynchronous = false;
                        };
                        global.postMessage("", "*");
                        global.onmessage = oldOnMessage;
                        return postMessageIsAsynchronous;
                    }
                }
                function installPostMessageImplementation() {
                    // Installs an event handler on `global` for the `message` event: see
                    // * https://developer.mozilla.org/en/DOM/window.postMessage
                    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
                    var messagePrefix = "setImmediate$" + Math.random() + "$";
                    var onGlobalMessage = function (event) {
                        if (event.source === global &&
                            typeof event.data === "string" &&
                            event.data.indexOf(messagePrefix) === 0) {
                            runIfPresent(+event.data.slice(messagePrefix.length));
                        }
                    };
                    if (global.addEventListener) {
                        global.addEventListener("message", onGlobalMessage, false);
                    }
                    else {
                        global.attachEvent("onmessage", onGlobalMessage);
                    }
                    registerImmediate = function (handle) {
                        global.postMessage(messagePrefix + handle, "*");
                    };
                }
                function installMessageChannelImplementation() {
                    var channel = new MessageChannel();
                    channel.port1.onmessage = function (event) {
                        var handle = event.data;
                        runIfPresent(handle);
                    };
                    registerImmediate = function (handle) {
                        channel.port2.postMessage(handle);
                    };
                }
                function installReadyStateChangeImplementation() {
                    var html = doc.documentElement;
                    registerImmediate = function (handle) {
                        // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
                        // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
                        var script = doc.createElement("script");
                        script.onreadystatechange = function () {
                            runIfPresent(handle);
                            script.onreadystatechange = null;
                            html.removeChild(script);
                            script = null;
                        };
                        html.appendChild(script);
                    };
                }
                function installSetTimeoutImplementation() {
                    registerImmediate = function (handle) {
                        setTimeout(runIfPresent, 0, handle);
                    };
                }
                // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
                var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
                attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
                // Don't get fooled by e.g. browserify environments.
                if ({}.toString.call(global.process) === "[object process]") {
                    // For Node.js before 0.9
                    installNextTickImplementation();
                }
                else if (canUsePostMessage()) {
                    // For non-IE10 modern browsers
                    installPostMessageImplementation();
                }
                else if (global.MessageChannel) {
                    // For web workers, where supported
                    installMessageChannelImplementation();
                }
                else if (doc && "onreadystatechange" in doc.createElement("script")) {
                    // For IE 6–8
                    installReadyStateChangeImplementation();
                }
                else {
                    // For older browsers
                    installSetTimeoutImplementation();
                }
                attachTo.setImmediate = setImmediate;
                attachTo.clearImmediate = clearImmediate;
            }(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));
            /* WEBPACK VAR INJECTION */ 
        }.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")));
        /***/ 
    }),
    /***/ "./node_modules/timers-browserify/main.js": 
    /*!************************************************!*\
      !*** ./node_modules/timers-browserify/main.js ***!
      \************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        /* WEBPACK VAR INJECTION */ (function (global) {
            var scope = (typeof global !== "undefined" && global) ||
                (typeof self !== "undefined" && self) ||
                window;
            var apply = Function.prototype.apply;
            // DOM APIs, for completeness
            exports.setTimeout = function () {
                return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
            };
            exports.setInterval = function () {
                return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
            };
            exports.clearTimeout =
                exports.clearInterval = function (timeout) {
                    if (timeout) {
                        timeout.close();
                    }
                };
            function Timeout(id, clearFn) {
                this._id = id;
                this._clearFn = clearFn;
            }
            Timeout.prototype.unref = Timeout.prototype.ref = function () { };
            Timeout.prototype.close = function () {
                this._clearFn.call(scope, this._id);
            };
            // Does not start the time, just sets up the members needed.
            exports.enroll = function (item, msecs) {
                clearTimeout(item._idleTimeoutId);
                item._idleTimeout = msecs;
            };
            exports.unenroll = function (item) {
                clearTimeout(item._idleTimeoutId);
                item._idleTimeout = -1;
            };
            exports._unrefActive = exports.active = function (item) {
                clearTimeout(item._idleTimeoutId);
                var msecs = item._idleTimeout;
                if (msecs >= 0) {
                    item._idleTimeoutId = setTimeout(function onTimeout() {
                        if (item._onTimeout)
                            item._onTimeout();
                    }, msecs);
                }
            };
            // setimmediate attaches itself to the global object
            __webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
            // On some exotic environments, it's not clear which object `setimmediate` was
            // able to install onto.  Search each possibility in the same order as the
            // `setimmediate` library.
            exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                (typeof global !== "undefined" && global.setImmediate) ||
                (this && this.setImmediate);
            exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                (typeof global !== "undefined" && global.clearImmediate) ||
                (this && this.clearImmediate);
            /* WEBPACK VAR INJECTION */ 
        }.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")));
        /***/ 
    }),
    /***/ "./node_modules/v-click-outside/dist/v-click-outside.min.umd.js": 
    /*!**********************************************************************!*\
      !*** ./node_modules/v-click-outside/dist/v-click-outside.min.umd.js ***!
      \**********************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        !function (e, n) { true ? module.exports = n() : undefined; }(this, function () { var e = "ontouchstart" in window || navigator.msMaxTouchPoints > 0 ? ["touchstart", "click"] : ["click"], n = []; function t(n) { var t = "function" == typeof n; if (!t && "object" != typeof n)
            throw new Error("v-click-outside: Binding value must be a function or an object"); return { handler: t ? n : n.handler, middleware: n.middleware || function (e) { return e; }, events: n.events || e }; } function r(e) { var n = e.el, t = e.event, r = e.handler, i = e.middleware; t.target !== n && !n.contains(t.target) && i(t, n) && r(t, n); } var i = "undefined" != typeof window ? { bind: function (e, i) { var d = t(i.value), o = d.handler, a = d.middleware, u = { el: e, eventHandlers: d.events.map(function (n) { return { event: n, handler: function (n) { return r({ event: n, el: e, handler: o, middleware: a }); } }; }) }; u.eventHandlers.forEach(function (e) { return document.addEventListener(e.event, e.handler); }), n.push(u); }, update: function (e, i) { var d = t(i.value), o = d.handler, a = d.middleware, u = d.events, c = n.find(function (n) { return n.el === e; }); c.eventHandlers.forEach(function (e) { return document.removeEventListener(e.event, e.handler); }), c.eventHandlers = u.map(function (n) { return { event: n, handler: function (n) { return r({ event: n, el: e, handler: o, middleware: a }); } }; }), c.eventHandlers.forEach(function (e) { return document.addEventListener(e.event, e.handler); }); }, unbind: function (e) { n.find(function (n) { return n.el === e; }).eventHandlers.forEach(function (e) { return document.removeEventListener(e.event, e.handler); }); }, instances: n } : {}; return { install: function (e) { e.directive("click-outside", i); }, directive: i }; });
        //# sourceMappingURL=v-click-outside.min.min.min.min.umd.js.map
        /***/ 
    }),
    /***/ "./node_modules/vue-loader/lib/runtime/component-normalizer.js": 
    /*!*********************************************************************!*\
      !*** ./node_modules/vue-loader/lib/runtime/component-normalizer.js ***!
      \*********************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return normalizeComponent; });
        /* globals __VUE_SSR_CONTEXT__ */
        // IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
        // This module is a runtime utility for cleaner component module output and will
        // be included in the final webpack user bundle.
        function normalizeComponent(scriptExports, render, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, /* server only */ shadowMode /* vue-cli only */) {
            scriptExports = scriptExports || {};
            // ES6 modules interop
            var type = typeof scriptExports.default;
            if (type === 'object' || type === 'function') {
                scriptExports = scriptExports.default;
            }
            // Vue.extend constructor export interop
            var options = typeof scriptExports === 'function'
                ? scriptExports.options
                : scriptExports;
            // render functions
            if (render) {
                options.render = render;
                options.staticRenderFns = staticRenderFns;
                options._compiled = true;
            }
            // functional template
            if (functionalTemplate) {
                options.functional = true;
            }
            // scopedId
            if (scopeId) {
                options._scopeId = scopeId;
            }
            var hook;
            if (moduleIdentifier) { // server build
                hook = function (context) {
                    // 2.3 injection
                    context =
                        context || // cached call
                            (this.$vnode && this.$vnode.ssrContext) || // stateful
                            (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
                    // 2.2 with runInNewContext: true
                    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                        context = __VUE_SSR_CONTEXT__;
                    }
                    // inject component styles
                    if (injectStyles) {
                        injectStyles.call(this, context);
                    }
                    // register component module identifier for async chunk inferrence
                    if (context && context._registeredComponents) {
                        context._registeredComponents.add(moduleIdentifier);
                    }
                };
                // used by ssr in case component is cached and beforeCreate
                // never gets called
                options._ssrRegister = hook;
            }
            else if (injectStyles) {
                hook = shadowMode
                    ? function () { injectStyles.call(this, this.$root.$options.shadowRoot); }
                    : injectStyles;
            }
            if (hook) {
                if (options.functional) {
                    // for template-only hot-reload because in that case the render fn doesn't
                    // go through the normalizer
                    options._injectStyles = hook;
                    // register for functioal component in vue file
                    var originalRender = options.render;
                    options.render = function renderWithStyleInjection(h, context) {
                        hook.call(context);
                        return originalRender(h, context);
                    };
                }
                else {
                    // inject component registration as beforeCreate hook
                    var existing = options.beforeCreate;
                    options.beforeCreate = existing
                        ? [].concat(existing, hook)
                        : [hook];
                }
            }
            return {
                exports: scriptExports,
                options: options
            };
        }
        /***/ 
    }),
    /***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0f4184bc\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-side-nav-menu/s-side-nav-menu.vue": 
    /*!****************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0f4184bc","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-side-nav-menu/s-side-nav-menu.vue ***!
      \****************************************************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function () { return render; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () { return staticRenderFns; });
        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", { staticClass: "s-side-nav-menu", class: _vm.styleClass }, [
                _vm._l(_vm.navMenuItems, function (item) {
                    return [
                        item.type == "single"
                            ? _c("div", {
                                key: item.name,
                                staticClass: "menu-item",
                                class: item.current ? "selected-menu-item" : ""
                            }, [
                                _c("div", { staticClass: "name" }, [
                                    !item.current
                                        ? _c("a", { attrs: { href: item.url } }, [
                                            _vm._v(_vm._s(item.name))
                                        ])
                                        : _vm._e(),
                                    _vm._v(" "),
                                    item.current ? [_vm._v(_vm._s(item.name))] : _vm._e()
                                ], 2)
                            ])
                            : _vm._e(),
                        _vm._v(" "),
                        item.type == "group"
                            ? _c("div", {
                                key: item.name,
                                staticClass: "menu-item dropdown",
                                class: item.show ? "opened" : ""
                            }, [
                                _c("div", {
                                    staticClass: "name",
                                    attrs: { role: "button" },
                                    on: {
                                        click: function ($event) {
                                            _vm.showHide(item);
                                        }
                                    }
                                }, [
                                    _c("div", { staticClass: "text" }, [
                                        _vm._v("\n\t\t\t\t\t" + _vm._s(item.name) + "\n\t\t\t\t")
                                    ]),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "caret" }, [
                                        _c("i", {
                                            directives: [
                                                {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: item.show,
                                                    expression: "item.show"
                                                }
                                            ],
                                            staticClass: "fa fa-caret-down",
                                            attrs: { "aria-hidden": "true" }
                                        }),
                                        _vm._v(" "),
                                        _c("i", {
                                            directives: [
                                                {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: !item.show,
                                                    expression: "!item.show"
                                                }
                                            ],
                                            staticClass: "fa fa-caret-right",
                                            attrs: { "aria-hidden": "true" }
                                        })
                                    ])
                                ]),
                                _vm._v(" "),
                                _c("transition", { attrs: { name: "dropdown-content" } }, [
                                    _c("div", {
                                        directives: [
                                            {
                                                name: "show",
                                                rawName: "v-show",
                                                value: item.show,
                                                expression: "item.show"
                                            }
                                        ],
                                        key: "dropdown",
                                        staticClass: "dropdown-content"
                                    }, _vm._l(item.children, function (child) {
                                        return _c("div", {
                                            key: child.name,
                                            staticClass: "children",
                                            class: child.current ? "selected-menu-item" : ""
                                        }, [
                                            !child.current
                                                ? _c("a", { attrs: { href: child.url } }, [
                                                    _vm._v(_vm._s(child.name))
                                                ])
                                                : _vm._e(),
                                            _vm._v(" "),
                                            child.current
                                                ? [_vm._v(_vm._s(child.name))]
                                                : _vm._e()
                                        ], 2);
                                    }))
                                ])
                            ], 1)
                            : _vm._e()
                    ];
                })
            ], 2);
        };
        var staticRenderFns = [];
        render._withStripped = true;
        if (false) { }
        /***/ 
    }),
    /***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-17c0c85a\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-table/s-table.vue": 
    /*!***********************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-17c0c85a","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-table/s-table.vue ***!
      \***********************************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function () { return render; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () { return staticRenderFns; });
        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                directives: [
                    {
                        name: "scroll",
                        rawName: "v-scroll",
                        value: _vm.scroll,
                        expression: "scroll"
                    }
                ],
                staticClass: "s-table",
                class: _vm.styleClass,
                on: {
                    mousemove: function ($event) {
                        _vm.resizeColumn($event);
                    },
                    mouseup: function ($event) {
                        _vm.stopResizeColumn();
                    }
                }
            }, [
                _c("div", {
                    staticClass: "group-area",
                    on: {
                        dragenter: function ($event) {
                            _vm.state.enabledGroupingArea
                                ? _vm.columnDragEnter(_vm.groupAreaName, $event)
                                : 0;
                        },
                        dragend: function ($event) {
                            _vm.state.enabledGroupingArea ? _vm.columnDragEnd($event) : 0;
                        }
                    }
                }, [
                    _vm._l(_vm.state.groupingColumns, function (groupingColumn) {
                        return _c("div", {
                            key: groupingColumn.key,
                            staticClass: "group-item",
                            attrs: { draggable: "true" },
                            on: {
                                click: function ($event) {
                                    _vm.sortByMany(groupingColumn);
                                },
                                dragstart: function ($event) {
                                    _vm.columnDragStart(groupingColumn, $event, (_vm.enabledGroupingArea = false));
                                },
                                dragenter: function ($event) {
                                    _vm.columnDragEnter(groupingColumn, $event);
                                },
                                dragend: function ($event) {
                                    _vm.columnDragEnd($event, "type: groupMove");
                                }
                            }
                        }, [
                            _c("div", { staticClass: "sort-icon" }, [
                                _c("span", {
                                    directives: [
                                        {
                                            name: "show",
                                            rawName: "v-show",
                                            value: groupingColumn.sortingDirection,
                                            expression: "groupingColumn.sortingDirection"
                                        }
                                    ]
                                }, [
                                    _c("transition", { attrs: { name: "sort-ascending", mode: "out-in" } }, [
                                        _c("i", {
                                            directives: [
                                                {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: groupingColumn.sortingDirection == 1,
                                                    expression: "groupingColumn.sortingDirection == 1"
                                                }
                                            ],
                                            staticClass: "fa fa-arrow-up arrow",
                                            attrs: { "aria-hidden": "true" }
                                        })
                                    ]),
                                    _vm._v(" "),
                                    _c("transition", { attrs: { name: "sort-descending", mode: "out-in" } }, [
                                        _c("i", {
                                            directives: [
                                                {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value: groupingColumn.sortingDirection == -1,
                                                    expression: "groupingColumn.sortingDirection == -1"
                                                }
                                            ],
                                            staticClass: "fa fa-arrow-down arrow",
                                            attrs: { "aria-hidden": "true" }
                                        })
                                    ])
                                ], 1)
                            ]),
                            _vm._v("\n\t\t\t" + _vm._s(groupingColumn.name) + "\n\t\t\t"),
                            _c("div", {
                                staticClass: "ungroup",
                                on: {
                                    click: function ($event) {
                                        _vm.removeColumForGrouping(groupingColumn);
                                    }
                                }
                            }, [
                                _c("i", {
                                    staticClass: "fa fa-times",
                                    attrs: { "aria-hidden": "true" }
                                })
                            ])
                        ]);
                    }),
                    _vm._v(" "),
                    !_vm.hasGrouped
                        ? [
                            _vm._v("\n\t\t\tDrag a column header and drop it here to group by that column\n\t\t")
                        ]
                        : _vm._e()
                ], 2),
                _vm._v(" "),
                _c("div", { staticClass: "table-container" }, [
                    _c("table", { staticClass: "table", style: { width: _vm.getTableWidth() } }, [
                        _c("tfoot", { staticClass: "footer" }, [
                            _c("tr", [
                                _vm._l(_vm.state.groupingColumns, function (trash, j) {
                                    return _c("th", { key: j });
                                }),
                                _vm._v(" "),
                                _vm._l(_vm.state.columns, function (column) {
                                    return _c("th", [
                                        !column.hidden
                                            ? _vm._t(column.id + "-footer", null, {
                                                cells: _vm.getCells(_vm.items, column.id)
                                            })
                                            : _vm._e()
                                    ], 2);
                                })
                            ], 2)
                        ]),
                        _vm._v(" "),
                        _c("thead", { staticClass: "header" }, [
                            _c("tr", [
                                _vm._l(_vm.state.groupingColumns, function (trash, j) {
                                    return _c("th", {
                                        key: j,
                                        staticClass: "column",
                                        style: { width: 24 }
                                    });
                                }),
                                _vm._v(" "),
                                _vm._l(_vm.state.columns, function (column) {
                                    return _c("th", {
                                        key: column.id,
                                        staticClass: "column",
                                        style: {
                                            "min-width": _vm.getMinWidth(column) + _vm.minWidthBias,
                                            width: column.hidden
                                                ? _vm.hiddenColumnSize
                                                : column.width ||
                                                    _vm.getMinWidth(column) + _vm.minWidthBias
                                        }
                                    }, [
                                        _c("div", { staticClass: "container" }, [
                                            _vm.state.hidable
                                                ? [
                                                    _c("div", {
                                                        staticClass: "rol-up",
                                                        on: {
                                                            click: function ($event) {
                                                                column.hidden
                                                                    ? _vm.showColumn(column, $event)
                                                                    : _vm.hideColumn(column, $event);
                                                            }
                                                        }
                                                    }, [
                                                        _c("transition", {
                                                            attrs: {
                                                                name: "sort-ascending",
                                                                mode: "out-in"
                                                            }
                                                        }, [
                                                            _c("i", {
                                                                directives: [
                                                                    {
                                                                        name: "show",
                                                                        rawName: "v-show",
                                                                        value: !column.hidden,
                                                                        expression: "!column.hidden"
                                                                    }
                                                                ],
                                                                staticClass: "fa fa-caret-left",
                                                                attrs: {
                                                                    role: "button",
                                                                    "aria-hidden": "true",
                                                                    title: "Hide column '" +
                                                                        column.name +
                                                                        "'"
                                                                }
                                                            })
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("transition", {
                                                            attrs: {
                                                                name: "sort-descending",
                                                                mode: "out-in"
                                                            }
                                                        }, [
                                                            _c("i", {
                                                                directives: [
                                                                    {
                                                                        name: "show",
                                                                        rawName: "v-show",
                                                                        value: column.hidden,
                                                                        expression: "column.hidden"
                                                                    }
                                                                ],
                                                                staticClass: "fa fa-caret-right",
                                                                attrs: {
                                                                    role: "button",
                                                                    "aria-hidden": "true",
                                                                    title: "Show column '" +
                                                                        column.name +
                                                                        "'"
                                                                }
                                                            })
                                                        ])
                                                    ], 1)
                                                ]
                                                : _vm._e(),
                                            _vm._v(" "),
                                            !column.hidden
                                                ? _c("div", {
                                                    staticClass: "name hint hint--bottom hint--info",
                                                    style: { width: _vm.getMinWidth(column) },
                                                    attrs: {
                                                        "data-hint": column.name,
                                                        draggable: "true"
                                                    },
                                                    on: {
                                                        click: [
                                                            function ($event) {
                                                                if ($event.ctrlKey ||
                                                                    $event.shiftKey ||
                                                                    $event.altKey ||
                                                                    $event.metaKey) {
                                                                    return null;
                                                                }
                                                                _vm.state.sortable
                                                                    ? _vm.sortByOne(column)
                                                                    : 0;
                                                            },
                                                            function ($event) {
                                                                if (!$event.ctrlKey) {
                                                                    return null;
                                                                }
                                                                _vm.state.sortable
                                                                    ? _vm.sortByMany(column)
                                                                    : 0;
                                                            }
                                                        ],
                                                        dragstart: function ($event) {
                                                            _vm.state.groupable
                                                                ? _vm.columnDragStart(column, $event)
                                                                : 0;
                                                        },
                                                        dragenter: function ($event) {
                                                            _vm.state.groupable
                                                                ? _vm.columnDragEnter(column, $event)
                                                                : 0;
                                                        },
                                                        dragend: function ($event) {
                                                            _vm.state.groupable
                                                                ? _vm.columnDragEnd($event)
                                                                : 0;
                                                        }
                                                    }
                                                }, [
                                                    _vm._t(column.id + "-header", [
                                                        _vm._v("\n\t\t\t\t\t\t\t\t\t" +
                                                            _vm._s(column.name) +
                                                            "\n\t\t\t\t\t\t\t\t")
                                                    ], {
                                                        cells: _vm.getCells(_vm.items, column.id)
                                                    }),
                                                    _vm._v(" "),
                                                    _vm.state.sortable
                                                        ? [
                                                            _c("span", {
                                                                directives: [
                                                                    {
                                                                        name: "show",
                                                                        rawName: "v-show",
                                                                        value: column.sortingDirection,
                                                                        expression: "column.sortingDirection"
                                                                    }
                                                                ]
                                                            }, [
                                                                _c("transition", {
                                                                    attrs: {
                                                                        name: "sort-ascending",
                                                                        mode: "out-in"
                                                                    }
                                                                }, [
                                                                    _c("i", {
                                                                        directives: [
                                                                            {
                                                                                name: "show",
                                                                                rawName: "v-show",
                                                                                value: column.sortingDirection ==
                                                                                    1,
                                                                                expression: "column.sortingDirection == 1"
                                                                            }
                                                                        ],
                                                                        staticClass: "fa fa-arrow-up arrow",
                                                                        attrs: {
                                                                            "aria-hidden": "true"
                                                                        }
                                                                    })
                                                                ]),
                                                                _vm._v(" "),
                                                                _c("transition", {
                                                                    attrs: {
                                                                        name: "sort-descending",
                                                                        mode: "out-in"
                                                                    }
                                                                }, [
                                                                    _c("i", {
                                                                        directives: [
                                                                            {
                                                                                name: "show",
                                                                                rawName: "v-show",
                                                                                value: column.sortingDirection ==
                                                                                    -1,
                                                                                expression: "column.sortingDirection == -1"
                                                                            }
                                                                        ],
                                                                        staticClass: "fa fa-arrow-down arrow",
                                                                        attrs: {
                                                                            "aria-hidden": "true"
                                                                        }
                                                                    })
                                                                ])
                                                            ], 1)
                                                        ]
                                                        : _vm._e()
                                                ], 2)
                                                : _vm._e(),
                                            _vm._v(" "),
                                            _vm.state.groupable
                                                ? [
                                                    !column.hidden
                                                        ? _c("div", {
                                                            staticClass: "group",
                                                            on: {
                                                                click: function ($event) {
                                                                    column.grouping
                                                                        ? _vm.removeColumForGrouping(column)
                                                                        : _vm.addColumForGrouping(column);
                                                                }
                                                            }
                                                        }, [
                                                            _c("i", {
                                                                directives: [
                                                                    {
                                                                        name: "show",
                                                                        rawName: "v-show",
                                                                        value: !column.grouping,
                                                                        expression: "!column.grouping"
                                                                    }
                                                                ],
                                                                staticClass: "fa fa-object-group",
                                                                attrs: {
                                                                    "aria-hidden": "true",
                                                                    title: "Group column '" +
                                                                        column.name +
                                                                        "'"
                                                                }
                                                            }),
                                                            _vm._v(" "),
                                                            _c("i", {
                                                                directives: [
                                                                    {
                                                                        name: "show",
                                                                        rawName: "v-show",
                                                                        value: column.grouping,
                                                                        expression: "column.grouping"
                                                                    }
                                                                ],
                                                                staticClass: "fa fa-object-ungroup",
                                                                attrs: {
                                                                    "aria-hidden": "true",
                                                                    title: "Ungroup column '" +
                                                                        column.name +
                                                                        "'"
                                                                }
                                                            })
                                                        ])
                                                        : _vm._e()
                                                ]
                                                : _vm._e(),
                                            _vm._v(" "),
                                            _vm.state.filtrable
                                                ? [
                                                    !column.hidden
                                                        ? _c("div", {
                                                            staticClass: "filter",
                                                            class: column.filtering &&
                                                                column.filtering.enabled
                                                                ? "filter-enabled"
                                                                : "",
                                                            attrs: {
                                                                title: "Filter '" + column.name + "'"
                                                            },
                                                            on: {
                                                                click: function ($event) {
                                                                    _vm.showFilterForm(column);
                                                                }
                                                            }
                                                        }, [
                                                            _c("i", {
                                                                staticClass: "fa fa-filter",
                                                                attrs: { "aria-hidden": "true" }
                                                            })
                                                        ])
                                                        : _vm._e(),
                                                    _vm._v(" "),
                                                    column.showFilterForm
                                                        ? _c("div", {
                                                            directives: [
                                                                {
                                                                    name: "click-outside",
                                                                    rawName: "v-click-outside",
                                                                    value: function (a, b) {
                                                                        _vm.hideFilterForm(column);
                                                                    },
                                                                    expression: "function (a, b) { hideFilterForm(column) }"
                                                                }
                                                            ],
                                                            staticClass: "filter-container"
                                                        }, [
                                                            _c("div", { staticClass: "filter-window" }, [
                                                                _vm._v("\n\t\t\t\t\t\t\t\t\t\tShow items with value that:\n\t\t\t\t\t\t\t\t\t\t"),
                                                                _c("select", {
                                                                    directives: [
                                                                        {
                                                                            name: "model",
                                                                            rawName: "v-model",
                                                                            value: column.filtering
                                                                                .filterMode,
                                                                            expression: "column.filtering.filterMode"
                                                                        }
                                                                    ],
                                                                    staticClass: "filter-mods",
                                                                    on: {
                                                                        input: function ($event) {
                                                                            _vm.selectFilter(column, $event.target.value);
                                                                        },
                                                                        change: function ($event) {
                                                                            var $$selectedVal = Array.prototype.filter
                                                                                .call($event.target.options, function (o) {
                                                                                return o.selected;
                                                                            })
                                                                                .map(function (o) {
                                                                                var val = "_value" in o
                                                                                    ? o._value
                                                                                    : o.value;
                                                                                return val;
                                                                            });
                                                                            _vm.$set(column.filtering, "filterMode", $event.target.multiple
                                                                                ? $$selectedVal
                                                                                : $$selectedVal[0]);
                                                                        }
                                                                    }
                                                                }, _vm._l(_vm.filteringModes, function (filteringMode, filteringModeName) {
                                                                    return filteringMode.type ==
                                                                        "all" ||
                                                                        filteringMode.type ==
                                                                            column.type
                                                                        ? _c("option", {
                                                                            domProps: {
                                                                                value: filteringModeName
                                                                            }
                                                                        }, [
                                                                            _vm._v("\n\t\t\t\t\t\t\t\t\t\t\t\t" +
                                                                                _vm._s(filteringMode.title) +
                                                                                "\n\t\t\t\t\t\t\t\t\t\t\t")
                                                                        ])
                                                                        : _vm._e();
                                                                })),
                                                                _vm._v(" "),
                                                                _c("input", {
                                                                    directives: [
                                                                        {
                                                                            name: "model",
                                                                            rawName: "v-model",
                                                                            value: column.filtering.expected,
                                                                            expression: "column.filtering.expected"
                                                                        }
                                                                    ],
                                                                    staticClass: "expected-value-input",
                                                                    domProps: {
                                                                        value: column.filtering.expected
                                                                    },
                                                                    on: {
                                                                        input: [
                                                                            function ($event) {
                                                                                if ($event.target.composing) {
                                                                                    return;
                                                                                }
                                                                                _vm.$set(column.filtering, "expected", $event.target.value);
                                                                            },
                                                                            function ($event) {
                                                                                _vm.selectValueForFilter(column, $event.target.value);
                                                                            }
                                                                        ]
                                                                    }
                                                                }),
                                                                _vm._v(" "),
                                                                _c("button", {
                                                                    staticClass: "clear-button",
                                                                    on: {
                                                                        click: function ($event) {
                                                                            _vm.removeColumForFiltering(column);
                                                                        }
                                                                    }
                                                                }, [_vm._v("Clear")])
                                                            ])
                                                        ])
                                                        : _vm._e()
                                                ]
                                                : _vm._e(),
                                            _vm._v(" "),
                                            _vm.state.resizable
                                                ? [
                                                    !column.hidden
                                                        ? _c("div", { staticClass: "mover-container" }, [
                                                            _c("div", {
                                                                staticClass: "mover",
                                                                on: {
                                                                    mousedown: function ($event) {
                                                                        _vm.beginResizeColumn(column, $event);
                                                                    }
                                                                }
                                                            })
                                                        ])
                                                        : _vm._e()
                                                ]
                                                : _vm._e()
                                        ], 2)
                                    ]);
                                })
                            ], 2)
                        ]),
                        _vm._v(" "),
                        _c("tbody", { staticClass: "body" }, [
                            !_vm.hasGrouped
                                ? _vm._l(_vm.data.items, function (item, i) {
                                    return _c("tr", { key: i, staticClass: "lighting-row" }, _vm._l(_vm.state.columns, function (column) {
                                        return !column.hidden || i == 0
                                            ? _c("td", {
                                                key: i + column.id,
                                                class: column.hidden
                                                    ? "hidden-column"
                                                    : "cell",
                                                attrs: {
                                                    rowspan: column.hidden
                                                        ? _vm.state.paging.size
                                                        : 1
                                                }
                                            }, [
                                                !column.hidden
                                                    ? _vm._t(column.id + "-column", [
                                                        _vm._v("\n\t\t\t\t\t\t\t\t" +
                                                            _vm._s(item[column.id]) +
                                                            "\n\t\t\t\t\t\t\t")
                                                    ], { value: item[column.id] })
                                                    : _vm._e(),
                                                _vm._v(" "),
                                                column.hidden
                                                    ? _c("div", { staticClass: "vertical" }, [
                                                        _vm._v(_vm._s(column.name))
                                                    ])
                                                    : _vm._e()
                                            ], 2)
                                            : _vm._e();
                                    }));
                                })
                                : _vm._e(),
                            _vm._v(" "),
                            _vm.hasGrouped
                                ? [
                                    _vm._l(_vm.getGroupingItems(), function (groupingItem, i) {
                                        return [
                                            groupingItem.group && !groupingItem.hidden
                                                ? _c("tr", { key: i }, [
                                                    _vm._l(new Array(groupingItem.level), function (trash, j) {
                                                        return _c("th", { key: j, staticClass: "th-left" }, [
                                                            j == groupingItem.level - 1
                                                                ? _c("div", {
                                                                    staticClass: "rol-up",
                                                                    on: {
                                                                        click: function ($event) {
                                                                            groupingItem.hiding
                                                                                ? _vm.showGroup(groupingItem.joinGroupedValues)
                                                                                : _vm.hideGroup(groupingItem.joinGroupedValues);
                                                                        }
                                                                    }
                                                                }, [
                                                                    _c("transition", {
                                                                        attrs: {
                                                                            name: "sort-ascending",
                                                                            mode: "out-in"
                                                                        }
                                                                    }, [
                                                                        _c("i", {
                                                                            directives: [
                                                                                {
                                                                                    name: "show",
                                                                                    rawName: "v-show",
                                                                                    value: !groupingItem.hiding,
                                                                                    expression: "!groupingItem.hiding"
                                                                                }
                                                                            ],
                                                                            staticClass: "fa fa-caret-left hide-group",
                                                                            attrs: {
                                                                                role: "button",
                                                                                "aria-hidden": "true",
                                                                                title: "Hide group"
                                                                            }
                                                                        })
                                                                    ]),
                                                                    _vm._v(" "),
                                                                    _c("transition", {
                                                                        attrs: {
                                                                            name: "sort-descending",
                                                                            mode: "out-in"
                                                                        }
                                                                    }, [
                                                                        _c("i", {
                                                                            directives: [
                                                                                {
                                                                                    name: "show",
                                                                                    rawName: "v-show",
                                                                                    value: groupingItem.hiding,
                                                                                    expression: "groupingItem.hiding"
                                                                                }
                                                                            ],
                                                                            staticClass: "fa fa-caret-right hide-group",
                                                                            attrs: {
                                                                                role: "button",
                                                                                "aria-hidden": "true",
                                                                                title: "Show group"
                                                                            }
                                                                        })
                                                                    ])
                                                                ], 1)
                                                                : _vm._e()
                                                        ]);
                                                    }),
                                                    _vm._v(" "),
                                                    _c("th", {
                                                        staticClass: "th-header",
                                                        attrs: {
                                                            colspan: _vm.state.groupingColumns.length +
                                                                _vm.state.columns.length -
                                                                groupingItem.level
                                                        },
                                                        on: {
                                                            click: function ($event) {
                                                                groupingItem.hiding
                                                                    ? _vm.showGroup(groupingItem.joinGroupedValues)
                                                                    : _vm.hideGroup(groupingItem.joinGroupedValues);
                                                            }
                                                        }
                                                    }, [
                                                        _vm._t(groupingItem.column.id + "-group", [
                                                            _vm._v("\n\t\t\t\t\t\t\t\t\t" +
                                                                _vm._s(groupingItem.column.name) +
                                                                ": " +
                                                                _vm._s(groupingItem.group) +
                                                                "\n\t\t\t\t\t\t\t\t")
                                                        ], {
                                                            cells: _vm.getCells(_vm.items, groupingItem.column.id),
                                                            value: groupingItem.group
                                                        })
                                                    ], 2)
                                                ], 2)
                                                : _vm._e(),
                                            _vm._v(" "),
                                            !groupingItem.group && !groupingItem.hidden
                                                ? [
                                                    _c("tr", { key: i, staticClass: "lighting-row" }, [
                                                        _vm._l(new Array(groupingItem.level), function (trash, j) {
                                                            return _c("th", {
                                                                key: j,
                                                                staticClass: "th-left"
                                                            });
                                                        }),
                                                        _vm._v(" "),
                                                        _vm._l(_vm.state.columns, function (column) {
                                                            return _c("td", {
                                                                key: i + column.id,
                                                                class: column.hidden
                                                                    ? "hidden-column"
                                                                    : "cell"
                                                            }, [
                                                                !column.hidden
                                                                    ? _vm._t(column.id + "-column", [
                                                                        _vm._v("\n\t\t\t\t\t\t\t\t\t\t" +
                                                                            _vm._s(groupingItem.item[column.id]) +
                                                                            "\n\t\t\t\t\t\t\t\t\t")
                                                                    ], {
                                                                        value: groupingItem.item[column.id]
                                                                    })
                                                                    : _vm._e()
                                                            ], 2);
                                                        })
                                                    ], 2)
                                                ]
                                                : _vm._e()
                                        ];
                                    })
                                ]
                                : _vm._e()
                        ], 2)
                    ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "paging" }, [
                    _c("div", { staticClass: "arrows" }, [
                        _c("button", {
                            staticClass: "paging-button",
                            attrs: { disabled: _vm.data.paging.current === 1 },
                            on: {
                                click: function ($event) {
                                    _vm.goToPage(1);
                                }
                            }
                        }, [
                            _c("i", {
                                staticClass: "fa fa-step-backward",
                                attrs: { "aria-hidden": "true" }
                            })
                        ]),
                        _vm._v(" "),
                        _c("button", {
                            staticClass: "paging-button",
                            attrs: { disabled: _vm.data.paging.current === 1 },
                            on: {
                                click: function ($event) {
                                    _vm.goToPage(_vm.data.paging.current - 1);
                                }
                            }
                        }, [
                            _c("i", {
                                staticClass: "fa fa-caret-left",
                                attrs: { "aria-hidden": "true" }
                            })
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "paging-row" }, [
                            _vm.data.paging.current > _vm.maxCountOfPage
                                ? _c("button", {
                                    staticClass: "paging-button",
                                    on: {
                                        click: function ($event) {
                                            _vm.goToPage(Math.floor((_vm.data.paging.current - 1) / _vm.maxCountOfPage) * _vm.maxCountOfPage);
                                        }
                                    }
                                }, [
                                    _c("i", {
                                        staticClass: "fa fa-ellipsis-h",
                                        attrs: { "aria-hidden": "true" }
                                    })
                                ])
                                : _vm._e(),
                            _vm._v(" "),
                            _vm._l(new Array(_vm.data.paging.count), function (item, i) {
                                return [
                                    _vm.canShowPageNumber(i)
                                        ? [
                                            _c("button", {
                                                staticClass: "paging-button",
                                                class: i + 1 == _vm.data.paging.current
                                                    ? "selected"
                                                    : "",
                                                on: {
                                                    click: function ($event) {
                                                        _vm.goToPage(i + 1);
                                                    }
                                                }
                                            }, [
                                                _vm._v("\n\t\t\t\t\t\t\t" +
                                                    _vm._s(i + 1) +
                                                    "\n\t\t\t\t\t\t")
                                            ])
                                        ]
                                        : _vm._e()
                                ];
                            }),
                            _vm._v(" "),
                            _vm.data.paging.count != _vm.maxCountOfPage &&
                                _vm.data.paging.current <=
                                    Math.floor(_vm.data.paging.count / _vm.maxCountOfPage) *
                                        _vm.maxCountOfPage
                                ? _c("button", {
                                    staticClass: "paging-button",
                                    on: {
                                        click: function ($event) {
                                            _vm.goToPage(Math.floor((_vm.data.paging.current - 1) / _vm.maxCountOfPage) *
                                                _vm.maxCountOfPage +
                                                _vm.maxCountOfPage +
                                                1);
                                        }
                                    }
                                }, [
                                    _c("i", {
                                        staticClass: "fa fa-ellipsis-h",
                                        attrs: { "aria-hidden": "true" }
                                    })
                                ])
                                : _vm._e()
                        ], 2),
                        _vm._v(" "),
                        _c("button", {
                            staticClass: "paging-button",
                            attrs: {
                                disabled: _vm.data.paging.current === _vm.data.paging.count
                            },
                            on: {
                                click: function ($event) {
                                    _vm.goToPage(_vm.data.paging.current + 1);
                                }
                            }
                        }, [
                            _c("i", {
                                staticClass: "fa fa-caret-right",
                                attrs: { "aria-hidden": "true" }
                            })
                        ]),
                        _vm._v(" "),
                        _c("button", {
                            staticClass: "paging-button",
                            attrs: {
                                disabled: _vm.data.paging.current === _vm.data.paging.count
                            },
                            on: {
                                click: function ($event) {
                                    _vm.goToPage(_vm.data.paging.count);
                                }
                            }
                        }, [
                            _c("i", {
                                staticClass: "fa fa-step-forward",
                                attrs: { "aria-hidden": "true" }
                            })
                        ])
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "hints" }, [
                        _c("select", {
                            directives: [
                                {
                                    name: "model",
                                    rawName: "v-model",
                                    value: _vm.data.paging.size,
                                    expression: "data.paging.size"
                                }
                            ],
                            staticClass: "paging-select",
                            on: {
                                change: function ($event) {
                                    var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function (o) {
                                        return o.selected;
                                    })
                                        .map(function (o) {
                                        var val = "_value" in o ? o._value : o.value;
                                        return val;
                                    });
                                    _vm.$set(_vm.data.paging, "size", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
                                }
                            }
                        }, _vm._l(_vm.pageSizes, function (size) {
                            return _c("option", { domProps: { value: size } }, [
                                _vm._v("\n\t\t\t\t\t" +
                                    _vm._s(size == 0 ? "All" : size) +
                                    "\n\t\t\t\t")
                            ]);
                        })),
                        _vm._v(" "),
                        _c("div", { staticClass: "paging-select-hint" }, [
                            _vm._v("\n\t\t\t\titems per page\n\t\t\t")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "paging-info" }, [
                            _vm._v("\n\t\t\t\t" +
                                _vm._s((_vm.data.paging.current - 1) * _vm.data.paging.size + 1) +
                                " - \n\t\t\t\t" +
                                _vm._s(_vm.data.paging.size == 0 ||
                                    _vm.data.paging.current * _vm.data.paging.size >
                                        _vm.items.length
                                    ? _vm.items.length
                                    : _vm.data.paging.current * _vm.data.paging.size) +
                                " \n\t\t\t\tof \n\t\t\t\t" +
                                _vm._s(_vm.items.length) +
                                " \n\t\t\t\titems\n\t\t\t")
                        ])
                    ])
                ])
            ]);
        };
        var staticRenderFns = [];
        render._withStripped = true;
        if (false) { }
        /***/ 
    }),
    /***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1dafad6c\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-nav-menu/s-nav-menu.vue": 
    /*!******************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1dafad6c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-nav-menu/s-nav-menu.vue ***!
      \******************************************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function () { return render; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () { return staticRenderFns; });
        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", { staticClass: "s-nav-menu", class: _vm.styleClass }, [
                _c("header", [
                    _vm._m(0),
                    _vm._v(" "),
                    _c("div", { staticClass: "header-items-container" }, [
                        _c("s-nav-menu-item", {
                            staticClass: "performance-reporting",
                            attrs: { data: _vm.headerItems.performanceReporting },
                            scopedSlots: _vm._u([
                                {
                                    key: "header-name",
                                    fn: function (ref) {
                                        var headerName = ref.headerName;
                                        return _c("span", { staticClass: "icon-performance-reporting" }, [
                                            _vm._v("\n\t\t\t\t\t" + _vm._s(headerName) + "\n\t\t\t\t")
                                        ]);
                                    }
                                }
                            ])
                        }),
                        _vm._v(" "),
                        _c("s-nav-menu-item", {
                            staticClass: "my-websites",
                            attrs: { data: _vm.headerItems.myWebsites },
                            scopedSlots: _vm._u([
                                {
                                    key: "header-name",
                                    fn: function (ref) {
                                        var headerName = ref.headerName;
                                        return _c("span", { staticClass: "icon-my-websites" }, [
                                            _vm._v("\n\t\t\t\t\t" + _vm._s(headerName) + "\n\t\t\t\t")
                                        ]);
                                    }
                                }
                            ])
                        }),
                        _vm._v(" "),
                        _c("s-nav-menu-item", {
                            staticClass: "financial-details",
                            attrs: { data: _vm.headerItems.financialDetails },
                            scopedSlots: _vm._u([
                                {
                                    key: "header-name",
                                    fn: function (ref) {
                                        var headerName = ref.headerName;
                                        return _c("span", { staticClass: "icon-financial-details" }, [
                                            _vm._v("\n\t\t\t\t\t" + _vm._s(headerName) + "\n\t\t\t\t")
                                        ]);
                                    }
                                }
                            ])
                        }),
                        _vm._v(" "),
                        _c("s-nav-menu-item", {
                            staticClass: "my-consumers",
                            attrs: { data: _vm.headerItems.myConsumers },
                            scopedSlots: _vm._u([
                                {
                                    key: "header-name",
                                    fn: function (ref) {
                                        var headerName = ref.headerName;
                                        return _c("span", { staticClass: "icon-my-consumers" }, [
                                            _vm._v("\n\t\t\t\t\t" + _vm._s(headerName) + "\n\t\t\t\t")
                                        ]);
                                    }
                                }
                            ])
                        })
                    ], 1)
                ]),
                _vm._v(" "),
                _c("s-side-nav-menu", {
                    attrs: { items: _vm.headerItems.performanceReporting.children }
                })
            ], 1);
        };
        var staticRenderFns = [
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", { staticClass: "logo-container" }, [
                    _c("div", { staticClass: "logo" }, [
                        _c("a", { staticClass: "logo-link", attrs: { href: "#" } })
                    ])
                ]);
            }
        ];
        render._withStripped = true;
        if (false) { }
        /***/ 
    }),
    /***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2c26822c\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-datepicker/s-datepicker.vue": 
    /*!*********************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2c26822c","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-datepicker/s-datepicker.vue ***!
      \*********************************************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function () { return render; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () { return staticRenderFns; });
        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", { staticClass: "s-datepicker" }, [
                _c("div", { staticClass: "header" }, [
                    _c("ul", [_vm._m(0), _vm._v(" "), _c("li", [_vm._v(_vm._s(1))])])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "calendar" }, [
                    _vm.currentLevelIsDay
                        ? _c("div", { staticClass: "calendar-day" }, [
                            _vm._m(1),
                            _vm._v(" "),
                            _c("ul", { staticClass: "days" }, [
                                _vm._l(_vm.getItemsInCurrentDate(), function (item, i) {
                                    return [
                                        _c("li", [
                                            _vm._v("\n                            " +
                                                _vm._s(item.text) +
                                                " - " +
                                                _vm._s(item.value.format("YYYY/MM/DD")) +
                                                " - " +
                                                _vm._s(item.selected) +
                                                " - " +
                                                _vm._s(item.focused) +
                                                " \n                        ")
                                        ])
                                    ];
                                })
                            ], 2)
                        ])
                        : _vm._e()
                ])
            ]);
        };
        var staticRenderFns = [
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("li", { staticClass: "prev" }, [
                    _c("i", {
                        staticClass: "fa fa-chevron-left",
                        attrs: { "aria-hidden": "true" }
                    })
                ]);
            },
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("ul", { staticClass: "weekdays" }, [
                    _c("li", [_vm._v("Su")]),
                    _vm._v(" "),
                    _c("li", [_vm._v("Mo")]),
                    _vm._v(" "),
                    _c("li", [_vm._v("Tu")]),
                    _vm._v(" "),
                    _c("li", [_vm._v("We")]),
                    _vm._v(" "),
                    _c("li", [_vm._v("Th")]),
                    _vm._v(" "),
                    _c("li", [_vm._v("Fr")]),
                    _vm._v(" "),
                    _c("li", [_vm._v("Sa")])
                ]);
            }
        ];
        render._withStripped = true;
        if (false) { }
        /***/ 
    }),
    /***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2ca6050a\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/application/home/home.vue": 
    /*!***********************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-2ca6050a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/application/home/home.vue ***!
      \***********************************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function () { return render; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () { return staticRenderFns; });
        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", [_vm._v("\n\thello from vue home\n")]);
        };
        var staticRenderFns = [];
        render._withStripped = true;
        if (false) { }
        /***/ 
    }),
    /***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3260d92c\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-datepicker-range/s-datepicker-range.vue": 
    /*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-3260d92c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-datepicker-range/s-datepicker-range.vue ***!
      \**********************************************************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function () { return render; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () { return staticRenderFns; });
        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                directives: [
                    {
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: _vm.hide,
                        expression: "hide"
                    }
                ],
                staticClass: "s-datepicker-range"
            }, [
                _c("div", { staticClass: "header" }, [
                    _c("button", {
                        staticClass: "button",
                        on: {
                            click: function ($event) {
                                _vm.expanded = !_vm.expanded;
                            }
                        }
                    }, [
                        _c("i", {
                            staticClass: "fa fa-calendar",
                            attrs: { "aria-hidden": "true" }
                        }),
                        _vm._v(" "),
                        _c("span", { staticClass: "values" }, [
                            _vm._t("header", [
                                _vm._v("\n\t\t\t\t\t" +
                                    _vm._s(_vm.startDate.format("MMMM D, YYYY")) +
                                    " - " +
                                    _vm._s(_vm.endDate.format("MMMM D, YYYY")) +
                                    "\n\t\t\t\t")
                            ])
                        ], 2),
                        _vm._v(" "),
                        _c("i", {
                            staticClass: "fa fa-caret-down",
                            attrs: { "aria-hidden": "true" }
                        })
                    ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "body-container" }, [
                    _vm.expanded
                        ? _c("div", { staticClass: "body" }, [
                            _c("div", { staticClass: "options" }, [
                                _c("ul", { staticClass: "items-container" }, _vm._l(_vm.availableDateRanges, function (availableDateRange) {
                                    return _c("li", {
                                        key: availableDateRange.label,
                                        staticClass: "item",
                                        class: {
                                            selected: _vm.isSelected(availableDateRange.value)
                                        },
                                        on: {
                                            click: function ($event) {
                                                _vm.selectDateRange(availableDateRange.value);
                                            }
                                        }
                                    }, [
                                        _vm._v("\n\t\t\t\t\t\t" +
                                            _vm._s(availableDateRange.label) +
                                            "\n\t\t\t\t\t")
                                    ]);
                                })),
                                _vm._v(" "),
                                _vm._m(0)
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "calendars" })
                        ])
                        : _vm._e()
                ])
            ]);
        };
        var staticRenderFns = [
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", { staticClass: "buttons" }, [
                    _c("button", { staticClass: "button apply" }, [_vm._v("Apply")]),
                    _vm._v(" "),
                    _c("button", { staticClass: "button cancel" }, [_vm._v("Cancel")])
                ]);
            }
        ];
        render._withStripped = true;
        if (false) { }
        /***/ 
    }),
    /***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-40d32dec\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-checkbox/s-checkbox.vue": 
    /*!*****************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-40d32dec","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-checkbox/s-checkbox.vue ***!
      \*****************************************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function () { return render; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () { return staticRenderFns; });
        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("label", { staticClass: "s-checkbox", class: _vm.styleClass }, [
                _c("input", {
                    staticClass: "invisible",
                    attrs: { type: "checkbox" },
                    domProps: { checked: _vm.value ? "checked" : "" },
                    on: { input: _vm.onValueChange }
                }),
                _vm._v(" "),
                _c("div", { staticClass: "checkbox" }, [
                    _c("svg", { attrs: { width: "20px", height: "20px", viewBox: "0 0 20 20" } }, [
                        _c("path", {
                            attrs: {
                                d: "M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z"
                            }
                        }),
                        _vm._v(" "),
                        _c("polyline", { attrs: { points: "4 11 8 15 16 6" } })
                    ])
                ]),
                _vm._v(" "),
                _c("span", [_vm._t("default")], 2)
            ]);
        };
        var staticRenderFns = [];
        render._withStripped = true;
        if (false) { }
        /***/ 
    }),
    /***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-40da7a2c\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-material-input/s-material-input.vue": 
    /*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-40da7a2c","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-material-input/s-material-input.vue ***!
      \*****************************************************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function () { return render; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () { return staticRenderFns; });
        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", { staticClass: "s-material-input", class: _vm.styleClass }, [
                _c("div", { staticClass: "input-container" }, [
                    _c("input", {
                        directives: [
                            {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.value,
                                expression: "value"
                            }
                        ],
                        staticClass: "input",
                        attrs: { type: "text", required: "" },
                        domProps: { value: _vm.value },
                        on: {
                            input: [
                                function ($event) {
                                    if ($event.target.composing) {
                                        return;
                                    }
                                    _vm.value = $event.target.value;
                                },
                                _vm.onValueChange
                            ]
                        }
                    }),
                    _vm._v(" "),
                    _c("span", { staticClass: "bar" }),
                    _vm._v(" "),
                    _c("label", { staticClass: "label" }, [_vm._t("default")], 2)
                ])
            ]);
        };
        var staticRenderFns = [];
        render._withStripped = true;
        if (false) { }
        /***/ 
    }),
    /***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4fd7ffac\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/app.vue": 
    /*!*****************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-4fd7ffac","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/app.vue ***!
      \*****************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function () { return render; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () { return staticRenderFns; });
        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", { staticClass: "app-container" }, [
                _c("s-nav-menu"),
                _vm._v(" "),
                _c("div", { staticClass: "app-content" }, [_c("router-view")], 1)
            ], 1);
        };
        var staticRenderFns = [];
        render._withStripped = true;
        if (false) { }
        /***/ 
    }),
    /***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-59e23b0a\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/application/experiment/experiment.vue": 
    /*!**********************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-59e23b0a","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/application/experiment/experiment.vue ***!
      \**********************************************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function () { return render; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () { return staticRenderFns; });
        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", { staticClass: "experiment col-sm-12" }, [
                _vm._m(0),
                _vm._v(" "),
                _c("div", { staticClass: "form" }, [
                    _c("div", { staticClass: "row col-lg-12" }, [
                        _c("s-select", {
                            staticClass: "col col-lg-3",
                            attrs: {
                                "default-title": "Merchant Accounts",
                                "multiple-selected-title-chunk": "Accounts",
                                "allow-multiple": true,
                                "all-option-groups": _vm.options
                            },
                            on: {
                                "selection-changed": function ($event) {
                                    _vm.console.log($event);
                                }
                            }
                        })
                    ], 1),
                    _vm._v(" "),
                    _c("div", { staticClass: "row col-lg-12" })
                ]),
                _vm._v(" "),
                _c("s-datepicker-org", {
                    attrs: {
                        title: "Select date range",
                        "range-keys": [
                            "TODAY",
                            "YESTERDAY",
                            "LAST_7_DAYS",
                            "LAST_WEEK",
                            "LAST_30_DAYS",
                            "LAST_MONTH",
                            "CUSTOM_DATE_RANGE"
                        ],
                        "allow-custom-date-range": true
                    },
                    scopedSlots: _vm._u([
                        {
                            key: "triggerContainer",
                            fn: function (ref) {
                                var selectedRange = ref.selectedRange;
                                return _c("span", {}, [
                                    _c("div", { staticClass: "btn btn-default" }, [
                                        _vm._v("\n\t\t\t\t\t\t" +
                                            _vm._s(selectedRange.toString()) +
                                            "\n\t\t\t\t\t")
                                    ])
                                ]);
                            }
                        }
                    ])
                }),
                _vm._v(" "),
                _c("s-datepicker-range", {
                    attrs: { startDate: _vm.dateFrom, endDate: _vm.dateTo },
                    on: {
                        "update:startDate": function ($event) {
                            _vm.dateFrom = $event;
                        },
                        "update:endDate": function ($event) {
                            _vm.dateTo = $event;
                        }
                    }
                }),
                _vm._v(" "),
                _c("s-datepicker", { attrs: { date: _vm.testDate } }),
                _vm._v(" "),
                _c("button", { on: { click: _vm.test } }, [_vm._v("show")]),
                _vm._v(" "),
                _c("s-table", {
                    attrs: {
                        items: _vm.data,
                        columns: _vm.columns,
                        filtrable: true,
                        sortable: true,
                        groupable: true,
                        resizable: true,
                        hidable: true
                    },
                    scopedSlots: _vm._u([
                        {
                            key: "amount-column",
                            fn: function (ref) {
                                var value = ref.value;
                                return _c("span", {}, [
                                    _c("span", { style: { color: +value > 0 ? "green" : "red" } }, [_vm._v("\n\t\t\t\t\t\t" + _vm._s(value) + "\n\t\t\t\t\t")])
                                ]);
                            }
                        },
                        {
                            key: "amount-footer",
                            fn: function (ref) {
                                var cells = ref.cells;
                                return _c("span", {}, [
                                    _vm._v("\n\t\t\t\t\tTotal: " + _vm._s(2) + "\n\t\t\t\t")
                                ]);
                            }
                        },
                        {
                            key: "currency-group",
                            fn: function (ref) {
                                var value = ref.value;
                                var cells = ref.cells;
                                return _c("span", {}, [
                                    _vm._v("\n\t\t\t\t\tCur: " +
                                        _vm._s(value) +
                                        " / " +
                                        _vm._s(cells.length) +
                                        "\n\t\t\t\t")
                                ]);
                            }
                        }
                    ])
                }, [
                    _c("span", { attrs: { slot: "amount-header" }, slot: "amount-header" }, [_vm._v("\n\t\t\t\t\tValue\n\t\t\t\t")])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col-sm-12", staticStyle: { height: "300px" } })
            ], 1);
        };
        var staticRenderFns = [
            function () {
                var _vm = this;
                var _h = _vm.$createElement;
                var _c = _vm._self._c || _h;
                return _c("div", { staticClass: "title col-sm-12" }, [
                    _c("h1", [_vm._v("Transaction Detail for 11/05/2018 - 11/05/2018")])
                ]);
            }
        ];
        render._withStripped = true;
        if (false) { }
        /***/ 
    }),
    /***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-627842ec\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-nav-menu-item/s-nav-menu-item.vue": 
    /*!***************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-627842ec","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-nav-menu-item/s-nav-menu-item.vue ***!
      \***************************************************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function () { return render; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () { return staticRenderFns; });
        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                staticClass: "s-nav-menu-item",
                class: _vm.styleClass,
                on: { mouseover: _vm.show, mouseout: _vm.hide }
            }, [
                _c("div", { staticClass: "header" }, [
                    _vm._t("header-name", [_vm._v("\n\t\t\t" + _vm._s(_vm.data.name) + "\n\t\t")], { headerName: _vm.data.name })
                ], 2),
                _vm._v(" "),
                _c("div", { staticClass: "dropdown-container" }, [
                    _c("transition", { attrs: { name: "dropdown" } }, [
                        _c("div", {
                            directives: [
                                {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.data.show,
                                    expression: "data.show"
                                }
                            ],
                            staticClass: "dropdown"
                        }, _vm._l(_vm.items, function (item) {
                            return _c("div", { key: item.name, staticClass: "item" }, [
                                item.type == "single"
                                    ? _c("div", { staticClass: "single" }, [
                                        _c("a", { attrs: { href: item.url } }, [
                                            _vm._v(_vm._s(item.name))
                                        ])
                                    ])
                                    : _vm._e(),
                                _vm._v(" "),
                                item.type == "group"
                                    ? [
                                        _c("div", { staticClass: "group" }, [
                                            _vm._v("\n\t\t\t\t\t\t\t" +
                                                _vm._s(item.name) +
                                                "\n\t\t\t\t\t\t")
                                        ]),
                                        _vm._v(" "),
                                        _vm._l(item.children, function (child) {
                                            return _c("div", { staticClass: "group-child" }, [
                                                _c("a", { attrs: { href: child.url } }, [
                                                    _vm._v(_vm._s(child.name))
                                                ])
                                            ]);
                                        })
                                    ]
                                    : _vm._e()
                            ], 2);
                        }))
                    ])
                ], 1)
            ]);
        };
        var staticRenderFns = [];
        render._withStripped = true;
        if (false) { }
        /***/ 
    }),
    /***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ecda202c\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-select/s-select.vue": 
    /*!*************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-ecda202c","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-select/s-select.vue ***!
      \*************************************************************************************************************************************************************************************************************************************************************/
    /*! exports provided: render, staticRenderFns */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function () { return render; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function () { return staticRenderFns; });
        var render = function () {
            var _vm = this;
            var _h = _vm.$createElement;
            var _c = _vm._self._c || _h;
            return _c("div", {
                directives: [
                    {
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: _vm.hide,
                        expression: "hide"
                    }
                ],
                staticClass: "s-select",
                class: _vm.styleClass
            }, [
                _c("div", { staticClass: "select-box", on: { click: _vm.changeIsExpandedState } }, [
                    _c("select", {
                        staticClass: "select form-control",
                        class: _vm.isExpanded ? "expanded-select" : ""
                    }, [
                        _c("option", [
                            _vm._t("header", [
                                _vm._v("\n\t\t\t\t\t\t" + _vm._s(_vm.title) + "\n\t\t\t\t\t")
                            ], { selected: _vm.getSelected(_vm.options) })
                        ], 2)
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "over-select" })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "select-container" }, [
                    _c("transition", { attrs: { name: "select-body" } }, [
                        _c("div", {
                            directives: [
                                {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.isExpanded,
                                    expression: "isExpanded"
                                }
                            ],
                            staticClass: "select-body"
                        }, [
                            _c("div", { staticClass: "toolbar" }, [
                                _c("div", { staticClass: "search" }, [
                                    _c("input", {
                                        directives: [
                                            {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.searchString,
                                                expression: "searchString"
                                            }
                                        ],
                                        staticClass: "search-text-box",
                                        attrs: { type: "text", placeholder: "Search" },
                                        domProps: { value: _vm.searchString },
                                        on: {
                                            input: function ($event) {
                                                if ($event.target.composing) {
                                                    return;
                                                }
                                                _vm.searchString = $event.target.value;
                                            }
                                        }
                                    })
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "selector" }, [
                                    _c("s-checkbox", {
                                        staticClass: "int hint--bottom hint--info",
                                        attrs: {
                                            "data-hint": _vm.allSelected
                                                ? "Unselect all"
                                                : "Select All",
                                            value: _vm.allSelected,
                                            callback: _vm.setSelectStateForAll
                                        },
                                        on: {
                                            "update:value": function ($event) {
                                                _vm.allSelected = $event;
                                            }
                                        }
                                    })
                                ], 1)
                            ]),
                            _vm._v(" "),
                            _c("transition-group", {
                                staticClass: "options",
                                attrs: {
                                    name: "flip-list",
                                    tag: "ul",
                                    "allow-animation-for-list": _vm.allowAnimationForList
                                }
                            }, [
                                _vm._l(_vm.options, function (option) {
                                    return [
                                        _vm.isSingle(option) && _vm.filter(option)
                                            ? _c("li", { key: option.value, staticClass: "item single" }, [
                                                _c("s-checkbox", {
                                                    attrs: {
                                                        value: option.selected,
                                                        callback: _vm.selectStateChanged
                                                    },
                                                    on: {
                                                        "update:value": function ($event) {
                                                            _vm.$set(option, "selected", $event);
                                                        }
                                                    }
                                                }, [
                                                    _vm._v("\n                                    " +
                                                        _vm._s(option.text) +
                                                        "\n                                ")
                                                ])
                                            ], 1)
                                            : _vm._e(),
                                        _vm._v(" "),
                                        _vm.isGroup(option) && _vm.filter(option)
                                            ? [
                                                _c("li", { key: option.text, staticClass: "item group" }, [
                                                    _c("div", { staticClass: "group-header" }, [
                                                        _c("div", { staticClass: "group-name" }, [
                                                            _vm._v("\n                                            " +
                                                                _vm._s(option.text) +
                                                                "\n                                        ")
                                                        ]),
                                                        _vm._v(" "),
                                                        _c("div", { staticClass: "group-selector" }, [
                                                            _c("s-checkbox", {
                                                                staticClass: "hint hint--bottom hint--info",
                                                                attrs: {
                                                                    "data-hint": option.selected
                                                                        ? "Unselect Group"
                                                                        : "Select Group",
                                                                    value: option.selected,
                                                                    callback: function (val) {
                                                                        return _vm.setSelectStateForGroup(val, option);
                                                                    }
                                                                },
                                                                on: {
                                                                    "update:value": function ($event) {
                                                                        _vm.$set(option, "selected", $event);
                                                                    }
                                                                }
                                                            })
                                                        ], 1)
                                                    ])
                                                ]),
                                                _vm._v(" "),
                                                _vm._l(option.items, function (item) {
                                                    return [
                                                        _vm.filter(item)
                                                            ? _c("li", {
                                                                key: item.value,
                                                                staticClass: "item single"
                                                            }, [
                                                                _c("s-checkbox", {
                                                                    attrs: {
                                                                        value: item.selected,
                                                                        callback: _vm.selectStateChanged
                                                                    },
                                                                    on: {
                                                                        "update:value": function ($event) {
                                                                            _vm.$set(item, "selected", $event);
                                                                        }
                                                                    }
                                                                }, [
                                                                    _vm._v("\n                                            " +
                                                                        _vm._s(item.text) +
                                                                        "\n                                        ")
                                                                ])
                                                            ], 1)
                                                            : _vm._e()
                                                    ];
                                                })
                                            ]
                                            : _vm._e()
                                    ];
                                })
                            ], 2)
                        ], 1)
                    ])
                ], 1)
            ]);
        };
        var staticRenderFns = [];
        render._withStripped = true;
        if (false) { }
        /***/ 
    }),
    /***/ "./node_modules/vue-router/dist/vue-router.esm.js": 
    /*!********************************************************!*\
      !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
      \********************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /**
          * vue-router v3.0.1
          * (c) 2017 Evan You
          * @license MIT
          */
        /*  */
        function assert(condition, message) {
            if (!condition) {
                throw new Error(("[vue-router] " + message));
            }
        }
        function warn(condition, message) {
            if (true && !condition) {
                typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
            }
        }
        function isError(err) {
            return Object.prototype.toString.call(err).indexOf('Error') > -1;
        }
        var View = {
            name: 'router-view',
            functional: true,
            props: {
                name: {
                    type: String,
                    default: 'default'
                }
            },
            render: function render(_, ref) {
                var props = ref.props;
                var children = ref.children;
                var parent = ref.parent;
                var data = ref.data;
                data.routerView = true;
                // directly use parent context's createElement() function
                // so that components rendered by router-view can resolve named slots
                var h = parent.$createElement;
                var name = props.name;
                var route = parent.$route;
                var cache = parent._routerViewCache || (parent._routerViewCache = {});
                // determine current view depth, also check to see if the tree
                // has been toggled inactive but kept-alive.
                var depth = 0;
                var inactive = false;
                while (parent && parent._routerRoot !== parent) {
                    if (parent.$vnode && parent.$vnode.data.routerView) {
                        depth++;
                    }
                    if (parent._inactive) {
                        inactive = true;
                    }
                    parent = parent.$parent;
                }
                data.routerViewDepth = depth;
                // render previous view if the tree is inactive and kept-alive
                if (inactive) {
                    return h(cache[name], data, children);
                }
                var matched = route.matched[depth];
                // render empty node if no matched route
                if (!matched) {
                    cache[name] = null;
                    return h();
                }
                var component = cache[name] = matched.components[name];
                // attach instance registration hook
                // this will be called in the instance's injected lifecycle hooks
                data.registerRouteInstance = function (vm, val) {
                    // val could be undefined for unregistration
                    var current = matched.instances[name];
                    if ((val && current !== vm) ||
                        (!val && current === vm)) {
                        matched.instances[name] = val;
                    }
                };
                (data.hook || (data.hook = {})).prepatch = function (_, vnode) {
                    matched.instances[name] = vnode.componentInstance;
                };
                // resolve props
                var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
                if (propsToPass) {
                    // clone to prevent mutation
                    propsToPass = data.props = extend({}, propsToPass);
                    // pass non-declared props as attrs
                    var attrs = data.attrs = data.attrs || {};
                    for (var key in propsToPass) {
                        if (!component.props || !(key in component.props)) {
                            attrs[key] = propsToPass[key];
                            delete propsToPass[key];
                        }
                    }
                }
                return h(component, data, children);
            }
        };
        function resolveProps(route, config) {
            switch (typeof config) {
                case 'undefined':
                    return;
                case 'object':
                    return config;
                case 'function':
                    return config(route);
                case 'boolean':
                    return config ? route.params : undefined;
                default:
                    if (true) {
                        warn(false, "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
                            "expecting an object, function or boolean.");
                    }
            }
        }
        function extend(to, from) {
            for (var key in from) {
                to[key] = from[key];
            }
            return to;
        }
        /*  */
        var encodeReserveRE = /[!'()*]/g;
        var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
        var commaRE = /%2C/g;
        // fixed encodeURIComponent which is more conformant to RFC3986:
        // - escapes [!'()*]
        // - preserve commas
        var encode = function (str) {
            return encodeURIComponent(str)
                .replace(encodeReserveRE, encodeReserveReplacer)
                .replace(commaRE, ',');
        };
        var decode = decodeURIComponent;
        function resolveQuery(query, extraQuery, _parseQuery) {
            if (extraQuery === void 0)
                extraQuery = {};
            var parse = _parseQuery || parseQuery;
            var parsedQuery;
            try {
                parsedQuery = parse(query || '');
            }
            catch (e) {
                true && warn(false, e.message);
                parsedQuery = {};
            }
            for (var key in extraQuery) {
                parsedQuery[key] = extraQuery[key];
            }
            return parsedQuery;
        }
        function parseQuery(query) {
            var res = {};
            query = query.trim().replace(/^(\?|#|&)/, '');
            if (!query) {
                return res;
            }
            query.split('&').forEach(function (param) {
                var parts = param.replace(/\+/g, ' ').split('=');
                var key = decode(parts.shift());
                var val = parts.length > 0
                    ? decode(parts.join('='))
                    : null;
                if (res[key] === undefined) {
                    res[key] = val;
                }
                else if (Array.isArray(res[key])) {
                    res[key].push(val);
                }
                else {
                    res[key] = [res[key], val];
                }
            });
            return res;
        }
        function stringifyQuery(obj) {
            var res = obj ? Object.keys(obj).map(function (key) {
                var val = obj[key];
                if (val === undefined) {
                    return '';
                }
                if (val === null) {
                    return encode(key);
                }
                if (Array.isArray(val)) {
                    var result = [];
                    val.forEach(function (val2) {
                        if (val2 === undefined) {
                            return;
                        }
                        if (val2 === null) {
                            result.push(encode(key));
                        }
                        else {
                            result.push(encode(key) + '=' + encode(val2));
                        }
                    });
                    return result.join('&');
                }
                return encode(key) + '=' + encode(val);
            }).filter(function (x) { return x.length > 0; }).join('&') : null;
            return res ? ("?" + res) : '';
        }
        /*  */
        var trailingSlashRE = /\/?$/;
        function createRoute(record, location, redirectedFrom, router) {
            var stringifyQuery$$1 = router && router.options.stringifyQuery;
            var query = location.query || {};
            try {
                query = clone(query);
            }
            catch (e) { }
            var route = {
                name: location.name || (record && record.name),
                meta: (record && record.meta) || {},
                path: location.path || '/',
                hash: location.hash || '',
                query: query,
                params: location.params || {},
                fullPath: getFullPath(location, stringifyQuery$$1),
                matched: record ? formatMatch(record) : []
            };
            if (redirectedFrom) {
                route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
            }
            return Object.freeze(route);
        }
        function clone(value) {
            if (Array.isArray(value)) {
                return value.map(clone);
            }
            else if (value && typeof value === 'object') {
                var res = {};
                for (var key in value) {
                    res[key] = clone(value[key]);
                }
                return res;
            }
            else {
                return value;
            }
        }
        // the starting route that represents the initial state
        var START = createRoute(null, {
            path: '/'
        });
        function formatMatch(record) {
            var res = [];
            while (record) {
                res.unshift(record);
                record = record.parent;
            }
            return res;
        }
        function getFullPath(ref, _stringifyQuery) {
            var path = ref.path;
            var query = ref.query;
            if (query === void 0)
                query = {};
            var hash = ref.hash;
            if (hash === void 0)
                hash = '';
            var stringify = _stringifyQuery || stringifyQuery;
            return (path || '/') + stringify(query) + hash;
        }
        function isSameRoute(a, b) {
            if (b === START) {
                return a === b;
            }
            else if (!b) {
                return false;
            }
            else if (a.path && b.path) {
                return (a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
                    a.hash === b.hash &&
                    isObjectEqual(a.query, b.query));
            }
            else if (a.name && b.name) {
                return (a.name === b.name &&
                    a.hash === b.hash &&
                    isObjectEqual(a.query, b.query) &&
                    isObjectEqual(a.params, b.params));
            }
            else {
                return false;
            }
        }
        function isObjectEqual(a, b) {
            if (a === void 0)
                a = {};
            if (b === void 0)
                b = {};
            // handle null value #1566
            if (!a || !b) {
                return a === b;
            }
            var aKeys = Object.keys(a);
            var bKeys = Object.keys(b);
            if (aKeys.length !== bKeys.length) {
                return false;
            }
            return aKeys.every(function (key) {
                var aVal = a[key];
                var bVal = b[key];
                // check nested equality
                if (typeof aVal === 'object' && typeof bVal === 'object') {
                    return isObjectEqual(aVal, bVal);
                }
                return String(aVal) === String(bVal);
            });
        }
        function isIncludedRoute(current, target) {
            return (current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 &&
                (!target.hash || current.hash === target.hash) &&
                queryIncludes(current.query, target.query));
        }
        function queryIncludes(current, target) {
            for (var key in target) {
                if (!(key in current)) {
                    return false;
                }
            }
            return true;
        }
        /*  */
        // work around weird flow bug
        var toTypes = [String, Object];
        var eventTypes = [String, Array];
        var Link = {
            name: 'router-link',
            props: {
                to: {
                    type: toTypes,
                    required: true
                },
                tag: {
                    type: String,
                    default: 'a'
                },
                exact: Boolean,
                append: Boolean,
                replace: Boolean,
                activeClass: String,
                exactActiveClass: String,
                event: {
                    type: eventTypes,
                    default: 'click'
                }
            },
            render: function render(h) {
                var this$1 = this;
                var router = this.$router;
                var current = this.$route;
                var ref = router.resolve(this.to, current, this.append);
                var location = ref.location;
                var route = ref.route;
                var href = ref.href;
                var classes = {};
                var globalActiveClass = router.options.linkActiveClass;
                var globalExactActiveClass = router.options.linkExactActiveClass;
                // Support global empty active class
                var activeClassFallback = globalActiveClass == null
                    ? 'router-link-active'
                    : globalActiveClass;
                var exactActiveClassFallback = globalExactActiveClass == null
                    ? 'router-link-exact-active'
                    : globalExactActiveClass;
                var activeClass = this.activeClass == null
                    ? activeClassFallback
                    : this.activeClass;
                var exactActiveClass = this.exactActiveClass == null
                    ? exactActiveClassFallback
                    : this.exactActiveClass;
                var compareTarget = location.path
                    ? createRoute(null, location, null, router)
                    : route;
                classes[exactActiveClass] = isSameRoute(current, compareTarget);
                classes[activeClass] = this.exact
                    ? classes[exactActiveClass]
                    : isIncludedRoute(current, compareTarget);
                var handler = function (e) {
                    if (guardEvent(e)) {
                        if (this$1.replace) {
                            router.replace(location);
                        }
                        else {
                            router.push(location);
                        }
                    }
                };
                var on = { click: guardEvent };
                if (Array.isArray(this.event)) {
                    this.event.forEach(function (e) { on[e] = handler; });
                }
                else {
                    on[this.event] = handler;
                }
                var data = {
                    class: classes
                };
                if (this.tag === 'a') {
                    data.on = on;
                    data.attrs = { href: href };
                }
                else {
                    // find the first <a> child and apply listener and href
                    var a = findAnchor(this.$slots.default);
                    if (a) {
                        // in case the <a> is a static node
                        a.isStatic = false;
                        var extend = _Vue.util.extend;
                        var aData = a.data = extend({}, a.data);
                        aData.on = on;
                        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
                        aAttrs.href = href;
                    }
                    else {
                        // doesn't have <a> child, apply listener to self
                        data.on = on;
                    }
                }
                return h(this.tag, data, this.$slots.default);
            }
        };
        function guardEvent(e) {
            // don't redirect with control keys
            if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
                return;
            }
            // don't redirect when preventDefault called
            if (e.defaultPrevented) {
                return;
            }
            // don't redirect on right click
            if (e.button !== undefined && e.button !== 0) {
                return;
            }
            // don't redirect if `target="_blank"`
            if (e.currentTarget && e.currentTarget.getAttribute) {
                var target = e.currentTarget.getAttribute('target');
                if (/\b_blank\b/i.test(target)) {
                    return;
                }
            }
            // this may be a Weex event which doesn't have this method
            if (e.preventDefault) {
                e.preventDefault();
            }
            return true;
        }
        function findAnchor(children) {
            if (children) {
                var child;
                for (var i = 0; i < children.length; i++) {
                    child = children[i];
                    if (child.tag === 'a') {
                        return child;
                    }
                    if (child.children && (child = findAnchor(child.children))) {
                        return child;
                    }
                }
            }
        }
        var _Vue;
        function install(Vue) {
            if (install.installed && _Vue === Vue) {
                return;
            }
            install.installed = true;
            _Vue = Vue;
            var isDef = function (v) { return v !== undefined; };
            var registerInstance = function (vm, callVal) {
                var i = vm.$options._parentVnode;
                if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
                    i(vm, callVal);
                }
            };
            Vue.mixin({
                beforeCreate: function beforeCreate() {
                    if (isDef(this.$options.router)) {
                        this._routerRoot = this;
                        this._router = this.$options.router;
                        this._router.init(this);
                        Vue.util.defineReactive(this, '_route', this._router.history.current);
                    }
                    else {
                        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
                    }
                    registerInstance(this, this);
                },
                destroyed: function destroyed() {
                    registerInstance(this);
                }
            });
            Object.defineProperty(Vue.prototype, '$router', {
                get: function get() { return this._routerRoot._router; }
            });
            Object.defineProperty(Vue.prototype, '$route', {
                get: function get() { return this._routerRoot._route; }
            });
            Vue.component('router-view', View);
            Vue.component('router-link', Link);
            var strats = Vue.config.optionMergeStrategies;
            // use the same hook merging strategy for route hooks
            strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
        }
        /*  */
        var inBrowser = typeof window !== 'undefined';
        /*  */
        function resolvePath(relative, base, append) {
            var firstChar = relative.charAt(0);
            if (firstChar === '/') {
                return relative;
            }
            if (firstChar === '?' || firstChar === '#') {
                return base + relative;
            }
            var stack = base.split('/');
            // remove trailing segment if:
            // - not appending
            // - appending to trailing slash (last segment is empty)
            if (!append || !stack[stack.length - 1]) {
                stack.pop();
            }
            // resolve relative path
            var segments = relative.replace(/^\//, '').split('/');
            for (var i = 0; i < segments.length; i++) {
                var segment = segments[i];
                if (segment === '..') {
                    stack.pop();
                }
                else if (segment !== '.') {
                    stack.push(segment);
                }
            }
            // ensure leading slash
            if (stack[0] !== '') {
                stack.unshift('');
            }
            return stack.join('/');
        }
        function parsePath(path) {
            var hash = '';
            var query = '';
            var hashIndex = path.indexOf('#');
            if (hashIndex >= 0) {
                hash = path.slice(hashIndex);
                path = path.slice(0, hashIndex);
            }
            var queryIndex = path.indexOf('?');
            if (queryIndex >= 0) {
                query = path.slice(queryIndex + 1);
                path = path.slice(0, queryIndex);
            }
            return {
                path: path,
                query: query,
                hash: hash
            };
        }
        function cleanPath(path) {
            return path.replace(/\/\//g, '/');
        }
        var isarray = Array.isArray || function (arr) {
            return Object.prototype.toString.call(arr) == '[object Array]';
        };
        /**
         * Expose `pathToRegexp`.
         */
        var pathToRegexp_1 = pathToRegexp;
        var parse_1 = parse;
        var compile_1 = compile;
        var tokensToFunction_1 = tokensToFunction;
        var tokensToRegExp_1 = tokensToRegExp;
        /**
         * The main path matching regexp utility.
         *
         * @type {RegExp}
         */
        var PATH_REGEXP = new RegExp([
            // Match escaped characters that would otherwise appear in future matches.
            // This allows the user to escape special characters that won't transform.
            '(\\\\.)',
            // Match Express-style parameters and un-named parameters with a prefix
            // and optional suffixes. Matches appear as:
            //
            // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
            // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
            // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
            '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
        ].join('|'), 'g');
        /**
         * Parse a string for the raw tokens.
         *
         * @param  {string}  str
         * @param  {Object=} options
         * @return {!Array}
         */
        function parse(str, options) {
            var tokens = [];
            var key = 0;
            var index = 0;
            var path = '';
            var defaultDelimiter = options && options.delimiter || '/';
            var res;
            while ((res = PATH_REGEXP.exec(str)) != null) {
                var m = res[0];
                var escaped = res[1];
                var offset = res.index;
                path += str.slice(index, offset);
                index = offset + m.length;
                // Ignore already escaped sequences.
                if (escaped) {
                    path += escaped[1];
                    continue;
                }
                var next = str[index];
                var prefix = res[2];
                var name = res[3];
                var capture = res[4];
                var group = res[5];
                var modifier = res[6];
                var asterisk = res[7];
                // Push the current path onto the tokens.
                if (path) {
                    tokens.push(path);
                    path = '';
                }
                var partial = prefix != null && next != null && next !== prefix;
                var repeat = modifier === '+' || modifier === '*';
                var optional = modifier === '?' || modifier === '*';
                var delimiter = res[2] || defaultDelimiter;
                var pattern = capture || group;
                tokens.push({
                    name: name || key++,
                    prefix: prefix || '',
                    delimiter: delimiter,
                    optional: optional,
                    repeat: repeat,
                    partial: partial,
                    asterisk: !!asterisk,
                    pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
                });
            }
            // Match any characters still remaining.
            if (index < str.length) {
                path += str.substr(index);
            }
            // If the path exists, push it onto the end.
            if (path) {
                tokens.push(path);
            }
            return tokens;
        }
        /**
         * Compile a string to a template function for the path.
         *
         * @param  {string}             str
         * @param  {Object=}            options
         * @return {!function(Object=, Object=)}
         */
        function compile(str, options) {
            return tokensToFunction(parse(str, options));
        }
        /**
         * Prettier encoding of URI path segments.
         *
         * @param  {string}
         * @return {string}
         */
        function encodeURIComponentPretty(str) {
            return encodeURI(str).replace(/[\/?#]/g, function (c) {
                return '%' + c.charCodeAt(0).toString(16).toUpperCase();
            });
        }
        /**
         * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
         *
         * @param  {string}
         * @return {string}
         */
        function encodeAsterisk(str) {
            return encodeURI(str).replace(/[?#]/g, function (c) {
                return '%' + c.charCodeAt(0).toString(16).toUpperCase();
            });
        }
        /**
         * Expose a method for transforming tokens into the path function.
         */
        function tokensToFunction(tokens) {
            // Compile all the tokens into regexps.
            var matches = new Array(tokens.length);
            // Compile all the patterns before compilation.
            for (var i = 0; i < tokens.length; i++) {
                if (typeof tokens[i] === 'object') {
                    matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
                }
            }
            return function (obj, opts) {
                var path = '';
                var data = obj || {};
                var options = opts || {};
                var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;
                for (var i = 0; i < tokens.length; i++) {
                    var token = tokens[i];
                    if (typeof token === 'string') {
                        path += token;
                        continue;
                    }
                    var value = data[token.name];
                    var segment;
                    if (value == null) {
                        if (token.optional) {
                            // Prepend partial segment prefixes.
                            if (token.partial) {
                                path += token.prefix;
                            }
                            continue;
                        }
                        else {
                            throw new TypeError('Expected "' + token.name + '" to be defined');
                        }
                    }
                    if (isarray(value)) {
                        if (!token.repeat) {
                            throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
                        }
                        if (value.length === 0) {
                            if (token.optional) {
                                continue;
                            }
                            else {
                                throw new TypeError('Expected "' + token.name + '" to not be empty');
                            }
                        }
                        for (var j = 0; j < value.length; j++) {
                            segment = encode(value[j]);
                            if (!matches[i].test(segment)) {
                                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
                            }
                            path += (j === 0 ? token.prefix : token.delimiter) + segment;
                        }
                        continue;
                    }
                    segment = token.asterisk ? encodeAsterisk(value) : encode(value);
                    if (!matches[i].test(segment)) {
                        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
                    }
                    path += token.prefix + segment;
                }
                return path;
            };
        }
        /**
         * Escape a regular expression string.
         *
         * @param  {string} str
         * @return {string}
         */
        function escapeString(str) {
            return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
        }
        /**
         * Escape the capturing group by escaping special characters and meaning.
         *
         * @param  {string} group
         * @return {string}
         */
        function escapeGroup(group) {
            return group.replace(/([=!:$\/()])/g, '\\$1');
        }
        /**
         * Attach the keys as a property of the regexp.
         *
         * @param  {!RegExp} re
         * @param  {Array}   keys
         * @return {!RegExp}
         */
        function attachKeys(re, keys) {
            re.keys = keys;
            return re;
        }
        /**
         * Get the flags for a regexp from the options.
         *
         * @param  {Object} options
         * @return {string}
         */
        function flags(options) {
            return options.sensitive ? '' : 'i';
        }
        /**
         * Pull out keys from a regexp.
         *
         * @param  {!RegExp} path
         * @param  {!Array}  keys
         * @return {!RegExp}
         */
        function regexpToRegexp(path, keys) {
            // Use a negative lookahead to match only capturing groups.
            var groups = path.source.match(/\((?!\?)/g);
            if (groups) {
                for (var i = 0; i < groups.length; i++) {
                    keys.push({
                        name: i,
                        prefix: null,
                        delimiter: null,
                        optional: false,
                        repeat: false,
                        partial: false,
                        asterisk: false,
                        pattern: null
                    });
                }
            }
            return attachKeys(path, keys);
        }
        /**
         * Transform an array into a regexp.
         *
         * @param  {!Array}  path
         * @param  {Array}   keys
         * @param  {!Object} options
         * @return {!RegExp}
         */
        function arrayToRegexp(path, keys, options) {
            var parts = [];
            for (var i = 0; i < path.length; i++) {
                parts.push(pathToRegexp(path[i], keys, options).source);
            }
            var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));
            return attachKeys(regexp, keys);
        }
        /**
         * Create a path regexp from string input.
         *
         * @param  {string}  path
         * @param  {!Array}  keys
         * @param  {!Object} options
         * @return {!RegExp}
         */
        function stringToRegexp(path, keys, options) {
            return tokensToRegExp(parse(path, options), keys, options);
        }
        /**
         * Expose a function for taking tokens and returning a RegExp.
         *
         * @param  {!Array}          tokens
         * @param  {(Array|Object)=} keys
         * @param  {Object=}         options
         * @return {!RegExp}
         */
        function tokensToRegExp(tokens, keys, options) {
            if (!isarray(keys)) {
                options = /** @type {!Object} */ (keys || options);
                keys = [];
            }
            options = options || {};
            var strict = options.strict;
            var end = options.end !== false;
            var route = '';
            // Iterate over the tokens and create our regexp string.
            for (var i = 0; i < tokens.length; i++) {
                var token = tokens[i];
                if (typeof token === 'string') {
                    route += escapeString(token);
                }
                else {
                    var prefix = escapeString(token.prefix);
                    var capture = '(?:' + token.pattern + ')';
                    keys.push(token);
                    if (token.repeat) {
                        capture += '(?:' + prefix + capture + ')*';
                    }
                    if (token.optional) {
                        if (!token.partial) {
                            capture = '(?:' + prefix + '(' + capture + '))?';
                        }
                        else {
                            capture = prefix + '(' + capture + ')?';
                        }
                    }
                    else {
                        capture = prefix + '(' + capture + ')';
                    }
                    route += capture;
                }
            }
            var delimiter = escapeString(options.delimiter || '/');
            var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;
            // In non-strict mode we allow a slash at the end of match. If the path to
            // match already ends with a slash, we remove it for consistency. The slash
            // is valid at the end of a path match, not in the middle. This is important
            // in non-ending mode, where "/test/" shouldn't match "/test//route".
            if (!strict) {
                route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
            }
            if (end) {
                route += '$';
            }
            else {
                // In non-ending mode, we need the capturing groups to match as much as
                // possible by using a positive lookahead to the end or next path segment.
                route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
            }
            return attachKeys(new RegExp('^' + route, flags(options)), keys);
        }
        /**
         * Normalize the given path string, returning a regular expression.
         *
         * An empty array can be passed in for the keys, which will hold the
         * placeholder key descriptions. For example, using `/user/:id`, `keys` will
         * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
         *
         * @param  {(string|RegExp|Array)} path
         * @param  {(Array|Object)=}       keys
         * @param  {Object=}               options
         * @return {!RegExp}
         */
        function pathToRegexp(path, keys, options) {
            if (!isarray(keys)) {
                options = /** @type {!Object} */ (keys || options);
                keys = [];
            }
            options = options || {};
            if (path instanceof RegExp) {
                return regexpToRegexp(path, /** @type {!Array} */ (keys));
            }
            if (isarray(path)) {
                return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options);
            }
            return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options);
        }
        pathToRegexp_1.parse = parse_1;
        pathToRegexp_1.compile = compile_1;
        pathToRegexp_1.tokensToFunction = tokensToFunction_1;
        pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
        /*  */
        // $flow-disable-line
        var regexpCompileCache = Object.create(null);
        function fillParams(path, params, routeMsg) {
            try {
                var filler = regexpCompileCache[path] ||
                    (regexpCompileCache[path] = pathToRegexp_1.compile(path));
                return filler(params || {}, { pretty: true });
            }
            catch (e) {
                if (true) {
                    warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
                }
                return '';
            }
        }
        /*  */
        function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap) {
            // the path list is used to control path matching priority
            var pathList = oldPathList || [];
            // $flow-disable-line
            var pathMap = oldPathMap || Object.create(null);
            // $flow-disable-line
            var nameMap = oldNameMap || Object.create(null);
            routes.forEach(function (route) {
                addRouteRecord(pathList, pathMap, nameMap, route);
            });
            // ensure wildcard routes are always at the end
            for (var i = 0, l = pathList.length; i < l; i++) {
                if (pathList[i] === '*') {
                    pathList.push(pathList.splice(i, 1)[0]);
                    l--;
                    i--;
                }
            }
            return {
                pathList: pathList,
                pathMap: pathMap,
                nameMap: nameMap
            };
        }
        function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
            var path = route.path;
            var name = route.name;
            if (true) {
                assert(path != null, "\"path\" is required in a route configuration.");
                assert(typeof route.component !== 'string', "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
                    "string id. Use an actual component instead.");
            }
            var pathToRegexpOptions = route.pathToRegexpOptions || {};
            var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);
            if (typeof route.caseSensitive === 'boolean') {
                pathToRegexpOptions.sensitive = route.caseSensitive;
            }
            var record = {
                path: normalizedPath,
                regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
                components: route.components || { default: route.component },
                instances: {},
                name: name,
                parent: parent,
                matchAs: matchAs,
                redirect: route.redirect,
                beforeEnter: route.beforeEnter,
                meta: route.meta || {},
                props: route.props == null
                    ? {}
                    : route.components
                        ? route.props
                        : { default: route.props }
            };
            if (route.children) {
                // Warn if route is named, does not redirect and has a default child route.
                // If users navigate to this route by name, the default child will
                // not be rendered (GH Issue #629)
                if (true) {
                    if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
                        warn(false, "Named Route '" + (route.name) + "' has a default child route. " +
                            "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
                            "the default child route will not be rendered. Remove the name from " +
                            "this route and use the name of the default child route for named " +
                            "links instead.");
                    }
                }
                route.children.forEach(function (child) {
                    var childMatchAs = matchAs
                        ? cleanPath((matchAs + "/" + (child.path)))
                        : undefined;
                    addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
                });
            }
            if (route.alias !== undefined) {
                var aliases = Array.isArray(route.alias)
                    ? route.alias
                    : [route.alias];
                aliases.forEach(function (alias) {
                    var aliasRoute = {
                        path: alias,
                        children: route.children
                    };
                    addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path || '/' // matchAs
                    );
                });
            }
            if (!pathMap[record.path]) {
                pathList.push(record.path);
                pathMap[record.path] = record;
            }
            if (name) {
                if (!nameMap[name]) {
                    nameMap[name] = record;
                }
                else if (true && !matchAs) {
                    warn(false, "Duplicate named routes definition: " +
                        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }");
                }
            }
        }
        function compileRouteRegex(path, pathToRegexpOptions) {
            var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
            if (true) {
                var keys = Object.create(null);
                regex.keys.forEach(function (key) {
                    warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
                    keys[key.name] = true;
                });
            }
            return regex;
        }
        function normalizePath(path, parent, strict) {
            if (!strict) {
                path = path.replace(/\/$/, '');
            }
            if (path[0] === '/') {
                return path;
            }
            if (parent == null) {
                return path;
            }
            return cleanPath(((parent.path) + "/" + path));
        }
        /*  */
        function normalizeLocation(raw, current, append, router) {
            var next = typeof raw === 'string' ? { path: raw } : raw;
            // named target
            if (next.name || next._normalized) {
                return next;
            }
            // relative params
            if (!next.path && next.params && current) {
                next = assign({}, next);
                next._normalized = true;
                var params = assign(assign({}, current.params), next.params);
                if (current.name) {
                    next.name = current.name;
                    next.params = params;
                }
                else if (current.matched.length) {
                    var rawPath = current.matched[current.matched.length - 1].path;
                    next.path = fillParams(rawPath, params, ("path " + (current.path)));
                }
                else if (true) {
                    warn(false, "relative params navigation requires a current route.");
                }
                return next;
            }
            var parsedPath = parsePath(next.path || '');
            var basePath = (current && current.path) || '/';
            var path = parsedPath.path
                ? resolvePath(parsedPath.path, basePath, append || next.append)
                : basePath;
            var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);
            var hash = next.hash || parsedPath.hash;
            if (hash && hash.charAt(0) !== '#') {
                hash = "#" + hash;
            }
            return {
                _normalized: true,
                path: path,
                query: query,
                hash: hash
            };
        }
        function assign(a, b) {
            for (var key in b) {
                a[key] = b[key];
            }
            return a;
        }
        /*  */
        function createMatcher(routes, router) {
            var ref = createRouteMap(routes);
            var pathList = ref.pathList;
            var pathMap = ref.pathMap;
            var nameMap = ref.nameMap;
            function addRoutes(routes) {
                createRouteMap(routes, pathList, pathMap, nameMap);
            }
            function match(raw, currentRoute, redirectedFrom) {
                var location = normalizeLocation(raw, currentRoute, false, router);
                var name = location.name;
                if (name) {
                    var record = nameMap[name];
                    if (true) {
                        warn(record, ("Route with name '" + name + "' does not exist"));
                    }
                    if (!record) {
                        return _createRoute(null, location);
                    }
                    var paramNames = record.regex.keys
                        .filter(function (key) { return !key.optional; })
                        .map(function (key) { return key.name; });
                    if (typeof location.params !== 'object') {
                        location.params = {};
                    }
                    if (currentRoute && typeof currentRoute.params === 'object') {
                        for (var key in currentRoute.params) {
                            if (!(key in location.params) && paramNames.indexOf(key) > -1) {
                                location.params[key] = currentRoute.params[key];
                            }
                        }
                    }
                    if (record) {
                        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
                        return _createRoute(record, location, redirectedFrom);
                    }
                }
                else if (location.path) {
                    location.params = {};
                    for (var i = 0; i < pathList.length; i++) {
                        var path = pathList[i];
                        var record$1 = pathMap[path];
                        if (matchRoute(record$1.regex, location.path, location.params)) {
                            return _createRoute(record$1, location, redirectedFrom);
                        }
                    }
                }
                // no match
                return _createRoute(null, location);
            }
            function redirect(record, location) {
                var originalRedirect = record.redirect;
                var redirect = typeof originalRedirect === 'function'
                    ? originalRedirect(createRoute(record, location, null, router))
                    : originalRedirect;
                if (typeof redirect === 'string') {
                    redirect = { path: redirect };
                }
                if (!redirect || typeof redirect !== 'object') {
                    if (true) {
                        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
                    }
                    return _createRoute(null, location);
                }
                var re = redirect;
                var name = re.name;
                var path = re.path;
                var query = location.query;
                var hash = location.hash;
                var params = location.params;
                query = re.hasOwnProperty('query') ? re.query : query;
                hash = re.hasOwnProperty('hash') ? re.hash : hash;
                params = re.hasOwnProperty('params') ? re.params : params;
                if (name) {
                    // resolved named direct
                    var targetRecord = nameMap[name];
                    if (true) {
                        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
                    }
                    return match({
                        _normalized: true,
                        name: name,
                        query: query,
                        hash: hash,
                        params: params
                    }, undefined, location);
                }
                else if (path) {
                    // 1. resolve relative redirect
                    var rawPath = resolveRecordPath(path, record);
                    // 2. resolve params
                    var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
                    // 3. rematch with existing query and hash
                    return match({
                        _normalized: true,
                        path: resolvedPath,
                        query: query,
                        hash: hash
                    }, undefined, location);
                }
                else {
                    if (true) {
                        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
                    }
                    return _createRoute(null, location);
                }
            }
            function alias(record, location, matchAs) {
                var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
                var aliasedMatch = match({
                    _normalized: true,
                    path: aliasedPath
                });
                if (aliasedMatch) {
                    var matched = aliasedMatch.matched;
                    var aliasedRecord = matched[matched.length - 1];
                    location.params = aliasedMatch.params;
                    return _createRoute(aliasedRecord, location);
                }
                return _createRoute(null, location);
            }
            function _createRoute(record, location, redirectedFrom) {
                if (record && record.redirect) {
                    return redirect(record, redirectedFrom || location);
                }
                if (record && record.matchAs) {
                    return alias(record, location, record.matchAs);
                }
                return createRoute(record, location, redirectedFrom, router);
            }
            return {
                match: match,
                addRoutes: addRoutes
            };
        }
        function matchRoute(regex, path, params) {
            var m = path.match(regex);
            if (!m) {
                return false;
            }
            else if (!params) {
                return true;
            }
            for (var i = 1, len = m.length; i < len; ++i) {
                var key = regex.keys[i - 1];
                var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
                if (key) {
                    params[key.name] = val;
                }
            }
            return true;
        }
        function resolveRecordPath(path, record) {
            return resolvePath(path, record.parent ? record.parent.path : '/', true);
        }
        /*  */
        var positionStore = Object.create(null);
        function setupScroll() {
            // Fix for #1585 for Firefox
            window.history.replaceState({ key: getStateKey() }, '');
            window.addEventListener('popstate', function (e) {
                saveScrollPosition();
                if (e.state && e.state.key) {
                    setStateKey(e.state.key);
                }
            });
        }
        function handleScroll(router, to, from, isPop) {
            if (!router.app) {
                return;
            }
            var behavior = router.options.scrollBehavior;
            if (!behavior) {
                return;
            }
            if (true) {
                assert(typeof behavior === 'function', "scrollBehavior must be a function");
            }
            // wait until re-render finishes before scrolling
            router.app.$nextTick(function () {
                var position = getScrollPosition();
                var shouldScroll = behavior(to, from, isPop ? position : null);
                if (!shouldScroll) {
                    return;
                }
                if (typeof shouldScroll.then === 'function') {
                    shouldScroll.then(function (shouldScroll) {
                        scrollToPosition((shouldScroll), position);
                    }).catch(function (err) {
                        if (true) {
                            assert(false, err.toString());
                        }
                    });
                }
                else {
                    scrollToPosition(shouldScroll, position);
                }
            });
        }
        function saveScrollPosition() {
            var key = getStateKey();
            if (key) {
                positionStore[key] = {
                    x: window.pageXOffset,
                    y: window.pageYOffset
                };
            }
        }
        function getScrollPosition() {
            var key = getStateKey();
            if (key) {
                return positionStore[key];
            }
        }
        function getElementPosition(el, offset) {
            var docEl = document.documentElement;
            var docRect = docEl.getBoundingClientRect();
            var elRect = el.getBoundingClientRect();
            return {
                x: elRect.left - docRect.left - offset.x,
                y: elRect.top - docRect.top - offset.y
            };
        }
        function isValidPosition(obj) {
            return isNumber(obj.x) || isNumber(obj.y);
        }
        function normalizePosition(obj) {
            return {
                x: isNumber(obj.x) ? obj.x : window.pageXOffset,
                y: isNumber(obj.y) ? obj.y : window.pageYOffset
            };
        }
        function normalizeOffset(obj) {
            return {
                x: isNumber(obj.x) ? obj.x : 0,
                y: isNumber(obj.y) ? obj.y : 0
            };
        }
        function isNumber(v) {
            return typeof v === 'number';
        }
        function scrollToPosition(shouldScroll, position) {
            var isObject = typeof shouldScroll === 'object';
            if (isObject && typeof shouldScroll.selector === 'string') {
                var el = document.querySelector(shouldScroll.selector);
                if (el) {
                    var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
                    offset = normalizeOffset(offset);
                    position = getElementPosition(el, offset);
                }
                else if (isValidPosition(shouldScroll)) {
                    position = normalizePosition(shouldScroll);
                }
            }
            else if (isObject && isValidPosition(shouldScroll)) {
                position = normalizePosition(shouldScroll);
            }
            if (position) {
                window.scrollTo(position.x, position.y);
            }
        }
        /*  */
        var supportsPushState = inBrowser && (function () {
            var ua = window.navigator.userAgent;
            if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
                ua.indexOf('Mobile Safari') !== -1 &&
                ua.indexOf('Chrome') === -1 &&
                ua.indexOf('Windows Phone') === -1) {
                return false;
            }
            return window.history && 'pushState' in window.history;
        })();
        // use User Timing api (if present) for more accurate key precision
        var Time = inBrowser && window.performance && window.performance.now
            ? window.performance
            : Date;
        var _key = genKey();
        function genKey() {
            return Time.now().toFixed(3);
        }
        function getStateKey() {
            return _key;
        }
        function setStateKey(key) {
            _key = key;
        }
        function pushState(url, replace) {
            saveScrollPosition();
            // try...catch the pushState call to get around Safari
            // DOM Exception 18 where it limits to 100 pushState calls
            var history = window.history;
            try {
                if (replace) {
                    history.replaceState({ key: _key }, '', url);
                }
                else {
                    _key = genKey();
                    history.pushState({ key: _key }, '', url);
                }
            }
            catch (e) {
                window.location[replace ? 'replace' : 'assign'](url);
            }
        }
        function replaceState(url) {
            pushState(url, true);
        }
        /*  */
        function runQueue(queue, fn, cb) {
            var step = function (index) {
                if (index >= queue.length) {
                    cb();
                }
                else {
                    if (queue[index]) {
                        fn(queue[index], function () {
                            step(index + 1);
                        });
                    }
                    else {
                        step(index + 1);
                    }
                }
            };
            step(0);
        }
        /*  */
        function resolveAsyncComponents(matched) {
            return function (to, from, next) {
                var hasAsync = false;
                var pending = 0;
                var error = null;
                flatMapComponents(matched, function (def, _, match, key) {
                    // if it's a function and doesn't have cid attached,
                    // assume it's an async component resolve function.
                    // we are not using Vue's default async resolving mechanism because
                    // we want to halt the navigation until the incoming component has been
                    // resolved.
                    if (typeof def === 'function' && def.cid === undefined) {
                        hasAsync = true;
                        pending++;
                        var resolve = once(function (resolvedDef) {
                            if (isESModule(resolvedDef)) {
                                resolvedDef = resolvedDef.default;
                            }
                            // save resolved on async factory in case it's used elsewhere
                            def.resolved = typeof resolvedDef === 'function'
                                ? resolvedDef
                                : _Vue.extend(resolvedDef);
                            match.components[key] = resolvedDef;
                            pending--;
                            if (pending <= 0) {
                                next();
                            }
                        });
                        var reject = once(function (reason) {
                            var msg = "Failed to resolve async component " + key + ": " + reason;
                            true && warn(false, msg);
                            if (!error) {
                                error = isError(reason)
                                    ? reason
                                    : new Error(msg);
                                next(error);
                            }
                        });
                        var res;
                        try {
                            res = def(resolve, reject);
                        }
                        catch (e) {
                            reject(e);
                        }
                        if (res) {
                            if (typeof res.then === 'function') {
                                res.then(resolve, reject);
                            }
                            else {
                                // new syntax in Vue 2.3
                                var comp = res.component;
                                if (comp && typeof comp.then === 'function') {
                                    comp.then(resolve, reject);
                                }
                            }
                        }
                    }
                });
                if (!hasAsync) {
                    next();
                }
            };
        }
        function flatMapComponents(matched, fn) {
            return flatten(matched.map(function (m) {
                return Object.keys(m.components).map(function (key) {
                    return fn(m.components[key], m.instances[key], m, key);
                });
            }));
        }
        function flatten(arr) {
            return Array.prototype.concat.apply([], arr);
        }
        var hasSymbol = typeof Symbol === 'function' &&
            typeof Symbol.toStringTag === 'symbol';
        function isESModule(obj) {
            return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module');
        }
        // in Webpack 2, require.ensure now also returns a Promise
        // so the resolve/reject functions may get called an extra time
        // if the user uses an arrow function shorthand that happens to
        // return that Promise.
        function once(fn) {
            var called = false;
            return function () {
                var args = [], len = arguments.length;
                while (len--)
                    args[len] = arguments[len];
                if (called) {
                    return;
                }
                called = true;
                return fn.apply(this, args);
            };
        }
        /*  */
        var History = function History(router, base) {
            this.router = router;
            this.base = normalizeBase(base);
            // start with a route object that stands for "nowhere"
            this.current = START;
            this.pending = null;
            this.ready = false;
            this.readyCbs = [];
            this.readyErrorCbs = [];
            this.errorCbs = [];
        };
        History.prototype.listen = function listen(cb) {
            this.cb = cb;
        };
        History.prototype.onReady = function onReady(cb, errorCb) {
            if (this.ready) {
                cb();
            }
            else {
                this.readyCbs.push(cb);
                if (errorCb) {
                    this.readyErrorCbs.push(errorCb);
                }
            }
        };
        History.prototype.onError = function onError(errorCb) {
            this.errorCbs.push(errorCb);
        };
        History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
            var this$1 = this;
            var route = this.router.match(location, this.current);
            this.confirmTransition(route, function () {
                this$1.updateRoute(route);
                onComplete && onComplete(route);
                this$1.ensureURL();
                // fire ready cbs once
                if (!this$1.ready) {
                    this$1.ready = true;
                    this$1.readyCbs.forEach(function (cb) { cb(route); });
                }
            }, function (err) {
                if (onAbort) {
                    onAbort(err);
                }
                if (err && !this$1.ready) {
                    this$1.ready = true;
                    this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
                }
            });
        };
        History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
            var this$1 = this;
            var current = this.current;
            var abort = function (err) {
                if (isError(err)) {
                    if (this$1.errorCbs.length) {
                        this$1.errorCbs.forEach(function (cb) { cb(err); });
                    }
                    else {
                        warn(false, 'uncaught error during route navigation:');
                        console.error(err);
                    }
                }
                onAbort && onAbort(err);
            };
            if (isSameRoute(route, current) &&
                // in the case the route map has been dynamically appended to
                route.matched.length === current.matched.length) {
                this.ensureURL();
                return abort();
            }
            var ref = resolveQueue(this.current.matched, route.matched);
            var updated = ref.updated;
            var deactivated = ref.deactivated;
            var activated = ref.activated;
            var queue = [].concat(
            // in-component leave guards
            extractLeaveGuards(deactivated), 
            // global before hooks
            this.router.beforeHooks, 
            // in-component update hooks
            extractUpdateHooks(updated), 
            // in-config enter guards
            activated.map(function (m) { return m.beforeEnter; }), 
            // async components
            resolveAsyncComponents(activated));
            this.pending = route;
            var iterator = function (hook, next) {
                if (this$1.pending !== route) {
                    return abort();
                }
                try {
                    hook(route, current, function (to) {
                        if (to === false || isError(to)) {
                            // next(false) -> abort navigation, ensure current URL
                            this$1.ensureURL(true);
                            abort(to);
                        }
                        else if (typeof to === 'string' ||
                            (typeof to === 'object' && (typeof to.path === 'string' ||
                                typeof to.name === 'string'))) {
                            // next('/') or next({ path: '/' }) -> redirect
                            abort();
                            if (typeof to === 'object' && to.replace) {
                                this$1.replace(to);
                            }
                            else {
                                this$1.push(to);
                            }
                        }
                        else {
                            // confirm transition and pass on the value
                            next(to);
                        }
                    });
                }
                catch (e) {
                    abort(e);
                }
            };
            runQueue(queue, iterator, function () {
                var postEnterCbs = [];
                var isValid = function () { return this$1.current === route; };
                // wait until async components are resolved before
                // extracting in-component enter guards
                var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
                var queue = enterGuards.concat(this$1.router.resolveHooks);
                runQueue(queue, iterator, function () {
                    if (this$1.pending !== route) {
                        return abort();
                    }
                    this$1.pending = null;
                    onComplete(route);
                    if (this$1.router.app) {
                        this$1.router.app.$nextTick(function () {
                            postEnterCbs.forEach(function (cb) { cb(); });
                        });
                    }
                });
            });
        };
        History.prototype.updateRoute = function updateRoute(route) {
            var prev = this.current;
            this.current = route;
            this.cb && this.cb(route);
            this.router.afterHooks.forEach(function (hook) {
                hook && hook(route, prev);
            });
        };
        function normalizeBase(base) {
            if (!base) {
                if (inBrowser) {
                    // respect <base> tag
                    var baseEl = document.querySelector('base');
                    base = (baseEl && baseEl.getAttribute('href')) || '/';
                    // strip full URL origin
                    base = base.replace(/^https?:\/\/[^\/]+/, '');
                }
                else {
                    base = '/';
                }
            }
            // make sure there's the starting slash
            if (base.charAt(0) !== '/') {
                base = '/' + base;
            }
            // remove trailing slash
            return base.replace(/\/$/, '');
        }
        function resolveQueue(current, next) {
            var i;
            var max = Math.max(current.length, next.length);
            for (i = 0; i < max; i++) {
                if (current[i] !== next[i]) {
                    break;
                }
            }
            return {
                updated: next.slice(0, i),
                activated: next.slice(i),
                deactivated: current.slice(i)
            };
        }
        function extractGuards(records, name, bind, reverse) {
            var guards = flatMapComponents(records, function (def, instance, match, key) {
                var guard = extractGuard(def, name);
                if (guard) {
                    return Array.isArray(guard)
                        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
                        : bind(guard, instance, match, key);
                }
            });
            return flatten(reverse ? guards.reverse() : guards);
        }
        function extractGuard(def, key) {
            if (typeof def !== 'function') {
                // extend now so that global mixins are applied.
                def = _Vue.extend(def);
            }
            return def.options[key];
        }
        function extractLeaveGuards(deactivated) {
            return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
        }
        function extractUpdateHooks(updated) {
            return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
        }
        function bindGuard(guard, instance) {
            if (instance) {
                return function boundRouteGuard() {
                    return guard.apply(instance, arguments);
                };
            }
        }
        function extractEnterGuards(activated, cbs, isValid) {
            return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
                return bindEnterGuard(guard, match, key, cbs, isValid);
            });
        }
        function bindEnterGuard(guard, match, key, cbs, isValid) {
            return function routeEnterGuard(to, from, next) {
                return guard(to, from, function (cb) {
                    next(cb);
                    if (typeof cb === 'function') {
                        cbs.push(function () {
                            // #750
                            // if a router-view is wrapped with an out-in transition,
                            // the instance may not have been registered at this time.
                            // we will need to poll for registration until current route
                            // is no longer valid.
                            poll(cb, match.instances, key, isValid);
                        });
                    }
                });
            };
        }
        function poll(cb, // somehow flow cannot infer this is a function
        instances, key, isValid) {
            if (instances[key]) {
                cb(instances[key]);
            }
            else if (isValid()) {
                setTimeout(function () {
                    poll(cb, instances, key, isValid);
                }, 16);
            }
        }
        /*  */
        var HTML5History = (function (History$$1) {
            function HTML5History(router, base) {
                var this$1 = this;
                History$$1.call(this, router, base);
                var expectScroll = router.options.scrollBehavior;
                if (expectScroll) {
                    setupScroll();
                }
                var initLocation = getLocation(this.base);
                window.addEventListener('popstate', function (e) {
                    var current = this$1.current;
                    // Avoiding first `popstate` event dispatched in some browsers but first
                    // history route not updated since async guard at the same time.
                    var location = getLocation(this$1.base);
                    if (this$1.current === START && location === initLocation) {
                        return;
                    }
                    this$1.transitionTo(location, function (route) {
                        if (expectScroll) {
                            handleScroll(router, route, current, true);
                        }
                    });
                });
            }
            if (History$$1)
                HTML5History.__proto__ = History$$1;
            HTML5History.prototype = Object.create(History$$1 && History$$1.prototype);
            HTML5History.prototype.constructor = HTML5History;
            HTML5History.prototype.go = function go(n) {
                window.history.go(n);
            };
            HTML5History.prototype.push = function push(location, onComplete, onAbort) {
                var this$1 = this;
                var ref = this;
                var fromRoute = ref.current;
                this.transitionTo(location, function (route) {
                    pushState(cleanPath(this$1.base + route.fullPath));
                    handleScroll(this$1.router, route, fromRoute, false);
                    onComplete && onComplete(route);
                }, onAbort);
            };
            HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
                var this$1 = this;
                var ref = this;
                var fromRoute = ref.current;
                this.transitionTo(location, function (route) {
                    replaceState(cleanPath(this$1.base + route.fullPath));
                    handleScroll(this$1.router, route, fromRoute, false);
                    onComplete && onComplete(route);
                }, onAbort);
            };
            HTML5History.prototype.ensureURL = function ensureURL(push) {
                if (getLocation(this.base) !== this.current.fullPath) {
                    var current = cleanPath(this.base + this.current.fullPath);
                    push ? pushState(current) : replaceState(current);
                }
            };
            HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
                return getLocation(this.base);
            };
            return HTML5History;
        }(History));
        function getLocation(base) {
            var path = window.location.pathname;
            if (base && path.indexOf(base) === 0) {
                path = path.slice(base.length);
            }
            return (path || '/') + window.location.search + window.location.hash;
        }
        /*  */
        var HashHistory = (function (History$$1) {
            function HashHistory(router, base, fallback) {
                History$$1.call(this, router, base);
                // check history fallback deeplinking
                if (fallback && checkFallback(this.base)) {
                    return;
                }
                ensureSlash();
            }
            if (History$$1)
                HashHistory.__proto__ = History$$1;
            HashHistory.prototype = Object.create(History$$1 && History$$1.prototype);
            HashHistory.prototype.constructor = HashHistory;
            // this is delayed until the app mounts
            // to avoid the hashchange listener being fired too early
            HashHistory.prototype.setupListeners = function setupListeners() {
                var this$1 = this;
                var router = this.router;
                var expectScroll = router.options.scrollBehavior;
                var supportsScroll = supportsPushState && expectScroll;
                if (supportsScroll) {
                    setupScroll();
                }
                window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
                    var current = this$1.current;
                    if (!ensureSlash()) {
                        return;
                    }
                    this$1.transitionTo(getHash(), function (route) {
                        if (supportsScroll) {
                            handleScroll(this$1.router, route, current, true);
                        }
                        if (!supportsPushState) {
                            replaceHash(route.fullPath);
                        }
                    });
                });
            };
            HashHistory.prototype.push = function push(location, onComplete, onAbort) {
                var this$1 = this;
                var ref = this;
                var fromRoute = ref.current;
                this.transitionTo(location, function (route) {
                    pushHash(route.fullPath);
                    handleScroll(this$1.router, route, fromRoute, false);
                    onComplete && onComplete(route);
                }, onAbort);
            };
            HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
                var this$1 = this;
                var ref = this;
                var fromRoute = ref.current;
                this.transitionTo(location, function (route) {
                    replaceHash(route.fullPath);
                    handleScroll(this$1.router, route, fromRoute, false);
                    onComplete && onComplete(route);
                }, onAbort);
            };
            HashHistory.prototype.go = function go(n) {
                window.history.go(n);
            };
            HashHistory.prototype.ensureURL = function ensureURL(push) {
                var current = this.current.fullPath;
                if (getHash() !== current) {
                    push ? pushHash(current) : replaceHash(current);
                }
            };
            HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
                return getHash();
            };
            return HashHistory;
        }(History));
        function checkFallback(base) {
            var location = getLocation(base);
            if (!/^\/#/.test(location)) {
                window.location.replace(cleanPath(base + '/#' + location));
                return true;
            }
        }
        function ensureSlash() {
            var path = getHash();
            if (path.charAt(0) === '/') {
                return true;
            }
            replaceHash('/' + path);
            return false;
        }
        function getHash() {
            // We can't use window.location.hash here because it's not
            // consistent across browsers - Firefox will pre-decode it!
            var href = window.location.href;
            var index = href.indexOf('#');
            return index === -1 ? '' : href.slice(index + 1);
        }
        function getUrl(path) {
            var href = window.location.href;
            var i = href.indexOf('#');
            var base = i >= 0 ? href.slice(0, i) : href;
            return (base + "#" + path);
        }
        function pushHash(path) {
            if (supportsPushState) {
                pushState(getUrl(path));
            }
            else {
                window.location.hash = path;
            }
        }
        function replaceHash(path) {
            if (supportsPushState) {
                replaceState(getUrl(path));
            }
            else {
                window.location.replace(getUrl(path));
            }
        }
        /*  */
        var AbstractHistory = (function (History$$1) {
            function AbstractHistory(router, base) {
                History$$1.call(this, router, base);
                this.stack = [];
                this.index = -1;
            }
            if (History$$1)
                AbstractHistory.__proto__ = History$$1;
            AbstractHistory.prototype = Object.create(History$$1 && History$$1.prototype);
            AbstractHistory.prototype.constructor = AbstractHistory;
            AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
                var this$1 = this;
                this.transitionTo(location, function (route) {
                    this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
                    this$1.index++;
                    onComplete && onComplete(route);
                }, onAbort);
            };
            AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
                var this$1 = this;
                this.transitionTo(location, function (route) {
                    this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
                    onComplete && onComplete(route);
                }, onAbort);
            };
            AbstractHistory.prototype.go = function go(n) {
                var this$1 = this;
                var targetIndex = this.index + n;
                if (targetIndex < 0 || targetIndex >= this.stack.length) {
                    return;
                }
                var route = this.stack[targetIndex];
                this.confirmTransition(route, function () {
                    this$1.index = targetIndex;
                    this$1.updateRoute(route);
                });
            };
            AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
                var current = this.stack[this.stack.length - 1];
                return current ? current.fullPath : '/';
            };
            AbstractHistory.prototype.ensureURL = function ensureURL() {
                // noop
            };
            return AbstractHistory;
        }(History));
        /*  */
        var VueRouter = function VueRouter(options) {
            if (options === void 0)
                options = {};
            this.app = null;
            this.apps = [];
            this.options = options;
            this.beforeHooks = [];
            this.resolveHooks = [];
            this.afterHooks = [];
            this.matcher = createMatcher(options.routes || [], this);
            var mode = options.mode || 'hash';
            this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
            if (this.fallback) {
                mode = 'hash';
            }
            if (!inBrowser) {
                mode = 'abstract';
            }
            this.mode = mode;
            switch (mode) {
                case 'history':
                    this.history = new HTML5History(this, options.base);
                    break;
                case 'hash':
                    this.history = new HashHistory(this, options.base, this.fallback);
                    break;
                case 'abstract':
                    this.history = new AbstractHistory(this, options.base);
                    break;
                default:
                    if (true) {
                        assert(false, ("invalid mode: " + mode));
                    }
            }
        };
        var prototypeAccessors = { currentRoute: { configurable: true } };
        VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
            return this.matcher.match(raw, current, redirectedFrom);
        };
        prototypeAccessors.currentRoute.get = function () {
            return this.history && this.history.current;
        };
        VueRouter.prototype.init = function init(app /* Vue component instance */) {
            var this$1 = this;
            true && assert(install.installed, "not installed. Make sure to call `Vue.use(VueRouter)` " +
                "before creating root instance.");
            this.apps.push(app);
            // main app already initialized.
            if (this.app) {
                return;
            }
            this.app = app;
            var history = this.history;
            if (history instanceof HTML5History) {
                history.transitionTo(history.getCurrentLocation());
            }
            else if (history instanceof HashHistory) {
                var setupHashListener = function () {
                    history.setupListeners();
                };
                history.transitionTo(history.getCurrentLocation(), setupHashListener, setupHashListener);
            }
            history.listen(function (route) {
                this$1.apps.forEach(function (app) {
                    app._route = route;
                });
            });
        };
        VueRouter.prototype.beforeEach = function beforeEach(fn) {
            return registerHook(this.beforeHooks, fn);
        };
        VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
            return registerHook(this.resolveHooks, fn);
        };
        VueRouter.prototype.afterEach = function afterEach(fn) {
            return registerHook(this.afterHooks, fn);
        };
        VueRouter.prototype.onReady = function onReady(cb, errorCb) {
            this.history.onReady(cb, errorCb);
        };
        VueRouter.prototype.onError = function onError(errorCb) {
            this.history.onError(errorCb);
        };
        VueRouter.prototype.push = function push(location, onComplete, onAbort) {
            this.history.push(location, onComplete, onAbort);
        };
        VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
            this.history.replace(location, onComplete, onAbort);
        };
        VueRouter.prototype.go = function go(n) {
            this.history.go(n);
        };
        VueRouter.prototype.back = function back() {
            this.go(-1);
        };
        VueRouter.prototype.forward = function forward() {
            this.go(1);
        };
        VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
            var route = to
                ? to.matched
                    ? to
                    : this.resolve(to).route
                : this.currentRoute;
            if (!route) {
                return [];
            }
            return [].concat.apply([], route.matched.map(function (m) {
                return Object.keys(m.components).map(function (key) {
                    return m.components[key];
                });
            }));
        };
        VueRouter.prototype.resolve = function resolve(to, current, append) {
            var location = normalizeLocation(to, current || this.history.current, append, this);
            var route = this.match(location, current);
            var fullPath = route.redirectedFrom || route.fullPath;
            var base = this.history.base;
            var href = createHref(base, fullPath, this.mode);
            return {
                location: location,
                route: route,
                href: href,
                // for backwards compat
                normalizedTo: location,
                resolved: route
            };
        };
        VueRouter.prototype.addRoutes = function addRoutes(routes) {
            this.matcher.addRoutes(routes);
            if (this.history.current !== START) {
                this.history.transitionTo(this.history.getCurrentLocation());
            }
        };
        Object.defineProperties(VueRouter.prototype, prototypeAccessors);
        function registerHook(list, fn) {
            list.push(fn);
            return function () {
                var i = list.indexOf(fn);
                if (i > -1) {
                    list.splice(i, 1);
                }
            };
        }
        function createHref(base, fullPath, mode) {
            var path = mode === 'hash' ? '#' + fullPath : fullPath;
            return base ? cleanPath(base + '/' + path) : path;
        }
        VueRouter.install = install;
        VueRouter.version = '3.0.1';
        if (inBrowser && window.Vue) {
            window.Vue.use(VueRouter);
        }
        /* harmony default export */ __webpack_exports__["default"] = (VueRouter);
        /***/ 
    }),
    /***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/application/home/home.vue": 
    /*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
      !*** ./node_modules/vue-style-loader!./node_modules/css-loader?sourceMap!./node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/application/home/home.vue ***!
      \**************************************************************************************************************************************************************************************************************************************************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        // style-loader: Adds some css to the DOM by adding a <style> tag
        // load the styles
        var content = __webpack_require__(/*! !../../../../node_modules/css-loader?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./home.vue */ "./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/application/home/home.vue");
        if (typeof content === 'string')
            content = [[module.i, content, '']];
        if (content.locals)
            module.exports = content.locals;
        // add the styles to the DOM
        var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default;
        var update = add("44dd935c", content, false, {});
        // Hot Module Replacement
        if (false) { }
        /***/ 
    }),
    /***/ "./node_modules/vue-style-loader/lib/addStylesClient.js": 
    /*!**************************************************************!*\
      !*** ./node_modules/vue-style-loader/lib/addStylesClient.js ***!
      \**************************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return addStylesClient; });
        /* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "./node_modules/vue-style-loader/lib/listToStyles.js");
        /*
          MIT License http://www.opensource.org/licenses/mit-license.php
          Author Tobias Koppers @sokra
          Modified by Evan You @yyx990803
        */
        var hasDocument = typeof document !== 'undefined';
        if (typeof DEBUG !== 'undefined' && DEBUG) {
            if (!hasDocument) {
                throw new Error('vue-style-loader cannot be used in a non-browser environment. ' +
                    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
            }
        }
        /*
        type StyleObject = {
          id: number;
          parts: Array<StyleObjectPart>
        }
        
        type StyleObjectPart = {
          css: string;
          media: string;
          sourceMap: ?string
        }
        */
        var stylesInDom = { /*
          [id: number]: {
            id: number,
            refs: number,
            parts: Array<(obj?: StyleObjectPart) => void>
          }
        */};
        var head = hasDocument && (document.head || document.getElementsByTagName('head')[0]);
        var singletonElement = null;
        var singletonCounter = 0;
        var isProduction = false;
        var noop = function () { };
        var options = null;
        var ssrIdKey = 'data-vue-ssr-id';
        // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
        // tags it will allow on a page
        var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
        function addStylesClient(parentId, list, _isProduction, _options) {
            isProduction = _isProduction;
            options = _options || {};
            var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list);
            addStylesToDom(styles);
            return function update(newList) {
                var mayRemove = [];
                for (var i = 0; i < styles.length; i++) {
                    var item = styles[i];
                    var domStyle = stylesInDom[item.id];
                    domStyle.refs--;
                    mayRemove.push(domStyle);
                }
                if (newList) {
                    styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList);
                    addStylesToDom(styles);
                }
                else {
                    styles = [];
                }
                for (var i = 0; i < mayRemove.length; i++) {
                    var domStyle = mayRemove[i];
                    if (domStyle.refs === 0) {
                        for (var j = 0; j < domStyle.parts.length; j++) {
                            domStyle.parts[j]();
                        }
                        delete stylesInDom[domStyle.id];
                    }
                }
            };
        }
        function addStylesToDom(styles /* Array<StyleObject> */) {
            for (var i = 0; i < styles.length; i++) {
                var item = styles[i];
                var domStyle = stylesInDom[item.id];
                if (domStyle) {
                    domStyle.refs++;
                    for (var j = 0; j < domStyle.parts.length; j++) {
                        domStyle.parts[j](item.parts[j]);
                    }
                    for (; j < item.parts.length; j++) {
                        domStyle.parts.push(addStyle(item.parts[j]));
                    }
                    if (domStyle.parts.length > item.parts.length) {
                        domStyle.parts.length = item.parts.length;
                    }
                }
                else {
                    var parts = [];
                    for (var j = 0; j < item.parts.length; j++) {
                        parts.push(addStyle(item.parts[j]));
                    }
                    stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts };
                }
            }
        }
        function createStyleElement() {
            var styleElement = document.createElement('style');
            styleElement.type = 'text/css';
            head.appendChild(styleElement);
            return styleElement;
        }
        function addStyle(obj /* StyleObjectPart */) {
            var update, remove;
            var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]');
            if (styleElement) {
                if (isProduction) {
                    // has SSR styles and in production mode.
                    // simply do nothing.
                    return noop;
                }
                else {
                    // has SSR styles but in dev mode.
                    // for some reason Chrome can't handle source map in server-rendered
                    // style tags - source maps in <style> only works if the style tag is
                    // created and inserted dynamically. So we remove the server rendered
                    // styles and inject new ones.
                    styleElement.parentNode.removeChild(styleElement);
                }
            }
            if (isOldIE) {
                // use singleton mode for IE9.
                var styleIndex = singletonCounter++;
                styleElement = singletonElement || (singletonElement = createStyleElement());
                update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
                remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
            }
            else {
                // use multi-style-tag mode in all other cases
                styleElement = createStyleElement();
                update = applyToTag.bind(null, styleElement);
                remove = function () {
                    styleElement.parentNode.removeChild(styleElement);
                };
            }
            update(obj);
            return function updateStyle(newObj /* StyleObjectPart */) {
                if (newObj) {
                    if (newObj.css === obj.css &&
                        newObj.media === obj.media &&
                        newObj.sourceMap === obj.sourceMap) {
                        return;
                    }
                    update(obj = newObj);
                }
                else {
                    remove();
                }
            };
        }
        var replaceText = (function () {
            var textStore = [];
            return function (index, replacement) {
                textStore[index] = replacement;
                return textStore.filter(Boolean).join('\n');
            };
        })();
        function applyToSingletonTag(styleElement, index, remove, obj) {
            var css = remove ? '' : obj.css;
            if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = replaceText(index, css);
            }
            else {
                var cssNode = document.createTextNode(css);
                var childNodes = styleElement.childNodes;
                if (childNodes[index])
                    styleElement.removeChild(childNodes[index]);
                if (childNodes.length) {
                    styleElement.insertBefore(cssNode, childNodes[index]);
                }
                else {
                    styleElement.appendChild(cssNode);
                }
            }
        }
        function applyToTag(styleElement, obj) {
            var css = obj.css;
            var media = obj.media;
            var sourceMap = obj.sourceMap;
            if (media) {
                styleElement.setAttribute('media', media);
            }
            if (options.ssrId) {
                styleElement.setAttribute(ssrIdKey, obj.id);
            }
            if (sourceMap) {
                // https://developer.chrome.com/devtools/docs/javascript-debugging
                // this makes source maps inside style tags work properly in Chrome
                css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
                // http://stackoverflow.com/a/26603875
                css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */';
            }
            if (styleElement.styleSheet) {
                styleElement.styleSheet.cssText = css;
            }
            else {
                while (styleElement.firstChild) {
                    styleElement.removeChild(styleElement.firstChild);
                }
                styleElement.appendChild(document.createTextNode(css));
            }
        }
        /***/ 
    }),
    /***/ "./node_modules/vue-style-loader/lib/listToStyles.js": 
    /*!***********************************************************!*\
      !*** ./node_modules/vue-style-loader/lib/listToStyles.js ***!
      \***********************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function () { return listToStyles; });
        /**
         * Translates the list format produced by css-loader into something
         * easier to manipulate.
         */
        function listToStyles(parentId, list) {
            var styles = [];
            var newStyles = {};
            for (var i = 0; i < list.length; i++) {
                var item = list[i];
                var id = item[0];
                var css = item[1];
                var media = item[2];
                var sourceMap = item[3];
                var part = {
                    id: parentId + ':' + i,
                    css: css,
                    media: media,
                    sourceMap: sourceMap
                };
                if (!newStyles[id]) {
                    styles.push(newStyles[id] = { id: id, parts: [part] });
                }
                else {
                    newStyles[id].parts.push(part);
                }
            }
            return styles;
        }
        /***/ 
    }),
    /***/ "./node_modules/vue/dist/vue.runtime.esm.js": 
    /*!**************************************************!*\
      !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
      \**************************************************/
    /*! exports provided: default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* WEBPACK VAR INJECTION */ (function (global, setImmediate) {
            /*  */
            var emptyObject = Object.freeze({});
            // these helpers produces better vm code in JS engines due to their
            // explicitness and function inlining
            function isUndef(v) {
                return v === undefined || v === null;
            }
            function isDef(v) {
                return v !== undefined && v !== null;
            }
            function isTrue(v) {
                return v === true;
            }
            function isFalse(v) {
                return v === false;
            }
            /**
             * Check if value is primitive
             */
            function isPrimitive(value) {
                return (typeof value === 'string' ||
                    typeof value === 'number' ||
                    // $flow-disable-line
                    typeof value === 'symbol' ||
                    typeof value === 'boolean');
            }
            /**
             * Quick object check - this is primarily used to tell
             * Objects from primitive values when we know the value
             * is a JSON-compliant type.
             */
            function isObject(obj) {
                return obj !== null && typeof obj === 'object';
            }
            /**
             * Get the raw type string of a value e.g. [object Object]
             */
            var _toString = Object.prototype.toString;
            function toRawType(value) {
                return _toString.call(value).slice(8, -1);
            }
            /**
             * Strict object type check. Only returns true
             * for plain JavaScript objects.
             */
            function isPlainObject(obj) {
                return _toString.call(obj) === '[object Object]';
            }
            function isRegExp(v) {
                return _toString.call(v) === '[object RegExp]';
            }
            /**
             * Check if val is a valid array index.
             */
            function isValidArrayIndex(val) {
                var n = parseFloat(String(val));
                return n >= 0 && Math.floor(n) === n && isFinite(val);
            }
            /**
             * Convert a value to a string that is actually rendered.
             */
            function toString(val) {
                return val == null
                    ? ''
                    : typeof val === 'object'
                        ? JSON.stringify(val, null, 2)
                        : String(val);
            }
            /**
             * Convert a input value to a number for persistence.
             * If the conversion fails, return original string.
             */
            function toNumber(val) {
                var n = parseFloat(val);
                return isNaN(n) ? val : n;
            }
            /**
             * Make a map and return a function for checking if a key
             * is in that map.
             */
            function makeMap(str, expectsLowerCase) {
                var map = Object.create(null);
                var list = str.split(',');
                for (var i = 0; i < list.length; i++) {
                    map[list[i]] = true;
                }
                return expectsLowerCase
                    ? function (val) { return map[val.toLowerCase()]; }
                    : function (val) { return map[val]; };
            }
            /**
             * Check if a tag is a built-in tag.
             */
            var isBuiltInTag = makeMap('slot,component', true);
            /**
             * Check if a attribute is a reserved attribute.
             */
            var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
            /**
             * Remove an item from an array
             */
            function remove(arr, item) {
                if (arr.length) {
                    var index = arr.indexOf(item);
                    if (index > -1) {
                        return arr.splice(index, 1);
                    }
                }
            }
            /**
             * Check whether the object has the property.
             */
            var hasOwnProperty = Object.prototype.hasOwnProperty;
            function hasOwn(obj, key) {
                return hasOwnProperty.call(obj, key);
            }
            /**
             * Create a cached version of a pure function.
             */
            function cached(fn) {
                var cache = Object.create(null);
                return (function cachedFn(str) {
                    var hit = cache[str];
                    return hit || (cache[str] = fn(str));
                });
            }
            /**
             * Camelize a hyphen-delimited string.
             */
            var camelizeRE = /-(\w)/g;
            var camelize = cached(function (str) {
                return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; });
            });
            /**
             * Capitalize a string.
             */
            var capitalize = cached(function (str) {
                return str.charAt(0).toUpperCase() + str.slice(1);
            });
            /**
             * Hyphenate a camelCase string.
             */
            var hyphenateRE = /\B([A-Z])/g;
            var hyphenate = cached(function (str) {
                return str.replace(hyphenateRE, '-$1').toLowerCase();
            });
            /**
             * Simple bind polyfill for environments that do not support it... e.g.
             * PhantomJS 1.x. Technically we don't need this anymore since native bind is
             * now more performant in most browsers, but removing it would be breaking for
             * code that was able to run in PhantomJS 1.x, so this must be kept for
             * backwards compatibility.
             */
            /* istanbul ignore next */
            function polyfillBind(fn, ctx) {
                function boundFn(a) {
                    var l = arguments.length;
                    return l
                        ? l > 1
                            ? fn.apply(ctx, arguments)
                            : fn.call(ctx, a)
                        : fn.call(ctx);
                }
                boundFn._length = fn.length;
                return boundFn;
            }
            function nativeBind(fn, ctx) {
                return fn.bind(ctx);
            }
            var bind = Function.prototype.bind
                ? nativeBind
                : polyfillBind;
            /**
             * Convert an Array-like object to a real Array.
             */
            function toArray(list, start) {
                start = start || 0;
                var i = list.length - start;
                var ret = new Array(i);
                while (i--) {
                    ret[i] = list[i + start];
                }
                return ret;
            }
            /**
             * Mix properties into target object.
             */
            function extend(to, _from) {
                for (var key in _from) {
                    to[key] = _from[key];
                }
                return to;
            }
            /**
             * Merge an Array of Objects into a single Object.
             */
            function toObject(arr) {
                var res = {};
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i]) {
                        extend(res, arr[i]);
                    }
                }
                return res;
            }
            /**
             * Perform no operation.
             * Stubbing args to make Flow happy without leaving useless transpiled code
             * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
             */
            function noop(a, b, c) { }
            /**
             * Always return false.
             */
            var no = function (a, b, c) { return false; };
            /**
             * Return same value
             */
            var identity = function (_) { return _; };
            /**
             * Generate a static keys string from compiler modules.
             */
            /**
             * Check if two values are loosely equal - that is,
             * if they are plain objects, do they have the same shape?
             */
            function looseEqual(a, b) {
                if (a === b) {
                    return true;
                }
                var isObjectA = isObject(a);
                var isObjectB = isObject(b);
                if (isObjectA && isObjectB) {
                    try {
                        var isArrayA = Array.isArray(a);
                        var isArrayB = Array.isArray(b);
                        if (isArrayA && isArrayB) {
                            return a.length === b.length && a.every(function (e, i) {
                                return looseEqual(e, b[i]);
                            });
                        }
                        else if (!isArrayA && !isArrayB) {
                            var keysA = Object.keys(a);
                            var keysB = Object.keys(b);
                            return keysA.length === keysB.length && keysA.every(function (key) {
                                return looseEqual(a[key], b[key]);
                            });
                        }
                        else {
                            /* istanbul ignore next */
                            return false;
                        }
                    }
                    catch (e) {
                        /* istanbul ignore next */
                        return false;
                    }
                }
                else if (!isObjectA && !isObjectB) {
                    return String(a) === String(b);
                }
                else {
                    return false;
                }
            }
            function looseIndexOf(arr, val) {
                for (var i = 0; i < arr.length; i++) {
                    if (looseEqual(arr[i], val)) {
                        return i;
                    }
                }
                return -1;
            }
            /**
             * Ensure a function is called only once.
             */
            function once(fn) {
                var called = false;
                return function () {
                    if (!called) {
                        called = true;
                        fn.apply(this, arguments);
                    }
                };
            }
            var SSR_ATTR = 'data-server-rendered';
            var ASSET_TYPES = [
                'component',
                'directive',
                'filter'
            ];
            var LIFECYCLE_HOOKS = [
                'beforeCreate',
                'created',
                'beforeMount',
                'mounted',
                'beforeUpdate',
                'updated',
                'beforeDestroy',
                'destroyed',
                'activated',
                'deactivated',
                'errorCaptured'
            ];
            /*  */
            var config = ({
                /**
                 * Option merge strategies (used in core/util/options)
                 */
                // $flow-disable-line
                optionMergeStrategies: Object.create(null),
                /**
                 * Whether to suppress warnings.
                 */
                silent: false,
                /**
                 * Show production mode tip message on boot?
                 */
                productionTip: "development" !== 'production',
                /**
                 * Whether to enable devtools
                 */
                devtools: "development" !== 'production',
                /**
                 * Whether to record perf
                 */
                performance: false,
                /**
                 * Error handler for watcher errors
                 */
                errorHandler: null,
                /**
                 * Warn handler for watcher warns
                 */
                warnHandler: null,
                /**
                 * Ignore certain custom elements
                 */
                ignoredElements: [],
                /**
                 * Custom user key aliases for v-on
                 */
                // $flow-disable-line
                keyCodes: Object.create(null),
                /**
                 * Check if a tag is reserved so that it cannot be registered as a
                 * component. This is platform-dependent and may be overwritten.
                 */
                isReservedTag: no,
                /**
                 * Check if an attribute is reserved so that it cannot be used as a component
                 * prop. This is platform-dependent and may be overwritten.
                 */
                isReservedAttr: no,
                /**
                 * Check if a tag is an unknown element.
                 * Platform-dependent.
                 */
                isUnknownElement: no,
                /**
                 * Get the namespace of an element
                 */
                getTagNamespace: noop,
                /**
                 * Parse the real tag name for the specific platform.
                 */
                parsePlatformTagName: identity,
                /**
                 * Check if an attribute must be bound using property, e.g. value
                 * Platform-dependent.
                 */
                mustUseProp: no,
                /**
                 * Exposed for legacy reasons
                 */
                _lifecycleHooks: LIFECYCLE_HOOKS
            });
            /*  */
            /**
             * Check if a string starts with $ or _
             */
            function isReserved(str) {
                var c = (str + '').charCodeAt(0);
                return c === 0x24 || c === 0x5F;
            }
            /**
             * Define a property.
             */
            function def(obj, key, val, enumerable) {
                Object.defineProperty(obj, key, {
                    value: val,
                    enumerable: !!enumerable,
                    writable: true,
                    configurable: true
                });
            }
            /**
             * Parse simple path.
             */
            var bailRE = /[^\w.$]/;
            function parsePath(path) {
                if (bailRE.test(path)) {
                    return;
                }
                var segments = path.split('.');
                return function (obj) {
                    for (var i = 0; i < segments.length; i++) {
                        if (!obj) {
                            return;
                        }
                        obj = obj[segments[i]];
                    }
                    return obj;
                };
            }
            /*  */
            // can we use __proto__?
            var hasProto = '__proto__' in {};
            // Browser environment sniffing
            var inBrowser = typeof window !== 'undefined';
            var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
            var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
            var UA = inBrowser && window.navigator.userAgent.toLowerCase();
            var isIE = UA && /msie|trident/.test(UA);
            var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
            var isEdge = UA && UA.indexOf('edge/') > 0;
            var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
            var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
            var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
            // Firefox has a "watch" function on Object.prototype...
            var nativeWatch = ({}).watch;
            var supportsPassive = false;
            if (inBrowser) {
                try {
                    var opts = {};
                    Object.defineProperty(opts, 'passive', ({
                        get: function get() {
                            /* istanbul ignore next */
                            supportsPassive = true;
                        }
                    })); // https://github.com/facebook/flow/issues/285
                    window.addEventListener('test-passive', null, opts);
                }
                catch (e) { }
            }
            // this needs to be lazy-evaled because vue may be required before
            // vue-server-renderer can set VUE_ENV
            var _isServer;
            var isServerRendering = function () {
                if (_isServer === undefined) {
                    /* istanbul ignore if */
                    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
                        // detect presence of vue-server-renderer and avoid
                        // Webpack shimming the process
                        _isServer = global['process'].env.VUE_ENV === 'server';
                    }
                    else {
                        _isServer = false;
                    }
                }
                return _isServer;
            };
            // detect devtools
            var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
            /* istanbul ignore next */
            function isNative(Ctor) {
                return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
            }
            var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) &&
                typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);
            var _Set;
            /* istanbul ignore if */ // $flow-disable-line
            if (typeof Set !== 'undefined' && isNative(Set)) {
                // use native Set when available.
                _Set = Set;
            }
            else {
                // a non-standard Set polyfill that only works with primitive keys.
                _Set = (function () {
                    function Set() {
                        this.set = Object.create(null);
                    }
                    Set.prototype.has = function has(key) {
                        return this.set[key] === true;
                    };
                    Set.prototype.add = function add(key) {
                        this.set[key] = true;
                    };
                    Set.prototype.clear = function clear() {
                        this.set = Object.create(null);
                    };
                    return Set;
                }());
            }
            /*  */
            var warn = noop;
            var tip = noop;
            var generateComponentTrace = (noop); // work around flow check
            var formatComponentName = (noop);
            if (true) {
                var hasConsole = typeof console !== 'undefined';
                var classifyRE = /(?:^|[-_])(\w)/g;
                var classify = function (str) {
                    return str
                        .replace(classifyRE, function (c) { return c.toUpperCase(); })
                        .replace(/[-_]/g, '');
                };
                warn = function (msg, vm) {
                    var trace = vm ? generateComponentTrace(vm) : '';
                    if (config.warnHandler) {
                        config.warnHandler.call(null, msg, vm, trace);
                    }
                    else if (hasConsole && (!config.silent)) {
                        console.error(("[Vue warn]: " + msg + trace));
                    }
                };
                tip = function (msg, vm) {
                    if (hasConsole && (!config.silent)) {
                        console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
                    }
                };
                formatComponentName = function (vm, includeFile) {
                    if (vm.$root === vm) {
                        return '<Root>';
                    }
                    var options = typeof vm === 'function' && vm.cid != null
                        ? vm.options
                        : vm._isVue
                            ? vm.$options || vm.constructor.options
                            : vm || {};
                    var name = options.name || options._componentTag;
                    var file = options.__file;
                    if (!name && file) {
                        var match = file.match(/([^/\\]+)\.vue$/);
                        name = match && match[1];
                    }
                    return ((name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
                        (file && includeFile !== false ? (" at " + file) : ''));
                };
                var repeat = function (str, n) {
                    var res = '';
                    while (n) {
                        if (n % 2 === 1) {
                            res += str;
                        }
                        if (n > 1) {
                            str += str;
                        }
                        n >>= 1;
                    }
                    return res;
                };
                generateComponentTrace = function (vm) {
                    if (vm._isVue && vm.$parent) {
                        var tree = [];
                        var currentRecursiveSequence = 0;
                        while (vm) {
                            if (tree.length > 0) {
                                var last = tree[tree.length - 1];
                                if (last.constructor === vm.constructor) {
                                    currentRecursiveSequence++;
                                    vm = vm.$parent;
                                    continue;
                                }
                                else if (currentRecursiveSequence > 0) {
                                    tree[tree.length - 1] = [last, currentRecursiveSequence];
                                    currentRecursiveSequence = 0;
                                }
                            }
                            tree.push(vm);
                            vm = vm.$parent;
                        }
                        return '\n\nfound in\n\n' + tree
                            .map(function (vm, i) {
                            return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
                                ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
                                : formatComponentName(vm)));
                        })
                            .join('\n');
                    }
                    else {
                        return ("\n\n(found in " + (formatComponentName(vm)) + ")");
                    }
                };
            }
            /*  */
            var uid = 0;
            /**
             * A dep is an observable that can have multiple
             * directives subscribing to it.
             */
            var Dep = function Dep() {
                this.id = uid++;
                this.subs = [];
            };
            Dep.prototype.addSub = function addSub(sub) {
                this.subs.push(sub);
            };
            Dep.prototype.removeSub = function removeSub(sub) {
                remove(this.subs, sub);
            };
            Dep.prototype.depend = function depend() {
                if (Dep.target) {
                    Dep.target.addDep(this);
                }
            };
            Dep.prototype.notify = function notify() {
                // stabilize the subscriber list first
                var subs = this.subs.slice();
                for (var i = 0, l = subs.length; i < l; i++) {
                    subs[i].update();
                }
            };
            // the current target watcher being evaluated.
            // this is globally unique because there could be only one
            // watcher being evaluated at any time.
            Dep.target = null;
            var targetStack = [];
            function pushTarget(_target) {
                if (Dep.target) {
                    targetStack.push(Dep.target);
                }
                Dep.target = _target;
            }
            function popTarget() {
                Dep.target = targetStack.pop();
            }
            /*  */
            var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
                this.tag = tag;
                this.data = data;
                this.children = children;
                this.text = text;
                this.elm = elm;
                this.ns = undefined;
                this.context = context;
                this.fnContext = undefined;
                this.fnOptions = undefined;
                this.fnScopeId = undefined;
                this.key = data && data.key;
                this.componentOptions = componentOptions;
                this.componentInstance = undefined;
                this.parent = undefined;
                this.raw = false;
                this.isStatic = false;
                this.isRootInsert = true;
                this.isComment = false;
                this.isCloned = false;
                this.isOnce = false;
                this.asyncFactory = asyncFactory;
                this.asyncMeta = undefined;
                this.isAsyncPlaceholder = false;
            };
            var prototypeAccessors = { child: { configurable: true } };
            // DEPRECATED: alias for componentInstance for backwards compat.
            /* istanbul ignore next */
            prototypeAccessors.child.get = function () {
                return this.componentInstance;
            };
            Object.defineProperties(VNode.prototype, prototypeAccessors);
            var createEmptyVNode = function (text) {
                if (text === void 0)
                    text = '';
                var node = new VNode();
                node.text = text;
                node.isComment = true;
                return node;
            };
            function createTextVNode(val) {
                return new VNode(undefined, undefined, undefined, String(val));
            }
            // optimized shallow clone
            // used for static nodes and slot nodes because they may be reused across
            // multiple renders, cloning them avoids errors when DOM manipulations rely
            // on their elm reference.
            function cloneVNode(vnode) {
                var cloned = new VNode(vnode.tag, vnode.data, vnode.children, vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
                cloned.ns = vnode.ns;
                cloned.isStatic = vnode.isStatic;
                cloned.key = vnode.key;
                cloned.isComment = vnode.isComment;
                cloned.fnContext = vnode.fnContext;
                cloned.fnOptions = vnode.fnOptions;
                cloned.fnScopeId = vnode.fnScopeId;
                cloned.isCloned = true;
                return cloned;
            }
            /*
             * not type checking this file because flow doesn't play well with
             * dynamically accessing methods on Array prototype
             */
            var arrayProto = Array.prototype;
            var arrayMethods = Object.create(arrayProto);
            var methodsToPatch = [
                'push',
                'pop',
                'shift',
                'unshift',
                'splice',
                'sort',
                'reverse'
            ];
            /**
             * Intercept mutating methods and emit events
             */
            methodsToPatch.forEach(function (method) {
                // cache original method
                var original = arrayProto[method];
                def(arrayMethods, method, function mutator() {
                    var args = [], len = arguments.length;
                    while (len--)
                        args[len] = arguments[len];
                    var result = original.apply(this, args);
                    var ob = this.__ob__;
                    var inserted;
                    switch (method) {
                        case 'push':
                        case 'unshift':
                            inserted = args;
                            break;
                        case 'splice':
                            inserted = args.slice(2);
                            break;
                    }
                    if (inserted) {
                        ob.observeArray(inserted);
                    }
                    // notify change
                    ob.dep.notify();
                    return result;
                });
            });
            /*  */
            var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
            /**
             * In some cases we may want to disable observation inside a component's
             * update computation.
             */
            var shouldObserve = true;
            function toggleObserving(value) {
                shouldObserve = value;
            }
            /**
             * Observer class that is attached to each observed
             * object. Once attached, the observer converts the target
             * object's property keys into getter/setters that
             * collect dependencies and dispatch updates.
             */
            var Observer = function Observer(value) {
                this.value = value;
                this.dep = new Dep();
                this.vmCount = 0;
                def(value, '__ob__', this);
                if (Array.isArray(value)) {
                    var augment = hasProto
                        ? protoAugment
                        : copyAugment;
                    augment(value, arrayMethods, arrayKeys);
                    this.observeArray(value);
                }
                else {
                    this.walk(value);
                }
            };
            /**
             * Walk through each property and convert them into
             * getter/setters. This method should only be called when
             * value type is Object.
             */
            Observer.prototype.walk = function walk(obj) {
                var keys = Object.keys(obj);
                for (var i = 0; i < keys.length; i++) {
                    defineReactive(obj, keys[i]);
                }
            };
            /**
             * Observe a list of Array items.
             */
            Observer.prototype.observeArray = function observeArray(items) {
                for (var i = 0, l = items.length; i < l; i++) {
                    observe(items[i]);
                }
            };
            // helpers
            /**
             * Augment an target Object or Array by intercepting
             * the prototype chain using __proto__
             */
            function protoAugment(target, src, keys) {
                /* eslint-disable no-proto */
                target.__proto__ = src;
                /* eslint-enable no-proto */
            }
            /**
             * Augment an target Object or Array by defining
             * hidden properties.
             */
            /* istanbul ignore next */
            function copyAugment(target, src, keys) {
                for (var i = 0, l = keys.length; i < l; i++) {
                    var key = keys[i];
                    def(target, key, src[key]);
                }
            }
            /**
             * Attempt to create an observer instance for a value,
             * returns the new observer if successfully observed,
             * or the existing observer if the value already has one.
             */
            function observe(value, asRootData) {
                if (!isObject(value) || value instanceof VNode) {
                    return;
                }
                var ob;
                if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
                    ob = value.__ob__;
                }
                else if (shouldObserve &&
                    !isServerRendering() &&
                    (Array.isArray(value) || isPlainObject(value)) &&
                    Object.isExtensible(value) &&
                    !value._isVue) {
                    ob = new Observer(value);
                }
                if (asRootData && ob) {
                    ob.vmCount++;
                }
                return ob;
            }
            /**
             * Define a reactive property on an Object.
             */
            function defineReactive(obj, key, val, customSetter, shallow) {
                var dep = new Dep();
                var property = Object.getOwnPropertyDescriptor(obj, key);
                if (property && property.configurable === false) {
                    return;
                }
                // cater for pre-defined getter/setters
                var getter = property && property.get;
                if (!getter && arguments.length === 2) {
                    val = obj[key];
                }
                var setter = property && property.set;
                var childOb = !shallow && observe(val);
                Object.defineProperty(obj, key, {
                    enumerable: true,
                    configurable: true,
                    get: function reactiveGetter() {
                        var value = getter ? getter.call(obj) : val;
                        if (Dep.target) {
                            dep.depend();
                            if (childOb) {
                                childOb.dep.depend();
                                if (Array.isArray(value)) {
                                    dependArray(value);
                                }
                            }
                        }
                        return value;
                    },
                    set: function reactiveSetter(newVal) {
                        var value = getter ? getter.call(obj) : val;
                        /* eslint-disable no-self-compare */
                        if (newVal === value || (newVal !== newVal && value !== value)) {
                            return;
                        }
                        /* eslint-enable no-self-compare */
                        if (true && customSetter) {
                            customSetter();
                        }
                        if (setter) {
                            setter.call(obj, newVal);
                        }
                        else {
                            val = newVal;
                        }
                        childOb = !shallow && observe(newVal);
                        dep.notify();
                    }
                });
            }
            /**
             * Set a property on an object. Adds the new property and
             * triggers change notification if the property doesn't
             * already exist.
             */
            function set(target, key, val) {
                if (true &&
                    (isUndef(target) || isPrimitive(target))) {
                    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
                }
                if (Array.isArray(target) && isValidArrayIndex(key)) {
                    target.length = Math.max(target.length, key);
                    target.splice(key, 1, val);
                    return val;
                }
                if (key in target && !(key in Object.prototype)) {
                    target[key] = val;
                    return val;
                }
                var ob = (target).__ob__;
                if (target._isVue || (ob && ob.vmCount)) {
                    true && warn('Avoid adding reactive properties to a Vue instance or its root $data ' +
                        'at runtime - declare it upfront in the data option.');
                    return val;
                }
                if (!ob) {
                    target[key] = val;
                    return val;
                }
                defineReactive(ob.value, key, val);
                ob.dep.notify();
                return val;
            }
            /**
             * Delete a property and trigger change if necessary.
             */
            function del(target, key) {
                if (true &&
                    (isUndef(target) || isPrimitive(target))) {
                    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
                }
                if (Array.isArray(target) && isValidArrayIndex(key)) {
                    target.splice(key, 1);
                    return;
                }
                var ob = (target).__ob__;
                if (target._isVue || (ob && ob.vmCount)) {
                    true && warn('Avoid deleting properties on a Vue instance or its root $data ' +
                        '- just set it to null.');
                    return;
                }
                if (!hasOwn(target, key)) {
                    return;
                }
                delete target[key];
                if (!ob) {
                    return;
                }
                ob.dep.notify();
            }
            /**
             * Collect dependencies on array elements when the array is touched, since
             * we cannot intercept array element access like property getters.
             */
            function dependArray(value) {
                for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
                    e = value[i];
                    e && e.__ob__ && e.__ob__.dep.depend();
                    if (Array.isArray(e)) {
                        dependArray(e);
                    }
                }
            }
            /*  */
            /**
             * Option overwriting strategies are functions that handle
             * how to merge a parent option value and a child option
             * value into the final value.
             */
            var strats = config.optionMergeStrategies;
            /**
             * Options with restrictions
             */
            if (true) {
                strats.el = strats.propsData = function (parent, child, vm, key) {
                    if (!vm) {
                        warn("option \"" + key + "\" can only be used during instance " +
                            'creation with the `new` keyword.');
                    }
                    return defaultStrat(parent, child);
                };
            }
            /**
             * Helper that recursively merges two data objects together.
             */
            function mergeData(to, from) {
                if (!from) {
                    return to;
                }
                var key, toVal, fromVal;
                var keys = Object.keys(from);
                for (var i = 0; i < keys.length; i++) {
                    key = keys[i];
                    toVal = to[key];
                    fromVal = from[key];
                    if (!hasOwn(to, key)) {
                        set(to, key, fromVal);
                    }
                    else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
                        mergeData(toVal, fromVal);
                    }
                }
                return to;
            }
            /**
             * Data
             */
            function mergeDataOrFn(parentVal, childVal, vm) {
                if (!vm) {
                    // in a Vue.extend merge, both should be functions
                    if (!childVal) {
                        return parentVal;
                    }
                    if (!parentVal) {
                        return childVal;
                    }
                    // when parentVal & childVal are both present,
                    // we need to return a function that returns the
                    // merged result of both functions... no need to
                    // check if parentVal is a function here because
                    // it has to be a function to pass previous merges.
                    return function mergedDataFn() {
                        return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
                    };
                }
                else {
                    return function mergedInstanceDataFn() {
                        // instance merge
                        var instanceData = typeof childVal === 'function'
                            ? childVal.call(vm, vm)
                            : childVal;
                        var defaultData = typeof parentVal === 'function'
                            ? parentVal.call(vm, vm)
                            : parentVal;
                        if (instanceData) {
                            return mergeData(instanceData, defaultData);
                        }
                        else {
                            return defaultData;
                        }
                    };
                }
            }
            strats.data = function (parentVal, childVal, vm) {
                if (!vm) {
                    if (childVal && typeof childVal !== 'function') {
                        true && warn('The "data" option should be a function ' +
                            'that returns a per-instance value in component ' +
                            'definitions.', vm);
                        return parentVal;
                    }
                    return mergeDataOrFn(parentVal, childVal);
                }
                return mergeDataOrFn(parentVal, childVal, vm);
            };
            /**
             * Hooks and props are merged as arrays.
             */
            function mergeHook(parentVal, childVal) {
                return childVal
                    ? parentVal
                        ? parentVal.concat(childVal)
                        : Array.isArray(childVal)
                            ? childVal
                            : [childVal]
                    : parentVal;
            }
            LIFECYCLE_HOOKS.forEach(function (hook) {
                strats[hook] = mergeHook;
            });
            /**
             * Assets
             *
             * When a vm is present (instance creation), we need to do
             * a three-way merge between constructor options, instance
             * options and parent options.
             */
            function mergeAssets(parentVal, childVal, vm, key) {
                var res = Object.create(parentVal || null);
                if (childVal) {
                    true && assertObjectType(key, childVal, vm);
                    return extend(res, childVal);
                }
                else {
                    return res;
                }
            }
            ASSET_TYPES.forEach(function (type) {
                strats[type + 's'] = mergeAssets;
            });
            /**
             * Watchers.
             *
             * Watchers hashes should not overwrite one
             * another, so we merge them as arrays.
             */
            strats.watch = function (parentVal, childVal, vm, key) {
                // work around Firefox's Object.prototype.watch...
                if (parentVal === nativeWatch) {
                    parentVal = undefined;
                }
                if (childVal === nativeWatch) {
                    childVal = undefined;
                }
                /* istanbul ignore if */
                if (!childVal) {
                    return Object.create(parentVal || null);
                }
                if (true) {
                    assertObjectType(key, childVal, vm);
                }
                if (!parentVal) {
                    return childVal;
                }
                var ret = {};
                extend(ret, parentVal);
                for (var key$1 in childVal) {
                    var parent = ret[key$1];
                    var child = childVal[key$1];
                    if (parent && !Array.isArray(parent)) {
                        parent = [parent];
                    }
                    ret[key$1] = parent
                        ? parent.concat(child)
                        : Array.isArray(child) ? child : [child];
                }
                return ret;
            };
            /**
             * Other object hashes.
             */
            strats.props =
                strats.methods =
                    strats.inject =
                        strats.computed = function (parentVal, childVal, vm, key) {
                            if (childVal && "development" !== 'production') {
                                assertObjectType(key, childVal, vm);
                            }
                            if (!parentVal) {
                                return childVal;
                            }
                            var ret = Object.create(null);
                            extend(ret, parentVal);
                            if (childVal) {
                                extend(ret, childVal);
                            }
                            return ret;
                        };
            strats.provide = mergeDataOrFn;
            /**
             * Default strategy.
             */
            var defaultStrat = function (parentVal, childVal) {
                return childVal === undefined
                    ? parentVal
                    : childVal;
            };
            /**
             * Validate component names
             */
            function checkComponents(options) {
                for (var key in options.components) {
                    validateComponentName(key);
                }
            }
            function validateComponentName(name) {
                if (!/^[a-zA-Z][\w-]*$/.test(name)) {
                    warn('Invalid component name: "' + name + '". Component names ' +
                        'can only contain alphanumeric characters and the hyphen, ' +
                        'and must start with a letter.');
                }
                if (isBuiltInTag(name) || config.isReservedTag(name)) {
                    warn('Do not use built-in or reserved HTML elements as component ' +
                        'id: ' + name);
                }
            }
            /**
             * Ensure all props option syntax are normalized into the
             * Object-based format.
             */
            function normalizeProps(options, vm) {
                var props = options.props;
                if (!props) {
                    return;
                }
                var res = {};
                var i, val, name;
                if (Array.isArray(props)) {
                    i = props.length;
                    while (i--) {
                        val = props[i];
                        if (typeof val === 'string') {
                            name = camelize(val);
                            res[name] = { type: null };
                        }
                        else if (true) {
                            warn('props must be strings when using array syntax.');
                        }
                    }
                }
                else if (isPlainObject(props)) {
                    for (var key in props) {
                        val = props[key];
                        name = camelize(key);
                        res[name] = isPlainObject(val)
                            ? val
                            : { type: val };
                    }
                }
                else if (true) {
                    warn("Invalid value for option \"props\": expected an Array or an Object, " +
                        "but got " + (toRawType(props)) + ".", vm);
                }
                options.props = res;
            }
            /**
             * Normalize all injections into Object-based format
             */
            function normalizeInject(options, vm) {
                var inject = options.inject;
                if (!inject) {
                    return;
                }
                var normalized = options.inject = {};
                if (Array.isArray(inject)) {
                    for (var i = 0; i < inject.length; i++) {
                        normalized[inject[i]] = { from: inject[i] };
                    }
                }
                else if (isPlainObject(inject)) {
                    for (var key in inject) {
                        var val = inject[key];
                        normalized[key] = isPlainObject(val)
                            ? extend({ from: key }, val)
                            : { from: val };
                    }
                }
                else if (true) {
                    warn("Invalid value for option \"inject\": expected an Array or an Object, " +
                        "but got " + (toRawType(inject)) + ".", vm);
                }
            }
            /**
             * Normalize raw function directives into object format.
             */
            function normalizeDirectives(options) {
                var dirs = options.directives;
                if (dirs) {
                    for (var key in dirs) {
                        var def = dirs[key];
                        if (typeof def === 'function') {
                            dirs[key] = { bind: def, update: def };
                        }
                    }
                }
            }
            function assertObjectType(name, value, vm) {
                if (!isPlainObject(value)) {
                    warn("Invalid value for option \"" + name + "\": expected an Object, " +
                        "but got " + (toRawType(value)) + ".", vm);
                }
            }
            /**
             * Merge two option objects into a new one.
             * Core utility used in both instantiation and inheritance.
             */
            function mergeOptions(parent, child, vm) {
                if (true) {
                    checkComponents(child);
                }
                if (typeof child === 'function') {
                    child = child.options;
                }
                normalizeProps(child, vm);
                normalizeInject(child, vm);
                normalizeDirectives(child);
                var extendsFrom = child.extends;
                if (extendsFrom) {
                    parent = mergeOptions(parent, extendsFrom, vm);
                }
                if (child.mixins) {
                    for (var i = 0, l = child.mixins.length; i < l; i++) {
                        parent = mergeOptions(parent, child.mixins[i], vm);
                    }
                }
                var options = {};
                var key;
                for (key in parent) {
                    mergeField(key);
                }
                for (key in child) {
                    if (!hasOwn(parent, key)) {
                        mergeField(key);
                    }
                }
                function mergeField(key) {
                    var strat = strats[key] || defaultStrat;
                    options[key] = strat(parent[key], child[key], vm, key);
                }
                return options;
            }
            /**
             * Resolve an asset.
             * This function is used because child instances need access
             * to assets defined in its ancestor chain.
             */
            function resolveAsset(options, type, id, warnMissing) {
                /* istanbul ignore if */
                if (typeof id !== 'string') {
                    return;
                }
                var assets = options[type];
                // check local registration variations first
                if (hasOwn(assets, id)) {
                    return assets[id];
                }
                var camelizedId = camelize(id);
                if (hasOwn(assets, camelizedId)) {
                    return assets[camelizedId];
                }
                var PascalCaseId = capitalize(camelizedId);
                if (hasOwn(assets, PascalCaseId)) {
                    return assets[PascalCaseId];
                }
                // fallback to prototype chain
                var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
                if (true && warnMissing && !res) {
                    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
                }
                return res;
            }
            /*  */
            function validateProp(key, propOptions, propsData, vm) {
                var prop = propOptions[key];
                var absent = !hasOwn(propsData, key);
                var value = propsData[key];
                // boolean casting
                var booleanIndex = getTypeIndex(Boolean, prop.type);
                if (booleanIndex > -1) {
                    if (absent && !hasOwn(prop, 'default')) {
                        value = false;
                    }
                    else if (value === '' || value === hyphenate(key)) {
                        // only cast empty string / same name to boolean if
                        // boolean has higher priority
                        var stringIndex = getTypeIndex(String, prop.type);
                        if (stringIndex < 0 || booleanIndex < stringIndex) {
                            value = true;
                        }
                    }
                }
                // check default value
                if (value === undefined) {
                    value = getPropDefaultValue(vm, prop, key);
                    // since the default value is a fresh copy,
                    // make sure to observe it.
                    var prevShouldObserve = shouldObserve;
                    toggleObserving(true);
                    observe(value);
                    toggleObserving(prevShouldObserve);
                }
                if (true) {
                    assertProp(prop, key, value, vm, absent);
                }
                return value;
            }
            /**
             * Get the default value of a prop.
             */
            function getPropDefaultValue(vm, prop, key) {
                // no default, return undefined
                if (!hasOwn(prop, 'default')) {
                    return undefined;
                }
                var def = prop.default;
                // warn against non-factory defaults for Object & Array
                if (true && isObject(def)) {
                    warn('Invalid default value for prop "' + key + '": ' +
                        'Props with type Object/Array must use a factory function ' +
                        'to return the default value.', vm);
                }
                // the raw prop value was also undefined from previous render,
                // return previous default value to avoid unnecessary watcher trigger
                if (vm && vm.$options.propsData &&
                    vm.$options.propsData[key] === undefined &&
                    vm._props[key] !== undefined) {
                    return vm._props[key];
                }
                // call factory function for non-Function types
                // a value is Function if its prototype is function even across different execution context
                return typeof def === 'function' && getType(prop.type) !== 'Function'
                    ? def.call(vm)
                    : def;
            }
            /**
             * Assert whether a prop is valid.
             */
            function assertProp(prop, name, value, vm, absent) {
                if (prop.required && absent) {
                    warn('Missing required prop: "' + name + '"', vm);
                    return;
                }
                if (value == null && !prop.required) {
                    return;
                }
                var type = prop.type;
                var valid = !type || type === true;
                var expectedTypes = [];
                if (type) {
                    if (!Array.isArray(type)) {
                        type = [type];
                    }
                    for (var i = 0; i < type.length && !valid; i++) {
                        var assertedType = assertType(value, type[i]);
                        expectedTypes.push(assertedType.expectedType || '');
                        valid = assertedType.valid;
                    }
                }
                if (!valid) {
                    warn("Invalid prop: type check failed for prop \"" + name + "\"." +
                        " Expected " + (expectedTypes.map(capitalize).join(', ')) +
                        ", got " + (toRawType(value)) + ".", vm);
                    return;
                }
                var validator = prop.validator;
                if (validator) {
                    if (!validator(value)) {
                        warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
                    }
                }
            }
            var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;
            function assertType(value, type) {
                var valid;
                var expectedType = getType(type);
                if (simpleCheckRE.test(expectedType)) {
                    var t = typeof value;
                    valid = t === expectedType.toLowerCase();
                    // for primitive wrapper objects
                    if (!valid && t === 'object') {
                        valid = value instanceof type;
                    }
                }
                else if (expectedType === 'Object') {
                    valid = isPlainObject(value);
                }
                else if (expectedType === 'Array') {
                    valid = Array.isArray(value);
                }
                else {
                    valid = value instanceof type;
                }
                return {
                    valid: valid,
                    expectedType: expectedType
                };
            }
            /**
             * Use function string name to check built-in types,
             * because a simple equality check will fail when running
             * across different vms / iframes.
             */
            function getType(fn) {
                var match = fn && fn.toString().match(/^\s*function (\w+)/);
                return match ? match[1] : '';
            }
            function isSameType(a, b) {
                return getType(a) === getType(b);
            }
            function getTypeIndex(type, expectedTypes) {
                if (!Array.isArray(expectedTypes)) {
                    return isSameType(expectedTypes, type) ? 0 : -1;
                }
                for (var i = 0, len = expectedTypes.length; i < len; i++) {
                    if (isSameType(expectedTypes[i], type)) {
                        return i;
                    }
                }
                return -1;
            }
            /*  */
            function handleError(err, vm, info) {
                if (vm) {
                    var cur = vm;
                    while ((cur = cur.$parent)) {
                        var hooks = cur.$options.errorCaptured;
                        if (hooks) {
                            for (var i = 0; i < hooks.length; i++) {
                                try {
                                    var capture = hooks[i].call(cur, err, vm, info) === false;
                                    if (capture) {
                                        return;
                                    }
                                }
                                catch (e) {
                                    globalHandleError(e, cur, 'errorCaptured hook');
                                }
                            }
                        }
                    }
                }
                globalHandleError(err, vm, info);
            }
            function globalHandleError(err, vm, info) {
                if (config.errorHandler) {
                    try {
                        return config.errorHandler.call(null, err, vm, info);
                    }
                    catch (e) {
                        logError(e, null, 'config.errorHandler');
                    }
                }
                logError(err, vm, info);
            }
            function logError(err, vm, info) {
                if (true) {
                    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
                }
                /* istanbul ignore else */
                if ((inBrowser || inWeex) && typeof console !== 'undefined') {
                    console.error(err);
                }
                else {
                    throw err;
                }
            }
            /*  */
            /* globals MessageChannel */
            var callbacks = [];
            var pending = false;
            function flushCallbacks() {
                pending = false;
                var copies = callbacks.slice(0);
                callbacks.length = 0;
                for (var i = 0; i < copies.length; i++) {
                    copies[i]();
                }
            }
            // Here we have async deferring wrappers using both microtasks and (macro) tasks.
            // In < 2.4 we used microtasks everywhere, but there are some scenarios where
            // microtasks have too high a priority and fire in between supposedly
            // sequential events (e.g. #4521, #6690) or even between bubbling of the same
            // event (#6566). However, using (macro) tasks everywhere also has subtle problems
            // when state is changed right before repaint (e.g. #6813, out-in transitions).
            // Here we use microtask by default, but expose a way to force (macro) task when
            // needed (e.g. in event handlers attached by v-on).
            var microTimerFunc;
            var macroTimerFunc;
            var useMacroTask = false;
            // Determine (macro) task defer implementation.
            // Technically setImmediate should be the ideal choice, but it's only available
            // in IE. The only polyfill that consistently queues the callback after all DOM
            // events triggered in the same loop is by using MessageChannel.
            /* istanbul ignore if */
            if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
                macroTimerFunc = function () {
                    setImmediate(flushCallbacks);
                };
            }
            else if (typeof MessageChannel !== 'undefined' && (isNative(MessageChannel) ||
                // PhantomJS
                MessageChannel.toString() === '[object MessageChannelConstructor]')) {
                var channel = new MessageChannel();
                var port = channel.port2;
                channel.port1.onmessage = flushCallbacks;
                macroTimerFunc = function () {
                    port.postMessage(1);
                };
            }
            else {
                /* istanbul ignore next */
                macroTimerFunc = function () {
                    setTimeout(flushCallbacks, 0);
                };
            }
            // Determine microtask defer implementation.
            /* istanbul ignore next, $flow-disable-line */
            if (typeof Promise !== 'undefined' && isNative(Promise)) {
                var p = Promise.resolve();
                microTimerFunc = function () {
                    p.then(flushCallbacks);
                    // in problematic UIWebViews, Promise.then doesn't completely break, but
                    // it can get stuck in a weird state where callbacks are pushed into the
                    // microtask queue but the queue isn't being flushed, until the browser
                    // needs to do some other work, e.g. handle a timer. Therefore we can
                    // "force" the microtask queue to be flushed by adding an empty timer.
                    if (isIOS) {
                        setTimeout(noop);
                    }
                };
            }
            else {
                // fallback to macro
                microTimerFunc = macroTimerFunc;
            }
            /**
             * Wrap a function so that if any code inside triggers state change,
             * the changes are queued using a (macro) task instead of a microtask.
             */
            function withMacroTask(fn) {
                return fn._withTask || (fn._withTask = function () {
                    useMacroTask = true;
                    var res = fn.apply(null, arguments);
                    useMacroTask = false;
                    return res;
                });
            }
            function nextTick(cb, ctx) {
                var _resolve;
                callbacks.push(function () {
                    if (cb) {
                        try {
                            cb.call(ctx);
                        }
                        catch (e) {
                            handleError(e, ctx, 'nextTick');
                        }
                    }
                    else if (_resolve) {
                        _resolve(ctx);
                    }
                });
                if (!pending) {
                    pending = true;
                    if (useMacroTask) {
                        macroTimerFunc();
                    }
                    else {
                        microTimerFunc();
                    }
                }
                // $flow-disable-line
                if (!cb && typeof Promise !== 'undefined') {
                    return new Promise(function (resolve) {
                        _resolve = resolve;
                    });
                }
            }
            /*  */
            /* not type checking this file because flow doesn't play well with Proxy */
            var initProxy;
            if (true) {
                var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' +
                    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
                    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
                    'require' // for Webpack/Browserify
                );
                var warnNonPresent = function (target, key) {
                    warn("Property or method \"" + key + "\" is not defined on the instance but " +
                        'referenced during render. Make sure that this property is reactive, ' +
                        'either in the data option, or for class-based components, by ' +
                        'initializing the property. ' +
                        'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
                };
                var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);
                if (hasProxy) {
                    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
                    config.keyCodes = new Proxy(config.keyCodes, {
                        set: function set(target, key, value) {
                            if (isBuiltInModifier(key)) {
                                warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
                                return false;
                            }
                            else {
                                target[key] = value;
                                return true;
                            }
                        }
                    });
                }
                var hasHandler = {
                    has: function has(target, key) {
                        var has = key in target;
                        var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
                        if (!has && !isAllowed) {
                            warnNonPresent(target, key);
                        }
                        return has || !isAllowed;
                    }
                };
                var getHandler = {
                    get: function get(target, key) {
                        if (typeof key === 'string' && !(key in target)) {
                            warnNonPresent(target, key);
                        }
                        return target[key];
                    }
                };
                initProxy = function initProxy(vm) {
                    if (hasProxy) {
                        // determine which proxy handler to use
                        var options = vm.$options;
                        var handlers = options.render && options.render._withStripped
                            ? getHandler
                            : hasHandler;
                        vm._renderProxy = new Proxy(vm, handlers);
                    }
                    else {
                        vm._renderProxy = vm;
                    }
                };
            }
            /*  */
            var seenObjects = new _Set();
            /**
             * Recursively traverse an object to evoke all converted
             * getters, so that every nested property inside the object
             * is collected as a "deep" dependency.
             */
            function traverse(val) {
                _traverse(val, seenObjects);
                seenObjects.clear();
            }
            function _traverse(val, seen) {
                var i, keys;
                var isA = Array.isArray(val);
                if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
                    return;
                }
                if (val.__ob__) {
                    var depId = val.__ob__.dep.id;
                    if (seen.has(depId)) {
                        return;
                    }
                    seen.add(depId);
                }
                if (isA) {
                    i = val.length;
                    while (i--) {
                        _traverse(val[i], seen);
                    }
                }
                else {
                    keys = Object.keys(val);
                    i = keys.length;
                    while (i--) {
                        _traverse(val[keys[i]], seen);
                    }
                }
            }
            var mark;
            var measure;
            if (true) {
                var perf = inBrowser && window.performance;
                /* istanbul ignore if */
                if (perf &&
                    perf.mark &&
                    perf.measure &&
                    perf.clearMarks &&
                    perf.clearMeasures) {
                    mark = function (tag) { return perf.mark(tag); };
                    measure = function (name, startTag, endTag) {
                        perf.measure(name, startTag, endTag);
                        perf.clearMarks(startTag);
                        perf.clearMarks(endTag);
                        perf.clearMeasures(name);
                    };
                }
            }
            /*  */
            var normalizeEvent = cached(function (name) {
                var passive = name.charAt(0) === '&';
                name = passive ? name.slice(1) : name;
                var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
                name = once$$1 ? name.slice(1) : name;
                var capture = name.charAt(0) === '!';
                name = capture ? name.slice(1) : name;
                return {
                    name: name,
                    once: once$$1,
                    capture: capture,
                    passive: passive
                };
            });
            function createFnInvoker(fns) {
                function invoker() {
                    var arguments$1 = arguments;
                    var fns = invoker.fns;
                    if (Array.isArray(fns)) {
                        var cloned = fns.slice();
                        for (var i = 0; i < cloned.length; i++) {
                            cloned[i].apply(null, arguments$1);
                        }
                    }
                    else {
                        // return handler return value for single handlers
                        return fns.apply(null, arguments);
                    }
                }
                invoker.fns = fns;
                return invoker;
            }
            function updateListeners(on, oldOn, add, remove$$1, vm) {
                var name, def, cur, old, event;
                for (name in on) {
                    def = cur = on[name];
                    old = oldOn[name];
                    event = normalizeEvent(name);
                    /* istanbul ignore if */
                    if (isUndef(cur)) {
                        true && warn("Invalid handler for event \"" + (event.name) + "\": got " + String(cur), vm);
                    }
                    else if (isUndef(old)) {
                        if (isUndef(cur.fns)) {
                            cur = on[name] = createFnInvoker(cur);
                        }
                        add(event.name, cur, event.once, event.capture, event.passive, event.params);
                    }
                    else if (cur !== old) {
                        old.fns = cur;
                        on[name] = old;
                    }
                }
                for (name in oldOn) {
                    if (isUndef(on[name])) {
                        event = normalizeEvent(name);
                        remove$$1(event.name, oldOn[name], event.capture);
                    }
                }
            }
            /*  */
            function mergeVNodeHook(def, hookKey, hook) {
                if (def instanceof VNode) {
                    def = def.data.hook || (def.data.hook = {});
                }
                var invoker;
                var oldHook = def[hookKey];
                function wrappedHook() {
                    hook.apply(this, arguments);
                    // important: remove merged hook to ensure it's called only once
                    // and prevent memory leak
                    remove(invoker.fns, wrappedHook);
                }
                if (isUndef(oldHook)) {
                    // no existing hook
                    invoker = createFnInvoker([wrappedHook]);
                }
                else {
                    /* istanbul ignore if */
                    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
                        // already a merged invoker
                        invoker = oldHook;
                        invoker.fns.push(wrappedHook);
                    }
                    else {
                        // existing plain hook
                        invoker = createFnInvoker([oldHook, wrappedHook]);
                    }
                }
                invoker.merged = true;
                def[hookKey] = invoker;
            }
            /*  */
            function extractPropsFromVNodeData(data, Ctor, tag) {
                // we are only extracting raw values here.
                // validation and default values are handled in the child
                // component itself.
                var propOptions = Ctor.options.props;
                if (isUndef(propOptions)) {
                    return;
                }
                var res = {};
                var attrs = data.attrs;
                var props = data.props;
                if (isDef(attrs) || isDef(props)) {
                    for (var key in propOptions) {
                        var altKey = hyphenate(key);
                        if (true) {
                            var keyInLowerCase = key.toLowerCase();
                            if (key !== keyInLowerCase &&
                                attrs && hasOwn(attrs, keyInLowerCase)) {
                                tip("Prop \"" + keyInLowerCase + "\" is passed to component " +
                                    (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
                                    " \"" + key + "\". " +
                                    "Note that HTML attributes are case-insensitive and camelCased " +
                                    "props need to use their kebab-case equivalents when using in-DOM " +
                                    "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
                            }
                        }
                        checkProp(res, props, key, altKey, true) ||
                            checkProp(res, attrs, key, altKey, false);
                    }
                }
                return res;
            }
            function checkProp(res, hash, key, altKey, preserve) {
                if (isDef(hash)) {
                    if (hasOwn(hash, key)) {
                        res[key] = hash[key];
                        if (!preserve) {
                            delete hash[key];
                        }
                        return true;
                    }
                    else if (hasOwn(hash, altKey)) {
                        res[key] = hash[altKey];
                        if (!preserve) {
                            delete hash[altKey];
                        }
                        return true;
                    }
                }
                return false;
            }
            /*  */
            // The template compiler attempts to minimize the need for normalization by
            // statically analyzing the template at compile time.
            //
            // For plain HTML markup, normalization can be completely skipped because the
            // generated render function is guaranteed to return Array<VNode>. There are
            // two cases where extra normalization is needed:
            // 1. When the children contains components - because a functional component
            // may return an Array instead of a single root. In this case, just a simple
            // normalization is needed - if any child is an Array, we flatten the whole
            // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
            // because functional components already normalize their own children.
            function simpleNormalizeChildren(children) {
                for (var i = 0; i < children.length; i++) {
                    if (Array.isArray(children[i])) {
                        return Array.prototype.concat.apply([], children);
                    }
                }
                return children;
            }
            // 2. When the children contains constructs that always generated nested Arrays,
            // e.g. <template>, <slot>, v-for, or when the children is provided by user
            // with hand-written render functions / JSX. In such cases a full normalization
            // is needed to cater to all possible types of children values.
            function normalizeChildren(children) {
                return isPrimitive(children)
                    ? [createTextVNode(children)]
                    : Array.isArray(children)
                        ? normalizeArrayChildren(children)
                        : undefined;
            }
            function isTextNode(node) {
                return isDef(node) && isDef(node.text) && isFalse(node.isComment);
            }
            function normalizeArrayChildren(children, nestedIndex) {
                var res = [];
                var i, c, lastIndex, last;
                for (i = 0; i < children.length; i++) {
                    c = children[i];
                    if (isUndef(c) || typeof c === 'boolean') {
                        continue;
                    }
                    lastIndex = res.length - 1;
                    last = res[lastIndex];
                    //  nested
                    if (Array.isArray(c)) {
                        if (c.length > 0) {
                            c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
                            // merge adjacent text nodes
                            if (isTextNode(c[0]) && isTextNode(last)) {
                                res[lastIndex] = createTextVNode(last.text + (c[0]).text);
                                c.shift();
                            }
                            res.push.apply(res, c);
                        }
                    }
                    else if (isPrimitive(c)) {
                        if (isTextNode(last)) {
                            // merge adjacent text nodes
                            // this is necessary for SSR hydration because text nodes are
                            // essentially merged when rendered to HTML strings
                            res[lastIndex] = createTextVNode(last.text + c);
                        }
                        else if (c !== '') {
                            // convert primitive to vnode
                            res.push(createTextVNode(c));
                        }
                    }
                    else {
                        if (isTextNode(c) && isTextNode(last)) {
                            // merge adjacent text nodes
                            res[lastIndex] = createTextVNode(last.text + c.text);
                        }
                        else {
                            // default key for nested array children (likely generated by v-for)
                            if (isTrue(children._isVList) &&
                                isDef(c.tag) &&
                                isUndef(c.key) &&
                                isDef(nestedIndex)) {
                                c.key = "__vlist" + nestedIndex + "_" + i + "__";
                            }
                            res.push(c);
                        }
                    }
                }
                return res;
            }
            /*  */
            function ensureCtor(comp, base) {
                if (comp.__esModule ||
                    (hasSymbol && comp[Symbol.toStringTag] === 'Module')) {
                    comp = comp.default;
                }
                return isObject(comp)
                    ? base.extend(comp)
                    : comp;
            }
            function createAsyncPlaceholder(factory, data, context, children, tag) {
                var node = createEmptyVNode();
                node.asyncFactory = factory;
                node.asyncMeta = { data: data, context: context, children: children, tag: tag };
                return node;
            }
            function resolveAsyncComponent(factory, baseCtor, context) {
                if (isTrue(factory.error) && isDef(factory.errorComp)) {
                    return factory.errorComp;
                }
                if (isDef(factory.resolved)) {
                    return factory.resolved;
                }
                if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
                    return factory.loadingComp;
                }
                if (isDef(factory.contexts)) {
                    // already pending
                    factory.contexts.push(context);
                }
                else {
                    var contexts = factory.contexts = [context];
                    var sync = true;
                    var forceRender = function () {
                        for (var i = 0, l = contexts.length; i < l; i++) {
                            contexts[i].$forceUpdate();
                        }
                    };
                    var resolve = once(function (res) {
                        // cache resolved
                        factory.resolved = ensureCtor(res, baseCtor);
                        // invoke callbacks only if this is not a synchronous resolve
                        // (async resolves are shimmed as synchronous during SSR)
                        if (!sync) {
                            forceRender();
                        }
                    });
                    var reject = once(function (reason) {
                        true && warn("Failed to resolve async component: " + (String(factory)) +
                            (reason ? ("\nReason: " + reason) : ''));
                        if (isDef(factory.errorComp)) {
                            factory.error = true;
                            forceRender();
                        }
                    });
                    var res = factory(resolve, reject);
                    if (isObject(res)) {
                        if (typeof res.then === 'function') {
                            // () => Promise
                            if (isUndef(factory.resolved)) {
                                res.then(resolve, reject);
                            }
                        }
                        else if (isDef(res.component) && typeof res.component.then === 'function') {
                            res.component.then(resolve, reject);
                            if (isDef(res.error)) {
                                factory.errorComp = ensureCtor(res.error, baseCtor);
                            }
                            if (isDef(res.loading)) {
                                factory.loadingComp = ensureCtor(res.loading, baseCtor);
                                if (res.delay === 0) {
                                    factory.loading = true;
                                }
                                else {
                                    setTimeout(function () {
                                        if (isUndef(factory.resolved) && isUndef(factory.error)) {
                                            factory.loading = true;
                                            forceRender();
                                        }
                                    }, res.delay || 200);
                                }
                            }
                            if (isDef(res.timeout)) {
                                setTimeout(function () {
                                    if (isUndef(factory.resolved)) {
                                        reject(true
                                            ? ("timeout (" + (res.timeout) + "ms)")
                                            : undefined);
                                    }
                                }, res.timeout);
                            }
                        }
                    }
                    sync = false;
                    // return in case resolved synchronously
                    return factory.loading
                        ? factory.loadingComp
                        : factory.resolved;
                }
            }
            /*  */
            function isAsyncPlaceholder(node) {
                return node.isComment && node.asyncFactory;
            }
            /*  */
            function getFirstComponentChild(children) {
                if (Array.isArray(children)) {
                    for (var i = 0; i < children.length; i++) {
                        var c = children[i];
                        if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
                            return c;
                        }
                    }
                }
            }
            /*  */
            /*  */
            function initEvents(vm) {
                vm._events = Object.create(null);
                vm._hasHookEvent = false;
                // init parent attached events
                var listeners = vm.$options._parentListeners;
                if (listeners) {
                    updateComponentListeners(vm, listeners);
                }
            }
            var target;
            function add(event, fn, once) {
                if (once) {
                    target.$once(event, fn);
                }
                else {
                    target.$on(event, fn);
                }
            }
            function remove$1(event, fn) {
                target.$off(event, fn);
            }
            function updateComponentListeners(vm, listeners, oldListeners) {
                target = vm;
                updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
                target = undefined;
            }
            function eventsMixin(Vue) {
                var hookRE = /^hook:/;
                Vue.prototype.$on = function (event, fn) {
                    var this$1 = this;
                    var vm = this;
                    if (Array.isArray(event)) {
                        for (var i = 0, l = event.length; i < l; i++) {
                            this$1.$on(event[i], fn);
                        }
                    }
                    else {
                        (vm._events[event] || (vm._events[event] = [])).push(fn);
                        // optimize hook:event cost by using a boolean flag marked at registration
                        // instead of a hash lookup
                        if (hookRE.test(event)) {
                            vm._hasHookEvent = true;
                        }
                    }
                    return vm;
                };
                Vue.prototype.$once = function (event, fn) {
                    var vm = this;
                    function on() {
                        vm.$off(event, on);
                        fn.apply(vm, arguments);
                    }
                    on.fn = fn;
                    vm.$on(event, on);
                    return vm;
                };
                Vue.prototype.$off = function (event, fn) {
                    var this$1 = this;
                    var vm = this;
                    // all
                    if (!arguments.length) {
                        vm._events = Object.create(null);
                        return vm;
                    }
                    // array of events
                    if (Array.isArray(event)) {
                        for (var i = 0, l = event.length; i < l; i++) {
                            this$1.$off(event[i], fn);
                        }
                        return vm;
                    }
                    // specific event
                    var cbs = vm._events[event];
                    if (!cbs) {
                        return vm;
                    }
                    if (!fn) {
                        vm._events[event] = null;
                        return vm;
                    }
                    if (fn) {
                        // specific handler
                        var cb;
                        var i$1 = cbs.length;
                        while (i$1--) {
                            cb = cbs[i$1];
                            if (cb === fn || cb.fn === fn) {
                                cbs.splice(i$1, 1);
                                break;
                            }
                        }
                    }
                    return vm;
                };
                Vue.prototype.$emit = function (event) {
                    var vm = this;
                    if (true) {
                        var lowerCaseEvent = event.toLowerCase();
                        if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
                            tip("Event \"" + lowerCaseEvent + "\" is emitted in component " +
                                (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
                                "Note that HTML attributes are case-insensitive and you cannot use " +
                                "v-on to listen to camelCase events when using in-DOM templates. " +
                                "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\".");
                        }
                    }
                    var cbs = vm._events[event];
                    if (cbs) {
                        cbs = cbs.length > 1 ? toArray(cbs) : cbs;
                        var args = toArray(arguments, 1);
                        for (var i = 0, l = cbs.length; i < l; i++) {
                            try {
                                cbs[i].apply(vm, args);
                            }
                            catch (e) {
                                handleError(e, vm, ("event handler for \"" + event + "\""));
                            }
                        }
                    }
                    return vm;
                };
            }
            /*  */
            /**
             * Runtime helper for resolving raw children VNodes into a slot object.
             */
            function resolveSlots(children, context) {
                var slots = {};
                if (!children) {
                    return slots;
                }
                for (var i = 0, l = children.length; i < l; i++) {
                    var child = children[i];
                    var data = child.data;
                    // remove slot attribute if the node is resolved as a Vue slot node
                    if (data && data.attrs && data.attrs.slot) {
                        delete data.attrs.slot;
                    }
                    // named slots should only be respected if the vnode was rendered in the
                    // same context.
                    if ((child.context === context || child.fnContext === context) &&
                        data && data.slot != null) {
                        var name = data.slot;
                        var slot = (slots[name] || (slots[name] = []));
                        if (child.tag === 'template') {
                            slot.push.apply(slot, child.children || []);
                        }
                        else {
                            slot.push(child);
                        }
                    }
                    else {
                        (slots.default || (slots.default = [])).push(child);
                    }
                }
                // ignore slots that contains only whitespace
                for (var name$1 in slots) {
                    if (slots[name$1].every(isWhitespace)) {
                        delete slots[name$1];
                    }
                }
                return slots;
            }
            function isWhitespace(node) {
                return (node.isComment && !node.asyncFactory) || node.text === ' ';
            }
            function resolveScopedSlots(fns, // see flow/vnode
            res) {
                res = res || {};
                for (var i = 0; i < fns.length; i++) {
                    if (Array.isArray(fns[i])) {
                        resolveScopedSlots(fns[i], res);
                    }
                    else {
                        res[fns[i].key] = fns[i].fn;
                    }
                }
                return res;
            }
            /*  */
            var activeInstance = null;
            var isUpdatingChildComponent = false;
            function initLifecycle(vm) {
                var options = vm.$options;
                // locate first non-abstract parent
                var parent = options.parent;
                if (parent && !options.abstract) {
                    while (parent.$options.abstract && parent.$parent) {
                        parent = parent.$parent;
                    }
                    parent.$children.push(vm);
                }
                vm.$parent = parent;
                vm.$root = parent ? parent.$root : vm;
                vm.$children = [];
                vm.$refs = {};
                vm._watcher = null;
                vm._inactive = null;
                vm._directInactive = false;
                vm._isMounted = false;
                vm._isDestroyed = false;
                vm._isBeingDestroyed = false;
            }
            function lifecycleMixin(Vue) {
                Vue.prototype._update = function (vnode, hydrating) {
                    var vm = this;
                    if (vm._isMounted) {
                        callHook(vm, 'beforeUpdate');
                    }
                    var prevEl = vm.$el;
                    var prevVnode = vm._vnode;
                    var prevActiveInstance = activeInstance;
                    activeInstance = vm;
                    vm._vnode = vnode;
                    // Vue.prototype.__patch__ is injected in entry points
                    // based on the rendering backend used.
                    if (!prevVnode) {
                        // initial render
                        vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */, vm.$options._parentElm, vm.$options._refElm);
                        // no need for the ref nodes after initial patch
                        // this prevents keeping a detached DOM tree in memory (#5851)
                        vm.$options._parentElm = vm.$options._refElm = null;
                    }
                    else {
                        // updates
                        vm.$el = vm.__patch__(prevVnode, vnode);
                    }
                    activeInstance = prevActiveInstance;
                    // update __vue__ reference
                    if (prevEl) {
                        prevEl.__vue__ = null;
                    }
                    if (vm.$el) {
                        vm.$el.__vue__ = vm;
                    }
                    // if parent is an HOC, update its $el as well
                    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
                        vm.$parent.$el = vm.$el;
                    }
                    // updated hook is called by the scheduler to ensure that children are
                    // updated in a parent's updated hook.
                };
                Vue.prototype.$forceUpdate = function () {
                    var vm = this;
                    if (vm._watcher) {
                        vm._watcher.update();
                    }
                };
                Vue.prototype.$destroy = function () {
                    var vm = this;
                    if (vm._isBeingDestroyed) {
                        return;
                    }
                    callHook(vm, 'beforeDestroy');
                    vm._isBeingDestroyed = true;
                    // remove self from parent
                    var parent = vm.$parent;
                    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
                        remove(parent.$children, vm);
                    }
                    // teardown watchers
                    if (vm._watcher) {
                        vm._watcher.teardown();
                    }
                    var i = vm._watchers.length;
                    while (i--) {
                        vm._watchers[i].teardown();
                    }
                    // remove reference from data ob
                    // frozen object may not have observer.
                    if (vm._data.__ob__) {
                        vm._data.__ob__.vmCount--;
                    }
                    // call the last hook...
                    vm._isDestroyed = true;
                    // invoke destroy hooks on current rendered tree
                    vm.__patch__(vm._vnode, null);
                    // fire destroyed hook
                    callHook(vm, 'destroyed');
                    // turn off all instance listeners.
                    vm.$off();
                    // remove __vue__ reference
                    if (vm.$el) {
                        vm.$el.__vue__ = null;
                    }
                    // release circular reference (#6759)
                    if (vm.$vnode) {
                        vm.$vnode.parent = null;
                    }
                };
            }
            function mountComponent(vm, el, hydrating) {
                vm.$el = el;
                if (!vm.$options.render) {
                    vm.$options.render = createEmptyVNode;
                    if (true) {
                        /* istanbul ignore if */
                        if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
                            vm.$options.el || el) {
                            warn('You are using the runtime-only build of Vue where the template ' +
                                'compiler is not available. Either pre-compile the templates into ' +
                                'render functions, or use the compiler-included build.', vm);
                        }
                        else {
                            warn('Failed to mount component: template or render function not defined.', vm);
                        }
                    }
                }
                callHook(vm, 'beforeMount');
                var updateComponent;
                /* istanbul ignore if */
                if (true && config.performance && mark) {
                    updateComponent = function () {
                        var name = vm._name;
                        var id = vm._uid;
                        var startTag = "vue-perf-start:" + id;
                        var endTag = "vue-perf-end:" + id;
                        mark(startTag);
                        var vnode = vm._render();
                        mark(endTag);
                        measure(("vue " + name + " render"), startTag, endTag);
                        mark(startTag);
                        vm._update(vnode, hydrating);
                        mark(endTag);
                        measure(("vue " + name + " patch"), startTag, endTag);
                    };
                }
                else {
                    updateComponent = function () {
                        vm._update(vm._render(), hydrating);
                    };
                }
                // we set this to vm._watcher inside the watcher's constructor
                // since the watcher's initial patch may call $forceUpdate (e.g. inside child
                // component's mounted hook), which relies on vm._watcher being already defined
                new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
                hydrating = false;
                // manually mounted instance, call mounted on self
                // mounted is called for render-created child components in its inserted hook
                if (vm.$vnode == null) {
                    vm._isMounted = true;
                    callHook(vm, 'mounted');
                }
                return vm;
            }
            function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
                if (true) {
                    isUpdatingChildComponent = true;
                }
                // determine whether component has slot children
                // we need to do this before overwriting $options._renderChildren
                var hasChildren = !!(renderChildren || // has new static slots
                    vm.$options._renderChildren || // has old static slots
                    parentVnode.data.scopedSlots || // has new scoped slots
                    vm.$scopedSlots !== emptyObject // has old scoped slots
                );
                vm.$options._parentVnode = parentVnode;
                vm.$vnode = parentVnode; // update vm's placeholder node without re-render
                if (vm._vnode) { // update child tree's parent
                    vm._vnode.parent = parentVnode;
                }
                vm.$options._renderChildren = renderChildren;
                // update $attrs and $listeners hash
                // these are also reactive so they may trigger child update if the child
                // used them during render
                vm.$attrs = parentVnode.data.attrs || emptyObject;
                vm.$listeners = listeners || emptyObject;
                // update props
                if (propsData && vm.$options.props) {
                    toggleObserving(false);
                    var props = vm._props;
                    var propKeys = vm.$options._propKeys || [];
                    for (var i = 0; i < propKeys.length; i++) {
                        var key = propKeys[i];
                        var propOptions = vm.$options.props; // wtf flow?
                        props[key] = validateProp(key, propOptions, propsData, vm);
                    }
                    toggleObserving(true);
                    // keep a copy of raw propsData
                    vm.$options.propsData = propsData;
                }
                // update listeners
                listeners = listeners || emptyObject;
                var oldListeners = vm.$options._parentListeners;
                vm.$options._parentListeners = listeners;
                updateComponentListeners(vm, listeners, oldListeners);
                // resolve slots + force update if has children
                if (hasChildren) {
                    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
                    vm.$forceUpdate();
                }
                if (true) {
                    isUpdatingChildComponent = false;
                }
            }
            function isInInactiveTree(vm) {
                while (vm && (vm = vm.$parent)) {
                    if (vm._inactive) {
                        return true;
                    }
                }
                return false;
            }
            function activateChildComponent(vm, direct) {
                if (direct) {
                    vm._directInactive = false;
                    if (isInInactiveTree(vm)) {
                        return;
                    }
                }
                else if (vm._directInactive) {
                    return;
                }
                if (vm._inactive || vm._inactive === null) {
                    vm._inactive = false;
                    for (var i = 0; i < vm.$children.length; i++) {
                        activateChildComponent(vm.$children[i]);
                    }
                    callHook(vm, 'activated');
                }
            }
            function deactivateChildComponent(vm, direct) {
                if (direct) {
                    vm._directInactive = true;
                    if (isInInactiveTree(vm)) {
                        return;
                    }
                }
                if (!vm._inactive) {
                    vm._inactive = true;
                    for (var i = 0; i < vm.$children.length; i++) {
                        deactivateChildComponent(vm.$children[i]);
                    }
                    callHook(vm, 'deactivated');
                }
            }
            function callHook(vm, hook) {
                // #7573 disable dep collection when invoking lifecycle hooks
                pushTarget();
                var handlers = vm.$options[hook];
                if (handlers) {
                    for (var i = 0, j = handlers.length; i < j; i++) {
                        try {
                            handlers[i].call(vm);
                        }
                        catch (e) {
                            handleError(e, vm, (hook + " hook"));
                        }
                    }
                }
                if (vm._hasHookEvent) {
                    vm.$emit('hook:' + hook);
                }
                popTarget();
            }
            /*  */
            var MAX_UPDATE_COUNT = 100;
            var queue = [];
            var activatedChildren = [];
            var has = {};
            var circular = {};
            var waiting = false;
            var flushing = false;
            var index = 0;
            /**
             * Reset the scheduler's state.
             */
            function resetSchedulerState() {
                index = queue.length = activatedChildren.length = 0;
                has = {};
                if (true) {
                    circular = {};
                }
                waiting = flushing = false;
            }
            /**
             * Flush both queues and run the watchers.
             */
            function flushSchedulerQueue() {
                flushing = true;
                var watcher, id;
                // Sort queue before flush.
                // This ensures that:
                // 1. Components are updated from parent to child. (because parent is always
                //    created before the child)
                // 2. A component's user watchers are run before its render watcher (because
                //    user watchers are created before the render watcher)
                // 3. If a component is destroyed during a parent component's watcher run,
                //    its watchers can be skipped.
                queue.sort(function (a, b) { return a.id - b.id; });
                // do not cache length because more watchers might be pushed
                // as we run existing watchers
                for (index = 0; index < queue.length; index++) {
                    watcher = queue[index];
                    id = watcher.id;
                    has[id] = null;
                    watcher.run();
                    // in dev build, check and stop circular updates.
                    if (true && has[id] != null) {
                        circular[id] = (circular[id] || 0) + 1;
                        if (circular[id] > MAX_UPDATE_COUNT) {
                            warn('You may have an infinite update loop ' + (watcher.user
                                ? ("in watcher with expression \"" + (watcher.expression) + "\"")
                                : "in a component render function."), watcher.vm);
                            break;
                        }
                    }
                }
                // keep copies of post queues before resetting state
                var activatedQueue = activatedChildren.slice();
                var updatedQueue = queue.slice();
                resetSchedulerState();
                // call component updated and activated hooks
                callActivatedHooks(activatedQueue);
                callUpdatedHooks(updatedQueue);
                // devtool hook
                /* istanbul ignore if */
                if (devtools && config.devtools) {
                    devtools.emit('flush');
                }
            }
            function callUpdatedHooks(queue) {
                var i = queue.length;
                while (i--) {
                    var watcher = queue[i];
                    var vm = watcher.vm;
                    if (vm._watcher === watcher && vm._isMounted) {
                        callHook(vm, 'updated');
                    }
                }
            }
            /**
             * Queue a kept-alive component that was activated during patch.
             * The queue will be processed after the entire tree has been patched.
             */
            function queueActivatedComponent(vm) {
                // setting _inactive to false here so that a render function can
                // rely on checking whether it's in an inactive tree (e.g. router-view)
                vm._inactive = false;
                activatedChildren.push(vm);
            }
            function callActivatedHooks(queue) {
                for (var i = 0; i < queue.length; i++) {
                    queue[i]._inactive = true;
                    activateChildComponent(queue[i], true /* true */);
                }
            }
            /**
             * Push a watcher into the watcher queue.
             * Jobs with duplicate IDs will be skipped unless it's
             * pushed when the queue is being flushed.
             */
            function queueWatcher(watcher) {
                var id = watcher.id;
                if (has[id] == null) {
                    has[id] = true;
                    if (!flushing) {
                        queue.push(watcher);
                    }
                    else {
                        // if already flushing, splice the watcher based on its id
                        // if already past its id, it will be run next immediately.
                        var i = queue.length - 1;
                        while (i > index && queue[i].id > watcher.id) {
                            i--;
                        }
                        queue.splice(i + 1, 0, watcher);
                    }
                    // queue the flush
                    if (!waiting) {
                        waiting = true;
                        nextTick(flushSchedulerQueue);
                    }
                }
            }
            /*  */
            var uid$1 = 0;
            /**
             * A watcher parses an expression, collects dependencies,
             * and fires callback when the expression value changes.
             * This is used for both the $watch() api and directives.
             */
            var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
                this.vm = vm;
                if (isRenderWatcher) {
                    vm._watcher = this;
                }
                vm._watchers.push(this);
                // options
                if (options) {
                    this.deep = !!options.deep;
                    this.user = !!options.user;
                    this.lazy = !!options.lazy;
                    this.sync = !!options.sync;
                }
                else {
                    this.deep = this.user = this.lazy = this.sync = false;
                }
                this.cb = cb;
                this.id = ++uid$1; // uid for batching
                this.active = true;
                this.dirty = this.lazy; // for lazy watchers
                this.deps = [];
                this.newDeps = [];
                this.depIds = new _Set();
                this.newDepIds = new _Set();
                this.expression = true
                    ? expOrFn.toString()
                    : undefined;
                // parse expression for getter
                if (typeof expOrFn === 'function') {
                    this.getter = expOrFn;
                }
                else {
                    this.getter = parsePath(expOrFn);
                    if (!this.getter) {
                        this.getter = function () { };
                        true && warn("Failed watching path: \"" + expOrFn + "\" " +
                            'Watcher only accepts simple dot-delimited paths. ' +
                            'For full control, use a function instead.', vm);
                    }
                }
                this.value = this.lazy
                    ? undefined
                    : this.get();
            };
            /**
             * Evaluate the getter, and re-collect dependencies.
             */
            Watcher.prototype.get = function get() {
                pushTarget(this);
                var value;
                var vm = this.vm;
                try {
                    value = this.getter.call(vm, vm);
                }
                catch (e) {
                    if (this.user) {
                        handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
                    }
                    else {
                        throw e;
                    }
                }
                finally {
                    // "touch" every property so they are all tracked as
                    // dependencies for deep watching
                    if (this.deep) {
                        traverse(value);
                    }
                    popTarget();
                    this.cleanupDeps();
                }
                return value;
            };
            /**
             * Add a dependency to this directive.
             */
            Watcher.prototype.addDep = function addDep(dep) {
                var id = dep.id;
                if (!this.newDepIds.has(id)) {
                    this.newDepIds.add(id);
                    this.newDeps.push(dep);
                    if (!this.depIds.has(id)) {
                        dep.addSub(this);
                    }
                }
            };
            /**
             * Clean up for dependency collection.
             */
            Watcher.prototype.cleanupDeps = function cleanupDeps() {
                var this$1 = this;
                var i = this.deps.length;
                while (i--) {
                    var dep = this$1.deps[i];
                    if (!this$1.newDepIds.has(dep.id)) {
                        dep.removeSub(this$1);
                    }
                }
                var tmp = this.depIds;
                this.depIds = this.newDepIds;
                this.newDepIds = tmp;
                this.newDepIds.clear();
                tmp = this.deps;
                this.deps = this.newDeps;
                this.newDeps = tmp;
                this.newDeps.length = 0;
            };
            /**
             * Subscriber interface.
             * Will be called when a dependency changes.
             */
            Watcher.prototype.update = function update() {
                /* istanbul ignore else */
                if (this.lazy) {
                    this.dirty = true;
                }
                else if (this.sync) {
                    this.run();
                }
                else {
                    queueWatcher(this);
                }
            };
            /**
             * Scheduler job interface.
             * Will be called by the scheduler.
             */
            Watcher.prototype.run = function run() {
                if (this.active) {
                    var value = this.get();
                    if (value !== this.value ||
                        // Deep watchers and watchers on Object/Arrays should fire even
                        // when the value is the same, because the value may
                        // have mutated.
                        isObject(value) ||
                        this.deep) {
                        // set new value
                        var oldValue = this.value;
                        this.value = value;
                        if (this.user) {
                            try {
                                this.cb.call(this.vm, value, oldValue);
                            }
                            catch (e) {
                                handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
                            }
                        }
                        else {
                            this.cb.call(this.vm, value, oldValue);
                        }
                    }
                }
            };
            /**
             * Evaluate the value of the watcher.
             * This only gets called for lazy watchers.
             */
            Watcher.prototype.evaluate = function evaluate() {
                this.value = this.get();
                this.dirty = false;
            };
            /**
             * Depend on all deps collected by this watcher.
             */
            Watcher.prototype.depend = function depend() {
                var this$1 = this;
                var i = this.deps.length;
                while (i--) {
                    this$1.deps[i].depend();
                }
            };
            /**
             * Remove self from all dependencies' subscriber list.
             */
            Watcher.prototype.teardown = function teardown() {
                var this$1 = this;
                if (this.active) {
                    // remove self from vm's watcher list
                    // this is a somewhat expensive operation so we skip it
                    // if the vm is being destroyed.
                    if (!this.vm._isBeingDestroyed) {
                        remove(this.vm._watchers, this);
                    }
                    var i = this.deps.length;
                    while (i--) {
                        this$1.deps[i].removeSub(this$1);
                    }
                    this.active = false;
                }
            };
            /*  */
            var sharedPropertyDefinition = {
                enumerable: true,
                configurable: true,
                get: noop,
                set: noop
            };
            function proxy(target, sourceKey, key) {
                sharedPropertyDefinition.get = function proxyGetter() {
                    return this[sourceKey][key];
                };
                sharedPropertyDefinition.set = function proxySetter(val) {
                    this[sourceKey][key] = val;
                };
                Object.defineProperty(target, key, sharedPropertyDefinition);
            }
            function initState(vm) {
                vm._watchers = [];
                var opts = vm.$options;
                if (opts.props) {
                    initProps(vm, opts.props);
                }
                if (opts.methods) {
                    initMethods(vm, opts.methods);
                }
                if (opts.data) {
                    initData(vm);
                }
                else {
                    observe(vm._data = {}, true /* asRootData */);
                }
                if (opts.computed) {
                    initComputed(vm, opts.computed);
                }
                if (opts.watch && opts.watch !== nativeWatch) {
                    initWatch(vm, opts.watch);
                }
            }
            function initProps(vm, propsOptions) {
                var propsData = vm.$options.propsData || {};
                var props = vm._props = {};
                // cache prop keys so that future props updates can iterate using Array
                // instead of dynamic object key enumeration.
                var keys = vm.$options._propKeys = [];
                var isRoot = !vm.$parent;
                // root instance props should be converted
                if (!isRoot) {
                    toggleObserving(false);
                }
                var loop = function (key) {
                    keys.push(key);
                    var value = validateProp(key, propsOptions, propsData, vm);
                    /* istanbul ignore else */
                    if (true) {
                        var hyphenatedKey = hyphenate(key);
                        if (isReservedAttribute(hyphenatedKey) ||
                            config.isReservedAttr(hyphenatedKey)) {
                            warn(("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."), vm);
                        }
                        defineReactive(props, key, value, function () {
                            if (vm.$parent && !isUpdatingChildComponent) {
                                warn("Avoid mutating a prop directly since the value will be " +
                                    "overwritten whenever the parent component re-renders. " +
                                    "Instead, use a data or computed property based on the prop's " +
                                    "value. Prop being mutated: \"" + key + "\"", vm);
                            }
                        });
                    }
                    else { }
                    // static props are already proxied on the component's prototype
                    // during Vue.extend(). We only need to proxy props defined at
                    // instantiation here.
                    if (!(key in vm)) {
                        proxy(vm, "_props", key);
                    }
                };
                for (var key in propsOptions)
                    loop(key);
                toggleObserving(true);
            }
            function initData(vm) {
                var data = vm.$options.data;
                data = vm._data = typeof data === 'function'
                    ? getData(data, vm)
                    : data || {};
                if (!isPlainObject(data)) {
                    data = {};
                    true && warn('data functions should return an object:\n' +
                        'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
                }
                // proxy data on instance
                var keys = Object.keys(data);
                var props = vm.$options.props;
                var methods = vm.$options.methods;
                var i = keys.length;
                while (i--) {
                    var key = keys[i];
                    if (true) {
                        if (methods && hasOwn(methods, key)) {
                            warn(("Method \"" + key + "\" has already been defined as a data property."), vm);
                        }
                    }
                    if (props && hasOwn(props, key)) {
                        true && warn("The data property \"" + key + "\" is already declared as a prop. " +
                            "Use prop default value instead.", vm);
                    }
                    else if (!isReserved(key)) {
                        proxy(vm, "_data", key);
                    }
                }
                // observe data
                observe(data, true /* asRootData */);
            }
            function getData(data, vm) {
                // #7573 disable dep collection when invoking data getters
                pushTarget();
                try {
                    return data.call(vm, vm);
                }
                catch (e) {
                    handleError(e, vm, "data()");
                    return {};
                }
                finally {
                    popTarget();
                }
            }
            var computedWatcherOptions = { lazy: true };
            function initComputed(vm, computed) {
                // $flow-disable-line
                var watchers = vm._computedWatchers = Object.create(null);
                // computed properties are just getters during SSR
                var isSSR = isServerRendering();
                for (var key in computed) {
                    var userDef = computed[key];
                    var getter = typeof userDef === 'function' ? userDef : userDef.get;
                    if (true && getter == null) {
                        warn(("Getter is missing for computed property \"" + key + "\"."), vm);
                    }
                    if (!isSSR) {
                        // create internal watcher for the computed property.
                        watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
                    }
                    // component-defined computed properties are already defined on the
                    // component prototype. We only need to define computed properties defined
                    // at instantiation here.
                    if (!(key in vm)) {
                        defineComputed(vm, key, userDef);
                    }
                    else if (true) {
                        if (key in vm.$data) {
                            warn(("The computed property \"" + key + "\" is already defined in data."), vm);
                        }
                        else if (vm.$options.props && key in vm.$options.props) {
                            warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
                        }
                    }
                }
            }
            function defineComputed(target, key, userDef) {
                var shouldCache = !isServerRendering();
                if (typeof userDef === 'function') {
                    sharedPropertyDefinition.get = shouldCache
                        ? createComputedGetter(key)
                        : userDef;
                    sharedPropertyDefinition.set = noop;
                }
                else {
                    sharedPropertyDefinition.get = userDef.get
                        ? shouldCache && userDef.cache !== false
                            ? createComputedGetter(key)
                            : userDef.get
                        : noop;
                    sharedPropertyDefinition.set = userDef.set
                        ? userDef.set
                        : noop;
                }
                if (true &&
                    sharedPropertyDefinition.set === noop) {
                    sharedPropertyDefinition.set = function () {
                        warn(("Computed property \"" + key + "\" was assigned to but it has no setter."), this);
                    };
                }
                Object.defineProperty(target, key, sharedPropertyDefinition);
            }
            function createComputedGetter(key) {
                return function computedGetter() {
                    var watcher = this._computedWatchers && this._computedWatchers[key];
                    if (watcher) {
                        if (watcher.dirty) {
                            watcher.evaluate();
                        }
                        if (Dep.target) {
                            watcher.depend();
                        }
                        return watcher.value;
                    }
                };
            }
            function initMethods(vm, methods) {
                var props = vm.$options.props;
                for (var key in methods) {
                    if (true) {
                        if (methods[key] == null) {
                            warn("Method \"" + key + "\" has an undefined value in the component definition. " +
                                "Did you reference the function correctly?", vm);
                        }
                        if (props && hasOwn(props, key)) {
                            warn(("Method \"" + key + "\" has already been defined as a prop."), vm);
                        }
                        if ((key in vm) && isReserved(key)) {
                            warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " +
                                "Avoid defining component methods that start with _ or $.");
                        }
                    }
                    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
                }
            }
            function initWatch(vm, watch) {
                for (var key in watch) {
                    var handler = watch[key];
                    if (Array.isArray(handler)) {
                        for (var i = 0; i < handler.length; i++) {
                            createWatcher(vm, key, handler[i]);
                        }
                    }
                    else {
                        createWatcher(vm, key, handler);
                    }
                }
            }
            function createWatcher(vm, expOrFn, handler, options) {
                if (isPlainObject(handler)) {
                    options = handler;
                    handler = handler.handler;
                }
                if (typeof handler === 'string') {
                    handler = vm[handler];
                }
                return vm.$watch(expOrFn, handler, options);
            }
            function stateMixin(Vue) {
                // flow somehow has problems with directly declared definition object
                // when using Object.defineProperty, so we have to procedurally build up
                // the object here.
                var dataDef = {};
                dataDef.get = function () { return this._data; };
                var propsDef = {};
                propsDef.get = function () { return this._props; };
                if (true) {
                    dataDef.set = function (newData) {
                        warn('Avoid replacing instance root $data. ' +
                            'Use nested data properties instead.', this);
                    };
                    propsDef.set = function () {
                        warn("$props is readonly.", this);
                    };
                }
                Object.defineProperty(Vue.prototype, '$data', dataDef);
                Object.defineProperty(Vue.prototype, '$props', propsDef);
                Vue.prototype.$set = set;
                Vue.prototype.$delete = del;
                Vue.prototype.$watch = function (expOrFn, cb, options) {
                    var vm = this;
                    if (isPlainObject(cb)) {
                        return createWatcher(vm, expOrFn, cb, options);
                    }
                    options = options || {};
                    options.user = true;
                    var watcher = new Watcher(vm, expOrFn, cb, options);
                    if (options.immediate) {
                        cb.call(vm, watcher.value);
                    }
                    return function unwatchFn() {
                        watcher.teardown();
                    };
                };
            }
            /*  */
            function initProvide(vm) {
                var provide = vm.$options.provide;
                if (provide) {
                    vm._provided = typeof provide === 'function'
                        ? provide.call(vm)
                        : provide;
                }
            }
            function initInjections(vm) {
                var result = resolveInject(vm.$options.inject, vm);
                if (result) {
                    toggleObserving(false);
                    Object.keys(result).forEach(function (key) {
                        /* istanbul ignore else */
                        if (true) {
                            defineReactive(vm, key, result[key], function () {
                                warn("Avoid mutating an injected value directly since the changes will be " +
                                    "overwritten whenever the provided component re-renders. " +
                                    "injection being mutated: \"" + key + "\"", vm);
                            });
                        }
                        else { }
                    });
                    toggleObserving(true);
                }
            }
            function resolveInject(inject, vm) {
                if (inject) {
                    // inject is :any because flow is not smart enough to figure out cached
                    var result = Object.create(null);
                    var keys = hasSymbol
                        ? Reflect.ownKeys(inject).filter(function (key) {
                            /* istanbul ignore next */
                            return Object.getOwnPropertyDescriptor(inject, key).enumerable;
                        })
                        : Object.keys(inject);
                    for (var i = 0; i < keys.length; i++) {
                        var key = keys[i];
                        var provideKey = inject[key].from;
                        var source = vm;
                        while (source) {
                            if (source._provided && hasOwn(source._provided, provideKey)) {
                                result[key] = source._provided[provideKey];
                                break;
                            }
                            source = source.$parent;
                        }
                        if (!source) {
                            if ('default' in inject[key]) {
                                var provideDefault = inject[key].default;
                                result[key] = typeof provideDefault === 'function'
                                    ? provideDefault.call(vm)
                                    : provideDefault;
                            }
                            else if (true) {
                                warn(("Injection \"" + key + "\" not found"), vm);
                            }
                        }
                    }
                    return result;
                }
            }
            /*  */
            /**
             * Runtime helper for rendering v-for lists.
             */
            function renderList(val, render) {
                var ret, i, l, keys, key;
                if (Array.isArray(val) || typeof val === 'string') {
                    ret = new Array(val.length);
                    for (i = 0, l = val.length; i < l; i++) {
                        ret[i] = render(val[i], i);
                    }
                }
                else if (typeof val === 'number') {
                    ret = new Array(val);
                    for (i = 0; i < val; i++) {
                        ret[i] = render(i + 1, i);
                    }
                }
                else if (isObject(val)) {
                    keys = Object.keys(val);
                    ret = new Array(keys.length);
                    for (i = 0, l = keys.length; i < l; i++) {
                        key = keys[i];
                        ret[i] = render(val[key], key, i);
                    }
                }
                if (isDef(ret)) {
                    (ret)._isVList = true;
                }
                return ret;
            }
            /*  */
            /**
             * Runtime helper for rendering <slot>
             */
            function renderSlot(name, fallback, props, bindObject) {
                var scopedSlotFn = this.$scopedSlots[name];
                var nodes;
                if (scopedSlotFn) { // scoped slot
                    props = props || {};
                    if (bindObject) {
                        if (true && !isObject(bindObject)) {
                            warn('slot v-bind without argument expects an Object', this);
                        }
                        props = extend(extend({}, bindObject), props);
                    }
                    nodes = scopedSlotFn(props) || fallback;
                }
                else {
                    var slotNodes = this.$slots[name];
                    // warn duplicate slot usage
                    if (slotNodes) {
                        if (true && slotNodes._rendered) {
                            warn("Duplicate presence of slot \"" + name + "\" found in the same render tree " +
                                "- this will likely cause render errors.", this);
                        }
                        slotNodes._rendered = true;
                    }
                    nodes = slotNodes || fallback;
                }
                var target = props && props.slot;
                if (target) {
                    return this.$createElement('template', { slot: target }, nodes);
                }
                else {
                    return nodes;
                }
            }
            /*  */
            /**
             * Runtime helper for resolving filters
             */
            function resolveFilter(id) {
                return resolveAsset(this.$options, 'filters', id, true) || identity;
            }
            /*  */
            function isKeyNotMatch(expect, actual) {
                if (Array.isArray(expect)) {
                    return expect.indexOf(actual) === -1;
                }
                else {
                    return expect !== actual;
                }
            }
            /**
             * Runtime helper for checking keyCodes from config.
             * exposed as Vue.prototype._k
             * passing in eventKeyName as last argument separately for backwards compat
             */
            function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
                var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
                if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
                    return isKeyNotMatch(builtInKeyName, eventKeyName);
                }
                else if (mappedKeyCode) {
                    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
                }
                else if (eventKeyName) {
                    return hyphenate(eventKeyName) !== key;
                }
            }
            /*  */
            /**
             * Runtime helper for merging v-bind="object" into a VNode's data.
             */
            function bindObjectProps(data, tag, value, asProp, isSync) {
                if (value) {
                    if (!isObject(value)) {
                        true && warn('v-bind without argument expects an Object or Array value', this);
                    }
                    else {
                        if (Array.isArray(value)) {
                            value = toObject(value);
                        }
                        var hash;
                        var loop = function (key) {
                            if (key === 'class' ||
                                key === 'style' ||
                                isReservedAttribute(key)) {
                                hash = data;
                            }
                            else {
                                var type = data.attrs && data.attrs.type;
                                hash = asProp || config.mustUseProp(tag, type, key)
                                    ? data.domProps || (data.domProps = {})
                                    : data.attrs || (data.attrs = {});
                            }
                            if (!(key in hash)) {
                                hash[key] = value[key];
                                if (isSync) {
                                    var on = data.on || (data.on = {});
                                    on[("update:" + key)] = function ($event) {
                                        value[key] = $event;
                                    };
                                }
                            }
                        };
                        for (var key in value)
                            loop(key);
                    }
                }
                return data;
            }
            /*  */
            /**
             * Runtime helper for rendering static trees.
             */
            function renderStatic(index, isInFor) {
                var cached = this._staticTrees || (this._staticTrees = []);
                var tree = cached[index];
                // if has already-rendered static tree and not inside v-for,
                // we can reuse the same tree.
                if (tree && !isInFor) {
                    return tree;
                }
                // otherwise, render a fresh tree.
                tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
                );
                markStatic(tree, ("__static__" + index), false);
                return tree;
            }
            /**
             * Runtime helper for v-once.
             * Effectively it means marking the node as static with a unique key.
             */
            function markOnce(tree, index, key) {
                markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
                return tree;
            }
            function markStatic(tree, key, isOnce) {
                if (Array.isArray(tree)) {
                    for (var i = 0; i < tree.length; i++) {
                        if (tree[i] && typeof tree[i] !== 'string') {
                            markStaticNode(tree[i], (key + "_" + i), isOnce);
                        }
                    }
                }
                else {
                    markStaticNode(tree, key, isOnce);
                }
            }
            function markStaticNode(node, key, isOnce) {
                node.isStatic = true;
                node.key = key;
                node.isOnce = isOnce;
            }
            /*  */
            function bindObjectListeners(data, value) {
                if (value) {
                    if (!isPlainObject(value)) {
                        true && warn('v-on without argument expects an Object value', this);
                    }
                    else {
                        var on = data.on = data.on ? extend({}, data.on) : {};
                        for (var key in value) {
                            var existing = on[key];
                            var ours = value[key];
                            on[key] = existing ? [].concat(existing, ours) : ours;
                        }
                    }
                }
                return data;
            }
            /*  */
            function installRenderHelpers(target) {
                target._o = markOnce;
                target._n = toNumber;
                target._s = toString;
                target._l = renderList;
                target._t = renderSlot;
                target._q = looseEqual;
                target._i = looseIndexOf;
                target._m = renderStatic;
                target._f = resolveFilter;
                target._k = checkKeyCodes;
                target._b = bindObjectProps;
                target._v = createTextVNode;
                target._e = createEmptyVNode;
                target._u = resolveScopedSlots;
                target._g = bindObjectListeners;
            }
            /*  */
            function FunctionalRenderContext(data, props, children, parent, Ctor) {
                var options = Ctor.options;
                // ensure the createElement function in functional components
                // gets a unique context - this is necessary for correct named slot check
                var contextVm;
                if (hasOwn(parent, '_uid')) {
                    contextVm = Object.create(parent);
                    // $flow-disable-line
                    contextVm._original = parent;
                }
                else {
                    // the context vm passed in is a functional context as well.
                    // in this case we want to make sure we are able to get a hold to the
                    // real context instance.
                    contextVm = parent;
                    // $flow-disable-line
                    parent = parent._original;
                }
                var isCompiled = isTrue(options._compiled);
                var needNormalization = !isCompiled;
                this.data = data;
                this.props = props;
                this.children = children;
                this.parent = parent;
                this.listeners = data.on || emptyObject;
                this.injections = resolveInject(options.inject, parent);
                this.slots = function () { return resolveSlots(children, parent); };
                // support for compiled functional template
                if (isCompiled) {
                    // exposing $options for renderStatic()
                    this.$options = options;
                    // pre-resolve slots for renderSlot()
                    this.$slots = this.slots();
                    this.$scopedSlots = data.scopedSlots || emptyObject;
                }
                if (options._scopeId) {
                    this._c = function (a, b, c, d) {
                        var vnode = createElement(contextVm, a, b, c, d, needNormalization);
                        if (vnode && !Array.isArray(vnode)) {
                            vnode.fnScopeId = options._scopeId;
                            vnode.fnContext = parent;
                        }
                        return vnode;
                    };
                }
                else {
                    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
                }
            }
            installRenderHelpers(FunctionalRenderContext.prototype);
            function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
                var options = Ctor.options;
                var props = {};
                var propOptions = options.props;
                if (isDef(propOptions)) {
                    for (var key in propOptions) {
                        props[key] = validateProp(key, propOptions, propsData || emptyObject);
                    }
                }
                else {
                    if (isDef(data.attrs)) {
                        mergeProps(props, data.attrs);
                    }
                    if (isDef(data.props)) {
                        mergeProps(props, data.props);
                    }
                }
                var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
                var vnode = options.render.call(null, renderContext._c, renderContext);
                if (vnode instanceof VNode) {
                    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options);
                }
                else if (Array.isArray(vnode)) {
                    var vnodes = normalizeChildren(vnode) || [];
                    var res = new Array(vnodes.length);
                    for (var i = 0; i < vnodes.length; i++) {
                        res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
                    }
                    return res;
                }
            }
            function cloneAndMarkFunctionalResult(vnode, data, contextVm, options) {
                // #7817 clone node before setting fnContext, otherwise if the node is reused
                // (e.g. it was from a cached normal slot) the fnContext causes named slots
                // that should not be matched to match.
                var clone = cloneVNode(vnode);
                clone.fnContext = contextVm;
                clone.fnOptions = options;
                if (data.slot) {
                    (clone.data || (clone.data = {})).slot = data.slot;
                }
                return clone;
            }
            function mergeProps(to, from) {
                for (var key in from) {
                    to[camelize(key)] = from[key];
                }
            }
            /*  */
            // Register the component hook to weex native render engine.
            // The hook will be triggered by native, not javascript.
            // Updates the state of the component to weex native render engine.
            /*  */
            // https://github.com/Hanks10100/weex-native-directive/tree/master/component
            // listening on native callback
            /*  */
            /*  */
            // inline hooks to be invoked on component VNodes during patch
            var componentVNodeHooks = {
                init: function init(vnode, hydrating, parentElm, refElm) {
                    if (vnode.componentInstance &&
                        !vnode.componentInstance._isDestroyed &&
                        vnode.data.keepAlive) {
                        // kept-alive components, treat as a patch
                        var mountedNode = vnode; // work around flow
                        componentVNodeHooks.prepatch(mountedNode, mountedNode);
                    }
                    else {
                        var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance, parentElm, refElm);
                        child.$mount(hydrating ? vnode.elm : undefined, hydrating);
                    }
                },
                prepatch: function prepatch(oldVnode, vnode) {
                    var options = vnode.componentOptions;
                    var child = vnode.componentInstance = oldVnode.componentInstance;
                    updateChildComponent(child, options.propsData, // updated props
                    options.listeners, // updated listeners
                    vnode, // new parent vnode
                    options.children // new children
                    );
                },
                insert: function insert(vnode) {
                    var context = vnode.context;
                    var componentInstance = vnode.componentInstance;
                    if (!componentInstance._isMounted) {
                        componentInstance._isMounted = true;
                        callHook(componentInstance, 'mounted');
                    }
                    if (vnode.data.keepAlive) {
                        if (context._isMounted) {
                            // vue-router#1212
                            // During updates, a kept-alive component's child components may
                            // change, so directly walking the tree here may call activated hooks
                            // on incorrect children. Instead we push them into a queue which will
                            // be processed after the whole patch process ended.
                            queueActivatedComponent(componentInstance);
                        }
                        else {
                            activateChildComponent(componentInstance, true /* direct */);
                        }
                    }
                },
                destroy: function destroy(vnode) {
                    var componentInstance = vnode.componentInstance;
                    if (!componentInstance._isDestroyed) {
                        if (!vnode.data.keepAlive) {
                            componentInstance.$destroy();
                        }
                        else {
                            deactivateChildComponent(componentInstance, true /* direct */);
                        }
                    }
                }
            };
            var hooksToMerge = Object.keys(componentVNodeHooks);
            function createComponent(Ctor, data, context, children, tag) {
                if (isUndef(Ctor)) {
                    return;
                }
                var baseCtor = context.$options._base;
                // plain options object: turn it into a constructor
                if (isObject(Ctor)) {
                    Ctor = baseCtor.extend(Ctor);
                }
                // if at this stage it's not a constructor or an async component factory,
                // reject.
                if (typeof Ctor !== 'function') {
                    if (true) {
                        warn(("Invalid Component definition: " + (String(Ctor))), context);
                    }
                    return;
                }
                // async component
                var asyncFactory;
                if (isUndef(Ctor.cid)) {
                    asyncFactory = Ctor;
                    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
                    if (Ctor === undefined) {
                        // return a placeholder node for async component, which is rendered
                        // as a comment node but preserves all the raw information for the node.
                        // the information will be used for async server-rendering and hydration.
                        return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
                    }
                }
                data = data || {};
                // resolve constructor options in case global mixins are applied after
                // component constructor creation
                resolveConstructorOptions(Ctor);
                // transform component v-model data into props & events
                if (isDef(data.model)) {
                    transformModel(Ctor.options, data);
                }
                // extract props
                var propsData = extractPropsFromVNodeData(data, Ctor, tag);
                // functional component
                if (isTrue(Ctor.options.functional)) {
                    return createFunctionalComponent(Ctor, propsData, data, context, children);
                }
                // extract listeners, since these needs to be treated as
                // child component listeners instead of DOM listeners
                var listeners = data.on;
                // replace with listeners with .native modifier
                // so it gets processed during parent component patch.
                data.on = data.nativeOn;
                if (isTrue(Ctor.options.abstract)) {
                    // abstract components do not keep anything
                    // other than props & listeners & slot
                    // work around flow
                    var slot = data.slot;
                    data = {};
                    if (slot) {
                        data.slot = slot;
                    }
                }
                // install component management hooks onto the placeholder node
                installComponentHooks(data);
                // return a placeholder vnode
                var name = Ctor.options.name || tag;
                var vnode = new VNode(("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')), data, undefined, undefined, undefined, context, { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }, asyncFactory);
                // Weex specific: invoke recycle-list optimized @render function for
                // extracting cell-slot template.
                // https://github.com/Hanks10100/weex-native-directive/tree/master/component
                /* istanbul ignore if */
                return vnode;
            }
            function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
            parent, // activeInstance in lifecycle state
            parentElm, refElm) {
                var options = {
                    _isComponent: true,
                    parent: parent,
                    _parentVnode: vnode,
                    _parentElm: parentElm || null,
                    _refElm: refElm || null
                };
                // check inline-template render functions
                var inlineTemplate = vnode.data.inlineTemplate;
                if (isDef(inlineTemplate)) {
                    options.render = inlineTemplate.render;
                    options.staticRenderFns = inlineTemplate.staticRenderFns;
                }
                return new vnode.componentOptions.Ctor(options);
            }
            function installComponentHooks(data) {
                var hooks = data.hook || (data.hook = {});
                for (var i = 0; i < hooksToMerge.length; i++) {
                    var key = hooksToMerge[i];
                    hooks[key] = componentVNodeHooks[key];
                }
            }
            // transform component v-model info (value and callback) into
            // prop and event handler respectively.
            function transformModel(options, data) {
                var prop = (options.model && options.model.prop) || 'value';
                var event = (options.model && options.model.event) || 'input';
                (data.props || (data.props = {}))[prop] = data.model.value;
                var on = data.on || (data.on = {});
                if (isDef(on[event])) {
                    on[event] = [data.model.callback].concat(on[event]);
                }
                else {
                    on[event] = data.model.callback;
                }
            }
            /*  */
            var SIMPLE_NORMALIZE = 1;
            var ALWAYS_NORMALIZE = 2;
            // wrapper function for providing a more flexible interface
            // without getting yelled at by flow
            function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
                if (Array.isArray(data) || isPrimitive(data)) {
                    normalizationType = children;
                    children = data;
                    data = undefined;
                }
                if (isTrue(alwaysNormalize)) {
                    normalizationType = ALWAYS_NORMALIZE;
                }
                return _createElement(context, tag, data, children, normalizationType);
            }
            function _createElement(context, tag, data, children, normalizationType) {
                if (isDef(data) && isDef((data).__ob__)) {
                    true && warn("Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
                        'Always create fresh vnode data objects in each render!', context);
                    return createEmptyVNode();
                }
                // object syntax in v-bind
                if (isDef(data) && isDef(data.is)) {
                    tag = data.is;
                }
                if (!tag) {
                    // in case of component :is set to falsy value
                    return createEmptyVNode();
                }
                // warn against non-primitive key
                if (true &&
                    isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
                    {
                        warn('Avoid using non-primitive value as key, ' +
                            'use string/number value instead.', context);
                    }
                }
                // support single function children as default scoped slot
                if (Array.isArray(children) &&
                    typeof children[0] === 'function') {
                    data = data || {};
                    data.scopedSlots = { default: children[0] };
                    children.length = 0;
                }
                if (normalizationType === ALWAYS_NORMALIZE) {
                    children = normalizeChildren(children);
                }
                else if (normalizationType === SIMPLE_NORMALIZE) {
                    children = simpleNormalizeChildren(children);
                }
                var vnode, ns;
                if (typeof tag === 'string') {
                    var Ctor;
                    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
                    if (config.isReservedTag(tag)) {
                        // platform built-in elements
                        vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
                    }
                    else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
                        // component
                        vnode = createComponent(Ctor, data, context, children, tag);
                    }
                    else {
                        // unknown or unlisted namespaced elements
                        // check at runtime because it may get assigned a namespace when its
                        // parent normalizes children
                        vnode = new VNode(tag, data, children, undefined, undefined, context);
                    }
                }
                else {
                    // direct component options / constructor
                    vnode = createComponent(tag, data, context, children);
                }
                if (Array.isArray(vnode)) {
                    return vnode;
                }
                else if (isDef(vnode)) {
                    if (isDef(ns)) {
                        applyNS(vnode, ns);
                    }
                    if (isDef(data)) {
                        registerDeepBindings(data);
                    }
                    return vnode;
                }
                else {
                    return createEmptyVNode();
                }
            }
            function applyNS(vnode, ns, force) {
                vnode.ns = ns;
                if (vnode.tag === 'foreignObject') {
                    // use default namespace inside foreignObject
                    ns = undefined;
                    force = true;
                }
                if (isDef(vnode.children)) {
                    for (var i = 0, l = vnode.children.length; i < l; i++) {
                        var child = vnode.children[i];
                        if (isDef(child.tag) && (isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
                            applyNS(child, ns, force);
                        }
                    }
                }
            }
            // ref #5318
            // necessary to ensure parent re-render when deep bindings like :style and
            // :class are used on slot nodes
            function registerDeepBindings(data) {
                if (isObject(data.style)) {
                    traverse(data.style);
                }
                if (isObject(data.class)) {
                    traverse(data.class);
                }
            }
            /*  */
            function initRender(vm) {
                vm._vnode = null; // the root of the child tree
                vm._staticTrees = null; // v-once cached trees
                var options = vm.$options;
                var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
                var renderContext = parentVnode && parentVnode.context;
                vm.$slots = resolveSlots(options._renderChildren, renderContext);
                vm.$scopedSlots = emptyObject;
                // bind the createElement fn to this instance
                // so that we get proper render context inside it.
                // args order: tag, data, children, normalizationType, alwaysNormalize
                // internal version is used by render functions compiled from templates
                vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
                // normalization is always applied for the public version, used in
                // user-written render functions.
                vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
                // $attrs & $listeners are exposed for easier HOC creation.
                // they need to be reactive so that HOCs using them are always updated
                var parentData = parentVnode && parentVnode.data;
                /* istanbul ignore else */
                if (true) {
                    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
                        !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
                    }, true);
                    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
                        !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
                    }, true);
                }
                else { }
            }
            function renderMixin(Vue) {
                // install runtime convenience helpers
                installRenderHelpers(Vue.prototype);
                Vue.prototype.$nextTick = function (fn) {
                    return nextTick(fn, this);
                };
                Vue.prototype._render = function () {
                    var vm = this;
                    var ref = vm.$options;
                    var render = ref.render;
                    var _parentVnode = ref._parentVnode;
                    // reset _rendered flag on slots for duplicate slot check
                    if (true) {
                        for (var key in vm.$slots) {
                            // $flow-disable-line
                            vm.$slots[key]._rendered = false;
                        }
                    }
                    if (_parentVnode) {
                        vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
                    }
                    // set parent vnode. this allows render functions to have access
                    // to the data on the placeholder node.
                    vm.$vnode = _parentVnode;
                    // render self
                    var vnode;
                    try {
                        vnode = render.call(vm._renderProxy, vm.$createElement);
                    }
                    catch (e) {
                        handleError(e, vm, "render");
                        // return error render result,
                        // or previous vnode to prevent render error causing blank component
                        /* istanbul ignore else */
                        if (true) {
                            if (vm.$options.renderError) {
                                try {
                                    vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
                                }
                                catch (e) {
                                    handleError(e, vm, "renderError");
                                    vnode = vm._vnode;
                                }
                            }
                            else {
                                vnode = vm._vnode;
                            }
                        }
                        else { }
                    }
                    // return empty vnode in case the render function errored out
                    if (!(vnode instanceof VNode)) {
                        if (true && Array.isArray(vnode)) {
                            warn('Multiple root nodes returned from render function. Render function ' +
                                'should return a single root node.', vm);
                        }
                        vnode = createEmptyVNode();
                    }
                    // set parent
                    vnode.parent = _parentVnode;
                    return vnode;
                };
            }
            /*  */
            var uid$3 = 0;
            function initMixin(Vue) {
                Vue.prototype._init = function (options) {
                    var vm = this;
                    // a uid
                    vm._uid = uid$3++;
                    var startTag, endTag;
                    /* istanbul ignore if */
                    if (true && config.performance && mark) {
                        startTag = "vue-perf-start:" + (vm._uid);
                        endTag = "vue-perf-end:" + (vm._uid);
                        mark(startTag);
                    }
                    // a flag to avoid this being observed
                    vm._isVue = true;
                    // merge options
                    if (options && options._isComponent) {
                        // optimize internal component instantiation
                        // since dynamic options merging is pretty slow, and none of the
                        // internal component options needs special treatment.
                        initInternalComponent(vm, options);
                    }
                    else {
                        vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
                    }
                    /* istanbul ignore else */
                    if (true) {
                        initProxy(vm);
                    }
                    else { }
                    // expose real self
                    vm._self = vm;
                    initLifecycle(vm);
                    initEvents(vm);
                    initRender(vm);
                    callHook(vm, 'beforeCreate');
                    initInjections(vm); // resolve injections before data/props
                    initState(vm);
                    initProvide(vm); // resolve provide after data/props
                    callHook(vm, 'created');
                    /* istanbul ignore if */
                    if (true && config.performance && mark) {
                        vm._name = formatComponentName(vm, false);
                        mark(endTag);
                        measure(("vue " + (vm._name) + " init"), startTag, endTag);
                    }
                    if (vm.$options.el) {
                        vm.$mount(vm.$options.el);
                    }
                };
            }
            function initInternalComponent(vm, options) {
                var opts = vm.$options = Object.create(vm.constructor.options);
                // doing this because it's faster than dynamic enumeration.
                var parentVnode = options._parentVnode;
                opts.parent = options.parent;
                opts._parentVnode = parentVnode;
                opts._parentElm = options._parentElm;
                opts._refElm = options._refElm;
                var vnodeComponentOptions = parentVnode.componentOptions;
                opts.propsData = vnodeComponentOptions.propsData;
                opts._parentListeners = vnodeComponentOptions.listeners;
                opts._renderChildren = vnodeComponentOptions.children;
                opts._componentTag = vnodeComponentOptions.tag;
                if (options.render) {
                    opts.render = options.render;
                    opts.staticRenderFns = options.staticRenderFns;
                }
            }
            function resolveConstructorOptions(Ctor) {
                var options = Ctor.options;
                if (Ctor.super) {
                    var superOptions = resolveConstructorOptions(Ctor.super);
                    var cachedSuperOptions = Ctor.superOptions;
                    if (superOptions !== cachedSuperOptions) {
                        // super option changed,
                        // need to resolve new options.
                        Ctor.superOptions = superOptions;
                        // check if there are any late-modified/attached options (#4976)
                        var modifiedOptions = resolveModifiedOptions(Ctor);
                        // update base extend options
                        if (modifiedOptions) {
                            extend(Ctor.extendOptions, modifiedOptions);
                        }
                        options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
                        if (options.name) {
                            options.components[options.name] = Ctor;
                        }
                    }
                }
                return options;
            }
            function resolveModifiedOptions(Ctor) {
                var modified;
                var latest = Ctor.options;
                var extended = Ctor.extendOptions;
                var sealed = Ctor.sealedOptions;
                for (var key in latest) {
                    if (latest[key] !== sealed[key]) {
                        if (!modified) {
                            modified = {};
                        }
                        modified[key] = dedupe(latest[key], extended[key], sealed[key]);
                    }
                }
                return modified;
            }
            function dedupe(latest, extended, sealed) {
                // compare latest and sealed to ensure lifecycle hooks won't be duplicated
                // between merges
                if (Array.isArray(latest)) {
                    var res = [];
                    sealed = Array.isArray(sealed) ? sealed : [sealed];
                    extended = Array.isArray(extended) ? extended : [extended];
                    for (var i = 0; i < latest.length; i++) {
                        // push original options and not sealed options to exclude duplicated options
                        if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
                            res.push(latest[i]);
                        }
                    }
                    return res;
                }
                else {
                    return latest;
                }
            }
            function Vue(options) {
                if (true &&
                    !(this instanceof Vue)) {
                    warn('Vue is a constructor and should be called with the `new` keyword');
                }
                this._init(options);
            }
            initMixin(Vue);
            stateMixin(Vue);
            eventsMixin(Vue);
            lifecycleMixin(Vue);
            renderMixin(Vue);
            /*  */
            function initUse(Vue) {
                Vue.use = function (plugin) {
                    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
                    if (installedPlugins.indexOf(plugin) > -1) {
                        return this;
                    }
                    // additional parameters
                    var args = toArray(arguments, 1);
                    args.unshift(this);
                    if (typeof plugin.install === 'function') {
                        plugin.install.apply(plugin, args);
                    }
                    else if (typeof plugin === 'function') {
                        plugin.apply(null, args);
                    }
                    installedPlugins.push(plugin);
                    return this;
                };
            }
            /*  */
            function initMixin$1(Vue) {
                Vue.mixin = function (mixin) {
                    this.options = mergeOptions(this.options, mixin);
                    return this;
                };
            }
            /*  */
            function initExtend(Vue) {
                /**
                 * Each instance constructor, including Vue, has a unique
                 * cid. This enables us to create wrapped "child
                 * constructors" for prototypal inheritance and cache them.
                 */
                Vue.cid = 0;
                var cid = 1;
                /**
                 * Class inheritance
                 */
                Vue.extend = function (extendOptions) {
                    extendOptions = extendOptions || {};
                    var Super = this;
                    var SuperId = Super.cid;
                    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
                    if (cachedCtors[SuperId]) {
                        return cachedCtors[SuperId];
                    }
                    var name = extendOptions.name || Super.options.name;
                    if (true && name) {
                        validateComponentName(name);
                    }
                    var Sub = function VueComponent(options) {
                        this._init(options);
                    };
                    Sub.prototype = Object.create(Super.prototype);
                    Sub.prototype.constructor = Sub;
                    Sub.cid = cid++;
                    Sub.options = mergeOptions(Super.options, extendOptions);
                    Sub['super'] = Super;
                    // For props and computed properties, we define the proxy getters on
                    // the Vue instances at extension time, on the extended prototype. This
                    // avoids Object.defineProperty calls for each instance created.
                    if (Sub.options.props) {
                        initProps$1(Sub);
                    }
                    if (Sub.options.computed) {
                        initComputed$1(Sub);
                    }
                    // allow further extension/mixin/plugin usage
                    Sub.extend = Super.extend;
                    Sub.mixin = Super.mixin;
                    Sub.use = Super.use;
                    // create asset registers, so extended classes
                    // can have their private assets too.
                    ASSET_TYPES.forEach(function (type) {
                        Sub[type] = Super[type];
                    });
                    // enable recursive self-lookup
                    if (name) {
                        Sub.options.components[name] = Sub;
                    }
                    // keep a reference to the super options at extension time.
                    // later at instantiation we can check if Super's options have
                    // been updated.
                    Sub.superOptions = Super.options;
                    Sub.extendOptions = extendOptions;
                    Sub.sealedOptions = extend({}, Sub.options);
                    // cache constructor
                    cachedCtors[SuperId] = Sub;
                    return Sub;
                };
            }
            function initProps$1(Comp) {
                var props = Comp.options.props;
                for (var key in props) {
                    proxy(Comp.prototype, "_props", key);
                }
            }
            function initComputed$1(Comp) {
                var computed = Comp.options.computed;
                for (var key in computed) {
                    defineComputed(Comp.prototype, key, computed[key]);
                }
            }
            /*  */
            function initAssetRegisters(Vue) {
                /**
                 * Create asset registration methods.
                 */
                ASSET_TYPES.forEach(function (type) {
                    Vue[type] = function (id, definition) {
                        if (!definition) {
                            return this.options[type + 's'][id];
                        }
                        else {
                            /* istanbul ignore if */
                            if (true && type === 'component') {
                                validateComponentName(id);
                            }
                            if (type === 'component' && isPlainObject(definition)) {
                                definition.name = definition.name || id;
                                definition = this.options._base.extend(definition);
                            }
                            if (type === 'directive' && typeof definition === 'function') {
                                definition = { bind: definition, update: definition };
                            }
                            this.options[type + 's'][id] = definition;
                            return definition;
                        }
                    };
                });
            }
            /*  */
            function getComponentName(opts) {
                return opts && (opts.Ctor.options.name || opts.tag);
            }
            function matches(pattern, name) {
                if (Array.isArray(pattern)) {
                    return pattern.indexOf(name) > -1;
                }
                else if (typeof pattern === 'string') {
                    return pattern.split(',').indexOf(name) > -1;
                }
                else if (isRegExp(pattern)) {
                    return pattern.test(name);
                }
                /* istanbul ignore next */
                return false;
            }
            function pruneCache(keepAliveInstance, filter) {
                var cache = keepAliveInstance.cache;
                var keys = keepAliveInstance.keys;
                var _vnode = keepAliveInstance._vnode;
                for (var key in cache) {
                    var cachedNode = cache[key];
                    if (cachedNode) {
                        var name = getComponentName(cachedNode.componentOptions);
                        if (name && !filter(name)) {
                            pruneCacheEntry(cache, key, keys, _vnode);
                        }
                    }
                }
            }
            function pruneCacheEntry(cache, key, keys, current) {
                var cached$$1 = cache[key];
                if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
                    cached$$1.componentInstance.$destroy();
                }
                cache[key] = null;
                remove(keys, key);
            }
            var patternTypes = [String, RegExp, Array];
            var KeepAlive = {
                name: 'keep-alive',
                abstract: true,
                props: {
                    include: patternTypes,
                    exclude: patternTypes,
                    max: [String, Number]
                },
                created: function created() {
                    this.cache = Object.create(null);
                    this.keys = [];
                },
                destroyed: function destroyed() {
                    var this$1 = this;
                    for (var key in this$1.cache) {
                        pruneCacheEntry(this$1.cache, key, this$1.keys);
                    }
                },
                mounted: function mounted() {
                    var this$1 = this;
                    this.$watch('include', function (val) {
                        pruneCache(this$1, function (name) { return matches(val, name); });
                    });
                    this.$watch('exclude', function (val) {
                        pruneCache(this$1, function (name) { return !matches(val, name); });
                    });
                },
                render: function render() {
                    var slot = this.$slots.default;
                    var vnode = getFirstComponentChild(slot);
                    var componentOptions = vnode && vnode.componentOptions;
                    if (componentOptions) {
                        // check pattern
                        var name = getComponentName(componentOptions);
                        var ref = this;
                        var include = ref.include;
                        var exclude = ref.exclude;
                        if (
                        // not included
                        (include && (!name || !matches(include, name))) ||
                            // excluded
                            (exclude && name && matches(exclude, name))) {
                            return vnode;
                        }
                        var ref$1 = this;
                        var cache = ref$1.cache;
                        var keys = ref$1.keys;
                        var key = vnode.key == null
                            // same constructor may get registered as different local components
                            // so cid alone is not enough (#3269)
                            ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
                            : vnode.key;
                        if (cache[key]) {
                            vnode.componentInstance = cache[key].componentInstance;
                            // make current key freshest
                            remove(keys, key);
                            keys.push(key);
                        }
                        else {
                            cache[key] = vnode;
                            keys.push(key);
                            // prune oldest entry
                            if (this.max && keys.length > parseInt(this.max)) {
                                pruneCacheEntry(cache, keys[0], keys, this._vnode);
                            }
                        }
                        vnode.data.keepAlive = true;
                    }
                    return vnode || (slot && slot[0]);
                }
            };
            var builtInComponents = {
                KeepAlive: KeepAlive
            };
            /*  */
            function initGlobalAPI(Vue) {
                // config
                var configDef = {};
                configDef.get = function () { return config; };
                if (true) {
                    configDef.set = function () {
                        warn('Do not replace the Vue.config object, set individual fields instead.');
                    };
                }
                Object.defineProperty(Vue, 'config', configDef);
                // exposed util methods.
                // NOTE: these are not considered part of the public API - avoid relying on
                // them unless you are aware of the risk.
                Vue.util = {
                    warn: warn,
                    extend: extend,
                    mergeOptions: mergeOptions,
                    defineReactive: defineReactive
                };
                Vue.set = set;
                Vue.delete = del;
                Vue.nextTick = nextTick;
                Vue.options = Object.create(null);
                ASSET_TYPES.forEach(function (type) {
                    Vue.options[type + 's'] = Object.create(null);
                });
                // this is used to identify the "base" constructor to extend all plain-object
                // components with in Weex's multi-instance scenarios.
                Vue.options._base = Vue;
                extend(Vue.options.components, builtInComponents);
                initUse(Vue);
                initMixin$1(Vue);
                initExtend(Vue);
                initAssetRegisters(Vue);
            }
            initGlobalAPI(Vue);
            Object.defineProperty(Vue.prototype, '$isServer', {
                get: isServerRendering
            });
            Object.defineProperty(Vue.prototype, '$ssrContext', {
                get: function get() {
                    /* istanbul ignore next */
                    return this.$vnode && this.$vnode.ssrContext;
                }
            });
            // expose FunctionalRenderContext for ssr runtime helper installation
            Object.defineProperty(Vue, 'FunctionalRenderContext', {
                value: FunctionalRenderContext
            });
            Vue.version = '2.5.17';
            /*  */
            // these are reserved for web because they are directly compiled away
            // during template compilation
            var isReservedAttr = makeMap('style,class');
            // attributes that should be using props for binding
            var acceptValue = makeMap('input,textarea,option,select,progress');
            var mustUseProp = function (tag, type, attr) {
                return ((attr === 'value' && acceptValue(tag)) && type !== 'button' ||
                    (attr === 'selected' && tag === 'option') ||
                    (attr === 'checked' && tag === 'input') ||
                    (attr === 'muted' && tag === 'video'));
            };
            var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
            var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
                'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
                'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
                'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
                'required,reversed,scoped,seamless,selected,sortable,translate,' +
                'truespeed,typemustmatch,visible');
            var xlinkNS = 'http://www.w3.org/1999/xlink';
            var isXlink = function (name) {
                return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
            };
            var getXlinkProp = function (name) {
                return isXlink(name) ? name.slice(6, name.length) : '';
            };
            var isFalsyAttrValue = function (val) {
                return val == null || val === false;
            };
            /*  */
            function genClassForVnode(vnode) {
                var data = vnode.data;
                var parentNode = vnode;
                var childNode = vnode;
                while (isDef(childNode.componentInstance)) {
                    childNode = childNode.componentInstance._vnode;
                    if (childNode && childNode.data) {
                        data = mergeClassData(childNode.data, data);
                    }
                }
                while (isDef(parentNode = parentNode.parent)) {
                    if (parentNode && parentNode.data) {
                        data = mergeClassData(data, parentNode.data);
                    }
                }
                return renderClass(data.staticClass, data.class);
            }
            function mergeClassData(child, parent) {
                return {
                    staticClass: concat(child.staticClass, parent.staticClass),
                    class: isDef(child.class)
                        ? [child.class, parent.class]
                        : parent.class
                };
            }
            function renderClass(staticClass, dynamicClass) {
                if (isDef(staticClass) || isDef(dynamicClass)) {
                    return concat(staticClass, stringifyClass(dynamicClass));
                }
                /* istanbul ignore next */
                return '';
            }
            function concat(a, b) {
                return a ? b ? (a + ' ' + b) : a : (b || '');
            }
            function stringifyClass(value) {
                if (Array.isArray(value)) {
                    return stringifyArray(value);
                }
                if (isObject(value)) {
                    return stringifyObject(value);
                }
                if (typeof value === 'string') {
                    return value;
                }
                /* istanbul ignore next */
                return '';
            }
            function stringifyArray(value) {
                var res = '';
                var stringified;
                for (var i = 0, l = value.length; i < l; i++) {
                    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
                        if (res) {
                            res += ' ';
                        }
                        res += stringified;
                    }
                }
                return res;
            }
            function stringifyObject(value) {
                var res = '';
                for (var key in value) {
                    if (value[key]) {
                        if (res) {
                            res += ' ';
                        }
                        res += key;
                    }
                }
                return res;
            }
            /*  */
            var namespaceMap = {
                svg: 'http://www.w3.org/2000/svg',
                math: 'http://www.w3.org/1998/Math/MathML'
            };
            var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' +
                'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
                'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
                'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
                's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
                'embed,object,param,source,canvas,script,noscript,del,ins,' +
                'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
                'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
                'output,progress,select,textarea,' +
                'details,dialog,menu,menuitem,summary,' +
                'content,element,shadow,template,blockquote,iframe,tfoot');
            // this map is intentionally selective, only covering SVG elements that may
            // contain child elements.
            var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
                'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
                'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);
            var isReservedTag = function (tag) {
                return isHTMLTag(tag) || isSVG(tag);
            };
            function getTagNamespace(tag) {
                if (isSVG(tag)) {
                    return 'svg';
                }
                // basic support for MathML
                // note it doesn't support other MathML elements being component roots
                if (tag === 'math') {
                    return 'math';
                }
            }
            var unknownElementCache = Object.create(null);
            function isUnknownElement(tag) {
                /* istanbul ignore if */
                if (!inBrowser) {
                    return true;
                }
                if (isReservedTag(tag)) {
                    return false;
                }
                tag = tag.toLowerCase();
                /* istanbul ignore if */
                if (unknownElementCache[tag] != null) {
                    return unknownElementCache[tag];
                }
                var el = document.createElement(tag);
                if (tag.indexOf('-') > -1) {
                    // http://stackoverflow.com/a/28210364/1070244
                    return (unknownElementCache[tag] = (el.constructor === window.HTMLUnknownElement ||
                        el.constructor === window.HTMLElement));
                }
                else {
                    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()));
                }
            }
            var isTextInputType = makeMap('text,number,password,search,email,tel,url');
            /*  */
            /**
             * Query an element selector if it's not an element already.
             */
            function query(el) {
                if (typeof el === 'string') {
                    var selected = document.querySelector(el);
                    if (!selected) {
                        true && warn('Cannot find element: ' + el);
                        return document.createElement('div');
                    }
                    return selected;
                }
                else {
                    return el;
                }
            }
            /*  */
            function createElement$1(tagName, vnode) {
                var elm = document.createElement(tagName);
                if (tagName !== 'select') {
                    return elm;
                }
                // false or null will remove the attribute but undefined will not
                if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
                    elm.setAttribute('multiple', 'multiple');
                }
                return elm;
            }
            function createElementNS(namespace, tagName) {
                return document.createElementNS(namespaceMap[namespace], tagName);
            }
            function createTextNode(text) {
                return document.createTextNode(text);
            }
            function createComment(text) {
                return document.createComment(text);
            }
            function insertBefore(parentNode, newNode, referenceNode) {
                parentNode.insertBefore(newNode, referenceNode);
            }
            function removeChild(node, child) {
                node.removeChild(child);
            }
            function appendChild(node, child) {
                node.appendChild(child);
            }
            function parentNode(node) {
                return node.parentNode;
            }
            function nextSibling(node) {
                return node.nextSibling;
            }
            function tagName(node) {
                return node.tagName;
            }
            function setTextContent(node, text) {
                node.textContent = text;
            }
            function setStyleScope(node, scopeId) {
                node.setAttribute(scopeId, '');
            }
            var nodeOps = Object.freeze({
                createElement: createElement$1,
                createElementNS: createElementNS,
                createTextNode: createTextNode,
                createComment: createComment,
                insertBefore: insertBefore,
                removeChild: removeChild,
                appendChild: appendChild,
                parentNode: parentNode,
                nextSibling: nextSibling,
                tagName: tagName,
                setTextContent: setTextContent,
                setStyleScope: setStyleScope
            });
            /*  */
            var ref = {
                create: function create(_, vnode) {
                    registerRef(vnode);
                },
                update: function update(oldVnode, vnode) {
                    if (oldVnode.data.ref !== vnode.data.ref) {
                        registerRef(oldVnode, true);
                        registerRef(vnode);
                    }
                },
                destroy: function destroy(vnode) {
                    registerRef(vnode, true);
                }
            };
            function registerRef(vnode, isRemoval) {
                var key = vnode.data.ref;
                if (!isDef(key)) {
                    return;
                }
                var vm = vnode.context;
                var ref = vnode.componentInstance || vnode.elm;
                var refs = vm.$refs;
                if (isRemoval) {
                    if (Array.isArray(refs[key])) {
                        remove(refs[key], ref);
                    }
                    else if (refs[key] === ref) {
                        refs[key] = undefined;
                    }
                }
                else {
                    if (vnode.data.refInFor) {
                        if (!Array.isArray(refs[key])) {
                            refs[key] = [ref];
                        }
                        else if (refs[key].indexOf(ref) < 0) {
                            // $flow-disable-line
                            refs[key].push(ref);
                        }
                    }
                    else {
                        refs[key] = ref;
                    }
                }
            }
            /**
             * Virtual DOM patching algorithm based on Snabbdom by
             * Simon Friis Vindum (@paldepind)
             * Licensed under the MIT License
             * https://github.com/paldepind/snabbdom/blob/master/LICENSE
             *
             * modified by Evan You (@yyx990803)
             *
             * Not type-checking this because this file is perf-critical and the cost
             * of making flow understand it is not worth it.
             */
            var emptyNode = new VNode('', {}, []);
            var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];
            function sameVnode(a, b) {
                return (a.key === b.key && ((a.tag === b.tag &&
                    a.isComment === b.isComment &&
                    isDef(a.data) === isDef(b.data) &&
                    sameInputType(a, b)) || (isTrue(a.isAsyncPlaceholder) &&
                    a.asyncFactory === b.asyncFactory &&
                    isUndef(b.asyncFactory.error))));
            }
            function sameInputType(a, b) {
                if (a.tag !== 'input') {
                    return true;
                }
                var i;
                var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
                var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
                return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
            }
            function createKeyToOldIdx(children, beginIdx, endIdx) {
                var i, key;
                var map = {};
                for (i = beginIdx; i <= endIdx; ++i) {
                    key = children[i].key;
                    if (isDef(key)) {
                        map[key] = i;
                    }
                }
                return map;
            }
            function createPatchFunction(backend) {
                var i, j;
                var cbs = {};
                var modules = backend.modules;
                var nodeOps = backend.nodeOps;
                for (i = 0; i < hooks.length; ++i) {
                    cbs[hooks[i]] = [];
                    for (j = 0; j < modules.length; ++j) {
                        if (isDef(modules[j][hooks[i]])) {
                            cbs[hooks[i]].push(modules[j][hooks[i]]);
                        }
                    }
                }
                function emptyNodeAt(elm) {
                    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
                }
                function createRmCb(childElm, listeners) {
                    function remove() {
                        if (--remove.listeners === 0) {
                            removeNode(childElm);
                        }
                    }
                    remove.listeners = listeners;
                    return remove;
                }
                function removeNode(el) {
                    var parent = nodeOps.parentNode(el);
                    // element may have already been removed due to v-html / v-text
                    if (isDef(parent)) {
                        nodeOps.removeChild(parent, el);
                    }
                }
                function isUnknownElement$$1(vnode, inVPre) {
                    return (!inVPre &&
                        !vnode.ns &&
                        !(config.ignoredElements.length &&
                            config.ignoredElements.some(function (ignore) {
                                return isRegExp(ignore)
                                    ? ignore.test(vnode.tag)
                                    : ignore === vnode.tag;
                            })) &&
                        config.isUnknownElement(vnode.tag));
                }
                var creatingElmInVPre = 0;
                function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
                    if (isDef(vnode.elm) && isDef(ownerArray)) {
                        // This vnode was used in a previous render!
                        // now it's used as a new node, overwriting its elm would cause
                        // potential patch errors down the road when it's used as an insertion
                        // reference node. Instead, we clone the node on-demand before creating
                        // associated DOM element for it.
                        vnode = ownerArray[index] = cloneVNode(vnode);
                    }
                    vnode.isRootInsert = !nested; // for transition enter check
                    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
                        return;
                    }
                    var data = vnode.data;
                    var children = vnode.children;
                    var tag = vnode.tag;
                    if (isDef(tag)) {
                        if (true) {
                            if (data && data.pre) {
                                creatingElmInVPre++;
                            }
                            if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
                                warn('Unknown custom element: <' + tag + '> - did you ' +
                                    'register the component correctly? For recursive components, ' +
                                    'make sure to provide the "name" option.', vnode.context);
                            }
                        }
                        vnode.elm = vnode.ns
                            ? nodeOps.createElementNS(vnode.ns, tag)
                            : nodeOps.createElement(tag, vnode);
                        setScope(vnode);
                        /* istanbul ignore if */
                        {
                            createChildren(vnode, children, insertedVnodeQueue);
                            if (isDef(data)) {
                                invokeCreateHooks(vnode, insertedVnodeQueue);
                            }
                            insert(parentElm, vnode.elm, refElm);
                        }
                        if (true && data && data.pre) {
                            creatingElmInVPre--;
                        }
                    }
                    else if (isTrue(vnode.isComment)) {
                        vnode.elm = nodeOps.createComment(vnode.text);
                        insert(parentElm, vnode.elm, refElm);
                    }
                    else {
                        vnode.elm = nodeOps.createTextNode(vnode.text);
                        insert(parentElm, vnode.elm, refElm);
                    }
                }
                function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
                    var i = vnode.data;
                    if (isDef(i)) {
                        var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
                        if (isDef(i = i.hook) && isDef(i = i.init)) {
                            i(vnode, false /* hydrating */, parentElm, refElm);
                        }
                        // after calling the init hook, if the vnode is a child component
                        // it should've created a child instance and mounted it. the child
                        // component also has set the placeholder vnode's elm.
                        // in that case we can just return the element and be done.
                        if (isDef(vnode.componentInstance)) {
                            initComponent(vnode, insertedVnodeQueue);
                            if (isTrue(isReactivated)) {
                                reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
                            }
                            return true;
                        }
                    }
                }
                function initComponent(vnode, insertedVnodeQueue) {
                    if (isDef(vnode.data.pendingInsert)) {
                        insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
                        vnode.data.pendingInsert = null;
                    }
                    vnode.elm = vnode.componentInstance.$el;
                    if (isPatchable(vnode)) {
                        invokeCreateHooks(vnode, insertedVnodeQueue);
                        setScope(vnode);
                    }
                    else {
                        // empty component root.
                        // skip all element-related modules except for ref (#3455)
                        registerRef(vnode);
                        // make sure to invoke the insert hook
                        insertedVnodeQueue.push(vnode);
                    }
                }
                function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
                    var i;
                    // hack for #4339: a reactivated component with inner transition
                    // does not trigger because the inner node's created hooks are not called
                    // again. It's not ideal to involve module-specific logic in here but
                    // there doesn't seem to be a better way to do it.
                    var innerNode = vnode;
                    while (innerNode.componentInstance) {
                        innerNode = innerNode.componentInstance._vnode;
                        if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
                            for (i = 0; i < cbs.activate.length; ++i) {
                                cbs.activate[i](emptyNode, innerNode);
                            }
                            insertedVnodeQueue.push(innerNode);
                            break;
                        }
                    }
                    // unlike a newly created component,
                    // a reactivated keep-alive component doesn't insert itself
                    insert(parentElm, vnode.elm, refElm);
                }
                function insert(parent, elm, ref$$1) {
                    if (isDef(parent)) {
                        if (isDef(ref$$1)) {
                            if (ref$$1.parentNode === parent) {
                                nodeOps.insertBefore(parent, elm, ref$$1);
                            }
                        }
                        else {
                            nodeOps.appendChild(parent, elm);
                        }
                    }
                }
                function createChildren(vnode, children, insertedVnodeQueue) {
                    if (Array.isArray(children)) {
                        if (true) {
                            checkDuplicateKeys(children);
                        }
                        for (var i = 0; i < children.length; ++i) {
                            createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
                        }
                    }
                    else if (isPrimitive(vnode.text)) {
                        nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
                    }
                }
                function isPatchable(vnode) {
                    while (vnode.componentInstance) {
                        vnode = vnode.componentInstance._vnode;
                    }
                    return isDef(vnode.tag);
                }
                function invokeCreateHooks(vnode, insertedVnodeQueue) {
                    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                        cbs.create[i$1](emptyNode, vnode);
                    }
                    i = vnode.data.hook; // Reuse variable
                    if (isDef(i)) {
                        if (isDef(i.create)) {
                            i.create(emptyNode, vnode);
                        }
                        if (isDef(i.insert)) {
                            insertedVnodeQueue.push(vnode);
                        }
                    }
                }
                // set scope id attribute for scoped CSS.
                // this is implemented as a special case to avoid the overhead
                // of going through the normal attribute patching process.
                function setScope(vnode) {
                    var i;
                    if (isDef(i = vnode.fnScopeId)) {
                        nodeOps.setStyleScope(vnode.elm, i);
                    }
                    else {
                        var ancestor = vnode;
                        while (ancestor) {
                            if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
                                nodeOps.setStyleScope(vnode.elm, i);
                            }
                            ancestor = ancestor.parent;
                        }
                    }
                    // for slot content they should also get the scopeId from the host instance.
                    if (isDef(i = activeInstance) &&
                        i !== vnode.context &&
                        i !== vnode.fnContext &&
                        isDef(i = i.$options._scopeId)) {
                        nodeOps.setStyleScope(vnode.elm, i);
                    }
                }
                function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
                    for (; startIdx <= endIdx; ++startIdx) {
                        createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
                    }
                }
                function invokeDestroyHook(vnode) {
                    var i, j;
                    var data = vnode.data;
                    if (isDef(data)) {
                        if (isDef(i = data.hook) && isDef(i = i.destroy)) {
                            i(vnode);
                        }
                        for (i = 0; i < cbs.destroy.length; ++i) {
                            cbs.destroy[i](vnode);
                        }
                    }
                    if (isDef(i = vnode.children)) {
                        for (j = 0; j < vnode.children.length; ++j) {
                            invokeDestroyHook(vnode.children[j]);
                        }
                    }
                }
                function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
                    for (; startIdx <= endIdx; ++startIdx) {
                        var ch = vnodes[startIdx];
                        if (isDef(ch)) {
                            if (isDef(ch.tag)) {
                                removeAndInvokeRemoveHook(ch);
                                invokeDestroyHook(ch);
                            }
                            else { // Text node
                                removeNode(ch.elm);
                            }
                        }
                    }
                }
                function removeAndInvokeRemoveHook(vnode, rm) {
                    if (isDef(rm) || isDef(vnode.data)) {
                        var i;
                        var listeners = cbs.remove.length + 1;
                        if (isDef(rm)) {
                            // we have a recursively passed down rm callback
                            // increase the listeners count
                            rm.listeners += listeners;
                        }
                        else {
                            // directly removing
                            rm = createRmCb(vnode.elm, listeners);
                        }
                        // recursively invoke hooks on child component root node
                        if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
                            removeAndInvokeRemoveHook(i, rm);
                        }
                        for (i = 0; i < cbs.remove.length; ++i) {
                            cbs.remove[i](vnode, rm);
                        }
                        if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
                            i(vnode, rm);
                        }
                        else {
                            rm();
                        }
                    }
                    else {
                        removeNode(vnode.elm);
                    }
                }
                function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
                    var oldStartIdx = 0;
                    var newStartIdx = 0;
                    var oldEndIdx = oldCh.length - 1;
                    var oldStartVnode = oldCh[0];
                    var oldEndVnode = oldCh[oldEndIdx];
                    var newEndIdx = newCh.length - 1;
                    var newStartVnode = newCh[0];
                    var newEndVnode = newCh[newEndIdx];
                    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
                    // removeOnly is a special flag used only by <transition-group>
                    // to ensure removed elements stay in correct relative positions
                    // during leaving transitions
                    var canMove = !removeOnly;
                    if (true) {
                        checkDuplicateKeys(newCh);
                    }
                    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
                        if (isUndef(oldStartVnode)) {
                            oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
                        }
                        else if (isUndef(oldEndVnode)) {
                            oldEndVnode = oldCh[--oldEndIdx];
                        }
                        else if (sameVnode(oldStartVnode, newStartVnode)) {
                            patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
                            oldStartVnode = oldCh[++oldStartIdx];
                            newStartVnode = newCh[++newStartIdx];
                        }
                        else if (sameVnode(oldEndVnode, newEndVnode)) {
                            patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
                            oldEndVnode = oldCh[--oldEndIdx];
                            newEndVnode = newCh[--newEndIdx];
                        }
                        else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
                            patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
                            canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
                            oldStartVnode = oldCh[++oldStartIdx];
                            newEndVnode = newCh[--newEndIdx];
                        }
                        else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
                            patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
                            canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
                            oldEndVnode = oldCh[--oldEndIdx];
                            newStartVnode = newCh[++newStartIdx];
                        }
                        else {
                            if (isUndef(oldKeyToIdx)) {
                                oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
                            }
                            idxInOld = isDef(newStartVnode.key)
                                ? oldKeyToIdx[newStartVnode.key]
                                : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
                            if (isUndef(idxInOld)) { // New element
                                createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                            }
                            else {
                                vnodeToMove = oldCh[idxInOld];
                                if (sameVnode(vnodeToMove, newStartVnode)) {
                                    patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
                                    oldCh[idxInOld] = undefined;
                                    canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
                                }
                                else {
                                    // same key but different element. treat as new element
                                    createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
                                }
                            }
                            newStartVnode = newCh[++newStartIdx];
                        }
                    }
                    if (oldStartIdx > oldEndIdx) {
                        refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
                        addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
                    }
                    else if (newStartIdx > newEndIdx) {
                        removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
                    }
                }
                function checkDuplicateKeys(children) {
                    var seenKeys = {};
                    for (var i = 0; i < children.length; i++) {
                        var vnode = children[i];
                        var key = vnode.key;
                        if (isDef(key)) {
                            if (seenKeys[key]) {
                                warn(("Duplicate keys detected: '" + key + "'. This may cause an update error."), vnode.context);
                            }
                            else {
                                seenKeys[key] = true;
                            }
                        }
                    }
                }
                function findIdxInOld(node, oldCh, start, end) {
                    for (var i = start; i < end; i++) {
                        var c = oldCh[i];
                        if (isDef(c) && sameVnode(node, c)) {
                            return i;
                        }
                    }
                }
                function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {
                    if (oldVnode === vnode) {
                        return;
                    }
                    var elm = vnode.elm = oldVnode.elm;
                    if (isTrue(oldVnode.isAsyncPlaceholder)) {
                        if (isDef(vnode.asyncFactory.resolved)) {
                            hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
                        }
                        else {
                            vnode.isAsyncPlaceholder = true;
                        }
                        return;
                    }
                    // reuse element for static trees.
                    // note we only do this if the vnode is cloned -
                    // if the new node is not cloned it means the render functions have been
                    // reset by the hot-reload-api and we need to do a proper re-render.
                    if (isTrue(vnode.isStatic) &&
                        isTrue(oldVnode.isStatic) &&
                        vnode.key === oldVnode.key &&
                        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
                        vnode.componentInstance = oldVnode.componentInstance;
                        return;
                    }
                    var i;
                    var data = vnode.data;
                    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
                        i(oldVnode, vnode);
                    }
                    var oldCh = oldVnode.children;
                    var ch = vnode.children;
                    if (isDef(data) && isPatchable(vnode)) {
                        for (i = 0; i < cbs.update.length; ++i) {
                            cbs.update[i](oldVnode, vnode);
                        }
                        if (isDef(i = data.hook) && isDef(i = i.update)) {
                            i(oldVnode, vnode);
                        }
                    }
                    if (isUndef(vnode.text)) {
                        if (isDef(oldCh) && isDef(ch)) {
                            if (oldCh !== ch) {
                                updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
                            }
                        }
                        else if (isDef(ch)) {
                            if (isDef(oldVnode.text)) {
                                nodeOps.setTextContent(elm, '');
                            }
                            addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
                        }
                        else if (isDef(oldCh)) {
                            removeVnodes(elm, oldCh, 0, oldCh.length - 1);
                        }
                        else if (isDef(oldVnode.text)) {
                            nodeOps.setTextContent(elm, '');
                        }
                    }
                    else if (oldVnode.text !== vnode.text) {
                        nodeOps.setTextContent(elm, vnode.text);
                    }
                    if (isDef(data)) {
                        if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
                            i(oldVnode, vnode);
                        }
                    }
                }
                function invokeInsertHook(vnode, queue, initial) {
                    // delay insert hooks for component root nodes, invoke them after the
                    // element is really inserted
                    if (isTrue(initial) && isDef(vnode.parent)) {
                        vnode.parent.data.pendingInsert = queue;
                    }
                    else {
                        for (var i = 0; i < queue.length; ++i) {
                            queue[i].data.hook.insert(queue[i]);
                        }
                    }
                }
                var hydrationBailed = false;
                // list of modules that can skip create hook during hydration because they
                // are already rendered on the client or has no need for initialization
                // Note: style is excluded because it relies on initial clone for future
                // deep updates (#7063).
                var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');
                // Note: this is a browser-only function so we can assume elms are DOM nodes.
                function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
                    var i;
                    var tag = vnode.tag;
                    var data = vnode.data;
                    var children = vnode.children;
                    inVPre = inVPre || (data && data.pre);
                    vnode.elm = elm;
                    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
                        vnode.isAsyncPlaceholder = true;
                        return true;
                    }
                    // assert node match
                    if (true) {
                        if (!assertNodeMatch(elm, vnode, inVPre)) {
                            return false;
                        }
                    }
                    if (isDef(data)) {
                        if (isDef(i = data.hook) && isDef(i = i.init)) {
                            i(vnode, true /* hydrating */);
                        }
                        if (isDef(i = vnode.componentInstance)) {
                            // child component. it should have hydrated its own tree.
                            initComponent(vnode, insertedVnodeQueue);
                            return true;
                        }
                    }
                    if (isDef(tag)) {
                        if (isDef(children)) {
                            // empty element, allow client to pick up and populate children
                            if (!elm.hasChildNodes()) {
                                createChildren(vnode, children, insertedVnodeQueue);
                            }
                            else {
                                // v-html and domProps: innerHTML
                                if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
                                    if (i !== elm.innerHTML) {
                                        /* istanbul ignore if */
                                        if (true &&
                                            typeof console !== 'undefined' &&
                                            !hydrationBailed) {
                                            hydrationBailed = true;
                                            console.warn('Parent: ', elm);
                                            console.warn('server innerHTML: ', i);
                                            console.warn('client innerHTML: ', elm.innerHTML);
                                        }
                                        return false;
                                    }
                                }
                                else {
                                    // iterate and compare children lists
                                    var childrenMatch = true;
                                    var childNode = elm.firstChild;
                                    for (var i$1 = 0; i$1 < children.length; i$1++) {
                                        if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                                            childrenMatch = false;
                                            break;
                                        }
                                        childNode = childNode.nextSibling;
                                    }
                                    // if childNode is not null, it means the actual childNodes list is
                                    // longer than the virtual children list.
                                    if (!childrenMatch || childNode) {
                                        /* istanbul ignore if */
                                        if (true &&
                                            typeof console !== 'undefined' &&
                                            !hydrationBailed) {
                                            hydrationBailed = true;
                                            console.warn('Parent: ', elm);
                                            console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
                                        }
                                        return false;
                                    }
                                }
                            }
                        }
                        if (isDef(data)) {
                            var fullInvoke = false;
                            for (var key in data) {
                                if (!isRenderedModule(key)) {
                                    fullInvoke = true;
                                    invokeCreateHooks(vnode, insertedVnodeQueue);
                                    break;
                                }
                            }
                            if (!fullInvoke && data['class']) {
                                // ensure collecting deps for deep class bindings for future updates
                                traverse(data['class']);
                            }
                        }
                    }
                    else if (elm.data !== vnode.text) {
                        elm.data = vnode.text;
                    }
                    return true;
                }
                function assertNodeMatch(node, vnode, inVPre) {
                    if (isDef(vnode.tag)) {
                        return vnode.tag.indexOf('vue-component') === 0 || (!isUnknownElement$$1(vnode, inVPre) &&
                            vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase()));
                    }
                    else {
                        return node.nodeType === (vnode.isComment ? 8 : 3);
                    }
                }
                return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
                    if (isUndef(vnode)) {
                        if (isDef(oldVnode)) {
                            invokeDestroyHook(oldVnode);
                        }
                        return;
                    }
                    var isInitialPatch = false;
                    var insertedVnodeQueue = [];
                    if (isUndef(oldVnode)) {
                        // empty mount (likely as component), create new root element
                        isInitialPatch = true;
                        createElm(vnode, insertedVnodeQueue, parentElm, refElm);
                    }
                    else {
                        var isRealElement = isDef(oldVnode.nodeType);
                        if (!isRealElement && sameVnode(oldVnode, vnode)) {
                            // patch existing root node
                            patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
                        }
                        else {
                            if (isRealElement) {
                                // mounting to a real element
                                // check if this is server-rendered content and if we can perform
                                // a successful hydration.
                                if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
                                    oldVnode.removeAttribute(SSR_ATTR);
                                    hydrating = true;
                                }
                                if (isTrue(hydrating)) {
                                    if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
                                        invokeInsertHook(vnode, insertedVnodeQueue, true);
                                        return oldVnode;
                                    }
                                    else if (true) {
                                        warn('The client-side rendered virtual DOM tree is not matching ' +
                                            'server-rendered content. This is likely caused by incorrect ' +
                                            'HTML markup, for example nesting block-level elements inside ' +
                                            '<p>, or missing <tbody>. Bailing hydration and performing ' +
                                            'full client-side render.');
                                    }
                                }
                                // either not server-rendered, or hydration failed.
                                // create an empty node and replace it
                                oldVnode = emptyNodeAt(oldVnode);
                            }
                            // replacing existing element
                            var oldElm = oldVnode.elm;
                            var parentElm$1 = nodeOps.parentNode(oldElm);
                            // create new node
                            createElm(vnode, insertedVnodeQueue, 
                            // extremely rare edge case: do not insert if old element is in a
                            // leaving transition. Only happens when combining transition +
                            // keep-alive + HOCs. (#4590)
                            oldElm._leaveCb ? null : parentElm$1, nodeOps.nextSibling(oldElm));
                            // update parent placeholder node element, recursively
                            if (isDef(vnode.parent)) {
                                var ancestor = vnode.parent;
                                var patchable = isPatchable(vnode);
                                while (ancestor) {
                                    for (var i = 0; i < cbs.destroy.length; ++i) {
                                        cbs.destroy[i](ancestor);
                                    }
                                    ancestor.elm = vnode.elm;
                                    if (patchable) {
                                        for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                                            cbs.create[i$1](emptyNode, ancestor);
                                        }
                                        // #6513
                                        // invoke insert hooks that may have been merged by create hooks.
                                        // e.g. for directives that uses the "inserted" hook.
                                        var insert = ancestor.data.hook.insert;
                                        if (insert.merged) {
                                            // start at index 1 to avoid re-invoking component mounted hook
                                            for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                                                insert.fns[i$2]();
                                            }
                                        }
                                    }
                                    else {
                                        registerRef(ancestor);
                                    }
                                    ancestor = ancestor.parent;
                                }
                            }
                            // destroy old node
                            if (isDef(parentElm$1)) {
                                removeVnodes(parentElm$1, [oldVnode], 0, 0);
                            }
                            else if (isDef(oldVnode.tag)) {
                                invokeDestroyHook(oldVnode);
                            }
                        }
                    }
                    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
                    return vnode.elm;
                };
            }
            /*  */
            var directives = {
                create: updateDirectives,
                update: updateDirectives,
                destroy: function unbindDirectives(vnode) {
                    updateDirectives(vnode, emptyNode);
                }
            };
            function updateDirectives(oldVnode, vnode) {
                if (oldVnode.data.directives || vnode.data.directives) {
                    _update(oldVnode, vnode);
                }
            }
            function _update(oldVnode, vnode) {
                var isCreate = oldVnode === emptyNode;
                var isDestroy = vnode === emptyNode;
                var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
                var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
                var dirsWithInsert = [];
                var dirsWithPostpatch = [];
                var key, oldDir, dir;
                for (key in newDirs) {
                    oldDir = oldDirs[key];
                    dir = newDirs[key];
                    if (!oldDir) {
                        // new directive, bind
                        callHook$1(dir, 'bind', vnode, oldVnode);
                        if (dir.def && dir.def.inserted) {
                            dirsWithInsert.push(dir);
                        }
                    }
                    else {
                        // existing directive, update
                        dir.oldValue = oldDir.value;
                        callHook$1(dir, 'update', vnode, oldVnode);
                        if (dir.def && dir.def.componentUpdated) {
                            dirsWithPostpatch.push(dir);
                        }
                    }
                }
                if (dirsWithInsert.length) {
                    var callInsert = function () {
                        for (var i = 0; i < dirsWithInsert.length; i++) {
                            callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
                        }
                    };
                    if (isCreate) {
                        mergeVNodeHook(vnode, 'insert', callInsert);
                    }
                    else {
                        callInsert();
                    }
                }
                if (dirsWithPostpatch.length) {
                    mergeVNodeHook(vnode, 'postpatch', function () {
                        for (var i = 0; i < dirsWithPostpatch.length; i++) {
                            callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
                        }
                    });
                }
                if (!isCreate) {
                    for (key in oldDirs) {
                        if (!newDirs[key]) {
                            // no longer present, unbind
                            callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
                        }
                    }
                }
            }
            var emptyModifiers = Object.create(null);
            function normalizeDirectives$1(dirs, vm) {
                var res = Object.create(null);
                if (!dirs) {
                    // $flow-disable-line
                    return res;
                }
                var i, dir;
                for (i = 0; i < dirs.length; i++) {
                    dir = dirs[i];
                    if (!dir.modifiers) {
                        // $flow-disable-line
                        dir.modifiers = emptyModifiers;
                    }
                    res[getRawDirName(dir)] = dir;
                    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
                }
                // $flow-disable-line
                return res;
            }
            function getRawDirName(dir) {
                return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')));
            }
            function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
                var fn = dir.def && dir.def[hook];
                if (fn) {
                    try {
                        fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
                    }
                    catch (e) {
                        handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
                    }
                }
            }
            var baseModules = [
                ref,
                directives
            ];
            /*  */
            function updateAttrs(oldVnode, vnode) {
                var opts = vnode.componentOptions;
                if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
                    return;
                }
                if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
                    return;
                }
                var key, cur, old;
                var elm = vnode.elm;
                var oldAttrs = oldVnode.data.attrs || {};
                var attrs = vnode.data.attrs || {};
                // clone observed objects, as the user probably wants to mutate it
                if (isDef(attrs.__ob__)) {
                    attrs = vnode.data.attrs = extend({}, attrs);
                }
                for (key in attrs) {
                    cur = attrs[key];
                    old = oldAttrs[key];
                    if (old !== cur) {
                        setAttr(elm, key, cur);
                    }
                }
                // #4391: in IE9, setting type can reset value for input[type=radio]
                // #6666: IE/Edge forces progress value down to 1 before setting a max
                /* istanbul ignore if */
                if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
                    setAttr(elm, 'value', attrs.value);
                }
                for (key in oldAttrs) {
                    if (isUndef(attrs[key])) {
                        if (isXlink(key)) {
                            elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
                        }
                        else if (!isEnumeratedAttr(key)) {
                            elm.removeAttribute(key);
                        }
                    }
                }
            }
            function setAttr(el, key, value) {
                if (el.tagName.indexOf('-') > -1) {
                    baseSetAttr(el, key, value);
                }
                else if (isBooleanAttr(key)) {
                    // set attribute for blank value
                    // e.g. <option disabled>Select one</option>
                    if (isFalsyAttrValue(value)) {
                        el.removeAttribute(key);
                    }
                    else {
                        // technically allowfullscreen is a boolean attribute for <iframe>,
                        // but Flash expects a value of "true" when used on <embed> tag
                        value = key === 'allowfullscreen' && el.tagName === 'EMBED'
                            ? 'true'
                            : key;
                        el.setAttribute(key, value);
                    }
                }
                else if (isEnumeratedAttr(key)) {
                    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
                }
                else if (isXlink(key)) {
                    if (isFalsyAttrValue(value)) {
                        el.removeAttributeNS(xlinkNS, getXlinkProp(key));
                    }
                    else {
                        el.setAttributeNS(xlinkNS, key, value);
                    }
                }
                else {
                    baseSetAttr(el, key, value);
                }
            }
            function baseSetAttr(el, key, value) {
                if (isFalsyAttrValue(value)) {
                    el.removeAttribute(key);
                }
                else {
                    // #7138: IE10 & 11 fires input event when setting placeholder on
                    // <textarea>... block the first input event and remove the blocker
                    // immediately.
                    /* istanbul ignore if */
                    if (isIE && !isIE9 &&
                        el.tagName === 'TEXTAREA' &&
                        key === 'placeholder' && !el.__ieph) {
                        var blocker = function (e) {
                            e.stopImmediatePropagation();
                            el.removeEventListener('input', blocker);
                        };
                        el.addEventListener('input', blocker);
                        // $flow-disable-line
                        el.__ieph = true; /* IE placeholder patched */
                    }
                    el.setAttribute(key, value);
                }
            }
            var attrs = {
                create: updateAttrs,
                update: updateAttrs
            };
            /*  */
            function updateClass(oldVnode, vnode) {
                var el = vnode.elm;
                var data = vnode.data;
                var oldData = oldVnode.data;
                if (isUndef(data.staticClass) &&
                    isUndef(data.class) && (isUndef(oldData) || (isUndef(oldData.staticClass) &&
                    isUndef(oldData.class)))) {
                    return;
                }
                var cls = genClassForVnode(vnode);
                // handle transition classes
                var transitionClass = el._transitionClasses;
                if (isDef(transitionClass)) {
                    cls = concat(cls, stringifyClass(transitionClass));
                }
                // set the class
                if (cls !== el._prevClass) {
                    el.setAttribute('class', cls);
                    el._prevClass = cls;
                }
            }
            var klass = {
                create: updateClass,
                update: updateClass
            };
            /*  */
            /*  */
            // add a raw attr (use this in preTransforms)
            // note: this only removes the attr from the Array (attrsList) so that it
            // doesn't get processed by processAttrs.
            // By default it does NOT remove it from the map (attrsMap) because the map is
            // needed during codegen.
            /*  */
            /**
             * Cross-platform code generation for component v-model
             */
            /**
             * Cross-platform codegen helper for generating v-model value assignment code.
             */
            /*  */
            // in some cases, the event used has to be determined at runtime
            // so we used some reserved tokens during compile.
            var RANGE_TOKEN = '__r';
            var CHECKBOX_RADIO_TOKEN = '__c';
            /*  */
            // normalize v-model event tokens that can only be determined at runtime.
            // it's important to place the event as the first in the array because
            // the whole point is ensuring the v-model callback gets called before
            // user-attached handlers.
            function normalizeEvents(on) {
                /* istanbul ignore if */
                if (isDef(on[RANGE_TOKEN])) {
                    // IE input[type=range] only supports `change` event
                    var event = isIE ? 'change' : 'input';
                    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
                    delete on[RANGE_TOKEN];
                }
                // This was originally intended to fix #4521 but no longer necessary
                // after 2.5. Keeping it for backwards compat with generated code from < 2.4
                /* istanbul ignore if */
                if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
                    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
                    delete on[CHECKBOX_RADIO_TOKEN];
                }
            }
            var target$1;
            function createOnceHandler(handler, event, capture) {
                var _target = target$1; // save current target element in closure
                return function onceHandler() {
                    var res = handler.apply(null, arguments);
                    if (res !== null) {
                        remove$2(event, onceHandler, capture, _target);
                    }
                };
            }
            function add$1(event, handler, once$$1, capture, passive) {
                handler = withMacroTask(handler);
                if (once$$1) {
                    handler = createOnceHandler(handler, event, capture);
                }
                target$1.addEventListener(event, handler, supportsPassive
                    ? { capture: capture, passive: passive }
                    : capture);
            }
            function remove$2(event, handler, capture, _target) {
                (_target || target$1).removeEventListener(event, handler._withTask || handler, capture);
            }
            function updateDOMListeners(oldVnode, vnode) {
                if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
                    return;
                }
                var on = vnode.data.on || {};
                var oldOn = oldVnode.data.on || {};
                target$1 = vnode.elm;
                normalizeEvents(on);
                updateListeners(on, oldOn, add$1, remove$2, vnode.context);
                target$1 = undefined;
            }
            var events = {
                create: updateDOMListeners,
                update: updateDOMListeners
            };
            /*  */
            function updateDOMProps(oldVnode, vnode) {
                if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
                    return;
                }
                var key, cur;
                var elm = vnode.elm;
                var oldProps = oldVnode.data.domProps || {};
                var props = vnode.data.domProps || {};
                // clone observed objects, as the user probably wants to mutate it
                if (isDef(props.__ob__)) {
                    props = vnode.data.domProps = extend({}, props);
                }
                for (key in oldProps) {
                    if (isUndef(props[key])) {
                        elm[key] = '';
                    }
                }
                for (key in props) {
                    cur = props[key];
                    // ignore children if the node has textContent or innerHTML,
                    // as these will throw away existing DOM nodes and cause removal errors
                    // on subsequent patches (#3360)
                    if (key === 'textContent' || key === 'innerHTML') {
                        if (vnode.children) {
                            vnode.children.length = 0;
                        }
                        if (cur === oldProps[key]) {
                            continue;
                        }
                        // #6601 work around Chrome version <= 55 bug where single textNode
                        // replaced by innerHTML/textContent retains its parentNode property
                        if (elm.childNodes.length === 1) {
                            elm.removeChild(elm.childNodes[0]);
                        }
                    }
                    if (key === 'value') {
                        // store value as _value as well since
                        // non-string values will be stringified
                        elm._value = cur;
                        // avoid resetting cursor position when value is the same
                        var strCur = isUndef(cur) ? '' : String(cur);
                        if (shouldUpdateValue(elm, strCur)) {
                            elm.value = strCur;
                        }
                    }
                    else {
                        elm[key] = cur;
                    }
                }
            }
            // check platforms/web/util/attrs.js acceptValue
            function shouldUpdateValue(elm, checkVal) {
                return (!elm.composing && (elm.tagName === 'OPTION' ||
                    isNotInFocusAndDirty(elm, checkVal) ||
                    isDirtyWithModifiers(elm, checkVal)));
            }
            function isNotInFocusAndDirty(elm, checkVal) {
                // return true when textbox (.number and .trim) loses focus and its value is
                // not equal to the updated value
                var notInFocus = true;
                // #6157
                // work around IE bug when accessing document.activeElement in an iframe
                try {
                    notInFocus = document.activeElement !== elm;
                }
                catch (e) { }
                return notInFocus && elm.value !== checkVal;
            }
            function isDirtyWithModifiers(elm, newVal) {
                var value = elm.value;
                var modifiers = elm._vModifiers; // injected by v-model runtime
                if (isDef(modifiers)) {
                    if (modifiers.lazy) {
                        // inputs with lazy should only be updated when not in focus
                        return false;
                    }
                    if (modifiers.number) {
                        return toNumber(value) !== toNumber(newVal);
                    }
                    if (modifiers.trim) {
                        return value.trim() !== newVal.trim();
                    }
                }
                return value !== newVal;
            }
            var domProps = {
                create: updateDOMProps,
                update: updateDOMProps
            };
            /*  */
            var parseStyleText = cached(function (cssText) {
                var res = {};
                var listDelimiter = /;(?![^(]*\))/g;
                var propertyDelimiter = /:(.+)/;
                cssText.split(listDelimiter).forEach(function (item) {
                    if (item) {
                        var tmp = item.split(propertyDelimiter);
                        tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
                    }
                });
                return res;
            });
            // merge static and dynamic style data on the same vnode
            function normalizeStyleData(data) {
                var style = normalizeStyleBinding(data.style);
                // static style is pre-processed into an object during compilation
                // and is always a fresh object, so it's safe to merge into it
                return data.staticStyle
                    ? extend(data.staticStyle, style)
                    : style;
            }
            // normalize possible array / string values into Object
            function normalizeStyleBinding(bindingStyle) {
                if (Array.isArray(bindingStyle)) {
                    return toObject(bindingStyle);
                }
                if (typeof bindingStyle === 'string') {
                    return parseStyleText(bindingStyle);
                }
                return bindingStyle;
            }
            /**
             * parent component style should be after child's
             * so that parent component's style could override it
             */
            function getStyle(vnode, checkChild) {
                var res = {};
                var styleData;
                if (checkChild) {
                    var childNode = vnode;
                    while (childNode.componentInstance) {
                        childNode = childNode.componentInstance._vnode;
                        if (childNode && childNode.data &&
                            (styleData = normalizeStyleData(childNode.data))) {
                            extend(res, styleData);
                        }
                    }
                }
                if ((styleData = normalizeStyleData(vnode.data))) {
                    extend(res, styleData);
                }
                var parentNode = vnode;
                while ((parentNode = parentNode.parent)) {
                    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
                        extend(res, styleData);
                    }
                }
                return res;
            }
            /*  */
            var cssVarRE = /^--/;
            var importantRE = /\s*!important$/;
            var setProp = function (el, name, val) {
                /* istanbul ignore if */
                if (cssVarRE.test(name)) {
                    el.style.setProperty(name, val);
                }
                else if (importantRE.test(val)) {
                    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
                }
                else {
                    var normalizedName = normalize(name);
                    if (Array.isArray(val)) {
                        // Support values array created by autoprefixer, e.g.
                        // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
                        // Set them one by one, and the browser will only set those it can recognize
                        for (var i = 0, len = val.length; i < len; i++) {
                            el.style[normalizedName] = val[i];
                        }
                    }
                    else {
                        el.style[normalizedName] = val;
                    }
                }
            };
            var vendorNames = ['Webkit', 'Moz', 'ms'];
            var emptyStyle;
            var normalize = cached(function (prop) {
                emptyStyle = emptyStyle || document.createElement('div').style;
                prop = camelize(prop);
                if (prop !== 'filter' && (prop in emptyStyle)) {
                    return prop;
                }
                var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
                for (var i = 0; i < vendorNames.length; i++) {
                    var name = vendorNames[i] + capName;
                    if (name in emptyStyle) {
                        return name;
                    }
                }
            });
            function updateStyle(oldVnode, vnode) {
                var data = vnode.data;
                var oldData = oldVnode.data;
                if (isUndef(data.staticStyle) && isUndef(data.style) &&
                    isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
                    return;
                }
                var cur, name;
                var el = vnode.elm;
                var oldStaticStyle = oldData.staticStyle;
                var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};
                // if static style exists, stylebinding already merged into it when doing normalizeStyleData
                var oldStyle = oldStaticStyle || oldStyleBinding;
                var style = normalizeStyleBinding(vnode.data.style) || {};
                // store normalized style under a different key for next diff
                // make sure to clone it if it's reactive, since the user likely wants
                // to mutate it.
                vnode.data.normalizedStyle = isDef(style.__ob__)
                    ? extend({}, style)
                    : style;
                var newStyle = getStyle(vnode, true);
                for (name in oldStyle) {
                    if (isUndef(newStyle[name])) {
                        setProp(el, name, '');
                    }
                }
                for (name in newStyle) {
                    cur = newStyle[name];
                    if (cur !== oldStyle[name]) {
                        // ie9 setting to null has no effect, must use empty string
                        setProp(el, name, cur == null ? '' : cur);
                    }
                }
            }
            var style = {
                create: updateStyle,
                update: updateStyle
            };
            /*  */
            /**
             * Add class with compatibility for SVG since classList is not supported on
             * SVG elements in IE
             */
            function addClass(el, cls) {
                /* istanbul ignore if */
                if (!cls || !(cls = cls.trim())) {
                    return;
                }
                /* istanbul ignore else */
                if (el.classList) {
                    if (cls.indexOf(' ') > -1) {
                        cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
                    }
                    else {
                        el.classList.add(cls);
                    }
                }
                else {
                    var cur = " " + (el.getAttribute('class') || '') + " ";
                    if (cur.indexOf(' ' + cls + ' ') < 0) {
                        el.setAttribute('class', (cur + cls).trim());
                    }
                }
            }
            /**
             * Remove class with compatibility for SVG since classList is not supported on
             * SVG elements in IE
             */
            function removeClass(el, cls) {
                /* istanbul ignore if */
                if (!cls || !(cls = cls.trim())) {
                    return;
                }
                /* istanbul ignore else */
                if (el.classList) {
                    if (cls.indexOf(' ') > -1) {
                        cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
                    }
                    else {
                        el.classList.remove(cls);
                    }
                    if (!el.classList.length) {
                        el.removeAttribute('class');
                    }
                }
                else {
                    var cur = " " + (el.getAttribute('class') || '') + " ";
                    var tar = ' ' + cls + ' ';
                    while (cur.indexOf(tar) >= 0) {
                        cur = cur.replace(tar, ' ');
                    }
                    cur = cur.trim();
                    if (cur) {
                        el.setAttribute('class', cur);
                    }
                    else {
                        el.removeAttribute('class');
                    }
                }
            }
            /*  */
            function resolveTransition(def) {
                if (!def) {
                    return;
                }
                /* istanbul ignore else */
                if (typeof def === 'object') {
                    var res = {};
                    if (def.css !== false) {
                        extend(res, autoCssTransition(def.name || 'v'));
                    }
                    extend(res, def);
                    return res;
                }
                else if (typeof def === 'string') {
                    return autoCssTransition(def);
                }
            }
            var autoCssTransition = cached(function (name) {
                return {
                    enterClass: (name + "-enter"),
                    enterToClass: (name + "-enter-to"),
                    enterActiveClass: (name + "-enter-active"),
                    leaveClass: (name + "-leave"),
                    leaveToClass: (name + "-leave-to"),
                    leaveActiveClass: (name + "-leave-active")
                };
            });
            var hasTransition = inBrowser && !isIE9;
            var TRANSITION = 'transition';
            var ANIMATION = 'animation';
            // Transition property/event sniffing
            var transitionProp = 'transition';
            var transitionEndEvent = 'transitionend';
            var animationProp = 'animation';
            var animationEndEvent = 'animationend';
            if (hasTransition) {
                /* istanbul ignore if */
                if (window.ontransitionend === undefined &&
                    window.onwebkittransitionend !== undefined) {
                    transitionProp = 'WebkitTransition';
                    transitionEndEvent = 'webkitTransitionEnd';
                }
                if (window.onanimationend === undefined &&
                    window.onwebkitanimationend !== undefined) {
                    animationProp = 'WebkitAnimation';
                    animationEndEvent = 'webkitAnimationEnd';
                }
            }
            // binding to window is necessary to make hot reload work in IE in strict mode
            var raf = inBrowser
                ? window.requestAnimationFrame
                    ? window.requestAnimationFrame.bind(window)
                    : setTimeout
                : /* istanbul ignore next */ function (fn) { return fn(); };
            function nextFrame(fn) {
                raf(function () {
                    raf(fn);
                });
            }
            function addTransitionClass(el, cls) {
                var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
                if (transitionClasses.indexOf(cls) < 0) {
                    transitionClasses.push(cls);
                    addClass(el, cls);
                }
            }
            function removeTransitionClass(el, cls) {
                if (el._transitionClasses) {
                    remove(el._transitionClasses, cls);
                }
                removeClass(el, cls);
            }
            function whenTransitionEnds(el, expectedType, cb) {
                var ref = getTransitionInfo(el, expectedType);
                var type = ref.type;
                var timeout = ref.timeout;
                var propCount = ref.propCount;
                if (!type) {
                    return cb();
                }
                var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
                var ended = 0;
                var end = function () {
                    el.removeEventListener(event, onEnd);
                    cb();
                };
                var onEnd = function (e) {
                    if (e.target === el) {
                        if (++ended >= propCount) {
                            end();
                        }
                    }
                };
                setTimeout(function () {
                    if (ended < propCount) {
                        end();
                    }
                }, timeout + 1);
                el.addEventListener(event, onEnd);
            }
            var transformRE = /\b(transform|all)(,|$)/;
            function getTransitionInfo(el, expectedType) {
                var styles = window.getComputedStyle(el);
                var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
                var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
                var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
                var animationDelays = styles[animationProp + 'Delay'].split(', ');
                var animationDurations = styles[animationProp + 'Duration'].split(', ');
                var animationTimeout = getTimeout(animationDelays, animationDurations);
                var type;
                var timeout = 0;
                var propCount = 0;
                /* istanbul ignore if */
                if (expectedType === TRANSITION) {
                    if (transitionTimeout > 0) {
                        type = TRANSITION;
                        timeout = transitionTimeout;
                        propCount = transitionDurations.length;
                    }
                }
                else if (expectedType === ANIMATION) {
                    if (animationTimeout > 0) {
                        type = ANIMATION;
                        timeout = animationTimeout;
                        propCount = animationDurations.length;
                    }
                }
                else {
                    timeout = Math.max(transitionTimeout, animationTimeout);
                    type = timeout > 0
                        ? transitionTimeout > animationTimeout
                            ? TRANSITION
                            : ANIMATION
                        : null;
                    propCount = type
                        ? type === TRANSITION
                            ? transitionDurations.length
                            : animationDurations.length
                        : 0;
                }
                var hasTransform = type === TRANSITION &&
                    transformRE.test(styles[transitionProp + 'Property']);
                return {
                    type: type,
                    timeout: timeout,
                    propCount: propCount,
                    hasTransform: hasTransform
                };
            }
            function getTimeout(delays, durations) {
                /* istanbul ignore next */
                while (delays.length < durations.length) {
                    delays = delays.concat(delays);
                }
                return Math.max.apply(null, durations.map(function (d, i) {
                    return toMs(d) + toMs(delays[i]);
                }));
            }
            function toMs(s) {
                return Number(s.slice(0, -1)) * 1000;
            }
            /*  */
            function enter(vnode, toggleDisplay) {
                var el = vnode.elm;
                // call leave callback now
                if (isDef(el._leaveCb)) {
                    el._leaveCb.cancelled = true;
                    el._leaveCb();
                }
                var data = resolveTransition(vnode.data.transition);
                if (isUndef(data)) {
                    return;
                }
                /* istanbul ignore if */
                if (isDef(el._enterCb) || el.nodeType !== 1) {
                    return;
                }
                var css = data.css;
                var type = data.type;
                var enterClass = data.enterClass;
                var enterToClass = data.enterToClass;
                var enterActiveClass = data.enterActiveClass;
                var appearClass = data.appearClass;
                var appearToClass = data.appearToClass;
                var appearActiveClass = data.appearActiveClass;
                var beforeEnter = data.beforeEnter;
                var enter = data.enter;
                var afterEnter = data.afterEnter;
                var enterCancelled = data.enterCancelled;
                var beforeAppear = data.beforeAppear;
                var appear = data.appear;
                var afterAppear = data.afterAppear;
                var appearCancelled = data.appearCancelled;
                var duration = data.duration;
                // activeInstance will always be the <transition> component managing this
                // transition. One edge case to check is when the <transition> is placed
                // as the root node of a child component. In that case we need to check
                // <transition>'s parent for appear check.
                var context = activeInstance;
                var transitionNode = activeInstance.$vnode;
                while (transitionNode && transitionNode.parent) {
                    transitionNode = transitionNode.parent;
                    context = transitionNode.context;
                }
                var isAppear = !context._isMounted || !vnode.isRootInsert;
                if (isAppear && !appear && appear !== '') {
                    return;
                }
                var startClass = isAppear && appearClass
                    ? appearClass
                    : enterClass;
                var activeClass = isAppear && appearActiveClass
                    ? appearActiveClass
                    : enterActiveClass;
                var toClass = isAppear && appearToClass
                    ? appearToClass
                    : enterToClass;
                var beforeEnterHook = isAppear
                    ? (beforeAppear || beforeEnter)
                    : beforeEnter;
                var enterHook = isAppear
                    ? (typeof appear === 'function' ? appear : enter)
                    : enter;
                var afterEnterHook = isAppear
                    ? (afterAppear || afterEnter)
                    : afterEnter;
                var enterCancelledHook = isAppear
                    ? (appearCancelled || enterCancelled)
                    : enterCancelled;
                var explicitEnterDuration = toNumber(isObject(duration)
                    ? duration.enter
                    : duration);
                if (true && explicitEnterDuration != null) {
                    checkDuration(explicitEnterDuration, 'enter', vnode);
                }
                var expectsCSS = css !== false && !isIE9;
                var userWantsControl = getHookArgumentsLength(enterHook);
                var cb = el._enterCb = once(function () {
                    if (expectsCSS) {
                        removeTransitionClass(el, toClass);
                        removeTransitionClass(el, activeClass);
                    }
                    if (cb.cancelled) {
                        if (expectsCSS) {
                            removeTransitionClass(el, startClass);
                        }
                        enterCancelledHook && enterCancelledHook(el);
                    }
                    else {
                        afterEnterHook && afterEnterHook(el);
                    }
                    el._enterCb = null;
                });
                if (!vnode.data.show) {
                    // remove pending leave element on enter by injecting an insert hook
                    mergeVNodeHook(vnode, 'insert', function () {
                        var parent = el.parentNode;
                        var pendingNode = parent && parent._pending && parent._pending[vnode.key];
                        if (pendingNode &&
                            pendingNode.tag === vnode.tag &&
                            pendingNode.elm._leaveCb) {
                            pendingNode.elm._leaveCb();
                        }
                        enterHook && enterHook(el, cb);
                    });
                }
                // start enter transition
                beforeEnterHook && beforeEnterHook(el);
                if (expectsCSS) {
                    addTransitionClass(el, startClass);
                    addTransitionClass(el, activeClass);
                    nextFrame(function () {
                        removeTransitionClass(el, startClass);
                        if (!cb.cancelled) {
                            addTransitionClass(el, toClass);
                            if (!userWantsControl) {
                                if (isValidDuration(explicitEnterDuration)) {
                                    setTimeout(cb, explicitEnterDuration);
                                }
                                else {
                                    whenTransitionEnds(el, type, cb);
                                }
                            }
                        }
                    });
                }
                if (vnode.data.show) {
                    toggleDisplay && toggleDisplay();
                    enterHook && enterHook(el, cb);
                }
                if (!expectsCSS && !userWantsControl) {
                    cb();
                }
            }
            function leave(vnode, rm) {
                var el = vnode.elm;
                // call enter callback now
                if (isDef(el._enterCb)) {
                    el._enterCb.cancelled = true;
                    el._enterCb();
                }
                var data = resolveTransition(vnode.data.transition);
                if (isUndef(data) || el.nodeType !== 1) {
                    return rm();
                }
                /* istanbul ignore if */
                if (isDef(el._leaveCb)) {
                    return;
                }
                var css = data.css;
                var type = data.type;
                var leaveClass = data.leaveClass;
                var leaveToClass = data.leaveToClass;
                var leaveActiveClass = data.leaveActiveClass;
                var beforeLeave = data.beforeLeave;
                var leave = data.leave;
                var afterLeave = data.afterLeave;
                var leaveCancelled = data.leaveCancelled;
                var delayLeave = data.delayLeave;
                var duration = data.duration;
                var expectsCSS = css !== false && !isIE9;
                var userWantsControl = getHookArgumentsLength(leave);
                var explicitLeaveDuration = toNumber(isObject(duration)
                    ? duration.leave
                    : duration);
                if (true && isDef(explicitLeaveDuration)) {
                    checkDuration(explicitLeaveDuration, 'leave', vnode);
                }
                var cb = el._leaveCb = once(function () {
                    if (el.parentNode && el.parentNode._pending) {
                        el.parentNode._pending[vnode.key] = null;
                    }
                    if (expectsCSS) {
                        removeTransitionClass(el, leaveToClass);
                        removeTransitionClass(el, leaveActiveClass);
                    }
                    if (cb.cancelled) {
                        if (expectsCSS) {
                            removeTransitionClass(el, leaveClass);
                        }
                        leaveCancelled && leaveCancelled(el);
                    }
                    else {
                        rm();
                        afterLeave && afterLeave(el);
                    }
                    el._leaveCb = null;
                });
                if (delayLeave) {
                    delayLeave(performLeave);
                }
                else {
                    performLeave();
                }
                function performLeave() {
                    // the delayed leave may have already been cancelled
                    if (cb.cancelled) {
                        return;
                    }
                    // record leaving element
                    if (!vnode.data.show) {
                        (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
                    }
                    beforeLeave && beforeLeave(el);
                    if (expectsCSS) {
                        addTransitionClass(el, leaveClass);
                        addTransitionClass(el, leaveActiveClass);
                        nextFrame(function () {
                            removeTransitionClass(el, leaveClass);
                            if (!cb.cancelled) {
                                addTransitionClass(el, leaveToClass);
                                if (!userWantsControl) {
                                    if (isValidDuration(explicitLeaveDuration)) {
                                        setTimeout(cb, explicitLeaveDuration);
                                    }
                                    else {
                                        whenTransitionEnds(el, type, cb);
                                    }
                                }
                            }
                        });
                    }
                    leave && leave(el, cb);
                    if (!expectsCSS && !userWantsControl) {
                        cb();
                    }
                }
            }
            // only used in dev mode
            function checkDuration(val, name, vnode) {
                if (typeof val !== 'number') {
                    warn("<transition> explicit " + name + " duration is not a valid number - " +
                        "got " + (JSON.stringify(val)) + ".", vnode.context);
                }
                else if (isNaN(val)) {
                    warn("<transition> explicit " + name + " duration is NaN - " +
                        'the duration expression might be incorrect.', vnode.context);
                }
            }
            function isValidDuration(val) {
                return typeof val === 'number' && !isNaN(val);
            }
            /**
             * Normalize a transition hook's argument length. The hook may be:
             * - a merged hook (invoker) with the original in .fns
             * - a wrapped component method (check ._length)
             * - a plain function (.length)
             */
            function getHookArgumentsLength(fn) {
                if (isUndef(fn)) {
                    return false;
                }
                var invokerFns = fn.fns;
                if (isDef(invokerFns)) {
                    // invoker
                    return getHookArgumentsLength(Array.isArray(invokerFns)
                        ? invokerFns[0]
                        : invokerFns);
                }
                else {
                    return (fn._length || fn.length) > 1;
                }
            }
            function _enter(_, vnode) {
                if (vnode.data.show !== true) {
                    enter(vnode);
                }
            }
            var transition = inBrowser ? {
                create: _enter,
                activate: _enter,
                remove: function remove$$1(vnode, rm) {
                    /* istanbul ignore else */
                    if (vnode.data.show !== true) {
                        leave(vnode, rm);
                    }
                    else {
                        rm();
                    }
                }
            } : {};
            var platformModules = [
                attrs,
                klass,
                events,
                domProps,
                style,
                transition
            ];
            /*  */
            // the directive module should be applied last, after all
            // built-in modules have been applied.
            var modules = platformModules.concat(baseModules);
            var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });
            /**
             * Not type checking this file because flow doesn't like attaching
             * properties to Elements.
             */
            /* istanbul ignore if */
            if (isIE9) {
                // http://www.matts411.com/post/internet-explorer-9-oninput/
                document.addEventListener('selectionchange', function () {
                    var el = document.activeElement;
                    if (el && el.vmodel) {
                        trigger(el, 'input');
                    }
                });
            }
            var directive = {
                inserted: function inserted(el, binding, vnode, oldVnode) {
                    if (vnode.tag === 'select') {
                        // #6903
                        if (oldVnode.elm && !oldVnode.elm._vOptions) {
                            mergeVNodeHook(vnode, 'postpatch', function () {
                                directive.componentUpdated(el, binding, vnode);
                            });
                        }
                        else {
                            setSelected(el, binding, vnode.context);
                        }
                        el._vOptions = [].map.call(el.options, getValue);
                    }
                    else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
                        el._vModifiers = binding.modifiers;
                        if (!binding.modifiers.lazy) {
                            el.addEventListener('compositionstart', onCompositionStart);
                            el.addEventListener('compositionend', onCompositionEnd);
                            // Safari < 10.2 & UIWebView doesn't fire compositionend when
                            // switching focus before confirming composition choice
                            // this also fixes the issue where some browsers e.g. iOS Chrome
                            // fires "change" instead of "input" on autocomplete.
                            el.addEventListener('change', onCompositionEnd);
                            /* istanbul ignore if */
                            if (isIE9) {
                                el.vmodel = true;
                            }
                        }
                    }
                },
                componentUpdated: function componentUpdated(el, binding, vnode) {
                    if (vnode.tag === 'select') {
                        setSelected(el, binding, vnode.context);
                        // in case the options rendered by v-for have changed,
                        // it's possible that the value is out-of-sync with the rendered options.
                        // detect such cases and filter out values that no longer has a matching
                        // option in the DOM.
                        var prevOptions = el._vOptions;
                        var curOptions = el._vOptions = [].map.call(el.options, getValue);
                        if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
                            // trigger change event if
                            // no matching option found for at least one value
                            var needReset = el.multiple
                                ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
                                : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
                            if (needReset) {
                                trigger(el, 'change');
                            }
                        }
                    }
                }
            };
            function setSelected(el, binding, vm) {
                actuallySetSelected(el, binding, vm);
                /* istanbul ignore if */
                if (isIE || isEdge) {
                    setTimeout(function () {
                        actuallySetSelected(el, binding, vm);
                    }, 0);
                }
            }
            function actuallySetSelected(el, binding, vm) {
                var value = binding.value;
                var isMultiple = el.multiple;
                if (isMultiple && !Array.isArray(value)) {
                    true && warn("<select multiple v-model=\"" + (binding.expression) + "\"> " +
                        "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)), vm);
                    return;
                }
                var selected, option;
                for (var i = 0, l = el.options.length; i < l; i++) {
                    option = el.options[i];
                    if (isMultiple) {
                        selected = looseIndexOf(value, getValue(option)) > -1;
                        if (option.selected !== selected) {
                            option.selected = selected;
                        }
                    }
                    else {
                        if (looseEqual(getValue(option), value)) {
                            if (el.selectedIndex !== i) {
                                el.selectedIndex = i;
                            }
                            return;
                        }
                    }
                }
                if (!isMultiple) {
                    el.selectedIndex = -1;
                }
            }
            function hasNoMatchingOption(value, options) {
                return options.every(function (o) { return !looseEqual(o, value); });
            }
            function getValue(option) {
                return '_value' in option
                    ? option._value
                    : option.value;
            }
            function onCompositionStart(e) {
                e.target.composing = true;
            }
            function onCompositionEnd(e) {
                // prevent triggering an input event for no reason
                if (!e.target.composing) {
                    return;
                }
                e.target.composing = false;
                trigger(e.target, 'input');
            }
            function trigger(el, type) {
                var e = document.createEvent('HTMLEvents');
                e.initEvent(type, true, true);
                el.dispatchEvent(e);
            }
            /*  */
            // recursively search for possible transition defined inside the component root
            function locateNode(vnode) {
                return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
                    ? locateNode(vnode.componentInstance._vnode)
                    : vnode;
            }
            var show = {
                bind: function bind(el, ref, vnode) {
                    var value = ref.value;
                    vnode = locateNode(vnode);
                    var transition$$1 = vnode.data && vnode.data.transition;
                    var originalDisplay = el.__vOriginalDisplay =
                        el.style.display === 'none' ? '' : el.style.display;
                    if (value && transition$$1) {
                        vnode.data.show = true;
                        enter(vnode, function () {
                            el.style.display = originalDisplay;
                        });
                    }
                    else {
                        el.style.display = value ? originalDisplay : 'none';
                    }
                },
                update: function update(el, ref, vnode) {
                    var value = ref.value;
                    var oldValue = ref.oldValue;
                    /* istanbul ignore if */
                    if (!value === !oldValue) {
                        return;
                    }
                    vnode = locateNode(vnode);
                    var transition$$1 = vnode.data && vnode.data.transition;
                    if (transition$$1) {
                        vnode.data.show = true;
                        if (value) {
                            enter(vnode, function () {
                                el.style.display = el.__vOriginalDisplay;
                            });
                        }
                        else {
                            leave(vnode, function () {
                                el.style.display = 'none';
                            });
                        }
                    }
                    else {
                        el.style.display = value ? el.__vOriginalDisplay : 'none';
                    }
                },
                unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
                    if (!isDestroy) {
                        el.style.display = el.__vOriginalDisplay;
                    }
                }
            };
            var platformDirectives = {
                model: directive,
                show: show
            };
            /*  */
            // Provides transition support for a single element/component.
            // supports transition mode (out-in / in-out)
            var transitionProps = {
                name: String,
                appear: Boolean,
                css: Boolean,
                mode: String,
                type: String,
                enterClass: String,
                leaveClass: String,
                enterToClass: String,
                leaveToClass: String,
                enterActiveClass: String,
                leaveActiveClass: String,
                appearClass: String,
                appearActiveClass: String,
                appearToClass: String,
                duration: [Number, String, Object]
            };
            // in case the child is also an abstract component, e.g. <keep-alive>
            // we want to recursively retrieve the real component to be rendered
            function getRealChild(vnode) {
                var compOptions = vnode && vnode.componentOptions;
                if (compOptions && compOptions.Ctor.options.abstract) {
                    return getRealChild(getFirstComponentChild(compOptions.children));
                }
                else {
                    return vnode;
                }
            }
            function extractTransitionData(comp) {
                var data = {};
                var options = comp.$options;
                // props
                for (var key in options.propsData) {
                    data[key] = comp[key];
                }
                // events.
                // extract listeners and pass them directly to the transition methods
                var listeners = options._parentListeners;
                for (var key$1 in listeners) {
                    data[camelize(key$1)] = listeners[key$1];
                }
                return data;
            }
            function placeholder(h, rawChild) {
                if (/\d-keep-alive$/.test(rawChild.tag)) {
                    return h('keep-alive', {
                        props: rawChild.componentOptions.propsData
                    });
                }
            }
            function hasParentTransition(vnode) {
                while ((vnode = vnode.parent)) {
                    if (vnode.data.transition) {
                        return true;
                    }
                }
            }
            function isSameChild(child, oldChild) {
                return oldChild.key === child.key && oldChild.tag === child.tag;
            }
            var Transition = {
                name: 'transition',
                props: transitionProps,
                abstract: true,
                render: function render(h) {
                    var this$1 = this;
                    var children = this.$slots.default;
                    if (!children) {
                        return;
                    }
                    // filter out text nodes (possible whitespaces)
                    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
                    /* istanbul ignore if */
                    if (!children.length) {
                        return;
                    }
                    // warn multiple elements
                    if (true && children.length > 1) {
                        warn('<transition> can only be used on a single element. Use ' +
                            '<transition-group> for lists.', this.$parent);
                    }
                    var mode = this.mode;
                    // warn invalid mode
                    if (true &&
                        mode && mode !== 'in-out' && mode !== 'out-in') {
                        warn('invalid <transition> mode: ' + mode, this.$parent);
                    }
                    var rawChild = children[0];
                    // if this is a component root node and the component's
                    // parent container node also has transition, skip.
                    if (hasParentTransition(this.$vnode)) {
                        return rawChild;
                    }
                    // apply transition data to child
                    // use getRealChild() to ignore abstract components e.g. keep-alive
                    var child = getRealChild(rawChild);
                    /* istanbul ignore if */
                    if (!child) {
                        return rawChild;
                    }
                    if (this._leaving) {
                        return placeholder(h, rawChild);
                    }
                    // ensure a key that is unique to the vnode type and to this transition
                    // component instance. This key will be used to remove pending leaving nodes
                    // during entering.
                    var id = "__transition-" + (this._uid) + "-";
                    child.key = child.key == null
                        ? child.isComment
                            ? id + 'comment'
                            : id + child.tag
                        : isPrimitive(child.key)
                            ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
                            : child.key;
                    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
                    var oldRawChild = this._vnode;
                    var oldChild = getRealChild(oldRawChild);
                    // mark v-show
                    // so that the transition module can hand over the control to the directive
                    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
                        child.data.show = true;
                    }
                    if (oldChild &&
                        oldChild.data &&
                        !isSameChild(child, oldChild) &&
                        !isAsyncPlaceholder(oldChild) &&
                        // #6687 component root is a comment node
                        !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
                        // replace old child transition data with fresh one
                        // important for dynamic transitions!
                        var oldData = oldChild.data.transition = extend({}, data);
                        // handle transition mode
                        if (mode === 'out-in') {
                            // return placeholder node and queue update when leave finishes
                            this._leaving = true;
                            mergeVNodeHook(oldData, 'afterLeave', function () {
                                this$1._leaving = false;
                                this$1.$forceUpdate();
                            });
                            return placeholder(h, rawChild);
                        }
                        else if (mode === 'in-out') {
                            if (isAsyncPlaceholder(child)) {
                                return oldRawChild;
                            }
                            var delayedLeave;
                            var performLeave = function () { delayedLeave(); };
                            mergeVNodeHook(data, 'afterEnter', performLeave);
                            mergeVNodeHook(data, 'enterCancelled', performLeave);
                            mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
                        }
                    }
                    return rawChild;
                }
            };
            /*  */
            // Provides transition support for list items.
            // supports move transitions using the FLIP technique.
            // Because the vdom's children update algorithm is "unstable" - i.e.
            // it doesn't guarantee the relative positioning of removed elements,
            // we force transition-group to update its children into two passes:
            // in the first pass, we remove all nodes that need to be removed,
            // triggering their leaving transition; in the second pass, we insert/move
            // into the final desired state. This way in the second pass removed
            // nodes will remain where they should be.
            var props = extend({
                tag: String,
                moveClass: String
            }, transitionProps);
            delete props.mode;
            var TransitionGroup = {
                props: props,
                render: function render(h) {
                    var tag = this.tag || this.$vnode.data.tag || 'span';
                    var map = Object.create(null);
                    var prevChildren = this.prevChildren = this.children;
                    var rawChildren = this.$slots.default || [];
                    var children = this.children = [];
                    var transitionData = extractTransitionData(this);
                    for (var i = 0; i < rawChildren.length; i++) {
                        var c = rawChildren[i];
                        if (c.tag) {
                            if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
                                children.push(c);
                                map[c.key] = c;
                                (c.data || (c.data = {})).transition = transitionData;
                            }
                            else if (true) {
                                var opts = c.componentOptions;
                                var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
                                warn(("<transition-group> children must be keyed: <" + name + ">"));
                            }
                        }
                    }
                    if (prevChildren) {
                        var kept = [];
                        var removed = [];
                        for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
                            var c$1 = prevChildren[i$1];
                            c$1.data.transition = transitionData;
                            c$1.data.pos = c$1.elm.getBoundingClientRect();
                            if (map[c$1.key]) {
                                kept.push(c$1);
                            }
                            else {
                                removed.push(c$1);
                            }
                        }
                        this.kept = h(tag, null, kept);
                        this.removed = removed;
                    }
                    return h(tag, null, children);
                },
                beforeUpdate: function beforeUpdate() {
                    // force removing pass
                    this.__patch__(this._vnode, this.kept, false, // hydrating
                    true // removeOnly (!important, avoids unnecessary moves)
                    );
                    this._vnode = this.kept;
                },
                updated: function updated() {
                    var children = this.prevChildren;
                    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
                    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
                        return;
                    }
                    // we divide the work into three loops to avoid mixing DOM reads and writes
                    // in each iteration - which helps prevent layout thrashing.
                    children.forEach(callPendingCbs);
                    children.forEach(recordPosition);
                    children.forEach(applyTranslation);
                    // force reflow to put everything in position
                    // assign to this to avoid being removed in tree-shaking
                    // $flow-disable-line
                    this._reflow = document.body.offsetHeight;
                    children.forEach(function (c) {
                        if (c.data.moved) {
                            var el = c.elm;
                            var s = el.style;
                            addTransitionClass(el, moveClass);
                            s.transform = s.WebkitTransform = s.transitionDuration = '';
                            el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
                                if (!e || /transform$/.test(e.propertyName)) {
                                    el.removeEventListener(transitionEndEvent, cb);
                                    el._moveCb = null;
                                    removeTransitionClass(el, moveClass);
                                }
                            });
                        }
                    });
                },
                methods: {
                    hasMove: function hasMove(el, moveClass) {
                        /* istanbul ignore if */
                        if (!hasTransition) {
                            return false;
                        }
                        /* istanbul ignore if */
                        if (this._hasMove) {
                            return this._hasMove;
                        }
                        // Detect whether an element with the move class applied has
                        // CSS transitions. Since the element may be inside an entering
                        // transition at this very moment, we make a clone of it and remove
                        // all other transition classes applied to ensure only the move class
                        // is applied.
                        var clone = el.cloneNode();
                        if (el._transitionClasses) {
                            el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
                        }
                        addClass(clone, moveClass);
                        clone.style.display = 'none';
                        this.$el.appendChild(clone);
                        var info = getTransitionInfo(clone);
                        this.$el.removeChild(clone);
                        return (this._hasMove = info.hasTransform);
                    }
                }
            };
            function callPendingCbs(c) {
                /* istanbul ignore if */
                if (c.elm._moveCb) {
                    c.elm._moveCb();
                }
                /* istanbul ignore if */
                if (c.elm._enterCb) {
                    c.elm._enterCb();
                }
            }
            function recordPosition(c) {
                c.data.newPos = c.elm.getBoundingClientRect();
            }
            function applyTranslation(c) {
                var oldPos = c.data.pos;
                var newPos = c.data.newPos;
                var dx = oldPos.left - newPos.left;
                var dy = oldPos.top - newPos.top;
                if (dx || dy) {
                    c.data.moved = true;
                    var s = c.elm.style;
                    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
                    s.transitionDuration = '0s';
                }
            }
            var platformComponents = {
                Transition: Transition,
                TransitionGroup: TransitionGroup
            };
            /*  */
            // install platform specific utils
            Vue.config.mustUseProp = mustUseProp;
            Vue.config.isReservedTag = isReservedTag;
            Vue.config.isReservedAttr = isReservedAttr;
            Vue.config.getTagNamespace = getTagNamespace;
            Vue.config.isUnknownElement = isUnknownElement;
            // install platform runtime directives & components
            extend(Vue.options.directives, platformDirectives);
            extend(Vue.options.components, platformComponents);
            // install platform patch function
            Vue.prototype.__patch__ = inBrowser ? patch : noop;
            // public mount method
            Vue.prototype.$mount = function (el, hydrating) {
                el = el && inBrowser ? query(el) : undefined;
                return mountComponent(this, el, hydrating);
            };
            // devtools global hook
            /* istanbul ignore next */
            if (inBrowser) {
                setTimeout(function () {
                    if (config.devtools) {
                        if (devtools) {
                            devtools.emit('init', Vue);
                        }
                        else if (true &&
                            isChrome) {
                            console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' +
                                'https://github.com/vuejs/vue-devtools');
                        }
                    }
                    if (true &&
                        config.productionTip !== false &&
                        typeof console !== 'undefined') {
                        console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" +
                            "Make sure to turn on production mode when deploying for production.\n" +
                            "See more tips at https://vuejs.org/guide/deployment.html");
                    }
                }, 0);
            }
            /*  */
            /* harmony default export */ __webpack_exports__["default"] = (Vue);
            /* WEBPACK VAR INJECTION */ 
        }.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate));
        /***/ 
    }),
    /***/ "./node_modules/vuex/dist/vuex.esm.js": 
    /*!********************************************!*\
      !*** ./node_modules/vuex/dist/vuex.esm.js ***!
      \********************************************/
    /*! exports provided: Store, install, mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers, default */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function () { return Store; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function () { return install; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function () { return mapState; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function () { return mapMutations; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function () { return mapGetters; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function () { return mapActions; });
        /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function () { return createNamespacedHelpers; });
        /**
         * vuex v3.0.1
         * (c) 2017 Evan You
         * @license MIT
         */
        var applyMixin = function (Vue) {
            var version = Number(Vue.version.split('.')[0]);
            if (version >= 2) {
                Vue.mixin({ beforeCreate: vuexInit });
            }
            else {
                // override init and inject vuex init procedure
                // for 1.x backwards compatibility.
                var _init = Vue.prototype._init;
                Vue.prototype._init = function (options) {
                    if (options === void 0)
                        options = {};
                    options.init = options.init
                        ? [vuexInit].concat(options.init)
                        : vuexInit;
                    _init.call(this, options);
                };
            }
            /**
             * Vuex init hook, injected into each instances init hooks list.
             */
            function vuexInit() {
                var options = this.$options;
                // store injection
                if (options.store) {
                    this.$store = typeof options.store === 'function'
                        ? options.store()
                        : options.store;
                }
                else if (options.parent && options.parent.$store) {
                    this.$store = options.parent.$store;
                }
            }
        };
        var devtoolHook = typeof window !== 'undefined' &&
            window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
        function devtoolPlugin(store) {
            if (!devtoolHook) {
                return;
            }
            store._devtoolHook = devtoolHook;
            devtoolHook.emit('vuex:init', store);
            devtoolHook.on('vuex:travel-to-state', function (targetState) {
                store.replaceState(targetState);
            });
            store.subscribe(function (mutation, state) {
                devtoolHook.emit('vuex:mutation', mutation, state);
            });
        }
        /**
         * Get the first item that pass the test
         * by second argument function
         *
         * @param {Array} list
         * @param {Function} f
         * @return {*}
         */
        /**
         * Deep copy the given object considering circular structure.
         * This function caches all nested objects and its copies.
         * If it detects circular structure, use cached copy to avoid infinite loop.
         *
         * @param {*} obj
         * @param {Array<Object>} cache
         * @return {*}
         */
        /**
         * forEach for object
         */
        function forEachValue(obj, fn) {
            Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
        }
        function isObject(obj) {
            return obj !== null && typeof obj === 'object';
        }
        function isPromise(val) {
            return val && typeof val.then === 'function';
        }
        function assert(condition, msg) {
            if (!condition) {
                throw new Error(("[vuex] " + msg));
            }
        }
        var Module = function Module(rawModule, runtime) {
            this.runtime = runtime;
            this._children = Object.create(null);
            this._rawModule = rawModule;
            var rawState = rawModule.state;
            this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
        };
        var prototypeAccessors$1 = { namespaced: { configurable: true } };
        prototypeAccessors$1.namespaced.get = function () {
            return !!this._rawModule.namespaced;
        };
        Module.prototype.addChild = function addChild(key, module) {
            this._children[key] = module;
        };
        Module.prototype.removeChild = function removeChild(key) {
            delete this._children[key];
        };
        Module.prototype.getChild = function getChild(key) {
            return this._children[key];
        };
        Module.prototype.update = function update(rawModule) {
            this._rawModule.namespaced = rawModule.namespaced;
            if (rawModule.actions) {
                this._rawModule.actions = rawModule.actions;
            }
            if (rawModule.mutations) {
                this._rawModule.mutations = rawModule.mutations;
            }
            if (rawModule.getters) {
                this._rawModule.getters = rawModule.getters;
            }
        };
        Module.prototype.forEachChild = function forEachChild(fn) {
            forEachValue(this._children, fn);
        };
        Module.prototype.forEachGetter = function forEachGetter(fn) {
            if (this._rawModule.getters) {
                forEachValue(this._rawModule.getters, fn);
            }
        };
        Module.prototype.forEachAction = function forEachAction(fn) {
            if (this._rawModule.actions) {
                forEachValue(this._rawModule.actions, fn);
            }
        };
        Module.prototype.forEachMutation = function forEachMutation(fn) {
            if (this._rawModule.mutations) {
                forEachValue(this._rawModule.mutations, fn);
            }
        };
        Object.defineProperties(Module.prototype, prototypeAccessors$1);
        var ModuleCollection = function ModuleCollection(rawRootModule) {
            // register root module (Vuex.Store options)
            this.register([], rawRootModule, false);
        };
        ModuleCollection.prototype.get = function get(path) {
            return path.reduce(function (module, key) {
                return module.getChild(key);
            }, this.root);
        };
        ModuleCollection.prototype.getNamespace = function getNamespace(path) {
            var module = this.root;
            return path.reduce(function (namespace, key) {
                module = module.getChild(key);
                return namespace + (module.namespaced ? key + '/' : '');
            }, '');
        };
        ModuleCollection.prototype.update = function update$1(rawRootModule) {
            update([], this.root, rawRootModule);
        };
        ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
            var this$1 = this;
            if (runtime === void 0)
                runtime = true;
            if (true) {
                assertRawModule(path, rawModule);
            }
            var newModule = new Module(rawModule, runtime);
            if (path.length === 0) {
                this.root = newModule;
            }
            else {
                var parent = this.get(path.slice(0, -1));
                parent.addChild(path[path.length - 1], newModule);
            }
            // register nested modules
            if (rawModule.modules) {
                forEachValue(rawModule.modules, function (rawChildModule, key) {
                    this$1.register(path.concat(key), rawChildModule, runtime);
                });
            }
        };
        ModuleCollection.prototype.unregister = function unregister(path) {
            var parent = this.get(path.slice(0, -1));
            var key = path[path.length - 1];
            if (!parent.getChild(key).runtime) {
                return;
            }
            parent.removeChild(key);
        };
        function update(path, targetModule, newModule) {
            if (true) {
                assertRawModule(path, newModule);
            }
            // update target module
            targetModule.update(newModule);
            // update nested modules
            if (newModule.modules) {
                for (var key in newModule.modules) {
                    if (!targetModule.getChild(key)) {
                        if (true) {
                            console.warn("[vuex] trying to add a new module '" + key + "' on hot reloading, " +
                                'manual reload is needed');
                        }
                        return;
                    }
                    update(path.concat(key), targetModule.getChild(key), newModule.modules[key]);
                }
            }
        }
        var functionAssert = {
            assert: function (value) { return typeof value === 'function'; },
            expected: 'function'
        };
        var objectAssert = {
            assert: function (value) {
                return typeof value === 'function' ||
                    (typeof value === 'object' && typeof value.handler === 'function');
            },
            expected: 'function or object with "handler" function'
        };
        var assertTypes = {
            getters: functionAssert,
            mutations: functionAssert,
            actions: objectAssert
        };
        function assertRawModule(path, rawModule) {
            Object.keys(assertTypes).forEach(function (key) {
                if (!rawModule[key]) {
                    return;
                }
                var assertOptions = assertTypes[key];
                forEachValue(rawModule[key], function (value, type) {
                    assert(assertOptions.assert(value), makeAssertionMessage(path, key, type, value, assertOptions.expected));
                });
            });
        }
        function makeAssertionMessage(path, key, type, value, expected) {
            var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
            if (path.length > 0) {
                buf += " in module \"" + (path.join('.')) + "\"";
            }
            buf += " is " + (JSON.stringify(value)) + ".";
            return buf;
        }
        var Vue; // bind on install
        var Store = function Store(options) {
            var this$1 = this;
            if (options === void 0)
                options = {};
            // Auto install if it is not done yet and `window` has `Vue`.
            // To allow users to avoid auto-installation in some cases,
            // this code should be placed here. See #731
            if (!Vue && typeof window !== 'undefined' && window.Vue) {
                install(window.Vue);
            }
            if (true) {
                assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
                assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
                assert(this instanceof Store, "Store must be called with the new operator.");
            }
            var plugins = options.plugins;
            if (plugins === void 0)
                plugins = [];
            var strict = options.strict;
            if (strict === void 0)
                strict = false;
            var state = options.state;
            if (state === void 0)
                state = {};
            if (typeof state === 'function') {
                state = state() || {};
            }
            // store internal state
            this._committing = false;
            this._actions = Object.create(null);
            this._actionSubscribers = [];
            this._mutations = Object.create(null);
            this._wrappedGetters = Object.create(null);
            this._modules = new ModuleCollection(options);
            this._modulesNamespaceMap = Object.create(null);
            this._subscribers = [];
            this._watcherVM = new Vue();
            // bind commit and dispatch to self
            var store = this;
            var ref = this;
            var dispatch = ref.dispatch;
            var commit = ref.commit;
            this.dispatch = function boundDispatch(type, payload) {
                return dispatch.call(store, type, payload);
            };
            this.commit = function boundCommit(type, payload, options) {
                return commit.call(store, type, payload, options);
            };
            // strict mode
            this.strict = strict;
            // init root module.
            // this also recursively registers all sub-modules
            // and collects all module getters inside this._wrappedGetters
            installModule(this, state, [], this._modules.root);
            // initialize the store vm, which is responsible for the reactivity
            // (also registers _wrappedGetters as computed properties)
            resetStoreVM(this, state);
            // apply plugins
            plugins.forEach(function (plugin) { return plugin(this$1); });
            if (Vue.config.devtools) {
                devtoolPlugin(this);
            }
        };
        var prototypeAccessors = { state: { configurable: true } };
        prototypeAccessors.state.get = function () {
            return this._vm._data.$$state;
        };
        prototypeAccessors.state.set = function (v) {
            if (true) {
                assert(false, "Use store.replaceState() to explicit replace store state.");
            }
        };
        Store.prototype.commit = function commit(_type, _payload, _options) {
            var this$1 = this;
            // check object-style commit
            var ref = unifyObjectStyle(_type, _payload, _options);
            var type = ref.type;
            var payload = ref.payload;
            var options = ref.options;
            var mutation = { type: type, payload: payload };
            var entry = this._mutations[type];
            if (!entry) {
                if (true) {
                    console.error(("[vuex] unknown mutation type: " + type));
                }
                return;
            }
            this._withCommit(function () {
                entry.forEach(function commitIterator(handler) {
                    handler(payload);
                });
            });
            this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });
            if (true &&
                options && options.silent) {
                console.warn("[vuex] mutation type: " + type + ". Silent option has been removed. " +
                    'Use the filter functionality in the vue-devtools');
            }
        };
        Store.prototype.dispatch = function dispatch(_type, _payload) {
            var this$1 = this;
            // check object-style dispatch
            var ref = unifyObjectStyle(_type, _payload);
            var type = ref.type;
            var payload = ref.payload;
            var action = { type: type, payload: payload };
            var entry = this._actions[type];
            if (!entry) {
                if (true) {
                    console.error(("[vuex] unknown action type: " + type));
                }
                return;
            }
            this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });
            return entry.length > 1
                ? Promise.all(entry.map(function (handler) { return handler(payload); }))
                : entry[0](payload);
        };
        Store.prototype.subscribe = function subscribe(fn) {
            return genericSubscribe(fn, this._subscribers);
        };
        Store.prototype.subscribeAction = function subscribeAction(fn) {
            return genericSubscribe(fn, this._actionSubscribers);
        };
        Store.prototype.watch = function watch(getter, cb, options) {
            var this$1 = this;
            if (true) {
                assert(typeof getter === 'function', "store.watch only accepts a function.");
            }
            return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options);
        };
        Store.prototype.replaceState = function replaceState(state) {
            var this$1 = this;
            this._withCommit(function () {
                this$1._vm._data.$$state = state;
            });
        };
        Store.prototype.registerModule = function registerModule(path, rawModule, options) {
            if (options === void 0)
                options = {};
            if (typeof path === 'string') {
                path = [path];
            }
            if (true) {
                assert(Array.isArray(path), "module path must be a string or an Array.");
                assert(path.length > 0, 'cannot register the root module by using registerModule.');
            }
            this._modules.register(path, rawModule);
            installModule(this, this.state, path, this._modules.get(path), options.preserveState);
            // reset store to update getters...
            resetStoreVM(this, this.state);
        };
        Store.prototype.unregisterModule = function unregisterModule(path) {
            var this$1 = this;
            if (typeof path === 'string') {
                path = [path];
            }
            if (true) {
                assert(Array.isArray(path), "module path must be a string or an Array.");
            }
            this._modules.unregister(path);
            this._withCommit(function () {
                var parentState = getNestedState(this$1.state, path.slice(0, -1));
                Vue.delete(parentState, path[path.length - 1]);
            });
            resetStore(this);
        };
        Store.prototype.hotUpdate = function hotUpdate(newOptions) {
            this._modules.update(newOptions);
            resetStore(this, true);
        };
        Store.prototype._withCommit = function _withCommit(fn) {
            var committing = this._committing;
            this._committing = true;
            fn();
            this._committing = committing;
        };
        Object.defineProperties(Store.prototype, prototypeAccessors);
        function genericSubscribe(fn, subs) {
            if (subs.indexOf(fn) < 0) {
                subs.push(fn);
            }
            return function () {
                var i = subs.indexOf(fn);
                if (i > -1) {
                    subs.splice(i, 1);
                }
            };
        }
        function resetStore(store, hot) {
            store._actions = Object.create(null);
            store._mutations = Object.create(null);
            store._wrappedGetters = Object.create(null);
            store._modulesNamespaceMap = Object.create(null);
            var state = store.state;
            // init all modules
            installModule(store, state, [], store._modules.root, true);
            // reset vm
            resetStoreVM(store, state, hot);
        }
        function resetStoreVM(store, state, hot) {
            var oldVm = store._vm;
            // bind store public getters
            store.getters = {};
            var wrappedGetters = store._wrappedGetters;
            var computed = {};
            forEachValue(wrappedGetters, function (fn, key) {
                // use computed to leverage its lazy-caching mechanism
                computed[key] = function () { return fn(store); };
                Object.defineProperty(store.getters, key, {
                    get: function () { return store._vm[key]; },
                    enumerable: true // for local getters
                });
            });
            // use a Vue instance to store the state tree
            // suppress warnings just in case the user has added
            // some funky global mixins
            var silent = Vue.config.silent;
            Vue.config.silent = true;
            store._vm = new Vue({
                data: {
                    $$state: state
                },
                computed: computed
            });
            Vue.config.silent = silent;
            // enable strict mode for new vm
            if (store.strict) {
                enableStrictMode(store);
            }
            if (oldVm) {
                if (hot) {
                    // dispatch changes in all subscribed watchers
                    // to force getter re-evaluation for hot reloading.
                    store._withCommit(function () {
                        oldVm._data.$$state = null;
                    });
                }
                Vue.nextTick(function () { return oldVm.$destroy(); });
            }
        }
        function installModule(store, rootState, path, module, hot) {
            var isRoot = !path.length;
            var namespace = store._modules.getNamespace(path);
            // register in namespace map
            if (module.namespaced) {
                store._modulesNamespaceMap[namespace] = module;
            }
            // set state
            if (!isRoot && !hot) {
                var parentState = getNestedState(rootState, path.slice(0, -1));
                var moduleName = path[path.length - 1];
                store._withCommit(function () {
                    Vue.set(parentState, moduleName, module.state);
                });
            }
            var local = module.context = makeLocalContext(store, namespace, path);
            module.forEachMutation(function (mutation, key) {
                var namespacedType = namespace + key;
                registerMutation(store, namespacedType, mutation, local);
            });
            module.forEachAction(function (action, key) {
                var type = action.root ? key : namespace + key;
                var handler = action.handler || action;
                registerAction(store, type, handler, local);
            });
            module.forEachGetter(function (getter, key) {
                var namespacedType = namespace + key;
                registerGetter(store, namespacedType, getter, local);
            });
            module.forEachChild(function (child, key) {
                installModule(store, rootState, path.concat(key), child, hot);
            });
        }
        /**
         * make localized dispatch, commit, getters and state
         * if there is no namespace, just use root ones
         */
        function makeLocalContext(store, namespace, path) {
            var noNamespace = namespace === '';
            var local = {
                dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
                    var args = unifyObjectStyle(_type, _payload, _options);
                    var payload = args.payload;
                    var options = args.options;
                    var type = args.type;
                    if (!options || !options.root) {
                        type = namespace + type;
                        if (true && !store._actions[type]) {
                            console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
                            return;
                        }
                    }
                    return store.dispatch(type, payload);
                },
                commit: noNamespace ? store.commit : function (_type, _payload, _options) {
                    var args = unifyObjectStyle(_type, _payload, _options);
                    var payload = args.payload;
                    var options = args.options;
                    var type = args.type;
                    if (!options || !options.root) {
                        type = namespace + type;
                        if (true && !store._mutations[type]) {
                            console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
                            return;
                        }
                    }
                    store.commit(type, payload, options);
                }
            };
            // getters and state object must be gotten lazily
            // because they will be changed by vm update
            Object.defineProperties(local, {
                getters: {
                    get: noNamespace
                        ? function () { return store.getters; }
                        : function () { return makeLocalGetters(store, namespace); }
                },
                state: {
                    get: function () { return getNestedState(store.state, path); }
                }
            });
            return local;
        }
        function makeLocalGetters(store, namespace) {
            var gettersProxy = {};
            var splitPos = namespace.length;
            Object.keys(store.getters).forEach(function (type) {
                // skip if the target getter is not match this namespace
                if (type.slice(0, splitPos) !== namespace) {
                    return;
                }
                // extract local getter type
                var localType = type.slice(splitPos);
                // Add a port to the getters proxy.
                // Define as getter property because
                // we do not want to evaluate the getters in this time.
                Object.defineProperty(gettersProxy, localType, {
                    get: function () { return store.getters[type]; },
                    enumerable: true
                });
            });
            return gettersProxy;
        }
        function registerMutation(store, type, handler, local) {
            var entry = store._mutations[type] || (store._mutations[type] = []);
            entry.push(function wrappedMutationHandler(payload) {
                handler.call(store, local.state, payload);
            });
        }
        function registerAction(store, type, handler, local) {
            var entry = store._actions[type] || (store._actions[type] = []);
            entry.push(function wrappedActionHandler(payload, cb) {
                var res = handler.call(store, {
                    dispatch: local.dispatch,
                    commit: local.commit,
                    getters: local.getters,
                    state: local.state,
                    rootGetters: store.getters,
                    rootState: store.state
                }, payload, cb);
                if (!isPromise(res)) {
                    res = Promise.resolve(res);
                }
                if (store._devtoolHook) {
                    return res.catch(function (err) {
                        store._devtoolHook.emit('vuex:error', err);
                        throw err;
                    });
                }
                else {
                    return res;
                }
            });
        }
        function registerGetter(store, type, rawGetter, local) {
            if (store._wrappedGetters[type]) {
                if (true) {
                    console.error(("[vuex] duplicate getter key: " + type));
                }
                return;
            }
            store._wrappedGetters[type] = function wrappedGetter(store) {
                return rawGetter(local.state, // local state
                local.getters, // local getters
                store.state, // root state
                store.getters // root getters
                );
            };
        }
        function enableStrictMode(store) {
            store._vm.$watch(function () { return this._data.$$state; }, function () {
                if (true) {
                    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
                }
            }, { deep: true, sync: true });
        }
        function getNestedState(state, path) {
            return path.length
                ? path.reduce(function (state, key) { return state[key]; }, state)
                : state;
        }
        function unifyObjectStyle(type, payload, options) {
            if (isObject(type) && type.type) {
                options = payload;
                payload = type;
                type = type.type;
            }
            if (true) {
                assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
            }
            return { type: type, payload: payload, options: options };
        }
        function install(_Vue) {
            if (Vue && _Vue === Vue) {
                if (true) {
                    console.error('[vuex] already installed. Vue.use(Vuex) should be called only once.');
                }
                return;
            }
            Vue = _Vue;
            applyMixin(Vue);
        }
        var mapState = normalizeNamespace(function (namespace, states) {
            var res = {};
            normalizeMap(states).forEach(function (ref) {
                var key = ref.key;
                var val = ref.val;
                res[key] = function mappedState() {
                    var state = this.$store.state;
                    var getters = this.$store.getters;
                    if (namespace) {
                        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
                        if (!module) {
                            return;
                        }
                        state = module.context.state;
                        getters = module.context.getters;
                    }
                    return typeof val === 'function'
                        ? val.call(this, state, getters)
                        : state[val];
                };
                // mark vuex getter for devtools
                res[key].vuex = true;
            });
            return res;
        });
        var mapMutations = normalizeNamespace(function (namespace, mutations) {
            var res = {};
            normalizeMap(mutations).forEach(function (ref) {
                var key = ref.key;
                var val = ref.val;
                res[key] = function mappedMutation() {
                    var args = [], len = arguments.length;
                    while (len--)
                        args[len] = arguments[len];
                    var commit = this.$store.commit;
                    if (namespace) {
                        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
                        if (!module) {
                            return;
                        }
                        commit = module.context.commit;
                    }
                    return typeof val === 'function'
                        ? val.apply(this, [commit].concat(args))
                        : commit.apply(this.$store, [val].concat(args));
                };
            });
            return res;
        });
        var mapGetters = normalizeNamespace(function (namespace, getters) {
            var res = {};
            normalizeMap(getters).forEach(function (ref) {
                var key = ref.key;
                var val = ref.val;
                val = namespace + val;
                res[key] = function mappedGetter() {
                    if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
                        return;
                    }
                    if (true && !(val in this.$store.getters)) {
                        console.error(("[vuex] unknown getter: " + val));
                        return;
                    }
                    return this.$store.getters[val];
                };
                // mark vuex getter for devtools
                res[key].vuex = true;
            });
            return res;
        });
        var mapActions = normalizeNamespace(function (namespace, actions) {
            var res = {};
            normalizeMap(actions).forEach(function (ref) {
                var key = ref.key;
                var val = ref.val;
                res[key] = function mappedAction() {
                    var args = [], len = arguments.length;
                    while (len--)
                        args[len] = arguments[len];
                    var dispatch = this.$store.dispatch;
                    if (namespace) {
                        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
                        if (!module) {
                            return;
                        }
                        dispatch = module.context.dispatch;
                    }
                    return typeof val === 'function'
                        ? val.apply(this, [dispatch].concat(args))
                        : dispatch.apply(this.$store, [val].concat(args));
                };
            });
            return res;
        });
        var createNamespacedHelpers = function (namespace) {
            return ({
                mapState: mapState.bind(null, namespace),
                mapGetters: mapGetters.bind(null, namespace),
                mapMutations: mapMutations.bind(null, namespace),
                mapActions: mapActions.bind(null, namespace)
            });
        };
        function normalizeMap(map) {
            return Array.isArray(map)
                ? map.map(function (key) { return ({ key: key, val: key }); })
                : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); });
        }
        function normalizeNamespace(fn) {
            return function (namespace, map) {
                if (typeof namespace !== 'string') {
                    map = namespace;
                    namespace = '';
                }
                else if (namespace.charAt(namespace.length - 1) !== '/') {
                    namespace += '/';
                }
                return fn(namespace, map);
            };
        }
        function getModuleByNamespace(store, helper, namespace) {
            var module = store._modulesNamespaceMap[namespace];
            if (true && !module) {
                console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
            }
            return module;
        }
        var index_esm = {
            Store: Store,
            install: install,
            version: '3.0.1',
            mapState: mapState,
            mapMutations: mapMutations,
            mapGetters: mapGetters,
            mapActions: mapActions,
            createNamespacedHelpers: createNamespacedHelpers
        };
        /* harmony default export */ __webpack_exports__["default"] = (index_esm);
        /***/ 
    }),
    /***/ "./node_modules/webpack/buildin/global.js": 
    /*!***********************************!*\
      !*** (webpack)/buildin/global.js ***!
      \***********************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        var g;
        // This works in non-strict mode
        g = (function () {
            return this;
        })();
        try {
            // This works if eval is allowed (see CSP)
            g = g || Function("return this")() || (1, eval)("this");
        }
        catch (e) {
            // This works if the window reference is available
            if (typeof window === "object")
                g = window;
        }
        // g can still be undefined, but nothing to do about it...
        // We return undefined, instead of nothing here, so it's
        // easier to handle this case. if(!global) { ...}
        module.exports = g;
        /***/ 
    }),
    /***/ "./wwwroot/app.js": 
    /*!************************!*\
      !*** ./wwwroot/app.js ***!
      \************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__(/*! ./styles/all */ "./wwwroot/styles/all.js");
        __webpack_require__(/*! ./scripts/all */ "./wwwroot/scripts/all.js");
        var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
        var _vue2 = _interopRequireDefault(_vue);
        var _sTable = __webpack_require__(/*! ./components/shared/s-table/s-table.vue */ "./wwwroot/components/shared/s-table/s-table.vue");
        var _sTable2 = _interopRequireDefault(_sTable);
        var _sSelect = __webpack_require__(/*! ./components/shared/s-select/s-select.vue */ "./wwwroot/components/shared/s-select/s-select.vue");
        var _sSelect2 = _interopRequireDefault(_sSelect);
        var _sCheckbox = __webpack_require__(/*! ./components/shared/s-checkbox/s-checkbox.vue */ "./wwwroot/components/shared/s-checkbox/s-checkbox.vue");
        var _sCheckbox2 = _interopRequireDefault(_sCheckbox);
        var _sNavMenu = __webpack_require__(/*! ./components/shared/s-nav-menu/s-nav-menu.vue */ "./wwwroot/components/shared/s-nav-menu/s-nav-menu.vue");
        var _sNavMenu2 = _interopRequireDefault(_sNavMenu);
        var _sNavMenuItem = __webpack_require__(/*! ./components/shared/s-nav-menu-item/s-nav-menu-item.vue */ "./wwwroot/components/shared/s-nav-menu-item/s-nav-menu-item.vue");
        var _sNavMenuItem2 = _interopRequireDefault(_sNavMenuItem);
        var _sSideNavMenu = __webpack_require__(/*! ./components/shared/s-side-nav-menu/s-side-nav-menu.vue */ "./wwwroot/components/shared/s-side-nav-menu/s-side-nav-menu.vue");
        var _sSideNavMenu2 = _interopRequireDefault(_sSideNavMenu);
        var _sMaterialInput = __webpack_require__(/*! ./components/shared/s-material-input/s-material-input.vue */ "./wwwroot/components/shared/s-material-input/s-material-input.vue");
        var _sMaterialInput2 = _interopRequireDefault(_sMaterialInput);
        var _sDatepicker = __webpack_require__(/*! ./components/shared/s-datepicker/s-datepicker.vue */ "./wwwroot/components/shared/s-datepicker/s-datepicker.vue");
        var _sDatepicker2 = _interopRequireDefault(_sDatepicker);
        var _sDatepickerRange = __webpack_require__(/*! ./components/shared/s-datepicker-range/s-datepicker-range.vue */ "./wwwroot/components/shared/s-datepicker-range/s-datepicker-range.vue");
        var _sDatepickerRange2 = _interopRequireDefault(_sDatepickerRange);
        var _vueRouter = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
        var _vueRouter2 = _interopRequireDefault(_vueRouter);
        var _home = __webpack_require__(/*! ./components/application/home/home.vue */ "./wwwroot/components/application/home/home.vue");
        var _home2 = _interopRequireDefault(_home);
        var _experiment = __webpack_require__(/*! ./components/application/experiment/experiment.vue */ "./wwwroot/components/application/experiment/experiment.vue");
        var _experiment2 = _interopRequireDefault(_experiment);
        var _app = __webpack_require__(/*! ./components/app.vue */ "./wwwroot/components/app.vue");
        var _app2 = _interopRequireDefault(_app);
        var _store = __webpack_require__(/*! ./store */ "./wwwroot/store/index.js");
        var _store2 = _interopRequireDefault(_store);
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
        //import calendar from './components/shared/s-calendar/s-calendar.vue';
        //import datepickerOrg from './components/shared/s-datepicker-org/s-datepicker.vue';
        _vue2.default.component('s-table', _sTable2.default);
        /* COMPONENTS REGISTRATION */
        _vue2.default.component('s-select', _sSelect2.default);
        _vue2.default.component('s-checkbox', _sCheckbox2.default);
        _vue2.default.component('s-material-input', _sMaterialInput2.default);
        _vue2.default.component('s-nav-menu', _sNavMenu2.default);
        _vue2.default.component('s-nav-menu-item', _sNavMenuItem2.default);
        _vue2.default.component('s-side-nav-menu', _sSideNavMenu2.default);
        //Vue.component('s-calendar', calendar);
        //Vue.component('s-datepicker-org', datepickerOrg);
        _vue2.default.component('s-datepicker', _sDatepicker2.default);
        _vue2.default.component('s-datepicker-range', _sDatepickerRange2.default);
        /* ROUTING */
        _vue2.default.use(_vueRouter2.default);
        debugger;
        var router = new _vueRouter2.default({
            routes: [{
                    path: '/',
                    name: 'home',
                    component: _home2.default
                }, {
                    path: '/experiment',
                    name: 'experiment',
                    component: _experiment2.default
                }]
        });
        /* APPLICATION */
        var application = new _vue2.default({
            el: '.application',
            render: function render(h) {
                return h(_app2.default);
            },
            router: router,
            store: _store2.default
        });
        /***/ 
    }),
    /***/ "./wwwroot/components/app.vue": 
    /*!************************************!*\
      !*** ./wwwroot/components/app.vue ***!
      \************************************/
    /*! no static exports found */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_app_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!../../node_modules/vue-loader/lib/selector?type=script&index=0!./app.vue */ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./wwwroot/components/app.vue");
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_app_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_app_vue__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_app_vue__WEBPACK_IMPORTED_MODULE_0__)
            if (__WEBPACK_IMPORT_KEY__ !== 'default')
                (function (key) { __webpack_require__.d(__webpack_exports__, key, function () { return _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_app_vue__WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));
        /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_4fd7ffac_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-4fd7ffac","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../node_modules/vue-loader/lib/selector?type=template&index=0!./app.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-4fd7ffac\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/app.vue");
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
        var disposed = false;
        function injectStyle(context) {
            if (disposed)
                return;
            __webpack_require__(/*! !../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./app.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/app.vue");
        }
        /* script */
        /* template */
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_app_vue__WEBPACK_IMPORTED_MODULE_0___default.a, _node_modules_vue_loader_lib_template_compiler_index_id_data_v_4fd7ffac_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_vue__WEBPACK_IMPORTED_MODULE_1__["render"], _node_modules_vue_loader_lib_template_compiler_index_id_data_v_4fd7ffac_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_app_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
        Component.options.__file = "wwwroot\\components\\app.vue";
        /* hot reload */
        if (false) { }
        /* harmony default export */ __webpack_exports__["default"] = (Component.exports);
        /***/ 
    }),
    /***/ "./wwwroot/components/application/experiment/experiment.vue": 
    /*!******************************************************************!*\
      !*** ./wwwroot/components/application/experiment/experiment.vue ***!
      \******************************************************************/
    /*! no static exports found */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_experiment_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./experiment.vue */ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./wwwroot/components/application/experiment/experiment.vue");
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_experiment_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_experiment_vue__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_experiment_vue__WEBPACK_IMPORTED_MODULE_0__)
            if (__WEBPACK_IMPORT_KEY__ !== 'default')
                (function (key) { __webpack_require__.d(__webpack_exports__, key, function () { return _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_experiment_vue__WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));
        /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_59e23b0a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_experiment_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-59e23b0a","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./experiment.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-59e23b0a\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/application/experiment/experiment.vue");
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
        var disposed = false;
        function injectStyle(context) {
            if (disposed)
                return;
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-59e23b0a","scoped":true,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./experiment.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-59e23b0a\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/application/experiment/experiment.vue");
        }
        /* script */
        /* template */
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-59e23b0a";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_experiment_vue__WEBPACK_IMPORTED_MODULE_0___default.a, _node_modules_vue_loader_lib_template_compiler_index_id_data_v_59e23b0a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_experiment_vue__WEBPACK_IMPORTED_MODULE_1__["render"], _node_modules_vue_loader_lib_template_compiler_index_id_data_v_59e23b0a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_experiment_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
        Component.options.__file = "wwwroot\\components\\application\\experiment\\experiment.vue";
        /* hot reload */
        if (false) { }
        /* harmony default export */ __webpack_exports__["default"] = (Component.exports);
        /***/ 
    }),
    /***/ "./wwwroot/components/application/home/home.vue": 
    /*!******************************************************!*\
      !*** ./wwwroot/components/application/home/home.vue ***!
      \******************************************************/
    /*! no static exports found */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./home.vue */ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./wwwroot/components/application/home/home.vue");
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__WEBPACK_IMPORTED_MODULE_0__)
            if (__WEBPACK_IMPORT_KEY__ !== 'default')
                (function (key) { __webpack_require__.d(__webpack_exports__, key, function () { return _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));
        /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ca6050a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-2ca6050a","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./home.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2ca6050a\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/application/home/home.vue");
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
        var disposed = false;
        function injectStyle(context) {
            if (disposed)
                return;
            __webpack_require__(/*! !vue-style-loader!css-loader?sourceMap!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./home.vue */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?sourceMap!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/application/home/home.vue");
        }
        /* script */
        /* template */
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_home_vue__WEBPACK_IMPORTED_MODULE_0___default.a, _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ca6050a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__WEBPACK_IMPORTED_MODULE_1__["render"], _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2ca6050a_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_home_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
        Component.options.__file = "wwwroot\\components\\application\\home\\home.vue";
        /* hot reload */
        if (false) { }
        /* harmony default export */ __webpack_exports__["default"] = (Component.exports);
        /***/ 
    }),
    /***/ "./wwwroot/components/shared/s-checkbox/s-checkbox.vue": 
    /*!*************************************************************!*\
      !*** ./wwwroot/components/shared/s-checkbox/s-checkbox.vue ***!
      \*************************************************************/
    /*! no static exports found */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_checkbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./s-checkbox.js */ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./wwwroot/components/shared/s-checkbox/s-checkbox.js");
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_checkbox_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_checkbox_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_checkbox_js__WEBPACK_IMPORTED_MODULE_0__)
            if (__WEBPACK_IMPORT_KEY__ !== 'default')
                (function (key) { __webpack_require__.d(__webpack_exports__, key, function () { return _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_checkbox_js__WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));
        /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_40d32dec_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_checkbox_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-40d32dec","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./s-checkbox.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-40d32dec\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-checkbox/s-checkbox.vue");
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
        var disposed = false;
        function injectStyle(context) {
            if (disposed)
                return;
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-40d32dec","scoped":true,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./s-checkbox.scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-40d32dec\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-checkbox/s-checkbox.scss");
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-40d32dec","scoped":true,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./s-checkbox.material.scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-40d32dec\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-checkbox/s-checkbox.material.scss");
        }
        /* script */
        /* template */
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-40d32dec";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_checkbox_js__WEBPACK_IMPORTED_MODULE_0___default.a, _node_modules_vue_loader_lib_template_compiler_index_id_data_v_40d32dec_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_checkbox_vue__WEBPACK_IMPORTED_MODULE_1__["render"], _node_modules_vue_loader_lib_template_compiler_index_id_data_v_40d32dec_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_checkbox_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
        Component.options.__file = "wwwroot\\components\\shared\\s-checkbox\\s-checkbox.vue";
        /* hot reload */
        if (false) { }
        /* harmony default export */ __webpack_exports__["default"] = (Component.exports);
        /***/ 
    }),
    /***/ "./wwwroot/components/shared/s-datepicker-range/s-datepicker-range.vue": 
    /*!*****************************************************************************!*\
      !*** ./wwwroot/components/shared/s-datepicker-range/s-datepicker-range.vue ***!
      \*****************************************************************************/
    /*! no static exports found */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_s_datepicker_range_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./s-datepicker-range.vue */ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./wwwroot/components/shared/s-datepicker-range/s-datepicker-range.vue");
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_s_datepicker_range_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_s_datepicker_range_vue__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_s_datepicker_range_vue__WEBPACK_IMPORTED_MODULE_0__)
            if (__WEBPACK_IMPORT_KEY__ !== 'default')
                (function (key) { __webpack_require__.d(__webpack_exports__, key, function () { return _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_s_datepicker_range_vue__WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));
        /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_3260d92c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_datepicker_range_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-3260d92c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./s-datepicker-range.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-3260d92c\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-datepicker-range/s-datepicker-range.vue");
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
        var disposed = false;
        function injectStyle(context) {
            if (disposed)
                return;
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./s-datepicker-range.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/shared/s-datepicker-range/s-datepicker-range.vue");
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=1!./s-datepicker-range.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=1!./wwwroot/components/shared/s-datepicker-range/s-datepicker-range.vue");
        }
        /* script */
        /* template */
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_s_datepicker_range_vue__WEBPACK_IMPORTED_MODULE_0___default.a, _node_modules_vue_loader_lib_template_compiler_index_id_data_v_3260d92c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_datepicker_range_vue__WEBPACK_IMPORTED_MODULE_1__["render"], _node_modules_vue_loader_lib_template_compiler_index_id_data_v_3260d92c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_datepicker_range_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
        Component.options.__file = "wwwroot\\components\\shared\\s-datepicker-range\\s-datepicker-range.vue";
        /* hot reload */
        if (false) { }
        /* harmony default export */ __webpack_exports__["default"] = (Component.exports);
        /***/ 
    }),
    /***/ "./wwwroot/components/shared/s-datepicker/s-datepicker.vue": 
    /*!*****************************************************************!*\
      !*** ./wwwroot/components/shared/s-datepicker/s-datepicker.vue ***!
      \*****************************************************************/
    /*! no static exports found */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_s_datepicker_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector?type=script&index=0!./s-datepicker.vue */ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./wwwroot/components/shared/s-datepicker/s-datepicker.vue");
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_s_datepicker_vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_s_datepicker_vue__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_s_datepicker_vue__WEBPACK_IMPORTED_MODULE_0__)
            if (__WEBPACK_IMPORT_KEY__ !== 'default')
                (function (key) { __webpack_require__.d(__webpack_exports__, key, function () { return _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_s_datepicker_vue__WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));
        /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c26822c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_datepicker_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-2c26822c","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./s-datepicker.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-2c26822c\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-datepicker/s-datepicker.vue");
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
        var disposed = false;
        function injectStyle(context) {
            if (disposed)
                return;
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-2c26822c","scoped":true,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!../../../../node_modules/vue-loader/lib/selector?type=styles&index=0!./s-datepicker.vue */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-2c26822c\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./wwwroot/components/shared/s-datepicker/s-datepicker.vue");
        }
        /* script */
        /* template */
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-2c26822c";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_node_modules_vue_loader_lib_selector_type_script_index_0_s_datepicker_vue__WEBPACK_IMPORTED_MODULE_0___default.a, _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c26822c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_datepicker_vue__WEBPACK_IMPORTED_MODULE_1__["render"], _node_modules_vue_loader_lib_template_compiler_index_id_data_v_2c26822c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_datepicker_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
        Component.options.__file = "wwwroot\\components\\shared\\s-datepicker\\s-datepicker.vue";
        /* hot reload */
        if (false) { }
        /* harmony default export */ __webpack_exports__["default"] = (Component.exports);
        /***/ 
    }),
    /***/ "./wwwroot/components/shared/s-material-input/s-material-input.vue": 
    /*!*************************************************************************!*\
      !*** ./wwwroot/components/shared/s-material-input/s-material-input.vue ***!
      \*************************************************************************/
    /*! no static exports found */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_material_input_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./s-material-input.js */ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./wwwroot/components/shared/s-material-input/s-material-input.js");
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_material_input_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_material_input_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_material_input_js__WEBPACK_IMPORTED_MODULE_0__)
            if (__WEBPACK_IMPORT_KEY__ !== 'default')
                (function (key) { __webpack_require__.d(__webpack_exports__, key, function () { return _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_material_input_js__WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));
        /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_40da7a2c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_material_input_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-40da7a2c","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./s-material-input.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-40da7a2c\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-material-input/s-material-input.vue");
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
        var disposed = false;
        function injectStyle(context) {
            if (disposed)
                return;
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-40da7a2c","scoped":true,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./s-material-input.scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-40da7a2c\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-material-input/s-material-input.scss");
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-40da7a2c","scoped":true,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./s-material-input.material.scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-40da7a2c\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-material-input/s-material-input.material.scss");
        }
        /* script */
        /* template */
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-40da7a2c";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_material_input_js__WEBPACK_IMPORTED_MODULE_0___default.a, _node_modules_vue_loader_lib_template_compiler_index_id_data_v_40da7a2c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_material_input_vue__WEBPACK_IMPORTED_MODULE_1__["render"], _node_modules_vue_loader_lib_template_compiler_index_id_data_v_40da7a2c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_material_input_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
        Component.options.__file = "wwwroot\\components\\shared\\s-material-input\\s-material-input.vue";
        /* hot reload */
        if (false) { }
        /* harmony default export */ __webpack_exports__["default"] = (Component.exports);
        /***/ 
    }),
    /***/ "./wwwroot/components/shared/s-nav-menu-item/s-nav-menu-item.vue": 
    /*!***********************************************************************!*\
      !*** ./wwwroot/components/shared/s-nav-menu-item/s-nav-menu-item.vue ***!
      \***********************************************************************/
    /*! no static exports found */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_nav_menu_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./s-nav-menu-item.js */ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./wwwroot/components/shared/s-nav-menu-item/s-nav-menu-item.js");
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_nav_menu_item_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_nav_menu_item_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_nav_menu_item_js__WEBPACK_IMPORTED_MODULE_0__)
            if (__WEBPACK_IMPORT_KEY__ !== 'default')
                (function (key) { __webpack_require__.d(__webpack_exports__, key, function () { return _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_nav_menu_item_js__WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));
        /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_627842ec_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_nav_menu_item_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-627842ec","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./s-nav-menu-item.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-627842ec\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-nav-menu-item/s-nav-menu-item.vue");
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
        var disposed = false;
        function injectStyle(context) {
            if (disposed)
                return;
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-627842ec","scoped":true,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./s-nav-menu-item.scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-627842ec\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-nav-menu-item/s-nav-menu-item.scss");
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-627842ec","scoped":true,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./s-nav-menu-item.material.scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-627842ec\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-nav-menu-item/s-nav-menu-item.material.scss");
        }
        /* script */
        /* template */
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-627842ec";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_nav_menu_item_js__WEBPACK_IMPORTED_MODULE_0___default.a, _node_modules_vue_loader_lib_template_compiler_index_id_data_v_627842ec_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_nav_menu_item_vue__WEBPACK_IMPORTED_MODULE_1__["render"], _node_modules_vue_loader_lib_template_compiler_index_id_data_v_627842ec_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_nav_menu_item_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
        Component.options.__file = "wwwroot\\components\\shared\\s-nav-menu-item\\s-nav-menu-item.vue";
        /* hot reload */
        if (false) { }
        /* harmony default export */ __webpack_exports__["default"] = (Component.exports);
        /***/ 
    }),
    /***/ "./wwwroot/components/shared/s-nav-menu/s-nav-menu.vue": 
    /*!*************************************************************!*\
      !*** ./wwwroot/components/shared/s-nav-menu/s-nav-menu.vue ***!
      \*************************************************************/
    /*! no static exports found */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_nav_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./s-nav-menu.js */ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./wwwroot/components/shared/s-nav-menu/s-nav-menu.js");
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_nav_menu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_nav_menu_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_nav_menu_js__WEBPACK_IMPORTED_MODULE_0__)
            if (__WEBPACK_IMPORT_KEY__ !== 'default')
                (function (key) { __webpack_require__.d(__webpack_exports__, key, function () { return _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_nav_menu_js__WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));
        /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_1dafad6c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_nav_menu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-1dafad6c","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./s-nav-menu.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1dafad6c\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-nav-menu/s-nav-menu.vue");
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
        var disposed = false;
        function injectStyle(context) {
            if (disposed)
                return;
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./s-nav-menu.scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-nav-menu/s-nav-menu.scss");
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./s-nav-menu.material.scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-nav-menu/s-nav-menu.material.scss");
        }
        /* script */
        /* template */
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_nav_menu_js__WEBPACK_IMPORTED_MODULE_0___default.a, _node_modules_vue_loader_lib_template_compiler_index_id_data_v_1dafad6c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_nav_menu_vue__WEBPACK_IMPORTED_MODULE_1__["render"], _node_modules_vue_loader_lib_template_compiler_index_id_data_v_1dafad6c_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_nav_menu_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
        Component.options.__file = "wwwroot\\components\\shared\\s-nav-menu\\s-nav-menu.vue";
        /* hot reload */
        if (false) { }
        /* harmony default export */ __webpack_exports__["default"] = (Component.exports);
        /***/ 
    }),
    /***/ "./wwwroot/components/shared/s-select/s-select.vue": 
    /*!*********************************************************!*\
      !*** ./wwwroot/components/shared/s-select/s-select.vue ***!
      \*********************************************************/
    /*! no static exports found */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_select_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./s-select.js */ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./wwwroot/components/shared/s-select/s-select.js");
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_select_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_select_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_select_js__WEBPACK_IMPORTED_MODULE_0__)
            if (__WEBPACK_IMPORT_KEY__ !== 'default')
                (function (key) { __webpack_require__.d(__webpack_exports__, key, function () { return _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_select_js__WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));
        /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_ecda202c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_select_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-ecda202c","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./s-select.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-ecda202c\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-select/s-select.vue");
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
        var disposed = false;
        function injectStyle(context) {
            if (disposed)
                return;
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-ecda202c","scoped":true,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./s-select.scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-ecda202c\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-select/s-select.scss");
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-ecda202c","scoped":true,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./s-select.material.scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-ecda202c\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-select/s-select.material.scss");
        }
        /* script */
        /* template */
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-ecda202c";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_select_js__WEBPACK_IMPORTED_MODULE_0___default.a, _node_modules_vue_loader_lib_template_compiler_index_id_data_v_ecda202c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_select_vue__WEBPACK_IMPORTED_MODULE_1__["render"], _node_modules_vue_loader_lib_template_compiler_index_id_data_v_ecda202c_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_select_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
        Component.options.__file = "wwwroot\\components\\shared\\s-select\\s-select.vue";
        /* hot reload */
        if (false) { }
        /* harmony default export */ __webpack_exports__["default"] = (Component.exports);
        /***/ 
    }),
    /***/ "./wwwroot/components/shared/s-side-nav-menu/s-side-nav-menu.vue": 
    /*!***********************************************************************!*\
      !*** ./wwwroot/components/shared/s-side-nav-menu/s-side-nav-menu.vue ***!
      \***********************************************************************/
    /*! no static exports found */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_side_nav_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./s-side-nav-menu.js */ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./wwwroot/components/shared/s-side-nav-menu/s-side-nav-menu.js");
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_side_nav_menu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_side_nav_menu_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_side_nav_menu_js__WEBPACK_IMPORTED_MODULE_0__)
            if (__WEBPACK_IMPORT_KEY__ !== 'default')
                (function (key) { __webpack_require__.d(__webpack_exports__, key, function () { return _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_side_nav_menu_js__WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));
        /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f4184bc_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_side_nav_menu_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-0f4184bc","hasScoped":false,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./s-side-nav-menu.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-0f4184bc\",\"hasScoped\":false,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-side-nav-menu/s-side-nav-menu.vue");
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
        var disposed = false;
        function injectStyle(context) {
            if (disposed)
                return;
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./s-side-nav-menu.scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-side-nav-menu/s-side-nav-menu.scss");
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"scoped":false,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./s-side-nav-menu.material.scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"scoped\":false,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-side-nav-menu/s-side-nav-menu.material.scss");
        }
        /* script */
        /* template */
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = null;
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_side_nav_menu_js__WEBPACK_IMPORTED_MODULE_0___default.a, _node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f4184bc_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_side_nav_menu_vue__WEBPACK_IMPORTED_MODULE_1__["render"], _node_modules_vue_loader_lib_template_compiler_index_id_data_v_0f4184bc_hasScoped_false_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_side_nav_menu_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
        Component.options.__file = "wwwroot\\components\\shared\\s-side-nav-menu\\s-side-nav-menu.vue";
        /* hot reload */
        if (false) { }
        /* harmony default export */ __webpack_exports__["default"] = (Component.exports);
        /***/ 
    }),
    /***/ "./wwwroot/components/shared/s-table/s-table.data.js": 
    /*!***********************************************************!*\
      !*** ./wwwroot/components/shared/s-table/s-table.data.js ***!
      \***********************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        function _defineProperty(obj, key, value) { if (key in obj) {
            Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
        }
        else {
            obj[key] = value;
        } return obj; }
        var columnFilters = exports.columnFilters = {
            'eq': {
                predicate: function predicate(curr, exp) {
                    return curr === exp;
                },
                title: 'Is equal to',
                type: 'all'
            },
            "neq": {
                predicate: function predicate(curr, exp) {
                    return curr !== exp;
                },
                title: 'Is not equal to',
                type: 'all'
            },
            'null': {
                predicate: function predicate(curr) {
                    return curr === null;
                },
                title: 'Is null',
                type: 'all',
                single: true
            },
            'nnull': {
                predicate: function predicate(curr) {
                    return curr !== null;
                },
                title: 'Is not null',
                type: 'all',
                single: true
            },
            'greq': {
                predicate: function predicate(curr, exp) {
                    return +curr >= +exp;
                },
                title: 'Is greater than or equal to',
                type: 'number'
            },
            'gr': {
                predicate: function predicate(curr, exp) {
                    return +curr > +exp;
                },
                title: 'Is greater than',
                type: 'number'
            },
            'lseq': {
                predicate: function predicate(curr, exp) {
                    return +curr <= +exp;
                },
                title: 'Is less than or equal to',
                type: 'number'
            },
            'ls': {
                predicate: function predicate(curr, exp) {
                    return +curr < +exp;
                },
                title: 'Is less than',
                type: 'number'
            },
            'strtwth': {
                predicate: function predicate(curr, exp) {
                    return curr.startsWith(exp);
                },
                title: 'Starts with',
                type: 'string'
            },
            'endwth': {
                predicate: function predicate(curr, exp) {
                    return curr.endsWith(exp);
                },
                title: 'Ends with',
                type: 'string'
            },
            'in': {
                predicate: function predicate(curr, exp) {
                    return curr.includes(exp);
                },
                title: 'Contains',
                type: 'string'
            },
            'nin': {
                predicate: function predicate(curr, exp) {
                    return !curr.includes(exp);
                },
                title: 'Does not contain',
                type: 'string'
            },
            'empt': _defineProperty({
                predicate: function predicate(curr, exp) {
                    return curr === "";
                },
                type: 'Is empty'
            }, 'type', 'string'),
            'nempt': _defineProperty({
                predicate: function predicate(curr, exp) {
                    return curr !== "";
                },
                type: 'Is not empty'
            }, 'type', 'string')
        };
        /***/ 
    }),
    /***/ "./wwwroot/components/shared/s-table/s-table.functions.js": 
    /*!****************************************************************!*\
      !*** ./wwwroot/components/shared/s-table/s-table.functions.js ***!
      \****************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
        exports.getReadableName = getReadableName;
        exports.removeItemInArray = removeItemInArray;
        exports.getColumns = getColumns;
        exports.getMinWidth = getMinWidth;
        exports.calculateWidth = calculateWidth;
        function getReadableName(name) {
            var result = name[0].toUpperCase();
            for (var i = 1; i < name.length; i++) {
                var c = name[i];
                var cUpper = c.toUpperCase();
                if ('0123456789'.indexOf(c) === -1 && cUpper === c) {
                    result += ' ' + cUpper;
                }
                else {
                    result += c;
                }
            }
            return result;
        }
        function removeItemInArray(array, item) {
            if (array && array.length) {
                var indexOfItem = array.indexOf(item);
                if (indexOfItem > -1) {
                    array.splice(indexOfItem, 1);
                }
            }
        }
        function getColumns(columns, sortable, filtrable, groupable, resizable, movable, hidable) {
            var defaultType = 'string';
            return columns.map(function (x) {
                switch (typeof x === 'undefined' ? 'undefined' : _typeof(x)) {
                    case 'string':
                        var readableName = getReadableName(x);
                        var columnSortable = sortable || false, columnFiltrable = filtrable || false, columnGroupable = groupable || false, columnHidable = hidable || false;
                        return {
                            id: x,
                            name: readableName,
                            type: defaultType,
                            sortable: columnSortable,
                            filtrable: columnFiltrable,
                            groupable: columnGroupable,
                            hidable: columnHidable,
                            resizable: resizable || false,
                            movable: movable || false,
                            width: calculateWidth(readableName, columnHidable, columnFiltrable, columnGroupable, columnSortable)
                        };
                    case 'object':
                        if (Array.isArray(x)) {
                            var _readableName = x[1] || getReadableName(x[0]);
                            var _columnSortable = sortable || false, _columnFiltrable = filtrable || false, _columnGroupable = groupable || false, _columnHidable = hidable || false;
                            return {
                                id: x[0],
                                name: _readableName,
                                type: x[2] || defaultType,
                                sortable: _columnSortable,
                                filtrable: _columnFiltrable,
                                groupable: _columnGroupable,
                                hidable: _columnHidable,
                                resizable: resizable || false,
                                movable: movable || false,
                                width: calculateWidth(_readableName, _columnHidable, _columnFiltrable, _columnGroupable, _columnSortable)
                            };
                        }
                        else {
                            var _readableName2 = x.name || getReadableName(x.id);
                            var _columnSortable2 = x.sortable || sortable || false, _columnFiltrable2 = x.filtrable || filtrable || false, _columnGroupable2 = x.groupable || groupable || false, _columnHidable2 = x.hidable || hidable || false;
                            return {
                                id: x.id,
                                name: _readableName2,
                                type: x.type || defaultType,
                                sortable: _columnSortable2,
                                filtrable: _columnFiltrable2,
                                groupable: _columnGroupable2,
                                hidable: _columnHidable2,
                                resizable: x.resizable || resizable || false,
                                movable: x.movable || movable || false,
                                width: x.width || calculateWidth(_readableName2, _columnHidable2, _columnFiltrable2, _columnGroupable2, _columnSortable2)
                            };
                        }
                }
            });
        }
        function getMinWidth(columnName) {
            return columnName.length * 8 + 10; // 8
        }
        function calculateWidth(columnName, hidable, filtrable, groupable, sortable) {
            return getMinWidth(columnName) + (hidable ? 20 : 0) + (filtrable ? 20 : 0) + (groupable ? 30 : 0) + (sortable ? 30 : 0);
        }
        /***/ 
    }),
    /***/ "./wwwroot/components/shared/s-table/s-table.gates.js": 
    /*!************************************************************!*\
      !*** ./wwwroot/components/shared/s-table/s-table.gates.js ***!
      \************************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.getTypedValue = getTypedValue;
        exports.sort = sort;
        exports.filter = filter;
        exports.group = group;
        exports.page = page;
        function getTypedValue(value, type) {
            switch (type) {
                case 'date':
                    /* TODO: use moment.js */
                    return Date.parse(value);
                case 'string':
                    return value;
                case 'number':
                    return +value;
                case 'boolean':
                    return !!value;
            }
        }
        function sort(data, state) {
            function sortComparer(item1, item2, sortingColumns) {
                var result = 0;
                for (var i = 0; i < sortingColumns.length; i++) {
                    var sortingColumn = sortingColumns[i];
                    var _ref = [item1[sortingColumn.id], item2[sortingColumn.id]], a = _ref[0], b = _ref[1];
                    result = result || compare(getTypedValue(a, sortingColumn.type), getTypedValue(b, sortingColumn.type), sortingColumn.sortingDirection);
                }
                return result;
            }
            function compare(a, b, direction) {
                return a > b ? direction : a < b ? -direction : 0;
            }
            if (state.sortingColumns && state.sortingColumns.length > 0) {
                data.items.sort(function (item1, item2) {
                    return sortComparer(item1, item2, state.sortingColumns);
                });
            }
        }
        function filter(data, state) {
            if (state.filteringColumns && state.filteringColumns.length > 0) {
                data.items = data.items.filter(function (value) {
                    var result = true;
                    for (var i = 0; i < state.filteringColumns.length; i++) {
                        var filteringColumn = state.filteringColumns[i];
                        result = result && filteringColumn.filtering.filter.predicate(getTypedValue(value[filteringColumn.id], filteringColumn.type), getTypedValue(filteringColumn.filtering.expected, filteringColumn.type));
                    }
                    return result;
                });
            }
        }
        function group(data, state) {
            if (state.groupingColumns && state.groupingColumns.length > 0) {
                for (var i = 0; i < data.items.length; i++) {
                    var item = data.items[i];
                    var valueOfGroupingFields = [];
                    for (var j = 0; j < state.groupingColumns.length; j++) {
                        var groupingColumn = state.groupingColumns[j];
                        var value = item[groupingColumn.id];
                        valueOfGroupingFields.push(value);
                    }
                    item.$_grouping_values = valueOfGroupingFields;
                }
            }
        }
        function page(data, state) {
            if (state.paging) {
                state.paging.count = state.paging.size == 0 ? 1 : Math.ceil(data.items.length / state.paging.size) || 1;
                if (state.paging.current > state.paging.count) {
                    state.paging.current = state.paging.count;
                }
                if (state.paging.size !== 0) {
                    var from = state.paging.size * (state.paging.current - 1);
                    var to = state.paging.size * state.paging.current;
                    data.items = data.items.slice(from, to);
                }
                data.paging = state.paging;
            }
        }
        /***/ 
    }),
    /***/ "./wwwroot/components/shared/s-table/s-table.vue": 
    /*!*******************************************************!*\
      !*** ./wwwroot/components/shared/s-table/s-table.vue ***!
      \*******************************************************/
    /*! no static exports found */
    /***/ (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_table_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !babel-loader?{"presets":["env","es2015","stage-0","vue"],"sourceMap":true}!./s-table.js */ "./node_modules/babel-loader/lib/index.js?{\"presets\":[\"env\",\"es2015\",\"stage-0\",\"vue\"],\"sourceMap\":true}!./wwwroot/components/shared/s-table/s-table.js");
        /* harmony import */ var _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_table_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_table_js__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony reexport (unknown) */ for (var __WEBPACK_IMPORT_KEY__ in _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_table_js__WEBPACK_IMPORTED_MODULE_0__)
            if (__WEBPACK_IMPORT_KEY__ !== 'default')
                (function (key) { __webpack_require__.d(__webpack_exports__, key, function () { return _babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_table_js__WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));
        /* harmony import */ var _node_modules_vue_loader_lib_template_compiler_index_id_data_v_17c0c85a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_table_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/template-compiler/index?{"id":"data-v-17c0c85a","hasScoped":true,"optionsId":"0","buble":{"transforms":{}}}!../../../../node_modules/vue-loader/lib/selector?type=template&index=0!./s-table.vue */ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-17c0c85a\",\"hasScoped\":true,\"optionsId\":\"0\",\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./wwwroot/components/shared/s-table/s-table.vue");
        /* harmony import */ var _node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/component-normalizer */ "./node_modules/vue-loader/lib/runtime/component-normalizer.js");
        var disposed = false;
        function injectStyle(context) {
            if (disposed)
                return;
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-17c0c85a","scoped":true,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./s-table.scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-17c0c85a\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-table/s-table.scss");
            __webpack_require__(/*! !../../../../node_modules/extract-text-webpack-plugin/dist/loader.js?{"id":1,"omit":1,"remove":true}!style-loader!css-loader!../../../../node_modules/vue-loader/lib/style-compiler/index?{"optionsId":"0","vue":true,"id":"data-v-17c0c85a","scoped":true,"sourceMap":true}!postcss-loader!resolve-url-loader!sass-loader?sourceMap?{"includePaths":["C://Projects//CSharp//Shinai//Shinai//images","C://Projects//CSharp//Shinai//Shinai//dist"],"sourceMap":true}!./s-table.material.scss */ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"optionsId\":\"0\",\"vue\":true,\"id\":\"data-v-17c0c85a\",\"scoped\":true,\"sourceMap\":true}!./node_modules/postcss-loader/src/index.js!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/lib/loader.js?sourceMap!./wwwroot/components/shared/s-table/s-table.material.scss");
        }
        /* script */
        /* template */
        /* template functional */
        var __vue_template_functional__ = false;
        /* styles */
        var __vue_styles__ = injectStyle;
        /* scopeId */
        var __vue_scopeId__ = "data-v-17c0c85a";
        /* moduleIdentifier (server only) */
        var __vue_module_identifier__ = null;
        var Component = Object(_node_modules_vue_loader_lib_runtime_component_normalizer__WEBPACK_IMPORTED_MODULE_2__["default"])(_babel_loader_presets_env_es2015_stage_0_vue_sourceMap_true_s_table_js__WEBPACK_IMPORTED_MODULE_0___default.a, _node_modules_vue_loader_lib_template_compiler_index_id_data_v_17c0c85a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_table_vue__WEBPACK_IMPORTED_MODULE_1__["render"], _node_modules_vue_loader_lib_template_compiler_index_id_data_v_17c0c85a_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_s_table_vue__WEBPACK_IMPORTED_MODULE_1__["staticRenderFns"], __vue_template_functional__, __vue_styles__, __vue_scopeId__, __vue_module_identifier__);
        Component.options.__file = "wwwroot\\components\\shared\\s-table\\s-table.vue";
        /* hot reload */
        if (false) { }
        /* harmony default export */ __webpack_exports__["default"] = (Component.exports);
        /***/ 
    }),
    /***/ "./wwwroot/scripts/all.js": 
    /*!********************************!*\
      !*** ./wwwroot/scripts/all.js ***!
      \********************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__(/*! ./shared/all */ "./wwwroot/scripts/shared/all.js");
        /***/ 
    }),
    /***/ "./wwwroot/scripts/shared/all.js": 
    /*!***************************************!*\
      !*** ./wwwroot/scripts/shared/all.js ***!
      \***************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__(/*! ./drag-drop-touch */ "./wwwroot/scripts/shared/drag-drop-touch.js");
        /***/ 
    }),
    /***/ "./wwwroot/scripts/shared/drag-drop-touch.js": 
    /*!***************************************************!*\
      !*** ./wwwroot/scripts/shared/drag-drop-touch.js ***!
      \***************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        var DragDropTouch;
        (function (DragDropTouch_1) {
            'use strict';
            /**
             * Object used to hold the data that is being dragged during drag and drop operations.
             *
             * It may hold one or more data items of different types. For more information about
             * drag and drop operations and data transfer objects, see
             * <a href="https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer">HTML Drag and Drop API</a>.
             *
             * This object is created automatically by the @see:DragDropTouch singleton and is
             * accessible through the @see:dataTransfer property of all drag events.
             */
            var DataTransfer = function () {
                function DataTransfer() {
                    this._dropEffect = 'move';
                    this._effectAllowed = 'all';
                    this._data = {};
                }
                Object.defineProperty(DataTransfer.prototype, "dropEffect", {
                    /**
                     * Gets or sets the type of drag-and-drop operation currently selected.
                     * The value must be 'none',  'copy',  'link', or 'move'.
                     */
                    get: function get() {
                        return this._dropEffect;
                    },
                    set: function set(value) {
                        this._dropEffect = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DataTransfer.prototype, "effectAllowed", {
                    /**
                     * Gets or sets the types of operations that are possible.
                     * Must be one of 'none', 'copy', 'copyLink', 'copyMove', 'link',
                     * 'linkMove', 'move', 'all' or 'uninitialized'.
                     */
                    get: function get() {
                        return this._effectAllowed;
                    },
                    set: function set(value) {
                        this._effectAllowed = value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(DataTransfer.prototype, "types", {
                    /**
                     * Gets an array of strings giving the formats that were set in the @see:dragstart event.
                     */
                    get: function get() {
                        return Object.keys(this._data);
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Removes the data associated with a given type.
                 *
                 * The type argument is optional. If the type is empty or not specified, the data
                 * associated with all types is removed. If data for the specified type does not exist,
                 * or the data transfer contains no data, this method will have no effect.
                 *
                 * @param type Type of data to remove.
                 */
                DataTransfer.prototype.clearData = function (type) {
                    if (type != null) {
                        delete this._data[type];
                    }
                    else {
                        this._data = null;
                    }
                };
                /**
                 * Retrieves the data for a given type, or an empty string if data for that type does
                 * not exist or the data transfer contains no data.
                 *
                 * @param type Type of data to retrieve.
                 */
                DataTransfer.prototype.getData = function (type) {
                    return this._data[type] || '';
                };
                /**
                 * Set the data for a given type.
                 *
                 * For a list of recommended drag types, please see
                 * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Recommended_Drag_Types.
                 *
                 * @param type Type of data to add.
                 * @param value Data to add.
                 */
                DataTransfer.prototype.setData = function (type, value) {
                    this._data[type] = value;
                };
                /**
                 * Set the image to be used for dragging if a custom one is desired.
                 *
                 * @param img An image element to use as the drag feedback image.
                 * @param offsetX The horizontal offset within the image.
                 * @param offsetY The vertical offset within the image.
                 */
                DataTransfer.prototype.setDragImage = function (img, offsetX, offsetY) {
                    var ddt = DragDropTouch._instance;
                    ddt._imgCustom = img;
                    ddt._imgOffset = { x: offsetX, y: offsetY };
                };
                return DataTransfer;
            }();
            DragDropTouch_1.DataTransfer = DataTransfer;
            /**
             * Defines a class that adds support for touch-based HTML5 drag/drop operations.
             *
             * The @see:DragDropTouch class listens to touch events and raises the
             * appropriate HTML5 drag/drop events as if the events had been caused
             * by mouse actions.
             *
             * The purpose of this class is to enable using existing, standard HTML5
             * drag/drop code on mobile devices running IOS or Android.
             *
             * To use, include the DragDropTouch.js file on the page. The class will
             * automatically start monitoring touch events and will raise the HTML5
             * drag drop events (dragstart, dragenter, dragleave, drop, dragend) which
             * should be handled by the application.
             *
             * For details and examples on HTML drag and drop, see
             * https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Drag_operations.
             */
            var DragDropTouch = function () {
                /**
                 * Initializes the single instance of the @see:DragDropTouch class.
                 */
                function DragDropTouch() {
                    this._lastClick = 0;
                    // enforce singleton pattern
                    if (DragDropTouch._instance) {
                        throw 'DragDropTouch instance already created.';
                    }
                    // listen to touch events
                    if ('ontouchstart' in document) {
                        var d = document, ts = this._touchstart.bind(this), tm = this._touchmove.bind(this), te = this._touchend.bind(this);
                        d.addEventListener('touchstart', ts);
                        d.addEventListener('touchmove', tm);
                        d.addEventListener('touchend', te);
                        d.addEventListener('touchcancel', te);
                    }
                }
                /**
                 * Gets a reference to the @see:DragDropTouch singleton.
                 */
                DragDropTouch.getInstance = function () {
                    return DragDropTouch._instance;
                };
                // ** event handlers
                DragDropTouch.prototype._touchstart = function (e) {
                    var _this = this;
                    if (this._shouldHandle(e)) {
                        // raise double-click and prevent zooming
                        if (Date.now() - this._lastClick < DragDropTouch._DBLCLICK) {
                            if (this._dispatchEvent(e, 'dblclick', e.target)) {
                                e.preventDefault();
                                this._reset();
                                return;
                            }
                        }
                        // clear all variables
                        this._reset();
                        // get nearest draggable element
                        var src = this._closestDraggable(e.target);
                        if (src) {
                            // give caller a chance to handle the hover/move events
                            if (!this._dispatchEvent(e, 'mousemove', e.target) && !this._dispatchEvent(e, 'mousedown', e.target)) {
                                // get ready to start dragging
                                this._dragSource = src;
                                this._ptDown = this._getPoint(e);
                                this._lastTouch = e;
                                e.preventDefault();
                                // show context menu if the user hasn't started dragging after a while
                                setTimeout(function () {
                                    if (_this._dragSource == src && _this._img == null) {
                                        if (_this._dispatchEvent(e, 'contextmenu', src)) {
                                            _this._reset();
                                        }
                                    }
                                }, DragDropTouch._CTXMENU);
                            }
                        }
                    }
                };
                DragDropTouch.prototype._touchmove = function (e) {
                    if (this._shouldHandle(e)) {
                        // see if target wants to handle move
                        var target = this._getTarget(e);
                        if (this._dispatchEvent(e, 'mousemove', target)) {
                            this._lastTouch = e;
                            e.preventDefault();
                            return;
                        }
                        // start dragging
                        if (this._dragSource && !this._img) {
                            var delta = this._getDelta(e);
                            if (delta > DragDropTouch._THRESHOLD) {
                                this._dispatchEvent(e, 'dragstart', this._dragSource);
                                this._createImage(e);
                                this._dispatchEvent(e, 'dragenter', target);
                            }
                        }
                        // continue dragging
                        if (this._img) {
                            this._lastTouch = e;
                            e.preventDefault(); // prevent scrolling
                            if (target != this._lastTarget) {
                                this._dispatchEvent(this._lastTouch, 'dragleave', this._lastTarget);
                                this._dispatchEvent(e, 'dragenter', target);
                                this._lastTarget = target;
                            }
                            this._moveImage(e);
                            this._dispatchEvent(e, 'dragover', target);
                        }
                    }
                };
                DragDropTouch.prototype._touchend = function (e) {
                    if (this._shouldHandle(e)) {
                        // see if target wants to handle up
                        if (this._dispatchEvent(this._lastTouch, 'mouseup', e.target)) {
                            e.preventDefault();
                            return;
                        }
                        // user clicked the element but didn't drag, so clear the source and simulate a click
                        if (!this._img) {
                            this._dragSource = null;
                            this._dispatchEvent(this._lastTouch, 'click', e.target);
                            this._lastClick = Date.now();
                        }
                        // finish dragging
                        this._destroyImage();
                        if (this._dragSource) {
                            if (e.type.indexOf('cancel') < 0) {
                                this._dispatchEvent(this._lastTouch, 'drop', this._lastTarget);
                            }
                            this._dispatchEvent(this._lastTouch, 'dragend', this._dragSource);
                            this._reset();
                        }
                    }
                };
                // ** utilities
                // ignore events that have been handled or that involve more than one touch
                DragDropTouch.prototype._shouldHandle = function (e) {
                    return e && !e.defaultPrevented && e.touches && e.touches.length < 2;
                };
                // clear all members
                DragDropTouch.prototype._reset = function () {
                    this._destroyImage();
                    this._dragSource = null;
                    this._lastTouch = null;
                    this._lastTarget = null;
                    this._ptDown = null;
                    this._dataTransfer = new DataTransfer();
                };
                // get point for a touch event
                DragDropTouch.prototype._getPoint = function (e, page) {
                    if (e && e.touches) {
                        e = e.touches[0];
                    }
                    return { x: page ? e.pageX : e.clientX, y: page ? e.pageY : e.clientY };
                };
                // get distance between the current touch event and the first one
                DragDropTouch.prototype._getDelta = function (e) {
                    var p = this._getPoint(e);
                    return Math.abs(p.x - this._ptDown.x) + Math.abs(p.y - this._ptDown.y);
                };
                // get the element at a given touch event
                DragDropTouch.prototype._getTarget = function (e) {
                    var pt = this._getPoint(e), el = document.elementFromPoint(pt.x, pt.y);
                    while (el && getComputedStyle(el).pointerEvents == 'none') {
                        el = el.parentElement;
                    }
                    return el;
                };
                // create drag image from source element
                DragDropTouch.prototype._createImage = function (e) {
                    // just in case...
                    if (this._img) {
                        this._destroyImage();
                    }
                    // create drag image from custom element or drag source
                    var src = this._imgCustom || this._dragSource;
                    this._img = src.cloneNode(true);
                    this._copyStyle(src, this._img);
                    this._img.style.top = this._img.style.left = '-9999px';
                    // if creating from drag source, apply offset and opacity
                    if (!this._imgCustom) {
                        var rc = src.getBoundingClientRect(), pt = this._getPoint(e);
                        this._imgOffset = { x: pt.x - rc.left, y: pt.y - rc.top };
                        this._img.style.opacity = DragDropTouch._OPACITY.toString();
                    }
                    // add image to document
                    this._moveImage(e);
                    document.body.appendChild(this._img);
                };
                // dispose of drag image element
                DragDropTouch.prototype._destroyImage = function () {
                    if (this._img && this._img.parentElement) {
                        this._img.parentElement.removeChild(this._img);
                    }
                    this._img = null;
                    this._imgCustom = null;
                };
                // move the drag image element
                DragDropTouch.prototype._moveImage = function (e) {
                    var _this = this;
                    requestAnimationFrame(function () {
                        var pt = _this._getPoint(e, true), s = _this._img.style;
                        s.position = 'absolute';
                        s.pointerEvents = 'none';
                        s.zIndex = '999999';
                        s.left = Math.round(pt.x - _this._imgOffset.x) + 'px';
                        s.top = Math.round(pt.y - _this._imgOffset.y) + 'px';
                    });
                };
                // copy properties from an object to another
                DragDropTouch.prototype._copyProps = function (dst, src, props) {
                    for (var i = 0; i < props.length; i++) {
                        var p = props[i];
                        dst[p] = src[p];
                    }
                };
                DragDropTouch.prototype._copyStyle = function (src, dst) {
                    // remove potentially troublesome attributes
                    DragDropTouch._rmvAtts.forEach(function (att) {
                        dst.removeAttribute(att);
                    });
                    // copy canvas content
                    if (src instanceof HTMLCanvasElement) {
                        var cSrc = src, cDst = dst;
                        cDst.width = cSrc.width;
                        cDst.height = cSrc.height;
                        cDst.getContext('2d').drawImage(cSrc, 0, 0);
                    }
                    // copy style
                    var cs = getComputedStyle(src);
                    for (var i = 0; i < cs.length; i++) {
                        var key = cs[i];
                        dst.style[key] = cs[key];
                    }
                    dst.style.pointerEvents = 'none';
                    // and repeat for all children
                    for (var i = 0; i < src.children.length; i++) {
                        this._copyStyle(src.children[i], dst.children[i]);
                    }
                };
                DragDropTouch.prototype._dispatchEvent = function (e, type, target) {
                    if (e && target) {
                        var evt = document.createEvent('Event'), t = e.touches ? e.touches[0] : e;
                        evt.initEvent(type, true, true);
                        evt.button = 0;
                        evt.which = evt.buttons = 1;
                        this._copyProps(evt, e, DragDropTouch._kbdProps);
                        this._copyProps(evt, t, DragDropTouch._ptProps);
                        evt.dataTransfer = this._dataTransfer;
                        target.dispatchEvent(evt);
                        return evt.defaultPrevented;
                    }
                    return false;
                };
                // gets an element's closest draggable ancestor
                DragDropTouch.prototype._closestDraggable = function (e) {
                    for (; e; e = e.parentElement) {
                        if (e.hasAttribute('draggable')) {
                            return e;
                        }
                    }
                    return null;
                };
                /*private*/ DragDropTouch._instance = new DragDropTouch(); // singleton
                // constants
                DragDropTouch._THRESHOLD = 5; // pixels to move before drag starts
                DragDropTouch._OPACITY = 0.5; // drag image opacity
                DragDropTouch._DBLCLICK = 500; // max ms between clicks in a double click
                DragDropTouch._CTXMENU = 900; // ms to hold before raising 'contextmenu' event
                // copy styles/attributes from drag source to drag image element
                DragDropTouch._rmvAtts = 'id,class,style,draggable'.split(',');
                // synthesize and dispatch an event
                // returns true if the event has been handled (e.preventDefault == true)
                DragDropTouch._kbdProps = 'altKey,ctrlKey,metaKey,shiftKey'.split(',');
                DragDropTouch._ptProps = 'pageX,pageY,clientX,clientY,screenX,screenY'.split(',');
                return DragDropTouch;
            }();
            DragDropTouch_1.DragDropTouch = DragDropTouch;
        })(DragDropTouch || (DragDropTouch = {}));
        //# sourceMappingURL=DragDropTouchNoWijmo.js.map
        /***/ 
    }),
    /***/ "./wwwroot/store/index.js": 
    /*!********************************!*\
      !*** ./wwwroot/store/index.js ***!
      \********************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var _vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
        var _vue2 = _interopRequireDefault(_vue);
        var _vuex = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
        var _vuex2 = _interopRequireDefault(_vuex);
        var _base = __webpack_require__(/*! ./modules/base */ "./wwwroot/store/modules/base.js");
        var _base2 = _interopRequireDefault(_base);
        function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
        _vue2.default.use(_vuex2.default);
        exports.default = new _vuex2.default.Store({
            modules: {
                base: _base2.default
            }
        });
        /***/ 
    }),
    /***/ "./wwwroot/store/modules/base.js": 
    /*!***************************************!*\
      !*** ./wwwroot/store/modules/base.js ***!
      \***************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        var state = {
            styleClass: 'material'
        };
        var getters = {};
        var actions = {};
        var mutations = {
            setStyleClass: function setStyleClass(state, val) {
                state.styleClass = val;
            }
        };
        exports.default = {
            //namespaced: true,
            state: state,
            getters: getters,
            actions: actions,
            mutations: mutations
        };
        /***/ 
    }),
    /***/ "./wwwroot/styles/all.js": 
    /*!*******************************!*\
      !*** ./wwwroot/styles/all.js ***!
      \*******************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__(/*! ./libs/all */ "./wwwroot/styles/libs/all.js");
        /***/ 
    }),
    /***/ "./wwwroot/styles/libs/all.js": 
    /*!************************************!*\
      !*** ./wwwroot/styles/libs/all.js ***!
      \************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__(/*! ./font-awesome/all */ "./wwwroot/styles/libs/font-awesome/all.js");
        __webpack_require__(/*! ./bootstrap/all */ "./wwwroot/styles/libs/bootstrap/all.js");
        __webpack_require__(/*! ./hint/hint.min.css */ "./wwwroot/styles/libs/hint/hint.min.css");
        /***/ 
    }),
    /***/ "./wwwroot/styles/libs/bootstrap/all.js": 
    /*!**********************************************!*\
      !*** ./wwwroot/styles/libs/bootstrap/all.js ***!
      \**********************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__(/*! bootstrap/scss/bootstrap-grid.scss */ "./node_modules/bootstrap/scss/bootstrap-grid.scss");
        __webpack_require__(/*! bootstrap/scss/bootstrap-reboot.scss */ "./node_modules/bootstrap/scss/bootstrap-reboot.scss");
        /***/ 
    }),
    /***/ "./wwwroot/styles/libs/font-awesome/all.js": 
    /*!*************************************************!*\
      !*** ./wwwroot/styles/libs/font-awesome/all.js ***!
      \*************************************************/
    /*! no static exports found */
    /***/ (function (module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__(/*! font-awesome/css/font-awesome.css */ "./node_modules/font-awesome/css/font-awesome.css");
        /***/ 
    }),
    /***/ "./wwwroot/styles/libs/hint/hint.min.css": 
    /*!***********************************************!*\
      !*** ./wwwroot/styles/libs/hint/hint.min.css ***!
      \***********************************************/
    /*! no static exports found */
    /***/ (function (module, exports) {
        // removed by extract-text-webpack-plugin
        /***/ 
    })
    /******/ 
});
//# sourceMappingURL=build.js.map