import { Card } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function HistoryButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        <Card.Title h4>履歴</Card.Title>
        <Icon name="clockcircleo" size={75} />
      </Card>
    </TouchableOpacity>
  );
}

export default HistoryButton;
