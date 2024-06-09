import { View, StyleSheet, Dimensions, ScrollView, Alert } from 'react-native';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { Button, Text } from '@rneui/themed';
import { format } from 'date-fns';
import DayForm from '../../components/Reservation/Reservation/DayForm';
import RoomForm from '../../components/Reservation/TimeSelection/RoomForm';
import RentCard from '../../components/Reservation/Reservation/RentCard';
import StoreForm from '../../components/Reservation/Reservation/StoreForm';
import { selectedTimes } from '../../recoil/selectedTimes';
import { tmpDecisionRoomTime } from '../../recoil/tmpDecisionRoomTime';
import { tmpBookedStore } from '../../recoil/tmpBookedStore';
import { tmpBookedDate } from '../../recoil/tmpBookedDate';

const screenWidth = Dimensions.get('window').width;
const data = [
  { label: 'Item 1', value: 1 },
  { label: 'Item 2', value: 2 },
  { label: 'Item 3', value: 3 },
  { label: 'Item 4', value: 4 },
  { label: 'Item 5', value: 5 },
  { label: 'Item 6', value: 6 },
  { label: 'Item 7', value: 7 },
  { label: 'Item 8', value: 8 },
];

function ReservationScreen({ navigation }) {
  const [bookedStore, setBookedStore] = useRecoilState(tmpBookedStore);
  const [tmpDate, setTmpDate] = useRecoilState(tmpBookedDate);
  const [tmpRoomTime, setTmpRoomTime] = useRecoilState(tmpDecisionRoomTime);
  const setSelectedItems = useSetRecoilState(selectedTimes);

  const moveRoomTimeSelectionScreen = () => {
    setSelectedItems(tmpRoomTime);
    navigation.navigate('TimeSelectionScreen');
  };

  const initBooking = () => {
    setBookedStore(null);
    setTmpDate(new Date());
    setSelectedItems([]);
    setTmpRoomTime([]);
  };

  const onPressClearButton = () => {
    Alert.alert('設定した予約をクリアしますか？', '', [
      {
        text: 'キャンセル',
        style: 'cancel',
      },
      {
        text: 'クリア',
        onPress: initBooking,
      },
    ]);
  };

  const onPressBookButton = () => {
    if (bookedStore === null) {
      Alert.alert('予約する店舗を選択してください。', '', [
        {
          text: '閉じる',
        },
      ]);
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (tmpDate < today) {
      Alert.alert('予約日は本日以降を選択してください。', '', [
        {
          text: '閉じる',
        },
      ]);
      return;
    }

    const { length } = tmpRoomTime;
    if (length === 0) {
      Alert.alert('予約する部屋と時間を選択してください。', '', [
        {
          text: '閉じる',
        },
      ]);
      return;
    }

    const displayStore = data.find(
      store => store.value === Number(bookedStore),
    );
    const displayDate = format(tmpDate, 'yyyy/MM/dd');
    Alert.alert(
      '予約しますか？',
      `
      店舗: ${displayStore.label}
      部屋: ${tmpRoomTime[0].room}
      予約日: ${displayDate}
      時間: ${tmpRoomTime[0].startTime} ~ ${tmpRoomTime[length - 1].endTime}`,
      [
        {
          text: 'キャンセル',
          style: 'cancel',
        },
        {
          text: 'クリア',
          onPress: initBooking,
        },
      ],
    );
  };

  return (
    <>
      <View style={{ alignItems: 'left', marginHorizontal: 20 }}>
        <Text h2>新規予約</Text>
      </View>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
          <View>
            <StoreForm />
            <DayForm />
            <RoomForm onPress={moveRoomTimeSelectionScreen} />
            <RentCard />
          </View>
        </View>
      </ScrollView>
      <View style={styles.container}>
        <Button
          title='クリア'
          type='outline'
          titleStyle={{ color: 'blue' }}
          buttonStyle={{
            backgroundColor: 'white',
            borderColor: 'blue',
          }}
          containerStyle={{
            width: screenWidth * 0.5,
          }}
          onPress={onPressClearButton}
        />
        <Button
          title='予約'
          type='outline'
          titleStyle={{ color: 'blue' }}
          buttonStyle={{
            backgroundColor: 'white',
            borderColor: 'blue',
          }}
          containerStyle={{
            width: screenWidth * 0.5,
          }}
          onPress={onPressBookButton}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ReservationScreen;
