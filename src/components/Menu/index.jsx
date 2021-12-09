import cards from "../../data/cards.json";
import { route } from "preact-router";
import { Container, Header, Link, Title, Content } from "./styles";
import logo from "../../assets/img/Motiva Logo Solid  WHITE 2019.svg";
import { useTranslation } from 'react-i18next';

export const Menu = ({ title, main, options, selected, onClose }) => {
  const {t} = useTranslation();
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
    onClose && onClose();
  };

  return (
    <Container main={main}>
      {title && <Title>{title}</Title>}
      {main && (
        <Header>
          <img src={logo} />
          <p>{ t("menu.instructions") }</p>
        </Header>
      )}
      <Content main={main}>
        {options.map((brand, idx) => {
          const cleanBrand = cleanStr(brand);

          return (
            <Link
              main={main}
              key={idx}
              onClick={handleOnClick}
              selected={selected === cleanBrand}
              data-href={`/card/${cleanBrand}`}
            >
              {t(`brand.${cleanStr(brand)}`)}
            </Link>
          );
        })}
      </Content>
    </Container>
  );
};
