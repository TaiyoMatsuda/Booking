import { useState } from 'react';
import {
  Text, FlatList, TouchableOpacity, StyleSheet, Button,
} from 'react-native';

const createTimeSlots = () => {
  const slots = [];
  for (let i = 0; i < 24 * 2; i++) {
    const hour = Math.floor(i / 2);
    const minute = i % 2 === 0 ? '00' : '30';
    slots.push({ id: i, time: `${hour}:${minute}`, isSelected: false });
  }
  return slots;

};

function TimeLine() {
  const [timeSlots, setTimeSlots] = useState(createTimeSlots());

  const toggleSelection = (index) => {
    const updatedSlots = timeSlots.map((slot, i) => {
      if (i === index) {
        return { ...slot, isSelected: !slot.isSelected };
      }
      return slot;
    });
    setTimeSlots(updatedSlots);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      onPress={() => toggleSelection(index)}
      style={[
        styles.slot,
        item.isSelected && styles.selectedSlot,
      ]}
    >
      <Text style={styles.text}>{item.time}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={timeSlots}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  slot: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  selectedSlot: {
    backgroundColor: '#add8e6',
  },
  text: {
    fontSize: 16,
  },
});

export default TimeLine;
