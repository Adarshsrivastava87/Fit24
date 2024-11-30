/* eslint-disable prettier/prettier */

import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import ColorCode from '../../utils/ColorConst';
import {BarChart} from 'react-native-gifted-charts';

import CustomCalendar from './Customcalender';
import AppBar from '../setUp/AppBar';
import {AppContext} from '../../context_api/AppContext';
import {getPeriodicUserActivityData} from '../../api/activityAPI';

const ProgressTrackingScreen = ({navigation}) => {
  const {userDetails} = useContext(AppContext);
  const [loader, setLoader] = useState(false);
  const [monthlyData, setMonthlyData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);

  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"
  ];

  const getMonthBar = () => {

    const result = monthNames.map((name, index) => ({
      label: name,
      value: 0,
    }));
    
    // Update the result object with actual data

    monthlyData.forEach(item => {
      const monthIndex = item?.month - 1;
      result[monthIndex].value += item?.totalSteps;
    });

    return result
  }

  useEffect(() => {
    getWeeklyData()
    getMonthlyData()
  },[]);

  const getWeeklyData = async () => {
    setLoader(true);
    const result = await getPeriodicUserActivityData('/steps/weekly');
    if(result.status) {
      setWeeklyData(result?.data?.data);
    }
  };

  const getMonthlyData = async () => {
    const result = await getPeriodicUserActivityData('/steps/monthly');
    if(result.status) {
      setMonthlyData(result?.data?.data);
    }
    setLoader(false);
  };

  const getWeeklyCard = () => {
    if(weeklyData.length > 1) {
      return weeklyData.sort((a, b) => new Date(a) - new Date(b)).map(data => StatsCard(data))
    }else {
      return weeklyData.map(data => StatsCard(data));
    }
  }

  const {width, height} = Dimensions.get('window');
  return (
    <>
      {!loader ? (
        <View style={styles.container}>
          <AppBar
            title={'Progress Tracking'}
            onBackPress={() => navigation.goBack()}
            titlestyle={{color: ColorCode.green}}
          />
          <View style={{height: height}}>
            <ScrollView style={{paddingTop: 10, paddingBottom: 10}}>
              {userProfile()}
              <View style={styles.tabSection}>
                <TouchableOpacity
                  style={styles.tabActive}
                  onPress={() => {
                    Alert.alert('Coming soon');
                  }}>
                  <Text style={styles.tabText}>Workout Log</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.tabActive}
                  onPress={() => {
                    Alert.alert('Coming soon');
                  }}>
                  <Text style={styles.tabText}>Charts</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.calendarSection}>
                <View
                  style={{
                    height: 4,
                    backgroundColor: '#fff',
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                />
                <Text style={styles.chooseDateText}>Choose Date</Text>
                <View
                  style={{
                    height: 4,
                    backgroundColor: '#fff',
                    marginTop: 10,
                    marginBottom: 10,
                  }}
                />
                {CustomCalendar()}
              </View>
              {todayTarget()}
              {barChart()}
              {viewForCard()}
            </ScrollView>
          </View>
        </View>
      ) : (
        null
      )}
    </>
  );

  function userProfile() {
    return (
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: ColorCode.green,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
        }}>
        <View
          style={[
            styles.card,
            {
              flexDirection: 'column',
              width: width * 0.6,
              justifyContent: 'center',
              alignItems: 'flex-start',
            },
          ]}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.name}>{userDetails?.firstName}</Text>
            {/* <Icon name="venus" size={20} color="#FFD700" /> */}
          </View>
          <Text style={styles.age}>
            Age:<Text style={{fontSize: 14, fontWeight: '300'}}>{userDetails?.age}</Text>
          </Text>
          <View style={[styles.infoContainer, {width: width * 0.5}]}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 10,
                  backgroundColor: ColorCode.grey,
                  margin: 5,
                  borderRadius: 10,
                }}></View>
              <View style={styles.infoBox}>
                <Text style={styles.infoValue}>{userDetails?.weight} Kg</Text>
                <Text style={styles.infoLabel}>Weight</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 10,
                  backgroundColor: ColorCode.grey,
                  margin: 5,
                  borderRadius: 10,
                }}></View>
              <View style={styles.infoBox}>
                <Text style={styles.infoValue}>{userDetails?.height} CM</Text>
                <Text style={styles.infoLabel}>Height</Text>
              </View>
            </View>
          </View>
        </View>

        <Image
          source={require('../../assets/images/profile.png')} // Replace with actual image URL
          style={styles.image}
        />
      </View>
    );
  }

  function todayTarget() {
    return (
      <View
        style={{
          width: width,
          alignItems: 'center',
          backgroundColor: ColorCode.backgroundColor,
        }}>
        <View
          style={{
            height: 139,
            width: width * 0.9,
            backgroundColor: 'rgba(32, 191, 85, 0.2)',
            margin: 10,
            borderRadius: 22,
            padding: 20,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
              fontSize: 14,
              marginBottom: 20,
            }}>
            Today Target
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('CaloriesTracker')}>
            <View
              style={{
                flexDirection: 'row',
                height: 60,
                backgroundColor: ColorCode.grey,
                borderRadius: 12,
                justifyContent: 'flex-start',
                alignItems: 'center',
                padding: 10,
              }}>
              <Image
                source={require('../../assets/images/Vector.png')} // Replace with actual image URL
                style={{width: 21.47, height: 22.7, margin: 5}}
              />
              <View style={{margin: 5}}>
                <Text style={styles.text}>Calorie & Steps Tracker</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function barChart() {
    return (
      <View
        style={{
          padding: 20,
          borderRadius: 25,
          borderWidth: 1,
          borderColor: 'white',
          margin: 20,
        }}>
        <Text
          style={{
            color: 'white',
            marginBottom: 15,
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          Steps
        </Text>
        <BarChart
          //barWidth={22}
          noOfSections={4}
          barBorderRadius={4}
          frontColor="#F7D448"
          data={getMonthBar()}
          yAxisThickness={0}
          xAxisThickness={0}
          hideRules
          xAxisLabelTextStyle={{
            color: 'white',
            fontSize: 12,
          }}
          yAxisTextStyle={{color: 'white'}}
        />
      </View>
    );
  }

  function viewForCard() {
    return (
      <View style={{marginBottom: 80, padding: 20}}>
        {getWeeklyCard()}
      </View>
    );
  }
};

function StatsCard({day, date, totalSteps, totalTimerDurationSeconds}) {
  return (
    <View style={styles.trackercard} key={totalSteps + '1'}>
      <View style={styles.column}>
        <Text style={styles.trackerheader}>{day}</Text>
        <Text style={styles.subheader}>{date.split('-')[2]}</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.column}>
        <Text style={styles.trackerheader}>Steps</Text>
        <Text style={styles.subheader}>{totalSteps}</Text>
      </View>
      <View style={styles.column}>
        <Text style={styles.trackerheader}>Duration</Text>
        <View style={{flexDirection: 'row', padding: 5}}>
          <Image
            style={{margin: 4}}
            source={require('../../assets/images/watch.png')}></Image>
          <Text style={styles.subheader}>{totalTimerDurationSeconds}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorCode.backgroundColor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',

    // backgroundColor: ColorCode.backgroundColor,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    color: ColorCode.green,
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tabSection: {
    paddingTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: ColorCode.backgroundColor,
  },
  tab: {
    padding: 15,
  },
  tabActive: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 151,
    height: 29,
    backgroundColor: ColorCode.grey,
    borderRadius: 40,

    //borderBottomWidth: 2,
    // borderBottomColor: '#00adf5',
  },
  tabText: {
    color: 'black',
  },
  calendarSection: {
    padding: 20,
  },
  chooseDateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    alignSelf: 'center',
    marginTop: 5,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginRight: 5,
  },
  age: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  infoBox: {
    alignItems: 'center',
    marginRight: 20,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  infoLabel: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '300',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {fontSize: 14, fontWeight: '500', color: ColorCode.green},
  //
  trackercard: {
    flexDirection: 'row',
    backgroundColor: '#28a745',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  column: {
    alignItems: 'center',
  },
  trackerheader: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  subheader: {
    color: 'white',
    fontSize: 20,
  },
  divider: {
    height: '100%',
    width: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
});

export default ProgressTrackingScreen;
