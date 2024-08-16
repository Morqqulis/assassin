// import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'

// const primaryFont = Roboto({
//    subsets: ['latin'],
//    weight: ['400', '700'],
//    style: ['normal', 'italic'],
//    display: 'swap'
// })

const secondaryFont = localFont({
   src: [
      {
         path: './assassin.woff2',
         weight: '400',
         style: 'normal'
      }
   ],
   display: 'swap'
})

export {  secondaryFont }

