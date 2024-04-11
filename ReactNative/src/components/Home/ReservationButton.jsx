import {
  Card,
  Text,
} from 'react-native-paper';

function ReservationButton({ onPress }) {
  return (
    <Card
      mode="outlined"
      style={{ alignItems: 'center', width: '80%' }}
      onPress={onPress}
    >
      <Card.Content>
        <Text variant="titleLarge">
          MAKE A RESERVATION
        </Text>
      </Card.Content>
    </Card>
  );
}

export default ReservationButton;
