import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBarWrapper } from '../../components/statusBarWrapper/StatusBarWrapper';
import Button from '../../components/button/Button';
import InputField from '../../components/inputField/customeInputField';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Disable back button on the login screen
  useEffect(() => {
    const disableBackButton = () => true;

    const focusListener = navigation.addListener('focus', () => {
      BackHandler.addEventListener('hardwareBackPress', disableBackButton);
    });

    const blurListener = navigation.addListener('blur', () => {
      BackHandler.removeEventListener('hardwareBackPress', disableBackButton);
    });

    return () => {
      focusListener();
      blurListener();
    };
  }, [navigation]);

  return (
    <StatusBarWrapper backgroundColor="#1A1D2A" barStyle="light-content">
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.subHeaderText}>Log in to your account</Text>

        <View style={styles.formContainer}>
          <InputField
            placeholder="Username or Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            style={styles.inputField}
          />
          <InputField
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.inputField}
          />

          <TouchableOpacity
            style={styles.forgotPasswordContainer}
            onPress={() => navigation.navigate('ForgotPassword')}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>

          <Button
            label="Log In"
            onPress={() => navigation.navigate('Onboarding')}
            width="100%"
            style={styles.loginButton}
          />
        </View>

        <View style={styles.footerContainer}>
          <Text style={styles.noAccountText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </StatusBarWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1D2A',
    padding: 20,
    justifyContent: 'center',
  },
  welcomeText: {
    color: '#E2F163',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subHeaderText: {
    color: '#CCCCCC',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
  formContainer: {
    backgroundColor: '#2C2F3F',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  inputField: {
    marginBottom: 20,
    backgroundColor: '#3A3D50',
    borderRadius: 10,
    color: '#FFFFFF',
    padding: 10,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#E2F163',
    fontSize: 14,
  },
  loginButton: {
    marginTop: 10,
    backgroundColor: '#E2F163',
    borderRadius: 10,
  },
  footerContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  noAccountText: {
    color: '#CCCCCC',
    fontSize: 14,
  },
  signUpText: {
    color: '#E2F163',
    fontWeight: 'bold',
  },
});

export default Login;
