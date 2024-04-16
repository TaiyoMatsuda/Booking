import { Card } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function QRButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card mode="outlined" onPress={onPress}>
        <Card.Title h4>QR</Card.Title>
        <Icon name="qr-code-sharp" size={75} />
      </Card>
    </TouchableOpacity>
  );
}

export default QRButton;
