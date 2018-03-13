// Generated by purs version 0.11.7
"use strict";
var $foreign = require("./foreign");
var Control_Monad_Eff = require("../Control.Monad.Eff");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var DOM = require("../DOM");
var DOM_Node_Types = require("../DOM.Node.Types");
var Data_Functor = require("../Data.Functor");
var Data_Maybe = require("../Data.Maybe");
var Data_Nullable = require("../Data.Nullable");
var Prelude = require("../Prelude");
var MutationRecordAttributes = (function () {
    function MutationRecordAttributes() {

    };
    MutationRecordAttributes.value = new MutationRecordAttributes();
    return MutationRecordAttributes;
})();
var MutationRecordCharacterData = (function () {
    function MutationRecordCharacterData() {

    };
    MutationRecordCharacterData.value = new MutationRecordCharacterData();
    return MutationRecordCharacterData;
})();
var MutationRecordChildList = (function () {
    function MutationRecordChildList() {

    };
    MutationRecordChildList.value = new MutationRecordChildList();
    return MutationRecordChildList;
})();
var type_ = function (dictPartial) {
    var stringToType = function (v) {
        var __unused = function (dictPartial1) {
            return function ($dollar2) {
                return $dollar2;
            };
        };
        return __unused(dictPartial)((function () {
            if (v === "attributes") {
                return MutationRecordAttributes.value;
            };
            if (v === "characterData") {
                return MutationRecordCharacterData.value;
            };
            if (v === "childList") {
                return MutationRecordChildList.value;
            };
            throw new Error("Failed pattern match at DOM.Node.MutationRecord line 36, column 18 - line 39, column 43: " + [ v.constructor.name ]);
        })());
    };
    return function ($6) {
        return Data_Functor.map(Control_Monad_Eff.functorEff)(stringToType)($foreign.typeString($6));
    };
};
var previousSibling = function ($7) {
    return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)($foreign._previousSibling($7));
};
var oldValue = function ($8) {
    return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)($foreign._oldValue($8));
};
var nextSibling = function ($9) {
    return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)($foreign._nextSibling($9));
};
var attributeNamespace = function ($10) {
    return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)($foreign._attributeNamespace($10));
};
var attributeName = function ($11) {
    return Data_Functor.map(Control_Monad_Eff.functorEff)(Data_Nullable.toMaybe)($foreign._attributeName($11));
};
module.exports = {
    MutationRecordAttributes: MutationRecordAttributes,
    MutationRecordCharacterData: MutationRecordCharacterData,
    MutationRecordChildList: MutationRecordChildList,
    type_: type_,
    nextSibling: nextSibling,
    previousSibling: previousSibling,
    attributeName: attributeName,
    attributeNamespace: attributeNamespace,
    oldValue: oldValue,
    typeString: $foreign.typeString,
    target: $foreign.target,
    addedNodes: $foreign.addedNodes,
    removedNodes: $foreign.removedNodes
};