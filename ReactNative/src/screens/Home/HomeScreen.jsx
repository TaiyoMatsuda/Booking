import { useState } from 'react';
import {
  Alert,
  View,
  StyleSheet,
} from 'react-native';
import {
  Chip,
  Card,
  IconButton,
  Icon,
  MD3Colors,
  Text,
} from 'react-native-paper';

function HomeScreen({ navigation }) {
  const [reservation] = useState(
    {
      id: '1',
      place_name: 'place name1',
      room_name: 'room name',
      work_out_day: '2023/12/12',
      work_out_time: '15:00 - 16:00',
      is_cancel: true,
    },
  );
  const userName = 'test';

  const onPressCancelButton = () => {
    Alert.alert(
      'キャンセルしますか？',
      '',
      [
        {
          text: '閉じる',
          onPress: () => console.log('閉じるをタップした時の挙動を書く'),
        },
        {
          text: 'キャンセル', onPress: () => console.log('キャンセルをタップした時の挙動を書く'),
        },
      ],
    );
  };

  return (
    <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
      <View style={styles.container}>
        <Text variant="headlineMedium">{`Hello, ${userName}!`}</Text>
        <Chip icon="logout" mode="outlined" onPress={() => console.log('Pressed')}>Log out</Chip>
      </View>
      <Card
        mode="outlined"
        style={{ alignItems: 'center', width: '80%' }}
        onPress={() => navigation.navigate('Reservation')}
      >
        <Card.Content>
          <Text variant="titleLarge">
            MAKE A RESERVATION
          </Text>
        </Card.Content>
      </Card>
      <Text variant="headlineMedium">次回予約</Text>
      <Card mode="contained">
        <Card.Content>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Text variant="titleLarge">{reservation.place_name}</Text>
              <Text variant="titleLarge">{reservation.room_name}</Text>
            </View>
            <View>
              <Text variant="titleLarge">{reservation.work_out_day}</Text>
              <Text variant="titleLarge">{reservation.work_out_time}</Text>
            </View>
            <View>
              <IconButton icon="cancel" iconColor={MD3Colors.error50} size={40} onPress={onPressCancelButton} />
            </View>
          </View>
        </Card.Content>
      </Card>
      <View style={styles.container}>
        <Card mode="outlined" onPress={() => navigation.navigate('History')}>
          <Card.Content style={{ alignItems: 'center' }}>
            <Text variant="titleLarge">履歴</Text>
            <Icon source="clock-outline" size={100} />
          </Card.Content>
        </Card>
        <Card mode="outlined" onPress={() => navigation.navigate('QR')}>
          <Card.Content style={{ alignItems: 'center' }}>
            <Text variant="titleLarge">QR</Text>
            <Icon source="qrcode" size={100} />
          </Card.Content>
        </Card>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default HomeScreen;
