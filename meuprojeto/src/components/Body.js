import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,Button,TextInput,FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useState } from 'react';


export function Body (props){
    
    const [ligar,setLigar] = useState(true);

    const clicarBotao = () => {
      setLigar(!ligar);
    }
  
    const [ligar2,setLigar2] = useState(true);
  
    const clicarBotao2 = () => {
      setLigar2(!ligar2);
    }
  
    const [ligar3,setLigar3] = useState(true);
  
    const clicarBotao3 = () => {
      setLigar3(!ligar3);
    }
   
    return(

    <ScrollView style={styles.container}>
        <View style={styles.cursando}>
        
            <View style={styles.cursandoimg}>
            <TouchableOpacity>
                <Image
                source={require('../../assets/img/image4.png')}
                style ={{borderWidth:1,borderRadius:10,margin:5,}}
                />
            </TouchableOpacity>
            </View>
        
            <View style={styles.cursandotexto}>
            <Text style ={{fontSize:18, color:'#BCBDBD',}}>Curso de design</Text>
            <Text style ={{fontSize:10, color:'#BCBDBD',}}>2h 40min|15 aulas</Text>
            <Image
                source={require('../../assets/img/proggression-bar.png')}
                style ={{width:160,borderRadius:30,marginTop:10,}}
            />
            </View>
            
        </View>

        <Text style={styles.professortitulo}>Sugestões</Text>
        
        <View style={styles.sugestoesimg}>
        
            
            <View style={styles.imgcont1}>  
            <TouchableOpacity>
                <View>
                <Image
                    source={require('../../assets/img/dadfas.png')}
                    style ={{borderWidth:1,borderRadius:20, marginLeft:5, marginRight:5,}}
                />
                </View>
            </TouchableOpacity>

                <Text style ={{fontWeight:500,fontSize:15,paddingBottom:5,}}>UX design</Text>
                <Text style ={{fontSize:10, color:'#BCBDBD',}}>3h 40min|18 aulas</Text>
                
                <View>  
                    {
                    ligar ? 
                    <Text> </Text>
                    :
                    <Text style ={{fontSize:12,textAlign:'center',color:'#c40000' }}> Aguardando pagamento </Text>
                    }

                    <Button 
                    title='Começar' 
                    color={'#4C1C94'}
                    onPress={clicarBotao}
                    />
                </View>
            </View>
            
            <View style={styles.imgcont2}> 

            <TouchableOpacity>
                <View>
                <Image
                source={require('../../assets/img/scs.png')}
                    style ={{borderWidth:1,borderRadius:20, marginLeft:5, marginRight:5,}}
                />
                </View>
            </TouchableOpacity>
            
            <Text style ={{fontWeight:500,fontSize:15,paddingBottom:5,}}>Web Design</Text>
            <Text style ={{fontSize:10, color:'#BCBDBD',}}>3h 40min|18 aulas</Text>
                <View>  
                    {
                    ligar2 ? 
                    <Text> </Text>
                    :
                    <Text style ={{fontSize:12,textAlign:'center',color:'#c40000' }}> Aguardando pagamento </Text>
                    }

                    <Button 
                    title='Começar' 
                    color={'#4C1C94'}
                    onPress={clicarBotao2}
                    />
                </View>
            </View>

            <View style={styles.imgcont3}>
            <TouchableOpacity>
                <View>
                <Image
                    source={require('../../assets/img/sdfafgeqwrgwh.png')}
                    style ={{borderWidth:1,borderRadius:20, marginLeft:5, marginRight:5,}}
                />
                </View>
            </TouchableOpacity>
            <Text style ={{fontWeight:500,fontSize:15,paddingBottom:5,}}>Wireframe</Text>
            <Text style ={{fontSize:10, color:'#BCBDBD',}}>3h 40min|18 aulas</Text>   
            {
                    ligar3 ? 
                    <Text> </Text>
                    :
                    <Text style ={{fontSize:12,textAlign:'center',color:'#c40000' }}> Aguardando pagamento </Text>
                    }

                    <Button 
                    title='Começar' 
                    color={'#4C1C94'}
                    onPress={clicarBotao3}
                    />
            </View>
        
        </View>

        <Text style={styles.professortitulo}>Melhores Professores</Text>
        
        <View style={styles.professores}>
            
            <View style={styles.caixa1prof}>
            <TouchableOpacity>
                <View>
                <Entypo name="circle" size={100} color="#4C1C94"/>
                </View>
            </TouchableOpacity>
            
            <Text style ={{fontWeight:500,fontSize:15,}}>Matheus de sá</Text>
            <Text style ={{fontSize:10, color:'#BCBDBD',}}>Desenvolvedor full-stack</Text>
            <Text style ={{fontSize:9, color:'#000000',}}>12 cursos</Text>
            <Button title='Ver Perfil' color={'#4C1C94'}/>
            </View>
            
            <View style={styles.caixa2prof}>
            <TouchableOpacity>
                <View>
                <Entypo name="circle" size={100} color="#4C1C94"/>
                </View>
            </TouchableOpacity>

            <Text style ={{fontWeight:500,fontSize:15,}}>Willian</Text>
            <Text style ={{fontSize:10, color:'#BCBDBD',}}>Ui/Ux Designer</Text>
            <Text style ={{fontSize:9, color:'#000000',}}>15 cursos</Text>
            <Button title='Ver Perfil' color={'#4C1C94'}/>
            </View>
            
            <View style={styles.caixa3prof}>
                <TouchableOpacity>
                <View>
                    <Entypo name="circle" size={100} color="#4C1C94"/>
                </View>
                </TouchableOpacity>

                <Text style ={{fontWeight:500,fontSize:15,}}>Asep yato</Text>
                <Text style ={{fontSize:10, color:'#BCBDBD',}}>Desenvolvedor front-end</Text>
                <Text style ={{fontSize:9, color:'#000000',}}>9 cursos</Text>
                <Button title='Ver Perfil' color={'#4C1C94'}/>
            </View>
        </View>
        
        <TouchableOpacity>
            <View style={styles.outrosprof2}>
                <Text style={styles.outrosprof1}>Olhar todos os professores</Text>
            </View>
        </TouchableOpacity>
    </ScrollView>
   
    )
}

