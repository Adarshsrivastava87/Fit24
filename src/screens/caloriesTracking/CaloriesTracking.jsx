import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {StatusBarWrapper} from '../../components/statusBarWrapper/StatusBarWrapper';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import ColorCode from '../../utils/ColorConst';
import {useContext, useEffect, useState} from 'react';
import AppBar from '../setUp/AppBar';
import {getPeriodicUserActivityData} from '../../api/activityAPI';
import { AppContext } from '../../context_api/AppContext';

const CaloriesTracking = ({navigation}) => {
  const [calories, setCalories] = useState(750);
  const [steps, setSteps] = useState(1000);
  const [distance, setDistance] = useState(1000);
  const [totalData, setTotalData] = useState([]);
  const [weeklyData, setWeeklyData] = useState([]);
  const [loader, setLoader] = useState(false);
  const {stepData} = useContext(AppContext)

  const CALORIE_RATE = 0.04;
  useEffect(() => {
    getWeeklyData();
  }, []);

  useEffect(() => {
    setTotalData(summarizeData())
  }, [stepData])

  const getWeeklyData = async () => {
    setLoader(true);
    const result = await getPeriodicUserActivityData('/steps/weekly');
    if (result.status) {
      setWeeklyData(result?.data?.data);
    }
    setLoader(false);
  };

  const getWeeklyCard = () => {
    if (weeklyData.length > 1) {
      return weeklyData
        .sort((a, b) => new Date(a) - new Date(b))
        .map(data => StatsCard(data));
    } else {
      return weeklyData.map(data => StatsCard(data));
    }
  };

  function summarizeData() {
    if (stepData.length > 1) {
      return stepData.reduce(
        (acc, curr) => {
          return {
            steps: acc.steps + curr.steps,
            timerDurationSeconds:
              acc.timerDurationSeconds + curr.timerDurationSeconds,
            timestamp: Math.min(acc.timestamp, curr.timestamp),
            caloriesData: acc.caloriesData + curr.caloriesData,
            distance: acc.distance + curr.distance,
          };
        },
        {
          steps: 0,
          timerDurationSeconds: 0,
          timestamp: Infinity,
          caloriesData: 0,
          distance: 0,
        },
      );
    } else {
      return stepData;
    }
  }

  const StatsCard = ({day, date, totalSteps, totalTimerDurationSeconds}) => {
    return (
      <View style={styles.card} key={totalSteps + '1'}>
        <View style={styles.column}>
          <Text style={styles.header}>{day}</Text>
          <Text style={styles.subheader}>{date.split('-')[2]}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.column}>
          <Text style={styles.header}>Steps</Text>
          <Text style={styles.subheader}>{totalSteps}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.column}>
          <Text style={styles.header}>Calories</Text>
          <Text style={styles.subheader}>{totalSteps * CALORIE_RATE}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {!loader ? (
        <StatusBarWrapper backgroundColor="#002D63" barStyle="light-content">
          <AppBar
            title={'Calories Tracking'}
            onBackPress={() => {
              navigation.goBack();
            }}
            titlestyle={{
              color: ColorCode.green,
              fontSize: 20,
              fontWeight: 'bold',
            }}
          />
          <View style={styles.container}>
            {/* <Text style={{ color: ColorCode.green, fontSize: 20, fontWeight: 'bold' }} >
                    Calories Tracking
                </Text> */}
            <ScrollView showsVerticalScrollIndicator={false}>
              <View
                style={{
                  height: 71,
                  width: Dimensions.get('window').width - 40,
                  backgroundColor: '#064A60',
                  borderRadius: 13,
                  marginTop: 10,
                  padding: 10,
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    color: 'white',
                    fontWeight: 'semibold',
                    marginLeft: 10,
                  }}>
                  Workout Progress !
                </Text>
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <View>
                  <View
                    style={{
                      width: Dimensions.get('window').width / 2 - 40,
                      height: 185,
                      backgroundColor: '#20BF55',
                      padding: 10,
                      borderRadius: 17,
                      marginTop: 20,
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'white',
                        fontWeight: 'semibold',
                      }}>
                      Calories
                    </Text>
                    <View style={{position: 'absolute', bottom: 7, right: 7}}>
                      <AnimatedCircularProgress
                        size={130}
                        width={10}
                        fill={10}
                        tintColor="#064A60"
                        backgroundColor="white">
                        {() => (
                          <>
                            <Text
                              style={{
                                fontSize: 20,
                                color: 'white',
                                fontWeight: 'bold',
                              }}>
                              {totalData?.caloriesData}
                            </Text>
                            <Text style={{color: 'white'}}>/kCal</Text>
                          </>
                        )}
                      </AnimatedCircularProgress>
                    </View>
                  </View>
                  <View
                    style={{
                      width: Dimensions.get('window').width / 2 - 40,
                      height: 132,
                      backgroundColor: '#064A60',
                      padding: 10,
                      borderRadius: 17,
                      marginTop: 20,
                    }}>
                    <Text
                      style={{
                        fontSize: 22,
                        color: 'white',
                        fontWeight: 'medium',
                      }}>
                      Distance
                    </Text>
                    <Text
                      style={{
                        fontSize: 24,
                        color: 'white',
                        fontWeight: 'medium',
                      }}>
                      {totalData?.distance}
                    </Text>
                    <Text
                      style={{
                        fontSize: 12,
                        color: 'white',
                        fontWeight: 'regular',
                      }}>
                      meters
                    </Text>
                    <View style={{position: 'absolute', bottom: 7, right: 7}}>
                      <AnimatedCircularProgress
                        size={80}
                        width={10}
                        fill={70}
                        tintColor="#20BF55"
                        backgroundColor="white"></AnimatedCircularProgress>
                    </View>
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      width: Dimensions.get('window').width / 2 - 40,
                      height: 131,
                      backgroundColor: '#064A60',
                      padding: 10,
                      borderRadius: 17,
                      marginTop: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        fontSize: 20,
                        color: 'white',
                        fontWeight: 'medium',
                      }}>
                      Steps
                    </Text>
                    <Text
                      style={{
                        fontSize: 36,
                        color: 'white',
                        fontWeight: 'light',
                      }}>
                      {totalData?.steps}
                    </Text>
                  </View>
                  <View
                    style={{
                      width: Dimensions.get('window').width / 2 - 40,
                      height: 184,
                      backgroundColor: 'white',
                      borderRadius: 17,
                      marginTop: 20,
                    }}>
                    <Image
                      source={require('../../assets/images/runnerMale.png')}
                      style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'cover',
                      }}
                    />
                  </View>
                </View>
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'semibold',
                  marginTop: 20,
                  color: 'white',
                }}>
                Programs
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View
                  style={{
                    width: 72,
                    height: 55,
                    borderRadius: 17,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#064A60',
                    marginTop: 10,
                  }}>
                  <Text style={{color: 'white'}}>Run</Text>
                </View>
                <View
                  style={{
                    width: 72,
                    height: 55,
                    borderRadius: 17,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#064A60',
                    marginTop: 10,
                  }}>
                  <Text style={{color: 'white'}}>Walk</Text>
                </View>
                <View
                  style={{
                    width: 72,
                    height: 55,
                    borderRadius: 17,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#064A60',
                    marginTop: 10,
                  }}>
                  <Text style={{color: 'white'}}>Yoga</Text>
                </View>
                <View
                  style={{
                    width: 72,
                    height: 55,
                    borderRadius: 17,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#064A60',
                    marginTop: 10,
                  }}>
                  <Text style={{color: 'white'}}>Cycling</Text>
                </View>
              </View>
              {getWeeklyCard()}
              <View
                style={{
                  height: 20,
                  backgroundColor: ColorCode.backgroundColor,
                }}></View>
            </ScrollView>
          </View>
        </StatusBarWrapper>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: ColorCode.backgroundColor,
  },
  card: {
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
  header: {
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

export default CaloriesTracking;
