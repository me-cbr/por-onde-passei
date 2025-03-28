import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPlaces = async () => {
      try {
        const savedPlaces = await AsyncStorage.getItem('places');
        if (savedPlaces) {
          setPlaces(JSON.parse(savedPlaces));
        }
      } catch (error) {
        console.error('Erro ao carregar lugares:', error);
      } finally {
        setLoading(false);
      }
    };

    const unsubscribe = navigation.addListener('focus', loadPlaces);
    return unsubscribe;
  }, [navigation]);

  const renderPlaceItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.placeItem}
      onPress={() => navigation.navigate('Map', { places: [item] })}
    >
      <Image source={{ uri: item.photo }} style={styles.placeImage} />
      <View style={styles.placeInfo}>
        <Text style={styles.placeTitle}>{item.title}</Text>
        <Text style={styles.placeDate}>
          {new Date(item.date).toLocaleDateString()}
        </Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        renderItem={renderPlaceItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('Add')}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    padding: 16,
  },
  placeItem: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
  },
  placeImage: {
    width: '100%',
    height: 200,
  },
  placeInfo: {
    padding: 16,
  },
  placeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  placeDate: {
    color: '#666',
  },
  addButton: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    backgroundColor: '#4CAF50',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
});