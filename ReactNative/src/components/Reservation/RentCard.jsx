import { useState } from 'react';
import {
  View,
  ScrollView,
} from 'react-native';
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
    }, {
      id: 4,
      name: 'towel',
      count: 1,
      unit_price: '¥ 100',
    }, {
      id: 5,
      name: 'glove',
      count: 1,
      unit_price: '¥ 200',
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
      <ScrollView contentContainerStyle={{ marginTop: 10 }} style={{ height: 250 }}>
        {items.map((item) => (
          <RentItem key={item.id} rent={item} />
        ))}
      </ScrollView>
    </Card>
  );
}

export default RentCard;
