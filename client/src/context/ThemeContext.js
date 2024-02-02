import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvide = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

// costum hook

const useTheme = () => useContext(ThemeContext);
export { useTheme, ThemeProvide };
