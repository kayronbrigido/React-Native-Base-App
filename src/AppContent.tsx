import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigation from './MainNavigation';
import { navigationRef } from '@src/services/navigationService';
import './i18n'

const AppContent: React.FC = () => {

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigationRef}>
        <MainNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default AppContent;