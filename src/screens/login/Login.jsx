import { useContext, useEffect, useState } from 'react';
import {
  BackHandler,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Button from '../../components/button/Button';
import { StatusBarWrapper } from '../../components/statusBarWrapper/StatusBarWrapper';
import { Formik } from 'formik';
import loginValidation from '../../utility/validations/loginValidation';
import { loginUser } from '../../api/authApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../../context_api/AppContext';

const Login = ({ navigation }) => {

  const { setLoginStatus, setUserDetails } = useContext(AppContext);
  const [login, setLogin] = useState(true)

  /**
   * Method to handle user login
   * @param {*} values 
   */
  const handleLogin = async (values, setErrors) => {
    const { email, password } = values;
    const response = await loginUser({ email, password });
    if (response?.data?.data && response?.data?.status === 1) {
      // setLoader(false);
      setUserDetails(response?.data?.data);
      setLoginStatus(true);
      await AsyncStorage.setItem("login", JSON.stringify(response.data.data));
      await AsyncStorage.setItem("token", JSON.stringify(response.data.tokens));
      navigation.navigate('HomeScreen');
    } else {
      const errors = {};
      errors.password = "Incorrect email or password";
      setErrors(errors);
      setLoginStatus(false);
    }
  };

  //stop back press from login screen
  useEffect(() => {

    const disableBackButton = () => {
      return true; // Disable back button
    };

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
  }, [navigation])

  return (
    <StatusBarWrapper backgroundColor="#002D63" barStyle="light-content">
      <View style={styles.container}>
        {/* <View style={styles.headerView}>
          <Text style={styles.headerText}>Login</Text>
        </View> */}
        <View style={styles.pageContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Formik
            initialValues={{email: 'Qwert10@yopmail.com', password: 'Qwer@1234'}}
            onSubmit={(values, { setErrors }) => {
              handleLogin(values, setErrors)
              console.log(values);
            }}
            validationSchema={loginValidation}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
            }) => (
              <>
                <Text style={styles.subHeaderText}>Username or Email</Text>
                <TextInput
                  style={[styles.inputBox, touched.email && errors.email ? styles.errorInput : null]}
                  placeholder="example@example.com"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
                {touched.email && errors.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}
                <Text style={styles.subHeaderText}>Password</Text>
                <TextInput
                  style={[styles.inputBox, touched.password && errors.password ? styles.errorInput : null]}
                  placeholder="********"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {touched.password && errors.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
                <TouchableOpacity
                  style={styles.forgotPasswordContainer}
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <Text style={styles.forgotPasswordText}>
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
                <Button label="Log In" onPress={handleSubmit} width={178} />
              </>
            )}
          </Formik>
          <View style={styles.signUpContainer}>
            <Text style={styles.noAccountText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </StatusBarWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002D63',
    paddingHorizontal: 20,
  },
  headerView: {
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    color: '#20BF55',
    fontSize: 20,
    fontWeight: 'bold',
  },
  innerContainer: {
    flex: 1,
  },
  pageContainer: {
    flex: 1,
    backgroundColor: '#002D63',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  subHeaderText: {
    width: '100%',
    color: 'white',
    fontSize: 18,
    fontWeight: 'medium',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  inputBox: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    height: 45,
  },
  forgotPasswordContainer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'medium',
  },
  signUpContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
  },
  noAccountText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'light',
  },
  signUpText: {
    color: '#E2F163',
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  errorInput: {
    borderColor: 'red',
  },
});

export default Login;
