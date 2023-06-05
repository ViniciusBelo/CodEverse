import { StyleSheet, View, Text} from 'react-native';
export function Tarefas() {
return (
    <View style={styles.container}>
        <Text>Página De perfis dos professores!</Text>
    </View>
);
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center',
    },
});