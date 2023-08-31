import React from 'react';
import * as S from './TouchableOpacity.styles';
import Text from '@components/Text/Text';
import { TextStyle, ViewStyle } from 'react-native';

interface ITouchableOpacityProps {
  text: string,
  textStyle?: TextStyle,
  touchStyle?: ViewStyle,
  onPress: () => {},
  disable?: boolean,
  marginVertical?: number,
  marginHorizontal?: number,
  marginBottom?: number,
  marginTop?: number,
  paddingHorizontal?: number,
  paddingVertical?: number,

}

const TouchableOpacity: React.FC<ITouchableOpacityProps> = ({
  text,
  textStyle,
  touchStyle,
  onPress,
  disable,
  marginVertical,
  marginHorizontal,
  marginBottom,
  marginTop,
  paddingHorizontal,
  paddingVertical
}) => {

  return (
    <S.Touch
      onPress={onPress}
      style={touchStyle}
      disabled={disable}
      marginVertical={marginVertical}
      marginHorizontal={marginHorizontal}
      marginBottom={marginBottom}
      marginTop={marginTop}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
    >
      <Text text={text} style={textStyle} />
    </S.Touch>
  )

}


export default TouchableOpacity;