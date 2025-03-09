import React from "react";
import { useThemeContext } from "../../contexts/ThemeContext";

const Theme = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <>
      <button
        className="themeChangeBtn position-fixed top-50 end-0  z-3 "
        onClick={toggleTheme}
      >
        {theme === "light" ? (
          <>
            <i className="bi bi-brightness-high-fill ms-3 me-1"></i>
            <span className="me-3"> {theme} </span>
          </>
        ) : (
          <>
            <i className="bi bi-moon-stars-fill ms-3 me-1"></i>
            <span className="me-3">{theme} </span>
          </>
        )}
      </button>
    </>
  );
};

export default Theme;
