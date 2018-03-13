// Generated by purs version 0.11.7
"use strict";
var Control_Bind = require("../Control.Bind");
var Control_Category = require("../Control.Category");
var Control_Semigroupoid = require("../Control.Semigroupoid");
var Data_Array = require("../Data.Array");
var Data_Either = require("../Data.Either");
var Data_Foldable = require("../Data.Foldable");
var Data_Function = require("../Data.Function");
var Data_Functor = require("../Data.Functor");
var Data_HeytingAlgebra = require("../Data.HeytingAlgebra");
var Data_List = require("../Data.List");
var Data_List_Types = require("../Data.List.Types");
var Data_Map = require("../Data.Map");
var Data_Maybe = require("../Data.Maybe");
var Data_Monoid = require("../Data.Monoid");
var Data_Semigroup = require("../Data.Semigroup");
var Data_Tuple = require("../Data.Tuple");
var Prelude = require("../Prelude");
var Filterable = function (Functor0, filter, filterMap, partition, partitionMap) {
    this.Functor0 = Functor0;
    this.filter = filter;
    this.filterMap = filterMap;
    this.partition = partition;
    this.partitionMap = partitionMap;
};
var partitionMap = function (dict) {
    return dict.partitionMap;
};
var partitioned = function (dictFilterable) {
    return partitionMap(dictFilterable)(Control_Category.id(Control_Category.categoryFn));
};
var partition = function (dict) {
    return dict.partition;
};
var maybeBool = function (p) {
    return function (x) {
        var $33 = p(x);
        if ($33) {
            return new Data_Maybe.Just(x);
        };
        return Data_Maybe.Nothing.value;
    };
};
var filterableList = new Filterable(function () {
    return Data_List_Types.functorList;
}, Data_List.filter, function (p) {
    return Data_List.mapMaybe(p);
}, function (p) {
    return function (xs) {
        var select = function (x) {
            return function (v) {
                var $36 = p(x);
                if ($36) {
                    return {
                        no: v.no,
                        yes: new Data_List_Types.Cons(x, v.yes)
                    };
                };
                return {
                    no: new Data_List_Types.Cons(x, v.no),
                    yes: v.yes
                };
            };
        };
        return Data_Foldable.foldr(Data_List_Types.foldableList)(select)({
            no: Data_List_Types.Nil.value,
            yes: Data_List_Types.Nil.value
        })(xs);
    };
}, function (p) {
    return function (xs) {
        var select = function (x) {
            return function (v) {
                var v1 = p(x);
                if (v1 instanceof Data_Either.Left) {
                    return {
                        left: new Data_List_Types.Cons(v1.value0, v.left),
                        right: v.right
                    };
                };
                if (v1 instanceof Data_Either.Right) {
                    return {
                        left: v.left,
                        right: new Data_List_Types.Cons(v1.value0, v.right)
                    };
                };
                throw new Error("Failed pattern match at Data.Filterable line 173, column 36 - line 175, column 83: " + [ v1.constructor.name ]);
            };
        };
        return Data_Foldable.foldr(Data_List_Types.foldableList)(select)({
            left: Data_List_Types.Nil.value,
            right: Data_List_Types.Nil.value
        })(xs);
    };
});
var filterableArray = new Filterable(function () {
    return Data_Functor.functorArray;
}, Data_Array.filter, Data_Array.mapMaybe, Data_Array.partition, function (p) {
    var go = function (acc) {
        return function (x) {
            var v = p(x);
            if (v instanceof Data_Either.Left) {
                var $47 = {};
                for (var $48 in acc) {
                    if ({}.hasOwnProperty.call(acc, $48)) {
                        $47[$48] = acc[$48];
                    };
                };
                $47.left = Data_Semigroup.append(Data_Semigroup.semigroupArray)(acc.left)([ v.value0 ]);
                return $47;
            };
            if (v instanceof Data_Either.Right) {
                var $51 = {};
                for (var $52 in acc) {
                    if ({}.hasOwnProperty.call(acc, $52)) {
                        $51[$52] = acc[$52];
                    };
                };
                $51.right = Data_Semigroup.append(Data_Semigroup.semigroupArray)(acc.right)([ v.value0 ]);
                return $51;
            };
            throw new Error("Failed pattern match at Data.Filterable line 132, column 16 - line 134, column 50: " + [ v.constructor.name ]);
        };
    };
    return Data_Foldable.foldl(Data_Foldable.foldableArray)(go)({
        left: [  ],
        right: [  ]
    });
});
var filterMap = function (dict) {
    return dict.filterMap;
};
var filtered = function (dictFilterable) {
    return filterMap(dictFilterable)(Control_Category.id(Control_Category.categoryFn));
};
var partitionDefaultFilterMap = function (dictFilterable) {
    return function (p) {
        return function (xs) {
            return {
                yes: filterMap(dictFilterable)(maybeBool(p))(xs),
                no: filterMap(dictFilterable)(maybeBool(Data_HeytingAlgebra.not(Data_HeytingAlgebra.heytingAlgebraFunction(Data_HeytingAlgebra.heytingAlgebraBoolean))(p)))(xs)
            };
        };
    };
};
var filterDefaultPartition = function (dictFilterable) {
    return function (p) {
        return function (xs) {
            return (partition(dictFilterable)(p)(xs)).yes;
        };
    };
};
var filterDefault = function (dictFilterable) {
    return function ($88) {
        return filterMap(dictFilterable)(maybeBool($88));
    };
};
var filter = function (dict) {
    return dict.filter;
};
var partitionDefaultFilter = function (dictFilterable) {
    return function (p) {
        return function (xs) {
            return {
                yes: filter(dictFilterable)(p)(xs),
                no: filter(dictFilterable)(Data_HeytingAlgebra.not(Data_HeytingAlgebra.heytingAlgebraFunction(Data_HeytingAlgebra.heytingAlgebraBoolean))(p))(xs)
            };
        };
    };
};
var eitherBool = function (p) {
    return function (x) {
        var $55 = p(x);
        if ($55) {
            return new Data_Either.Right(x);
        };
        return new Data_Either.Left(x);
    };
};
var filterDefaultPartitionMap = function (dictFilterable) {
    return function (p) {
        return function (xs) {
            return (partitionMap(dictFilterable)(eitherBool(p))(xs)).right;
        };
    };
};
var partitionDefault = function (dictFilterable) {
    return function (p) {
        return function (xs) {
            var o = partitionMap(dictFilterable)(eitherBool(p))(xs);
            return {
                no: o.left,
                yes: o.right
            };
        };
    };
};
var filterableEither = function (dictMonoid) {
    return new Filterable(function () {
        return Data_Either.functorEither;
    }, function (p) {
        return filterDefault(filterableEither(dictMonoid))(p);
    }, function (p) {
        return function (v) {
            if (v instanceof Data_Either.Left) {
                return new Data_Either.Left(v.value0);
            };
            if (v instanceof Data_Either.Right) {
                var v1 = p(v.value0);
                if (v1 instanceof Data_Maybe.Nothing) {
                    return new Data_Either.Left(Data_Monoid.mempty(dictMonoid));
                };
                if (v1 instanceof Data_Maybe.Just) {
                    return new Data_Either.Right(v1.value0);
                };
                throw new Error("Failed pattern match at Data.Filterable line 163, column 27 - line 165, column 22: " + [ v1.constructor.name ]);
            };
            throw new Error("Failed pattern match at Data.Filterable line 154, column 1 - line 154, column 63: " + [ p.constructor.name, v.constructor.name ]);
        };
    }, function (p) {
        return partitionDefault(filterableEither(dictMonoid))(p);
    }, function (p) {
        return function (v) {
            if (v instanceof Data_Either.Left) {
                return {
                    left: new Data_Either.Left(v.value0),
                    right: new Data_Either.Left(v.value0)
                };
            };
            if (v instanceof Data_Either.Right) {
                var v1 = p(v.value0);
                if (v1 instanceof Data_Either.Left) {
                    return {
                        left: new Data_Either.Right(v1.value0),
                        right: new Data_Either.Left(Data_Monoid.mempty(dictMonoid))
                    };
                };
                if (v1 instanceof Data_Either.Right) {
                    return {
                        left: new Data_Either.Left(Data_Monoid.mempty(dictMonoid)),
                        right: new Data_Either.Right(v1.value0)
                    };
                };
                throw new Error("Failed pattern match at Data.Filterable line 156, column 30 - line 158, column 53: " + [ v1.constructor.name ]);
            };
            throw new Error("Failed pattern match at Data.Filterable line 154, column 1 - line 154, column 63: " + [ p.constructor.name, v.constructor.name ]);
        };
    });
};
var filterableMap = function (dictOrd) {
    return new Filterable(function () {
        return Data_Map.functorMap;
    }, function (p) {
        return filterDefault(filterableMap(dictOrd))(p);
    }, function (p) {
        return function (xs) {
            var toList = Data_Map.toUnfoldable(Data_List_Types.unfoldableList);
            var select = function (v) {
                return function (m) {
                    return Data_Map.alter(dictOrd)(Data_Function["const"](p(v.value1)))(v.value0)(m);
                };
            };
            return Data_Foldable.foldr(Data_List_Types.foldableList)(select)(Data_Map.empty)(toList(xs));
        };
    }, function (p) {
        return partitionDefault(filterableMap(dictOrd))(p);
    }, function (p) {
        return function (xs) {
            var toList = Data_Map.toUnfoldable(Data_List_Types.unfoldableList);
            var select = function (v) {
                return function (v1) {
                    var v2 = p(v.value1);
                    if (v2 instanceof Data_Either.Left) {
                        return {
                            left: Data_Map.insert(dictOrd)(v.value0)(v2.value0)(v1.left),
                            right: v1.right
                        };
                    };
                    if (v2 instanceof Data_Either.Right) {
                        return {
                            left: v1.left,
                            right: Data_Map.insert(dictOrd)(v.value0)(v2.value0)(v1.right)
                        };
                    };
                    throw new Error("Failed pattern match at Data.Filterable line 198, column 44 - line 200, column 57: " + [ v2.constructor.name ]);
                };
            };
            return Data_Foldable.foldr(Data_List_Types.foldableList)(select)({
                left: Data_Map.empty,
                right: Data_Map.empty
            })(toList(xs));
        };
    });
};
var filterableMaybe = new Filterable(function () {
    return Data_Maybe.functorMaybe;
}, function (p) {
    return filterDefault(filterableMaybe)(p);
}, Control_Bind.bindFlipped(Data_Maybe.bindMaybe), function (p) {
    return partitionDefault(filterableMaybe)(p);
}, function (p) {
    return function (v) {
        if (v instanceof Data_Maybe.Nothing) {
            return {
                left: Data_Maybe.Nothing.value,
                right: Data_Maybe.Nothing.value
            };
        };
        if (v instanceof Data_Maybe.Just) {
            var v1 = p(v.value0);
            if (v1 instanceof Data_Either.Left) {
                return {
                    left: new Data_Maybe.Just(v1.value0),
                    right: Data_Maybe.Nothing.value
                };
            };
            if (v1 instanceof Data_Either.Right) {
                return {
                    left: Data_Maybe.Nothing.value,
                    right: new Data_Maybe.Just(v1.value0)
                };
            };
            throw new Error("Failed pattern match at Data.Filterable line 144, column 29 - line 146, column 48: " + [ v1.constructor.name ]);
        };
        throw new Error("Failed pattern match at Data.Filterable line 142, column 1 - line 142, column 45: " + [ p.constructor.name, v.constructor.name ]);
    };
});
var cleared = function (dictFilterable) {
    return filterMap(dictFilterable)(Data_Function["const"](Data_Maybe.Nothing.value));
};
module.exports = {
    Filterable: Filterable,
    partitionMap: partitionMap,
    partition: partition,
    filterMap: filterMap,
    filter: filter,
    eitherBool: eitherBool,
    partitionDefault: partitionDefault,
    partitionDefaultFilter: partitionDefaultFilter,
    partitionDefaultFilterMap: partitionDefaultFilterMap,
    maybeBool: maybeBool,
    filterDefault: filterDefault,
    filterDefaultPartition: filterDefaultPartition,
    filterDefaultPartitionMap: filterDefaultPartitionMap,
    partitioned: partitioned,
    filtered: filtered,
    cleared: cleared,
    filterableArray: filterableArray,
    filterableMaybe: filterableMaybe,
    filterableEither: filterableEither,
    filterableList: filterableList,
    filterableMap: filterableMap
};