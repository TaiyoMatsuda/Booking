// AppContent.js
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import {
  SafeAreaView, Platform, StyleSheet, StatusBar,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import signInStatus from './src/recoil/signInStatus';
import MainNavigation from './src/navigation/MainNavigation';
import AuthNavigation from './src/navigation/AuthNavigation';

function AppContent() {
  const isSignedIn = useRecoilValue(signInStatus);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkSignInStatus = async () => {
      try {
        const signedInStatus = await AsyncStorage.getItem('isSignedIn');
        if (signedInStatus === 'true') {
          setUser(true);
        } else {
          setUser(false);
        }
      } catch (error) {
        setUser(false);
      }
    };

    checkSignInStatus();
  }, []);

  useEffect(() => {
    setUser(isSignedIn);
  }, [isSignedIn]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        {user ? <MainNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default AppContent;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
