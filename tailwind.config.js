/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // Tailwind blue-600
        secondary: "#1e293b", // slate-800
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
