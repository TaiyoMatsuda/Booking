import { StyleSheet, View } from 'react-native';
import RoomTimeButton from './RoomTimeButton';

const generateTimeSlotsForRoom = (room) => {
  const slots = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      slots.push({
        id: `${time}-${room}`, time, room, isSelected: false,
      });
    }
  }
  return slots;
};

export default function RoomColumn({ room, isSelected, onToggle }) {
  const items = generateTimeSlotsForRoom(room);
  return (
    <View style={styles.column}>
      {items.map((item) => (
        <RoomTimeButton
          key={item.id}
          room={room}
          item={item}
          isSelected={isSelected}
          onToggle={onToggle}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  column: {
    margin: 5,
  },
});
