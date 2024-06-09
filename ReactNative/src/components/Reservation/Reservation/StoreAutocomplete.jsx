import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSetRecoilState, useRecoilState } from 'recoil';
import { Dropdown } from 'react-native-element-dropdown';
import { selectedTimes } from '../../../recoil/selectedTimes';
import { tmpDecisionRoomTime } from '../../../recoil/tmpDecisionRoomTime';
import { tmpBookedStore } from '../../../recoil/tmpBookedStore';

const data = [
  { label: 'Item 1', value: '1' },
  { label: 'Item 2', value: '2' },
  { label: 'Item 3', value: '3' },
  { label: 'Item 4', value: '4' },
  { label: 'Item 5', value: '5' },
  { label: 'Item 6', value: '6' },
  { label: 'Item 7', value: '7' },
  { label: 'Item 8', value: '8' },
];

function StoreAutocomplete() {
  const [bookedStore, setBookedStore] = useRecoilState(tmpBookedStore);
  const [isFocus, setIsFocus] = useState(false);
  const setSelectedItems = useSetRecoilState(selectedTimes);
  const setTmpDecisionRoomTime = useSetRecoilState(tmpDecisionRoomTime);

  const changeStore = item => {
    if (item.value !== bookedStore) {
      setBookedStore(item.value);
      setSelectedItems([]);
      setTmpDecisionRoomTime([]);
    }
    setIsFocus(false);
  };

  return (
    <View style={styles.container}>
      <Dropdown
        style={[styles.dropdown, { borderColor: 'blue' }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={data}
        search
        maxHeight={300}
        labelField='label'
        valueField='value'
        placeholder={!isFocus ? '店舗選択' : ''}
        searchPlaceholder='検索...'
        value={bookedStore}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={changeStore}
      />
    </View>
  );
}

export default StoreAutocomplete;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginVertical: 10,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
