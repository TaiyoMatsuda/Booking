import { memo } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import RoomColumn from './RoomColumn';

const RoomColumnMemo = memo(RoomColumn);

export default function TimeLineGrid() {
  const rooms = ['A', 'B', 'C', 'D', 'E'];

  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <ScrollView>
        <ScrollView horizontal style={styles.horizontalScroll}>
          {rooms.map(room => (
            <RoomColumnMemo key={room} room={room} />
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
