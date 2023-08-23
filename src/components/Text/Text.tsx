import * as S from './Text.styles';


interface ITextProps {
  text?: string
} 

const Text: React.FC<ITextProps> = ({ text = ''}) => {
  return(
    <S.Text>{text}</S.Text>
  )
}

export default Text;