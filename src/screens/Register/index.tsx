import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {postRegister} from '../../api';
import Button from './../../components/Button';
import Space from './../../components/Space';
import TextField from './../../components/TextField';

const RegisterScreen = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleOnClickLogin = () => {
    const params = {
      fullName,
      email,
      username,
      password,
    };

    postRegister(params)
      .then(_ => {
        // redirect to login screen
      })
      .catch(_ => {
        console.log('error');
      });
  };

  const handleRedirectToLogin = () => {
    console.log('redirect to login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>Daftar Sekarang!</Text>
        <TextField
          value={fullName}
          placeholder="Nama Lengkap"
          onChangeText={setFullName}
        />
        <Space height={16} />
        <TextField value={email} placeholder="Email" onChangeText={setEmail} />
        <Space height={16} />
        <TextField
          value={username}
          placeholder="Username"
          onChangeText={setUsername}
        />
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
          <Text style={styles.text}>Sudah punya akun? </Text>
          <TouchableOpacity activeOpacity={1} onPress={handleRedirectToLogin}>
            <Text style={styles.textLink}>Login sekarang</Text>
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

export default RegisterScreen;
