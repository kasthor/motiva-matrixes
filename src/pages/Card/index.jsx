import { useEffect, useState } from "preact/hooks";
import { route } from "preact-router";
import cards from "../../data/cards.json";

const categoriesOrder = [
  "Mini",
  "Demi",
  "Low",
  "Medium",
  "Full",
  "Full Projection",
  "Corsé",
  "Corsé Projection",
];

import {
  Container,
  Logo,
  Title,
  Tabs,
  Burguer,
  Drawer,
  Header,
  Content,
} from "./styles";
import { Menu } from "../../components/Menu";

const CardImage = ({ brand, category }) => (
  <img src={`/cards/${brand}/${category}.svg`} />
);

export const Card = ({ brand, category }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const cleanStr = (str) =>
    str
      ?.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w]/g, "_")
      .toLowerCase();

  const getV = (obj, str) =>
    Object.entries(obj).find(([k]) => cleanStr(k) === str);

  const getA = (arr, str) => arr.find((k) => cleanStr(k) === str);
  const orderBy = (o) => (a, b) => o.indexOf(a) - o.indexOf(b);

  let [brandName, categories] = getV(cards, brand);

  categories = categories.sort(orderBy(categoriesOrder));

  useEffect(() => {
    route(`/card/${cleanStr(brand)}/${cleanStr(selectedCategory)}`, true);
  }, [brand, selectedCategory]);

  useEffect(() => {
    if (category === "") {
      setSelectedCategory(categories[0]);
    } else if (!selectedCategory) {
      setSelectedCategory(getA(categories, category));
    }
  }, [category, categories]);

  document.title = `${brandName} - ${selectedCategory}`;

  return (
    <Container>
      <Header>
        <Logo />
        <Title>{brandName}</Title>
        <Burguer open={openDrawer} toggle={setOpenDrawer} />
        <Drawer open={openDrawer}>
          <Menu selected={brand} onClose={() => setOpenDrawer(false)} />
        </Drawer>
        <Tabs tabs={categories} onSelect={setSelectedCategory} />
      </Header>
      <Content>
        <CardImage brand={brandName} category={selectedCategory} />
      </Content>
    </Container>
  );
};
