import { useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Chip, Divider, IconButton } from 'react-native-paper';

function HistoryScreen({ navigation }) {
  const [onFetch, setOnFetch] = useState(true);
  const [reservations] = useState([
    {
      id: '1',
      place_name: 'place name1',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
    }, {
      id: '2',
      place_name: 'place name2',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
    }, {
      id: '3',
      place_name: 'place name3',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
    }, {
      id: '4',
      place_name: 'place name1',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
    }, {
      id: '5',
      place_name: 'place name2',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
    }, {
      id: '6',
      place_name: 'place name3',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
    }, {
      id: '7',
      place_name: 'place name1',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
    }, {
      id: '8',
      place_name: 'place name2',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
    }, {
      id: '9',
      place_name: 'place name3',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
    }, {
      id: '10',
      place_name: 'place name1',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
    }, {
      id: '11',
      place_name: 'place name2',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
    }, {
      id: '12',
      place_name: 'place name3',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
    }, {
      id: '13',
      place_name: 'place name1',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
    }, {
      id: '14',
      place_name: 'place name2',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
    }, {
      id: '15',
      place_name: 'place name3',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
    },
  ]);
  const renderItem = ({ item }) => (
    <View>
      <Divider />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={styles.textLarge}>{item.place_name}</Text>
          <Text style={styles.textLarge}>{item.room_name}</Text>
        </View>
        <View>
          <Text style={styles.textLarge}>{item.work_out_day}</Text>
          <Text style={styles.textLarge}>{item.work_out_time}</Text>
        </View>
        <View>
          <IconButton
            icon="trash-can"
            size={40}
            onPress={() => console.log('Pressed')}
          />
        </View>
      </View>
    </View>
  );

  const loadMoreData = async () => {
    if (onFetch) {
      return;
    }
    setOnFetch(true);
    try {
      console.log('test');
    } catch (error) {
      console.log(error);
    } finally {
      setOnFetch(false);
    }
  };

  return (
    <>
      <Text>Reservations</Text>
      <FlatList
        data={reservations}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onEndReached={loadMoreData}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ marginTop: 10 }}
      />
      <Chip mode="outlined" onPress={() => navigation.navigate('Reservation')}>
        NEW RESERVATION
      </Chip>
    </>
  );
}

const styles = StyleSheet.create({
  textLarge: {
    fontSize: 20,
  },
});

export default HistoryScreen;
