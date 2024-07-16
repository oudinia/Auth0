module.exports = {
  content: [
    "./src/**/*.{html,ts}",// Adjust this to match your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
      colors: {
        purplePizzazz: "#AD1FEA",
        blueRibbon: "#4661E6",
        blueRibbonLowercase: "#4661e6",
        aliceBlue: "#F2F4FF",
        ghostWhite: "#F7F8FD",
        white: "#FFFFFF",
        charcoal: "#3A4374",
        slateGray: "#647196",
        lightCoral: "#F49F85",
        indigo: "#373F68",
        skyBlue: "#62BCFA",
        headingColor: "#3A4374", // Standard color for headings
        textColor: "#647196", // Standard color for normal text
        bodyBackgroundColor: "#F2F2F2",
        ErrorColor: "red",
      },
      spacing: {
        0: "0rem",
        px: "1px",
        0.25: "0.25rem", // 2.5px
        0.5: "0.5rem",   // 5px
        0.75: "0.75rem", // 7.5px
        1: "1rem",       // 10px
        1.4: "1.4rem",   // 14px
        1.5: "1.5rem",   // 15px
        1.6: "1.6rem",   // 16px
        2: "2rem",       // 20px
        2.4: "2.4rem",   // 24px
        2.5: "2.5rem",   // 25px
        3: "3rem",       // 30px
        3.5: "3.5rem",   // 35px
        4: "4rem",       // 40px
        5: "5rem",       // 50px
        6: "6rem",       // 60px
        7: "7rem",       // 70px
        7.2: "7.2rem",   // 72px
        8: "8rem",       // 80px
        9: "9rem",       // 90px
        10: "10rem",     // 100px
        11: "11rem",     // 110px
        12: "12rem",     // 120px
        14: "14rem",     // 140px
        16: "16rem",     // 160px
        20: "20rem",     // 200px
        24: "24rem",     // 240px
        28: "28rem",     // 280px
        32: "32rem",     // 320px
        36: "36rem",     // 360px
        40: "40rem",     // 400px
      },
      fontSize: {
        h1: ["2.307rem", {lineHeight: "3.365rem", letterSpacing: "-0.033rem"}], // 24px, 35px line-height, -0.33px letter-spacing
        h2: ["1.923rem", {lineHeight: "2.788rem", letterSpacing: "-0.025rem"}], // 20px, 29px line-height, -0.25px letter-spacing
        h3: ["1.731rem", {lineHeight: "2.5rem", letterSpacing: "-0.025rem"}], // 18px, 26px line-height, -0.25px letter-spacing
        h4: ["1.346rem", {lineHeight: "1.923rem", letterSpacing: "-0.02rem"}], // 14px, 20px line-height, -0.2px letter-spacing
      },
    },
  },
  plugins: [
    require('./tailwindcss-plugin-theme-variables')
  ],
};
