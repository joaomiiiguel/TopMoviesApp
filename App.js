import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';
import { globalStyle, theme } from './src/globalStyle';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/screens/Home'
import TopMovies from './src/screens/TopMovies'
import Trailers from './src/screens/Trailers'
import Statistics from './src/screens/Statistics'
import Detail from './src/screens/Detail'


const Tab = createMaterialTopTabNavigator();

export default function App() {

 
  return (
    <NavigationContainer>
      
      <Tab.Navigator
        initialRouteName="TopMovies"
        headerMode="none"
        tabBarPosition="bottom"
        tabBarOptions={{
          style: { backgroundColor: theme.colors.GrayLight, paddingVertical: 10 },
          activeTintColor: theme.colors.BlueBase,
          inactiveTintColor: '#FFF',
          showLabel: false,
          showIcon: true,
        }}
        >

        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color}) => (
              <Icon name="home" color={color} size={23} />
            ),
          }} />
        <Tab.Screen name="TopMovies" component={TopMovies}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="trophy" color={color} size={23} />
            ),
          }} />
        <Tab.Screen name="Trailers" component={Trailers}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="film" color={color} size={23} />
            ),
          }} />
        <Tab.Screen name="Statistics" component={Statistics}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="stats-chart" color={color} size={23} />
            ),
          }} />
        <Tab.Screen name="Detail" component={Detail}/>

      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

