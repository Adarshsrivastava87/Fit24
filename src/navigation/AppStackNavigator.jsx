/* eslint-disable prettier/prettier */
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splashScreen/SplashScreen";
import Onboarding from "../screens/onboarding/Onboarding";
import Login from "../screens/login/Login";
import SignUp from "../screens/signUp/SignUp";
import ForgotPassword from "../screens/forgotPassword/ForgotPassword";
import SetPassword from "../screens/forgotPassword/SetPassword";
import SetUp from "../screens/setUp/SetUp";
import SetGender from "../screens/setUp/SetGender";
import SetAge from "../screens/setUp/SetAge";
import SetHeight from "../screens/setUp/SetHeight";
import SetWeight from "../screens/setUp/SetWeight";
import HomeScreen from "../screens/dashboard/HomeScreen";
import ProgressTrackingScreen from "../screens/progressTracker/Tracker";
import OnboardingB from "../screens/onboarding/OnboardingB";
import CaloriesTracking from "../screens/caloriesTracking/CaloriesTracking";
import ProfileScreen from "../screens/profile/Profile";
import SetupGoal from "../screens/setUp/SetupGoal";
import FillProfile from "../screens/setUp/SetupProfile";
import PhysicalActivityLevel from "../screens/setUp/PhysicalActivityLevel";

const AppStackNavigator = () => {
  
    const Stack = createStackNavigator()

    return(
        <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false, gestureEnabled: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Onboarding" component={Onboarding} />
            <Stack.Screen name="OnboardingB" component={OnboardingB} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="SetPassword" component={SetPassword} />
            <Stack.Screen name="SetUp" component={SetUp} />
            <Stack.Screen name="SetGender" component={SetGender} />
            <Stack.Screen name="SetAge" component={SetAge} />
            <Stack.Screen name="SetWeight" component={SetWeight} />
            <Stack.Screen name="SetHeight" component={SetHeight} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="TrackerScreen" component={ProgressTrackingScreen} />
            <Stack.Screen name="CaloriesTracker" component={CaloriesTracking} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="SetupGoalScreen" component={SetupGoal} />
            <Stack.Screen name="FillProfileScreen" component={FillProfile} />
            <Stack.Screen name="PhysicalActivityLevelScreen" component={PhysicalActivityLevel} />
            
            
           
        </Stack.Navigator>
    )
}

export default AppStackNavigator;