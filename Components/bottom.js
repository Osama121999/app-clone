import React from 'react';
import Home from './home';
import Maps from './maps';
import User from './User';
import { Ionicons, Feather, AntDesign } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function bottom() {
  return (
<Tab.Navigator
        screenOptions={({ route }) => ({

          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'home') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'home-outline'
                      : 'home-outline'
                  }
                  size={30}
                  color={color}
                  style={{marginTop:5 , fontWeight:'900'}}
                />
              );
            } else if (route.name === 'maps') {
              return (

                <Feather name={focused ? 'map-pin' : 'map-pin'} size={26} color={color} 
                style={{marginTop:5 , fontWeight:'900'}}/>
              );
            } 
            else if (route.name === 'User') {
              return (
                <AntDesign
                  name={focused ? 'user' : 'user'}
                  size={30}
                  color={color}
                  style={{marginTop:5 , fontWeight:'bold'}}
                />
              );
            } 
          },
          tabBarInactiveTintColor: 'gray',
          tabBarActiveTintColor: 'black',
        })}
      >
       
        <Tab.Screen name="maps" component={Maps} />
        <Tab.Screen name="home" component={Home} />
        <Tab.Screen name="User" component={User} />


        {/* <Tab.Screen name="Heart" component={Heart} />
        <Tab.Screen name="User" component={User} /> */}
      </Tab.Navigator>
  );
}