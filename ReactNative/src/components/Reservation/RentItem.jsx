import { View } from 'react-native';
import { Card, Text } from '@rneui/themed';

function RentItem({ rent }) {
  return (
    <Card>
      <View style={{ flexDirection: 'row' }}>
        <Text h4>
          {rent.name}
        </Text>
        <Text h4>
          ×
        </Text>
        <Text h4>
          {rent.count}
        </Text>
        <Text h4>
          →
        </Text>
        <Text h4>
          {rent.unit_price}
        </Text>
      </View>
    </Card>
  );
}

export default RentItem;
