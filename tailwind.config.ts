import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"; // Importez le plugin Tailwind

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        "cannelé-orange": "#f8ac54", // Nouvelle couleur ajoutée ici
        "loader-dark-bg": "#171717", // Nouvelle couleur pour l'arrière-plan du loader
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        'dancing-script': ['"Dancing Script"', 'cursive'],
        'playfair-display': ['"Playfair Display"', 'serif'], // Mise à jour de la police
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        // Keyframes pour le loader
        animate: {
          "0%, 10%, 90%, 100%": { width: "100px", height: "100px" },
          "50%": { width: "150px", height: "150px" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(40deg)" },
          "25%": { transform: "rotate(90deg)" },
          "50%": { transform: "rotate(180deg)" },
          "75%": { transform: "rotate(270deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Animations pour le loader
        animate: "animate 1s linear infinite",
        rotate: "rotate 2s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities, theme }) {
      addUtilities({
        '.text-shadow-cannelé': {
          textShadow: `2px 2px 4px ${theme('colors.cannelé-orange')}`, // Ombre de texte ajustée pour moins d'intensité
        },
        // Nouvel utilitaire pour l'ombre de texte du loader
        '.text-shadow-loader-dark': {
          textShadow: `-2px -2px ${theme('colors.loader-dark-bg')}`,
        },
        // Nouvel utilitaire pour le contour de texte du loader
        '.text-stroke-loader-dark': {
          '-webkit-text-stroke': `0.5px ${theme('colors.loader-dark-bg')}`,
        },
        // Nouvel utilitaire pour l'ombre de boîte des images du loader
        '.box-shadow-cannelé-sm': {
          boxShadow: `0 0 5px ${theme('colors.cannelé-orange')}`,
        },
      });
    }),
  ],
} satisfies Config;