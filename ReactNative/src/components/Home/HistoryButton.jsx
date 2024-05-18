import { Card } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function HistoryButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        mode='outlined'
        containerStyle={{
          alignItems: 'center',
          borderColor: 'blue',
          borderWidth: 1,
        }}
      >
        <Card.Title h4 style={{ color: 'blue' }}>
          履歴
        </Card.Title>
        <Icon name='time-outline' size={100} style={{ color: 'blue' }} />
      </Card>
    </TouchableOpacity>
  );
}

export default HistoryButton;
