/* eslint-disable prettier/prettier */
import React from 'react';
import { Calendar } from 'react-native-calendars';
import ColorCode from '../../utils/ColorConst';
import { StyleSheet, View } from 'react-native';


const CustomCalendar = () => {
    return (
        <View style={styles.calendarContainer}>
      <Calendar
      

      theme={{
        calendarBackground: "white",
        textSectionTitleColor: ColorCode.green,
        dayTextColor: ColorCode.green,
        todayTextColor: ColorCode.black,
        selectedDayTextColor: ColorCode.black,
        monthTextColor: ColorCode.green,
        arrowColor: ColorCode.green,

    }}
/>
</View>
       
        
    );
};

const styles = StyleSheet.create({
    calendarContainer: {
        borderRadius: 10,
        overflow: 'hidden', // This ensures the child components respect the border radius
        backgroundColor: 'white', // Ensure the background color is set to avoid visual issues
        margin: 10, // Optional: Add some margin if needed
    },
});

export default CustomCalendar;
