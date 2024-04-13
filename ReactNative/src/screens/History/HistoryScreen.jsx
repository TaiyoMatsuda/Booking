import { Button, Text } from '@rneui/themed';
import ReservationHistoryList from '../../components/History/ReservationHistoryList';

function HistoryScreen({ navigation }) {
  return (
    <>
      <Text h2>履歴</Text>
      <ReservationHistoryList />
      <Button
        title="新規予約"
        type="outline"
        raised
        titleStyle={{ color: 'blue' }}
        buttonStyle={{
          backgroundColor: 'white',
          borderColor: 'blue',
        }}
        onPress={() => navigation.navigate('Reservation')}
      />
    </>
  );
}

export default HistoryScreen;
