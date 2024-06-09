import { View } from 'react-native';
import { Text } from '@rneui/themed';
import StoreAutocomplete from './StoreAutocomplete';

function StoreForm() {
  return (
    <View>
      <Text h4>店舗:</Text>
      <StoreAutocomplete />
    </View>
  );
}

export default StoreForm;
