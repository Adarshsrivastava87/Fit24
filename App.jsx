import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackNavigator from './src/navigation/AppStackNavigator';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import {AppProvider, AppContext} from './src/context_api/AppContext';
import {StyleSheet} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <AppProvider>
        <NavigationContainer>
          <AppStackNavigator />
        </NavigationContainer>
      </AppProvider>
    </Provider>
  );
};

export default App;
