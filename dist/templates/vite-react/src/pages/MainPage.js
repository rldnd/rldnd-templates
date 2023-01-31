"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const mainPage_module_scss_1 = __importDefault(require("./mainPage.module.scss"));
const MainPage = () => {
    return (<main className={mainPage_module_scss_1.default.wrapper}>
      <h1>@rldnd</h1>
      <h2>vite-react-typescript</h2>
    </main>);
};
exports.default = MainPage;
//# sourceMappingURL=MainPage.js.map