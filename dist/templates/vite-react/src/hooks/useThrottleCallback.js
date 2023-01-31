"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const lodash_es_1 = require("lodash-es");
const useThrottleCallback = (cb, delay = 300) => {
    const cbRef = (0, react_1.useRef)(cb);
    cbRef.current = cb;
    return (0, react_1.useMemo)(() => (0, lodash_es_1.throttle)((...args) => cbRef.current(...args), delay, {
        leading: true,
        trailing: false,
    }), [delay]);
};
exports.default = useThrottleCallback;
//# sourceMappingURL=useThrottleCallback.js.map