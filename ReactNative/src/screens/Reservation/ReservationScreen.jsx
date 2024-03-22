import { useState } from 'react';
import {
  SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet, Alert,
} from 'react-native';
import {
  ExpandableCalendar, AgendaList, CalendarProvider,
} from 'react-native-calendars';
import TimeLine from '../../components/Reservation/TimeLine';
import RoomSelect from '../../components/Reservation/RoomSelect';
import WideButton from '../../components/Common/WideButton';

function ReservationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Reservation Screen in dir</Text>
      <WideButton
        label="Go to Time Selection"
        onPress={() => navigation.navigate('SelectionTimeScreen')}
      />
    </View>
  );
}

export default ReservationScreen;
