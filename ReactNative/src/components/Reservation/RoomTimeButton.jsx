import {
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';

export default function RoomTimeButton({
  room, item, isSelected, onToggle,
}) {
  return (
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
  );
}

const styles = StyleSheet.create({
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
