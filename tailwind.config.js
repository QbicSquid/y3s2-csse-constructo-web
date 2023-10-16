/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        custom_grey: {
          1: "#908F94",
          2: "#CBC9D6",
          3: "#F7F7F7",
        },
        custom_blue: {
          1: "#2B81FB",
          2: "#EBF3FE",
          3: "#F8F7FC",
        },
      },
    },
  },
  plugins: [],
};
