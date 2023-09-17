import { createContext, useContext, useState } from "react";

const DataContext = createContext();
export const useData = () => useContext(DataContext);

function DataProvider({ children }) {
  const [theme, setTheme] = useState({
    name: "tako",
    selector: "tako",
    logoSm: "logos/tako-small.png",
    logo: "logos/tako.png",
    hero: "hero/hero-tako.png",
  });

  const changeTheme = ({ name, selector, logo, logoSm, hero }) => {
    setTheme({
      name,
      selector,
      logoSm,
      logo,
      hero,
    });
  };

  return (
    <DataContext.Provider value={{ theme, changeTheme }}>
      {children}
    </DataContext.Provider>
  );
}

export default DataProvider;
