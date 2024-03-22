import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView, Platform, StatusBar, StyleSheet,
} from 'react-native';
import { RecoilRoot } from 'recoil';
import HistoryScreen from './src/screens/History/HistoryScreen';
import HomeScreen from './src/screens/Home/HomeScreen';
import QRScreen from './src/screens/QR/QRScreen';
import ReservationScreen from './src/screens/Reservation/ReservationScreen';
import SelectionTimeScreen from './src/screens/Reservation/SelectionTimeScreen';
import UserScreen from './src/screens/User/UserScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ReservationStack = createNativeStackNavigator();
const HistoryStack = createNativeStackNavigator();
const QRStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();

function App() {
  return (
    <RecoilRoot>
      <SafeAreaView style={styles.safeArea}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home">
              {() => (
                <HomeStack.Navigator>
                  <HomeStack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{ headerShown: false }}
                  />
                </HomeStack.Navigator>
              )}
            </Tab.Screen>
            <Tab.Screen name="Reservation">
              {() => (
                <ReservationStack.Navigator>
                  <ReservationStack.Screen
                    name="ReservationScreen"
                    component={ReservationScreen}
                    options={{ headerShown: false }}
                  />
                  <ReservationStack.Screen
                    name="SelectionTimeScreen"
                    component={SelectionTimeScreen}
                    options={{ headerShown: false }}
                  />
                </ReservationStack.Navigator>
              )}
            </Tab.Screen>
            <Tab.Screen name="History">
              {() => (
                <HistoryStack.Navigator>
                  <HistoryStack.Screen
                    name="HistoryScreen"
                    component={HistoryScreen}
                    options={{ headerShown: false }}
                  />
                </HistoryStack.Navigator>
              )}
            </Tab.Screen>
            <Tab.Screen name="QR">
              {() => (
                <QRStack.Navigator>
                  <QRStack.Screen
                    name="QRScreen"
                    component={QRScreen}
                    options={{ headerShown: false }}
                  />
                </QRStack.Navigator>
              )}
            </Tab.Screen>
            <Tab.Screen name="User">
              {() => (
                <UserStack.Navigator>
                  <UserStack.Screen
                    name="UserScreen"
                    component={UserScreen}
                    options={{ headerShown: false }}
                  />
                </UserStack.Navigator>
              )}
            </Tab.Screen>
          </Tab.Navigator>
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
