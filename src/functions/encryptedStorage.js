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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearAll = exports.removeData = exports.gettingData = exports.savingData = void 0;
const react_native_encrypted_storage_1 = __importDefault(require("react-native-encrypted-storage"));
const savingData = ({ title, message }) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const encrypt = yield react_native_encrypted_storage_1.default.setItem(title, message);
        console.log(encrypt);
    }
    catch (error) {
        console.log('erro ao salvar dados encryptados', error);
    }
});
exports.savingData = savingData;
const gettingData = (title) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const session = yield react_native_encrypted_storage_1.default.getItem(title);
        if (session !== undefined) {
            console.log(session);
        }
    }
    catch (error) {
        console.log('erro ao obter dados encryptados', error);
    }
});
exports.gettingData = gettingData;
const removeData = (title) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield react_native_encrypted_storage_1.default.removeItem(title);
    }
    catch (error) {
        // error
    }
});
exports.removeData = removeData;
const clearAll = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield react_native_encrypted_storage_1.default.clear();
    }
    catch (error) {
        // error
    }
});
exports.clearAll = clearAll;
