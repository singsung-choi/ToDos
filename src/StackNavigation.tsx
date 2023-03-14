import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Bottom from './conponents/MenuBar';
import Middle from './conponents/PayBody';
import Top from './conponents/Header';
import PayPage from './pages/PayPage';
import ComplaintsPage from './pages/ComplaintsPage';
import MyPage from './pages/MyPage';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Startdust" component={MyPage} />
    </Stack.Navigator>
  );
};
// options={{headerShown:false}}

export default StackNavigation;
