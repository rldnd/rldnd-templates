"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAxiosError = exports.baseURL = void 0;
const config_1 = __importDefault(require("@/config"));
const axios_1 = __importDefault(require("axios"));
exports.baseURL = config_1.default.API_URL;
const apiClient = axios_1.default.create({
    baseURL: exports.baseURL,
    timeout: 5000,
});
apiClient.interceptors.request.use((config) => {
    return config;
});
apiClient.interceptors.response.use((response) => {
    return response;
}, (error) => {
    return Promise.reject(error);
});
exports.default = apiClient;
const isAxiosError = (err) => {
    return axios_1.default.isAxiosError(err);
};
exports.isAxiosError = isAxiosError;
__exportStar(require("./types"), exports);
//# sourceMappingURL=apiClient.js.map