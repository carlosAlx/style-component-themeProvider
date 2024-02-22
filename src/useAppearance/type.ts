import { ColorSchemeName } from "react-native";
import { DefaultTheme } from "styled-components";

export type Themetype = "light" | "dark";

export interface Props {
  currentTheme: Themetype;
  theme: DefaultTheme;
}

export interface colorScheme {
  colorScheme: ColorSchemeName;
}
