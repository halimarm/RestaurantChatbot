import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {postLogin} from '../../api';
import Button from './../../components/Button';
import Space from './../../components/Space';
import TextField from './../../components/TextField';

const LoginScreen = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleOnClickLogin = () => {
    const params = {
      email,
      password,
    };

    postLogin(params)
      .then(_ => {
        // save token from response
        // redirect to chat screen
      })
      .catch(_ => {
        console.log('error');
      });
  };

  const handleRedirectToRegister = () => {
    console.log('redirect to register');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>
          Selamat Datang di {'\n'}Restauran Steaky
        </Text>
        <TextField value={email} placeholder="Email" onChangeText={setEmail} />
        <Space height={16} />
        <TextField
          value={password}
          placeholder="Password"
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        <Space height={16} />
        <Button title="Login" onPress={handleOnClickLogin} />
        <Space height={12} />
        <View style={styles.footer}>
          <Text style={styles.text}>Tidak punya akun? </Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={handleRedirectToRegister}>
            <Text style={styles.textLink}>Daftar sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'column',
    gap: 12,
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 26,
  },
  text: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    fontSize: 14,
  },
  textLink: {
    color: '#2945FF',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
