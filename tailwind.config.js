/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        editorial: ["var(--font-editorial)", "Georgia", "serif"],
      },
      colors: {
        ink: {
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
          950: "#09090b",
        },
        accent: {
          DEFAULT: "#2563eb",
          dim: "#1d4ed8",
          glow: "#3b82f6",
          deep: "#1e40af",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.75s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "pulse-soft": "pulseSoft 4s ease-in-out infinite",
        "float": "float 8s ease-in-out infinite",
        "shimmer": "shimmer 2.5s linear infinite",
        "menu-backdrop-in": "menuBackdropIn 0.32s ease-out forwards",
        "menu-panel-in": "menuPanelIn 0.42s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "menu-item-in": "menuItemIn 0.48s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "menu-shell-in": "menuShellIn 0.38s cubic-bezier(0.16, 1, 0.3, 1) both",
        "menu-row-in": "menuRowIn 0.52s cubic-bezier(0.16, 1, 0.35, 1) both",
        "menu-foot-in": "menuFootIn 0.55s cubic-bezier(0.16, 1, 0.35, 1) both",
      },
      keyframes: {
        menuShellIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        menuRowIn: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        menuFootIn: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        menuBackdropIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        menuPanelIn: {
          "0%": { opacity: "0", transform: "translateY(-18px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        menuItemIn: {
          "0%": { opacity: "0", transform: "translateX(-14px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.65", transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
        "glow-top":
          "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(37,99,235,0.35), transparent)",
        "glow-mid":
          "radial-gradient(ellipse 60% 40% at 70% 50%, rgba(37,99,235,0.12), transparent)",
      },
      boxShadow: {
        glow: "0 0 80px -20px rgba(37, 99, 235, 0.45)",
        card: "0 0 0 1px rgba(255,255,255,0.06), 0 24px 64px -32px rgba(0,0,0,0.85)",
      },
    },
  },
  plugins: [],
};
