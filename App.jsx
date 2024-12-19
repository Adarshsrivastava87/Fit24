import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './src/navigation/AppStackNavigator';
import { Provider } from 'react-redux';

const App = () => {
  return (
   
      
        <NavigationContainer>
        <Provider>
          <AppStackNavigator />
          </Provider>
        </NavigationContainer>
  );
};

export default App;
