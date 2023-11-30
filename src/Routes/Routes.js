"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = void 0;
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const SearchFlight_1 = __importDefault(require("../SearchFlight/SearchFlight"));
const Routes = () => {
    const routes = [
        {
            path: '/',
            element: react_1.default.createElement(SearchFlight_1.default, null),
            children: [
                {
                    path: '/searchFlight',
                    element: react_1.default.createElement(SearchFlight_1.default, null),
                }
            ]
        }
    ];
    const router = (0, react_router_dom_1.createBrowserRouter)(routes);
    return react_1.default.createElement(react_router_dom_1.RouterProvider, { router: router });
};
exports.Routes = Routes;
