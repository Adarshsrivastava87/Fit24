import React from 'react';
import { FlatList, StyleSheet, Text, View, Image } from 'react-native';

const ExerciseList = () => {
  const exercises = [
    { id: '1', name: 'Push Ups' },
    { id: '2', name: 'Squats' },
    { id: '3', name: 'Plank' },
    { id: '4', name: 'Pull Ups' },
    { id: '5', name: 'Lunges' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.listTile}>
      {/* <Image
        source={require('../../assets/icons/dumbbell.png')} // Replace with your own icon
        style={styles.icon}
      /> */}
      <Text style={styles.exerciseName}>{item.name}</Text>
      <View style={styles.counterContainer}>
        <Text style={styles.exerciseCount}>1</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={exercises}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  listTile: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
  },
  icon: {
    width: 40,
    height: 40,
    tintColor: '#3498db', // Icon color
    marginRight: 15,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    flex: 1, // Allow text to take up available space
  },
  counterContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#3498db',
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseCount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default ExerciseList;
