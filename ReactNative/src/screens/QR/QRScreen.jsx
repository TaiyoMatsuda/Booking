import { View, Text } from 'react-native';
import { Chip } from 'react-native-paper';

import PrivateQRCode from '../../components/QR/PrivateQRCode';

function QRScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>QR Screen in dir</Text>
      <PrivateQRCode />
      <Chip mode="outlined" onPress={() => navigation.navigate('Home')}>
        Home
      </Chip>
    </View>
  );
}

export default QRScreen;
