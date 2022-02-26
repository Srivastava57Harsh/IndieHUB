module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      scrollCol: "#FF828B",
      scrollBack: "#1D1A1A",
    },
    fontFamily: { Roboto: ["Roboto", "sans-serif"] },
  },
  variants: {
    extend: { animation: ["motion-safe"] },
  },
  plugins: [require("tailwind-scrollbar")],
};
