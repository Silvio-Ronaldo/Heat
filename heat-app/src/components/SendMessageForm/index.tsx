import React, { useState } from 'react';
import { TextInput, View, Alert, Keyboard } from 'react-native';

import { api } from '../../services/api';

import { Button } from '../Button';

import { COLORS } from '../../theme';
import { styles } from './styles';

export function SendMessageForm() {
  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();

    if (messageFormatted.length > 0) {
      setSendingMessage(true);

      await api.post('/messages', {
        message: messageFormatted,
      });

      setMessage('');
      Keyboard.dismiss();
      setSendingMessage(false);
      Alert.alert('Mensagem enviada com sucesso!');
    } else {
      Alert.alert('Escreva uma mensagem para enviar.');
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
        style={styles.input}
      />

      <Button
        title="ENVIAR MENSAGEM"
        color={COLORS.PINK}
        backgroundColor={COLORS.WHITE}
        isLoading={sendingMessage}
        onPress={handleMessageSubmit}
      />
    </View>
  );
}
