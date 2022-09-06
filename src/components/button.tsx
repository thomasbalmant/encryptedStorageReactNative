import {
    TouchableOpacity,
    Text,
    StyleSheet
} from 'react-native';

type Props = {
    text: string
    onpress: () => {}
    color: string
}

export const Button = (Props: Props) => {
    return (
        <>
            <TouchableOpacity onPress={Props.onpress} style={[styles.button, { backgroundColor: Props.color }]}>
                <Text style={{ color: '#fff' }}>{Props.text}</Text>
            </TouchableOpacity>
        </>
    )
}
const styles = StyleSheet.create({
    button: { alignSelf: 'center', justifyContent: 'center', marginVertical: 20, width: '70%', height: '10%', borderRadius: 10, alignItems: 'center' }
})