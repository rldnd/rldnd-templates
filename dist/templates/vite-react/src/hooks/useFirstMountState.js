"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useFirstMountState = void 0;
const react_1 = require("react");
const useFirstMountState = () => {
    const isFirst = (0, react_1.useRef)(true);
    if (isFirst.current) {
        isFirst.current = false;
        return true;
    }
    return isFirst.current;
};
exports.useFirstMountState = useFirstMountState;
//# sourceMappingURL=useFirstMountState.js.map