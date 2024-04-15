import { Input } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Entypo';

function NameInput({ name }) {
  const leftIcon = (
    <Icon
      name="user"
      size={24}
      color="black"
    />
  );

  return (
    <Input
      value={name}
      disabled
      leftIcon={leftIcon}
    />
  );
}

export default NameInput;
