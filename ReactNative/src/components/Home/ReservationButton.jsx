import { TouchableOpacity, Dimensions } from 'react-native';
import { Text, Card } from '@rneui/themed';

const screenWidth = Dimensions.get('window').width;

function ReservationButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        mode='outlined'
        containerStyle={{
          alignItems: 'center',
          borderColor: 'blue',
          borderWidth: 1,
          width: screenWidth * 0.75,
          padding: 0,
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
