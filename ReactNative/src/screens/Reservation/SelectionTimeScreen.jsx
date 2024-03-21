import { useState } from 'react';
import {
  SafeAreaView, View, Text, FlatList, TouchableOpacity, StyleSheet, Alert,
} from 'react-native';
import {
  ExpandableCalendar, AgendaList, CalendarProvider,
} from 'react-native-calendars';
import TimeLine from '../../components/Reservation/TimeLine';
import RoomSelect from '../../components/Reservation/RoomSelect';
import Button from '../../components/Common/Button';

function SelectionTimeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RoomSelect />
      <TimeLine />
      <Button
        label="OK"
      />
    </SafeAreaView>
  );
}

export default SelectionTimeScreen;
