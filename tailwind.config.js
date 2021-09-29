const { trueGray } = require('tailwindcss/colors');
const { colors } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
    darkMode: 'media',
    mode: 'jit',
    plugins: [
        require('@tailwindcss/typography'),
        plugin(function ({ addVariant, e }) {
            addVariant('empty', ({ modifySelectors, separator }) => {
                modifySelectors(({ className }) => {
                    return `.${e(`empty${separator}${className}`)}:empty`;
                });
            });
        }),
    ],
    purge: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
    theme: {
        colors: {
            ...colors,
            gray: trueGray,
        },
        extend: {
            colors: {
                'spotify-green': '#1ed760',
            },
        },
    },
    variants: {
        typography: ['dark'],
    },
};
