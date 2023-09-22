import React from 'react';
import * as S from './LoginScreen.styles';
import { translate } from '@services/translate';
import { TouchableOpacity, Button } from '@src/components';
import navigationService, { Stacks } from '@src/services/navigationService';

const LoginScreen: React.FC = () => {

  return (
    <S.Container>
      <Button
        testID='login'
        text={translate('SCREEN.LOGIN.LOGIN')}
        paddingVertical={0.02}
        onPress={() => { }}
      />
      <Button
        testID='signup'
        text={translate('SCREEN.LOGIN.SIGNUP')}
        onPress={() => { navigationService.navigate('Signup') }} />
    </S.Container>
  )
}

export default LoginScreen;