import { useRecoilState } from 'recoil';
import { StyleSheet, View } from 'react-native';
import RoomTimeButton from './RoomTimeButton';
import { selectedTimes } from '../../recoil/selectedTimes';

const generateTimeSlotsForRoom = (room) => {
  const slots = [];
  let timeSlotId = 1;
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const startTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      const endTimeHour = hour + (minute + 30 >= 60 ? 1 : 0);
      const endTimeMinute = (minute + 30) % 60;
      const formattedEndTime = `${String(endTimeHour).padStart(2, '0')}:${String(endTimeMinute).padStart(2, '0')}`;

      slots.push({
        key: `${timeSlotId}-${room}`,
        timeSlotId,
        room,
        startTime,
        endTime: formattedEndTime,
        isSelected: false,
      });
      timeSlotId++;
    }
  }
  return slots;
};

export default function RoomColumn({ room }) {
  const [selectedItems, setSelectedItems] = useRecoilState(selectedTimes);
  const items = generateTimeSlotsForRoom(room);

  const toggleSelection = (item) => {
    setSelectedItems((prevSelectedItems) => {
      const isAlreadySelected = prevSelectedItems.some((pre) => pre.key === item.key);

      if (isAlreadySelected) {
        return prevSelectedItems.filter((pre) => pre.key !== item.key);
      }
      return [...prevSelectedItems, item];
    });
  };

  return (
    <View style={styles.column}>
      {items.map((item) => {
        const isSelected = selectedItems.some((selectedItem) => selectedItem.key === item.key);
        return (
          <RoomTimeButton
            key={item.key}
            room={room}
            item={item}
            isSelected={isSelected}
            onToggle={toggleSelection}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    margin: 5,
  },
});
