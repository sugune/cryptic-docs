import { useState } from "react";
import { useData } from "./context";
import Navbar from "./components/Navbar";

import {
  Hero,
  Themes,
  SlideOption,
  SelectOption,
  WritingOption,
  Footer,
} from "./sections";

const App = () => {
  const { theme } = useData();

  return (
    <main className={`${theme.selector} bg-ct-primary min-h-screen`}>
      <Navbar />
      <section id="home" className="px-8 sm:px-16 py-12 sm:py-24">
        <Hero />
      </section>
      <section id="themes" className="px-8 sm:px-16 py-12 sm:py-24">
        <Themes />
      </section>
      <section id="options" className="px-8 sm:px-16 py-12 sm:py-24">
        <SlideOption />
      </section>
      <section className="px-8 sm:px-16 py-12 sm:py-24">
        <SelectOption />
      </section>
      <section className="px-8 sm:px-16 py-12 sm:py-24">
        <WritingOption />
      </section>
      <footer className="px-8 sm:px-16 py-8 bg-ct-secondary mt-16">
        <Footer />
      </footer>
    </main>
  );
};

export default App;
