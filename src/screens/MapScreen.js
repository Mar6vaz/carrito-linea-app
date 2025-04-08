// src/screens/MapScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import Icon from 'react-native-vector-icons/Ionicons';  // Importar íconos

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Icon name="map" size={30} color="#000" style={styles.icon} />  {/* Ícono de mapa */}
      <Text style={styles.title}>Mapa del recorrido</Text>
      
      <Text style={styles.title}>Video del carrito</Text>
      <Video
  
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="contain"
        shouldPlay
        useNativeControls
        style={styles.video}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center' },
  icon: { marginBottom: 10 },  // Estilo del ícono
  title: { fontSize: 20, fontWeight: 'bold', marginTop: 10 },
  image: { width: '100%', height: 200, marginVertical: 20 },
  video: { width: Dimensions.get('window').width - 40, height: 200 },
});
