import styled from "styled-components";
import { Burguer as BaseBurguer } from "../../components/Burguer";
import { Drawer as BaseDrawer } from "../../components/Drawer";
import { Tabs as BaseTabs } from "../../components/Tabs";
import { H2 } from "../../components/Typography";

export const Container = styled.div``;
export const Title = styled(H2)`
  margin-top: calc((${({ theme }) => theme.$spacing} * 2) + 1rem);
  margin-left: ${({ theme }) => theme.$spacing};
`;
export const Burguer = styled(BaseBurguer)`
  top: 0px;
  left: 0px;
  position: absolute;
  margin: ${({ theme }) => theme.$spacing};
  z-index: 20;
`;
export const Drawer = styled(BaseDrawer)`
  z-index: 10;
  top: 0px;
  left: 0px;
`;
export const Tabs = styled(BaseTabs)``;
