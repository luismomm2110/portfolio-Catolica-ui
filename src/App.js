"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Routes_1 = require("./Routes/Routes");
const App = () => {
    return (react_1.default.createElement(Routes_1.Routes, null));
};
exports.default = App;
