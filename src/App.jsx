import { ThemeProvider } from "styled-components";
import { Logo } from "./logo";
import { UIComponents } from "./pages/UIComponents";
import theme from "./theme"

export function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
      <UIComponents />
      </ThemeProvider>
    </>
  );
}
