"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("./FoundFlightTable.css");
const FlightTable = ({ flights }) => {
    const [sortedFlights, setSortedFlights] = (0, react_1.useState)(flights);
    const [sortOrder, setSortOrder] = (0, react_1.useState)('asc');
    const [sortType, setSortType] = (0, react_1.useState)('price');
    const sortFlights = (type) => {
        const sorted = [...sortedFlights].sort((a, b) => {
            if (type === 'price') {
                return sortOrder === 'asc' ? a.total_price - b.total_price : b.total_price - a.total_price;
            }
            else if (type === 'arrival') {
                const dateA = new Date(a.arrival_date);
                const dateB = new Date(b.arrival_date);
                return sortOrder === 'asc' ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
            }
            else {
                return sortOrder === 'asc' ? a.carrier.localeCompare(b.carrier) : b.carrier.localeCompare(a.carrier);
            }
        });
        setSortedFlights(sorted);
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
        setSortType(type);
    };
    const formatDateToDDMMYYYY = (date) => {
        const day = date.split('-')[2];
        const month = date.split('-')[1];
        const year = date.split('-')[0];
        return `${day}/${month}/${year}`;
    };
    return (react_1.default.createElement("table", { className: 'flight-table' },
        react_1.default.createElement("thead", null,
            react_1.default.createElement("tr", null,
                react_1.default.createElement("th", null, "Origem"),
                react_1.default.createElement("th", null, "Destino"),
                react_1.default.createElement("th", null, "Moeda"),
                react_1.default.createElement("th", { onClick: () => sortFlights('price'), style: { cursor: 'pointer' } },
                    "Pre\u00E7o Total ",
                    sortType === 'price' ? (sortOrder === 'asc' ? '↑' : '↓') : ''),
                react_1.default.createElement("th", null, "Data de Partida"),
                react_1.default.createElement("th", { onClick: () => sortFlights('arrival'), style: { cursor: 'pointer' } },
                    "Data de Chegada ",
                    sortType === 'arrival' ? (sortOrder === 'asc' ? '↑' : '↓') : ''),
                react_1.default.createElement("th", null, "Companhia A\u00E9rea"))),
        react_1.default.createElement("tbody", null, sortedFlights.map((flight, index) => (react_1.default.createElement("tr", { key: index },
            react_1.default.createElement("td", null, flight.city_source),
            react_1.default.createElement("td", null, flight.city_destination),
            react_1.default.createElement("td", null, flight.currency),
            react_1.default.createElement("td", null, flight.total_price),
            react_1.default.createElement("td", null, formatDateToDDMMYYYY(flight.departure_date)),
            react_1.default.createElement("td", null, formatDateToDDMMYYYY(flight.arrival_date)),
            react_1.default.createElement("td", null, flight.carrier)))))));
};
exports.default = FlightTable;
