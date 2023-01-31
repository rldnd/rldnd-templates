"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatDate = exports.dayjs = void 0;
const dayjs_1 = __importDefault(require("dayjs"));
exports.dayjs = dayjs_1.default;
require("dayjs/locale/ko");
dayjs_1.default.locale('ko');
const formatDate = (date, format) => {
    if (!date) {
        return '';
    }
    return (0, dayjs_1.default)(date).format(format !== null && format !== void 0 ? format : 'YYYY.MM.DD HH:mm');
};
exports.formatDate = formatDate;
//# sourceMappingURL=dateTime.js.map