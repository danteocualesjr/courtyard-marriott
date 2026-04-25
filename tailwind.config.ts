import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        md: "2rem",
        lg: "3rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        ivory: "#F7F3EC",
        sand: "#E8DFD0",
        stone: {
          DEFAULT: "#A89B86",
          50: "#F4F1EC",
          100: "#E8DFD0",
          200: "#D9CCB7",
          300: "#C2B197",
          400: "#A89B86",
          500: "#8A7D6A",
          600: "#6B6051",
          700: "#4D453B",
          800: "#332D26",
          900: "#1F1B16",
        },
        charcoal: "#1F1B16",
        brass: {
          DEFAULT: "#B08D57",
          50: "#F6EFE2",
          100: "#EDE0C8",
          200: "#DBC094",
          300: "#C9A370",
          400: "#B08D57",
          500: "#967545",
          600: "#765B36",
          700: "#564228",
          800: "#3A2C1B",
          900: "#1E170E",
        },
        forest: "#2E3D33",
        background: "#F7F3EC",
        foreground: "#1F1B16",
        muted: {
          DEFAULT: "#E8DFD0",
          foreground: "#6B6051",
        },
        border: "#D9CCB7",
        input: "#D9CCB7",
        ring: "#B08D57",
      },
      fontFamily: {
        serif: ["var(--font-display)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-body)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest: "0.25em",
      },
      transitionTimingFunction: {
        luxe: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      transitionDuration: {
        "1400": "1400ms",
        "1600": "1600ms",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "ken-burns": "ken-burns 14s ease-out forwards",
        marquee: "marquee 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
