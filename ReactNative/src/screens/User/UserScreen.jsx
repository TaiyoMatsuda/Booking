import { View, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';

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
        <Card.Title title="プラン" />
        <Card.Content>
          <Text>プラン1. ¥1000</Text>
          <Text>残り時間: 10H</Text>
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('Home')}>
            プランの変更
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
}

export default UserScreen;
