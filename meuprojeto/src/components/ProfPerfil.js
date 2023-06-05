import { StyleSheet, View, Text} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export function ProfPerfil() {
return (
    <View style={styles.container}>
        <AntDesign name="user" size={200} color="black" />
        <Text> {'\n'} </Text>
        <Text> Professor: Willian </Text>
        <Text> {'\n'} </Text>
        <MaterialIcons name="computer" size={240} color="black" />

    </View>
);
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center',
    },
});