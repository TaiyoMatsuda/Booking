import { TouchableOpacity, View } from 'react-native';
import { Card, Text } from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';

function Subscription({ item, onPress, isSelected }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card>
        {item.id === 0 ? (
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Icon
              name={isSelected ? 'radio-button-on' : 'radio-button-off'}
              size={24}
              color={isSelected ? 'blue' : 'grey'}
            />
            <Text
              style={{ marginRight: 120 }}
              h4
            >
              {item.title}
            </Text>
          </View>
        ) : (
          <View>
            <Text h4>{item.title}</Text>
            <Text h4>{item.time}</Text>
            <Text h4>{item.price}</Text>
            <Icon
              name={isSelected ? 'radio-button-on' : 'radio-button-off'}
              size={24}
              color={isSelected ? 'blue' : 'grey'}
            />
          </View>
        )}
      </Card>
    </TouchableOpacity>
  );
}

export default Subscription;
