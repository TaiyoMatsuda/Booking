import { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { Card, Text } from '@rneui/themed';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { format } from 'date-fns';
import { selectedTimes } from '../../recoil/selectedTimes';
import { tmpDecisionRoomTime } from '../../recoil/tmpDecisionRoomTime';

function DatePickerInput() {
  const [date, setDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const setSelectedItems = useSetRecoilState(selectedTimes);
  const setTmpDecisionRoomTime = useSetRecoilState(tmpDecisionRoomTime);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = selectedDate => {
    if (date.toDateString() !== selectedDate.toDateString()) {
      setSelectedItems([]);
      setTmpDecisionRoomTime([]);
      setDate(selectedDate);
    }
    hideDatePicker();
  };

  function formatDate() {
    return format(date, 'yyyy/MM/dd');
  }

  return (
    <TouchableOpacity onPress={showDatePicker}>
      <Card
        mode='outlined'
        containerStyle={{
          margin: 0,
          padding: 0,
          borderWidth: 1,
          borderColor: 'blue',
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text h4>{formatDate()}</Text>
          <Icon name='calendar-outline' color='blue' size={25} />
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode='date'
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          cancelTextIOS='キャンセル'
          confirmTextIOS='確認'
          locale='ja'
        />
      </Card>
    </TouchableOpacity>
  );
}

export default DatePickerInput;
