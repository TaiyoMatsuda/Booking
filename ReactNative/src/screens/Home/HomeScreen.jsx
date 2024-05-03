import { useState } from 'react';
import {
  Alert,
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { Text } from '@rneui/themed';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReservationButton from '../../components/Home/ReservationButton';
import NextReservationCard from '../../components/Home/NextReservationCard';
import HistoryButton from '../../components/Home/HistoryButton';
import QRButton from '../../components/Home/QRButton';
import signInStatus from '../../recoil/signInStatus';
import LogOutButton from '../../components/Home/LogOutButton';

function HomeScreen({ navigation }) {
  const isSignedIn = useRecoilValue(signInStatus);
  const setSignInStatus = useSetRecoilState(signInStatus);
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

  const LogOut = async () => {
    console.log('LogOut:' + JSON.stringify(isSignedIn));
    await AsyncStorage.setItem('isSignedIn', JSON.stringify(false));
    setSignInStatus(false);
  };

  const onPressLogOutButton = () => {
    Alert.alert(
      'Log outしますか？',
      '',
      [
        {
          text: '閉じる',
        },
        {
          text: 'Log Out', onPress: LogOut,
        },
      ],
    );
  };

  return (
    <>
      <View style={styles.containerHeader}>
        <Text h2>{`Hello, ${userName}!`}</Text>
        <LogOutButton onPress={onPressLogOutButton} />
      </View>
      <ScrollView>
        <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
          <ReservationButton onPress={() => navigation.navigate('Reservation')} />
          <NextReservationCard reservation={reservation} onPress={onPressCancelButton} />
          <View style={styles.container}>
            <HistoryButton onPress={() => navigation.navigate('History')} />
            <QRButton onPress={() => navigation.navigate('QR')} />
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeScreen;
