/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBarWrapper } from '../../components/statusBarWrapper/StatusBarWrapper';
import showAlert from '../../utility/validations/Alert';
import Loader from '../../components/loader/Loader';
import { AppContext } from '../../context_api/AppContext';
import PedometerWrapper from './PedometerWrapper';
import TimerWrapper from './TimerWrapper';
import { sendUserActivityData } from '../../api/activityAPI';
import RecommendationSection from './Recommandation';
import YourComponent from './Tabs';
import CustomTabs from './Tabs';
import ExerciseList from './workoutList';

const HomeScreen = ({ navigation }) => {
  const {
    currentSteps,
    totalSteps,
    seconds,
    stepData,
    setStepData,
    userDetails,
    apiCalled,
    setAPICalled,
    setPedoReset
  } = useContext(AppContext);
  const CALORIE_RATE = 0.04;
  const DISTANCE_RATE = 0.78;
  const calledRef = useRef(apiCalled);
  const secondRef = useRef(seconds);
  const stepsRef = useRef(currentSteps);

  const [loading, setLoading] = useState(true)

  // useEffect(() => {
  //   calledRef.current = apiCalled;
  //   secondRef.current = seconds;
  //   stepsRef.current = currentSteps;
  // }, [seconds, apiCalled, currentSteps])

  // useEffect(() => {
  //   const id = setInterval(() => {
  //     if (secondRef.current > 1 && !calledRef.current) {
  //       const addOns =
  //       {
  //         steps: stepsRef.current,
  //         timerDurationSeconds: secondRef.current,
  //         timestamp: new Date().getTime(),
  //         caloriesData: stepsRef.current * CALORIE_RATE,
  //         distance: stepsRef.current * DISTANCE_RATE,
  //       };

  //       updateUserData(addOns);
  //       setStepData(data => [...data, addOns]);
  //       setAPICalled(() => true);
  //       setPedoReset(() => true);
  //     }
  //   }, 10000);
  //   return () => clearInterval(id);
  // }, []);

  // const updateUserData = async (request) => {
  //   await sendUserActivityData(request);
  // }

  handleProfilePress = () => {
    navigation.navigate('ProfileScreen')
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a 3-second loading time
  }, []);

  return (
    <>
      <StatusBarWrapper backgroundColor="#002D63" barStyle="light-content">
        {loading ? <Loader loading={loading} /> :
          <ScrollView style={styles.container}>
            <View style={styles.header}>
              {console.log(seconds, 'home screen seconds')}
              <View style={styles.heading}>
                <Text style={styles.greeting}>Hi, {userDetails?.firstName}</Text>
                <Text style={styles.subtitle}>
                  It's time to challenge your limits.
                </Text>
              </View>
              <View style={styles.iconRow}>
                <View style={styles.headerIcons}>
                  <TouchableOpacity onPress={() => handleProfilePress()}>
                    <Image
                      source={require('../../assets/icons/user.png')}
                      style={{ marginRight: 10, height: 18, width: 14 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

          <CustomTabs/>

            <View style={styles.recommendations}>
              <Text style={styles.recommendationTitle}>Recommendations</Text>
           <RecommendationSection/>
            </View>

            <View style={styles.weeklyChallenge}>
              <View
                style={{
                  backgroundColor: '#212020',
                  width: '90%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderRadius: 10,
                }}>
                <View style={{ justifyContent: 'center', padding: 25 }}>
                  <Text style={styles.weeklyChallengeText}>Weekly</Text>
                  <Text style={styles.weeklyChallengeText}>Challenge</Text>
                  <Text style={{ color: '#fff', alignSelf: 'center' }}>
                    Swimming
                  </Text>
                </View>
                <Image
                  style={styles.weeklyChallengeImage}
                  source={require('../../assets/images/swimming.png')}
                />
              </View>
            </View>

            {/* <View style={styles.articles}>
              <Text style={styles.articlesTitle}>Articles & Tips</Text>
              <View style={styles.articleRow}>
                <View style={styles.article}>
                  <Image
                    style={styles.articleImage}
                    resizeMode="contain"
                    source={require('../../assets/images/supplement.png')}
                  />

                  <Text style={styles.articleText}>Supplement Guide</Text>
                </View>
                <View style={styles.article}>
                  <Image
                    style={styles.articleImage}
                    resizeMode="contain"
                    source={require('../../assets/images/dailyRoutine.png')}
                  />
                  <Text style={styles.articleText}>
                    15 Quick & Effective Daily Routines
                  </Text>
                </View>
              </View>
            </View> */}
            <View>
            <Text>Exercise List </Text>
            <ExerciseList/>
            </View>
            
          </ScrollView>
        }
      </StatusBarWrapper>
      <PedometerWrapper />
      <TimerWrapper />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002D63',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  heading: {
    // backgroundColor:"yellow",
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 24,
    color: '#20BF55',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginTop: 5,
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  icon: {
    margin: 5,
    height: 18,
    width: 18,
  },
  sections: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    backgroundColor: '#002D63',
  },
  section: {
    alignItems: 'center',
  },
  sectionText: {
    color: '#fff',
    marginTop: 5,
  },
  recommendations: {
    padding: 20,
    backgroundColor: '#002D63',
  },
  recommendationTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  recommendationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recommendation: {
    width: '48%',
    backgroundColor: '#00509d',
    borderRadius: 15,
    // borderTopLeftRadius:15,
    borderWidth: 1.5,
    borderColor: '#fff',
    paddingBottom: 10,
    alignItems: 'center',
  },
  recommendationImage: {
    width: '100%',
    height: 100,
  },
  recommendationText: {
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  recommendationSubtext: {
    color: '#fff',
    marginTop: 5,
  },
  weeklyChallenge: {
    padding: 20,
    backgroundColor: '#20BF55',
    alignItems: 'center',
  },
  weeklyChallengeText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    // padding:10,
    alignSelf: 'center',
  },
  weeklyChallengeImage: {
    width: '50%',
    height: 125,
    borderRadius: 10,
  },
  articles: {
    padding: 20,
    backgroundColor: '#002D63',
  },
  articlesTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  articleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  article: {
    width: '48%',
    // backgroundColor: 'yellow',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  articleImage: {
    width: '120%',
    height: 100,
    borderRadius: 10,
  },
  articleText: {
    color: '#fff',
    marginTop: 10,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 5,
  },
});

export default HomeScreen;
