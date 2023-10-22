/** @type {import(tailwindcss).Config} */ export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Dark_Blue_DM_Elements: "hsl(209, 23%, 22%)",
        Very_Dark_Blue_DM_Background: "hsl(207, 26%, 17%)",
        Very_Dark_Blue_LM_text: "hsl(200, 15%, 8%)",
        Dark_Gray_LM_Input: "hsl(0, 0%, 52%)",
        Very_Light_Gray_LM_Background: "hsl(0, 0%, 98%)",
        White_details: "hsl(0, 0%, 100%)",
      },
      screens: {
        md: "680px",
      },
    },
  },
  plugins: [],
};
