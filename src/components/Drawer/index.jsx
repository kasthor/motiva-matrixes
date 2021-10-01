import styled from "styled-components";

export const Drawer = styled.div`
  position: fixed;
  height: 100vh;
  width: 66%;
  left: 0px;
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.$white};

  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
`;
