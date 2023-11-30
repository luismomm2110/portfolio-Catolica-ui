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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ReusableForm_1 = __importDefault(require("../systemDesign/ReusableForm/ReusableForm"));
const searchAirportGateway_1 = require("./gateways/searchAirportGateway");
const cityOfOriginGateway_1 = require("./gateways/cityOfOriginGateway");
const ReusableButton_1 = require("../systemDesign/Button/ReusableButton");
const searchFlightGateway_1 = require("./gateways/searchFlightGateway");
const LoadingPage_1 = __importDefault(require("../systemDesign/LoadingPage/LoadingPage"));
const SelectingAirports_1 = require("./SelectingAirports");
const FoundFlightTable_1 = __importDefault(require("./FoundFlightTable/FoundFlightTable"));
require("./styles.css");
const SelectedAirportsList_1 = __importDefault(require("./SelectedAirportsList"));
const todayInString = new Date().toISOString().split('T')[0];
const SearchFlight = ({ selectedAirportLimit = 10 }) => {
    const [formData, setFormData] = (0, react_1.useState)({
        cityOfOrigin: '', cityOfOriginError: '',
        originalDestinyAirport: '', originalDestinyAirportError: '',
        price: '', priceError: '',
        departureDate: todayInString, departureDateError: ''
    });
    const [foundCityOfOrigin, setFoundCityOfOrigin] = (0, react_1.useState)('');
    const [lastSelectedDestiny, setLastSelectedDestiny] = (0, react_1.useState)('');
    const [airports, setAirports] = (0, react_1.useState)([]);
    const [selectedAirports, setSelectedAirports] = (0, react_1.useState)([]);
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const [foundFlights, setFoundFlights] = (0, react_1.useState)([]);
    const [gatewayError, setGatewayError] = (0, react_1.useState)('');
    const isSelectingOrigin = foundCityOfOrigin.length === 0;
    const isSelectingDestiny = airports.length === 0 && !isSelectingOrigin;
    const isSelectingAirports = airports.length > 0;
    const handleSubmit = (e) => __awaiter(void 0, void 0, void 0, function* () {
        e.preventDefault();
        if (isSelectingOrigin) {
            try {
                const response = yield (0, cityOfOriginGateway_1.cityOfOriginGateway)(formData.cityOfOrigin);
                setFoundCityOfOrigin(response.data);
            }
            catch (error) {
                if (error instanceof Error) {
                    setFormData(Object.assign(Object.assign({}, formData), { cityOfOriginError: error.message }));
                }
            }
        }
        else {
            try {
                setLastSelectedDestiny(formData.originalDestinyAirport);
                const response = yield (0, searchAirportGateway_1.searchAirportGateway)(formData.originalDestinyAirport);
                setAirports(prevState => [...response.data]);
            }
            catch (error) {
                if (error instanceof Error) {
                    setFormData(Object.assign(Object.assign({}, formData), { originalDestinyAirportError: error.message }));
                }
            }
        }
    });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(Object.assign(Object.assign({}, formData), { [id]: value, [id + 'Error']: '' }));
    };
    const handleRemoveSelectedAirport = (airport) => {
        const newSelectedAirports = selectedAirports.filter((selectedAirport) => selectedAirport.code !== airport.code);
        setSelectedAirports(newSelectedAirports);
    };
    const getHeaderTitle = () => {
        if (isSelectingOrigin) {
            return 'Selecione a cidade de origem';
        }
        if (isSelectingDestiny) {
            return 'Selecione o destino';
        }
        return `Selecione até ${selectedAirportLimit} aeroportos`;
    };
    const currentFormFields = () => {
        const cityOfOriginFields = {
            id: 'cityOfOrigin',
            label: 'Cidade de origem',
            name: 'Cidade de origem',
            type: 'text',
            placeholder: 'Insira a cidade de origem',
            value: formData.cityOfOrigin,
            error: formData.cityOfOriginError,
        };
        const originalDestinyAirport = {
            id: 'originalDestinyAirport',
            label: 'Aeroporto de destino',
            name: 'Aeroporto de destino',
            type: 'text',
            placeholder: 'Insira o nome do aeroporto de destino',
            value: formData.originalDestinyAirport,
            error: formData.originalDestinyAirportError
        };
        const maxPrice = {
            id: 'price',
            label: 'Preço máximo',
            name: 'Preço máximo',
            type: 'number',
            required: false,
            placeholder: 'Sem limite de preço',
            value: formData.price,
            error: formData.priceError
        };
        const departureDate = {
            id: 'departureDate',
            label: 'Data de partida',
            name: 'Data de partida',
            min: todayInString,
            type: 'date',
            required: false,
            placeholder: todayInString,
            value: formData.departureDate,
            error: formData.departureDateError
        };
        if (isSelectingOrigin) {
            return [cityOfOriginFields];
        }
        if (isSelectingDestiny) {
            return [cityOfOriginFields, originalDestinyAirport];
        }
        if (isSelectingAirports) {
            return [cityOfOriginFields, originalDestinyAirport, maxPrice, departureDate];
        }
        return [];
    };
    const selectSubmitButtonText = () => {
        if (isSelectingOrigin) {
            return 'Buscar cidade de origem';
        }
        if (isSelectingDestiny || isSelectingAirports) {
            return 'Buscar aeroporto de destino';
        }
        return 'Submit';
    };
    const hasSufficientDataForSearchingFlights = () => {
        return formData.cityOfOrigin.length > 0
            && selectedAirports.length > 0
            && formData.departureDate.length > 0;
    };
    const handleFindFlights = (event) => __awaiter(void 0, void 0, void 0, function* () {
        event.preventDefault();
        const airportsCodes = selectedAirports.map((airport) => airport.code);
        setIsLoading(true);
        try {
            const response = yield (0, searchFlightGateway_1.searchFlightGateway)(foundCityOfOrigin, airportsCodes, String(formData.price), formData.departureDate);
            setIsLoading(false);
            if (response.data.length > 0) {
                setFoundFlights(response.data);
            }
            else {
                setGatewayError('Nenhum voo encontrado, por favor altere os filtros.');
            }
        }
        catch (error) {
            setIsLoading(false);
        }
    });
    const isFormDisabled = () => {
        if (isSelectingAirports) {
            const currentOriginalDestinyAirport = formData.originalDestinyAirport;
            return currentOriginalDestinyAirport.length === 0 || currentOriginalDestinyAirport === lastSelectedDestiny;
        }
    };
    const handleSelectingAirport = (airport) => {
        const newSelectedAirports = selectedAirports.includes(airport)
            ? selectedAirports.filter((selectedAirport) => selectedAirport.code !== airport.code)
            : [...selectedAirports, airport];
        setSelectedAirports(newSelectedAirports);
    };
    return (react_1.default.createElement("div", { className: 'flight-area-container' }, isLoading ? react_1.default.createElement(LoadingPage_1.default, null) :
        foundFlights.length > 0 ? (react_1.default.createElement(FoundFlightTable_1.default, { flights: foundFlights })) :
            (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("header", null,
                    react_1.default.createElement("h1", null, getHeaderTitle())),
                react_1.default.createElement("main", { className: 'create-flight-area' },
                    react_1.default.createElement("div", { className: 'search-flights' },
                        react_1.default.createElement(ReusableForm_1.default, { formTitle: "", fields: currentFormFields(), handleSubmit: handleSubmit, handleChange: handleChange, submitText: selectSubmitButtonText(), disabled: isFormDisabled() }),
                        hasSufficientDataForSearchingFlights() &&
                            react_1.default.createElement(ReusableButton_1.ReusableButton, { callback: handleFindFlights, label: 'Buscar voos', description: 'Buscar voos' }),
                        gatewayError && react_1.default.createElement("p", null, gatewayError),
                        isSelectingAirports && (react_1.default.createElement(react_1.default.Fragment, null,
                            react_1.default.createElement(SelectedAirportsList_1.default, { selectedAirports: selectedAirports, handleRemoveSelectedAirport: handleRemoveSelectedAirport }),
                            react_1.default.createElement(SelectingAirports_1.FoundAirportsList, { airports: airports, selectedAirports: selectedAirports, handleSelectingAirport: handleSelectingAirport, selectedAirportLimit: selectedAirportLimit })))))))));
};
exports.default = SearchFlight;
