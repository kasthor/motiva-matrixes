import { Tab, TabBar } from "./styles";

export const Tabs = ({ tabs, selected, onSelect, ...props }) => {
  const handleOnCLick = (tab) => {
    onSelect(tab);
  };

  return (
    <TabBar {...props}>
      {tabs.map((tab, idx) => (
        <Tab key={idx} onClick={() => handleOnCLick(tab)} 
          className={selected === tab && "selected"}>
          {tab}
        </Tab>
      ))}
    </TabBar>
  );
};
