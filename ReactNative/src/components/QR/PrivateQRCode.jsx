import { Card } from '@rneui/themed';
import QRCode from 'react-native-qrcode-svg';

export default function PrivateQRCode() {
  return (
    <Card>
      <QRCode
        value="golf-booking-test-private-qr"
        size={300}
      />
    </Card>
  );
}
