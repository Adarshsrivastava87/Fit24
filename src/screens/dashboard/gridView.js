import React from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
import ColorCode from '../../utils/ColorConst';

const GridExample = () => {
  const data = [
    {
      name: "Arnold Press",
      image_url: "https://training.fit/wp-content/uploads/2020/03/arnold-press-2.png",
    },
    {
      name: "Front Raise (Dumbbells, Barbell, or Plate)",
      image_url: "https://liftmanual.com/wp-content/uploads/2023/04/weighted-front-raise.jpg",
    },
    {
      name: "Overhead Shoulder Press (Barbell or Dumbbells)",
      image_url: "https://static.strengthlevel.com/images/exercises/shoulder-press/shoulder-press-800.jpg",
    },
    {
      name: "Incline Bench Front Raise",
      image_url: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-incline-front-raise.jpg",
    },
    {
      name: "Reverse Fly (Dumbbells or Machine)",
      image_url: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/01/HL-07.02.RearDeltoidMachine.gif?h=840",
    },
    {
      name: "Face Pulls (Cable)",
      image_url: "https://static.strengthlevel.com/images/exercises/shoulder-press/shoulder-press-800.jpg",
    },
    {
      name: "Bent-over Lateral Raise",
      image_url: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-incline-front-raise.jpg",
    },
    {
      name: "Military Press (Barbell or Dumbbells)",
      image_url: "https://static.strengthlevel.com/images/exercises/shoulder-press/shoulder-press-800.jpg",
    },
    {
      name: "Push Press",
      image_url: "https://liftmanual.com/wp-content/uploads/2023/04/dumbbell-incline-front-raise.jpg",
    },
    {
      name: "Clean and Press",
      image_url: "https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/01/HL-07.02.RearDeltoidMachine.gif?h=840",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.gridItem}>
      <Image source={{ uri: item.image_url }} style={styles.image} />
      <TouchableOpacity style={styles.iconContainer}>
        <Text style={styles.iconText}>♥</Text>
      </TouchableOpacity>
      <View style={styles.textOverlay}>
        <Text style={styles.itemText}>{item.name}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
   
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Number of columns in the grid
        contentContainerStyle={styles.gridContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:ColorCode.backgroundColor, // Dark background
    padding: 16,
  },
  gridContainer: {
    justifyContent: 'center',
  },
  gridItem: {
    flex: 1,
    margin: 8,
    backgroundColor: '#2c2c2c', // Card background
    borderRadius: 16, // Rounded corners
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
  },
  image: {
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  iconContainer: {
    position: 'absolute',
    
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 20,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 14,
    color: '#ff3b30', // Heart icon color
  },
  textOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent overlay
    padding: 12,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff', // Text color
    textAlign: 'center',
  },
});

export default GridExample;
