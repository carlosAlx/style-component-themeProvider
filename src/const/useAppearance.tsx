import React, { useState } from "react";
import { Appearance } from "react-native";

const useAppearance = () => {
  const [currentTheme, setCurrentTheme] = useState(Appearance.getColorScheme());
  return currentTheme;
};

export default useAppearance;
