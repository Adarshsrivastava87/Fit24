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
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { StatusBarWrapper } from '../../components/statusBarWrapper/StatusBarWrapper';
import showAlert from '../../utility/validations/Alert';
import Loader from '../../components/loader/Loader';
import PedometerWrapper from './PedometerWrapper';
import TimerWrapper from './TimerWrapper';
import { sendUserActivityData } from '../../api/activityAPI';
import RecommendationSection from './Recommandation';
import YourComponent from './Tabs';
import CustomTabs from './Tabs';
import ExerciseList from './workoutList';
import UserProfileSection from '../profile/userProfileSection';
import ColorCode from '../../utils/ColorConst';
import CustomActivityComponents from './Activity';
import EmptyBox from '../../utility/validations/utils';
import OurCollection from './our_collection';

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
  } = useContext();
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

    <SafeAreaView style={{ flex: 1 ,}}>
      <UserProfileSection />
      <ScrollView style={styles.container} nestedScrollEnabled>
        <CustomActivityComponents />
        <RecommendationSection />
        {/* <ExerciseList /> */}
        <OurCollection />
        <EmptyBox Boxheight={20} />
      </ScrollView>

      <CustomTabs style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   // backgroundColor: ColorCode.bgColor,
    padding: 10
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
