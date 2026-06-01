export const THEME = {
  colors: {
    primary: "#f5713d",
    primaryLight: "#ffe5d0",
    secondary: "#f1f1f1",

    dark: "#1a1a2e",
    light: "#ffffff",

    text: "#222",
    textGray: "#6b7280",
    textMuted: "#9ca3af",

    border: "rgba(255,255,255,0.2)",
    cardBg: "rgba(255,255,255,0.1)",
    iconBg: "rgba(255,255,255,0.2)",

    hover: "#e77b22",
    hoverBg: "rgba(245,113,61,0.1)",
  },

  fontSize: {
    sm: "1rem",
    base: "1.125rem",
    lg: "1.25rem",

    h1: "2.5rem",
    h2: "2rem",
    h3: "1.5rem",
    h4: "1.2rem",
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  spacing: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    section: "5rem",
  },

  radius: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
    xl: "1.5rem",
    full: "9999px",
  },

  shadow: {
    card: "rgba(14, 30, 37, 0.12) 0px 2px 4px, rgba(140, 143, 145, 0.32) 0px 2px 16px",
    hover: "0 8px 25px rgba(246, 112, 61, 0.25)",
  },

  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
};

export const getThemeValue = (path) => {
  return path.split(".").reduce((obj, key) => obj?.[key], THEME);
};

export default THEME;