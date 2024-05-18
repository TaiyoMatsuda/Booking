import { View } from 'react-native';
import { Button, Text } from '@rneui/themed';
import PrivateQRCode from '../../components/QR/PrivateQRCode';

function QRScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text h3>QR Screen in dir</Text>
      <PrivateQRCode />
      <Button
        title='Home'
        buttonStyle={{
          backgroundColor: 'rgba(78, 116, 289, 1)',
          borderRadius: 3,
        }}
        containerStyle={{
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default QRScreen;
