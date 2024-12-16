import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import ColorCode from '../utils/ColorConst';

const CustomStepper = ({ min = 0, max = 10, step = 1, initialValue = 0, onValueChange }) => {
  const [value, setValue] = useState(initialValue);
  const scaleAnim = new Animated.Value(1);

  const handlePress = (increment) => {
    let newValue = value + (increment ? step : -step);
    if (newValue >= min && newValue <= max) {
      setValue(newValue);
      if (onValueChange) {
        onValueChange(newValue);
      }
    }
  };

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle = {
    transform: [{ scale: scaleAnim }],
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.buttonContainer, animatedStyle]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress(false)}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </Animated.View>
      
        <Text style={styles.valueText}>{value}</Text>
    
      <Animated.View style={[styles.buttonContainer, animatedStyle]}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress(true)}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    //backgroundColor:"red"
  },
  buttonContainer: {
    marginHorizontal: 10,
    borderRadius: 50,
    overflow: 'hidden',
  },
  button: {
    width: 25,
    height:25,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: ColorCode.bgColor,
  },
  valueContainer: {
    width: 50,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  valueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CustomStepper;
