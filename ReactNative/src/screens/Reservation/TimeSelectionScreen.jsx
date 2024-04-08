import { Alert, View, StyleSheet } from 'react-native';
import { useSetRecoilState } from 'recoil';
import { Chip } from 'react-native-paper';
import TimeLineGrid from '../../components/Reservation/TimeLineGrid';
import { timeSlotsStatus } from '../../recoil/timeSlotsStatus';

function TimeSelectionScreen({ navigation }) {
  const setClear = useSetRecoilState(timeSlotsStatus);
  const onPressOKButton = () => {
    Alert.alert(
      'アラートを出しました',
      'テキストテキストテキストテキスト',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('アラートのcancelをタップした時の挙動を書く'),
          style: 'cancel',
        },
        {
          text: 'OK', onPress: () => console.log('アラートのOKをタップした時の挙動を書く'),
        },
      ],
    );
  };

  const onPressClearButton = () => {
    setClear(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <TimeLineGrid />
      <Chip mode="outlined" onPress={onPressOKButton}>
        OK
      </Chip>
      <View style={styles.container}>
        <Chip mode="outlined" onPress={onPressClearButton}>
          Clear
        </Chip>
        <Chip mode="outlined" onPress={() => navigation.goBack()}>
          Back
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
});

export default TimeSelectionScreen;
