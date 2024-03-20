import { useState } from 'react';
import {
  SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet, Alert
} from 'react-native';
import {
  ExpandableCalendar, AgendaList, CalendarProvider,
} from 'react-native-calendars';
import TimeLine from '../../components/Reservation/TimeLine';

function ReservationScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TimeLine />
    </SafeAreaView>
  );
}

export default ReservationScreen;
