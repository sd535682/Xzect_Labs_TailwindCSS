/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        "dm-sans": ['"DM Sans"', "sans-serif"],
      },
      colors: {
        primary: "rgb(10 16 47 / 0.8)",
      },
      fontSize: {
        fsize: "1.125rem",
      },
      lineHeight: {
        lh: "1.66",
      },
      boxShadow: {
        "3xl": "0 5px black",
      },
      animation: {
        loopscroll_f: "loopscroll_f 10s linear infinite",
        loopscroll_b: "loopscroll_b 10s linear infinite",
      },
      keyframes: {
        loopscroll_f: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        loopscroll_b: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
