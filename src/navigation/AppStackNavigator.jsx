/* eslint-disable prettier/prettier */
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splashScreen/SplashScreen";
import Onboarding from "../screens/onboarding/Onboarding";
import Login from "../screens/login/Login";
import SignUp from "../screens/signUp/SignUp";
import SetUp from "../screens/setUp/SetUp";
import SetGender from "../screens/setUp/SetGender";
import SetAge from "../screens/setUp/SetAge";
import SetHeight from "../screens/setUp/SetHeight";
import SetWeight from "../screens/setUp/SetWeight";
import HomeScreen from "../screens/dashboard/HomeScreen";

import OnboardingB from "../screens/onboarding/OnboardingB";

import ProfileScreen from "../screens/profile/Profile";
import SetupGoal from "../screens/setUp/SetupGoal";
import FillProfile from "../screens/setUp/SetupProfile";
import PhysicalActivityLevel from "../screens/setUp/PhysicalActivityLevel";
import GridExample from "../screens/dashboard/gridView";
import ExerciseList from "../screens/dashboard/workoutList";
import ShoppingScreen from "../screens/shop/ShopMainscreen";
import ProductDescriptionScreen from "../screens/shop/productDiscription";

const workoutScreen = [
    { name: "SplashScreen", component: SplashScreen },
    { name: "Onboarding", component: Onboarding },
    { name: "OnboardingB", component: OnboardingB },
    { name: "Login", component: Login },
    { name: "SignUp", component: SignUp },
    { name: "SetUp", component: SetUp },
    { name: "SetGender", component: SetGender },
    { name: "SetAge", component: SetAge },
    { name: "SetWeight", component: SetWeight },
    { name: "SetHeight", component: SetHeight },
    { name: "HomeScreen", component: HomeScreen },
    { name: "ProfileScreen", component: ProfileScreen },
    { name: "SetupGoalScreen", component: SetupGoal },
    { name: "FillProfileScreen", component: FillProfile },
    { name: "PhysicalActivityLevelScreen", component: PhysicalActivityLevel },
    { name: "WorkList", component: ExerciseList },
  ];

const ShopScreen=[
  { name: "ShopingDashboard", component: ShoppingScreen 


    
  }
  ,
  { name: "ProductDescription", component:ProductDescriptionScreen


    
  }
]
const AppStackNavigator = () => {
  
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator>
          {workoutScreen.map((screen, index) => (
            <Stack.Screen 
              key={index} 
              name={screen.name} 
              options={{ headerShown: false }} 
              component={screen.component} 
            />
          ))}
          {ShopScreen.map((screen, index) => (
            <Stack.Screen 
              key={index} 
              name={screen.name} 
              options={{ headerShown: false }} 
              component={screen.component} 
            />
          ))}
        </Stack.Navigator>
      );
}

export default AppStackNavigator;