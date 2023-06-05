import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


export function Profile() {

  const [showDetails, setShowDetails] = React.useState(false);



  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <View style={styles.container}>
      <AntDesign name="user" size={120} color="black" style={styles.icon} />
      <View style={styles.infoContainer}>
        <Text style={styles.text}>Aluno:</Text>
        <Text style={styles.name}>Vinicius</Text>
        <Text style={styles.text}>Curso:</Text>
        <Text style={styles.course}>Sistemas de Informação</Text>
      </View>
      {showDetails && (
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsText}>Email: vinicius@example.com</Text>
          <Text style={styles.detailsText}>Telefone: (123) 456-7890</Text>
          <Text style={styles.detailsText}>Localização: São Paulo, Brasil</Text>
        </View>
      )}

      <TouchableOpacity onPress={toggleDetails} style={styles.detailsButton}>
        <Text style={styles.detailsButtonText}>
          {showDetails ? 'Esconder Detalhes' : 'Mostrar Detalhes'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  infoContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
  },
  icon: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#555555',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  course: {
    fontSize: 20,
    fontStyle: 'italic',
  },
  favoriteButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  favoriteButtonText: {
    fontSize: 16,
    marginLeft: 8,
  },
  detailsButton: {
    marginTop: 20,
  },
  detailsButtonText: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
  detailsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 10,
  },
});




