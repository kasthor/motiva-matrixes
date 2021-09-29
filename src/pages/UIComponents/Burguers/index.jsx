import styled from "styled-components";

import { Burguer } from "../../../components/Burguer";

const Container = styled.div``;

export const Burguers = ({ children, open, toggle }) => (
  <Container>
    <Burguer open={open} toggle={toggle} />
  </Container>
);
