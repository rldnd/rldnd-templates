"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const react_router_dom_1 = require("react-router-dom");
const recoil_1 = require("recoil");
const react_query_1 = require("react-query");
const routers_1 = __importDefault(require("@/routers"));
require("./styles/global.scss");
const queryClient = new react_query_1.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            retry: 1,
        },
    },
});
client_1.default.createRoot(document.getElementById('root')).render(<react_1.default.StrictMode>
    <recoil_1.RecoilRoot>
      <react_query_1.QueryClientProvider client={queryClient}>
        <react_router_dom_1.RouterProvider router={routers_1.default}/>
      </react_query_1.QueryClientProvider>
    </recoil_1.RecoilRoot>
  </react_1.default.StrictMode>);
//# sourceMappingURL=index.js.map