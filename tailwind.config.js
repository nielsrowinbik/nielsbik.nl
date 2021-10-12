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
        plugin(function ({ addUtilities }) {
            addUtilities({
                '.capitalize-first:first-letter': {
                    textTransform: 'uppercase',
                },
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
            screens: {
                print: { raw: 'print' },
            },
            typography: {
                DEFAULT: {
                    css: {
                        a: {
                            '@apply font-normal text-blue-600 dark:text-blue-400 no-underline hover:underline':
                                '',
                        },
                        h1: {
                            '@apply font-bold text-3xl md:text-5xl tracking-tight':
                                '',
                        },
                        h2: {
                            '@apply font-bold text-2xl md:text-4xl tracking-tight':
                                '',
                        },
                    },
                },
            },
        },
    },
    variants: {
        typography: ['dark'],
    },
};
