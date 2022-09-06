"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_native_1 = require("react-native");
const encryptedStorage_1 = require("./src/functions/encryptedStorage");
const button_1 = require("./src/components/button");
const App = () => {
    const message = 'keys, tokens de api, googleMapKeys, etc...';
    const title = 'titles';
    return (<react_native_1.SafeAreaView style={styles.body}>
      <react_native_1.Text style={styles.header}>
        CryptoStorage
      </react_native_1.Text>
      <button_1.Button text='Encrypt' onpress={() => { (0, encryptedStorage_1.savingData)({ title, message }); }} color='purple'/>
      <button_1.Button text='Get Encrypted' onpress={() => { (0, encryptedStorage_1.gettingData)(title); }} color='blue'/>
      <button_1.Button text='Remove Data' onpress={() => { (0, encryptedStorage_1.removeData)(title); }} color='green'/>
      <button_1.Button text='Clear Storage' onpress={() => { (0, encryptedStorage_1.clearAll)(); }} color='brown'/>
    </react_native_1.SafeAreaView>);
};
exports.default = App;
const styles = react_native_1.StyleSheet.create({
    body: { flex: 1, justifyContent: 'center' },
    header: { textAlign: 'center', fontSize: 30 },
});
