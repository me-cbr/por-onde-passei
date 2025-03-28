import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function MapScreen({ route }) {
  const { places } = route.params || { places: [] };

  if (!places || places.length === 0) {
    return (
      <View style={styles.container}>
        <Text>Nenhum local para exibir</Text>
      </View>
    );
  }

  const initialRegion = {
    latitude: places[0].location?.latitude || -0,
    longitude: places[0].location?.longitude || -0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={initialRegion}
      >
        {places.map((place) => (
          place.location && (
            <Marker
              key={place.id}
              coordinate={{
                latitude: place.location.latitude,
                longitude: place.location.longitude,
              }}
              title={place.title}
            />
          )
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});