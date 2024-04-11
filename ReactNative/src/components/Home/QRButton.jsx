import {
  Card,
  Icon,
  Text,
} from 'react-native-paper';

function QRButton({ onPress }) {
  return (
    <Card mode="outlined" onPress={onPress}>
      <Card.Content style={{ alignItems: 'center' }}>
        <Text variant="titleLarge">QR</Text>
        <Icon source="qrcode" size={100} />
      </Card.Content>
    </Card>
  );
}

export default QRButton;
