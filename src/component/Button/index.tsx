import { Button, Pressable, Text, View } from "react-native";
import React, { useContext, useState } from "react";
import * as B from "./Style";
import { ThemeContext } from "styled-components";

type Props = {
  onPress?: () => void;
};

const ButtonTheme = ({ onPress }: Props) => {
 const themeProvider = useContext(ThemeContext)
  return (
    <View>
      <B.ButtonTheme onPress={onPress}>
        <Text>change theme</Text>
      </B.ButtonTheme>
      <Button  title="teste" color={themeProvider?.colors.secondary.primary}/>
    </View>
  );
};

export default ButtonTheme;
