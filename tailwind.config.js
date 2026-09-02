/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Core palette — grounded in the video-editing / broadcast world:
        // a near-black "edit suite" background, a warm paper band for
        // breathing room, and a tally-light red as the single accent.
        void: "#0C0C0D",
        ink: "#171614",
        paper: "#F5F3EF",
        ash: "#A8A6A1",
        smoke: "#57544F",
        line: "#242320",
        "line-light": "#E4E0D8",
        tally: "#D7263D",
        "tally-dark": "#AD1E30",
      },
      fontFamily: {
        display: ["Archivo", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      keyframes: {
        drawline: {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        popIn: {
          "0%": { opacity: "0", transform: "translateY(18px) scale(0.94)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        playhead: {
          "0%": { left: "2%" },
          "50%": { left: "94%" },
          "100%": { left: "2%" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        drawline: "drawline 1s cubic-bezier(0.65,0,0.35,1) forwards",
        popIn: "popIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        playhead: "playhead 7s ease-in-out infinite",
        fadeUp: "fadeUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
}
