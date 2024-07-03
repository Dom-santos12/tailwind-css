/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}*"],
  theme: {
    extend: {
      backgroundImage:{
        'home':"url('/cardapio-tailwind/assets/bg.png')",
      }
    },
  },
  plugins: [],
}

