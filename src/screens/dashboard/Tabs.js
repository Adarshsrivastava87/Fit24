import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, ScrollView } from 'react-native';

const CustomTabs = ({ navigation, showAlert }) => {
  const [activeTab, setActiveTab] = useState('Workout'); // Default active tab

  // Function to handle tab press
  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} style={styles.tabsContainer} showsHorizontalScrollIndicator={false}>
        <TouchableOpacity onPress={() => handleTabPress('Workout')}>
          <View style={[styles.tab, activeTab === 'Workout' && styles.activeTab]}>
            <Image
              source={require('../../assets/icons/workout.png')}
              style={[styles.icon, activeTab === 'Workout' && styles.activeIcon]}
            />
            <Text style={[styles.tabText, activeTab === 'Workout' && styles.activeTabText]}>Workout</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabPress('Progress Tracking')}>
          <View style={[styles.tab, activeTab === 'Progress Tracking' && styles.activeTab]}>
            <Image
              source={require('../../assets/icons/analytics.png')}
              style={[styles.icon, activeTab === 'Progress Tracking' && styles.activeIcon]}
            />
            <Text style={[styles.tabText, activeTab === 'Progress Tracking' && styles.activeTabText]}>Progress Tracking</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabPress('Nutrition')}>
          <View style={[styles.tab, activeTab === 'Nutrition' && styles.activeTab]}>
            <Image
              source={require('../../assets/icons/nutrition.png')}
              style={[styles.icon, activeTab === 'Nutrition' && styles.activeIcon]}
            />
            <Text style={[styles.tabText, activeTab === 'Nutrition' && styles.activeTabText]}>Nutrition</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => handleTabPress('Community')}>
          <View style={[styles.tab, activeTab === 'Community' && styles.activeTab]}>
            <Image
              source={require('../../assets/icons/community.png')}
              style={[styles.icon, activeTab === 'Community' && styles.activeIcon]}
            />
            <Text style={[styles.tabText, activeTab === 'Community' && styles.activeTabText]}>Community</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  tabsContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    marginHorizontal: 10,
  },
  tab: {
    backgroundColor: '#ffffff',
    width: 100, // Smaller width for each tab
    height: 100, // Smaller height for each tab
    marginRight: 15, // Space between items
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
    overflow: 'hidden',
    padding: 5, // Smaller padding inside each tab
  },
  activeTab: {
    backgroundColor: '#3498db', // Active tab background color
    shadowOpacity: 0.3, // More shadow for active tab
  },
  tabText: {
    fontSize: 14, // Smaller text size for the tab labels
    fontWeight: '600',
    color: '#333',
    marginTop: 5, // Adjusted margin for smaller text
  },
  activeTabText: {
    color: '#ffffff', // Active tab text color
  },
  icon: {
    width: 40, // Smaller icon size
    height: 40, // Smaller icon size
    tintColor: '#3498db', // Default icon color
  },
  activeIcon: {
    tintColor: '#ffffff', // Icon color when tab is active
  },
  contentContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  contentText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default CustomTabs;
