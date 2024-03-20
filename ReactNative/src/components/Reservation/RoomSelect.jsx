import { useState } from 'react';
import {
  View, StyleSheet, Button,
} from 'react-native';

function RoomSelect() {
  const [selectedRoom, setSelectedRoom] = useState('A');

  const rooms = ['A', 'B', 'C', 'D', 'E'];
  const renderRoomButtons = () => (
    rooms.map((room) => (
      <Button
        key={room}
        title={`Room ${room}`}
        onPress={() => setSelectedRoom(room)}
        color={selectedRoom === room ? 'blue' : 'grey'}
      />
    ))
  );

  return (
    <View style={styles.roomContainer}>{renderRoomButtons()}</View>
  );
}

const styles = StyleSheet.create({
  roomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});

export default RoomSelect;
