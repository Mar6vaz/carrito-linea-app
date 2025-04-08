// src/screens/Team.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const team = [
  {
    id: '1',
    name: 'Vazquez Gonzalez Mariela ',
    role: 'Programador',
    image: require('../../assets/Mifoto.png'),
  },
  {
    id: '2',
    name: 'Franco Paez Amparo',
    role: 'Diseñadora',
    image: require('../../assets/Mifoto.png'),
  },
  {
    id: '3',
    name: 'Navarro Huerta Carlos Jair',
    role: 'Tester y soporte',
    image: require('../../assets/Mifoto.png'),
  },
];

export default function Team() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Equipo de trabajo</Text>
      {team.map((member) => (
        <View key={member.id} style={styles.card}>
          <Image source={member.image} style={styles.image} />
          <Text style={styles.name}>{member.name}</Text>
          <Text style={styles.role}>{member.role}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e7eb',
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 30,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    width: '80%',
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111827',
  },
  role: {
    fontSize: 14,
    color: '#6b7280',
    textAlign: 'center',
  },
});
