"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const CheckBoxesFoundAirports = ({ airports, handleSelectingAirport, selectedAirports, isAirportLimitReached }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("ul", { className: 'checkbox-container' }, airports.map((airport) => (react_1.default.createElement("li", { key: airport.code },
            react_1.default.createElement("label", { htmlFor: airport.code }, `${airport.name}: ${airport.distance} km`),
            react_1.default.createElement("input", { type: "checkbox", id: airport.code, name: "airport", value: airport.name, onClick: () => handleSelectingAirport(airport), disabled: isAirportLimitReached && !selectedAirports.includes(airport), checked: selectedAirports.includes(airport) })))))));
};
exports.default = CheckBoxesFoundAirports;
