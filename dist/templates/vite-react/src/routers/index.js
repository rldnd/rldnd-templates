"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const MainPage_1 = __importDefault(require("@/pages/MainPage"));
const router = (<react_router_dom_1.Route>
    <react_router_dom_1.Route index element={<MainPage_1.default />}/>
  </react_router_dom_1.Route>);
const rootRouter = (0, react_router_dom_1.createBrowserRouter)((0, react_router_dom_1.createRoutesFromElements)(router));
exports.default = rootRouter;
//# sourceMappingURL=index.js.map