import { View } from 'react-native';
import { Button, Text } from '@rneui/themed';

function ReservationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text h3>Reservation Screen in dir</Text>
      <Button
        title="Go to Time Selection"
        buttonStyle={{
          backgroundColor: 'rgba(78, 116, 289, 1)',
          borderRadius: 3,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate('TimeSelectionScreen')}
      />
    </View>
  );
}

export default ReservationScreen;
