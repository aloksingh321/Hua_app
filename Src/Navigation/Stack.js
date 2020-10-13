import React from 'react'
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../Component/Splash/Splash'
import Login from '../Component/Login/Login'
import Forget from '../Component/Forget/Forgetpassword'
import Dashboard from './Drawer'
import {ShowtimeContextProvider} from '../ContextStore/Store'

const Stack = createStackNavigator();

export default stack=()=> {
    return (
       <ShowtimeContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Splash " component={Splash} options={{headerShown:false}}/>
         <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}}/>   
           <Stack.Screen name="Forget" component={Forget} />
        </Stack.Navigator>
      </NavigationContainer>
      </ShowtimeContextProvider>
    );
  }