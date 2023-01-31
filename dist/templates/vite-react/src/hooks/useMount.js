"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const useEffectOnce_1 = __importDefault(require("./useEffectOnce"));
const useMount = (fn) => {
    (0, useEffectOnce_1.default)(() => {
        fn();
    });
};
exports.default = useMount;
//# sourceMappingURL=useMount.js.map