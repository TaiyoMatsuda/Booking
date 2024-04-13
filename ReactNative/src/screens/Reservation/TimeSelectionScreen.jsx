import {
  Alert,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useSetRecoilState } from 'recoil';
import { Button } from '@rneui/themed';
import TimeLineGrid from '../../components/Reservation/TimeLineGrid';
import { timeSlotsStatus } from '../../recoil/timeSlotsStatus';

const screenWidth = Dimensions.get('window').width;

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
      <Button
        title="OK"
        type="outline"
        raised
        titleStyle={{ color: 'blue' }}
        buttonStyle={{
          backgroundColor: 'white',
          borderColor: 'blue',
        }}
        onPress={onPressOKButton}
      />
      <View style={styles.container}>
        <Button
          title="クリア"
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
          onPress={onPressClearButton}
        />
        <Button
          title="Back"
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
});

export default TimeSelectionScreen;
