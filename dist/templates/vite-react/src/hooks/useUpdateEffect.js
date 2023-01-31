"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useFirstMountState_1 = require("./useFirstMountState");
const useUpdateEffect = (effect, deps) => {
    const isFirstMount = (0, useFirstMountState_1.useFirstMountState)();
    (0, react_1.useEffect)(() => {
        if (!isFirstMount) {
            return effect();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};
exports.default = useUpdateEffect;
//# sourceMappingURL=useUpdateEffect.js.map