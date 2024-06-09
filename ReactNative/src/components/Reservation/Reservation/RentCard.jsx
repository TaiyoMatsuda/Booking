import { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Card, Text } from '@rneui/themed';
import RentItem from './RentItem';
import driver from '../../../img/driver.webp';
import iron from '../../../img/iron.webp';
import shirt from '../../../img/shirt.webp';
import towel from '../../../img/towel.webp';
import glove from '../../../img/glove.webp';

function RentCard() {
  const [items] = useState([
    {
      id: 1,
      name: 'ドライバー',
      unit_price: '¥ 500',
      image_path: driver,
    },
    {
      id: 2,
      name: 'アイアン',
      unit_price: '¥ 600',
      image_path: iron,
    },
    {
      id: 3,
      name: 'シャツ',
      unit_price: '¥ 300',
      image_path: shirt,
    },
    {
      id: 4,
      name: 'タオル',
      unit_price: '¥ 100',
      image_path: towel,
    },
    {
      id: 5,
      name: 'グローブ',
      unit_price: '¥ 200',
      image_path: glove,
    },
  ]);

  return (
    <Card>
      <View style={{ flexDirection: 'row' }}>
        <Text h4>レンタル:</Text>
      </View>
      <ScrollView
        contentContainerStyle={{ marginTop: 10 }}
        style={{ height: 350 }}
      >
        {items.map(item => (
          <RentItem key={item.id} rent={item} />
        ))}
      </ScrollView>
    </Card>
  );
}

export default RentCard;
