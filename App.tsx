import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { StackNavigator } from './src/navigation/StackNavigator';
import { Provider } from 'react-redux';
import { Store } from './src/redux/app/Store';

const App = () => {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </Provider>
  )
}

export default App;