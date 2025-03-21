import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SensAI - AI Career Coach",
  description: "SensAI is a platform for AI Career Coach",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme: dark
    }}>
      
    <html lang="en" suppressHydrationWarning>
      <head>
          <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Toaster richColors/>
          <footer className="border-t bg-muted/50 py-12">
            <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
              <p >
                Made with ❤️ by{" "}
                <a href="https://github.com/shreyansh22485" className="underline">
                  Bababhallu
                </a>
              </p>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
