import styled from "styled-components/native";
import { Card } from "native-base";

export const StyledView = styled.View`
  width: 100%;
  height: 20px;
  /* padding: 3px; */
  border-color: grey;
  border-width: 2;
  border-radius: 20px;
  margin: auto;
  justify-content: center;
`;

export const StyledInner = styled.View`
  width: 100%;
  height: 100%;

  border-radius: 15px;
  background-color: #19294d;
  margin-top: auto;
  margin-bottom: auto;
`;

export const StyledText = styled.Text`
  font-size: 13px;
  color: white;
  position: absolute;
  z-index: 1;
  align-self: center;
`;

export const StyledTitle = styled.Text`
  font-size: 20;
  color: black;
  position: absolute;
  z-index: 1;
  align-self: center;
  padding-top: 25;
`;
