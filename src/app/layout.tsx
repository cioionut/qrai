import { Metadata } from 'next';
import { Suspense } from 'react';
// import { cookies } from 'next/headers';
import { Inter } from 'next/font/google';

// local
import '@/styles/globals.css';
import { ThemeProvider } from '@/appstate/themeprovider';

import Analytics from '@/components/core/analytics';
import Consent from '@/components/core/consent';
import Drawer from '@/components/core/drawer';
import FallbackComp from '@/components/core/fallback';
import Footer from '@/components/core/footer';
import Navbar from '@/components/core/navbar';
import SettingsModal from '@/components/settings/settingsmodal';

import { websiteName } from '@/lib/commons/constants';

const inter = Inter({ subsets: ['latin'] });
// export const runtime = 'edge';


export const metadata: Metadata = {
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata
  title: `${websiteName}`,
  description: `Generate artistic and catchy QR codes`,
};


export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode,
  params: {
    locale: string
  }
}) {
  const { locale } = params;

  // const nextCookies = cookies();
  // const lang = nextCookies.get('lng')?.value;
  // first use locale from url params
  const localeValue = 'en';

  return (
    // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
    <html lang={localeValue} suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <Suspense fallback={<FallbackComp />}>
          <Analytics />
        </Suspense>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
        <div className="drawer">
          <input id="maindrawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col">
            {/* Page content here */}
            <Navbar lang={localeValue} />
            {children}
            <Consent />
            <Footer />
          </div>
          <Drawer lang={localeValue} />
          <SettingsModal localeFromURL={localeValue} />
        </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
