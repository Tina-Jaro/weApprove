/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
  "./node_modules/flowbite/**/*.js"
],
  theme: {
    extend: {},
    // colors: {
      // "custom-ash": "#a9a9a9",
      // "custom-placeholder" : "#f0f0f0 ",
      // "custom-input" : "#f3f3f3",
      // "custom-forgotpassword" : "#3880E2",
      // "custom-login" : "#d7b321",
      // "custom-clickhere" : "#7e424a",
    // },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}