const { spacing } = require('tailwindcss/defaultTheme');

module.exports = {
    purge: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
    darkMode: 'class',
    theme: {
        extend: {
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme('colors.gray.700'),
                        a: {
                            color: theme('colors.blue.600'),
                            code: { color: theme('colors.blue.400') },
                            fontWeight: 'inherit',
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        },
                        h1: {
                            fontWeight: 700,
                        },
                        'h2,h3,h4': {
                            'scroll-margin-top': spacing[32],
                        },
                        code: { color: theme('colors.pink.500') },
                        'blockquote p:first-of-type::before': false,
                        'blockquote p:last-of-type::after': false,
                    },
                },
                lg: {
                    css: {
                        h1: {
                            marginBottom: '0.5em',
                        },
                        p: {
                            marginTop: '1.25em',
                            marginBottom: '1.25em',
                        },
                    },
                },
                dark: {
                    css: {
                        color: theme('colors.gray.300'),
                        a: {
                            color: theme('colors.blue.300'),
                            code: { color: theme('colors.blue.400') },
                            fontWeight: 'inherit',
                            textDecoration: 'none',
                            '&:hover': {
                                textDecoration: 'underline',
                            },
                        },
                        blockquote: {
                            borderLeftColor: theme('colors.gray.700'),
                            color: theme('colors.gray.300'),
                        },
                        'h2,h3,h4': {
                            color: theme('colors.gray.100'),
                            'scroll-margin-top': spacing[32],
                        },
                        hr: { borderColor: theme('colors.gray.700') },
                        strong: { color: theme('colors.gray.300') },
                        thead: {
                            color: theme('colors.gray.100'),
                        },
                        tbody: {
                            tr: {
                                borderBottomColor: theme('colors.gray.700'),
                            },
                        },
                    },
                },
            }),
        },
    },
    variants: {
        typography: ['dark'],
    },
    plugins: [require('@tailwindcss/typography')],
};
