/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  "#f2f7f4",
          100: "#e0ece5",
          200: "#c2d9cb",
          300: "#97bfa7",
          400: "#669f7f",
          500: "#2D6A4F",
          600: "#265c44",
          700: "#1f4a37",
          800: "#193b2c",
          900: "#122b1f",
        },
        sand: {
          50:  "#fdfaf6",
          100: "#f8f1e4",
          200: "#f0e0c4",
          300: "#e8c99a",
          400: "#dea96a",
          500: "#d4894a",
          600: "#c06e35",
          700: "#9d5529",
          800: "#7d4122",
          900: "#5e301a",
        },
        warm: {
          bg:   "#FAFAF7",
          card: "#FFFFFF",
          border: "#E8E5E0",
        },
      },
      fontFamily: {
        display: ["'DM Serif Display'", "Georgia", "serif"],
        body:    ["'DM Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 2px 20px rgba(0,0,0,0.06)",
        card: "0 4px 30px rgba(0,0,0,0.08)",
        lift: "0 8px 40px rgba(0,0,0,0.12)",
      },
    },
  },
  plugins: [],
};
