import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Left Icon */}
      <Image source={require('../../assets/chef-hat.png')} style={styles.topLeftIcon} />

      {/* Title */}
      <Text style={styles.title}>Christophell's Culinary Experience</Text>

      {/* Icon Above Credentials */}
      <Image source={require('../../assets/fork-knife.png')} style={styles.aboveCredentialsIcon} />

      {/* Login Form */}
      <View style={styles.form}>
        <TextInput placeholder="Username" style={styles.input} />
        <TextInput placeholder="Password" style={styles.input} secureTextEntry />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Create an Account */}
      <TouchableOpacity>
        <Text style={styles.createAccount}>Create an Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE5B4', // Peach color
    alignItems: 'center',
    justifyContent: 'center',
  },
  topLeftIcon: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  aboveCredentialsIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  form: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#FF8C00',
    padding: 10,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  forgotPassword: {
    marginTop: 10,
    color: '#0000FF',
  },
  createAccount: {
    marginTop: 10,
    color: '#0000FF',
  },
});

export default LoginScreen;
