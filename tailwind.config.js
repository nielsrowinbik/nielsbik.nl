const { neutral } = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./pages/**/*.{ts,md}x', './components/**/*.tsx'],
  plugins: [
    require('@tailwindcss/typography'),
    // Add `:empty` variant:
    plugin(({ addVariant, e }) => {
      addVariant('empty', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`empty${separator}${className}`)}:empty`;
        });
      });
    }),
    // Add utility to capitalise the first letter:
    plugin(({ addUtilities }) => {
      addUtilities({
        '.capitalize-first:first-letter': {
          textTransform: 'uppercase',
        },
      });
    }),
    plugin(({ addVariant, e }) => {
      addVariant('selection', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => {
          return `.${e(`selection${separator}${className}`)}::selection`;
        });
      });
    }),
  ],
  theme: {
    extend: {
      colors: {
        'spotify-green': '#1ed760',
      },
      screens: {
        print: { raw: 'print' },
      },
    },
  },
};
