import { View, StyleSheet, Dimensions, Text, Image, TouchableOpacity } from 'react-native';
import ColorCode from '../../utils/ColorConst';

const UserProfileSection = () => {
  return (
    <View style={style.container}>
      {/* Left: Circular Image */}
      <View style={style.leftSection}>
        <Image
          source={require('../../assets/icons/user.png')}
          style={style.profileImage}
          resizeMode='center'
          
        />
      </View>

      {/* Center: Name and Greeting */}
      <View style={style.centerSection}>
        <Text style={style.greeting}>Hi, John Doe</Text>
        <Text style={style.subtitle}>It's time to challenge your limits.</Text>
      </View>

      {/* Right: Bell Icon */}
      <View style={style.rightSection}>
        <TouchableOpacity onPress={() => console.log('Bell Pressed')}>
          <Image
            source={require('../../assets/icons/bell_icon.png')}
            style={style.bellIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: ColorCode.ProfileBgColor,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    elevation: 5,
    height: Dimensions.get('screen').height * 0.08,
  },
  leftSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  profileImage: {
    
    width: 50,
    height: 50,
    borderRadius: 25, // Circular shape
    borderWidth: 2,
    borderColor: '#20BF55',
  },
  centerSection: {
    flex: 1, // Take remaining space
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    marginTop: 4,
  },
  rightSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
});

export default UserProfileSection;
