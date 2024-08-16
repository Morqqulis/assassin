import DefaultLayout from '#layouts/DefaultLayout'
import { secondaryFont } from '#settings/fonts'
import { homeMetadata } from '#settings/metadata'
import '#styles/index.scss'

export const metadata = homeMetadata

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode
}>) {
   return (
      <html lang="en">
         <body className={`${secondaryFont.className}`}>
            <DefaultLayout full={false}>{children}</DefaultLayout>
         </body>
      </html>
   )
}
