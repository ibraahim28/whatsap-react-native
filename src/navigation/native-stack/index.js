import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from '../bottomTabs';
import CameraScreen from '../../screens/CameraScreen';

const Stack = createNativeStackNavigator();

function MyStack() {

    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainTabs" component={MyTabs} />
        <Stack.Screen name="Camera" component={CameraScreen} />
      </Stack.Navigator>
    );
  }

  export default MyStack;