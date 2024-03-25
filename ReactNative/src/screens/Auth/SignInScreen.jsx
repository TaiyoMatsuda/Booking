import { useState } from 'react';
import {
  SafeAreaView, View, Text,
  TextInput, StyleSheet,
} from 'react-native';
import { useSetRecoilState } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import signInStatus from '../../recoil/signInStatus';
import HalfWideButton from '../../components/Common/HalfWideButton';

export default function SignInScreen() {
  const setSignInStatus = useSetRecoilState(signInStatus);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logInWithEmailAndPassword = async () => {
    await AsyncStorage.setItem('isSignedIn', JSON.stringify(true));
    setSignInStatus(true);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Sign In</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          secureTextEntry
          placeholder="Password"
          textContentType="password"
        />
        <HalfWideButton
          label="Sign In"
          onPress={() => {
            logInWithEmailAndPassword();
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16,
  },
});
