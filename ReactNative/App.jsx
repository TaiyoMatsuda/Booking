import {
  SafeAreaView, Platform, StyleSheet,
} from 'react-native';
import { RecoilRoot, useRecoilValue, useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import signInStatus from './src/recoil/signInStatus';
import AppContent from './AppContext';

function App() {
  return (
    <RecoilRoot>
      <AppContent />
    </RecoilRoot>
  );
}
export default App;
