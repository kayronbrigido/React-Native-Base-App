import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login/LoginScreen';
import Signup from './Signup/SignupScreen';
import { Stacks } from '@src/services/navigationService';

const AuthNavigator: React.FC = () => {

  const AuthStack = createNativeStackNavigator();

  return (
    <AuthStack.Navigator
    initialRouteName={Stacks.AuthStack.Login}
    screenOptions={{
      headerShown: false
    }}
    >
      <AuthStack.Screen
        name={Stacks.AuthStack.Login}
        component={Login}
      />
      <AuthStack.Screen
        name={Stacks.AuthStack.Signup}
        component={Signup}
      />
    </AuthStack.Navigator>
  )
}

export default AuthNavigator