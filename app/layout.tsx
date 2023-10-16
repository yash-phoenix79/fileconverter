import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navbar';
import { Toaster } from '@/components/ui/toaster';
import GA from '@/components/GA';
import { ThemeProvider } from '@/components/providers/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modifio - Free Unlimited File Converter',
  description: `Unleash your creativity with Modifio – the ultimate online tool for
  unlimited and free multimedia conversion. Transform images, audio, and
  videos effortlessly, without restrictions. Start converting now and
  elevate your content like never before!`,
  creator: 'YASH',
  keywords:
    'image converter, video converter, audio converter, unlimited image converter, unlimited video converter',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <GA GA_MEASUREMENT_ID='G-52GQ441X7H' />
      <meta name="google-site-verification" content="V8lmEvFOdYBlChgR6pYABBZBhI1EFnPb1YuxTTdHXMU" />
      <body className={inter.className}>
      <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem={true}
            storageKey='modifio-theme'
          >

        <Navbar />
        <Toaster />
        <div className="pt-32 min-h-screen lg:pt-36 2xl:pt-44 container max-w-4xl lg:max-w-6xl 2xl:max-w-7xl">
         
            {children}
          
        </div>

      </ThemeProvider>
        
        
      </body>
    </html>
  );
}
