import { useState } from 'react';
import { View } from 'react-native';
import { Card, Button, Text } from '@rneui/themed';
import NameInput from '../../components/User/NameInput';
import AddressInput from '../../components/User/AddressInput';
import PhoneInput from '../../components/User/PhoneInput';
import EmailInput from '../../components/User/EmailInput';

function UserScreen({ navigation }) {
  const [user] = useState({
    id: '1',
    name: '松田 太陽',
    phone_number: '07044160514',
    address: '大阪府大阪市福島区',
    email: 'test@example.com',
    subscription_type: 1,
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <View style={{ alignItems: 'left', marginHorizontal: 20 }}>
        <Text h2>ご契約情報</Text>
        <NameInput name={user.name} />
        <AddressInput address={user.address} />
        <PhoneInput phone={user.phone_number} />
        <EmailInput email={user.email} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Card>
          <Card.Title h4>ご契約プラン</Card.Title>
          <Card.Divider />
          <Text h2>プラン1. ¥1000</Text>
          <Text h2>残り時間: 10H</Text>
          <Button
            title='ご契約の変更'
            buttonStyle={{
              backgroundColor: 'blue',
              borderRadius: 3,
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 10,
            }}
            onPress={() =>
              navigation.navigate('SelectionPlanScreen', {
                subscription_type: user.subscription_type,
              })
            }
          />
        </Card>
      </View>
    </View>
  );
}

export default UserScreen;
