const { trueGray } = require('tailwindcss/colors');
const { colors } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
    darkMode: 'media',
    mode: 'jit',
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
                    return `.${e(
                        `selection${separator}${className}`
                    )}::selection`;
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
            screens: {
                print: { raw: 'print' },
            },
            typography: {
                DEFAULT: {
                    css: {
                        color: 'inherit',
                        a: {
                            '@apply font-normal text-blue-600 dark:text-blue-400 no-underline hover:underline':
                                '',
                        },
                        h1: {
                            '@apply font-bold text-3xl md:text-5xl tracking-tight text-current':
                                '',
                        },
                        h2: {
                            '@apply font-bold text-2xl md:text-4xl tracking-tight text-current':
                                '',
                        },
                        h3: {
                            '@apply text-current': '',
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
