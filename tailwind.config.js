/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Enable JIT mode
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'max-1200px': { 'max': '1200px' }, // Custom breakpoint
        'max-1158px': { 'max': '1158px' }, // Custom breakpoint
        'max-1000': { 'max': '1000px' }, // Custom breakpoint
        'max-992px': { 'max': '992px' }, // Custom breakpoint
        'max-1280': { 'max': '1280px' }, // Custom breakpoint
        'max-800px': { 'max': '800px' }, // Custom breakpoint
        'max-600': { 'max': '600px' }, // Custom breakpoint
        'max-325px': { 'max': '325px' }, // Custom breakpoint
      },
      fontSize: {
        sm: "15px",
        'custom-16': '16px',
      },
      lineHeight: {
        custom: "1.80857",
      },
      fontFamily: {
        ptSans: ["PT Sans", "sans-serif"],
      },
      colors: {
        mainColor: "#00aeef",
        silderColor: "#2d3032", // Ensure this color code is correct
        pGray: "#999",
        bgLight: "#EDEDED",
        almostBlack: "#1f1f1f",
        textGray: "#999", // Custom color
        borderSilder: "#111111", // Custom color
        pCarsol: "#aaa", // Custom color
        newsTColor: "#181818", // Custom color
        buttonsColor: "#3C3D41", // Custom color
        borderOpcity: "rgba(255,255,255,0.1)]", 
        borderColorCleints: "#E5E7EB", 
      },
      borderColor: {
        'custom-opacity': 'rgba(255, 255, 255, 0.1)',
      },
      transitionTimingFunction: {
        'ease-in-out-custom': 'ease-in-out',
      },
      transitionDuration: {
        '700': '700ms',
      },
    },
  },
  plugins: [],
};