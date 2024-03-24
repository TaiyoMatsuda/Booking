import { View, Text } from 'react-native';
import HalfWideButton from '../../components/Common/HalfWideButton';

function HomeScreen({ navigation }) {
  const userName = 'test';
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{`Hello, ${userName}!`}</Text>
      <HalfWideButton
        label="Reservation"
        onPress={() => navigation.navigate('Reservation')}
      />
      <HalfWideButton
        label="History"
        onPress={() => navigation.navigate('History')}
      />
      <HalfWideButton
        label="QR"
        onPress={() => navigation.navigate('QR')}
      />
    </View>
  );
}

export default HomeScreen;
