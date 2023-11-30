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
exports.cityOfOriginGateway = void 0;
const cityOfOriginGateway = (city) => __awaiter(void 0, void 0, void 0, function* () {
    const url = new URL(`${process.env.REACT_APP_API_URL}/cities`);
    url.searchParams.append('city', city);
    const response = yield fetch(url.toString(), {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.status === 404)
        throw new Error('Cidade não encontrada');
    if (!response.ok)
        throw new Error('Error fetching cities');
    return yield response.json();
});
exports.cityOfOriginGateway = cityOfOriginGateway;
