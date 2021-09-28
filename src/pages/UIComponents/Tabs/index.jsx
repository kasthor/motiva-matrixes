import styled from "styled-components";
import { Tab, TabBar } from "../../../components/Tabs";

const Container = styled.div``;

export const Tabs = () => (
  <Container>
    <TabBar>
      <Tab>Tab 1</Tab>
      <Tab>Tab 2</Tab>
      <Tab>Tab 3</Tab>
      <Tab>Tab 4</Tab>
    </TabBar>
  </Container>
);
