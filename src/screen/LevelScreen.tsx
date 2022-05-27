import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { Text, View } from 'react-native'

import { StackScreenProps } from '@react-navigation/stack';
import { addAnswer, answerState, answerProps } from '../redux/feature/UseGame';
import { RootStackParams } from '../navigation/StackNavigator';
import { Styles } from '../theme/Styles';


interface Props extends StackScreenProps<RootStackParams,'LevelScreen'>{}

export const LevelScreen = ({ navigation, route }:Props) => {

    const gameDispatch = useDispatch();

    const { question, correct_answer, incorrect_answers } = route.params
    const answers = getOrderedAnswers(correct_answer, incorrect_answers);
    
    
    const sendAnswer = (answer:string) => {

        const answerState = (answer == correct_answer)?('correct'):('incorrect')
        const money = (answerState == 'correct')?2000000:-2000000
        gameDispatch(addAnswer({answer:answerState, money}));
        navigation.goBack()
    }

  return (
    <View style={Styles.containerScreen}>
        <View style={Styles.containerQuestion}>
            <Text style={Styles.textQuestion}>{question}</Text>
        </View>
        <View style={Styles.containerButtonAnswer}>
            <TouchableOpacity onPress={() => sendAnswer(answers[0])} style={Styles.buttonLevelAnswer}>
                <Text style={Styles.textLevelAnswer}>{answers[0]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sendAnswer(answers[1])} style={Styles.buttonLevelAnswer}>
                <Text style={Styles.textLevelAnswer}>{answers[1]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sendAnswer(answers[2])} style={Styles.buttonLevelAnswer}>
                <Text style={Styles.textLevelAnswer}>{answers[2]}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => sendAnswer(answers[3])} style={Styles.buttonLevelAnswer}>
                <Text style={Styles.textLevelAnswer}>{answers[3]}</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}


const getOrderedAnswers = (answerCorrect:string, incorrectAnswers:string[]) => {
    const answers = [answerCorrect]
    incorrectAnswers.forEach(answer => {
        answers.push(answer)
    });

    for (let i = answers.length-1; i > 0; i--) {

        const element = Math.floor(Math.random() * (i+1))
        console.log('0')
        const aprovider = answers[i]

        answers[i] = answers[element]
        answers[element] = aprovider
        
    }

    return answers
}
