import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as LocalAuthentication from 'expo-local-authentication';
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';
import HomeScreen from './screens/HomeScreen';
import AddScreen from './screens/AddScreen';
import MapScreen from './screens/MapScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [permissionsGranted, setPermissionsGranted] = useState(false);

  useEffect(() => {
    const checkPermissionsAndAuth = async () => {
      try {
        const cameraStatus = await ImagePicker.requestCameraPermissionsAsync();
        const locationStatus = await Location.requestForegroundPermissionsAsync();
        
        setPermissionsGranted(
          cameraStatus.status === 'granted' && 
          locationStatus.status === 'granted'
        );

        const compatible = await LocalAuthentication.hasHardwareAsync();
        setIsBiometricSupported(compatible);
        
        if (compatible) {
          const authResult = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Autentique-se para acessar o app',
          });
          setIsAuthenticated(authResult.success);
        } else {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Erro:', error);
      } finally {
        setLoading(false);
      }
    };

    checkPermissionsAndAuth();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  if (!permissionsGranted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>Permissões necessárias não concedidas</Text>
      </View>
    );
  }

  if (!isAuthenticated) {
    return (
      <View style={styles.authContainer}>
        <Text style={styles.authText}>Autenticação necessária</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Add" component={AddScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});