import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from "styled-components";
import Home from "./src/component/Home";
import { useState } from "react";
import ButtonTheme from "./src/component/Button";
import { themeDark } from "./src/styles/theme/dark";
import { themeLight } from "./src/styles/theme/light";

export default function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <ThemeProvider theme={theme === "light" ? themeLight : themeDark}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Home />
        <ButtonTheme   onPress={() =>
          setTheme((old) => {
            if (old === "light") {
              return "dark";
            } else {
              return "light";
            }
          })
        } />

        <StatusBar style="auto" />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
