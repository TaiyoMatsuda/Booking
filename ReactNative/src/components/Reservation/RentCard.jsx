import { useState } from 'react';
import { View, FlatList } from 'react-native';
import { Card, Text, Button } from '@rneui/themed';
import RentItem from './RentItem';

function RentCard() {
  const [items] = useState([
    {
      id: 1,
      name: 'club 1',
      count: 1,
      unit_price: '¥ 500',
    }, {
      id: 2,
      name: 'club 2',
      count: 1,
      unit_price: '¥ 600',
    }, {
      id: 3,
      name: 'shrit',
      count: 1,
      unit_price: '¥ 300',
    },
  ]);

  return (
    <Card>
      <View style={{ flexDirection: 'row' }}>
        <Text h4>
          RENT:
        </Text>
        <Button
          title="追加"
          type="outline"
          titleStyle={{ color: 'blue' }}
          buttonStyle={{
            backgroundColor: 'white',
            borderColor: 'blue',
            marginLeft: 20,
          }}
        />
      </View>
      <FlatList
        data={items}
        renderItem={({ item }) => <RentItem rent={item} />}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ marginTop: 10 }}
      />
    </Card>
  );
}

export default RentCard;
