import EncryptedStorage from 'react-native-encrypted-storage';

type Props = {
    title: string
    message: string
}

export const savingData = async (Props: Props) => {
    try {
        const encrypt = await EncryptedStorage.setItem(
            Props.title,
            Props.message
        );
        console.log(encrypt);
    } catch (error) {
        console.log('erro ao salvar dados encryptados', error);
    }
}

export const gettingData = async (title: string) => {
    try {
        const session = await EncryptedStorage.getItem(title);
        if (session !== undefined) {
            console.log(session);
        }
    } catch (error) {
        console.log('erro ao obter dados encryptados', error);
    }
}

export const removeData = async (title: string) => {
    try {
        await EncryptedStorage.removeItem(title);
    } catch (error) {
        // error
    }
}

export const clearAll = async () => {
    try {
        await EncryptedStorage.clear();
    } catch (error) {
        // error
    }
}