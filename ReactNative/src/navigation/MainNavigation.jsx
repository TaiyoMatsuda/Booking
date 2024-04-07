import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HistoryScreen from '../screens/History/HistoryScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import QRScreen from '../screens/QR/QRScreen';
import TimeSelectionScreen from '../screens/Reservation/TimeSelectionScreen';
import ReservationScreen from '../screens/Reservation/ReservationScreen';
import UserScreen from '../screens/User/UserScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ReservationStack = createNativeStackNavigator();
const HistoryStack = createNativeStackNavigator();
const QRStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();

function MainNavigation() {
  return (
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
              name="TimeSelectionScreen"
              component={TimeSelectionScreen}
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
  );
}

export default MainNavigation;
