import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './Components/logSign/Login'
import SignUp from './Components/logSign/SignUp'
import bottom from './Components/bottom';
// import Maps from './Components/maps'

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login"
        screenOptions={{headerShown:false}} >
          <Stack.Screen 
            name="Login"
            component= {Login}
          />
         <Stack.Screen
            name="SignUp"
            component= {SignUp}
          />
          <Stack.Screen
            name="bottom"
            component= {bottom}
          />
          
          
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
      // backgroundColor: "pink"
    },
     header: {
        fontSize: 32,
        fontWeight: "bold",
        marginTop: "10%",
        marginHorizontal: '30%'
      },
      add: {
        fontSize: 20,
          // width: 60,
          // height: 60,
  
  
     },
   
      input: {
        paddingVertical: 6,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 50,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 300,
    
      },
       addWrapper: {
        width: 100,
        height: 30,
        backgroundColor: 'gray',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
        marginLeft: 100,
        
      },
  });