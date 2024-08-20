import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './Products';
import singIn from './scr/componets/User/singIn/SingIn';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={singIn} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Products" 
          component={Products} 
          options={{ title: 'App Market' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
