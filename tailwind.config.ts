import type { Config } from "tailwindcss"

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "var(--primary-50)",
          "100": "var(--primary-100)",
          "200": "var(--primary-200)",
          "300": "var(--primary-300)",
          "400": "var(--primary-400)",
        },
        secondary: {
          "100": "var(--secondary-100)",
          "200": "var(--secondary-200)",
          "300": "var(--secondary-300)",
        },
        accent: "var(--accent)",
      },
      fontFamily: {
        "dm-sans": "var(--font-dm-sans)",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          md: "48px",
          xl: "152px",
        },
      },
    },
  },
  plugins: [],
} satisfies Config
