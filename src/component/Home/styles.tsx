import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const IconContent = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  padding: 5px;
  border-radius: 10px;
  width: 70px;
`;
export const TextIcon = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;
