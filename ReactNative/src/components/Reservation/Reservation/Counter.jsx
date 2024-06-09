import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from '@rneui/themed';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Button
        title='-'
        onPress={() => setCount(count - 1)}
        buttonStyle={styles.button}
        disabled={count === 0}
      />
      <Text style={styles.count}>{count}</Text>
      <Button
        title='+'
        onPress={() => setCount(count + 1)}
        buttonStyle={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  count: {
    fontSize: 20,
    marginHorizontal: 10,
  },
});

export default Counter;
