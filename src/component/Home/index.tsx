import React from "react";
import {Feather} from "@expo/vector-icons";
import { Container, IconContent, TextIcon } from "./styles";

const Home = () => {
  return (
    <Container>
      <IconContent>
        <Feather name="home" color={"#fff"}/>
        <TextIcon>Home</TextIcon>
      </IconContent>
    </Container>
  );
};

export default Home;
