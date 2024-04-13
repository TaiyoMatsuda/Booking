import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function CloseButton({ onPress, size }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name="close" size={size} color="red" />
    </TouchableOpacity>
  );
}

export default CloseButton;
