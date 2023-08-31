import { Dimensions } from "react-native";

export const Window = {
  widthScale: (value: number) => Dimensions.get('window').width * value,
  heightScale: (value: number) => Dimensions.get('window').height * value,
}