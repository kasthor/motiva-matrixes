import { ThemeProvider } from "styled-components";
import { Routes } from "./routes";
import theme from "./theme";

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}
