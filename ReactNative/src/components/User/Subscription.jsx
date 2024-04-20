import { TouchableOpacity, View } from 'react-native';
import { Chip, Card, Text } from '@rneui/themed';
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
              h4
            >
              {item.title}
            </Text>
            {item.is_contract ? (
              <Chip
                title="契約中"
                type="outline"
              />
            ) : (
              <View />
            )}
          </View>
        ) : (
          <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text h4>{item.title}</Text>
              {item.is_contract && (
                <Chip
                  title="契約中"
                  type="outline"
                />
              )}
            </View>
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
