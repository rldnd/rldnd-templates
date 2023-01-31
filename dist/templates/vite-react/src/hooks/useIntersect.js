"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useIntersect = (onIntersect, option) => {
    const [ref, setRef] = (0, react_1.useState)(null);
    const checkIntersect = (0, react_1.useCallback)(([entry]) => __awaiter(void 0, void 0, void 0, function* () {
        if (!entry.isIntersecting) {
            return;
        }
        yield onIntersect();
    }), [onIntersect]);
    (0, react_1.useEffect)(() => {
        if (!ref) {
            return () => { };
        }
        const observer = new IntersectionObserver(checkIntersect, option);
        observer.observe(ref);
        return () => observer && observer.disconnect();
    }, [ref, option, checkIntersect]);
    return [ref, setRef];
};
exports.default = useIntersect;
//# sourceMappingURL=useIntersect.js.map