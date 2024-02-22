import { useCallback, useEffect, useMemo, useState } from "react";

import { Props, Themetype, colorScheme } from "./type";
import { Appearance } from "react-native";
import { themeLight } from "../styles/theme/light";
import { themeDark } from "../styles/theme/dark";

const useAppearance = (): Props => {
  const [currentTheme, setCurrentTheme] = useState<Themetype>(
    Appearance.getColorScheme() || "light"
  );
  const handleChangeTheme = useCallback(({ colorScheme }: colorScheme) => {
    if (colorScheme) {
      setCurrentTheme(colorScheme);
    }
  }, []);

  const theme = useMemo(() => {
    if (currentTheme === "light") {
      return themeLight;
    } else return themeDark;
  }, [currentTheme]);

  useEffect(() => {
    Appearance.addChangeListener(handleChangeTheme);
    return () => Appearance.addChangeListener(handleChangeTheme).remove();
  }, [handleChangeTheme]);
  return { currentTheme, theme };
};

export default useAppearance;
