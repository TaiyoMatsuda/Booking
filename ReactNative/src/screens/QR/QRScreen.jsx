import { View, Text } from 'react-native';
import HalfWideButton from '../../components/Common/HalfWideButton';
import PrivateQRCode from '../../components/QR/PrivateQRCode';

function QRScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>QR Screen in dir</Text>
      <PrivateQRCode />
      <HalfWideButton
        label="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default QRScreen;
