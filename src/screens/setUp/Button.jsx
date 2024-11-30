/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ContinueButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity style={[styles.continueButton,buttonStyle]} onPress={onPress}>
    <Text style={[styles.continueButtonText,textStyle]}>{title}</Text>
  </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    continueButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.09)',
        paddingl:50,
        width:180,
        height:44,
        borderRadius: 30,
        borderWidth:1,
        borderColor:'#fff',
        justifyContent:'center',
        alignItems: 'center',
      },
      continueButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',
      },
});

export default ContinueButton;
