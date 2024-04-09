import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Chip, RadioButton } from 'react-native-paper';

function SelectionPlan({ navigation }) {
  const [value, setValue] = useState('first');
  return (
    <View style={{ flex: 1 }}>
      <Text>User Screen in dir</Text>
      <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        <TouchableOpacity onPress={() => setValue('first')} style={styles.item}>
          <View style={styles.content}>
            <Text style={styles.title}>First Item</Text>
            <Text style={styles.detail}>10:00 AM - 2:00 PM</Text>
            <Text style={styles.price}>$100</Text>
          </View>
          <RadioButton value="first" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setValue('second')} style={styles.item}>
          <View style={styles.content}>
            <Text style={styles.title}>Second Item</Text>
            <Text style={styles.detail}>10:00 AM - 2:00 PM</Text>
            <Text style={styles.price}>$100</Text>
          </View>
          <RadioButton value="second" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setValue('third')} style={styles.item}>
          <View style={styles.content}>
            <Text style={styles.title}>Third Item</Text>
            <Text style={styles.detail}>10:00 AM - 2:00 PM</Text>
            <Text style={styles.price}>$100</Text>
          </View>
          <RadioButton value="third" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setValue('fourth')} style={styles.item}>
          <View style={styles.content}>
            <Text style={styles.title}>一時停止</Text>
          </View>
          <RadioButton value="fourth" />
        </TouchableOpacity>
      </RadioButton.Group>
      <View style={styles.container}>
        <Chip mode="outlined" onPress={() => navigation.goBack()}>
          キャンセル
        </Chip>
        <Chip mode="outlined" onPress={() => navigation.goBack()}>
          有効
        </Chip>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 14,
    color: '#666',
  },
  price: {
    fontSize: 14,
    color: '#333',
  },
});

export default SelectionPlan;
