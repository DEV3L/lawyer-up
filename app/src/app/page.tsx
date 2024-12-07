import { ThemeProvider } from "@mui/material";
import { CardVault } from "./components/CardVault";
import Footer from "./components/Footer";
import { Head } from "./components/Head";
import "./globals.css";
import theme from "./theme";
export default function Home() {
  return (
    <>
      <Head />
      <ThemeProvider theme={theme}>
        <CardVault />
      </ThemeProvider>
      <Footer />
    </>
  );
}
