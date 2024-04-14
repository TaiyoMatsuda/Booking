import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/AntDesign';

function LogOutButton({ onPress }) {
  return (
    <Button
      type="outline"
      radius="sm"
      titleStyle={{
        color: 'blue',
      }}
      buttonStyle={{
        borderColor: 'blue',
        backgroundColor: 'white',
      }}
      onPress={onPress}
    >
      Log Out
      <Icon name="logout" color="blue" size={15} />
    </Button>
  );
}

export default LogOutButton;
