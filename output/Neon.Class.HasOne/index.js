// Generated by purs version 0.11.7
"use strict";
var Data_Semiring = require("../Data.Semiring");
var Prelude = require("../Prelude");
var HasOne = function (one) {
    this.one = one;
};
var one = function (dict) {
    return dict.one;
};
var numberHasOne = new HasOne(1);
var intHasOne = new HasOne(1);
module.exports = {
    one: one,
    HasOne: HasOne,
    intHasOne: intHasOne,
    numberHasOne: numberHasOne
};