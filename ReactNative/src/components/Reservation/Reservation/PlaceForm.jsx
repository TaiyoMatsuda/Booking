import { View } from 'react-native';
import { Text } from '@rneui/themed';
import Autocomplete from '../../Common/Autocomplete';

function PlaceForm() {
  return (
    <View>
      <Text h4>店舗:</Text>
      <Autocomplete />
    </View>
  );
}

export default PlaceForm;
