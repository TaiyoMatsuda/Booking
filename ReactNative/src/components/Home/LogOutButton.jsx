import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/AntDesign';

function LogOutButton({ onPress }) {
  return (
    <Button radius="sm" type="solid" onPress={onPress}>
      Sign Out
      <Icon name="logout" color="white" size={15} />
    </Button>
  );
}

export default LogOutButton;
