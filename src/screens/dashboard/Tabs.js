import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ColorCode from '../../utils/ColorConst';

const CustomTabs = () => {
  const navigation = useNavigation();

  const scaleAnim = new Animated.Value(1);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const buttonStyle = {
    transform: [{ scale: scaleAnim }],
  };

  return (
    <View
      style={styles.container}>
      <Animated.View style={[styles.cardContainer, buttonStyle]}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('HomeScreen')}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}>
         
          <Text style={styles.textstyle}>Work out</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ShopingDashboard')}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}>
         
          <Text style={styles.textstyle}>Shop</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ShopingDashboard')}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}>
          
          <Text style={styles.textstyle} >Cart</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor:ColorCode.bgColor,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5, // Shadow for Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    width: Dimensions.get('screen').width,
    backgroundColor: ColorCode.bgColor,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  card: {
    height:40,
    width: Dimensions.get('screen').width * 0.28,
    alignItems: 'center',
    justifyContent:'center',
    borderRadius: 15,
    backgroundColor: "#002a3c",
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  textstyle:{
    fontWeight:"600",
    fontSize:16,
    color:"white"
  }
});

export default CustomTabs;
