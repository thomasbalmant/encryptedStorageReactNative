import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet
} from 'react-native';

import { clearAll, gettingData, removeData, savingData } from './src/functions/encryptedStorage'
import { Button } from './src/components/button'

const App = () => {
  const message = 'keys, tokens de api, googleMapKeys, etc...'
  const title = 'titles'

  return (
    <SafeAreaView style={styles.body}>
      <Text style={styles.header}>
        CryptoStorage
      </Text>
      <Button text='Encrypt' onpress={() => savingData({message: message, title: title})} color='purple' />
      <Button text='Get Encrypted' onpress={() => gettingData(title) } color='blue' />
      <Button text='Remove Data' onpress={() => removeData(title) } color='green' />
      <Button text='Clear Storage' onpress={() => clearAll() } color='brown' />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  body: { flex: 1, justifyContent: 'center' },
  header: { textAlign: 'center', fontSize: 30 },
})