const styles = StyleSheet.create({

    container:{
        marginTop:50,
      },
    
      flat:{
        marginTop:5,
        padding:10,
        marginBottom:10,
        marginHorizontal:5,
        justifyContent:'center',
      },
    
      cabecalho:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:20,
        marginRight:20,
        marginBottom:4,
        alignItems:'center',
      },
    
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
    
      cursando:{
        backgroundColor:'#0C042C',
        flexDirection:'row',
        paddingBottom:10,
        paddingTop:10,
        borderRadius:20,
        marginHorizontal:15,
        paddingLeft:10,
      },
    
      cursandoimg:{
        flexDirection:'column',
      },
    
      cursandotexto:{
        paddingLeft:15,
        fontSize:18,
        marginTop:5, 
        alignItems:'flex-start',
      },
    
      sugestoesimg:{
        flexDirection:'row',
        alignItems:'center',
      },
      
      imgcont1:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:10,
        paddingTop:10,
        borderRadius:20,
        backgroundColor:'#EAEAEA',
      },
    
      imgcont2:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:10,
        paddingTop:10,
        marginHorizontal:5,
        borderRadius:20,
        backgroundColor:'#EAEAEA',
      },
     
      imgcont3:{
        justifyContent:'center',
        alignItems:'center',
        paddingBottom:10,
        paddingTop:10,
        borderRadius:20,
        backgroundColor:'#EAEAEA',
      },
    
      professortitulo:{
        fontSize:25,
        marginLeft:20,
        color:'#4C1C94',
        marginBottom:15,
        marginTop:10,
      },
    
      professores:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:20,
      },
    
      caixa1prof:{
        justifyContent:'center',
        alignItems:'center',
      },
    
      caixa2prof:{
        justifyContent:'center',
        alignItems:'center',
      },
    
      caixa3prof:{
        justifyContent:'center',
        alignItems:'center',
      },
    
      outrosprof1:{
        borderRadius:20,
        paddingHorizontal:15,
        paddingVertical:3,
        borderWidth:1,
        marginBottom:20,
        borderColor:'#4C1C94',
        color:'#4C1C94',
        fontWeight:500,
      },
    
      outrosprof2:{
        alignItems:'center',
        paddingBottom:10,
        paddingTop:10,
      },
      


});