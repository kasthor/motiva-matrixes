import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
import theme from "./theme";
import { I18nextProvider } from "react-i18next";
import i18n from "./localization"

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <Routes />
      </I18nextProvider>
    </ThemeProvider>
  );
}
