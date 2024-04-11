import {
  View,
} from 'react-native';
import {
  Card,
  IconButton,
  MD3Colors,
  Text,
} from 'react-native-paper';

function NextReservationCard({ reservation, onPress }) {
  return (
    <Card mode="contained">
      <Card.Content>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text variant="titleLarge">{reservation.place_name}</Text>
            <Text variant="titleLarge">{reservation.room_name}</Text>
          </View>
          <View>
            <Text variant="titleLarge">{reservation.work_out_day}</Text>
            <Text variant="titleLarge">{reservation.work_out_time}</Text>
          </View>
          <View>
            <IconButton icon="cancel" iconColor={MD3Colors.error50} size={40} onPress={onPress} />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
}

export default NextReservationCard;
