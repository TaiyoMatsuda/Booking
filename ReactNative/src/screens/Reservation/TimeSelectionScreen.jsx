import { useEffect } from 'react';
import { Alert, View, StyleSheet, Dimensions } from 'react-native';
import { useRecoilState } from 'recoil';
import { Button } from '@rneui/themed';
import TimeLineGrid from '../../components/Reservation/TimeLineGrid';
import { timeSlotsStatus } from '../../recoil/timeSlotsStatus';
import { selectedTimes } from '../../recoil/selectedTimes';

const screenWidth = Dimensions.get('window').width;

function TimeSelectionScreen({ navigation }) {
  const [isClear, setClear] = useRecoilState(timeSlotsStatus);
  const [selectedItems, setSelectedItems] = useRecoilState(selectedTimes);

  useEffect(() => {
    setSelectedItems([]);
    setClear(false);
  }, [isClear, setClear]);

  const onPressOKButton = () => {
    Alert.alert('アラートを出しました', 'テキストテキストテキストテキスト', [
      {
        text: 'Cancel',
        onPress: () =>
          console.log('アラートのcancelをタップした時の挙動を書く'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: onPressOk,
      },
    ]);
  };

  const onPressOk = () => {
    console.log('アラートのOK_onPressOk:' + JSON.stringify(selectedItems));
    setSelectedItems([]);
  };

  const onPressClearButton = () => {
    setClear(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <TimeLineGrid />
      <Button
        title='OK'
        type='outline'
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
          title='クリア'
          type='outline'
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
          title='Back'
          type='outline'
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
