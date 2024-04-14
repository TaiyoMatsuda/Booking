import {
  Alert,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Divider } from '@rneui/themed';
import Icon from 'react-native-vector-icons/AntDesign';
import CloseButton from '../Common/CloseButton';

export default function ReservationHistory({ reservation }) {
  const onPressCancelButton = () => {
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

  const margin = {
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    marginLeft: 0,
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
              ? <CloseButton size={35} margin={margin} onPress={onPressCancelButton} />
              : <Icon name="check" size={40} color="green" />
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
