"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const SelectedAirportsList = ({ selectedAirports, handleRemoveSelectedAirport }) => (react_1.default.createElement(react_1.default.Fragment, null,
    react_1.default.createElement("ul", { className: 'selected-airports-list' }, selectedAirports.map((airport) => (react_1.default.createElement("li", { key: airport.code },
        react_1.default.createElement("span", null, airport.name),
        react_1.default.createElement("button", { name: 'Remover', onClick: () => handleRemoveSelectedAirport(airport) }, "X")))))));
exports.default = SelectedAirportsList;
