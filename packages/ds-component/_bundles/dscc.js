(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("dscc", [], factory);
	else if(typeof exports === 'object')
		exports["dscc"] = factory();
	else
		root["dscc"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
/*!
  @license
  Copyright 2019 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

  https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/
var types_1 = __webpack_require__(/*! ./types */ "./src/types.ts");
// Make all exported types available to external users.
__export(__webpack_require__(/*! ./types */ "./src/types.ts"));
/**
 * Returns the width (in pixels) of the vis's iframe.
 *
 * Usage:
 * ```
 * var myWidth = dscc.getWidth();
 * console.log('My width is: ', myWidth);
 * ```
 */
exports.getWidth = function () { return document.body.clientWidth; };
/**
 * Returns the height (in pixels) of the vis's iframe.
 *
 * Usage:
 * ```
 * var myHeight = dscc.getHeight();
 * console.log('My height is: ', myHeight);
 * ```
 */
exports.getHeight = function () { return document.documentElement.clientHeight; };
/**
 * Returns the componentId of the vis. Component ids uniquely identify a vis to
 * Data Studio.
 *
 * Usage:
 * ```
 * var myComponentId = dscc.getComponentId();
 * console.log('My componentId is: ', myComponentId);
 * ```
 */
exports.getComponentId = function () {
    var params = new URLSearchParams(window.location.search);
    var componentId = params.get('dscId');
    if (componentId !== null) {
        return componentId;
    }
    else {
        throw new Error('dscId must be in the query parameters. ' +
            'This is a bug in ds-component, please file a bug: ' +
            'https://github.com/googledatastudio/ds-component/issues/new');
    }
};
/**
 * Returns the fields indexed by their Data Studio id.
 */
var fieldsById = function (message) {
    return message.fields.reduce(function (acc, field) {
        acc[field.id] = field;
        return acc;
    }, {});
};
/**
 * Zips two arrays together into a new array. Uses the length of the shortest
 * array.
 *
 * Usage:
 * ```
 * const a = [1, 2, 3];
 * const b = ['a', 'b', 'c', 'd'];
 * const zipped = zip2(a, b);
 * expect(zipped).toEqual([[1, 'a'], [2, 'b'], [3, 'c']]);
 * ```
 */
var zip2 = function (t, u) {
    if (t.length < u.length) {
        return t.map(function (tEntry, idx) { return [tEntry, u[idx]]; });
    }
    else {
        return u.map(function (uEntry, idx) { return [t[idx], uEntry]; });
    }
};
// `.sort` isn't stable, but if you compare items, and when they are equal use
// the original index, it is then stable.
var stableSort = function (arr, compare) {
    return arr
        .map(function (item, index) { return ({ item: item, index: index }); })
        .sort(function (a, b) { return compare(a.item, b.item) || a.index - b.index; })
        .map(function (_a) {
        var item = _a.item;
        return item;
    });
};
var toNum = function (cdet) {
    return cdet === types_1.ConfigDataElementType.DIMENSION ? -1 : 1;
};
var dimensionOrMetric = function (cde) {
    return cde.type === types_1.ConfigDataElementType.DIMENSION ||
        cde.type === types_1.ConfigDataElementType.METRIC;
};
var flattenConfigIds = function (message) {
    var dimnsAndMets = [];
    message.config.data.forEach(function (configData) {
        configData.elements
            .filter(dimensionOrMetric)
            .forEach(function (configDataElement) {
            dimnsAndMets.push(configDataElement);
        });
    });
    var sorted = stableSort(dimnsAndMets, function (a, b) { return toNum(a.type) - toNum(b.type); });
    var configIds = [];
    sorted.forEach(function (configDataElement) {
        configDataElement.value.forEach(function () { return configIds.push(configDataElement.id); });
    });
    return configIds;
};
/**
 * Joins a single table row with the matching `ConfigId`
 */
var joinObjectRow = function (configIds) { return function (row) {
    var objectRow = {};
    zip2(row, configIds).forEach(function (_a) {
        var rowVal = _a[0], configId = _a[1];
        if (objectRow[configId] === undefined) {
            objectRow[configId] = [];
        }
        objectRow[configId].push(rowVal);
    }, {});
    return objectRow;
}; };
/**
 * Formats tables into the `ObjectTables` format.
 */
var objectFormatTable = function (message) {
    var _a;
    var configIds = flattenConfigIds(message);
    var objectTables = (_a = {}, _a[types_1.TableType.DEFAULT] = [], _a);
    message.dataResponse.tables.forEach(function (table) {
        var objectRows = table.rows.map(joinObjectRow(configIds));
        if (table.id === types_1.TableType.DEFAULT) {
            objectTables[table.id] = objectRows;
        }
        else {
            var current = objectTables[table.id];
            if (current === undefined) {
                objectTables[table.id] = objectRows;
            }
            else {
                objectTables[table.id] = current.concat(objectRows);
            }
        }
    });
    return objectTables;
};
/**
 * Formats tables into the `Tables` format.
 */
var tableFormatTable = function (message) {
    var _a;
    var fieldsBy = exports.fieldsByConfigId(message);
    var configIds = flattenConfigIds(message);
    var configIdIdx = {};
    var headers = configIds.map(function (configId) {
        if (configIdIdx[configId] === undefined) {
            configIdIdx[configId] = 0;
        }
        else {
            configIdIdx[configId]++;
        }
        var idx = configIdIdx[configId];
        var field = fieldsBy[configId][idx];
        var heading = __assign(__assign({}, field), { configId: configId });
        return heading;
    });
    var tableTables = (_a = {},
        _a[types_1.TableType.DEFAULT] = { headers: [], rows: [] },
        _a);
    message.dataResponse.tables.forEach(function (table) {
        tableTables[table.id] = {
            headers: headers,
            rows: table.rows,
        };
    });
    return tableTables;
};
/**
 * Returns the fields indexed by their config id. Since many fields can be in
 * the same `METRIC`/`DIMENSION` selection, `configId` is mapped to `Field[]`.
 */
exports.fieldsByConfigId = function (message) {
    var fieldsByDSId = fieldsById(message);
    var fieldsBy = {};
    message.config.data.forEach(function (configData) {
        configData.elements
            .filter(dimensionOrMetric)
            .forEach(function (configDataElement) {
            fieldsBy[configDataElement.id] = configDataElement.value.map(function (dsId) { return fieldsByDSId[dsId]; });
        });
    });
    return fieldsBy;
};
/**
 * Flattens the style entries into a single object. `styleId`s should be unique.
 */
var flattenStyle = function (message) {
    var styleById = {};
    (message.config.style || []).forEach(function (styleEntry) {
        styleEntry.elements.forEach(function (configStyleElement) {
            if (styleById[configStyleElement.id] !== undefined) {
                throw new Error("styleIds must be unique. Your styleId: '" + configStyleElement.id + "' is used more than once.");
            }
            styleById[configStyleElement.id] = {
                value: configStyleElement.value,
                defaultValue: configStyleElement.defaultValue,
            };
        });
    }, {});
    return styleById;
};
var themeStyle = function (message) {
    return message.config.themeStyle;
};
var mapInteractionTypes = function (dsInteraction) {
    switch (dsInteraction) {
        case types_1.DSInteractionType.FILTER:
            return types_1.InteractionType.FILTER;
    }
};
var transformDSInteraction = function (message) {
    var dsInteractions = message.config.interactions;
    // TODO - remove once interactions are live.
    if (dsInteractions === undefined) {
        return {};
    }
    return dsInteractions.reduce(function (acc, dsInteraction) {
        var interactions = dsInteraction.supportedActions.map(mapInteractionTypes);
        var value = {
            type: mapInteractionTypes(dsInteraction.value.type),
            data: dsInteraction.value.data,
        };
        acc[dsInteraction.id] = {
            value: value,
            supportedActions: interactions,
        };
        return acc;
    }, {});
};
/**
 * Transform for date ranges
 */
var toDateRanges = function (message) {
    var dateRanges = message.dataResponse.dateRanges || [];
    var output = {};
    return dateRanges.reduce(function (inProgress, currentDSDateRange) {
        inProgress[currentDSDateRange.id] = {
            start: currentDSDateRange.start,
            end: currentDSDateRange.end,
        };
        return inProgress;
    }, output);
};
/* Transform for color maps */
var toColorsByDimension = function (message) {
    var colors = message.config.colorMap || {};
    return __assign({}, colors);
};
/**
 * The transform to use for data in a Table format. i.e. `[[1, 2, 3], [4, 5, 6]]`
 */
exports.tableTransform = function (message) { return ({
    tables: tableFormatTable(message),
    dateRanges: toDateRanges(message),
    fields: exports.fieldsByConfigId(message),
    style: flattenStyle(message),
    theme: themeStyle(message),
    interactions: transformDSInteraction(message),
    colorMap: toColorsByDimension(message),
}); };
/**
 * The transform to use for data in an object format. i.e. `[{name: 'john', views: 3}, {name: 'suzie', views: 5}]`
 */
exports.objectTransform = function (message) { return ({
    tables: objectFormatTable(message),
    dateRanges: toDateRanges(message),
    fields: exports.fieldsByConfigId(message),
    style: flattenStyle(message),
    theme: themeStyle(message),
    interactions: transformDSInteraction(message),
    colorMap: toColorsByDimension(message),
}); };
/**
 * Check if the transform is likely the identity function
 * This is not a supported implementation path
 * Avoid this if at all possible - please use either objectTransform or tableTransform
 */
var isProbablyIdentityFunction = function (transform) {
    var isIdentity = false;
    if (transform('identity') === 'identity') {
        isIdentity = true;
        console.warn("This is an unsupported data format. Please use one of the supported transforms:\n       dscc.objectFormat or dscc.tableFormat.");
    }
    return isIdentity;
};
var isValidTransform = function (transform) {
    var isValid = false;
    if (transform === exports.tableTransform ||
        transform === exports.objectTransform) {
        isValid = true;
    }
    else if (isProbablyIdentityFunction(transform)) {
        isValid = true;
    }
    return isValid;
};
/*
 * Subscribes to messages from Data Studio. Calls `cb` for every new
 * [[MessageType.RENDER]] message. Returns a function that will unsubscribe
 * `callback` from further invocations.
 *
 * Usage - tableTransform:
 * ```
 * var unsubscribe = dscc.subscribeToData(function(message) {
 *   console.log(message.tables)
 *   console.log(message.fields)
 *   console.log(message.style)
 * }, {transform: dscc.tableTransform});
 *
 * setTimeout(function() {
 *   unsubscribe();
 * }, 3000)
 * ```

 * Usage - objectTransform:
 * ```
 * var unsubscribe = dscc.subscribeToData(function(message) {
 *   console.log(message.tables)
 *   console.log(message.fields)
 *   console.log(message.style)
 * }, {transform: dscc.objectTransform});
 *
 * setTimeout(function() {
 *   unsubscribe();
 * }, 3000)
 * ```
 */
exports.subscribeToData = function (cb, options) {
    if (isValidTransform(options.transform)) {
        var onMessage_1 = function (message) {
            if (message.data.type === types_1.MessageType.RENDER) {
                cb(options.transform(message.data));
            }
            else {
                console.error("MessageType: " + message.data.type + " is not supported by this version of the library.");
            }
        };
        window.addEventListener('message', onMessage_1);
        var componentId = exports.getComponentId();
        // Tell DataStudio that the viz is ready to get events.
        var vizReadyMessage = {
            componentId: componentId,
            type: types_1.ToDSMessageType.VIZ_READY,
        };
        window.parent.postMessage(vizReadyMessage, '*');
        return function () { return window.removeEventListener('message', onMessage_1); };
    }
    else {
        throw new Error("Only the built in transform functions are supported.");
    }
};
/*
 * Does the thing that interactions should do.
 */
exports.sendInteraction = function (actionId, interaction, data) {
    var componentId = exports.getComponentId();
    var interactionMessage = {
        type: types_1.ToDSMessageType.INTERACTION,
        id: actionId,
        data: data,
        componentId: componentId,
    };
    window.parent.postMessage(interactionMessage, '*');
};
/*
 * Clears an interaction
 */
exports.clearInteraction = function (actionId, interaction) {
    exports.sendInteraction(actionId, interaction, undefined);
};


/***/ }),

