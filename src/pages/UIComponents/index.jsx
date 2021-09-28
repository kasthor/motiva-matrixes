import styled from "styled-components";

import { Typography } from "./Typography";
import { Tabs } from "./Tabs";

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UIComponents = () => {
  return (
    <Container>
      <h1>Components</h1>
      <Typography />
      <Tabs />
    </Container>
  );
};
