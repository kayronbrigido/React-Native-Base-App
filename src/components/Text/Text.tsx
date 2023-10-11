import { TextStyle } from 'react-native';
import * as S from './Text.styles';

interface ITextProps {
  text?: string
  style?: TextStyle
  testID?: string,
  color?: string,
  marginVertical?: number,
  marginHorizontal?: number,
  marginBottom?: number,
  marginTop?: number,
  paddingHorizontal?: number,
  paddingVertical?: number,
}

const Text: React.FC = ({
  text = '',
  style,
  testID,
  color,
  marginVertical,
  marginHorizontal,
  marginBottom,
  marginTop,
  paddingHorizontal,
  paddingVertical,
}: ITextProps) => {
  return (
    <S.Text
      testID={testID}
      color={color}
      style={style}
      marginVertical={marginVertical}
      marginHorizontal={marginHorizontal}
      marginBottom={marginBottom}
      marginTop={marginTop}
      paddingHorizontal={paddingHorizontal}
      paddingVertical={paddingVertical}
      >
      {text}</S.Text>
  )
}

export default Text;