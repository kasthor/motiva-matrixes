import styled from "styled-components";

export const TabBar = styled.div`
  --border-bottom-height: 2px;
  display: flex;
  box-shadow: 0px 10px 10px ${({ theme }) => theme.$gray};
  padding: 0px 0px var(--border-bottom-height) 0px;

  overflow-x: auto;

  --ms-overflow-style: none;
  scrollbar-height: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Tab = styled.div`
  position: relative;
  padding: 10px 20px;
  font-weight: 800;
  color: ${({ theme }) => theme.$gray};
  text-transform: uppercase;
  transition: color 200ms 200ms;
  white-space: nowrap;

  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: var(--border-bottom-height);
    background-color: ${({ theme }) => theme.$primary};
    transition: height ease 200ms 200ms, opacity ease 200ms 200ms;
    opacity: 0;
    transform: translateY(100%);
  }

  &:hover {
    color: ${({ theme }) => theme.$primary};

    ::after {
      height: var(--border-bottom-height);
      opacity: 1;
    }
  }
`;

export const Tabs = ({ tabs, ...props }) => {
  const handleOnCLick = (id) => {
    onSelect(id);
  };

  return (
    <TabBar {...props}>
      {tabs.map((tab, idx) => (
        <Tab onClick={() => onSelect(idx)}>{tab}</Tab>
      ))}
    </TabBar>
  );
};