/***/ "./src/types.ts":
/*!**********************!*\
  !*** ./src/types.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConceptType;
(function (ConceptType) {
    ConceptType["METRIC"] = "METRIC";
    ConceptType["DIMENSION"] = "DIMENSION";
})(ConceptType = exports.ConceptType || (exports.ConceptType = {}));
var MessageType;
(function (MessageType) {
    MessageType["RENDER"] = "RENDER";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var FieldType;
(function (FieldType) {
    FieldType["YEAR"] = "YEAR";
    FieldType["YEAR_QUARTER"] = "YEAR_QUARTER";
    FieldType["YEAR_MONTH"] = "YEAR_MONTH";
    FieldType["YEAR_WEEK"] = "YEAR_WEEK";
    FieldType["YEAR_MONTH_DAY"] = "YEAR_MONTH_DAY";
    FieldType["YEAR_MONTH_DAY_HOUR"] = "YEAR_MONTH_DAY_HOUR";
    FieldType["QUARTER"] = "QUARTER";
    FieldType["MONTH"] = "MONTH";
    FieldType["WEEK"] = "WEEK";
    FieldType["MONTH_DAY"] = "MONTH_DAY";
    FieldType["DAY_OF_WEEK"] = "DAY_OF_WEEK";
    FieldType["DAY"] = "DAY";
    FieldType["HOUR"] = "HOUR";
    FieldType["MINUTE"] = "MINUTE";
    FieldType["DURATION"] = "DURATION";
    FieldType["COUNTRY"] = "COUNTRY";
    FieldType["COUNTRY_CODE"] = "COUNTRY_CODE";
    FieldType["CONTINENT"] = "CONTINENT";
    FieldType["CONTINENT_CODE"] = "CONTINENT_CODE";
    FieldType["SUB_CONTINENT"] = "SUB_CONTINENT";
    FieldType["SUB_CONTINENT_CODE"] = "SUB_CONTINENT_CODE";
    FieldType["REGION"] = "REGION";
    FieldType["REGION_CODE"] = "REGION_CODE";
    FieldType["CITY"] = "CITY";
    FieldType["CITY_CODE"] = "CITY_CODE";
    FieldType["METRO_CODE"] = "METRO_CODE";
    FieldType["LATITUDE_LONGITUDE"] = "LATITUDE_LONGITUDE";
    FieldType["NUMBER"] = "NUMBER";
    FieldType["PERCENT"] = "PERCENT";
    FieldType["TEXT"] = "TEXT";
    FieldType["BOOLEAN"] = "BOOLEAN";
    FieldType["URL"] = "URL";
    FieldType["IMAGE"] = "IMAGE";
    FieldType["CURRENCY_AED"] = "CURRENCY_AED";
    FieldType["CURRENCY_ALL"] = "CURRENCY_ALL";
    FieldType["CURRENCY_ARS"] = "CURRENCY_ARS";
    FieldType["CURRENCY_AUD"] = "CURRENCY_AUD";
    FieldType["CURRENCY_BDT"] = "CURRENCY_BDT";
    FieldType["CURRENCY_BGN"] = "CURRENCY_BGN";
    FieldType["CURRENCY_BOB"] = "CURRENCY_BOB";
    FieldType["CURRENCY_BRL"] = "CURRENCY_BRL";
    FieldType["CURRENCY_CAD"] = "CURRENCY_CAD";
    FieldType["CURRENCY_CDF"] = "CURRENCY_CDF";
    FieldType["CURRENCY_CHF"] = "CURRENCY_CHF";
    FieldType["CURRENCY_CLP"] = "CURRENCY_CLP";
    FieldType["CURRENCY_CNY"] = "CURRENCY_CNY";
    FieldType["CURRENCY_COP"] = "CURRENCY_COP";
    FieldType["CURRENCY_CRC"] = "CURRENCY_CRC";
    FieldType["CURRENCY_CZK"] = "CURRENCY_CZK";
    FieldType["CURRENCY_DKK"] = "CURRENCY_DKK";
    FieldType["CURRENCY_DOP"] = "CURRENCY_DOP";
    FieldType["CURRENCY_EGP"] = "CURRENCY_EGP";
    FieldType["CURRENCY_ETB"] = "CURRENCY_ETB";
    FieldType["CURRENCY_EUR"] = "CURRENCY_EUR";
    FieldType["CURRENCY_GBP"] = "CURRENCY_GBP";
    FieldType["CURRENCY_HKD"] = "CURRENCY_HKD";
    FieldType["CURRENCY_HRK"] = "CURRENCY_HRK";
    FieldType["CURRENCY_HUF"] = "CURRENCY_HUF";
    FieldType["CURRENCY_IDR"] = "CURRENCY_IDR";
    FieldType["CURRENCY_ILS"] = "CURRENCY_ILS";
    FieldType["CURRENCY_INR"] = "CURRENCY_INR";
    FieldType["CURRENCY_IRR"] = "CURRENCY_IRR";
    FieldType["CURRENCY_ISK"] = "CURRENCY_ISK";
    FieldType["CURRENCY_JMD"] = "CURRENCY_JMD";
    FieldType["CURRENCY_JPY"] = "CURRENCY_JPY";
    FieldType["CURRENCY_KRW"] = "CURRENCY_KRW";
    FieldType["CURRENCY_LKR"] = "CURRENCY_LKR";
    FieldType["CURRENCY_LTL"] = "CURRENCY_LTL";
    FieldType["CURRENCY_MNT"] = "CURRENCY_MNT";
    FieldType["CURRENCY_MVR"] = "CURRENCY_MVR";
    FieldType["CURRENCY_MXN"] = "CURRENCY_MXN";
    FieldType["CURRENCY_MYR"] = "CURRENCY_MYR";
    FieldType["CURRENCY_NOK"] = "CURRENCY_NOK";
    FieldType["CURRENCY_NZD"] = "CURRENCY_NZD";
    FieldType["CURRENCY_PAB"] = "CURRENCY_PAB";
    FieldType["CURRENCY_PEN"] = "CURRENCY_PEN";
    FieldType["CURRENCY_PHP"] = "CURRENCY_PHP";
    FieldType["CURRENCY_PKR"] = "CURRENCY_PKR";
    FieldType["CURRENCY_PLN"] = "CURRENCY_PLN";
    FieldType["CURRENCY_RON"] = "CURRENCY_RON";
    FieldType["CURRENCY_RSD"] = "CURRENCY_RSD";
    FieldType["CURRENCY_RUB"] = "CURRENCY_RUB";
    FieldType["CURRENCY_SAR"] = "CURRENCY_SAR";
    FieldType["CURRENCY_SEK"] = "CURRENCY_SEK";
    FieldType["CURRENCY_SGD"] = "CURRENCY_SGD";
    FieldType["CURRENCY_THB"] = "CURRENCY_THB";
    FieldType["CURRENCY_TRY"] = "CURRENCY_TRY";
    FieldType["CURRENCY_TWD"] = "CURRENCY_TWD";
    FieldType["CURRENCY_TZS"] = "CURRENCY_TZS";
    FieldType["CURRENCY_UAH"] = "CURRENCY_UAH";
    FieldType["CURRENCY_USD"] = "CURRENCY_USD";
    FieldType["CURRENCY_UYU"] = "CURRENCY_UYU";
    FieldType["CURRENCY_VEF"] = "CURRENCY_VEF";
    FieldType["CURRENCY_VND"] = "CURRENCY_VND";
    FieldType["CURRENCY_YER"] = "CURRENCY_YER";
    FieldType["CURRENCY_ZAR"] = "CURRENCY_ZAR";
})(FieldType = exports.FieldType || (exports.FieldType = {}));
var TableType;
(function (TableType) {
    TableType["DEFAULT"] = "DEFAULT";
    TableType["COMPARISON"] = "COMPARISON";
    TableType["SUMMARY"] = "SUMMARY";
})(TableType = exports.TableType || (exports.TableType = {}));
var DateRangeType;
(function (DateRangeType) {
    DateRangeType["DEFAULT"] = "DEFAULT";
    DateRangeType["COMPARISON"] = "COMPARISON";
})(DateRangeType = exports.DateRangeType || (exports.DateRangeType = {}));
var ConfigDataElementType;
(function (ConfigDataElementType) {
    /**
     * Renders a metric field element.
     */
    ConfigDataElementType["METRIC"] = "METRIC";
    /**
     * Renders a dimension field element.
     */
    ConfigDataElementType["DIMENSION"] = "DIMENSION";
    /**
     * Renders a dropdown that affects the maximum number of results returned.
     */
    ConfigDataElementType["MAX_RESULTS"] = "MAX_RESULTS";
})(ConfigDataElementType = exports.ConfigDataElementType || (exports.ConfigDataElementType = {}));
var ConfigStyleElementType;
(function (ConfigStyleElementType) {
    /**
     * Renders a text input box.
     */
    ConfigStyleElementType["TEXTINPUT"] = "TEXTINPUT";
    /**
     * A single select dropdown.
     */
    ConfigStyleElementType["SELECT_SINGLE"] = "SELECT_SINGLE";
    /**
     * Renders a checkbox.
     *
     * Default value: `false`
     */
    ConfigStyleElementType["CHECKBOX"] = "CHECKBOX";
    /**
     * Renders the font color selector.
     *
     * Acceptable default values: HEX color value. E.g. `"#888888"`.
     *
     * Default value: `"#000"`.
     */
    ConfigStyleElementType["FONT_COLOR"] = "FONT_COLOR";
    /**
     * Renders the font size selector.
     *
     * Default value: `"14px"`.
     */
    ConfigStyleElementType["FONT_SIZE"] = "FONT_SIZE";
    /**
     * Renders the font family selector.
     *
     * Default value: `""`
     */
    ConfigStyleElementType["FONT_FAMILY"] = "FONT_FAMILY";
    /**
     * Renders a fill color selector.
     *
     * Acceptable default values: HEX color value.
     */
    ConfigStyleElementType["FILL_COLOR"] = "FILL_COLOR";
    /**
     * Renders a border color selector.
     *
     * Acceptable default values: HEX color value.
     */
    ConfigStyleElementType["BORDER_COLOR"] = "BORDER_COLOR";
    /**
     * Renders an axis color selector.
     *
     * Acceptable default values: HEX color value.
     */
    ConfigStyleElementType["AXIS_COLOR"] = "AXIS_COLOR";
    /**
     * Renders a grid color selector.
     *
     * Acceptable default values: HEX color value.
     */
    ConfigStyleElementType["GRID_COLOR"] = "GRID_COLOR";
    /**
     * Renders an opacity selector.
     */
    ConfigStyleElementType["OPACITY"] = "OPACITY";
    /**
     * Renders a line weight picker.
     */
    ConfigStyleElementType["LINE_WEIGHT"] = "LINE_WEIGHT";
    /**
     * Renders a line style picker.
     *
     * Acceptable default values: `"solid"`, `"dashed"`, `"dotted"`, or `"double"`.
     */
    ConfigStyleElementType["LINE_STYLE"] = "LINE_STYLE";
    /**
     * Renders a border radius selector.
     */
    ConfigStyleElementType["BORDER_RADIUS"] = "BORDER_RADIUS";
    /**
     * Renders an interval selector.
     */
    ConfigStyleElementType["INTERVAL"] = "INTERVAL";
    /**
     * Renders a radio select with pre-defined values.
     */
    ConfigStyleElementType["SELECT_RADIO"] = "SELECT_RADIO";
})(ConfigStyleElementType = exports.ConfigStyleElementType || (exports.ConfigStyleElementType = {}));
var DSInteractionType;
(function (DSInteractionType) {
    DSInteractionType["FILTER"] = "FILTER";
})(DSInteractionType = exports.DSInteractionType || (exports.DSInteractionType = {}));
var ToDSMessageType;
(function (ToDSMessageType) {
    ToDSMessageType["VIZ_READY"] = "vizReady";
    ToDSMessageType["INTERACTION"] = "vizAction";
})(ToDSMessageType = exports.ToDSMessageType || (exports.ToDSMessageType = {}));
var InteractionType;
(function (InteractionType) {
    InteractionType["FILTER"] = "FILTER";
})(InteractionType = exports.InteractionType || (exports.InteractionType = {}));


