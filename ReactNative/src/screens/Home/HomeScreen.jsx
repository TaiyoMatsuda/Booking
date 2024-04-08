import { View, Text } from 'react-native';
import { Chip } from 'react-native-paper';

function HomeScreen({ navigation }) {
  const userName = 'test';
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{`Hello, ${userName}!`}</Text>
      <Chip mode="outlined" onPress={() => navigation.navigate('Reservation')}>
        Reservation
      </Chip>
      <Chip mode="outlined" onPress={() => navigation.navigate('History')}>
        History
      </Chip>
      <Chip mode="outlined" onPress={() => navigation.navigate('QR')}>
        QR
      </Chip>
    </View>
  );
}

export default HomeScreen;
