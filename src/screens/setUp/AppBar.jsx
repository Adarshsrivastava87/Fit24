/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';


const AppBar = ({ title, onBackPress , titlestyle}) => {
  return (
    <View style={styles.container}>
      {onBackPress && (
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Image style={{width:10,height:10}} source={require("../../assets/icons/leftArrowYellow.png")}/>
        </TouchableOpacity>
      )}
      <Text style={[styles.title,titlestyle]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#002d6b',
    paddingHorizontal: 16,
    paddingVertical: 10,
    elevation: 4,
  },
  backButton: {
    marginRight: 16,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default AppBar;
