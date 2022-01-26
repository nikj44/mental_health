import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native'
import Home from './src/screens/Home';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

const App = () => {
  return (
    <Provider store={Store}>
      <Home />
    </Provider>

  )
}

export default App
