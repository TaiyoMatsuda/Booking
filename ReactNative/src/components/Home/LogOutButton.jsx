import { Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';

function LogOutButton({ onPress }) {
  return (
    <Button
      type='outline'
      radius='sm'
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
      <Icon name='log-out-outline' color='blue' size={25} />
    </Button>
  );
}

export default LogOutButton;
