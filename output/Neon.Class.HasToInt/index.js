// Generated by purs version 0.11.7
"use strict";
var Data_Enum = require("../Data.Enum");
var Data_Ordering = require("../Data.Ordering");
var Neon_Data = require("../Neon.Data");
var HasToInt = function (toInt) {
    this.toInt = toInt;
};
var toInt = function (dict) {
    return dict.toInt;
};
var orderingHasToInt = new HasToInt(function (x) {
    if (x instanceof Data_Ordering.LT) {
        return 0;
    };
    if (x instanceof Data_Ordering.EQ) {
        return 1;
    };
    if (x instanceof Data_Ordering.GT) {
        return 2;
    };
    throw new Error("Failed pattern match at Neon.Class.HasToInt line 25, column 13 - line 28, column 16: " + [ x.constructor.name ]);
});
var intHasToInt = new HasToInt(function (x) {
    return x;
});
var charHasToInt = new HasToInt(function (x) {
    return Data_Enum.fromEnum(Data_Enum.boundedEnumChar)(x);
});
var booleanHasToInt = new HasToInt(function (x) {
    return Data_Enum.fromEnum(Data_Enum.boundedEnumBoolean)(x);
});
module.exports = {
    toInt: toInt,
    HasToInt: HasToInt,
    booleanHasToInt: booleanHasToInt,
    charHasToInt: charHasToInt,
    intHasToInt: intHasToInt,
    orderingHasToInt: orderingHasToInt
};
