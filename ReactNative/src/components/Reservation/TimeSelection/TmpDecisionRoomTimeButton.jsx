import { Alert } from 'react-native';
import { Button } from '@rneui/themed';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { selectedTimes } from '../../../recoil/selectedTimes';
import { tmpDecisionRoomTime } from '../../../recoil/tmpDecisionRoomTime';

function TmpDecisionRoomTimeButton({ navigation }) {
  const selectedItems = useRecoilValue(selectedTimes);
  const setTmpDecisionRoomTime = useSetRecoilState(tmpDecisionRoomTime);

  const onPressOKButton = () => {
    const { length } = selectedItems;
    if (length === 0) {
      Alert.alert('予約する部屋と時間を選択してください。', '', [
        {
          text: '閉じる',
        },
      ]);
      return;
    }
    const uniqueRooms = new Set(selectedItems.map(item => item.room));
    if (uniqueRooms.size > 1) {
      Alert.alert('複数の部屋を予約することはできません。', '', [
        {
          text: '閉じる',
        },
      ]);
      return;
    }

    const sortedTimeSlots = [...selectedItems].sort(
      (a, b) => a.timeSlotId - b.timeSlotId,
    );
    const isConsecutive = sortedTimeSlots.every((item, index, array) => {
      return (
        index === array.length - 1 ||
        array[index + 1].timeSlotId - item.timeSlotId === 1
      );
    });
    if (!isConsecutive) {
      Alert.alert('時間は間隔を空けて予約できません。', '', [
        {
          text: '閉じる',
        },
      ]);
      return;
    }

    Alert.alert(
      '予約情報をご確認ください',
      `部屋: ${sortedTimeSlots[0].room} 時間: ${sortedTimeSlots[0].startTime} ~ ${sortedTimeSlots[length - 1].endTime}`,
      [
        {
          text: '修正',
          style: 'cancel',
        },
        {
          text: '登録',
          onPress: onPressOk,
        },
      ],
    );
  };

  const onPressOk = () => {
    setTmpDecisionRoomTime(selectedItems);
    navigation.goBack();
  };

  return (
    <Button
      title='決定'
      type='outline'
      raised
      titleStyle={{ color: 'blue' }}
      buttonStyle={{
        backgroundColor: 'white',
        borderColor: 'blue',
      }}
      onPress={onPressOKButton}
    />
  );
}

export default TmpDecisionRoomTimeButton;
