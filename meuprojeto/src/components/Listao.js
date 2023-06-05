import { StyleSheet,Text,View,FlatList } from "react-native";
import React, {useState} from "react"
import Cabecalho from "./Cabecalho";
import NovosItens from "./NovosItens";
import AdicionarItem from "./AdicionarItem"

export function Listao() {

    const[lista,setLista] = useState([]);

    const apertarItem = (key) => {
        setLista(
            (prevLista) => {
                return prevLista.filter(texto => texto.key !=key);
            }
        )
    }

    const submeterInformacao = (texto) => [
        setLista((prevLista)=>{
            return [
                {texto:texto,key:Math.random().toString()},
                ...prevLista
            ];
        })
    ]

    return (

        <View style={styles.container}>
            <Cabecalho/>

            <View style={styles.conteudo}>

                <AdicionarItem funcao={submeterInformacao}/>

                <View style = {styles.estiloLista}>
                    <FlatList
                        data={lista}
                        renderItem={({item})=>(
                            <NovosItens props={item} funcao={apertarItem}/>
                        )}     
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container :{
        flex:1,
        backgroundColor: '#e0e5e5'
    },

    conteudo :{
        padding:40,
    },
});