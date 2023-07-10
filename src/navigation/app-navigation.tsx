import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/home';
import ProductScreen from '../screens/product/product';
import ShoppingCartScreen from '../screens/shopping-cart/shopping-cart';
import PaymentWebviewScreen from '../screens/payment-webview/payment-webview';

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
        screenOptions={{ gestureEnabled: false }}
        initialRouteName="Home"
      >
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="Product Screen" component={ProductScreen} />
        <RootStack.Screen
          name="Shopping Screen"
          component={ShoppingCartScreen}
        />
        <RootStack.Screen
          name="Payment Screen"
          component={PaymentWebviewScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
