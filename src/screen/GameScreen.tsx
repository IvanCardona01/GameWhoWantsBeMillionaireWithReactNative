import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StackScreenProps } from '@react-navigation/stack';
import currencyFormatter from 'currency-formatter'
import { useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { UseAppSelector } from '../redux/app/Hook';
import { LevelState } from '../components/LevelState';
import { resetGame } from '../redux/feature/UseGame';
import { Styles } from '../theme/Styles';


interface Props extends StackScreenProps<any,any>{}

export const GameScreen = ({ navigation }:Props) => {

  const game = UseAppSelector(state => state.game)
  const gameDispatch = useDispatch();
  
  const levelActual = game.levelActual
  const levelQuestion = game.questions.results[levelActual]

  return (
    <View style={Styles.containerScreen}>
        <View>
            <Text style={Styles.textGameLevels }>Levels</Text>
        </View>
        <View style={Styles.containerLevels}>
            <LevelState answer={game.levelStatus[0].answer} level={1} />
            <LevelState answer={game.levelStatus[1].answer} level={2} />
            <LevelState answer={game.levelStatus[2].answer} level={3} />
            <LevelState answer={game.levelStatus[3].answer} level={4} />
            <LevelState answer={game.levelStatus[4].answer} level={5} />
        </View>
        {
            (game.levelActual == 5)
            ?
            <View style={Styles.containerButtonGo}>
                <TouchableOpacity onPress={() => gameDispatch(resetGame())} style={Styles.buttonGo}>
                    <Text style={Styles.textButton}>Reset</Text>
                </TouchableOpacity>
            </View>
            :
            <View style={Styles.containerButtonGo}>
                <TouchableOpacity onPress={() => navigation.navigate('LevelScreen', levelQuestion)} style={Styles.buttonGo}>
                    <Text style={Styles.textButton}>Go</Text>
                </TouchableOpacity>
            </View>
        }
        
        <View style={Styles.containerScore}>
            <Icon name='monetization-on' size={50} color={'black'}/>
            <Text  style={Styles.textScore}>{currencyFormatter.format(game.money, { code:'USD' }) }</Text>
        </View>
    </View>
  )
}
