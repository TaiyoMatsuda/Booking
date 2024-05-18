import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Button, Text } from '@rneui/themed';
import DayForm from '../../components/Reservation/DayForm';
import RoomForm from '../../components/Reservation/RoomForm';
import RentCard from '../../components/Reservation/RentCard';
import PlaceForm from '../../components/Reservation/PlaceForm';

const screenWidth = Dimensions.get('window').width;

function ReservationScreen({ navigation }) {
  return (
    <>
      <View style={{ alignItems: 'left', marginHorizontal: 20 }}>
        <Text h2>新規予約</Text>
      </View>
      <ScrollView>
        <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
          <View>
            <PlaceForm />
            <DayForm />
            <RoomForm
              onPress={() => navigation.navigate('TimeSelectionScreen')}
            />
            <RentCard />
          </View>
        </View>
      </ScrollView>
      <View style={styles.container}>
        <Button
          title='キャンセル'
          type='outline'
          titleStyle={{ color: 'blue' }}
          buttonStyle={{
            backgroundColor: 'white',
            borderColor: 'blue',
          }}
          containerStyle={{
            width: screenWidth * 0.5,
          }}
        />
        <Button
          title='有効'
          type='outline'
          titleStyle={{ color: 'blue' }}
          buttonStyle={{
            backgroundColor: 'white',
            borderColor: 'blue',
          }}
          containerStyle={{
            width: screenWidth * 0.5,
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default ReservationScreen;
