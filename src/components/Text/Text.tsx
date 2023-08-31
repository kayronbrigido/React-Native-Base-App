import { TextStyle } from 'react-native';
import * as S from './Text.styles';


interface ITextProps {
  text?: string
  style?: TextStyle 
} 

const Text: React.FC<ITextProps> = ({ 
  text = '',
  style
}) => {
  return(
    <S.Text style={style}>{text}</S.Text>
  )
}

export default Text;