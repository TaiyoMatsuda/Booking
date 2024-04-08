import { View, Text } from 'react-native';
import { Chip } from 'react-native-paper';

function ReservationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Reservation Screen in dir</Text>
      <Chip
        mode="outlined"
        onPress={() => { navigation.navigate('TimeSelectionScreen'); }}
      >
        Go to Time Selection
      </Chip>
    </View>
  );
}

export default ReservationScreen;
