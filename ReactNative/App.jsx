import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ReservationScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Reservation Screen</Text>
    </View>
  );
}

function HistoryScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>History Screen</Text>
    </View>
  );
}

function QRScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>QR Screen</Text>
    </View>
  );
}

function UserScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>User Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const ReservationStack = createNativeStackNavigator();
const HistoryStack = createNativeStackNavigator();
const QRStack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home">
          {() => (
            <HomeStack.Navigator>
              <HomeStack.Screen name="Home" component={HomeScreen} />
            </HomeStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="Reservation">
          {() => (
            <ReservationStack.Navigator>
              <ReservationStack.Screen
                name="Reservation"
                component={ReservationScreen}
              />
            </ReservationStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="History">
          {() => (
            <HistoryStack.Navigator>
              <HistoryStack.Screen name="History" component={HistoryScreen} />
            </HistoryStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="QR">
          {() => (
            <QRStack.Navigator>
              <QRStack.Screen name="QR" component={QRScreen} />
            </QRStack.Navigator>
          )}
        </Tab.Screen>
        <Tab.Screen name="User">
          {() => (
            <UserStack.Navigator>
              <UserStack.Screen name="User" component={UserScreen} />
            </UserStack.Navigator>
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
