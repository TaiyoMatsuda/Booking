import { useState } from 'react';
import {
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import {
  Button,
  Text,
} from '@rneui/themed';
import Subscription from '../../components/User/Subscription';

const screenWidth = Dimensions.get('window').width;

function SelectionPlan({ route, navigation }) {
  const [selectedIndex, setSelectedIndex] = useState(route.params.subscription_type);

  const handlePress = (id) => {
    setSelectedIndex(id);
  };

  const data = [
    {
      id: 1, title: 'First Item', time: '10:00 AM - 2:00 PM', price: '$100',
    },
    {
      id: 2, title: 'Second Item', time: '10:00 AM - 2:00 PM', price: '$100',
    },
    {
      id: 3, title: 'Third Item', time: '10:00 AM - 2:00 PM', price: '$100',
    },
    {
      id: 0, title: '一時停止', time: '', price: '',
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <Text h3>ご契約の変更</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Subscription
            item={item}
            onPress={() => handlePress(item.id)}
            isSelected={selectedIndex === item.id}
          />
        )}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Button
          title="キャンセル"
          type="outline"
          raised
          titleStyle={{ color: 'blue' }}
          buttonStyle={{
            backgroundColor: 'white',
            borderColor: 'blue',
          }}
          containerStyle={{
            width: screenWidth * 0.5,
          }}
          onPress={() => navigation.goBack()}
        />
        <Button
          title="有効"
          type="outline"
          raised
          titleStyle={{ color: 'blue' }}
          buttonStyle={{
            backgroundColor: 'white',
            borderColor: 'blue',
          }}
          containerStyle={{
            width: screenWidth * 0.5,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

export default SelectionPlan;
