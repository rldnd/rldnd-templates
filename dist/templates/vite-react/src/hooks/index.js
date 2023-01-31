"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useThrottleCallback = exports.useI18n = exports.useUnmount = exports.useUpdateEffect = exports.useMount = exports.useEffectOnce = void 0;
// MEMO: life cycle hooks
var useEffectOnce_1 = require("./useEffectOnce");
Object.defineProperty(exports, "useEffectOnce", { enumerable: true, get: function () { return __importDefault(useEffectOnce_1).default; } });
var useMount_1 = require("./useMount");
Object.defineProperty(exports, "useMount", { enumerable: true, get: function () { return __importDefault(useMount_1).default; } });
var useUpdateEffect_1 = require("./useUpdateEffect");
Object.defineProperty(exports, "useUpdateEffect", { enumerable: true, get: function () { return __importDefault(useUpdateEffect_1).default; } });
var useUnmount_1 = require("./useUnmount");
Object.defineProperty(exports, "useUnmount", { enumerable: true, get: function () { return __importDefault(useUnmount_1).default; } });
var useI18n_1 = require("./useI18n");
Object.defineProperty(exports, "useI18n", { enumerable: true, get: function () { return __importDefault(useI18n_1).default; } });
var useThrottleCallback_1 = require("./useThrottleCallback");
Object.defineProperty(exports, "useThrottleCallback", { enumerable: true, get: function () { return __importDefault(useThrottleCallback_1).default; } });
//# sourceMappingURL=index.js.map