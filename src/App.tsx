import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { HomePage } from "./app/containers/homePage";

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`;

function App() {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  );
}

export default App;
