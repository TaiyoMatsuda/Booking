import { StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { Button, Text } from '@rneui/themed';
import { selectedTimes } from '../../../recoil/selectedTimes';

function RoomForm({ onPress }) {
  const tmpRoomTime = useRecoilValue(selectedTimes);
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedStartTime, setSelectedStartTime] = useState('');
  const [selectedEndTime, setSelectedEndTime] = useState('');
  useEffect(() => {
    const { length } = tmpRoomTime;
    if (length === 0) {
      setSelectedRoom('');
      setSelectedStartTime('');
      setSelectedEndTime('');
    } else {
      setSelectedRoom(tmpRoomTime[0].room);
      setSelectedStartTime(tmpRoomTime[0].startTime);
      setSelectedEndTime(tmpRoomTime[length - 1].endTime);
    }
  }, [tmpRoomTime]);

  return (
    <View style={styles.container}>
      <Text h4>{`部屋: ${selectedRoom}`}</Text>
      <Text h4>{`時間: ${selectedStartTime} ~ ${selectedEndTime}`}</Text>
      <Button
        title='選択'
        type='outline'
        titleStyle={{ color: 'blue' }}
        buttonStyle={{
          backgroundColor: 'white',
          borderColor: 'blue',
        }}
        onPress={onPress}
      />
    </View>
  );
}

export default RoomForm;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
