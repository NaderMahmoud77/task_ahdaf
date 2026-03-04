import "./App.css";
import { useState } from "react";

// Components
import HeroSection from "./components/Hero/HeroSection";
import SectionTwo from "./components/Section2/SectionTwo";
import Products from "./components/SectionProduct/Products";
import MobileDrawer from "./components/All/Drawer";

function App() {
  let [openDrawer, setOpenDrawer] = useState(false);

  function HandleOpenDrawer() {
    setOpenDrawer((e) => !e);
  }

  return (
    <>
      <HeroSection HandleOpenDrawer={HandleOpenDrawer} />
      <SectionTwo />
      <Products />
      <MobileDrawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
    </>
  );
}

export default App;
