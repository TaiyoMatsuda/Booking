import { View, Text } from 'react-native';
import WideButton from '../../components/Common/WideButton';

function ReservationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Reservation Screen in dir</Text>
      <WideButton
        label="Go to Time Selection"
        onPress={() => navigation.navigate('SelectionTimeScreen')}
      />
    </View>
  );
}

export default ReservationScreen;
