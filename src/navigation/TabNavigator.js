// src/navigation/TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import ComponentsUsed from '../screens/ComponentsUsed';
import MapScreen from '../screens/MapScreen';
import SensorData from '../screens/SensorData';
import Team from '../screens/Team';
import Icon from 'react-native-vector-icons/Ionicons';  // Importar íconos

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="home" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Equipo"
        component={Team}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="people" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Componentes"
        component={ComponentsUsed}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="hardware-chip" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Mapeo"
        component={MapScreen}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="map" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Sensores"
        component={SensorData}
        options={{
          tabBarIcon: ({ color, size }) => <Icon name="analytics" color={color} size={size} />,
        }}
      />
    </Tab.Navigator>
  );
}
