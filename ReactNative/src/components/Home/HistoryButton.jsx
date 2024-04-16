import { Card } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function HistoryButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <Card.Title h4>履歴</Card.Title>
        <Icon name="time-outline" size={75} />
      </Card>
    </TouchableOpacity>
  );
}

export default HistoryButton;
