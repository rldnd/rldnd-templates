"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateID = void 0;
let idCounter = 0;
const generateID = (prefix = 'blog-id-') => {
    // eslint-disable-next-line no-return-assign
    return `${prefix}${(idCounter += 1)}`;
};
exports.generateID = generateID;
//# sourceMappingURL=helper.js.map