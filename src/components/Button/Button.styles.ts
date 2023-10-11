import { DefaultTheme } from '@src/config/theme';
import { Window } from '@src/config/variables';
import styled from 'styled-components/native';

interface IProps {
  marginVertical?: number,
  marginHorizontal?: number,
  marginBottom?: number,
  marginTop?: number,
  paddingHorizontal?: number,
  paddingVertical?: number
}

export const Touch = styled.TouchableOpacity<IProps>`
background-color: ${DefaultTheme.button.primaryColor};
padding-vertical: ${({ paddingVertical }: IProps) =>
    paddingVertical ? Window.heightScale(paddingVertical) : Window.heightScale(0.02)}px;
padding-horizontal: ${({ paddingHorizontal }: IProps) =>
    paddingHorizontal ? Window.widthScale(paddingHorizontal) : Window.widthScale(0.01)}px;
margin-vertical: ${({ marginVertical }: IProps) =>
    marginVertical ? Window.heightScale(marginVertical) : Window.heightScale(0.01)}px;
margin-horizontal: ${({ marginHorizontal }: IProps) =>
    marginHorizontal ? Window.widthScale(marginHorizontal) : Window.widthScale(0.01)}px;
margin-bottom: ${({ marginBottom }: IProps) =>
    marginBottom ? Window.heightScale(marginBottom) : Window.heightScale(0.01)}px;
margin-top: ${({ marginTop }: IProps) =>
    marginTop ? Window.widthScale(marginTop) : Window.widthScale(0.01)}px;
border-radius: ${Window.widthScale(0.01)}px;
justify-content: center;
align-items: center;
`