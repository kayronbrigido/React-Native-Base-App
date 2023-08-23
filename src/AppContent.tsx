import React from 'react';
import { View } from "react-native";
import Text from './components/Text/Text';
import './i18n'
import { translate } from './services/translate';

const AppContent: React.FC = () => {

  return (
    <View>
      <Text text={translate('GENERAL.YES')} />
    </View>
  )
}

export default AppContent;