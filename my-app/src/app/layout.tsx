import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Zain } from "next/font/google";
import { LocaleProvider } from "@/context/LocaleContext";

const mainFontFamily = Zain({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--family-font-main--",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={mainFontFamily.variable}>
      <body>
        <LocaleProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem={false}
            disableTransitionOnChange
          >
            <main>{children}</main>
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
