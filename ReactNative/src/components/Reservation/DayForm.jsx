import { View } from 'react-native';
import { Text } from '@rneui/themed';

function DayForm() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text h4>
        日程:
      </Text>
      <Text h4>
        10:00 ~ 11:00
      </Text>
    </View>
  );
}

export default DayForm;
