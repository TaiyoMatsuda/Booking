import { useState } from 'react';
import {
  Alert,
  View,
  StyleSheet,
} from 'react-native';
import {
  Chip,
  Text,
} from 'react-native-paper';
import ReservationButton from '../../components/Home/ReservationButton';
import NextReservationCard from '../../components/Home/NextReservationCard';
import HistoryButton from '../../components/Home/HistoryButton';
import QRButton from '../../components/Home/QRButton';

function HomeScreen({ navigation }) {
  const [reservation] = useState(
    {
      id: '1',
      place_name: 'place name1',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: true,
    },
  );
  const userName = 'test';

  const onPressCancelButton = () => {
    Alert.alert(
      'キャンセルしますか？',
      '',
      [
        {
          text: '閉じる',
          onPress: () => console.log('閉じるをタップした時の挙動を書く'),
        },
        {
          text: 'キャンセル', onPress: () => console.log('キャンセルをタップした時の挙動を書く'),
        },
      ],
    );
  };

  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <View style={styles.container}>
        <Text variant="headlineMedium">{`Hello, ${userName}!`}</Text>
        <Chip icon="logout" mode="outlined" onPress={() => console.log('Pressed')}>Log out</Chip>
      </View>
      <ReservationButton onPress={() => navigation.navigate('Reservation')} />
      <Text variant="headlineMedium">次回予約</Text>
      <NextReservationCard reservation={reservation} onPress={onPressCancelButton} />
      <View style={styles.container}>
        <HistoryButton onPress={() => navigation.navigate('History')} />
        <QRButton onPress={() => navigation.navigate('QR')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default HomeScreen;
