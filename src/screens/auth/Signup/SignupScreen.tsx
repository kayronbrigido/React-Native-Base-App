import React from 'react';
import * as S from './SignupScreen.styles';
import { Text } from '@src/components';
import { translate } from '@src/services/translate';

const SignupScreen: React.FC = () => {
  return(
    <S.Container>
      <Text 
      testId='signup'
      text={translate('SCREEN.SIGNUP.TITLE')} />
    </S.Container>
  )
}

export default SignupScreen;