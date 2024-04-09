import {
  Alert,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import {
  Divider,
  MD3Colors,
  IconButton,
} from 'react-native-paper';

export default function ReservationHistory({ reservation }) {
  const onPressOKButton = () => {
    Alert.alert(
      'キャンセルしますか？',
      '',
      [
        {
          text: '閉じる',
          onPress: () => console.log('閉じるをタップした時の挙動を書く'),
        },
        {
          text: 'キャンセル', onPress: () => console.log('キャンセルをタップした時の挙動を書く'),
        },
      ],
    );
  };

  return (
    <View>
      <Divider />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View>
          <Text style={styles.textLarge}>{reservation.place_name}</Text>
          <Text style={styles.textLarge}>{reservation.room_name}</Text>
        </View>
        <View>
          <Text style={styles.textLarge}>{reservation.work_out_day}</Text>
          <Text style={styles.textLarge}>{reservation.work_out_time}</Text>
        </View>
        <View>
          {
            reservation.is_cancel
              ? <IconButton icon="cancel" iconColor={MD3Colors.error50} size={40} onPress={onPressOKButton} />
              : <IconButton icon="check" size={40} />
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textLarge: {
    fontSize: 20,
  },
});
