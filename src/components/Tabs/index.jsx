import { Tab, TabBar } from "./styles";

export const Tabs = ({ tabs, onSelect, ...props }) => {
  const handleOnCLick = (tab) => {
    onSelect(tab);
  };

  return (
    <TabBar {...props}>
      {tabs.map((tab, idx) => (
        <Tab key={idx} onClick={() => handleOnCLick(tab)}>{tab}</Tab>
      ))}
    </TabBar>
  );
};
