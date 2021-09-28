import styled from "styled-components";
import { H1, H2, H3, Text } from "../../../components/Typography";

const Container = styled.div``;
export const Typography = () => <Container>
  <H1>Heading 1</H1>
  <H2>Heading 2</H2>
  <H3>Heading 3</H3>
  <Text>Regular text</Text>
</Container>;
