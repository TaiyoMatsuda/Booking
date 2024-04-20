import { View } from 'react-native';
import { Text } from '@rneui/themed';

function PlaceForm() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <Text h4>
        店舗:
      </Text>
      <Text h4>
        10:00 ~ 11:00
      </Text>
    </View>
  );
}

export default PlaceForm;
