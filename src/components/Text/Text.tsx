import { TextStyle } from 'react-native';
import * as S from './Text.styles';


interface ITextProps {
  text?: string
  style?: TextStyle
  testID?: string
} 

const Text: React.FC<ITextProps> = ({ 
  text = '',
  style,
  testID
}) => {
  return(
    <S.Text 
    testID={testID}
    style={style}>{text}</S.Text>
  )
}

export default Text;