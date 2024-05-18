import { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';

function EmailInput({ email }) {
  const [disabled, setDisabled] = useState(true);
  const [visualEmail, setEmail] = useState(email);
  const initEmail = email;

  const initializeEmail = () => {
    setEmail(initEmail);
    setDisabled(true);
  };

  const newEmail = () => {
    setDisabled(true);
  };

  const onPressSaveButton = () => {
    Alert.alert('変更を保存しますか？', '', [
      {
        text: '戻す',
        onPress: initializeEmail,
      },
      {
        text: '保存',
        onPress: newEmail,
      },
    ]);
  };

  const leftIcon = <Icon name='mail-sharp' size={24} color='black' />;

  const rightIcon = disabled ? (
    <TouchableOpacity onPress={() => setDisabled(false)}>
      <Icon name='pencil' size={24} color='black' />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPressSaveButton}>
      <Icon name='save' size={24} color='black' />
    </TouchableOpacity>
  );

  return (
    <Input
      value={visualEmail}
      disabled={disabled}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onChangeText={setEmail}
    />
  );
}

export default EmailInput;
