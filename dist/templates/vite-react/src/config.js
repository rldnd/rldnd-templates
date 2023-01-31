"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PREFIX = 'VITE_';
const getConfig = (name) => {
    const configName = `${PREFIX}${name}`;
    if (configName in process.env) {
        return process.env[configName];
    }
    else {
        throw Error('잘못된 CONFIG 입니다', { cause: `NOT FOUND ${name} CONFIG` });
    }
};
exports.default = {
    ENV: getConfig('ENV'),
    API_URL: getConfig('API_URL'),
};
//# sourceMappingURL=config.js.map