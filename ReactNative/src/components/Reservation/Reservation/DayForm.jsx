import { View } from 'react-native';
import { Text } from '@rneui/themed';
import DatePickerInput from './DatePickerInput';

function DayForm() {
  return (
    <View>
      <Text h4>予約日:</Text>
      <DatePickerInput />
    </View>
  );
}

export default DayForm;
