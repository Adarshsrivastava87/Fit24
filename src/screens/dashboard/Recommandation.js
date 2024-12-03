import React from 'react';
import { FlatList, Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import ColorCode from '../../utils/ColorConst';

const RecommendationSection = ({navigation}) => {
  
  const handleContinue = () => {
    console.log('Continue')
}
  
  // Sample data for the FlatList
  const data = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
  ];

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.textstyle}>Recent Goal</Text>
      <TouchableOpacity onPress={handleContinue}>
      <Text>View all</Text>
      </TouchableOpacity>
    </View>
      <FlatList
      progressViewOffset={false}
        data={data}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    marginBottom:10,
    
    flex: 1,
    paddingTop:8,
    paddingLeft:8,
    paddingRight:8,
    paddingBottom:18,
    backgroundColor:ColorCode.white
    
   
  },
  textContainer:{
    marginBottom:10,
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"white"
  },
  textstyle:{
    fontWeight:"900",
    fontSize:18,
    color:ColorCode.black
  },
  flatList: {
    flex: 1,
  },

  card: {
    backgroundColor: 'blue', // Blue background for the card
    height: 100, // Fixed height of 100
    width: 300, // Optional: you can set the width of each card
    justifyContent: 'center',
    alignItems: 'center', // Center the text inside the card
    marginRight: 10, // Space between cards in horizontal list
    borderRadius: 10, // Optional: rounded corners
    shadowColor: '#000', // Optional: add shadow
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  cardText: {
    color: '#fff', // White color for the text inside the card
    fontSize: 18,
  },
});

export default RecommendationSection;
