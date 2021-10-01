import cards from "../../data/cards.json";
import { route } from "preact-router";
import { Container, Link, Title } from "./styles";

export const Menu = ({ selected, onClose }) => {
  const cleanStr = (str) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w]/g, "_")
      .toLowerCase();

  const handleOnClick = (e) => {
    const {
      target: {
        dataset: { href },
      },
    } = e;
    route(href);
    onClose();
  };

  return (
    <Container>
      <Title>Menu</Title>
      {Object.entries(cards).map(([brand], idx) => {
        const cleanBrand = cleanStr(brand);

        return (
          <Link
            key={idx}
            onClick={handleOnClick}
            selected={selected === cleanBrand}
            data-href={`/card/${cleanBrand}`}
          >
            {brand}
          </Link>
        );
      })}
    </Container>
  );
};
