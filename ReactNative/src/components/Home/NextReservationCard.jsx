import {
  View,
} from 'react-native';
import { Text, Card } from '@rneui/themed';
import CloseButton from '../Common/CloseButton';

function NextReservationCard({ reservation, onPress }) {
  return (
    <Card mode="contained">
      <Card.Title h4>次回予約</Card.Title>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text h5>{reservation.place_name}</Text>
          <Text h5>{reservation.room_name}</Text>
        </View>
        <View>
          <Text h5>{reservation.work_out_day}</Text>
          <Text h5>{reservation.work_out_time}</Text>
        </View>
        <CloseButton onPress={onPress} size={40} />
      </View>
    </Card>
  );
}

export default NextReservationCard;
