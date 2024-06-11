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
        indigodye: "#373F68",
        skyBlue: "#62BCFA",
        headingColor: "#3A4374", // Standard color for headings
        textColor: "#647196", // Standard color for normal text
        bodyBackgroundColor: "#F2F2F2",
      },
      spacing: {
        0: "0rem",
        1: "0.625rem", // 10px based on 65% of 16px
        2: "1.25rem", // 20px
        3: "1.875rem", // 30px
        4: "2.5rem", // 40px
        5: "3.125rem", // 50px
        6: "3.75rem", // 60px
        7: "4.375rem", // 70px
        8: "5rem", // 80px
        9: "5.625rem", // 90px
        10: "6.25rem", // 100px
        // Add more as needed
      },
      fontSize: {
        h1: [
          "2.307rem",
          { lineHeight: "3.365rem", letterSpacing: "-0.033rem" },
        ], // 24px, 35px line-height, -0.33px letter-spacing
        h2: [
          "1.923rem",
          { lineHeight: "2.788rem", letterSpacing: "-0.025rem" },
        ], // 20px, 29px line-height, -0.25px letter-spacing
        h3: ["1.731rem", { lineHeight: "2.5rem", letterSpacing: "-0.025rem" }], // 18px, 26px line-height, -0.25px letter-spacing
        h4: ["1.346rem", { lineHeight: "1.923rem", letterSpacing: "-0.02rem" }], // 14px, 20px line-height, -0.2px letter-spacing
      },
    },
  },
  plugins: [],
};
