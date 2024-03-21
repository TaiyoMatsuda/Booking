import { useState } from 'react';
import { View } from 'react-native';
import {
  ExpandableCalendar, AgendaList, CalendarProvider,
} from 'react-native-calendars';
import TopTabNavigation from '../../components/Reservation/TopTabNavigation';
import Button from '../../components/Common/Button';

function SelectionTimeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <TopTabNavigation />
      <Button
        label="OK"
      />
    </View>
  );
}

export default SelectionTimeScreen;
