/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [{
      pastel: {
        ...require("daisyui/src/theming/themes")["pastel"],
        "primary": "#ff5722",
        "secondary": "#2E8B57",
        "accent": "#ffeb3b",
        "neutral": "#2E8B57",
        "base-100": "#ffffff",
        "info": "#2094f3",
        "success": "#00c853",
        "warning": "#ff9800",
        "error": "#f44336",
        "borderRadius":{
          "btn": '10px'
        }
      },
      forest: {
        ...require("daisyui/src/theming/themes")["forest"],
        "primary": "#228B22",      // Forest Green
        "secondary": "#2E8B57",    // Sea Green
        "accent": "#A2C579",       // Soft Green
        "neutral": "#1B4332",      // Dark Green
        // "base-100": "#f1f5f9",     // Light Background
        "info": "#7FDBFF",         // Sky Blue
        "success": "#3CB371",      // Medium Sea Green
        "warning": "#F4A261",      // Sandy Orange
        "error": "#E63946",        // Soft Red
      },
    },
    ]
  },
  plugins: [

    require('daisyui'),
  ],
}
