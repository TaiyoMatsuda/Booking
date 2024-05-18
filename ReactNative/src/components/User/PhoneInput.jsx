import { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';

function PhoneInput({ phone }) {
  const [disabled, setDisabled] = useState(true);
  const [visualPhone, setPhone] = useState(phone);
  const initPhone = phone;

  const initializePhoneNumber = () => {
    setPhone(initPhone);
    setDisabled(true);
  };

  const newPhoneNumber = () => {
    setDisabled(true);
  };

  const onPressSaveButton = () => {
    Alert.alert('変更を保存しますか？', '', [
      {
        text: '戻す',
        onPress: initializePhoneNumber,
      },
      {
        text: '保存',
        onPress: newPhoneNumber,
      },
    ]);
  };

  const leftIcon = <Icon name='call-sharp' size={24} color='black' />;

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
      value={visualPhone}
      disabled={disabled}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onChangeText={setPhone}
    />
  );
}

export default PhoneInput;
