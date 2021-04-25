const { trueGray } = require('tailwindcss/colors');
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
    darkMode: 'class',
    theme: {
        colors: {
            ...colors,
            gray: trueGray,
        },
    },
    variants: {
        typography: ['dark'],
    },
    plugins: [require('@tailwindcss/typography')],
};
