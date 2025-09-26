module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        varela: ["Varela Round", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#000000",
        foreground: "#FFFFFF",
        brand: "#FFAA00",
        surface: "#0D0D0D",
        muted: { light: "#6B7280", dark: "#9CA3AF" },
      },
      theme: {
        // screens: {
        //   xs: "480px", // celulares menores
        //   sm: "640px", // celulares grandes
        //   md: "820px", // tablets
        //   lg: "1024px", // notebooks
        //   xl: "1280px", // desktops médios
        //   xxl: "1536px", // monitores grandes
        // },
      },

      spacing: {
        pxmobile: "1.5rem",
      },
      scale: {
        zoom: "1.05",
      },
      transitionDuration: {
        default: "200ms",
      },
    },
  },
  plugins: [],
};
