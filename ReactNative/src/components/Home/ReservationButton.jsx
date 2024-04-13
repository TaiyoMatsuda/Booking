import { TouchableOpacity } from 'react-native';
import { Text, Card } from '@rneui/themed';

function ReservationButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        mode="outlined"
        style={{ alignItems: 'center', width: '80%' }}
      >
        <Text h3>
          新規予約
        </Text>
      </Card>
    </TouchableOpacity>
  );
}

export default ReservationButton;
