/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Alert } from 'react-native';
import ContinueButton from './Button';
import ColorCode from '../../utils/ColorConst';
import AppBar from './AppBar';


export default function SetupGoal({navigation}) {
  const [selectedGoal, setSelectedGoal] = useState(null);
  const { setUpDetails, setSetUpDetails } = useContext();
  

  const handleOptionPress = (goal) => {
    setSetUpDetails({...setUpDetails, goal: goal})
    setSelectedGoal(goal);
  };

  return (
    <View style={{flex:1}}>
      <AppBar onBackPress={()=>{navigation.goBack()}} title={"Back"}/>
      <ScrollView style={styles.container}>
    <View >
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={styles.title}>What Is Your Goal?</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>

      
          {["Lose Weight", "Gain Weight", "Muscle Mass Gain", "Shape Body", "Others"].map((goal, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.optionButton} 
              onPress={() => handleOptionPress(goal)}
            >
              <Text style={styles.optionText}>{goal}</Text>
              <View 
                style={[
                  styles.radioCircle, 
                  selectedGoal === goal && styles.radioCircleSelected
                ]} 
              />
            </TouchableOpacity>
          ))}
        
        <ContinueButton onPress={() =>{
        navigation.navigate("PhysicalActivityLevelScreen")}
        } title={'Continue'} />
      </View>
    </View>
    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002d6b',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  backButton: {
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
  },
  subtitle: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 30,
    textAlign: 'center',
  },
  optionsContainer: {
    flexGrow: 1,
    marginBottom: 30,
    marginTop: 50,
   
  },
  optionButton: {
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 30,
    marginBottom: 20,
  },
  optionText: {
    fontSize: 16,
    color: '#002d6b',
  },
  radioCircle: {
    height: 40,
    width: 40,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#002d6b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioCircleSelected: {
    backgroundColor:ColorCode.green,
  },
});
