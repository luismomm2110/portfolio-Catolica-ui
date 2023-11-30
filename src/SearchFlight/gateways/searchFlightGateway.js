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
exports.searchFlightGateway = void 0;
const searchFlightGateway = (cityOrigin, destinations, price, departure) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(`${process.env.REACT_APP_API_URL}/flights`);
    url.searchParams.append('city_origin', cityOrigin);
    for (let i = 0; i < destinations.length; i++) {
        url.searchParams.append('destination', destinations[i]);
    }
    url.searchParams.append('price', String(price));
    url.searchParams.append('departure', departure);
    const response = yield fetch(url.toString(), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.status === 404)
        throw new Error('Nenhum voo encontrado.');
    if (!response.ok)
        throw new Error('Error fetching flight');
    return yield response.json();
});
exports.searchFlightGateway = searchFlightGateway;
