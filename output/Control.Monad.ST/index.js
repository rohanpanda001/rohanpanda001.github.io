// Generated by purs version 0.11.7
"use strict";
var $foreign = require("./foreign");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var pureST = function (st) {
    return Control_Monad_Eff.runPure($foreign.runST(st));
};
module.exports = {
    pureST: pureST,
    newSTRef: $foreign.newSTRef,
    readSTRef: $foreign.readSTRef,
    modifySTRef: $foreign.modifySTRef,
    writeSTRef: $foreign.writeSTRef,
    runST: $foreign.runST
};