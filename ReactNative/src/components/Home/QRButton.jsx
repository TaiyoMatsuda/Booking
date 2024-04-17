import { Card } from '@rneui/themed';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

function QRButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        mode="outlined"
        containerStyle={{
          alignItems: 'center',
          borderColor: 'blue',
          borderWidth: 1,
        }}
      >
        <Card.Title h4 style={{ color: 'blue' }}>QR</Card.Title>
        <Icon name="qr-code-sharp" size={75} style={{ color: 'blue' }} />
      </Card>
    </TouchableOpacity>
  );
}

export default QRButton;
