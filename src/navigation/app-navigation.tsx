import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/home';
import ProductScreen from '../screens/product/product';

const RootStack = createNativeStackNavigator();
const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};
const AppNavigation = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <RootStack.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
        initialRouteName="Home"
      >
        <RootStack.Screen name="Home" component={HomeScreen} />
        <RootStack.Screen name="ProductScreen" component={ProductScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
