import type { Config } from 'tailwindcss'

const config: Config = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         container: {
            center: true,
            padding: '0.9375rem',
         },
         colors: {
            accent: '#cc8869',
            foreground: '#333',
         },
         transitionTimingFunction: {
            cBezier: 'cubic-bezier(.4, 0, 0, 1)',
         },
         animation: {
            'k-light': 'k-light 3s ease-in-out infinite',
            'k-glow': 'k-glow 1.8s ease-in-out infinite',
         },
         keyframes: {
            'k-light': {
               '0%': {
                  opacity: '.2',
               },
               '50%': {
                  opacity: '.3',
               },
               '100%': {
                  opacity: '.2',
               },
            },
            'k-glow': {
               '0%': {
                  opacity: '.6',
               },
               '50%': {
                  opacity: '.8',
               },
               '100%': {
                  opacity: '.6',
               },
            },
            'k-left-side': {
               '0%': {
                  transform: ' rotateY(-1deg) scaleX(0.92)',
               },
               '100%': {
                  transform: 'rotateY(0deg) scaleX(1)',
               },
            },
            'k-right-side': {
               '0%': {
                  transform: 'rotateY(0deg) scaleX(1)',
               },
               '100%': {
                  transform: 'rotateY(1deg) scaleX(0.92)',
               },
            },
         },
      },
   },
   plugins: [require('@xpd/tailwind-3dtransforms')],
}
export default config
