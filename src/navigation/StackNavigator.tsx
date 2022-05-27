import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { LevelScreen } from '../screen/LevelScreen';
import { HomeScreen } from '../screen/HomeScreen';
import { GameScreen } from '../screen/GameScreen';
import { Question } from '../redux/feature/UseGame';


export type RootStackParams = {
    HomeScreen: undefined
    GameScreen: undefined
    LevelScreen: Question
}

export const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerStyle:{elevation: 8, shadowColor:'black'}}}>
        <Stack.Screen name='HomeScreen' options={{title:'Home'}} component={HomeScreen}/>
        <Stack.Screen name='GameScreen' options={{title:'Game'}} component={GameScreen}/>
        <Stack.Screen name='LevelScreen' options={{title:''}} component={LevelScreen}/>
    </Stack.Navigator>
  )
}
