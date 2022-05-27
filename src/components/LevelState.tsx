import React from 'react'
import { Text, View } from 'react-native'

import { StateCircle } from './StateCircle';
import { Styles } from '../theme/Styles';


interface Props {
    answer: 'correct' | 'void' | 'incorrect'
    level: number
}

export const LevelState = ({answer, level}:Props) => {

  switch(answer){
      case 'correct':
         return (
             <View style={Styles.containerLevelState}>
                 <Text style={Styles.textLevel }>Level {level}</Text>
                 <StateCircle color={"#00ba52"}/>
             </View>
         )
      case 'void':
          return(
            <View style={Styles.containerLevelState}>
                <Text style={Styles.textLevel }>Level {level}</Text>
                <StateCircle color={"grey"}/>
            </View>
          )
      case 'incorrect':
          return(
            <View style={Styles.containerLevelState}>
                 <Text style={Styles.textLevel }>Level {level}</Text>
                 <StateCircle color={"red"}/>
             </View>
          )
  }
}