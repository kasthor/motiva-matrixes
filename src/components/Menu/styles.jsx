import { Link as BaseLink } from "preact-router";
import { H2 } from "../../components/Typography";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${({ main }) => (main ? "center" : "left")};
  gap: ${({ main }) => (main ? "10px" : "0px")};
`;

export const Link = styled(BaseLink)`
  padding: 30px;
  background-color: ${({ theme, selected }) =>
    selected ? theme.$gray : theme.$white};

  color: black;
  text-decoration: none;
  font-weight: bold;
  text-align: ${({ main }) => (main ? "center" : "left")};
  border-radius: ${({ main }) => (main ? "11px" : "0px")};
  box-shadow: ${({ theme, main }) =>
    main ? `0px 5px 10px ${theme.$gray}` : "0px"};
`;

export const Title = styled(H2)`
  margin-top: calc((${({ theme }) => theme.$spacing} * 2) + 1rem);
  margin-left: ${({ theme }) => theme.$spacing};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  width: ${({ main }) => (main ? "90%" : "auto")};
  gap: ${({ main }) => (main ? "10px" : "0px")};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 20%;
  background-color: ${({ theme }) => theme.$primary};
  color: ${({ theme }) => theme.$white};
  width: 100%;
  padding: 40px;
`;
