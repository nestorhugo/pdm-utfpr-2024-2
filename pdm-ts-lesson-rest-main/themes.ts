export const lightTheme = {
  colors: {
    primary: "#007AFF",
    background: "#FFFFFF",
    text: "#000000",
    border: "#E5E5EA",
    error: "#FF3B30",
    card: "#dbdbdb",
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  typography: {
    title: {
      fontSize: 24,
      fontWeight: "bold",
    },
    body: {
      fontSize: 16,
      fontWeight: "normal",
    },
  },
};

export const darkTheme = {
  colors: {
    primary: "#0A84FF",
    background: "#202c33",
    text: "#eaeaea",
    border: "#38383A",
    error: "#FF453A",
    card: "#1b1b1d",
  },
  spacing: {
    small: 8,
    medium: 16,
    large: 24,
  },
  typography: {
    title: {
      fontSize: 24,
      fontWeight: "bold",
    },
    body: {
      fontSize: 16,
      fontWeight: "normal",
    },
  },
};

export type Theme = typeof lightTheme;
