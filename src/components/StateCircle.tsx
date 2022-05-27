import React from 'react'
import { View } from 'react-native'

import { Styles } from '../theme/Styles';


interface Props {
    color: string
}

export const StateCircle = ({color}:Props) => {
  return (
    <View style={Styles.containerAnswerState}>
        <View style={{...Styles.answerState, backgroundColor:color}}></View>
    </View>
  )
}