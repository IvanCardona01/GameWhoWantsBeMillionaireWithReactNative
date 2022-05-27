import React from 'react'
import { BackHandler, Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { addQuestionsList } from '../redux/feature/UseGame';
import { UseAppDispatch } from '../redux/app/Hook';
import { GetQuestions } from '../hook/GetQuestions';
import { Styles } from '../theme/Styles';


interface Props extends StackScreenProps<any,any>{}

export const HomeScreen = ({ navigation }: Props) => {

  const gameDispactch = UseAppDispatch();

  GetQuestions().then((questions) => {
    gameDispactch(addQuestionsList(questions.results))
  })
    
  return (
      <View style={Styles.containerScreen}>

        <Text style={Styles.textHome}>Who Wants To Be Millionaire?</Text>
        <View style={Styles.containerHome}>
           
            <TouchableOpacity onPress={() => navigation.navigate('GameScreen')} style={Styles.buttonHome}>
                <Text style={Styles.textButton}>Play</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => exit()} style={Styles.buttonHome}>
                <Text style={Styles.textButton}>Exit</Text>
            </TouchableOpacity>

        </View>

      </View>
  )
}


const exit = () => {
    BackHandler.exitApp()
}