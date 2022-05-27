import { Dimensions, StyleSheet } from "react-native";

const { width:windowWidth, height:windowHeight } = Dimensions.get('window')

export const Styles = StyleSheet.create({

    //General
    containerScreen: {
        flex: 1, 
        backgroundColor:'white',
    },
    textButton: {
        color:'white', 
        fontSize: 30, 
        fontWeight: 'bold',
    },

    //Home Screen
    containerHome: {
        flex:1, 
        backgroundColor:'white',
        marginTop: 80,
        alignItems: 'center',
    },
    textHome: {
        color:'black',
        fontSize: 40,
        marginHorizontal: 20,
        textAlign: 'center',
        opacity: 0.5,
        marginTop: 100,
        fontWeight: "600",
    },
    buttonHome:{
        backgroundColor: '#00ba52',
        marginVertical: 20,
        width: windowWidth*0.5,
        height: windowHeight*0.1,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },


    //Game Screen
    textGameLevels: {
        color:'black',
        fontSize: 60,
        marginHorizontal: 20,
        textAlign: 'center',
        opacity: 0.5,
        marginTop: 50,
        fontWeight: "600",
    },
    containerLevels: {
        marginTop: 40,
    },
    textLevel: {
        color:'black',
        fontSize: 35,
        textAlign: 'center',
        opacity: 0.5,
        marginTop: 5,
        marginRight: 40,
        fontWeight: "400",
    },
    containerAnswerState: {
        width: 40,
        height: 40,
        backgroundColor: '#3e3e3e',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    answerState: {
        width: 30,
        height: 30,
        borderRadius: 100,
    },
    containerLevelState: {
        flexDirection: 'row', 
        justifyContent:'center', 
        alignItems: 'center',
    },
    containerButtonGo:{
      alignItems: 'center',
    },
    buttonGo:{
        marginTop: 50,
        width: windowWidth*0.4,
        height: 50,
        backgroundColor: '#00ba52',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 100,
    },
    containerScore: {
        marginTop: 60,
        marginLeft: 30,
        flexDirection: 'row',
        alignItems: 'center',
        opacity: 0.5,
    },
    textScore: {
        color:'black', 
        marginLeft: 20,
        fontSize: 20,
    },


    //Level Screen
    containerQuestion: {
        backgroundColor: 'white',
        height: windowHeight*0.3,
        justifyContent: 'center',
        marginTop: 40,
        marginHorizontal: 20,
        borderRadius: 30,
        elevation: 8,
        shadowColor: 'black',
    },
    textQuestion:{
        color: 'black',
        textAlign: 'center',
        fontSize: 20,
        marginHorizontal: 10
    },
    containerButtonAnswer:{
        marginTop: 60,
    },
    buttonLevelAnswer: {
        elevation: 8,
        shadowColor: 'black',
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 50,
        height: windowHeight*0.08,
        justifyContent: 'center',
    },
    textLevelAnswer: {
        color:'black',
        fontSize: 20,
        textAlign: 'center',
    }
});