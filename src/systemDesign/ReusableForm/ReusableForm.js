"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./ReusableForm.css");
const ReusableButton_1 = require("../Button/ReusableButton");
const ReusableInput_1 = require("../ReusableInput/ReusableInput");
const ReusableForm = ({ formTitle, fields, handleSubmit, handleChange, submitText, disabled }) => {
    const isDisabled = () => {
        const isThereAnError = fields.some((field) => field.error !== '');
        const isThereRequiredEmptyField = fields.some((field) => field.required && field.value === '');
        return isThereAnError || isThereRequiredEmptyField;
    };
    return (react_1.default.createElement("form", { className: 'reusableForm', onSubmit: handleSubmit },
        react_1.default.createElement("header", null,
            react_1.default.createElement("h2", null, formTitle)),
        fields.map((field) => (react_1.default.createElement("div", { key: field.id },
            react_1.default.createElement(ReusableInput_1.ReusableInput, { id: field.id, type: field.type, placeholder: field.placeholder, label: field.label, min: field.min, value: field.value, error: field.error, handleChange: handleChange, disabled: field.disabled })))),
        react_1.default.createElement(ReusableButton_1.ReusableButton, { description: submitText !== null && submitText !== void 0 ? submitText : 'Submit', label: submitText !== null && submitText !== void 0 ? submitText : 'Submit', disabled: disabled !== null && disabled !== void 0 ? disabled : isDisabled() })));
};
exports.default = ReusableForm;
