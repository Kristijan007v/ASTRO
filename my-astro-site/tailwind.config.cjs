/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      inter: ["Inter", "serif"],
    },
    extend: {
      colors: {
        blue: "#4579FF",
        orange: "#FF9900",
        green: "#27C93F",
        "purple-primary": "#2A233E",
        "purple-dark": "#07060A",
        "purple-discord": "#A855F7",
        "gray-primary": "#171717",
        "gray-secondary": "#4F4F4F",
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
