"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useEffectOnce_1 = __importDefault(require("./useEffectOnce"));
const useUnmount = (fn) => {
    const fnRef = (0, react_1.useRef)(fn);
    fnRef.current = fn;
    (0, useEffectOnce_1.default)(() => () => fnRef.current());
};
exports.default = useUnmount;
//# sourceMappingURL=useUnmount.js.map