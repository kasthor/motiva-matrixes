import { Link as BaseLink,} from "preact-router";
import { H2 } from "../../components/Typography";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export const Link = styled(BaseLink)`
  padding: 30px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.$gray : theme.$white};

  color: black;
  text-decoration: none;
  font-weight: bold;
`;

export const Title = styled(H2)`
  margin-top: calc((${({ theme }) => theme.$spacing} * 2) + 1rem);
  margin-left: ${({ theme }) => theme.$spacing};
`;
