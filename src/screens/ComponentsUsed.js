// src/screens/ComponentsUsed.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const components = [
  {
    nombre: 'ESP32 DevKit',
    descripcion:
      'Es un microcontrolador con conectividad WiFi y Bluetooth integrada. Se encarga de controlar todo el sistema del robot, desde los sensores hasta los motores, la pantalla y la comunicación con la app móvil.',
    imagen: require('../../assets/Esp32.png'),
  },
  {
    nombre: 'Chasis de acrílico',
    descripcion:
      'Base estructural del robot que sostiene todos los módulos electrónicos y mecánicos. Está fabricado en acrílico transparente y cuenta con perforaciones que facilitan el montaje de motores, sensores, ruedas y otros componentes.',
    imagen: require('../../assets/Chasis.jpg'),
  },
  {
    nombre: 'Ruedas de goma (x2)',
    descripcion:
      'Tracción sobre superficies lisas. Están diseñadas para adherirse bien a la superficie y evitar derrapes.',
    imagen: require('../../assets/Ruedas.png'),
  },
  {
    nombre: 'Rueda loca (castor)',
    descripcion:
      'Tercera rueda colocada al frente o atrás del chasis. Su función es mantener el equilibrio del robot y permitir giros suaves sin afectar la dirección.',
    imagen: require('../../assets/Ruedal.jpeg'),
  },
  {
    nombre: 'Motores DC con caja reductora (x2)',
    descripcion:
      'Motores eléctricos de corriente directa que, gracias a una caja de engranajes, ofrecen mayor torque a baja velocidad. Son responsables del movimiento del robot hacia adelante, atrás y en giros.',
    imagen: require('../../assets/Motor.png'),
  },
  {
    nombre: 'Driver de motores L298N ',
    descripcion:
      'Módulo controlador que permite al ESP32 manejar la dirección y velocidad de los motores. Funciona como un puente H, proporcionando la corriente necesaria sin dañar el microcontrolador. ',
    imagen: require('../../assets/Drive.jpg'),
  },
  {
    nombre: 'Sensor infrarrojo tcrt5000 (x3) ',
    descripcion:
      'Detectan la diferencia de color entre una línea negra y el fondo claro. Envían esta información al ESP32 para que el robot corrija su trayectoria automáticamente y siga la línea marcada. ',
    imagen: require('../../assets/Sensor.jpeg'),
  },
  {
    nombre: 'Pantalla OLED 0.96” ',
    descripcion:
      'Pantalla digital monocromática que muestra información útil durante la operación del robot. En modo automático muestra el temporizador y el mapeo, y en modo manual solo actúa como adorno con “ojitos”. ',
    imagen: require('../../assets/Pantalla.png'),
  },
  {
    nombre: 'Buzzer pasivo ',
    descripcion:
      'Dispositivo que emite sonidos cuando es activado. Se utiliza para dar retroalimentación sonora, como al encender el robot, cambiar de modo o realizar acciones específicas. ',
    imagen: require('../../assets/Buzzer.jpeg'),
  },
  {
    nombre: 'Portapilas para baterías 18650 (x1)',
    descripcion:
      'Soporte para 2 a 4 baterías recargables. Proporciona la energía al sistema completo, asegurando autonomía durante la operación. ',
    imagen: require('../../assets/Porta.png'),
  },
  {
    nombre: 'Baterías 18650 (x3) ',
    descripcion:
      'Baterías de 3.7V de alta capacidad, recargables. Alimentan al ESP32, motores y módulos electrónicos. Ofrecen un buen tiempo de funcionamiento. ',
    imagen: require('../../assets/pila.jpg'),
  },
  {
    nombre: 'Bables Dupont (macho-macho / macho-hembra) ',
    descripcion:
      'Cables flexibles utilizados para realizar todas las conexiones eléctricas entre módulos. Permiten una conexión rápida, segura y ordenada. ',
    imagen: require('../../assets/cable.jpg'),
  },
  {
    nombre: 'Protoboard',
    descripcion:
      'Placa para organizar conexiones eléctricas. Puede utilizarse temporalmente para pruebas o de forma definitiva en versiones más robustas del robo. ',
    imagen: require('../../assets/Proto.jpg'),
  },
  {
    nombre: 'Tornillos y tuercas (variados) ',
    descripcion:
      'Elementos mecánicos esenciales para fijar firmemente los componentes al chasis, como los motores, la placa ESP32, el driver de motores, la pantalla OLED y otros módulos. Usualmente son de acero y vienen en tamaños pequeños (M3). Aportan estabilidad estructural y evitan que las piezas se desplacen durante el movimiento del robot.  ',
    imagen: require('../../assets/Tornillo.jpeg'),
  },
  
];

export default function ComponentsUsed() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Componentes Usados</Text>

      <FlatList
        data={components}
        keyExtractor={(item) => item.nombre}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.imagen} style={styles.image} />
            <View style={styles.textContainer}>
              <Text style={styles.name}>{item.nombre}</Text>
              <Text style={styles.description}>{item.descripcion}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 20,
    marginTop: 40, // <-- se añadió para bajar el título
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 15,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0f172a',
  },
  description: {
    fontSize: 14,
    color: '#475569',
    marginTop: 4,
  },
});
