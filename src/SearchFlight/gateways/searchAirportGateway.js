"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAirportGateway = void 0;
const searchAirportGateway = (airportName, limit = '30') => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(`${process.env.REACT_APP_API_URL}/airports`);
    url.searchParams.append('city', airportName);
    url.searchParams.append('limit', limit);
    const response = yield fetch(url.toString(), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.status === 404)
        throw new Error('Aeroporto não encontrado');
    if (!response.ok)
        throw new Error('Error fetching airports');
    return yield response.json();
});
exports.searchAirportGateway = searchAirportGateway;
