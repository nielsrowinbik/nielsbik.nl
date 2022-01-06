const { neutral } = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './pages/**/*.tsx',
        './components/**/*.tsx',
        './layouts/**/*.tsx',
    ],
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
    theme: {
        extend: {
            colors: {
                'spotify-green': '#1ed760',
                gray: neutral,
            },
            screens: {
                print: { raw: 'print' },
            },
            typography: {
                DEFAULT: {
                    css: {
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
};
