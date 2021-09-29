import { ThemeProvider } from "styled-components";
import { Logo } from "./logo";
import { UIComponents } from "./pages/UIComponents";
import { Card } from "./pages/Card";
import theme from "./theme";

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Card />
      </ThemeProvider>
    </>
  );
}
