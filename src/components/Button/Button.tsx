import React from 'react';
import * as S from './Button.styles';
import Text from '@components/Text/Text';
import { TextStyle, ViewStyle } from 'react-native';

interface IButtonProps {
  text: string,
  textStyle?: TextStyle,
  buttonStyle?: ViewStyle,
  onPress: () => void,
  disable?: boolean,
  marginVertical?: number,
  marginHorizontal?: number,
  marginBottom?: number,
  marginTop?: number,
  paddingHorizontal?: number,
  paddingVertical?: number,
  testID?: string,
}

const Button: React.FC<IButtonProps> = ({
  text,
  textStyle,
  buttonStyle,
  onPress,
  disable,
  marginVertical,
  marginHorizontal,
  marginBottom,
  marginTop,
  paddingHorizontal,
  paddingVertical,
  testID
}) => {

  return (
    <S.Touch
      testID={testID}
      onPress={onPress}
      style={buttonStyle}
      disabled={disable}
      marginVertical={marginVertical}
      marginHorizontal={marginHorizontal}
      marginBottom={marginBottom}
      marginTop={marginTop}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
    >
      <Text text={text} style={{color: 'white', ...textStyle}} />
    </S.Touch>
  )

}


export default Button;