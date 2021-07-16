import validator from 'validator';

export var Checkers = (function () {

    function Checkers() {
        this._cache = {};
        this.Checkers = Checkers;
    }
    return Checkers
}());

Checkers.prototype.checkIfValid = function(str: string, others?:any) {
    if(validator.isDate(str)) {
        this._cache.value = str;
        this._cache.type = "Date";
        return this._cache
    }
    if(validator.isIn(str, others)) {
        this._cache.value = str;
        this._cache.message = `${str} in array ${others}`;
        return this._cache;
    }
}
    

