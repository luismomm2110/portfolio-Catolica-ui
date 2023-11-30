"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReusableButton = void 0;
const react_1 = __importDefault(require("react"));
require("./ReusableButton.css");
const ReusableButton = ({ description, label, callback, disabled }) => react_1.default.createElement("button", { type: "submit", "aria-label": label !== null && label !== void 0 ? label : description, onClick: callback, disabled: disabled !== null && disabled !== void 0 ? disabled : false }, description);
exports.ReusableButton = ReusableButton;
