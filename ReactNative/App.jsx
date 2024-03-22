import { NavigationContainer } from '@react-navigation/native';
import {
  SafeAreaView, Platform, StatusBar, StyleSheet,
} from 'react-native';
import { RecoilRoot } from 'recoil';
import MainNavigation from './src/navigation/MainNavigation';

function App() {
  return (
    <RecoilRoot>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </RecoilRoot>
  );
}
export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
