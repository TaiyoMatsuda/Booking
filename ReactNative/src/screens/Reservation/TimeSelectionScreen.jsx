import { useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { Button } from '@rneui/themed';
import TimeLineGrid from '../../components/Reservation/TimeSelection/TimeLineGrid';
import { timeSlotsStatus } from '../../recoil/timeSlotsStatus';
import { selectedTimes } from '../../recoil/selectedTimes';

import TmpDecisionRoomTimeButton from '../../components/Reservation/TimeSelection/TmpDecisionRoomTimeButton';

const screenWidth = Dimensions.get('window').width;

function TimeSelectionScreen({ navigation }) {
  const [isClear, setClear] = useRecoilState(timeSlotsStatus);
  const setSelectedItems = useSetRecoilState(selectedTimes);

  useEffect(() => {
    if (isClear) {
      setSelectedItems([]);
      setClear(false);
    }
  }, [isClear, setClear]);

  const onPressClearButton = () => {
    setClear(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <TimeLineGrid />
      <TmpDecisionRoomTimeButton navigation={navigation} />
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
          title='戻る'
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
