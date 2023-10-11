import { Window } from "@src/config/variables";
import styled from "styled-components/native";

interface IProps {
  marginVertical?: number,
  marginHorizontal?: number,
  marginBottom?: number,
  marginTop?: number,
  paddingHorizontal?: number,
  paddingVertical?: number
}

export const TextInput = styled.TextInput`
padding-vertical: ${({ paddingVertical }: IProps) =>
    paddingVertical ? Window.heightScale(paddingVertical) : Window.heightScale(0.01)}px;
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
border-width: 1px;
`;

export const Container = styled.View``