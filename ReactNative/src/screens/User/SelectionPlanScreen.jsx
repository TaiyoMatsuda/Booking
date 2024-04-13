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
          <CheckBox
            title="Sub"
            checked={selectedIndex === 0}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => setIndex(0)}
          />
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(1)}>
        <Card>
          <Text style={styles.title}>Second Item</Text>
          <Text style={styles.detail}>10:00 AM - 2:00 PM</Text>
          <Text style={styles.price}>$100</Text>
          <CheckBox
            title="Sub"
            checked={selectedIndex === 1}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => setIndex(1)}
          />
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(2)}>
        <Card>
          <Text style={styles.title}>Third Item</Text>
          <Text style={styles.detail}>10:00 AM - 2:00 PM</Text>
          <Text style={styles.price}>$100</Text>
          <CheckBox
            title="Sub"
            checked={selectedIndex === 2}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => setIndex(2)}
          />
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIndex(3)}>
        <Card>
          <CheckBox
            title="一時停止"
            checked={selectedIndex === 3}
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            onPress={() => setIndex(3)}
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
