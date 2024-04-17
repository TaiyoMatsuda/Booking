import { TouchableOpacity } from 'react-native';
import { Text, Card } from '@rneui/themed';

function ReservationButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        mode="outlined"
        containerStyle={{
          alignItems: 'center',
          borderColor: 'blue',
          borderWidth: 1,
        }}
      >
        <Text h3 style={{ color: 'blue' }}>
          新規予約
        </Text>
      </Card>
    </TouchableOpacity>
  );
}

export default ReservationButton;
