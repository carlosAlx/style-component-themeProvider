import { DefaultTheme } from "styled-components";
import * as Colors from "../colors";

export const themeDark: DefaultTheme = {
  colors: {
    primary: {
      primary: Colors.brand05,
      onMain: Colors.white,
    },
    secondary: {
      primary: Colors.brand02,
      onMain: Colors.white,
    },
    background: {
      primary: Colors.black,
      onMain: Colors.white,
    },
    error: {
      primary: Colors.red,
      onMain: Colors.white,
    },
    surface: {
      primary: Colors.white,
      onMain: Colors.neutrais,
    },
  },
};
