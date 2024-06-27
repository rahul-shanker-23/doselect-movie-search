module.exports = {
  transform: {
    "^.+\\.vue$": "@vue/vue3-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  moduleNameMapper: {
    // Mocking CSS Modules
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",

    // Mocking image files
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)$": "<rootDir>/__mocks__/fileMock.js",
  },
  globals: {
    // define all globals for test here
    PROXY_URI: null,
  },
};
