import styled from "styled-components/native";

export const Container = styled.View`
  width: 90%;
  background-color: ${({ theme }) => theme.colors.primary.onMain};
`;
export const IconContent = styled.View`
  background-color: ${({ theme }) => theme.colors.secondary.primary};
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
  color: ${({ theme }) => theme.colors.primary.onMain};
`;
