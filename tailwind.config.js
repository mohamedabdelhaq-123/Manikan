/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // ── Primary: Night Blue / Teal ──────────────────────────────────
        forest: {
          50:  "#EDF4F5",
          100: "#D4E8EB",
          200: "#A8D0D6",
          300: "#72B0BA",
          400: "#4A8F99",
          500: "#2d545e",   // Night Blue (main)
          600: "#265059",
          700: "#1e4a53",
          800: "#163c44",
          900: "#12343b",   // Night Blue Shadow
          950: "#0a2229",
        },
        // ── Accent: Sand Tan ────────────────────────────────────────────
        gold: {
          50:  "#FDF7EE",
          100: "#FAEDD8",
          200: "#F5D9B0",
          300: "#ECC480",
          400: "#e1b382",   // Sand Tan (main)
          500: "#D49B63",
          600: "#c89666",   // Sand Tan Shadow
          700: "#A87548",
          800: "#885C38",
          900: "#6E4A2C",
        },
        // keep cream as very light teal/sand neutral
        cream: {
          50:  "#F4F8F8",
          100: "#E6F0F1",
          200: "#C8E0E3",
          300: "#A0C7CC",
          400: "#72A8AF",
          500: "#4A8892",
        },
        // ── Neutral surface tokens ───────────────────────────────────────
        manikan: {
          bg:     "#F3F7F7",   // very light teal-tinted background
          card:   "#FFFFFF",
          border: "#CAD6D8",   // cool teal-tinted border
          muted:  "#E6EDEF",   // light teal surface
        },
      },
      fontFamily: {
        display: ["'Cormorant Garamond'", "'DM Serif Display'", "Georgia", "serif"],
        body:    ["'DM Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft:    "0 2px 20px rgba(18,52,59,0.07)",
        card:    "0 4px 32px rgba(18,52,59,0.10)",
        lift:    "0 8px 48px rgba(18,52,59,0.16)",
        gold:    "0 4px 24px rgba(200,150,102,0.22)",
        glow:    "0 0 40px rgba(45,84,94,0.18)",
      },
      animation: {
        "fade-up":       "fadeUp 0.6s ease-out forwards",
        "fade-in":       "fadeIn 0.5s ease-in-out forwards",
        "slide-right":   "slideRight 0.5s ease-out forwards",
        "scale-in":      "scaleIn 0.35s ease-out forwards",
        "float":         "float 3s ease-in-out infinite",
        "shimmer":       "shimmer 2s linear infinite",
        "spin-slow":     "spin 8s linear infinite",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        "pulse-gold":    "pulseGold 2s ease-in-out infinite",
        "glow-pulse":    "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%":   { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-4px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0.6" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(45,84,94,0.12)" },
          "50%":      { boxShadow: "0 0 44px rgba(45,84,94,0.30)" },
        },
      },
    },
  },
  plugins: [],
};
