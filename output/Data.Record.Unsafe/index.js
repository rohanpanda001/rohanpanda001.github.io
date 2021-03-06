// Generated by purs version 0.11.7
"use strict";
var $foreign = require("./foreign");
var Data_Function_Uncurried = require("../Data.Function.Uncurried");
var unsafeSet = Data_Function_Uncurried.runFn3($foreign.unsafeSetFn);
var unsafeHas = Data_Function_Uncurried.runFn2($foreign.unsafeHasFn);
var unsafeGet = Data_Function_Uncurried.runFn2($foreign.unsafeGetFn);
var unsafeDelete = Data_Function_Uncurried.runFn2($foreign.unsafeDeleteFn);
module.exports = {
    unsafeGet: unsafeGet,
    unsafeSet: unsafeSet,
    unsafeDelete: unsafeDelete,
    unsafeHas: unsafeHas,
    unsafeGetFn: $foreign.unsafeGetFn,
    unsafeSetFn: $foreign.unsafeSetFn,
    unsafeDeleteFn: $foreign.unsafeDeleteFn,
    unsafeHasFn: $foreign.unsafeHasFn
};
