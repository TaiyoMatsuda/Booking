import { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';
import { Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';

function AddressInput({ address }) {
  const [disabled, setDisabled] = useState(true);
  const [visualAddress, setAddress] = useState(address);
  const initAddress = address;

  const initializeAddress = () => {
    setAddress(initAddress);
    setDisabled(true);
  };

  const newAddress = () => {
    setDisabled(true);
  };

  const onPressSaveButton = () => {
    Alert.alert(
      '変更を保存しますか？',
      '',
      [
        {
          text: '戻す',
          onPress: initializeAddress,
        },
        {
          text: '保存',
          onPress: newAddress,
        },
      ],
    );
  };

  const leftIcon = (
    <Icon
      name="home"
      size={24}
      color="black"
    />
  );

  const rightIcon = disabled ? (
    <TouchableOpacity onPress={() => setDisabled(false)}>
      <Icon
        name="pencil"
        size={24}
        color="black"
      />
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPressSaveButton}>
      <Icon
        name="save"
        size={24}
        color="black"
      />
    </TouchableOpacity>
  );

  return (
    <Input
      value={visualAddress}
      disabled={disabled}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      onChangeText={setAddress}
    />
  );
}

export default AddressInput;
