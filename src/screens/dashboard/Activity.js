import { Dimensions, StyleSheet, View, Text, Image, Animated } from "react-native";
import ColorCode from "../../utils/ColorConst";
import React, { useEffect, useRef } from "react";
import { useIsFocused } from "@react-navigation/native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const CustomActivityComponents = () => {

  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animation = useRef(new Animated.Value(0)).current;
  const isFocused = useIsFocused(); // Check if screen is focused

  const startAnimation = () => {
    // Reset animation values
    fadeAnim.setValue(0);
    animation.setValue(0);

    // Start animations
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 4000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isFocused) {
     startAnimation(); // Trigger animations when screen is focused
    }
  }, [isFocused]);

  componentData = () => {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: 40 }}>
          <Image
            source={require('../../assets/icons/accDetails.png')}
            style={{
              width: 24, // Adjust the width as needed
              height: 24, // Adjust the height as needed
              resizeMode: 'contain',
            }}
          />
        </View>
       
        
        </View>
    
    )
  }


  return (
    <Animated.View style={[style.container, { transform: [{ translateX: animation.interpolate({ inputRange: [0, 1], outputRange: [200, 0] }) }] }]}>
      <View style={style.row}>
        <Text style={style.textStyle}>Activity</Text>
        <Text style={style.viewAll}>see more</Text>
      </View>

      <View style={style.subContainer}>
        <View style={style.challengeCard}>
          <Animated.View style={[style.cardTextContainer, { opacity: fadeAnim }]}>

            <Text style={style.weeklyChallengeText}>Weekly</Text>
            <Text style={style.weeklyChallengeText}>Challenge</Text>
            <Text style={style.challengeTitle}>Swimming</Text>

          </Animated.View>

          <Image
            style={style.weeklyChallengeImage}
            source={require('../../assets/images/swimming.png')}
          />
        </View>

        <View style={style.bottomContainer}>
        <View>
          <Text style={{color:ColorCode.white,fontSize:18,fontWeight:"600"}}>Work out Progress</Text>
          <Text style={{color:ColorCode.white,fontWeight:"500",fontSize:12}}>75 % Work out Progress</Text>
        </View>
        <AnimatedCircularProgress
          size={50} // Adjusted size for better look
          width={6} // Thicker progress bar
          fill={75}
          tintColor={ColorCode.green}
          backgroundColor={ColorCode.grey}
          lineCap="round"
        >
          {(fill) => <Text style={style.progressText}>{`${Math.round(fill)}%`}</Text>}
        </AnimatedCircularProgress>
      </View>
      </View>
     
    </Animated.View>
  );
};

const style = StyleSheet.create({
  container: {

    //backgroundColor: ColorCode.bgColor,

  },
  subContainer: {
    padding: 15,
    borderRadius: 20,
    height: Dimensions.get("screen").height * 0.21,
    opacity: 0.95,
    backgroundColor: ColorCode.green,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 6,
    justifyContent: "space-between"
  },
  row: {
    margin: 5,
    flexDirection: 'row',
    justifyContent: "space-between",
  },
  textStyle: {
    fontWeight: '800',
    fontSize: 22,
    color: ColorCode.textColor,
    letterSpacing: 1,
  },
  viewAll: {
    fontWeight: '600',
    fontSize: 16,
    color: ColorCode.textColor,
  },
  challengeCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#212020',
    borderRadius: 15,
    height: '50%',
  },
  cardTextContainer: {
    justifyContent: 'center',
    padding: 15,
  },
  weeklyChallengeText: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  challengeTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  weeklyChallengeImage: {
    width: '50%',
    height: 80,
    borderRadius: 12,
    resizeMode: 'cover',
  },
  bottomContainer: {
   paddingHorizontal:30,
    flexDirection:"row",
    height: Dimensions.get("screen").height * 0.07,
    backgroundColor:"black",
    borderRadius: 10,
    elevation: 10,
   alignItems:"center",
   justifyContent:"space-between"
    //padding: 10
  },
  rightContainer: {
    alignItems: 'center',
  },
  progressText: {
    fontSize: 14,
    fontWeight: '700',
    color: ColorCode.white,
  },
});

export default CustomActivityComponents;
