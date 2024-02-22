import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { ThemeProvider } from "styled-components";
import Home from "./src/component/Home";
import ButtonTheme from "./src/component/Button";
import useAppearance from "./src/useAppearance";

export default function App() {
  const { theme, currentTheme } = useAppearance();

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Home />
        <ButtonTheme onPress={()=>{console.log(theme)}}/>
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
