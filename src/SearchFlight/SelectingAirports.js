"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FoundAirportsList = void 0;
const react_1 = __importDefault(require("react"));
const CheckBoxFoundAirports_1 = __importDefault(require("./CheckBoxFoundAirports"));
const FoundAirportsList = (props) => {
    const selectedAirportsMessage = () => {
        if (props.selectedAirports.length >= props.selectedAirportLimit) {
            return `Você atingiu o limite de ${props.selectedAirportLimit} aeroporto(s)`;
        }
        if (props.selectedAirports.length === 0) {
            return 'Nenhum aeroporto selecionado';
        }
        if (props.selectedAirports.length === 1) {
            return '1 aeroporto selecionado';
        }
        return `${props.selectedAirports.length} aeroportos selecionados`;
    };
    return react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("p", null, selectedAirportsMessage()),
        react_1.default.createElement(CheckBoxFoundAirports_1.default, { airports: props.airports, handleSelectingAirport: props.handleSelectingAirport, selectedAirports: props.selectedAirports, isAirportLimitReached: props.selectedAirports.length >= props.selectedAirportLimit }));
};
exports.FoundAirportsList = FoundAirportsList;
