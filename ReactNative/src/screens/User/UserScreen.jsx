import { View } from 'react-native';
import { Card, Button, Text } from '@rneui/themed';

function UserScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'left', justifyContent: 'center' }}>
      <Text>User Screen in dir</Text>
      <View>
        <Text>・名前</Text>
        <Text>・TEL</Text>
        <Text>・住所</Text>
        <Text>・Email</Text>
      </View>
      <Card>
        <Card.Title>
          プラン
        </Card.Title>
        <Card.Divider />
        <Text h2>プラン1. ¥1000</Text>
        <Text h2>残り時間: 10H</Text>
        <Button
          title="プランの変更"
          buttonStyle={{
            backgroundColor: 'rgba(78, 116, 289, 1)',
            borderRadius: 3,
          }}
          containerStyle={{
            width: 200,
            marginHorizontal: 50,
            marginVertical: 10,
          }}
          onPress={() => navigation.navigate('SelectionPlanScreen')}
        />
      </Card>
    </View>
  );
}

export default UserScreen;
