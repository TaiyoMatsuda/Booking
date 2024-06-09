import { NavigationContainer } from '@react-navigation/native';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { useState, useEffect } from 'react';
import { SafeAreaView, Platform, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

import AsyncStorage from '@react-native-async-storage/async-storage';
import signInStatus from './src/recoil/signInStatus';
import MainNavigation from './src/navigation/MainNavigation';
import AuthNavigation from './src/navigation/AuthNavigation';
import LaunchScreen from './src/screens/Auth/LaunchScreen';

SplashScreen.preventAutoHideAsync();

function AppContent() {
  const isSignedIn = useRecoilValue(signInStatus);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSignInStatus = async () => {
      try {
        console.log(
          'checkSignInStatus-satrt:isSignedIn' + JSON.stringify(isSignedIn),
        );
        const signedInStatus = await AsyncStorage.getItem('isSignedIn');
        console.log(
          'checkSignInStatus-end:signedInStatus' +
            JSON.stringify(signedInStatus),
        );

        if (signedInStatus === 'true') {
          setUser(true);
        } else {
          setUser(false);
        }

        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (error) {
        setUser(false);
      } finally {
        //setLoading(false);
        SplashScreen.hideAsync();
      }
    };

    checkSignInStatus();
  }, []);

  useEffect(() => {
    console.log('useEffect:' + JSON.stringify(isSignedIn));
    setUser(isSignedIn);
  }, [isSignedIn]);

  // if (loading) {
  //   return <LaunchScreen />;
  // }

  return (
    <SafeAreaView style={styles.safeArea}>
      <NavigationContainer>
        {user ? <MainNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </SafeAreaView>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <AppContent />
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
