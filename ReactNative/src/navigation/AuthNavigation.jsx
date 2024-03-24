import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/Auth/SignInScreen';

const Stack = createNativeStackNavigator();

function StackGroup() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name="SignInScreen"
        options={{ headerShown: false }}
        component={SignInScreen}
      />
    </Stack.Navigator>
  );
}

function AuthNavigation() {
  return (
    <StackGroup />
  );
}

export default AuthNavigation;
