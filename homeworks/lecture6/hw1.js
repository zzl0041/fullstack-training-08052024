"use strict";
// 1. why there would be error in the following code? and how to fix it?
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
Object.defineProperty(exports, "__esModule", { value: true });
// function makeCustomer<T extends User>(u: T): T {
//   return {
//     id: u.id,
//     type: "customer",
//   };
// }
// the spread of u guarantees the return type is T because the input is T, then override type value
function makeCustomer(u) {
    return __assign(__assign({}, u), { type: "customer" });
}
function f(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        return "".concat(a, " : ").concat(b);
    }
    else if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return null;
    }
}
console.log(f("a", 1));
