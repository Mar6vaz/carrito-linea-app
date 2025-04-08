// src/screens/Home.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Bienvenido</Text>
      <Text style={styles.subtitle}>Robot seguidor de línea</Text>

      <Image source={require('../../assets/carrito.jpeg')} style={styles.image} resizeMode="contain" />

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          Se desarrolló un robot seguidor de línea como herramienta educativa, integrando disciplinas como robótica, electrónica, programación y control inalámbrico. 
          El sistema fue diseñado para funcionar de manera autónoma o mediante control remoto, ofreciendo una experiencia completa de interacción. 
        </Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          El robot sigue líneas negras sobre superficies claras y puede alternar entre modo automático y control manual desde una app móvil. Funciona de forma autónoma, interpreta señales de sensores y responde en tiempo real. 
          
          Además, permite visualizar datos de operación como el tiempo de recorrido, siendo ideal para prácticas académicas en robótica y control. 
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Equipo')}
      >
        <Text style={styles.buttonText}>Ver integrantes del equipo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginTop: 30,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#475569',
    marginBottom: 20,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  image: {
    width: 260,
    height: 200,
    marginBottom: 20,
    borderRadius: 15,
  },
  textContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  text: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#1f2937',
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#1e40af',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 10,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
