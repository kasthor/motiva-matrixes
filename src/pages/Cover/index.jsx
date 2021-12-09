import styled from "styled-components";
import logo from "../../assets/img/welcome-imagen+logo.svg";
import { H1, Small } from "../../components/Typography";
import { Button } from "../../components/Button";
import { route } from "preact-router";
import { Trans, useTranslation } from "react-i18next";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-position: center top;
  background-size: cover;
  max-width: 1024px;
  margin: auto;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.$gray};
  height: 50vh;
  width: 100vw !important;
  max-width: 1024px;
  padding-bottom: 1vh;
  margin: auto;

  :first-child {
    box-sizing: border-box;
  }
`;

export const Title = styled(H1)`
  align-self: center;
  justify-self: flex-start;
  background: white;
  padding: 10%;
  max-width: 80%;
  text-align: center;
  font-weight: 100;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.$primary};
  strong {
    font-weight: 300;
  }
`;
export const Content = styled(Small)`
  text-align: center;
  line-height: 1.7em;
  letter-spacing: 0.1em;
  max-width: 80%;
`;
export const ButtonContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: stretch;
  width: 90%;

  button {
    width: 100%;
  }
`;
export const Cover = () => {
  const {t} = useTranslation();

  return (<>
    <Background></Background>
    <Container>
      <Title>
        <Trans i18nKey="cover.title" />
      </Title>
      <Content>
        {t("cover.description", { returnObjects: true }).map?.(i => <p>{i}</p>)}
      </Content>
      <ButtonContainer>
        <Button onClick={() => route("/card")}>
          {t("cover.action")}
        </Button>
      </ButtonContainer>
    </Container>
  </>);
};
