import { TouchableOpacity } from 'react-native';
import { Card } from '@rneui/themed';
import Icon from 'react-native-vector-icons/AntDesign';

function CloseButton({ size, margin, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card
        mode='outlined'
        containerStyle={{
          marginTop: margin.marginTop,
          marginBottom: margin.marginBottom,
          marginRight: margin.marginRight,
          padding: 0,
          borderWidth: 1,
          borderColor: 'red',
        }}
        onPress={onPress}
      >
        <Icon name='close' color='red' size={size} />
      </Card>
    </TouchableOpacity>
  );
}

export default CloseButton;
