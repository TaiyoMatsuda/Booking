import { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  StyleSheet, View, Text, TouchableOpacity, ScrollView,
} from 'react-native';
import { timeSlotsStatus } from '../../recoil/timeSlotsStatus';

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

function RoomColumn({ room, isSelected, onToggle }) {
  const items = generateTimeSlotsForRoom(room);
  return (
    <View style={styles.column}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.itemContainer,
            { backgroundColor: isSelected(item.id) ? '#3498db' : '#95a5a6' },
          ]}
          onPress={() => onToggle(item.id)}
        >
          <Text style={styles.itemName}>{room}</Text>
          <Text style={styles.itemName}>{item.time}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default function TimeLineGrid() {
  const setClear = useSetRecoilState(timeSlotsStatus);
  const isClear = useRecoilValue(timeSlotsStatus);
  const [selectedItems, setSelectedItems] = useState([]);
  const rooms = ['A', 'B', 'C', 'D', 'E'];

  const toggleSelection = (id) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(id)) {
        return prevSelectedItems.filter((itemId) => itemId !== id);
      }
      return [...prevSelectedItems, id];
    });
  };

  useEffect(() => {
    setSelectedItems([]);
    setClear(false);
  }, [isClear, setClear]);

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <ScrollView>
        <ScrollView horizontal style={styles.horizontalScroll}>
          {rooms.map((room) => (
            <RoomColumn
              key={room}
              room={room}
              isSelected={(itemId) => selectedItems.includes(itemId)}
              onToggle={toggleSelection}
            />
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  horizontalScroll: {
    flex: 1,
  },
  column: {
    margin: 5,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    padding: 10,
    height: 50,
    width: 200,
    marginVertical: 5,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
