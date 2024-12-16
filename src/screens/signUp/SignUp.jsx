import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import {useContext, useEffect, useState} from 'react';
import Button from '../../components/button/Button';
import {StatusBarWrapper} from '../../components/statusBarWrapper/StatusBarWrapper';
import { Formik } from 'formik';
import signUpValidation from '../../utility/validations/signupValidation';
import AsyncStorage from '@react-native-async-storage/async-storage';



const SignUp = ({navigation}) => {
  const { setLoginStatus, setUserDetails } = useContext();
  const onPress = async (values) => {
    const name = values.fullName.split(" ");
    const data = {
      firstName: name[0],
      lastName: name[1],
      email: values?.email,
      password: values?.password,
    };
    const response = await registerUser(data);
    if(response?.data?.data && response?.data?.status === 1) {
      // setLoader(false);
      setUserDetails(response?.data?.data);
      setLoginStatus(true);
      await AsyncStorage.setItem("login", JSON.stringify(response.data.data));
      await AsyncStorage.setItem("token", JSON.stringify(response.data.tokens));
      navigation.navigate('SetUp');  
    } else {
      setLoginStatus(false);
    }
  };

  return (
    <StatusBarWrapper backgroundColor="#002D63" barStyle="light-content">
      <View style={styles.container}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>Create Account</Text>
        </View>
        <View style={styles.pageContainer}>
          <Text style={styles.startText}>Let's Start</Text>
          <Formik
            initialValues={{
              fullName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={values => {
              console.log(values);
              onPress(values)
              // alert('Form Submitted');
            }}
            validationSchema={signUpValidation}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              values,
              errors,
              touched,
            }) => (
              <>
                <Text style={styles.subHeaderText}>Full Name</Text>
                <TextInput
                  style={styles.inputBox}
                  placeholder="Full Name"
                  onChangeText={handleChange('fullName')}
                  onBlur={handleBlur('fullName')}
                  value={values.fullName}
                />
                {touched.fullName && errors.fullName && (
                  <Text style={styles.error}>{errors.fullName}</Text>
                )}
                <Text style={styles.subHeaderText}>Email</Text>
                <TextInput
                  style={styles.inputBox}
                  placeholder="Email"
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
                  style={styles.inputBox}
                  placeholder="Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry
                />
                {touched.password && errors.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
                <Text style={styles.subHeaderText}>Confirm Password</Text>
                <TextInput
                  style={styles.inputBox}
                  placeholder="Confirm Password"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                  secureTextEntry
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <Text style={styles.error}>{errors.confirmPassword}</Text>
                )}
                {touched.terms && errors.terms && (
                  <Text style={styles.error}>{errors.terms}</Text>
                )}
                <Button label="Sign Up" onPress={handleSubmit} width={178} />
              </>
            )}
          </Formik>
          <Text style={styles.termsText}>By continuing, you agree to</Text>
          <View style={styles.termsContainer}>
            <TouchableOpacity>
              <Text style={styles.termsHighlightedText}>Terms of Service</Text>
            </TouchableOpacity>
            <Text style={styles.termsText}> and </Text>
            <TouchableOpacity>
              <Text style={styles.termsHighlightedText}>Privacy Policy</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.haveAccountContainer}>
            <Text style={styles.haveAccountText}>
              Already have an account?{' '}
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{color: '#E2F163'}}>Log In</Text>
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
  startText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
    marginBottom: 20,
  },
  subHeaderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'medium',
    width: '100%',
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
  termsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsText: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'light',
  },
  termsHighlightedText: {
    color: '#E2F163',
    fontSize: 13,
    fontWeight: 'medium',
  },
  haveAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  haveAccountText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'light',
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

export default SignUp;
