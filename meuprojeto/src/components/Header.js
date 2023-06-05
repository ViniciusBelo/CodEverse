import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,Button,TextInput,FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';

export function Header (props){

    const [pesquisar,setPesquisar] = useState ('Curso')
    
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Bem-Vindo, Fulano</Text>
        <View style={styles.cabecalho}>
            
          <TouchableOpacity>
            <View>
              <Entypo name="circle" size={70} color="#4C1C94"/>
            </View>
          </TouchableOpacity>
            
          <TextInput
            style={styles.input}
            placeholder='Pesquise o curso'
            maxLength={15}
            onChangeText={setPesquisar}
          />
                
          <Ionicons name="notifications" size={35} color="#4C1C94"/>
        </View>
        <Text style={{textAlign:'center',}}>Pesquisando curso: {pesquisar}</Text>

      </View>
    )
}

const styles = StyleSheet.create({

    input:{
        borderWidth:1,
        borderColor:'#777',
        paddingHorizontal:30,
        alignItems:'center',
        borderRadius:30,
      },

      titulo:{
        color:'#746C94',
        fontSize:20, 
        textAlign:'center',
        marginLeft:55,
        marginRight:20,
      },

      cabecalho:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:20,
        marginBottom:4,
        alignItems:'center',
      },

      container:{
        marginTop:40,
      },
});