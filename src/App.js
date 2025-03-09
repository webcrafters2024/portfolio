import { useEffect } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./page/Home";
import "animate.css";
import WOW from "wowjs";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import Theme from "./components/Theme/Theme";

function App() {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <>
     <ThemeContextProvider>
      <Header />
      <Home />
      <Footer />
      <Theme />
      </ThemeContextProvider>
    </>
  );
}

export default App;
