import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import ColorCode from '../../utils/ColorConst';
import { useNavigation } from '@react-navigation/native';

const ExerciseList = () => {
  const navigation = useNavigation();

  const exercises = [
    { id: '1', name: 'Push Ups', howmuchDone: 10 },
    { id: '2', name: 'Squats', howmuchDone: 80 },
    { id: '3', name: 'Plank', howmuchDone: 50 },
    { id: '4', name: 'Pull Ups', howmuchDone: 100 },
    { id: '5', name: 'Lunges', howmuchDone: 0 },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.leftContainer}>
        <Image
          source={require('../../assets/images/setUpImage.png')} // Replace with your image
          style={styles.icon}
        />
        <View style={styles.textContainer}>
          <Text style={styles.exerciseName}>{item.name}</Text>
          <Text style={styles.subText}>Daily Target</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <AnimatedCircularProgress
          size={70} // Adjusted size for better look
          width={8} // Thicker progress bar
          fill={item.howmuchDone}
          tintColor={ColorCode.green}
          backgroundColor={ColorCode.grey}
          lineCap="round"
        >
          {(fill) => <Text style={styles.progressText}>{`${Math.round(fill)}%`}</Text>}
        </AnimatedCircularProgress>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Our collection</Text>
        {/* <TouchableOpacity onPress={() => navigation.navigate("ShowGrid")}>
          <Text style={styles.signUpText}></Text>
        </TouchableOpacity> */}
      </View>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   padding:5
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    
    fontSize: 20,
    fontWeight: 'bold',
    color:ColorCode.textColor,
  },
  signUpText: {
    fontSize: 16,
    fontWeight: '600',
    color: ColorCode.blue,
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
    elevation: 6,
    borderWidth: 1,
    borderColor: ColorCode.lightGray, // Light border for subtle separation
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    backgroundColor: ColorCode.grey,
    marginRight: 16,
  },
  textContainer: {
    flexDirection: 'column',
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: '600',
    color: ColorCode.black,
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: '#888',
  },
  rightContainer: {
    alignItems: 'center',
  },
  progressText: {
    fontSize: 16,
    fontWeight: '700',
    color: ColorCode.black,
  },
});

export default ExerciseList;
