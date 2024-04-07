import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function PrivateQRCode() {
  return (
    <View style={styles.container}>
      <Text>QRコード</Text>
      <QRCode
        value="golf-booking-test-private-qr"
        size={300}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
