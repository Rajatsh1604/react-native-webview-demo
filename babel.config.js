module.exports = {
  presets: [
    [
      "@babel/preset-react",
      "@babel/preset-env",
      {
        development: process.env.BABEL_ENV === "development",
      },
    ],
  ],
};
