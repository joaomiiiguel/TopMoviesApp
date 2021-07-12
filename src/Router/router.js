import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { theme } from '../globalStyle';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

import Home from '../screens/Home'
import TopMovies from '../screens/TopMovies'
import Trailers from '../screens/Trailers'
import Statistics from '../screens/Statistics'
import Detail from '../screens/Detail'

export default function Router() {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="TopMovies" headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TopMovies" component={TopMovies} />
            <Stack.Screen name="Trailers" component={Trailers} />
            <Stack.Screen name="Statistics" component={Statistics} />
            <Stack.Screen name="Detail" component={Detail} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}

const styles = StyleSheet.create({
   NavigationContainer:{
      backgroundColor:'#070818'
   }
})
