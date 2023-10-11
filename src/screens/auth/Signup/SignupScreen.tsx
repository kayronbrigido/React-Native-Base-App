import React, { useState } from 'react';
import * as S from './SignupScreen.styles';
import { Button, Text, TextInput } from '@src/components';
import { translate } from '@src/services/translate';

const SignupScreen: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    lastname: ''
  })
  return(
    <S.Container>
      <Text 
      testId='signup'
      text={translate('SCREEN.SIGNUP.TITLE')} />
      <TextInput 
      value={form.name}
      label='nome'
      onChangeText={(value: string) => setForm({...form, name: value})}
      />
      <TextInput
      value={form.lastname}
      label='sobrenome'
      onChangeText={(value: string) => setForm({...form, lastname: value})}
      />
      <Button
      onPress={() => { }} 
      text={translate('SCREEN.SIGNUP.TITLE')} />
    </S.Container>
  )
}

export default SignupScreen;