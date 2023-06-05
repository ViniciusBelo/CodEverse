import React from "react"
import { StyleSheet,Text,View } from "react-native"

export default function Cabecalho() {
    return (
        <View style={styles.cabecalho}> 
            <Text style={styles.titulo}>Tarefas</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cabecalho:{
        height: 80,
        paddingTop:38,
        backgroundColor:'purple',
    },

    titulo:{
        textAlign:'center',
        fontSize:20,
        color:"#fff",
        fontWeight:'bold',
    },
});