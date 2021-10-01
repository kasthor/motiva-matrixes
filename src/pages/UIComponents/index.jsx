import { useState } from "preact/hooks";

import styled from "styled-components";

import { Typography } from "./Typography";
import { Tabs } from "./Tabs";
import { Burguers } from "./Burguers";
import { Drawer } from "../../components/Drawer";

const Container = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const UIComponents = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Container>
      <h1>Components</h1>
      <Typography />
      <Tabs />
      <Burguers open={drawerOpen} toggle={setDrawerOpen} />
      <Drawer open={drawerOpen} />
    </Container>
  );
};
