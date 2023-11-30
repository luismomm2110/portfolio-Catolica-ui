"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReusableInput = void 0;
const react_1 = __importDefault(require("react"));
require("./styles.css");
const ReusableInput = (props) => {
    var _a;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("label", { htmlFor: props.id },
            props.label,
            ":"),
        react_1.default.createElement("input", { className: props.error ? 'error' : '', id: props.id, type: props.type, min: props.min, placeholder: props.placeholder, name: props.name, value: props.value || '', onChange: props.handleChange, disabled: (_a = props.disabled) !== null && _a !== void 0 ? _a : false }),
        react_1.default.createElement("div", { className: "error" }, props.error && react_1.default.createElement("span", null, props.error))));
};
exports.ReusableInput = ReusableInput;
