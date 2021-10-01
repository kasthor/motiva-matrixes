import styled from "styled-components";

const StyledBurguer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;
  position: fixed;
  padding: 0px;
  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.01rem;
    background-color: ${({ theme, open }) =>
      open ? theme.$black : theme.$black};
    border-radius: 10px;
    position: relative;
    transform-origin: 1px;
    transition: all 0.3s linear;
    transform: rotate(-45deg);

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(-45deg)")}
        ${({ open }) => (open ? "scaleX(1)" : "scaleX(0.5)")};
    }

    :not(:first-child):not(:last-child) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: rotate(-45deg)
        ${({ open }) => (open ? "translateX(-200%)" : "translateX(0)")};
    }

    :last-child {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(-45deg)")}
        ${({ open }) => (open ? "scaleX(1)" : "scaleX(0.5)")}
        ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    }
  }
`;

export const Burguer = ({ open, toggle, ...props }) => {
  const handleOnClick = () => {
    toggle((state) => !state);
  };

  return (
    <StyledBurguer open={open} onClick={handleOnClick} {...props}>
      <div />
      <div />
      <div />
    </StyledBurguer>
  );
};
