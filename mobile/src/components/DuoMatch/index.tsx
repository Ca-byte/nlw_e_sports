import React, { useState } from 'react';
import { View, Modal, Text, ModalProps, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { CheckCircle } from 'phosphor-react-native';
import * as Clipboard from 'expo-clipboard';

import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
  discord: string;
  onClose: ()=> void;
}

export function DuoMatch({ discord,onClose, ...rest} :Props) {
  const [isCoping, setIsCoping] = useState(false)

  async function handleCopyDiscordToClipboard() {
    setIsCoping(true)
    await Clipboard.setStringAsync(discord);

    Alert.alert('Discord copied!', 'Discord user copied to you clipboad')
    setIsCoping(false)
  }
  return (
    <Modal
    transparent
    statusBarTranslucent
    animationType='fade'
    { ...rest}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity 
            style={styles.closeIcon}
            onPress={onClose}

          >
            <MaterialIcons 
            name='close'
            size={20}
            color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <CheckCircle 
          size={64}
          color={THEME.COLORS.SUCCESS}
          weight='bold'
          />
          <Heading
            title="Let's play"
            subtitle='Game on my friend!'
            style={{alignItems: 'center', marginTop: 24}}
          />
          <Text style={styles.label}>
            Insert you discord user
          </Text>
          <TouchableOpacity 
            style={styles.discordButton} 
            onPress={handleCopyDiscordToClipboard}
            disabled={isCoping}
          >
            <Text style={styles.discord}>
              { isCoping ? <ActivityIndicator color={THEME.COLORS.PRIMARY}/> : discord}
            </Text>
          </TouchableOpacity>
        </View>

      </View>

    </Modal>
  );
}