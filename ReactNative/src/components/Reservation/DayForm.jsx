import { View } from 'react-native';
import { Text } from '@rneui/themed';
import DatePickerInput from '../Common/DatePickerInput';

function DayForm() {
  return (
    <View>
      <Text h4>日程:</Text>
      <DatePickerInput />
    </View>
  );
}

export default DayForm;
