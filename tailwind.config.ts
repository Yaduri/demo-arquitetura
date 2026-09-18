import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        japi: {
          warm: "#FAF8F5",
          sand: "#F4EFEB",
          cream: "#EDE7DE",
          border: "#E2DAD0",
          charcoal: "#161917",
          dark: "#1F2320",
          forest: {
            DEFAULT: "#264234",
            light: "#345543",
            dark: "#1A2E24",
          },
          wood: {
            DEFAULT: "#B56636",
            light: "#C87B4C",
            dark: "#985227",
          },
          muted: "#6B726C",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 30px -10px rgba(22, 25, 23, 0.08)",
        card: "0 15px 35px -5px rgba(22, 25, 23, 0.06), 0 5px 15px rgba(0, 0, 0, 0.03)",
        elevated: "0 25px 50px -12px rgba(22, 25, 23, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
