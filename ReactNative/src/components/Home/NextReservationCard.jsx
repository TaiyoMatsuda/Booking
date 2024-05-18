import { View } from 'react-native';
import { Text, Card, Button } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import CloseButton from '../Common/CloseButton';

function NextReservationCard({ reservation, onPress }) {
  const margin = {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 5,
    marginLeft: 5,
  };
  return (
    <Card mode='contained'>
      <Card.Title h4>次回予約</Card.Title>
      <View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Icon name='time-outline' color='blue' size={25} />
          <Text h4>
            {` ${reservation.work_out_day} ${reservation.work_out_time}`}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Icon name='home-outline' color='blue' size={25} />
          <Text h4>{`${reservation.place_name} ${reservation.room_name}`}</Text>
        </View>
        <Button
          title='キャンセル'
          buttonStyle={{
            borderColor: 'blue',
          }}
          type='outline'
          titleStyle={{ color: 'blue' }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={onPress}
        />
      </View>
      {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text h5>{reservation.place_name}</Text>
          <Text h5>{reservation.room_name}</Text>
        </View>
        <View>
          <Text h5>{reservation.work_out_day}</Text>
          <Text h5>{reservation.work_out_time}</Text>
        </View>
        <CloseButton size={30} margin={margin} onPress={onPress} />
      </View> */}
    </Card>
  );
}

export default NextReservationCard;
