import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0A2540",
        charcoal: "#1E293B",
        cyanNeon: "#00D4FF",
        pinkNeon: "#FF00FF",
        purpleNeon: "#9A30EE",
        greenNeon: "#39FF14",
        orangeNeon: "#FF6B00",
        softGray: "#E2E8F0",
      },
      boxShadow: {
        'neon-cyan': "0 0 0 1px rgba(0,212,255,0.55), 0 0 18px rgba(0,212,255,0.35), inset 0 0 18px rgba(0,212,255,0.25)",
        'neon-purple': "0 0 0 1px rgba(154,48,238,0.6), 0 0 22px rgba(154,48,238,0.35), inset 0 0 22px rgba(154,48,238,0.25)",
        'neon-green': "0 0 0 1px rgba(57,255,20,0.6), 0 0 22px rgba(57,255,20,0.35), inset 0 0 22px rgba(57,255,20,0.25)",
      },
      keyframes: {
        meshMove: {
          '0%':   { backgroundPosition: '0% 0%, 100% 0%, 100% 100%, 0% 100%' },
          '50%':  { backgroundPosition: '20% 10%, 80% 10%, 80% 90%, 20% 90%' },
          '100%': { backgroundPosition: '0% 0%, 100% 0%, 100% 100%, 0% 100%' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' },
        }
      },
      animation: {
        mesh: "meshMove 18s ease-in-out infinite alternate",
        fadeUp: "fadeUp 0.8s ease-out both",
        float: "float 6s ease-in-out infinite",
      }
    },
  },
  plugins: [],
};

export default config;
