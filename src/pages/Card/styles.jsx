import styled from "styled-components";
import { Burguer as BaseBurguer } from "../../components/Burguer";
import { Drawer as BaseDrawer } from "../../components/Drawer";
import { Tabs as BaseTabs } from "../../components/Tabs";
import { H2 } from "../../components/Typography";
import logo from "../../assets/img/Logo Motiva.svg";

export const Logo = styled.img.attrs({ src: logo })`
  position: fixed;
  z-index: 20;

  margin: ${({ theme }) => theme.$spacing} 0px 0px
    calc((${({ theme }) => theme.$spacing} * 2) + 2em);
`;

export const Header = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: center;
  align-items: flex-start;
  overflow: auto;
`;
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
