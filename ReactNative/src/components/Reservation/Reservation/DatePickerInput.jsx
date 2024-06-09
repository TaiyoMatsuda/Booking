import { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { Card, Text } from '@rneui/themed';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { format } from 'date-fns';
import { selectedTimes } from '../../../recoil/selectedTimes';
import { tmpDecisionRoomTime } from '../../../recoil/tmpDecisionRoomTime';
import { tmpBookedDate } from '../../../recoil/tmpBookedDate';

function DatePickerInput() {
  const [date, setDate] = useRecoilState(tmpBookedDate);
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

  const minimumDate = new Date();
  const maximumDate = new Date();
  maximumDate.setMonth(maximumDate.getMonth() + 1);

  return (
    <TouchableOpacity onPress={showDatePicker}>
      <Card mode='outlined' containerStyle={styles.cardContainer}>
        <View style={styles.cardContent}>
          <Text style={styles.text}>{formatDate()}</Text>
          <Icon name='calendar-outline' color='blue' size={25} />
        </View>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode='date'
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          minimumDate={minimumDate}
          maximumDate={maximumDate}
          cancelTextIOS='キャンセル'
          confirmTextIOS='確認'
          locale='ja'
        />
      </Card>
    </TouchableOpacity>
  );
}

export default DatePickerInput;

const styles = StyleSheet.create({
  cardContainer: {
    margin: 0,
    padding: 0,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
    height: 50,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: '100%',
  },
  text: {
    fontSize: 16,
  },
});
