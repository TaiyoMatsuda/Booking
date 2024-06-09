import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Card, Text, Image } from '@rneui/themed';
import Counter from './Counter';

function RentItem({ rent }) {
  return (
    <Card>
      <View style={styles.container}>
        <Image
          source={rent.image_path}
          style={styles.image}
          PlaceholderContent={<ActivityIndicator />}
        />
        <View style={styles.textContainer}>
          <Text h4>{rent.name}</Text>
          <Text h4>{rent.unit_price}</Text>
        </View>
        <Counter />
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 50,
    height: 50,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
});

export default RentItem;
