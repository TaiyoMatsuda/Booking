import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import HistoryScreen from '../screens/History/HistoryScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import QRScreen from '../screens/QR/QRScreen';
import TimeSelectionScreen from '../screens/Reservation/TimeSelectionScreen';
import ReservationScreen from '../screens/Reservation/ReservationScreen';
import UserScreen from '../screens/User/UserScreen';
import SelectionPlanScreen from '../screens/User/SelectionPlanScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ReservationStack = createNativeStackNavigator();
const HistoryStack = createNativeStackNavigator();
const QRStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();

function MainNavigation() {
  const getTabBarIcon = (routeName, focused, color, size) => {
    let iconName;
    switch (routeName) {
      case 'Home':
        iconName = focused ? 'home' : 'home-outline';
        break;
      case 'Reservation':
        iconName = focused ? 'golf' : 'golf-outline';
        break;
      case 'History':
        iconName = focused ? 'time' : 'time-outline';
        break;
      case 'QR':
        iconName = focused ? 'qr-code' : 'qr-code-outline';
        break;
      case 'User':
        iconName = focused ? 'person' : 'person-outline';
        break;
      default:
        iconName = focused ? 'person' : 'person-outline';
    }
    return <Icon name={iconName} size={size} color={color} />;
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => getTabBarIcon(route.name, focused, color, size),
        headerShown: false,
      })}
    >
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
            <UserStack.Screen
              name="SelectionPlanScreen"
              component={SelectionPlanScreen}
              options={{ headerShown: false }}
            />
          </UserStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default MainNavigation;
