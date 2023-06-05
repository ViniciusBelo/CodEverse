import { StyleSheet, Text, View,Image,TouchableOpacity,ScrollView,Button,TextInput,FlatList } from 'react-native';
import {Header} from './src/components/Header';
import {Body} from './src/components/Body' 
import {Profile} from './src/components/Profile'
import {ProfPerfil} from './src/components/ProfPerfil'
import {Settings} from './src/components/Settings'
import {Listao} from './src/components/Listao'


import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App(){
    return(
    
    <NavigationContainer>
          <Header/>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'ios-information-circle':'ios-information-circle-outline';
              
                } else if (route.name === 'Configurações') {
                iconName = focused ? 'ios-construct' : 'ios-construct-outline';
              }

              else if (route.name === 'Perfil') {
                iconName = focused ? 'ios-person' : 'ios-person-outline';
              }

              
              else if (route.name === 'Professores') {
                iconName = focused ? 'ios-people' : 'ios-people-outline';
              }

              else if (route.name === 'Listao') {
                iconName = focused ? 'ios-people' : 'ios-people-outline';
              }
      
                          return <Ionicons name={iconName} size={size} color={color} />;
                        },
                        tabBarActiveTintColor: 'purple',
                        tabBarInactiveTintColor: 'gray',
                      })}
              >
        <Tab.Screen name='Home' component={Body} options={{headerShown:false,}}/>
        <Tab.Screen name='Professores' component={ProfPerfil} options={{headerShown:false,}}/>
        <Tab.Screen name='Configurações' component={Settings} options={{headerShown:false,}}/>
        <Tab.Screen name='Perfil' component={Profile} options={{headerShown:false,}}/>
        <Tab.Screen name='Listao' component={Listao} options={{headerShown:false,}}/>
                      
      </Tab.Navigator>
  </NavigationContainer>
    )
}