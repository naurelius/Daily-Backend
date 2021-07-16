"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checkers = void 0;
var validator_1 = __importDefault(require("validator"));
exports.Checkers = (function () {
    function Checkers() {
        this._cache = {};
        this.Checkers = Checkers;
    }
    return Checkers;
}());
exports.Checkers.prototype.checkIfValid = function (str, others) {
    if (validator_1.default.isDate(str)) {
        this._cache.value = str;
        this._cache.type = "Date";
        return this._cache;
    }
    if (validator_1.default.isIn(str, others)) {
        this._cache.value = str;
        this._cache.message = str + " in array " + others;
        return this._cache;
    }
};
