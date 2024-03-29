import { useEffect } from 'react';
import { Alert, View, StyleSheet } from 'react-native';
import { useSetRecoilState } from 'recoil';
import TopTabNavigation from '../../components/Reservation/TopTabNavigation';
import WideButton from '../../components/Common/WideButton';
import HalfWideButton from '../../components/Common/HalfWideButton';
import { timeSlotsStatus } from '../../recoil/timeSlotsStatus';

function SelectionTimeScreen({ navigation }) {
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
      <TopTabNavigation />
      <WideButton
        label="OK"
        onPress={onPressOKButton}
      />
      <View style={styles.container}>
        <HalfWideButton
          label="Clear"
          onPress={onPressClearButton}
        />
        <HalfWideButton
          label="Back"
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

export default SelectionTimeScreen;
