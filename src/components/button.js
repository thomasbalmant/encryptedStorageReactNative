"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_native_1 = require("react-native");
const Button = ({ text, onpress, color }) => {
    return (<react_native_1.TouchableOpacity onPress={onpress} style={[styles.button, { backgroundColor: color }]}>
            <react_native_1.Text style={{ color: '#fff' }}>{text}</react_native_1.Text>
        </react_native_1.TouchableOpacity>);
};
exports.Button = Button;
const styles = react_native_1.StyleSheet.create({
    button: { alignSelf: 'center', justifyContent: 'center', marginVertical: 20, width: '70%', height: '10%', borderRadius: 10, alignItems: 'center' }
});
