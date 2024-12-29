import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container by default
        padding: "2rem",
        screens: {
          sm: "100%", // Customize container width on small screens
          md: "100%", // Customize container width on medium screens
          lg: "1024px", // Set custom width for large screens
          xl: "1480px", // Set custom width for extra-large screens
        },
      },
      colors: {
        primary: "#1A73E8",
        accent: "#F5C518",
        text_primary: "#041326",
        primary_bg: "#04132699",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        lora: ["var(--base)", "sans-serif"],
        nunitoSans: ["var(--nunitoSans)", "sans-serif"],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require("tailwindcss-animate"),
    function ({ addComponents }: PluginAPI) {
      addComponents({
        ".section-gap": {
          paddingTop: "2rem", // Default padding for all screen sizes
          paddingBottom: "2rem", // Default padding for all screen sizes

          // For small screens (sm)
          "@screen sm": {
            paddingTop: "4rem", // Adjust padding for small screens
            paddingBottom: "4rem",
          },

          // For medium screens (md)
          "@screen md": {
            paddingTop: "6rem", // Adjust padding for medium screens
            paddingBottom: "6rem",
          },

          // For large screens (lg)
          "@screen lg": {
            paddingTop: "7rem", // Adjust padding for large screens
            paddingBottom: "7rem",
          },

          // For extra-large screens (xl)
          "@screen xl": {
            paddingTop: "8rem", // Adjust padding for extra-large screens
            paddingBottom: "8rem",
          },
        },
      });
    },
  ],
};
export default config;
