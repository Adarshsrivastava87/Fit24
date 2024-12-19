/* eslint-disable prettier/prettier */
import React, {  } from 'react';
import {
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import RecommendationSection from './Recommandation';
import CustomTabs from './Tabs';
import UserProfileSection from '../profile/userProfileSection';
import CustomActivityComponents from './Activity';
import EmptyBox from '../../utility/validations/utils';
import OurCollection from './our_collection';
import ColorCode from '../../utils/ColorConst';
import ExerciseList from './workoutList';

const HomeScreen = ({ navigation }) => {
 
 

  return (

    <SafeAreaView style={{ flex: 1 ,backgroundColor:ColorCode.grey}}>
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
