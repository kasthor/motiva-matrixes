import { useState } from "preact/hooks";
import cards from "../../data/cards.json";

import { Container, Title, Tabs, Burguer, Drawer } from "./styles";

export const Card = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  console.log(cards);
  return (
    <Container>
      <Title>Implant card placeholder</Title>
      <Burguer open={openDrawer} toggle={setOpenDrawer} />
      <Drawer open={openDrawer}></Drawer>
      <Tabs tabs={["Tab 1", "Tab 2", "Tab 3", "Tab 4", "Tab 5", "Tab 6"]} />
    </Container>
  );
};
