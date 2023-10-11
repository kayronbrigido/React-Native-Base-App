import { Window } from '@src/config/variables';
import styled from 'styled-components/native';

interface IProps {
  color?: string
  marginVertical?: number,
  marginHorizontal?: number,
  marginBottom?: number,
  marginTop?: number,
  paddingHorizontal?: number,
  paddingVertical?: number
}

export const Text = styled.Text<IProps>`
color: ${({ color }: IProps) => color ? color : 'red'};
padding-vertical: ${({ paddingVertical }: IProps) =>
    paddingVertical ? Window.heightScale(paddingVertical) : 0}px;
padding-horizontal: ${({ paddingHorizontal }: IProps) =>
    paddingHorizontal ? Window.widthScale(paddingHorizontal) : 0}px;
margin-vertical: ${({ marginVertical }: IProps) =>
    marginVertical ? Window.heightScale(marginVertical) : 0}px;
margin-horizontal: ${({ marginHorizontal }: IProps) =>
    marginHorizontal ? Window.widthScale(marginHorizontal) : 0}px;
margin-bottom: ${({ marginBottom }: IProps) =>
    marginBottom ? Window.heightScale(marginBottom) : 0}px;
margin-top: ${({ marginTop }: IProps) =>
    marginTop ? Window.widthScale(marginTop) : 0}px;
`