import { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  Text, FlatList, TouchableOpacity, StyleSheet,
} from 'react-native';
import { timeSlotsStatus } from '../../recoil/timeSlotsStatus';

const createTimeSlots = () => Array
  .from({ length: 24 * 2 }, (_, index) => {
    const hour = String(Math.floor(index / 2)).padStart(2, '0');
    const minute = index % 2 === 0 ? '00' : '30';
    return { id: index, time: `${hour}:${minute}`, isSelected: false };
  });

function TimeLine() {
  const setClear = useSetRecoilState(timeSlotsStatus);
  const isClear = useRecoilValue(timeSlotsStatus);
  const [timeSlots, setTimeSlots] = useState(createTimeSlots());

  useEffect(() => {
    const updatedSlots = timeSlots.map((slot) => ({
      ...slot,
      isSelected: false,
    }));
    setTimeSlots(updatedSlots);
    setClear(false);
  }, [isClear, setClear]);

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
