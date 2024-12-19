import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StatusBarWrapper } from '../../components/statusBarWrapper/StatusBarWrapper';
import ColorCode from '../../utils/ColorConst';

const ProfileScreen = ({ navigation }) => {
 

  const handleDeleteAccount = async () => {
    const response = await deleteUser({});
    if (response?.data && response?.data?.status === 1) {
      // setLoader(false);
      setLoginStatus(false);
      //await AsyncStorage.clear();
      navigation.navigate('Login');
    } else {
      setLoginStatus(false);
    }
  };

  const handleLogout = async () => {
      //await AsyncStorage.clear();
      navigation.navigate('Login');
  
  };

  const cmToFeetAndInches = (cm) => {
    if (!cm) {
      return `5'7`;
    }
    const totalInches = cm * 0.393701;
    const feet = Math.floor(totalInches / 12);
    const inches = (totalInches % 12).toFixed(2);
    return `${feet}'${inches}`;
  }


  return (
    <StatusBarWrapper backgroundColor={ColorCode.green} barStyle="light-content">
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: ColorCode.green }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              source={require('../../assets/icons/leftArrowYellow.png')}
              style={{ width: 10, height: 10, marginHorizontal: 10 }}
            />
          </TouchableOpacity>
          <Text
            style={{ color: '#371B34', fontSize: 18, fontWeight: 'semibold' }}>
            Profile
          </Text>
        </View>
        <View style={{ height: 40, backgroundColor: ColorCode.green, borderBottomLeftRadius: 100, borderBottomRightRadius: 100 }} ></View>
        <View style={styles.pageContainer} >
          <Text style={{ color: 'white', fontSize: 26, marginTop: 20 }}>
           "ok"
          </Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View
              style={{
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                borderRadius: 18,
                backgroundColor: ColorCode.green,
                width: 90,
              }}>
              <Text style={{ color: 'white' }}>Height</Text>
              
            </View>
            <View
              style={{
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                borderRadius: 18,
                backgroundColor: ColorCode.green,
                width: 90,
              }}>
              <Text style={{ color: 'white' }}>Weight</Text>
              
            </View>
            <View
              style={{
                marginTop: 10,
                alignItems: 'center',
                justifyContent: 'center',
                padding: 10,
                borderRadius: 18,
                backgroundColor: ColorCode.green,
                width: 90,
              }}>
              <Text style={{ color: 'white' }}>Age</Text>
              
            </View>
          </View>
          <View
            style={{
              marginTop: 60,
              borderRadius: 10,
            }}>
            <View style={{ flexDirection: 'row', alignItems: 'baseline' }} >
              <Image source={require('../../assets/icons/accDetails.png')}
                style={styles.image} />
              <Text style={styles.optionText}>
                Account Details
              </Text>
            </View>
            <View style={{ height: 1, backgroundColor: 'white', marginTop: 10 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
              <Image source={require('../../assets/icons/deleteAcc.png')}
                style={styles.image} />
              <TouchableOpacity onPress={() => handleDeleteAccount()}>
                <Text style={styles.optionText}>
                  Delete Account
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 1, backgroundColor: 'white', marginTop: 10 }} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
              <Image source={require('../../assets/icons/logout.png')}
                style={styles.image} />
              <TouchableOpacity onPress={() => handleLogout()}>
                <Text style={styles.optionText}>
                  Logout
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ height: 1, backgroundColor: 'white', marginTop: 10 }} />
          </View>
        </View>
      </View>
    </StatusBarWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorCode.backgroundColor,
  },
  pageContainer: {
    paddingHorizontal: 20,
  },
  image: {
    height: 16,
    width: 16,
    resizeMode: 'contain',
    marginRight: 10,
    marginTop: 10
  },
  optionText: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
});

export default ProfileScreen;
