import { useState, useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  StyleSheet, View, ScrollView,
} from 'react-native';
import { timeSlotsStatus } from '../../recoil/timeSlotsStatus';
import RoomColumn from './RoomColumn';

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
