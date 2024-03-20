import { useState } from 'react';
import {
  SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet, Alert
} from 'react-native';
import {
  ExpandableCalendar, AgendaList, CalendarProvider,
} from 'react-native-calendars';
import TimeLine from '../../components/Reservation/TimeLine';
import RoomSelect from '../../components/Reservation/RoomSelect';

function ReservationScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RoomSelect />
      <TimeLine />
    </SafeAreaView>
  );
}

export default ReservationScreen;
