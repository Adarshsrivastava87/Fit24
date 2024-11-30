/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import ContinueButton from './Button';
import ColorCode from '../../utils/ColorConst';
import AppBar from './AppBar';
import { AppContext } from '../../context_api/AppContext';

export default function PhysicalActivityLevel({navigation}) {
  const [selectedLevel, setSelectedLevel] = useState('');
  const { setUpDetails, setSetUpDetails } = useContext(AppContext);
  
  const handleLevelSelect = (level) => {
    setSetUpDetails({...setUpDetails, level: level})
    setSelectedLevel(level);
  };

  const handleContinue = () => {
    if (selectedLevel) {
       navigation.navigate("FillProfileScreen")
    } else {
      Alert.alert('Please select a level');
    }
  };

  return (
    <View style={{flex:1}}>
      <AppBar onBackPress={()=>{navigation.goBack()}} title={"Back"}/>
    <View style={styles.container}>
      <Text style={styles.title}>Physical Activity Level</Text>
      <Text style={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Text>
      {['Beginner', 'Intermediate', 'Advance'].map((level) => (
        <TouchableOpacity
          key={level}
          style={[
            styles.optionButton,
            selectedLevel === level && styles.selectedOptionButton,
          ]}
          onPress={() => handleLevelSelect(level)}
        >
          <Text
            style={[
              styles.optionText,
              selectedLevel === level && styles.selectedOptionText,
            ]}
          >
            {level}
          </Text>
        </TouchableOpacity>
      ))}
      <ContinueButton onPress={handleContinue} title={"Continue"} buttonStyle={{marginTop:"20%"}}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002d6b',
    paddingHorizontal: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 80,
    textAlign: 'center',
  },
  optionButton: {
    height:'10%',
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 30,
    marginBottom: 40,
  },
  selectedOptionButton: {
    backgroundColor: ColorCode.green,
  },
  optionText: {
    fontSize: 24,
    fontWeight:'500',
    color: '#002d6b',
  },
  selectedOptionText: {
    color: '#fff',
  },
});
