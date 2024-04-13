import { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  Button,
  Text,
  CheckBox,
  Card,
} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

const screenWidth = Dimensions.get('window').width;

function SelectionPlan({ navigation }) {
  const [selectedIndex, setIndex] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <Text h3>User Screen in dir</Text>
      <TouchableOpacity onPress={() => setIndex(0)}>
        <Card>
          <Text style={styles.title}>First Item</Text>
          <Text style={styles.detail}>10:00 AM - 2:00 PM</Text>
          <Text style={styles.price}>$100</Text>
          <Icon
            name={selectedIndex === 0 ? 'dot-circle-o' : 'circle-o'}
            size={24}
            color={selectedIndex === 0 ? 'blue' : 'grey'}
          />
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(1)}>
        <Card>
          <Text style={styles.title}>Second Item</Text>
          <Text style={styles.detail}>10:00 AM - 2:00 PM</Text>
          <Text style={styles.price}>$100</Text>
          <Icon
            name={selectedIndex === 1 ? 'dot-circle-o' : 'circle-o'}
            size={24}
            color={selectedIndex === 1 ? 'blue' : 'grey'}
          />
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(2)}>
        <Card>
          <Text style={styles.title}>Third Item</Text>
          <Text style={styles.detail}>10:00 AM - 2:00 PM</Text>
          <Text style={styles.price}>$100</Text>
          <Icon
            name={selectedIndex === 2 ? 'dot-circle-o' : 'circle-o'}
            size={24}
            color={selectedIndex === 2 ? 'blue' : 'grey'}
          />
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(3)}>
        <Card>
          <Text style={styles.title}>一時停止</Text>
          <Icon
            name={selectedIndex === 3 ? 'dot-circle-o' : 'circle-o'}
            size={24}
            color={selectedIndex === 3 ? 'blue' : 'grey'}
          />
        </Card>
      </TouchableOpacity>
      <View style={styles.container}>
        <Button
          title="キャンセル"
          type="outline"
          raised
          titleStyle={{ color: 'blue' }}
          buttonStyle={{
            backgroundColor: 'white',
            borderColor: 'blue',
          }}
          containerStyle={{
            width: screenWidth * 0.5,
          }}
          onPress={() => navigation.goBack()}
        />
        <Button
          title="有効"
          type="outline"
          raised
          titleStyle={{ color: 'blue' }}
          buttonStyle={{
            backgroundColor: 'white',
            borderColor: 'blue',
          }}
          containerStyle={{
            width: screenWidth * 0.5,
          }}
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
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
