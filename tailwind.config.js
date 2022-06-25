/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      spacing: {
        coba: "3.75rem",
      },
      borderWidth: {
        aja: "1px",
      },
      boxShadow: {
        form: "2px 2px 5px gray",
      },
      flex: {
        title: "0.4 1 0%",
        input: "1 1 0%",
      },
    },
  },
  plugins: [],
};
