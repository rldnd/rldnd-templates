"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useEffectOnce = (effect) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, react_1.useEffect)(effect, []);
};
exports.default = useEffectOnce;
//# sourceMappingURL=useEffectOnce.js.map