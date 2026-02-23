/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
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
    },
  },
  plugins: [],
};

export default config;
