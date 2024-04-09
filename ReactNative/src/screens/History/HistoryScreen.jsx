import { Text } from 'react-native';
import { Chip } from 'react-native-paper';
import ReservationHistoryList from '../../components/History/ReservationHistoryList';

function HistoryScreen({ navigation }) {
  return (
    <>
      <Text>Reservations</Text>
      <ReservationHistoryList />
      <Chip mode="outlined" onPress={() => navigation.navigate('Reservation')}>
        NEW RESERVATION
      </Chip>
    </>
  );
}

export default HistoryScreen;