/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9kc2NjL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2RzY2MvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZHNjYy8uL3NyYy90eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7Ozs7OztFQWVFO0FBQ0YsbUVBeUNpQjtBQUVqQix1REFBdUQ7QUFDdkQsK0RBQXdCO0FBRXhCOzs7Ozs7OztHQVFHO0FBQ1UsZ0JBQVEsR0FBRyxjQUFjLGVBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUF6QixD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VW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiZHNjY1wiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJkc2NjXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImRzY2NcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiLyohXG4gIEBsaWNlbnNlXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtcbiAgQ2xlYXJJbnRlcmFjdGlvbixcbiAgQ29sb3JzQnlEaW1lbnNpb24sXG4gIENvbmZpZ0RhdGEsXG4gIENvbmZpZ0RhdGFFbGVtZW50LFxuICBDb25maWdEYXRhRWxlbWVudERpbWVuc2lvbixcbiAgQ29uZmlnRGF0YUVsZW1lbnRNZXRyaWMsXG4gIENvbmZpZ0RhdGFFbGVtZW50VHlwZSxcbiAgQ29uZmlnSWQsXG4gIENvbmZpZ1N0eWxlLFxuICBDb25maWdTdHlsZUVsZW1lbnQsXG4gIERhdGVSYW5nZXNCeUlkLFxuICBEU0ludGVyYWN0aW9uRGF0YSxcbiAgRFNJbnRlcmFjdGlvblR5cGUsXG4gIERTUm93VmFsdWUsXG4gIEZpZWxkLFxuICBGaWVsZElkLFxuICBGaWVsZHNCeUNvbmZpZ0lkLFxuICBGaWVsZHNCeUlkLFxuICBJbnRlcmFjdGlvbk1lc3NhZ2UsXG4gIEludGVyYWN0aW9uc0J5SWQsXG4gIEludGVyYWN0aW9uVHlwZSxcbiAgTWVzc2FnZSxcbiAgTWVzc2FnZVR5cGUsXG4gIE9iamVjdFJvdyxcbiAgT2JqZWN0VGFibGVzLFxuICBPYmplY3RUcmFuc2Zvcm0sXG4gIFBvc3RNZXNzYWdlLFxuICBSb3csXG4gIFJvd0hlYWRpbmcsXG4gIFNlbmRJbnRlcmFjdGlvbixcbiAgU3R5bGVCeUlkLFxuICBTdWJzY3JpcHRpb25zT3B0aW9ucyxcbiAgVGFibGUsXG4gIFRhYmxlRm9ybWF0LFxuICBUYWJsZXMsXG4gIFRhYmxlVHJhbnNmb3JtLFxuICBUYWJsZVR5cGUsXG4gIFRoZW1lU3R5bGUsXG4gIFRvRFNNZXNzYWdlVHlwZSxcbiAgVml6UmVhZHlNZXNzYWdlLFxufSBmcm9tICcuL3R5cGVzJztcblxuLy8gTWFrZSBhbGwgZXhwb3J0ZWQgdHlwZXMgYXZhaWxhYmxlIHRvIGV4dGVybmFsIHVzZXJzLlxuZXhwb3J0ICogZnJvbSAnLi90eXBlcyc7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgd2lkdGggKGluIHBpeGVscykgb2YgdGhlIHZpcydzIGlmcmFtZS5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYFxuICogdmFyIG15V2lkdGggPSBkc2NjLmdldFdpZHRoKCk7XG4gKiBjb25zb2xlLmxvZygnTXkgd2lkdGggaXM6ICcsIG15V2lkdGgpO1xuICogYGBgXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRXaWR0aCA9ICgpOiBudW1iZXIgPT4gZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aDtcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBoZWlnaHQgKGluIHBpeGVscykgb2YgdGhlIHZpcydzIGlmcmFtZS5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYFxuICogdmFyIG15SGVpZ2h0ID0gZHNjYy5nZXRIZWlnaHQoKTtcbiAqIGNvbnNvbGUubG9nKCdNeSBoZWlnaHQgaXM6ICcsIG15SGVpZ2h0KTtcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3QgZ2V0SGVpZ2h0ID0gKCk6IG51bWJlciA9PiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNvbXBvbmVudElkIG9mIHRoZSB2aXMuIENvbXBvbmVudCBpZHMgdW5pcXVlbHkgaWRlbnRpZnkgYSB2aXMgdG9cbiAqIERhdGEgU3R1ZGlvLlxuICpcbiAqIFVzYWdlOlxuICogYGBgXG4gKiB2YXIgbXlDb21wb25lbnRJZCA9IGRzY2MuZ2V0Q29tcG9uZW50SWQoKTtcbiAqIGNvbnNvbGUubG9nKCdNeSBjb21wb25lbnRJZCBpczogJywgbXlDb21wb25lbnRJZCk7XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGNvbnN0IGdldENvbXBvbmVudElkID0gKCk6IHN0cmluZyA9PiB7XG4gIGNvbnN0IHBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XG4gIGNvbnN0IGNvbXBvbmVudElkID0gcGFyYW1zLmdldCgnZHNjSWQnKTtcbiAgaWYgKGNvbXBvbmVudElkICE9PSBudWxsKSB7XG4gICAgcmV0dXJuIGNvbXBvbmVudElkO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICdkc2NJZCBtdXN0IGJlIGluIHRoZSBxdWVyeSBwYXJhbWV0ZXJzLiAnICtcbiAgICAgICAgJ1RoaXMgaXMgYSBidWcgaW4gZHMtY29tcG9uZW50LCBwbGVhc2UgZmlsZSBhIGJ1ZzogJyArXG4gICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vZ29vZ2xlZGF0YXN0dWRpby9kcy1jb21wb25lbnQvaXNzdWVzL25ldydcbiAgICApO1xuICB9XG59O1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpZWxkcyBpbmRleGVkIGJ5IHRoZWlyIERhdGEgU3R1ZGlvIGlkLlxuICovXG5jb25zdCBmaWVsZHNCeUlkID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBGaWVsZHNCeUlkID0+XG4gIG1lc3NhZ2UuZmllbGRzLnJlZHVjZSgoYWNjOiBGaWVsZHNCeUlkLCBmaWVsZDogRmllbGQpID0+IHtcbiAgICBhY2NbZmllbGQuaWRdID0gZmllbGQ7XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge30pO1xuXG4vKipcbiAqIFppcHMgdHdvIGFycmF5cyB0b2dldGhlciBpbnRvIGEgbmV3IGFycmF5LiBVc2VzIHRoZSBsZW5ndGggb2YgdGhlIHNob3J0ZXN0XG4gKiBhcnJheS5cbiAqXG4gKiBVc2FnZTpcbiAqIGBgYFxuICogY29uc3QgYSA9IFsxLCAyLCAzXTtcbiAqIGNvbnN0IGIgPSBbJ2EnLCAnYicsICdjJywgJ2QnXTtcbiAqIGNvbnN0IHppcHBlZCA9IHppcDIoYSwgYik7XG4gKiBleHBlY3QoemlwcGVkKS50b0VxdWFsKFtbMSwgJ2EnXSwgWzIsICdiJ10sIFszLCAnYyddXSk7XG4gKiBgYGBcbiAqL1xuY29uc3QgemlwMiA9IDxULCBVPih0OiBUW10sIHU6IFVbXSk6IEFycmF5PFtULCBVXT4gPT4ge1xuICBpZiAodC5sZW5ndGggPCB1Lmxlbmd0aCkge1xuICAgIHJldHVybiB0Lm1hcCgodEVudHJ5OiBULCBpZHg6IG51bWJlcik6IFtULCBVXSA9PiBbdEVudHJ5LCB1W2lkeF1dKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdS5tYXAoKHVFbnRyeTogVSwgaWR4OiBudW1iZXIpOiBbVCwgVV0gPT4gW3RbaWR4XSwgdUVudHJ5XSk7XG4gIH1cbn07XG5cbi8vIGAuc29ydGAgaXNuJ3Qgc3RhYmxlLCBidXQgaWYgeW91IGNvbXBhcmUgaXRlbXMsIGFuZCB3aGVuIHRoZXkgYXJlIGVxdWFsIHVzZVxuLy8gdGhlIG9yaWdpbmFsIGluZGV4LCBpdCBpcyB0aGVuIHN0YWJsZS5cbmNvbnN0IHN0YWJsZVNvcnQgPSA8VD4oYXJyOiBUW10sIGNvbXBhcmU6IChhOiBULCBiOiBUKSA9PiBudW1iZXIpOiBUW10gPT5cbiAgYXJyXG4gICAgLm1hcCgoaXRlbSwgaW5kZXgpID0+ICh7aXRlbSwgaW5kZXh9KSlcbiAgICAuc29ydCgoYSwgYikgPT4gY29tcGFyZShhLml0ZW0sIGIuaXRlbSkgfHwgYS5pbmRleCAtIGIuaW5kZXgpXG4gICAgLm1hcCgoe2l0ZW19KSA9PiBpdGVtKTtcblxuY29uc3QgdG9OdW0gPSAoY2RldDogQ29uZmlnRGF0YUVsZW1lbnRUeXBlKSA9PlxuICBjZGV0ID09PSBDb25maWdEYXRhRWxlbWVudFR5cGUuRElNRU5TSU9OID8gLTEgOiAxO1xuXG4vKipcbiAqIEZsYXR0ZW5zIHRoZSBjb25maWdJZHMgZnJvbSBhIG1lc3NhZ2UgaW50byBhIHNpbmdsZSBhcnJheS4gVGhlIGNvbmZpZyBJZHNcbiAqIHdpbGwgYmUgcmVwZWF0ZWQgZm9yIHRoZSBgTUVUUklDYC9gRElNRU5TSU9OYCBzZWxlY3Rpb25zLiBpLmUuIGZvciBhIGBNRVRSSUNgXG4gKiBuYW1lZCBgXCJtZXRyaWNzXCJgIG9mIGB7bWluOiAyLCBtYXg6M31gLCB0aGUgdmFsdWUgbWV0cmljcyB3aWxsIGJlIHJlcGVhdGVkIDJcbiAqIHRvIDMgdGltZXMgZGVwZW5kaW5nIG9uIHdoYXQgdmFsdWVzIHRoZSB1c2VyIHNlbGVjdHMuXG4gKlxuICogTm90ZTogdGhpcyBpcyByZWx5aW5nIG9uIHRoZSBmYWN0IHRoYXQgdGhlIHBvc3RNZXNzYWdlIGZyb20gRGF0YVN0dWRpbyBoYXNcbiAqIHRoZSBmaWVsZHMgc29ydGVkIHRvIGJlIGRpbWVuc2lvbnMsIGZvbGxvd2VkIGJ5IG1ldHJpY3MuXG4gKi9cbnR5cGUgQ29uZmlnRGF0YUNvbmNlcHQgPSBDb25maWdEYXRhRWxlbWVudE1ldHJpYyB8IENvbmZpZ0RhdGFFbGVtZW50RGltZW5zaW9uO1xuXG5jb25zdCBkaW1lbnNpb25Pck1ldHJpYyA9IChjZGU6IENvbmZpZ0RhdGFFbGVtZW50KTogY2RlIGlzIENvbmZpZ0RhdGFDb25jZXB0ID0+XG4gIGNkZS50eXBlID09PSBDb25maWdEYXRhRWxlbWVudFR5cGUuRElNRU5TSU9OIHx8XG4gIGNkZS50eXBlID09PSBDb25maWdEYXRhRWxlbWVudFR5cGUuTUVUUklDO1xuXG5jb25zdCBmbGF0dGVuQ29uZmlnSWRzID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBDb25maWdJZFtdID0+IHtcbiAgY29uc3QgZGltbnNBbmRNZXRzOiBDb25maWdEYXRhQ29uY2VwdFtdID0gW107XG4gIG1lc3NhZ2UuY29uZmlnLmRhdGEuZm9yRWFjaCgoY29uZmlnRGF0YTogQ29uZmlnRGF0YSkgPT4ge1xuICAgIGNvbmZpZ0RhdGEuZWxlbWVudHNcbiAgICAgIC5maWx0ZXIoZGltZW5zaW9uT3JNZXRyaWMpXG4gICAgICAuZm9yRWFjaCgoY29uZmlnRGF0YUVsZW1lbnQ6IENvbmZpZ0RhdGFDb25jZXB0KSA9PiB7XG4gICAgICAgIGRpbW5zQW5kTWV0cy5wdXNoKGNvbmZpZ0RhdGFFbGVtZW50KTtcbiAgICAgIH0pO1xuICB9KTtcbiAgY29uc3Qgc29ydGVkID0gc3RhYmxlU29ydChcbiAgICBkaW1uc0FuZE1ldHMsXG4gICAgKGEsIGIpID0+IHRvTnVtKGEudHlwZSkgLSB0b051bShiLnR5cGUpXG4gICk7XG4gIGNvbnN0IGNvbmZpZ0lkczogQ29uZmlnSWRbXSA9IFtdO1xuICBzb3J0ZWQuZm9yRWFjaCgoY29uZmlnRGF0YUVsZW1lbnQpID0+IHtcbiAgICBjb25maWdEYXRhRWxlbWVudC52YWx1ZS5mb3JFYWNoKCgpID0+IGNvbmZpZ0lkcy5wdXNoKGNvbmZpZ0RhdGFFbGVtZW50LmlkKSk7XG4gIH0pO1xuICByZXR1cm4gY29uZmlnSWRzO1xufTtcblxuLyoqXG4gKiBKb2lucyBhIHNpbmdsZSB0YWJsZSByb3cgd2l0aCB0aGUgbWF0Y2hpbmcgYENvbmZpZ0lkYFxuICovXG5jb25zdCBqb2luT2JqZWN0Um93ID0gKGNvbmZpZ0lkczogQ29uZmlnSWRbXSkgPT4gKHJvdzogUm93KTogT2JqZWN0Um93ID0+IHtcbiAgY29uc3Qgb2JqZWN0Um93OiBPYmplY3RSb3cgPSB7fTtcblxuICB6aXAyKHJvdywgY29uZmlnSWRzKS5mb3JFYWNoKChbcm93VmFsLCBjb25maWdJZF06IFtEU1Jvd1ZhbHVlLCBDb25maWdJZF0pID0+IHtcbiAgICBpZiAob2JqZWN0Um93W2NvbmZpZ0lkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBvYmplY3RSb3dbY29uZmlnSWRdID0gW107XG4gICAgfVxuICAgIG9iamVjdFJvd1tjb25maWdJZF0ucHVzaChyb3dWYWwpO1xuICB9LCB7fSk7XG5cbiAgcmV0dXJuIG9iamVjdFJvdztcbn07XG5cbi8qKlxuICogRm9ybWF0cyB0YWJsZXMgaW50byB0aGUgYE9iamVjdFRhYmxlc2AgZm9ybWF0LlxuICovXG5jb25zdCBvYmplY3RGb3JtYXRUYWJsZSA9IChtZXNzYWdlOiBNZXNzYWdlKTogT2JqZWN0VGFibGVzID0+IHtcbiAgY29uc3QgY29uZmlnSWRzID0gZmxhdHRlbkNvbmZpZ0lkcyhtZXNzYWdlKTtcbiAgY29uc3Qgb2JqZWN0VGFibGVzOiBPYmplY3RUYWJsZXMgPSB7W1RhYmxlVHlwZS5ERUZBVUxUXTogW119O1xuXG4gIG1lc3NhZ2UuZGF0YVJlc3BvbnNlLnRhYmxlcy5mb3JFYWNoKCh0YWJsZTogVGFibGUpID0+IHtcbiAgICBjb25zdCBvYmplY3RSb3dzOiBPYmplY3RSb3dbXSA9IHRhYmxlLnJvd3MubWFwKGpvaW5PYmplY3RSb3coY29uZmlnSWRzKSk7XG4gICAgaWYgKHRhYmxlLmlkID09PSBUYWJsZVR5cGUuREVGQVVMVCkge1xuICAgICAgb2JqZWN0VGFibGVzW3RhYmxlLmlkXSA9IG9iamVjdFJvd3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBvYmplY3RUYWJsZXNbdGFibGUuaWRdO1xuICAgICAgaWYgKGN1cnJlbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBvYmplY3RUYWJsZXNbdGFibGUuaWRdID0gb2JqZWN0Um93cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iamVjdFRhYmxlc1t0YWJsZS5pZF0gPSBjdXJyZW50LmNvbmNhdChvYmplY3RSb3dzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb2JqZWN0VGFibGVzO1xufTtcblxuLyoqXG4gKiBGb3JtYXRzIHRhYmxlcyBpbnRvIHRoZSBgVGFibGVzYCBmb3JtYXQuXG4gKi9cbmNvbnN0IHRhYmxlRm9ybWF0VGFibGUgPSAobWVzc2FnZTogTWVzc2FnZSk6IFRhYmxlcyA9PiB7XG4gIGNvbnN0IGZpZWxkc0J5OiBGaWVsZHNCeUNvbmZpZ0lkID0gZmllbGRzQnlDb25maWdJZChtZXNzYWdlKTtcbiAgY29uc3QgY29uZmlnSWRzID0gZmxhdHRlbkNvbmZpZ0lkcyhtZXNzYWdlKTtcbiAgY29uc3QgY29uZmlnSWRJZHg6IHtbY29uZmlnSWQ6IHN0cmluZ106IG51bWJlcn0gPSB7fTtcbiAgY29uc3QgaGVhZGVyczogUm93SGVhZGluZ1tdID0gY29uZmlnSWRzLm1hcChcbiAgICAoY29uZmlnSWQ6IHN0cmluZyk6IFJvd0hlYWRpbmcgPT4ge1xuICAgICAgaWYgKGNvbmZpZ0lkSWR4W2NvbmZpZ0lkXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbmZpZ0lkSWR4W2NvbmZpZ0lkXSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25maWdJZElkeFtjb25maWdJZF0rKztcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlkeCA9IGNvbmZpZ0lkSWR4W2NvbmZpZ0lkXTtcbiAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzQnlbY29uZmlnSWRdW2lkeF07XG4gICAgICBjb25zdCBoZWFkaW5nOiBSb3dIZWFkaW5nID0gey4uLmZpZWxkLCBjb25maWdJZH07XG4gICAgICByZXR1cm4gaGVhZGluZztcbiAgICB9XG4gICk7XG4gIGNvbnN0IHRhYmxlVGFibGVzOiBUYWJsZXMgPSB7XG4gICAgW1RhYmxlVHlwZS5ERUZBVUxUXToge2hlYWRlcnM6IFtdLCByb3dzOiBbXX0sXG4gIH07XG5cbiAgbWVzc2FnZS5kYXRhUmVzcG9uc2UudGFibGVzLmZvckVhY2goKHRhYmxlOiBUYWJsZSkgPT4ge1xuICAgIHRhYmxlVGFibGVzW3RhYmxlLmlkXSA9IHtcbiAgICAgIGhlYWRlcnMsXG4gICAgICByb3dzOiB0YWJsZS5yb3dzLFxuICAgIH07XG4gIH0pO1xuXG4gIHJldHVybiB0YWJsZVRhYmxlcztcbn07XG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmllbGRzIGluZGV4ZWQgYnkgdGhlaXIgY29uZmlnIGlkLiBTaW5jZSBtYW55IGZpZWxkcyBjYW4gYmUgaW5cbiAqIHRoZSBzYW1lIGBNRVRSSUNgL2BESU1FTlNJT05gIHNlbGVjdGlvbiwgYGNvbmZpZ0lkYCBpcyBtYXBwZWQgdG8gYEZpZWxkW11gLlxuICovXG5leHBvcnQgY29uc3QgZmllbGRzQnlDb25maWdJZCA9IChtZXNzYWdlOiBNZXNzYWdlKTogRmllbGRzQnlDb25maWdJZCA9PiB7XG4gIGNvbnN0IGZpZWxkc0J5RFNJZCA9IGZpZWxkc0J5SWQobWVzc2FnZSk7XG4gIGNvbnN0IGZpZWxkc0J5OiBGaWVsZHNCeUNvbmZpZ0lkID0ge307XG5cbiAgbWVzc2FnZS5jb25maWcuZGF0YS5mb3JFYWNoKChjb25maWdEYXRhOiBDb25maWdEYXRhKSA9PiB7XG4gICAgY29uZmlnRGF0YS5lbGVtZW50c1xuICAgICAgLmZpbHRlcihkaW1lbnNpb25Pck1ldHJpYylcbiAgICAgIC5mb3JFYWNoKChjb25maWdEYXRhRWxlbWVudDogQ29uZmlnRGF0YUNvbmNlcHQpID0+IHtcbiAgICAgICAgZmllbGRzQnlbY29uZmlnRGF0YUVsZW1lbnQuaWRdID0gY29uZmlnRGF0YUVsZW1lbnQudmFsdWUubWFwKFxuICAgICAgICAgIChkc0lkOiBGaWVsZElkKTogRmllbGQgPT4gZmllbGRzQnlEU0lkW2RzSWRdXG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpZWxkc0J5O1xufTtcblxuLyoqXG4gKiBGbGF0dGVucyB0aGUgc3R5bGUgZW50cmllcyBpbnRvIGEgc2luZ2xlIG9iamVjdC4gYHN0eWxlSWRgcyBzaG91bGQgYmUgdW5pcXVlLlxuICovXG5jb25zdCBmbGF0dGVuU3R5bGUgPSAobWVzc2FnZTogTWVzc2FnZSk6IFN0eWxlQnlJZCA9PiB7XG4gIGNvbnN0IHN0eWxlQnlJZDogU3R5bGVCeUlkID0ge307XG4gIChtZXNzYWdlLmNvbmZpZy5zdHlsZSB8fCBbXSkuZm9yRWFjaCgoc3R5bGVFbnRyeTogQ29uZmlnU3R5bGUpID0+IHtcbiAgICBzdHlsZUVudHJ5LmVsZW1lbnRzLmZvckVhY2goKGNvbmZpZ1N0eWxlRWxlbWVudDogQ29uZmlnU3R5bGVFbGVtZW50KSA9PiB7XG4gICAgICBpZiAoc3R5bGVCeUlkW2NvbmZpZ1N0eWxlRWxlbWVudC5pZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgYHN0eWxlSWRzIG11c3QgYmUgdW5pcXVlLiBZb3VyIHN0eWxlSWQ6ICcke2NvbmZpZ1N0eWxlRWxlbWVudC5pZH0nIGlzIHVzZWQgbW9yZSB0aGFuIG9uY2UuYFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgc3R5bGVCeUlkW2NvbmZpZ1N0eWxlRWxlbWVudC5pZF0gPSB7XG4gICAgICAgIHZhbHVlOiBjb25maWdTdHlsZUVsZW1lbnQudmFsdWUsXG4gICAgICAgIGRlZmF1bHRWYWx1ZTogY29uZmlnU3R5bGVFbGVtZW50LmRlZmF1bHRWYWx1ZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH0sIHt9KTtcblxuICByZXR1cm4gc3R5bGVCeUlkO1xufTtcblxuY29uc3QgdGhlbWVTdHlsZSA9IChtZXNzYWdlOiBNZXNzYWdlKTogVGhlbWVTdHlsZSA9PiB7XG4gIHJldHVybiBtZXNzYWdlLmNvbmZpZy50aGVtZVN0eWxlITtcbn07XG5cbmNvbnN0IG1hcEludGVyYWN0aW9uVHlwZXMgPSAoXG4gIGRzSW50ZXJhY3Rpb246IERTSW50ZXJhY3Rpb25UeXBlXG4pOiBJbnRlcmFjdGlvblR5cGUgPT4ge1xuICBzd2l0Y2ggKGRzSW50ZXJhY3Rpb24pIHtcbiAgICBjYXNlIERTSW50ZXJhY3Rpb25UeXBlLkZJTFRFUjpcbiAgICAgIHJldHVybiBJbnRlcmFjdGlvblR5cGUuRklMVEVSO1xuICB9XG59O1xuXG5jb25zdCB0cmFuc2Zvcm1EU0ludGVyYWN0aW9uID0gKG1lc3NhZ2U6IE1lc3NhZ2UpOiBJbnRlcmFjdGlvbnNCeUlkID0+IHtcbiAgY29uc3QgZHNJbnRlcmFjdGlvbnM6IERTSW50ZXJhY3Rpb25EYXRhW10gPSBtZXNzYWdlLmNvbmZpZy5pbnRlcmFjdGlvbnM7XG4gIC8vIFRPRE8gLSByZW1vdmUgb25jZSBpbnRlcmFjdGlvbnMgYXJlIGxpdmUuXG4gIGlmIChkc0ludGVyYWN0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIHJldHVybiBkc0ludGVyYWN0aW9ucy5yZWR1Y2UoXG4gICAgKGFjYzogSW50ZXJhY3Rpb25zQnlJZCwgZHNJbnRlcmFjdGlvbjogRFNJbnRlcmFjdGlvbkRhdGEpID0+IHtcbiAgICAgIGNvbnN0IGludGVyYWN0aW9ucyA9IGRzSW50ZXJhY3Rpb24uc3VwcG9ydGVkQWN0aW9ucy5tYXAoXG4gICAgICAgIG1hcEludGVyYWN0aW9uVHlwZXNcbiAgICAgICk7XG4gICAgICBjb25zdCB2YWx1ZSA9IHtcbiAgICAgICAgdHlwZTogbWFwSW50ZXJhY3Rpb25UeXBlcyhkc0ludGVyYWN0aW9uLnZhbHVlLnR5cGUpLFxuICAgICAgICBkYXRhOiBkc0ludGVyYWN0aW9uLnZhbHVlLmRhdGEsXG4gICAgICB9O1xuICAgICAgYWNjW2RzSW50ZXJhY3Rpb24uaWRdID0ge1xuICAgICAgICB2YWx1ZSxcbiAgICAgICAgc3VwcG9ydGVkQWN0aW9uczogaW50ZXJhY3Rpb25zLFxuICAgICAgfTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSxcbiAgICB7fVxuICApO1xufTtcblxuLyoqXG4gKiBUcmFuc2Zvcm0gZm9yIGRhdGUgcmFuZ2VzXG4gKi9cbmNvbnN0IHRvRGF0ZVJhbmdlcyA9IChtZXNzYWdlOiBNZXNzYWdlKTogRGF0ZVJhbmdlc0J5SWQgPT4ge1xuICBjb25zdCBkYXRlUmFuZ2VzID0gbWVzc2FnZS5kYXRhUmVzcG9uc2UuZGF0ZVJhbmdlcyB8fCBbXTtcbiAgY29uc3Qgb3V0cHV0OiBEYXRlUmFuZ2VzQnlJZCA9IHt9O1xuICByZXR1cm4gZGF0ZVJhbmdlcy5yZWR1Y2UoKGluUHJvZ3Jlc3MsIGN1cnJlbnREU0RhdGVSYW5nZSkgPT4ge1xuICAgIGluUHJvZ3Jlc3NbY3VycmVudERTRGF0ZVJhbmdlLmlkXSA9IHtcbiAgICAgIHN0YXJ0OiBjdXJyZW50RFNEYXRlUmFuZ2Uuc3RhcnQsXG4gICAgICBlbmQ6IGN1cnJlbnREU0RhdGVSYW5nZS5lbmQsXG4gICAgfTtcbiAgICByZXR1cm4gaW5Qcm9ncmVzcztcbiAgfSwgb3V0cHV0KTtcbn07XG5cbi8qIFRyYW5zZm9ybSBmb3IgY29sb3IgbWFwcyAqL1xuY29uc3QgdG9Db2xvcnNCeURpbWVuc2lvbiA9IChtZXNzYWdlOiBNZXNzYWdlKTogQ29sb3JzQnlEaW1lbnNpb24gPT4ge1xuICBjb25zdCBjb2xvcnMgPSBtZXNzYWdlLmNvbmZpZy5jb2xvck1hcCB8fCB7fTtcbiAgcmV0dXJuIHsuLi5jb2xvcnN9O1xufTtcbi8qKlxuICogVGhlIHRyYW5zZm9ybSB0byB1c2UgZm9yIGRhdGEgaW4gYSBUYWJsZSBmb3JtYXQuIGkuZS4gYFtbMSwgMiwgM10sIFs0LCA1LCA2XV1gXG4gKi9cbmV4cG9ydCBjb25zdCB0YWJsZVRyYW5zZm9ybTogVGFibGVUcmFuc2Zvcm0gPSAoXG4gIG1lc3NhZ2U6IE1lc3NhZ2Vcbik6IFRhYmxlRm9ybWF0ID0+ICh7XG4gIHRhYmxlczogdGFibGVGb3JtYXRUYWJsZShtZXNzYWdlKSxcbiAgZGF0ZVJhbmdlczogdG9EYXRlUmFuZ2VzKG1lc3NhZ2UpLFxuICBmaWVsZHM6IGZpZWxkc0J5Q29uZmlnSWQobWVzc2FnZSksXG4gIHN0eWxlOiBmbGF0dGVuU3R5bGUobWVzc2FnZSksXG4gIHRoZW1lOiB0aGVtZVN0eWxlKG1lc3NhZ2UpLFxuICBpbnRlcmFjdGlvbnM6IHRyYW5zZm9ybURTSW50ZXJhY3Rpb24obWVzc2FnZSksXG4gIGNvbG9yTWFwOiB0b0NvbG9yc0J5RGltZW5zaW9uKG1lc3NhZ2UpLFxufSk7XG5cbi8qKlxuICogVGhlIHRyYW5zZm9ybSB0byB1c2UgZm9yIGRhdGEgaW4gYW4gb2JqZWN0IGZvcm1hdC4gaS5lLiBgW3tuYW1lOiAnam9obicsIHZpZXdzOiAzfSwge25hbWU6ICdzdXppZScsIHZpZXdzOiA1fV1gXG4gKi9cbmV4cG9ydCBjb25zdCBvYmplY3RUcmFuc2Zvcm06IE9iamVjdFRyYW5zZm9ybSA9IChtZXNzYWdlOiBNZXNzYWdlKSA9PiAoe1xuICB0YWJsZXM6IG9iamVjdEZvcm1hdFRhYmxlKG1lc3NhZ2UpLFxuICBkYXRlUmFuZ2VzOiB0b0RhdGVSYW5nZXMobWVzc2FnZSksXG4gIGZpZWxkczogZmllbGRzQnlDb25maWdJZChtZXNzYWdlKSxcbiAgc3R5bGU6IGZsYXR0ZW5TdHlsZShtZXNzYWdlKSxcbiAgdGhlbWU6IHRoZW1lU3R5bGUobWVzc2FnZSksXG4gIGludGVyYWN0aW9uczogdHJhbnNmb3JtRFNJbnRlcmFjdGlvbihtZXNzYWdlKSxcbiAgY29sb3JNYXA6IHRvQ29sb3JzQnlEaW1lbnNpb24obWVzc2FnZSksXG59KTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGUgdHJhbnNmb3JtIGlzIGxpa2VseSB0aGUgaWRlbnRpdHkgZnVuY3Rpb25cbiAqIFRoaXMgaXMgbm90IGEgc3VwcG9ydGVkIGltcGxlbWVudGF0aW9uIHBhdGhcbiAqIEF2b2lkIHRoaXMgaWYgYXQgYWxsIHBvc3NpYmxlIC0gcGxlYXNlIHVzZSBlaXRoZXIgb2JqZWN0VHJhbnNmb3JtIG9yIHRhYmxlVHJhbnNmb3JtXG4gKi9cbmNvbnN0IGlzUHJvYmFibHlJZGVudGl0eUZ1bmN0aW9uID0gPFQsIFU+KHRyYW5zZm9ybTogKHQ6IFQpID0+IFUpOiBib29sZWFuID0+IHtcbiAgbGV0IGlzSWRlbnRpdHk6IGJvb2xlYW4gPSBmYWxzZTtcbiAgaWYgKCh0cmFuc2Zvcm0gYXMgYW55KSgnaWRlbnRpdHknKSA9PT0gJ2lkZW50aXR5Jykge1xuICAgIGlzSWRlbnRpdHkgPSB0cnVlO1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBUaGlzIGlzIGFuIHVuc3VwcG9ydGVkIGRhdGEgZm9ybWF0LiBQbGVhc2UgdXNlIG9uZSBvZiB0aGUgc3VwcG9ydGVkIHRyYW5zZm9ybXM6XG4gICAgICAgZHNjYy5vYmplY3RGb3JtYXQgb3IgZHNjYy50YWJsZUZvcm1hdC5gXG4gICAgKTtcbiAgfVxuICByZXR1cm4gaXNJZGVudGl0eTtcbn07XG5cbmNvbnN0IGlzVmFsaWRUcmFuc2Zvcm0gPSA8VCwgVT4odHJhbnNmb3JtOiAodDogVCkgPT4gVSk6IGJvb2xlYW4gPT4ge1xuICBsZXQgaXNWYWxpZCA9IGZhbHNlO1xuICBpZiAoXG4gICAgKHRyYW5zZm9ybSBhcyBhbnkpID09PSB0YWJsZVRyYW5zZm9ybSB8fFxuICAgICh0cmFuc2Zvcm0gYXMgYW55KSA9PT0gb2JqZWN0VHJhbnNmb3JtXG4gICkge1xuICAgIGlzVmFsaWQgPSB0cnVlO1xuICB9IGVsc2UgaWYgKGlzUHJvYmFibHlJZGVudGl0eUZ1bmN0aW9uKHRyYW5zZm9ybSkpIHtcbiAgICBpc1ZhbGlkID0gdHJ1ZTtcbiAgfVxuICByZXR1cm4gaXNWYWxpZDtcbn07XG4vKlxuICogU3Vic2NyaWJlcyB0byBtZXNzYWdlcyBmcm9tIERhdGEgU3R1ZGlvLiBDYWxscyBgY2JgIGZvciBldmVyeSBuZXdcbiAqIFtbTWVzc2FnZVR5cGUuUkVOREVSXV0gbWVzc2FnZS4gUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgd2lsbCB1bnN1YnNjcmliZVxuICogYGNhbGxiYWNrYCBmcm9tIGZ1cnRoZXIgaW52b2NhdGlvbnMuXG4gKlxuICogVXNhZ2UgLSB0YWJsZVRyYW5zZm9ybTpcbiAqIGBgYFxuICogdmFyIHVuc3Vic2NyaWJlID0gZHNjYy5zdWJzY3JpYmVUb0RhdGEoZnVuY3Rpb24obWVzc2FnZSkge1xuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLnRhYmxlcylcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS5maWVsZHMpXG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2Uuc3R5bGUpXG4gKiB9LCB7dHJhbnNmb3JtOiBkc2NjLnRhYmxlVHJhbnNmb3JtfSk7XG4gKlxuICogc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAqICAgdW5zdWJzY3JpYmUoKTtcbiAqIH0sIDMwMDApXG4gKiBgYGBcblxuICogVXNhZ2UgLSBvYmplY3RUcmFuc2Zvcm06XG4gKiBgYGBcbiAqIHZhciB1bnN1YnNjcmliZSA9IGRzY2Muc3Vic2NyaWJlVG9EYXRhKGZ1bmN0aW9uKG1lc3NhZ2UpIHtcbiAqICAgY29uc29sZS5sb2cobWVzc2FnZS50YWJsZXMpXG4gKiAgIGNvbnNvbGUubG9nKG1lc3NhZ2UuZmllbGRzKVxuICogICBjb25zb2xlLmxvZyhtZXNzYWdlLnN0eWxlKVxuICogfSwge3RyYW5zZm9ybTogZHNjYy5vYmplY3RUcmFuc2Zvcm19KTtcbiAqXG4gKiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICogICB1bnN1YnNjcmliZSgpO1xuICogfSwgMzAwMClcbiAqIGBgYFxuICovXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlVG9EYXRhID0gPFQ+KFxuICBjYjogKGNvbXBvbmVudERhdGE6IFQpID0+IHZvaWQsXG4gIG9wdGlvbnM6IFN1YnNjcmlwdGlvbnNPcHRpb25zPFQ+XG4pOiAoKCkgPT4gdm9pZCkgPT4ge1xuICBpZiAoaXNWYWxpZFRyYW5zZm9ybShvcHRpb25zLnRyYW5zZm9ybSkpIHtcbiAgICBjb25zdCBvbk1lc3NhZ2UgPSAobWVzc2FnZTogUG9zdE1lc3NhZ2UpID0+IHtcbiAgICAgIGlmIChtZXNzYWdlLmRhdGEudHlwZSA9PT0gTWVzc2FnZVR5cGUuUkVOREVSKSB7XG4gICAgICAgIGNiKG9wdGlvbnMudHJhbnNmb3JtKG1lc3NhZ2UuZGF0YSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICBgTWVzc2FnZVR5cGU6ICR7bWVzc2FnZS5kYXRhLnR5cGV9IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhpcyB2ZXJzaW9uIG9mIHRoZSBsaWJyYXJ5LmBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKTtcbiAgICBjb25zdCBjb21wb25lbnRJZCA9IGdldENvbXBvbmVudElkKCk7XG4gICAgLy8gVGVsbCBEYXRhU3R1ZGlvIHRoYXQgdGhlIHZpeiBpcyByZWFkeSB0byBnZXQgZXZlbnRzLlxuICAgIGNvbnN0IHZpelJlYWR5TWVzc2FnZTogVml6UmVhZHlNZXNzYWdlID0ge1xuICAgICAgY29tcG9uZW50SWQsXG4gICAgICB0eXBlOiBUb0RTTWVzc2FnZVR5cGUuVklaX1JFQURZLFxuICAgIH07XG4gICAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZSh2aXpSZWFkeU1lc3NhZ2UsICcqJyk7XG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgb25NZXNzYWdlKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE9ubHkgdGhlIGJ1aWx0IGluIHRyYW5zZm9ybSBmdW5jdGlvbnMgYXJlIHN1cHBvcnRlZC5gKTtcbiAgfVxufTtcblxuLypcbiAqIERvZXMgdGhlIHRoaW5nIHRoYXQgaW50ZXJhY3Rpb25zIHNob3VsZCBkby5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlbmRJbnRlcmFjdGlvbjogU2VuZEludGVyYWN0aW9uID0gKFxuICBhY3Rpb25JZCxcbiAgaW50ZXJhY3Rpb24sXG4gIGRhdGFcbikgPT4ge1xuICBjb25zdCBjb21wb25lbnRJZCA9IGdldENvbXBvbmVudElkKCk7XG4gIGNvbnN0IGludGVyYWN0aW9uTWVzc2FnZTogSW50ZXJhY3Rpb25NZXNzYWdlID0ge1xuICAgIHR5cGU6IFRvRFNNZXNzYWdlVHlwZS5JTlRFUkFDVElPTixcbiAgICBpZDogYWN0aW9uSWQsXG4gICAgZGF0YSxcbiAgICBjb21wb25lbnRJZCxcbiAgfTtcbiAgd2luZG93LnBhcmVudC5wb3N0TWVzc2FnZShpbnRlcmFjdGlvbk1lc3NhZ2UsICcqJyk7XG59O1xuXG4vKlxuICogQ2xlYXJzIGFuIGludGVyYWN0aW9uXG4gKi9cblxuZXhwb3J0IGNvbnN0IGNsZWFySW50ZXJhY3Rpb246IENsZWFySW50ZXJhY3Rpb24gPSAoYWN0aW9uSWQsIGludGVyYWN0aW9uKSA9PiB7XG4gIHNlbmRJbnRlcmFjdGlvbihhY3Rpb25JZCwgaW50ZXJhY3Rpb24sIHVuZGVmaW5lZCk7XG59O1xuIiwiLyohXG4gIEBsaWNlbnNlXG4gIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcblxuICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuXG4gIGh0dHBzOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcblxuICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuaW1wb3J0IHtjbGVhckludGVyYWN0aW9ufSBmcm9tICcuJztcblxuZXhwb3J0IGludGVyZmFjZSBQb3N0TWVzc2FnZSBleHRlbmRzIE1lc3NhZ2VFdmVudCB7XG4gIGRhdGE6IE1lc3NhZ2U7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBUaGUgbWVzc2FnZSB0eXBlLlxuICAgKi9cbiAgdHlwZTogTWVzc2FnZVR5cGU7XG4gIC8qKlxuICAgKiBUaGUgY29uZmlndXJhdGlvbiBzdGF0ZSBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY29uZmlnOiBDb25maWc7XG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgYWxsIHVzZXIgc2VsZWN0ZWQgZmllbGRzLlxuICAgKi9cbiAgZmllbGRzOiBGaWVsZFtdO1xuICAvKipcbiAgICogVGhlIGRhdGEgY29ycmVzcG9uZGluZyB0byB0aGUgZGF0YSBjb25maWcgc3RhdGUgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGRhdGFSZXNwb25zZTogRGF0YVJlc3BvbnNlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBjb25maWcgZGVmaW5lZCBmb3IgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGRhdGE6IENvbmZpZ0RhdGFbXTtcbiAgLyoqXG4gICAqIFRoZSBzdHlsZSBlbGVtZW50cyByZXF1aXJlZCBhbmQgc3VwcG9ydGVkIGJ5IHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBzdHlsZTogQ29uZmlnU3R5bGVbXTtcbiAgdGhlbWVTdHlsZT86IENvbmZpZ1RoZW1lU3R5bGU7XG4gIGludGVyYWN0aW9uczogRFNJbnRlcmFjdGlvbkRhdGFbXTtcbiAgY29sb3JNYXA/OiBEU0NvbG9yTWFwO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkIHtcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgZmllbGQuXG4gICAqL1xuICBpZDogRmllbGRJZDtcbiAgLyoqXG4gICAqIFRoZSB1c2VyLWZyaWVuZGx5IG5hbWUgb2YgdGhlIGZpZWxkLlxuICAgKi9cbiAgbmFtZTogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIHVzZXItZnJpZW5kbHkgZGVzY3JpcHRpb24gb2YgdGhlIGZpZWxkLlxuICAgKi9cbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZmllbGQgdHlwZS5cbiAgICovXG4gIHR5cGU6IEZpZWxkVHlwZTtcbiAgLyoqXG4gICAqIFRoZSBmaWVsZCBjb25jZXB0LlxuICAgKi9cbiAgY29uY2VwdDogQ29uY2VwdFR5cGU7XG59XG5cbmV4cG9ydCBlbnVtIENvbmNlcHRUeXBlIHtcbiAgTUVUUklDID0gJ01FVFJJQycsXG4gIERJTUVOU0lPTiA9ICdESU1FTlNJT04nLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERTRGF0ZVJhbmdlIHtcbiAgaWQ6IERhdGVSYW5nZVR5cGU7XG4gIHN0YXJ0OiBzdHJpbmc7XG4gIGVuZDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERTQ29sb3JNYXAge1xuICBbZGltZW5zaW9uOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YVJlc3BvbnNlIHtcbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIHRhYmxlcyBmb3IgdGhlIGN1cnJlbnQgZGF0YSBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgdGFibGVzOiBUYWJsZVtdO1xuICBkYXRlUmFuZ2VzPzogRFNEYXRlUmFuZ2VbXTtcbn1cblxuZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xuICBSRU5ERVIgPSAnUkVOREVSJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdEYXRhIHtcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgZGF0YSBzZWN0aW9uLlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcgd2l0aCBubyBzcGFjZXMuXG4gICAqL1xuICBpZDogQ29uZmlnRGF0YUlkO1xuICAvKipcbiAgICogVGhlIGxhYmVsIGZvciB0aGUgZGF0YSBzZWN0aW9uLlxuICAgKi9cbiAgbGFiZWw6IHN0cmluZztcbiAgLyoqXG4gICAqIFRoZSBkYXRhIGVsZW1lbnRzIHRvIHJlbmRlci5cbiAgICovXG4gIGVsZW1lbnRzOiBDb25maWdEYXRhRWxlbWVudFtdO1xufVxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTdHlsZSB7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIHN0eWxlIHNlY3Rpb24uXG4gICAqL1xuICBpZDogQ29uZmlnU3R5bGVJZDtcbiAgLyoqXG4gICAqIFRoZSBoZWFkaW5nIGZvciB0aGUgc3R5bGUgc2VjdGlvbi5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgc3R5bGUgZWxlbWVudHMgdG8gcmVuZGVyLlxuICAgKi9cbiAgZWxlbWVudHM6IENvbmZpZ1N0eWxlRWxlbWVudFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ1RoZW1lU3R5bGUge1xuICB0aGVtZUZpbGxDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lRm9udENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVBY2NlbnRGaWxsQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUFjY2VudEZvbnRDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lRm9udEZhbWlseTogc3RyaW5nO1xuICB0aGVtZUFjY2VudEZvbnRGYW1pbHk6IHN0cmluZztcbiAgdGhlbWVJbmNyZWFzZUNvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZURlY3JlYXNlQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gIH07XG4gIHRoZW1lR3JpZENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZVNlcmllc0NvbG9yOiBBcnJheTx7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgICBzZXJpZXNSZWY6IFNlcmllc1JlZkluZGV4O1xuICB9Pjtcbn1cblxuaW50ZXJmYWNlIFRoZW1lUmVmSW5kZXgge1xuICBpbmRleDogbnVtYmVyO1xufVxuaW50ZXJmYWNlIFNlcmllc1JlZkluZGV4IHtcbiAgaW5kZXg6IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaGVtZVN0eWxlIHtcbiAgdGhlbWVGaWxsQ29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUZvbnRDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gIH07XG4gIHRoZW1lQWNjZW50RmlsbENvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICAgIHRoZW1lUmVmPzogVGhlbWVSZWZJbmRleDtcbiAgfTtcbiAgdGhlbWVBY2NlbnRGb250Q29sb3I6IHtcbiAgICBjb2xvcjogc3RyaW5nO1xuICAgIG9wYWNpdHk/OiBudW1iZXI7XG4gICAgdGhlbWVSZWY/OiBUaGVtZVJlZkluZGV4O1xuICB9O1xuICB0aGVtZUZvbnRGYW1pbHk6IHN0cmluZztcbiAgdGhlbWVBY2NlbnRGb250RmFtaWx5OiBzdHJpbmc7XG4gIHRoZW1lSW5jcmVhc2VDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVEZWNyZWFzZUNvbG9yOiB7XG4gICAgY29sb3I6IHN0cmluZztcbiAgICBvcGFjaXR5PzogbnVtYmVyO1xuICB9O1xuICB0aGVtZUdyaWRDb2xvcjoge1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgfTtcbiAgdGhlbWVTZXJpZXNDb2xvcjogQXJyYXk8e1xuICAgIGNvbG9yOiBzdHJpbmc7XG4gICAgb3BhY2l0eT86IG51bWJlcjtcbiAgICB0aGVtZVJlZj86IFRoZW1lUmVmSW5kZXg7XG4gICAgc2VyaWVzUmVmOiBTZXJpZXNSZWZJbmRleDtcbiAgfT47XG59XG5cbmV4cG9ydCBlbnVtIEZpZWxkVHlwZSB7XG4gIFlFQVIgPSAnWUVBUicsXG4gIFlFQVJfUVVBUlRFUiA9ICdZRUFSX1FVQVJURVInLFxuICBZRUFSX01PTlRIID0gJ1lFQVJfTU9OVEgnLFxuICBZRUFSX1dFRUsgPSAnWUVBUl9XRUVLJyxcbiAgWUVBUl9NT05USF9EQVkgPSAnWUVBUl9NT05USF9EQVknLFxuICBZRUFSX01PTlRIX0RBWV9IT1VSID0gJ1lFQVJfTU9OVEhfREFZX0hPVVInLFxuICBRVUFSVEVSID0gJ1FVQVJURVInLFxuICBNT05USCA9ICdNT05USCcsXG4gIFdFRUsgPSAnV0VFSycsXG4gIE1PTlRIX0RBWSA9ICdNT05USF9EQVknLFxuICBEQVlfT0ZfV0VFSyA9ICdEQVlfT0ZfV0VFSycsXG4gIERBWSA9ICdEQVknLFxuICBIT1VSID0gJ0hPVVInLFxuICBNSU5VVEUgPSAnTUlOVVRFJyxcbiAgRFVSQVRJT04gPSAnRFVSQVRJT04nLFxuICBDT1VOVFJZID0gJ0NPVU5UUlknLFxuICBDT1VOVFJZX0NPREUgPSAnQ09VTlRSWV9DT0RFJyxcbiAgQ09OVElORU5UID0gJ0NPTlRJTkVOVCcsXG4gIENPTlRJTkVOVF9DT0RFID0gJ0NPTlRJTkVOVF9DT0RFJyxcbiAgU1VCX0NPTlRJTkVOVCA9ICdTVUJfQ09OVElORU5UJyxcbiAgU1VCX0NPTlRJTkVOVF9DT0RFID0gJ1NVQl9DT05USU5FTlRfQ09ERScsXG4gIFJFR0lPTiA9ICdSRUdJT04nLFxuICBSRUdJT05fQ09ERSA9ICdSRUdJT05fQ09ERScsXG4gIENJVFkgPSAnQ0lUWScsXG4gIENJVFlfQ09ERSA9ICdDSVRZX0NPREUnLFxuICBNRVRST19DT0RFID0gJ01FVFJPX0NPREUnLFxuICBMQVRJVFVERV9MT05HSVRVREUgPSAnTEFUSVRVREVfTE9OR0lUVURFJyxcbiAgTlVNQkVSID0gJ05VTUJFUicsXG4gIFBFUkNFTlQgPSAnUEVSQ0VOVCcsXG4gIFRFWFQgPSAnVEVYVCcsXG4gIEJPT0xFQU4gPSAnQk9PTEVBTicsXG4gIFVSTCA9ICdVUkwnLFxuICBJTUFHRSA9ICdJTUFHRScsXG4gIENVUlJFTkNZX0FFRCA9ICdDVVJSRU5DWV9BRUQnLFxuICBDVVJSRU5DWV9BTEwgPSAnQ1VSUkVOQ1lfQUxMJyxcbiAgQ1VSUkVOQ1lfQVJTID0gJ0NVUlJFTkNZX0FSUycsXG4gIENVUlJFTkNZX0FVRCA9ICdDVVJSRU5DWV9BVUQnLFxuICBDVVJSRU5DWV9CRFQgPSAnQ1VSUkVOQ1lfQkRUJyxcbiAgQ1VSUkVOQ1lfQkdOID0gJ0NVUlJFTkNZX0JHTicsXG4gIENVUlJFTkNZX0JPQiA9ICdDVVJSRU5DWV9CT0InLFxuICBDVVJSRU5DWV9CUkwgPSAnQ1VSUkVOQ1lfQlJMJyxcbiAgQ1VSUkVOQ1lfQ0FEID0gJ0NVUlJFTkNZX0NBRCcsXG4gIENVUlJFTkNZX0NERiA9ICdDVVJSRU5DWV9DREYnLFxuICBDVVJSRU5DWV9DSEYgPSAnQ1VSUkVOQ1lfQ0hGJyxcbiAgQ1VSUkVOQ1lfQ0xQID0gJ0NVUlJFTkNZX0NMUCcsXG4gIENVUlJFTkNZX0NOWSA9ICdDVVJSRU5DWV9DTlknLFxuICBDVVJSRU5DWV9DT1AgPSAnQ1VSUkVOQ1lfQ09QJyxcbiAgQ1VSUkVOQ1lfQ1JDID0gJ0NVUlJFTkNZX0NSQycsXG4gIENVUlJFTkNZX0NaSyA9ICdDVVJSRU5DWV9DWksnLFxuICBDVVJSRU5DWV9ES0sgPSAnQ1VSUkVOQ1lfREtLJyxcbiAgQ1VSUkVOQ1lfRE9QID0gJ0NVUlJFTkNZX0RPUCcsXG4gIENVUlJFTkNZX0VHUCA9ICdDVVJSRU5DWV9FR1AnLFxuICBDVVJSRU5DWV9FVEIgPSAnQ1VSUkVOQ1lfRVRCJyxcbiAgQ1VSUkVOQ1lfRVVSID0gJ0NVUlJFTkNZX0VVUicsXG4gIENVUlJFTkNZX0dCUCA9ICdDVVJSRU5DWV9HQlAnLFxuICBDVVJSRU5DWV9IS0QgPSAnQ1VSUkVOQ1lfSEtEJyxcbiAgQ1VSUkVOQ1lfSFJLID0gJ0NVUlJFTkNZX0hSSycsXG4gIENVUlJFTkNZX0hVRiA9ICdDVVJSRU5DWV9IVUYnLFxuICBDVVJSRU5DWV9JRFIgPSAnQ1VSUkVOQ1lfSURSJyxcbiAgQ1VSUkVOQ1lfSUxTID0gJ0NVUlJFTkNZX0lMUycsXG4gIENVUlJFTkNZX0lOUiA9ICdDVVJSRU5DWV9JTlInLFxuICBDVVJSRU5DWV9JUlIgPSAnQ1VSUkVOQ1lfSVJSJyxcbiAgQ1VSUkVOQ1lfSVNLID0gJ0NVUlJFTkNZX0lTSycsXG4gIENVUlJFTkNZX0pNRCA9ICdDVVJSRU5DWV9KTUQnLFxuICBDVVJSRU5DWV9KUFkgPSAnQ1VSUkVOQ1lfSlBZJyxcbiAgQ1VSUkVOQ1lfS1JXID0gJ0NVUlJFTkNZX0tSVycsXG4gIENVUlJFTkNZX0xLUiA9ICdDVVJSRU5DWV9MS1InLFxuICBDVVJSRU5DWV9MVEwgPSAnQ1VSUkVOQ1lfTFRMJyxcbiAgQ1VSUkVOQ1lfTU5UID0gJ0NVUlJFTkNZX01OVCcsXG4gIENVUlJFTkNZX01WUiA9ICdDVVJSRU5DWV9NVlInLFxuICBDVVJSRU5DWV9NWE4gPSAnQ1VSUkVOQ1lfTVhOJyxcbiAgQ1VSUkVOQ1lfTVlSID0gJ0NVUlJFTkNZX01ZUicsXG4gIENVUlJFTkNZX05PSyA9ICdDVVJSRU5DWV9OT0snLFxuICBDVVJSRU5DWV9OWkQgPSAnQ1VSUkVOQ1lfTlpEJyxcbiAgQ1VSUkVOQ1lfUEFCID0gJ0NVUlJFTkNZX1BBQicsXG4gIENVUlJFTkNZX1BFTiA9ICdDVVJSRU5DWV9QRU4nLFxuICBDVVJSRU5DWV9QSFAgPSAnQ1VSUkVOQ1lfUEhQJyxcbiAgQ1VSUkVOQ1lfUEtSID0gJ0NVUlJFTkNZX1BLUicsXG4gIENVUlJFTkNZX1BMTiA9ICdDVVJSRU5DWV9QTE4nLFxuICBDVVJSRU5DWV9ST04gPSAnQ1VSUkVOQ1lfUk9OJyxcbiAgQ1VSUkVOQ1lfUlNEID0gJ0NVUlJFTkNZX1JTRCcsXG4gIENVUlJFTkNZX1JVQiA9ICdDVVJSRU5DWV9SVUInLFxuICBDVVJSRU5DWV9TQVIgPSAnQ1VSUkVOQ1lfU0FSJyxcbiAgQ1VSUkVOQ1lfU0VLID0gJ0NVUlJFTkNZX1NFSycsXG4gIENVUlJFTkNZX1NHRCA9ICdDVVJSRU5DWV9TR0QnLFxuICBDVVJSRU5DWV9USEIgPSAnQ1VSUkVOQ1lfVEhCJyxcbiAgQ1VSUkVOQ1lfVFJZID0gJ0NVUlJFTkNZX1RSWScsXG4gIENVUlJFTkNZX1RXRCA9ICdDVVJSRU5DWV9UV0QnLFxuICBDVVJSRU5DWV9UWlMgPSAnQ1VSUkVOQ1lfVFpTJyxcbiAgQ1VSUkVOQ1lfVUFIID0gJ0NVUlJFTkNZX1VBSCcsXG4gIENVUlJFTkNZX1VTRCA9ICdDVVJSRU5DWV9VU0QnLFxuICBDVVJSRU5DWV9VWVUgPSAnQ1VSUkVOQ1lfVVlVJyxcbiAgQ1VSUkVOQ1lfVkVGID0gJ0NVUlJFTkNZX1ZFRicsXG4gIENVUlJFTkNZX1ZORCA9ICdDVVJSRU5DWV9WTkQnLFxuICBDVVJSRU5DWV9ZRVIgPSAnQ1VSUkVOQ1lfWUVSJyxcbiAgQ1VSUkVOQ1lfWkFSID0gJ0NVUlJFTkNZX1pBUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGUge1xuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhlIHRhYmxlLlxuICAgKi9cbiAgaWQ6IFRhYmxlVHlwZTtcbiAgLyoqXG4gICAqIFRoZSBbW0ZpZWxkSWRdXXMgb2YgdGhlIGZpZWxkcyBzZWxlY3RlZCBieSB0aGUgdXNlci5cbiAgICovXG4gIGZpZWxkczogRmllbGRJZFtdO1xuICAvKipcbiAgICogVGhlIHJvd3Mgb2YgZGF0YSBWYWx1ZXMuXG4gICAqL1xuICByb3dzOiBEU1Jvd1tdO1xufVxuXG4vKipcbiAqIEEgcm93IG9mIHZhbHVlcy5cbiAqXG4gKiBUaGUgb3JkZXIgb2YgdmFsdWVzIGNvcnJlc3BvbmRzIHRvIHRoZSBvcmRlciBvZiB0aGUgZmllbGRzIG9mIGFsbCBkYXRhIGVsZW1lbnQgZmllbGQgb2JqZWN0cy5cbiAqL1xuXG5leHBvcnQgdHlwZSBEU1JvdyA9IERTUm93VmFsdWVbXTtcbi8qKlxuICogQSB2YWx1ZSBmb3IgYW4gZW50cnkgaW4gYSBEU1Jvdy5cbiAqL1xuZXhwb3J0IHR5cGUgRFNSb3dWYWx1ZSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRGF0YUVsZW1lbnRNZXRyaWMge1xuICAvKipcbiAgICogVGhlIGRhdGEgZWxlbWVudCB0eXBlIHRvIHJlbmRlci5cbiAgICovXG4gIHR5cGU6IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5NRVRSSUM7XG4gIC8qKlxuICAgKiBUaGUgSUQgb2YgdGhlIG1ldHJpYy5cbiAgICpcbiAgICogVGhpcyBzaG91bGQgYmUgYSBub24tZW1wdHkgc3RyaW5nIHdpdGggbm8gc3BhY2VzLlxuICAgKi9cbiAgaWQ6IENvbmZpZ0RhdGFFbGVtZW50SWQ7XG4gIC8qKlxuICAgKiBUaGUgdG9vbHRpcCBvciBsYWJlbCBmb3IgdGhlIG1ldHJpYy5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBvcHRpb25zIGZvciBhIE1ldHJpYy5cbiAgICovXG4gIG9wdGlvbnM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSBudW1iZXIgb2YgbWV0cmljcyBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgbWluPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiBtZXRyaWNzIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBtYXg/OiBudW1iZXI7XG4gIH07XG4gIC8qKlxuICAgKiBUaGUgbGlzdCBvZiBbW0ZpZWxkSWRdXXMgc2VsZWN0ZWQgYnkgdGhlIHVzZXIuXG4gICAqL1xuICB2YWx1ZTogRmllbGRJZFtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ0RhdGFFbGVtZW50RGltZW5zaW9uIHtcbiAgLyoqXG4gICAqIFRoZSBkYXRhIGVsZW1lbnQgdHlwZSB0byByZW5kZXIuXG4gICAqL1xuICB0eXBlOiBDb25maWdEYXRhRWxlbWVudFR5cGUuRElNRU5TSU9OO1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBkaW1lbnNpb24uXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZyB3aXRoIG5vIHNwYWNlcy5cbiAgICovXG4gIGlkOiBDb25maWdEYXRhRWxlbWVudElkO1xuICAvKipcbiAgICogVGhlIHRvb2x0aXAgb3IgbGFiZWwgZm9yIHRoZSBkaW1lbnNpb24uXG4gICAqL1xuICBsYWJlbDogc3RyaW5nO1xuICAvKipcbiAgICogVGhlIGRhdGEgb3B0aW9ucyBmb3IgYSBEaW1lbnNpb24uXG4gICAqL1xuICBvcHRpb25zOiB7XG4gICAgLyoqXG4gICAgICogVGhlIG1pbmltdW0gbnVtYmVyIG9mIGRpbWVuc2lvbnMgc3VwcG9ydGVkLlxuICAgICAqL1xuICAgIG1pbj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2YgZGltZW5zaW9ucyBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgbWF4PzogbnVtYmVyO1xuICAgIHN1cHBvcnRlZFR5cGVzPzogQXJyYXk8J1RJTUUnIHwgJ0dFTycgfCAnREVGQVVMVCc+O1xuICB9O1xuICAvKipcbiAgICogVGhlIGxpc3Qgb2YgW1tGaWVsZElkXV1zIHNlbGVjdGVkIGJ5IHRoZSB1c2VyLlxuICAgKi9cbiAgdmFsdWU6IEZpZWxkSWRbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdEYXRhRWxlbWVudE1heFJlc3VsdHMge1xuICAvKipcbiAgICogVGhlIGRhdGEgZWxlbWVudCB0eXBlIHRvIHJlbmRlci5cbiAgICovXG4gIHR5cGU6IENvbmZpZ0RhdGFFbGVtZW50VHlwZS5NQVhfUkVTVUxUUztcbiAgLyoqXG4gICAqIFRoZSBJRCBvZiB0aGUgbWF4IHJlc3VsdHMuXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIGJlIGEgbm9uLWVtcHR5IHN0cmluZyB3aXRoIG5vIHNwYWNlcy5cbiAgICovXG4gIGlkOiBDb25maWdEYXRhRWxlbWVudElkO1xuICAvKipcbiAgICogVGhlIHRvb2x0aXAgb3IgbGFiZWwgZm9yIHRoZSBtYXggcmVzdWx0cy5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGF0YSBvcHRpb25zIGZvciBhIE1heCBSZXN1bHRzLlxuICAgKi9cbiAgb3B0aW9uczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiByb3dzLlxuICAgICAqL1xuICAgIG1heDogbnVtYmVyO1xuICB9O1xufVxuXG5leHBvcnQgdHlwZSBDb25maWdEYXRhRWxlbWVudCA9XG4gIHwgQ29uZmlnRGF0YUVsZW1lbnRNYXhSZXN1bHRzXG4gIHwgQ29uZmlnRGF0YUVsZW1lbnRNZXRyaWNcbiAgfCBDb25maWdEYXRhRWxlbWVudERpbWVuc2lvbjtcblxuLy8gVE9ETzogdGhpcyBzaG91bGQgZXZlbnR1YWxseSBhbHdheXMgYmUgYSB2YWx1ZVxuZXhwb3J0IHR5cGUgQ29uZmlnU3R5bGVWYWx1ZSA9IHN0cmluZyB8IHt9IHwgYm9vbGVhbiB8IHtjb2xvcjogc3RyaW5nfTtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdTdHlsZUVsZW1lbnQge1xuICAvKipcbiAgICogVGhlIHN0eWxlIGVsZW1lbnQgdHlwZSB0byByZW5kZXIuXG4gICAqL1xuICB0eXBlOiBDb25maWdTdHlsZUVsZW1lbnRUeXBlO1xuICAvKipcbiAgICogVGhlIElEIG9mIHRoZSBzdHlsZSBlbGVtZW50LlxuICAgKlxuICAgKiBUaGlzIHNob3VsZCBiZSBhIG5vbi1lbXB0eSBzdHJpbmcgd2l0aCBubyBzcGFjZXMuXG4gICAqL1xuICBpZDogQ29uZmlnU3R5bGVFbGVtZW50SWQ7XG4gIC8qKlxuICAgKiBUaGUgdG9vbHRpcCBvciBsYWJlbCBmb3IgdGhlIHN0eWxlIGVsZW1lbnQuXG4gICAqXG4gICAqIFRoaXMgaXMgdGhlIGxhYmVsIHRleHQgZm9yIGEgYENIRUNLQk9YYCBlbGVtZW50IGFuZCB0aGUgdG9vbHRpcCB0ZXh0IGZvciBvdGhlciBlbGVtZW50cy5cbiAgICovXG4gIGxhYmVsOiBzdHJpbmc7XG4gIC8qKlxuICAgKiBUaGUgZGVmYXVsdCB2YWx1ZSBmb3IgdGhlIHN0eWxlIGVsZW1lbnQuXG4gICAqXG4gICAqIEludmFsaWQgdmFsdWVzIHdpbGwgYmUgaWdub3JlZC5cbiAgICovXG4gIGRlZmF1bHRWYWx1ZTogQ29uZmlnU3R5bGVWYWx1ZTtcbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50IHZhbHVlIG9mIHRoZSBzdHlsZSBlbGVtZW50LlxuICAgKi9cbiAgdmFsdWU6IENvbmZpZ1N0eWxlVmFsdWU7XG59XG5leHBvcnQgZW51bSBUYWJsZVR5cGUge1xuICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICBDT01QQVJJU09OID0gJ0NPTVBBUklTT04nLFxuICBTVU1NQVJZID0gJ1NVTU1BUlknLFxufVxuXG5leHBvcnQgZW51bSBEYXRlUmFuZ2VUeXBlIHtcbiAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgQ09NUEFSSVNPTiA9ICdDT01QQVJJU09OJyxcbn1cblxuZXhwb3J0IGVudW0gQ29uZmlnRGF0YUVsZW1lbnRUeXBlIHtcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBtZXRyaWMgZmllbGQgZWxlbWVudC5cbiAgICovXG4gIE1FVFJJQyA9ICdNRVRSSUMnLFxuICAvKipcbiAgICogUmVuZGVycyBhIGRpbWVuc2lvbiBmaWVsZCBlbGVtZW50LlxuICAgKi9cbiAgRElNRU5TSU9OID0gJ0RJTUVOU0lPTicsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgZHJvcGRvd24gdGhhdCBhZmZlY3RzIHRoZSBtYXhpbXVtIG51bWJlciBvZiByZXN1bHRzIHJldHVybmVkLlxuICAgKi9cbiAgTUFYX1JFU1VMVFMgPSAnTUFYX1JFU1VMVFMnLFxufVxuXG5leHBvcnQgZW51bSBDb25maWdTdHlsZUVsZW1lbnRUeXBlIHtcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSB0ZXh0IGlucHV0IGJveC5cbiAgICovXG4gIFRFWFRJTlBVVCA9ICdURVhUSU5QVVQnLFxuICAvKipcbiAgICogQSBzaW5nbGUgc2VsZWN0IGRyb3Bkb3duLlxuICAgKi9cbiAgU0VMRUNUX1NJTkdMRSA9ICdTRUxFQ1RfU0lOR0xFJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBjaGVja2JveC5cbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZTogYGZhbHNlYFxuICAgKi9cbiAgQ0hFQ0tCT1ggPSAnQ0hFQ0tCT1gnLFxuICAvKipcbiAgICogUmVuZGVycyB0aGUgZm9udCBjb2xvciBzZWxlY3Rvci5cbiAgICpcbiAgICogQWNjZXB0YWJsZSBkZWZhdWx0IHZhbHVlczogSEVYIGNvbG9yIHZhbHVlLiBFLmcuIGBcIiM4ODg4ODhcImAuXG4gICAqXG4gICAqIERlZmF1bHQgdmFsdWU6IGBcIiMwMDBcImAuXG4gICAqL1xuICBGT05UX0NPTE9SID0gJ0ZPTlRfQ09MT1InLFxuICAvKipcbiAgICogUmVuZGVycyB0aGUgZm9udCBzaXplIHNlbGVjdG9yLlxuICAgKlxuICAgKiBEZWZhdWx0IHZhbHVlOiBgXCIxNHB4XCJgLlxuICAgKi9cbiAgRk9OVF9TSVpFID0gJ0ZPTlRfU0laRScsXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBmb250IGZhbWlseSBzZWxlY3Rvci5cbiAgICpcbiAgICogRGVmYXVsdCB2YWx1ZTogYFwiXCJgXG4gICAqL1xuICBGT05UX0ZBTUlMWSA9ICdGT05UX0ZBTUlMWScsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGEgZmlsbCBjb2xvciBzZWxlY3Rvci5cbiAgICpcbiAgICogQWNjZXB0YWJsZSBkZWZhdWx0IHZhbHVlczogSEVYIGNvbG9yIHZhbHVlLlxuICAgKi9cbiAgRklMTF9DT0xPUiA9ICdGSUxMX0NPTE9SJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBib3JkZXIgY29sb3Igc2VsZWN0b3IuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IEhFWCBjb2xvciB2YWx1ZS5cbiAgICovXG4gIEJPUkRFUl9DT0xPUiA9ICdCT1JERVJfQ09MT1InLFxuICAvKipcbiAgICogUmVuZGVycyBhbiBheGlzIGNvbG9yIHNlbGVjdG9yLlxuICAgKlxuICAgKiBBY2NlcHRhYmxlIGRlZmF1bHQgdmFsdWVzOiBIRVggY29sb3IgdmFsdWUuXG4gICAqL1xuICBBWElTX0NPTE9SID0gJ0FYSVNfQ09MT1InLFxuICAvKipcbiAgICogUmVuZGVycyBhIGdyaWQgY29sb3Igc2VsZWN0b3IuXG4gICAqXG4gICAqIEFjY2VwdGFibGUgZGVmYXVsdCB2YWx1ZXM6IEhFWCBjb2xvciB2YWx1ZS5cbiAgICovXG4gIEdSSURfQ09MT1IgPSAnR1JJRF9DT0xPUicsXG4gIC8qKlxuICAgKiBSZW5kZXJzIGFuIG9wYWNpdHkgc2VsZWN0b3IuXG4gICAqL1xuICBPUEFDSVRZID0gJ09QQUNJVFknLFxuICAvKipcbiAgICogUmVuZGVycyBhIGxpbmUgd2VpZ2h0IHBpY2tlci5cbiAgICovXG4gIExJTkVfV0VJR0hUID0gJ0xJTkVfV0VJR0hUJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSBsaW5lIHN0eWxlIHBpY2tlci5cbiAgICpcbiAgICogQWNjZXB0YWJsZSBkZWZhdWx0IHZhbHVlczogYFwic29saWRcImAsIGBcImRhc2hlZFwiYCwgYFwiZG90dGVkXCJgLCBvciBgXCJkb3VibGVcImAuXG4gICAqL1xuICBMSU5FX1NUWUxFID0gJ0xJTkVfU1RZTEUnLFxuICAvKipcbiAgICogUmVuZGVycyBhIGJvcmRlciByYWRpdXMgc2VsZWN0b3IuXG4gICAqL1xuICBCT1JERVJfUkFESVVTID0gJ0JPUkRFUl9SQURJVVMnLFxuICAvKipcbiAgICogUmVuZGVycyBhbiBpbnRlcnZhbCBzZWxlY3Rvci5cbiAgICovXG4gIElOVEVSVkFMID0gJ0lOVEVSVkFMJyxcbiAgLyoqXG4gICAqIFJlbmRlcnMgYSByYWRpbyBzZWxlY3Qgd2l0aCBwcmUtZGVmaW5lZCB2YWx1ZXMuXG4gICAqL1xuICBTRUxFQ1RfUkFESU8gPSAnU0VMRUNUX1JBRElPJyxcbn1cblxuZXhwb3J0IHR5cGUgRFNJbnRlcmFjdGlvbkRhdGEgPSBEU0ludGVyYWN0aW9uRmlsdGVyRGF0YTtcblxuZXhwb3J0IGludGVyZmFjZSBEU0ludGVyYWN0aW9uRmlsdGVyRGF0YSB7XG4gIHN1cHBvcnRlZEFjdGlvbnM6IERTSW50ZXJhY3Rpb25UeXBlW107XG4gIGlkOiBJbnRlcmFjdGlvbklkO1xuICB2YWx1ZTogRFNJbnRlcmFjdGlvbkZpbHRlclZhbHVlO1xufVxuXG5leHBvcnQgZW51bSBEU0ludGVyYWN0aW9uVHlwZSB7XG4gIEZJTFRFUiA9ICdGSUxURVInLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERTSW50ZXJhY3Rpb25GaWx0ZXJWYWx1ZSB7XG4gIHR5cGU6IERTSW50ZXJhY3Rpb25UeXBlO1xuICBkYXRhOiBJbnRlcmFjdGlvbkRhdGE7XG59XG5cbi8vIEFsaWFzZXNcbmV4cG9ydCB0eXBlIEZpZWxkSWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBDb25maWdEYXRhSWQgPSBzdHJpbmc7XG5leHBvcnQgdHlwZSBDb25maWdTdHlsZUlkID0gc3RyaW5nO1xuZXhwb3J0IHR5cGUgQ29uZmlnRGF0YUVsZW1lbnRJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIENvbmZpZ1N0eWxlRWxlbWVudElkID0gc3RyaW5nO1xuXG4vLyBDdXN0b20gdHlwZXMgZm9yIExpYnJhcnlcbmV4cG9ydCBpbnRlcmZhY2UgUGFyc2VkSW1hZ2Uge1xuICBvcmlnaW5hbFVybDogc3RyaW5nO1xuICBwcm94aWVkVXJsPzogc3RyaW5nO1xuICBhbHRUZXh0Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkc0J5SWQge1xuICAvLyBBbiBpbmRleGVkIFR5cGUgY2Fubm90IGJlIGEgdHlwZSBhbGlhcyA6KFxuICBbZmllbGRJZDogc3RyaW5nXTogRmllbGQ7XG59XG5cbmV4cG9ydCB0eXBlIFBhcnNlZFJvdyA9IFBhcnNlZFJvd1ZhbHVlW107XG5cbmV4cG9ydCBpbnRlcmZhY2UgUm93QnlDb25maWdJZCB7XG4gIFtjb25maWdJZDogc3RyaW5nXTogUGFyc2VkUm93O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlc0J5VHlwZSB7XG4gIFtUYWJsZVR5cGUuREVGQVVMVF06IFJvd0J5Q29uZmlnSWRbXTtcbiAgW1RhYmxlVHlwZS5DT01QQVJJU09OXTogUm93QnlDb25maWdJZFtdO1xuICBbVGFibGVUeXBlLlNVTU1BUlldOiBSb3dCeUNvbmZpZ0lkW107XG59XG5cbmV4cG9ydCB0eXBlIFBhcnNlZFJvd1ZhbHVlID0gc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IFBhcnNlZEltYWdlO1xuXG5leHBvcnQgdHlwZSBSb3dIZWFkaW5nID0gRmllbGQgJiB7Y29uZmlnSWQ6IHN0cmluZ307XG5leHBvcnQgdHlwZSBSb3dFbnRyeSA9IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW47XG5leHBvcnQgdHlwZSBSb3cgPSBSb3dFbnRyeVtdO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpZWxkc0J5Q29uZmlnSWQge1xuICBbY29uZmlnSWQ6IHN0cmluZ106IEZpZWxkW107XG59XG5cbmV4cG9ydCB0eXBlIFN0eWxlVGhlbWUgPSBhbnk7XG5leHBvcnQgdHlwZSBTdHlsZUVudHJ5ID0gYW55O1xuZXhwb3J0IHR5cGUgU3R5bGVWYWx1ZSA9IFN0eWxlVGhlbWUgfCBTdHlsZUVudHJ5O1xuXG5leHBvcnQgaW50ZXJmYWNlIFN0eWxlQnlJZCB7XG4gIFtzdHlsZUlkOiBzdHJpbmddOiBTdHlsZVZhbHVlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlRGF0YSB7XG4gIGhlYWRlcnM6IFJvd0hlYWRpbmdbXTtcbiAgcm93czogUm93W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGFibGVzIHtcbiAgW1RhYmxlVHlwZS5ERUZBVUxUXTogVGFibGVEYXRhO1xuICBbVGFibGVUeXBlLkNPTVBBUklTT05dPzogVGFibGVEYXRhO1xuICBbVGFibGVUeXBlLlNVTU1BUlldPzogVGFibGVEYXRhO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRhYmxlRm9ybWF0IHtcbiAgZmllbGRzOiBGaWVsZHNCeUNvbmZpZ0lkO1xuICBzdHlsZTogU3R5bGVCeUlkO1xuICB0YWJsZXM6IFRhYmxlcztcbiAgZGF0ZVJhbmdlczogRGF0ZVJhbmdlc0J5SWQ7XG4gIHRoZW1lOiBUaGVtZVN0eWxlO1xuICBpbnRlcmFjdGlvbnM6IEludGVyYWN0aW9uc0J5SWQ7XG4gIGNvbG9yTWFwOiBDb2xvcnNCeURpbWVuc2lvbjtcbn1cblxuZXhwb3J0IHR5cGUgVGFibGVUcmFuc2Zvcm0gPSAobWVzc2FnZTogTWVzc2FnZSkgPT4gVGFibGVGb3JtYXQ7XG5cbmV4cG9ydCB0eXBlIENvbmZpZ0lkID0gc3RyaW5nO1xuXG5leHBvcnQgaW50ZXJmYWNlIFN1YnNjcmlwdGlvbnNPcHRpb25zPFQ+IHtcbiAgdHJhbnNmb3JtOiAobWVzc2FnZTogTWVzc2FnZSkgPT4gVDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RSb3cge1xuICBbY29uZmlnSWQ6IHN0cmluZ106IFJvd0VudHJ5W107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT2JqZWN0VGFibGVzIHtcbiAgW1RhYmxlVHlwZS5ERUZBVUxUXTogT2JqZWN0Um93W107XG4gIFtUYWJsZVR5cGUuQ09NUEFSSVNPTl0/OiBPYmplY3RSb3dbXTtcbiAgW1RhYmxlVHlwZS5TVU1NQVJZXT86IE9iamVjdFJvd1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIERhdGVSYW5nZXNCeUlkIHtcbiAgW0RhdGVSYW5nZVR5cGUuREVGQVVMVF0/OiB7XG4gICAgc3RhcnQ6IHN0cmluZztcbiAgICBlbmQ6IHN0cmluZztcbiAgfTtcbiAgW0RhdGVSYW5nZVR5cGUuQ09NUEFSSVNPTl0/OiB7XG4gICAgc3RhcnQ6IHN0cmluZztcbiAgICBlbmQ6IHN0cmluZztcbiAgfTtcbn1cblxuLyogQSBtYXAgb2YgZGltZW5zaW9uIHZhbHVlcyB0byBoZXggc3RyaW5nIGNvbG9ycyAqL1xuZXhwb3J0IGludGVyZmFjZSBDb2xvcnNCeURpbWVuc2lvbiB7XG4gIFtkaW1lbnNpb246IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBPYmplY3RGb3JtYXQge1xuICBmaWVsZHM6IEZpZWxkc0J5Q29uZmlnSWQ7XG4gIHN0eWxlOiBTdHlsZUJ5SWQ7XG4gIHRhYmxlczogT2JqZWN0VGFibGVzO1xuICBkYXRlUmFuZ2VzOiBEYXRlUmFuZ2VzQnlJZDtcbiAgdGhlbWU6IFRoZW1lU3R5bGU7XG4gIGludGVyYWN0aW9uczogSW50ZXJhY3Rpb25zQnlJZDtcbiAgY29sb3JNYXA6IENvbG9yc0J5RGltZW5zaW9uO1xufVxuXG5leHBvcnQgdHlwZSBDb21wb25lbnRJZCA9IHN0cmluZztcblxuZXhwb3J0IHR5cGUgT2JqZWN0VHJhbnNmb3JtID0gKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IE9iamVjdEZvcm1hdDtcblxuZXhwb3J0IGVudW0gVG9EU01lc3NhZ2VUeXBlIHtcbiAgVklaX1JFQURZID0gJ3ZpelJlYWR5JyxcbiAgSU5URVJBQ1RJT04gPSAndml6QWN0aW9uJyxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBWaXpSZWFkeU1lc3NhZ2Uge1xuICB0eXBlOiBUb0RTTWVzc2FnZVR5cGUuVklaX1JFQURZO1xuICBjb21wb25lbnRJZDogQ29tcG9uZW50SWQ7XG59XG5cbi8vIEludGVyYWN0aW9uIFR5cGVzXG5leHBvcnQgaW50ZXJmYWNlIEludGVyYWN0aW9uTWVzc2FnZSB7XG4gIHR5cGU6IFRvRFNNZXNzYWdlVHlwZS5JTlRFUkFDVElPTjtcbiAgaWQ6IEludGVyYWN0aW9uSWQ7XG4gIGRhdGE6IEludGVyYWN0aW9uRGF0YSB8IHVuZGVmaW5lZDtcbiAgY29tcG9uZW50SWQ6IENvbXBvbmVudElkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlbmRJbnRlcmFjdGlvbiB7XG4gIC8vIFRPRE8gLSByZW1vdmUgdGhpcyBvbmNlIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmUgaW50ZXJhY3Rpb24gdHlwZS5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lIGNhbGxhYmxlLXR5cGVzXG4gIChcbiAgICBhY3Rpb25JZDogSW50ZXJhY3Rpb25JZCxcbiAgICBpbnRlcmFjdGlvbjogSW50ZXJhY3Rpb25UeXBlLkZJTFRFUixcbiAgICBkYXRhOiBGaWx0ZXJJbnRlcmFjdGlvbkRhdGEgfCB1bmRlZmluZWRcbiAgKTogdm9pZDtcbiAgLy8gVE9ETyAtIFdoZW4gdGhlcmUgYXJlIG1vcmUgSW50ZXJhY3Rpb24gdHlwZXMsIHRoZSBuZXcgb25lcyBzaG91bGQgYmUgYWRkZWQgaGVyZSB3aXRoIHRoZWlyIG93biBzaWduYXR1cmUuXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2xlYXJJbnRlcmFjdGlvbiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBjYWxsYWJsZS10eXBlc1xuICAoXG4gICAgYWN0aW9uSWQ6IEludGVyYWN0aW9uSWQsXG4gICAgaW50ZXJhY3Rpb246IEludGVyYWN0aW9uVHlwZS5GSUxURVIsXG4gICAgZGF0YTogdW5kZWZpbmVkXG4gICk6IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIENvbmNlcHRJZCA9IHN0cmluZztcbmV4cG9ydCB0eXBlIEZpbHRlclBhcmFtVmFsdWUgPSBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbHRlckludGVyYWN0aW9uRGF0YSB7XG4gIGNvbmNlcHRzOiBDb25jZXB0SWRbXTtcbiAgdmFsdWVzOiBGaWx0ZXJQYXJhbVZhbHVlW11bXTtcbn1cblxuZXhwb3J0IGVudW0gSW50ZXJhY3Rpb25UeXBlIHtcbiAgRklMVEVSID0gJ0ZJTFRFUicsXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3Rpb25WYWx1ZSB7XG4gIHR5cGU6IEludGVyYWN0aW9uVHlwZTtcbiAgZGF0YTogSW50ZXJhY3Rpb25EYXRhO1xufVxuXG5leHBvcnQgdHlwZSBJbnRlcmFjdGlvbkRhdGEgPSBGaWx0ZXJJbnRlcmFjdGlvbkRhdGE7XG5cbmV4cG9ydCB0eXBlIEludGVyYWN0aW9uSWQgPSBzdHJpbmc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJhY3Rpb24ge1xuICBzdXBwb3J0ZWRBY3Rpb25zOiBJbnRlcmFjdGlvblR5cGVbXTtcbiAgdmFsdWU6IEludGVyYWN0aW9uVmFsdWUgfCB7fTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcmFjdGlvbnNCeUlkIHtcbiAgW2ludGVyYWN0aW9uSWQ6IHN0cmluZ106IEludGVyYWN0aW9uO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==