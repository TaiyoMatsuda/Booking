import { View } from 'react-native';
import { Button, Text } from '@rneui/themed';

function RoomForm({ onPress }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text h4>
        部屋:
      </Text>
      <Text h4>
        B
      </Text>
      <Text h4>
        時間:
      </Text>
      <Text h4>
        10:00 ~ 11:00
      </Text>
      <Button
        title="選択"
        type="outline"
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
