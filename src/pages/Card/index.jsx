import { useEffect, useState } from "preact/hooks";
import { route } from "preact-router";
import { cards, cardImages } from "../../data/";
import { useTranslation } from "react-i18next";

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

const brandsOrder = [
  "Ergonomix",
  "Ergonomix Oval",
  "Ergonomix2",
  "Flora",
  "Gluteal Armonic",
  "MIA",
  "Round",
  "True Fixation",
  "Sizers",
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
  <img src={cardImages[`${brand}/${category}`]} />
);

export const Card = ({ brand, category }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // TODO: useCardData hook

  const {t} = useTranslation();
  const cleanStr = (str) =>
    str
      ?.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w]/g, "_")
      .toLowerCase();

  const getV = (obj, str) =>
    Object.entries(obj).find(([k]) => cleanStr(k) === str);

  const getA = (arr, str) => arr.find((k) => cleanStr(k) === str);
  const orderBy = (o) => (a, b) =>
    o.indexOf(a.normalize("NFD")) - o.indexOf(b.normalize("NFD"));

  let brands = Object.keys(cards);
  brands = brands.sort(orderBy(brandsOrder));

  let [brandName, categories] = brand && getV(cards, brand);

  categories = categories ? categories.sort(orderBy(categoriesOrder)) : [];

  // END: useCardData hook

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
      {!brand ? (
        <Menu main options={brands} selected={brand} />
      ) : (
        <>
          <Header>
            <Logo />
            <Title>{t(`brand.${cleanStr(brandName)}`)}</Title>
            <Burguer open={openDrawer} toggle={setOpenDrawer} />
            <Drawer open={openDrawer}>
              <Menu
                title={t("menu.title")}
                options={brands}
                selected={brand}
                onClose={() => setOpenDrawer(false)}
              />
            </Drawer>
            <Tabs
              selected={selectedCategory}
              tabs={categories}
              onSelect={setSelectedCategory}
            />
          </Header>
          <Content>
            <CardImage brand={brandName} category={selectedCategory} />
          </Content>
        </>
      )}
    </Container>
  );
};
