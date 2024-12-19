import React from 'react';
import { FlatList, Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import ColorCode from '../../utils/ColorConst';

const RecommendationSection = ({navigation}) => {
  
  const handleContinue = () => {
    console.log('Continue')
}
const data = [
  { 
    id: '1', 
    title: "Your body is your best investment.", 
    name: 'Stretching', 
    img: "https://images.healthshots.com/healthshots/en/uploads/2023/05/10200007/exercise.jpg" 
  },
  { 
    id: '2', 
    title: '"Progress, not perfection."', 
    name: 'Outdoor Jogging', 
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGV4ZXJjaXNlfGVufDB8fDB8fHww" 
  },
  { 
    id: '3', 
    title: '"Strength" comes from struggle.', 
    name: 'Weight Training', 
    img: "https://hips.hearstapps.com/hmg-prod/images/gym-workout-weight-training-bodybuilding-muscular-royalty-free-image-1703160802.jpg?crop=0.669xw:1.00xh;0.216xw,0&resize=640:*" 
  },
  { 
    id: '4', 
    title: 'Embrace challenges', 
    name: 'Strength Exercises', 
    img: "https://www.dmoose.com/cdn/shop/articles/MicrosoftTeams-image_3946f9ea-6053-49fe-8c14-4080fc88253b.jpg?v=1681378878" 
  },
  { 
    id: '5', 
    title: "Fitness is it’s about being better than you used to be.", 
    name: 'Functional Training', 
    img: "https://fitnessvolt.com/wp-content/uploads/2024/08/Non-Dominant-Side-Workouts-750x467.jpg.webp" 
  },
];

  

  // Render each item in the FlatList
  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{uri:item.img}} resizeMode='cover' style={{  height: 200, // Fixed height of 100
    width: 200,
    borderRadius:10}}/>
    <View style={{ position:'absolute', left:10, top:10,backgroundColor: 'rgba(0,0,0, 0.1)',borderRadius:5,width:140}}>
    <Text style={styles.cardText} >{item.title}</Text>
    </View>
    </View>
  );

  return (
    <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.textstyle}>Popular exercises</Text>
      <TouchableOpacity onPress={handleContinue}>
      <Text style={styles.viewAll}>see more</Text>
      </TouchableOpacity>
    </View>
      <FlatList
      nestedScrollEnabled
      progressViewOffset={false}
      scrollIndicatorInsets={false}
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
    borderRadius:10,
    flex: 1,
    paddingTop:8,
    paddingLeft:8,
    paddingRight:8,
    paddingBottom:18,
    marginTop:20
    //backgroundColor:ColorCode.white
    
   
  },
  textContainer:{
    marginBottom:10,
    flexDirection:"row",
    justifyContent:"space-between",
    //backgroundColor:"white"
  },
  textstyle:{
    fontWeight:"800",
    fontSize:20,
    color:ColorCode.textColor,
  },
  viewAll: {
    fontWeight: '600',
    fontSize: 16,
    color:ColorCode.textColor
  },
  flatList: {
    flex: 1,
  },

  card: {
    backgroundColor: 'blue', // Blue background for the card
    height: 200, // Fixed height of 100
    width: 200, // Optional: you can set the width of each card
    justifyContent: 'center',
    alignItems: 'center', // Center the text inside the card
    marginRight: 10, // Space between cards in horizontal list
    borderRadius: 10, // Optional: rounded corners
    shadowColor: '#000', // Optional: add shadow
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation:10
  },
  cardText: {
    fontWeight:"500",
    color:"white", // White color for the text inside the card
    fontSize: 18,
  },
  
});

export default RecommendationSection;
