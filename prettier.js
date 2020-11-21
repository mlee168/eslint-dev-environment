const format = require("prettier-eslint");

// notice, no semicolon in the original text
const sourceCode = "const {foo} = bar";

const options = {
  text: sourceCode,
  tabWidth: 4,
  eslintConfig: {
    parserOptions: {
      ecmaVersion: 7
    },
    rules: {
      semi: ["error", "never"]
    }
  },
  prettierOptions: {
    bracketSpacing: true
  },
};

const formatted = format(options);

// notice no semicolon in the formatted text
formatted; // const { foo } = bar
