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
        padding: "1rem",
        screens: {
          sm: "100%", // Customize container width on small screens
          md: "100%", // Customize container width on medium screens
          lg: "1024px", // Set custom width for large screens
          xl: "1480px", // Set custom width for extra-large screens
        },
      },
      colors: {
        primary: "#0C2C2A",
        accent: "#00CCC1",
        text: "#2A2F35CC",
        text_primary: "#041326",
        text_secondary: "#6B7280",
        paragraph: "#4A4A4A",
        primary_bg: "#0C2C2AD9",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        lora: ["Lora", "sans-serif"],
        cardillac: ["Cardillac", "sans-serif"],
        // nunitoSans: ["var(--font-nunito-sans)", "sans-serif"],
        nexa: ["NexaRegular", "sans-serif"],
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

          // For small screens (sm)
          "@screen sm": {
            paddingTop: "4rem", // Adjust padding for small screens
          },

          // For medium screens (md)
          "@screen md": {
            paddingTop: "5rem", // Adjust padding for medium screens
          },

          // For large screens (lg)
          "@screen lg": {
            paddingTop: "5rem", // Adjust padding for large screens
          },

          // For extra-large screens (xl)
          "@screen xl": {
            paddingTop: "5rem", // Adjust padding for extra-large screens
          },
        },
      });
    },
  ],
};
export default config;
