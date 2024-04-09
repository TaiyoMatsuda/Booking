import { useState } from 'react';
import { FlatList } from 'react-native';
import ReservationHistory from './ReservationHistory';

export default function ReservationHistoryList() {
  const [reservations] = useState([
    {
      id: '1',
      place_name: 'place name1',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: true,
    }, {
      id: '2',
      place_name: 'place name2',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: false,
    }, {
      id: '3',
      place_name: 'place name3',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: false,
    }, {
      id: '4',
      place_name: 'place name1',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: false,
    }, {
      id: '5',
      place_name: 'place name2',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: false,
    }, {
      id: '6',
      place_name: 'place name3',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: false,
    }, {
      id: '7',
      place_name: 'place name1',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: false,
    }, {
      id: '8',
      place_name: 'place name2',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: false,
    }, {
      id: '9',
      place_name: 'place name3',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: false,
    }, {
      id: '10',
      place_name: 'place name1',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: false,
    }, {
      id: '11',
      place_name: 'place name2',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: false,
    }, {
      id: '12',
      place_name: 'place name3',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: false,
    }, {
      id: '13',
      place_name: 'place name1',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: false,
    }, {
      id: '14',
      place_name: 'place name2',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: false,
    }, {
      id: '15',
      place_name: 'place name3',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: false,
    },
  ]);

  const [onFetch, setOnFetch] = useState(true);
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
    <FlatList
      data={reservations}
      renderItem={({ item }) => <ReservationHistory reservation={item} />}
      keyExtractor={(item) => item.id}
      onEndReached={loadMoreData}
      onEndReachedThreshold={0.5}
      contentContainerStyle={{ marginTop: 10 }}
    />
  );
}
