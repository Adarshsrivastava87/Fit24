import React, { useEffect, useRef, useState } from 'react';
import {
  Animated,
  BackHandler,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { StatusBarWrapper } from '../../components/statusBarWrapper/StatusBarWrapper';
import Button from '../../components/button/Button';
import InputField from '../../components/inputField/customeInputField';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showAlertBox } from '../../utility/validations/Alert';
const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const animation = useRef(new Animated.Value(0)).current
const startAnimation =()=>{
  console.log("check")
  Animated.spring(animation,{
    toValue:1,
useNativeDriver:true

  }).start()
}
  // Disable back button on the login screen
  useEffect(() => {
    const disableBackButton = () => true;

    const focusListener = navigation.addListener('focus', () => {
      BackHandler.addEventListener('hardwareBackPress', disableBackButton);
    });

    const blurListener = navigation.addListener('blur', () => {
      BackHandler.removeEventListener('hardwareBackPress', disableBackButton);
    });
    setTimeout(startAnimation,800)

    return () => {
      focusListener();
      blurListener();
    };
  }, [navigation]);


  check =async ()=>{
   await AsyncStorage.setItem("isOnboard",false)
  };

  const validateCredentials = () => {
    const validEmail = "Test@12345";
    const validPassword = "test@12345";
  
    if (email === validEmail && password === validPassword) {
      return navigation.navigate('Onboarding');
    } else {
     return navigation.navigate('HomeScreen');
     // return showAlertBox("invalid","invalid username/password");
    }
  };
  return (
    <StatusBarWrapper backgroundColor="#1A1D2A" barStyle="light-content">
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome Back!</Text>
        <Text style={styles.subHeaderText}>Log in to your account</Text>

        <Animated.View style={[styles.formContainer,{transform:[{translateY:animation.interpolate({inputRange:[0,1],outputRange:[300,0]})}]}]}>
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
            onPress={() =>
              validateCredentials()
             }
            
            width="100%"
            style={styles.loginButton}
          />
        </Animated.View>

        <View style={styles.footerContainer}>
          <Text style={styles.noAccountText}>Don't have an account? </Text>
          <TouchableOpacity onPress={()=>{
            startAnimation()
           // navigation.navigate("SignUp")
            }
            }>
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
