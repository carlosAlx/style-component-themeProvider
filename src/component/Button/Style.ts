import styled, { DefaultTheme } from "styled-components/native";

export const ButtonTheme = styled.Pressable`
  background-color: ${({ theme }) => theme.colors.error.onMain};
  padding: 10px 12px;
`;
