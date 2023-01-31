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
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vite_1 = require("vite");
const plugin_react_1 = __importDefault(require("@vitejs/plugin-react"));
const vite_plugin_svgr_1 = __importDefault(require("vite-plugin-svgr"));
const path = __importStar(require("path"));
const vite_plugin_checker_1 = __importDefault(require("vite-plugin-checker"));
const vite_plugin_env_compatible_1 = __importDefault(require("vite-plugin-env-compatible"));
/** @type {import('vite').UserConfig} */
exports.default = (0, vite_1.defineConfig)({
    server: {
        port: 3000,
    },
    preview: {
        port: 3000,
    },
    resolve: {
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly',
            hashPrefix: 'prefix',
        },
        devSourcemap: true,
    },
    build: {
        outDir: 'build',
        emptyOutDir: true,
        reportCompressedSize: true,
        rollupOptions: {
            input: {
                main: '/index.html',
            },
            output: {
                manualChunks: {
                    react: ['react', 'react-dom'],
                },
                sourcemap: false,
            },
        },
    },
    publicDir: 'public',
    plugins: [
        (0, vite_plugin_svgr_1.default)(),
        (0, plugin_react_1.default)(),
        (0, vite_1.splitVendorChunkPlugin)(),
        (0, vite_plugin_checker_1.default)({
            typescript: true,
            eslint: { lintCommand: 'eslint --fix --ext .js,.jsx,.ts,.tsx ./src' },
            stylelint: { lintCommand: 'stylelint **/*.scss --fix' },
        }),
        (0, vite_plugin_env_compatible_1.default)({ prefix: 'VITE' }),
    ],
});
//# sourceMappingURL=vite.config.js.map