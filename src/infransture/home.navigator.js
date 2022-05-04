import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/home.screen';
import { DetailsScreen } from '../screens/recipe.Detailscreen';

const Stack = createNativeStackNavigator();

export const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="main" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="detail" component={DetailsScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};
