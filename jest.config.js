module.exports = {
//   testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
  },
  moduleDirectories: ["node_modules", "src"],
};
