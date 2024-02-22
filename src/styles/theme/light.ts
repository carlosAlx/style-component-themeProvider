import { DefaultTheme } from "styled-components";
import * as Colors from "../colors";

export const themeLight: DefaultTheme = {
  colors: {
    primary: {
      primary: Colors.brand04,
      onMain: Colors.white,
    },
    secondary: {
      primary: Colors.brand01,
      onMain: Colors.white,
    },
    background: {
      primary: Colors.white,
      onMain: Colors.black,
    },
    error: {
      primary: Colors.red,
      onMain: Colors.white,
    },
    surface: {
      primary: Colors.neutrais,
      onMain: Colors.white,
    },
  },
};
