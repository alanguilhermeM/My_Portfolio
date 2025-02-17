import './globals.css'
import { Zain } from 'next/font/google'

const mainFontFamily = Zain({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--family-font-main--',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mainFontFamily.variable}>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
