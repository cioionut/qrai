import { Metadata } from 'next';
import { Suspense } from 'react';
import { cookies } from 'next/headers';
import { Inter } from 'next/font/google';

// local
import '@/styles/globals.css';

import Analytics from '@/components/core/analytics';
import Consent from '@/components/core/consent';
import Drawer from '@/components/core/drawer';
import FallbackComp from '@/components/core/fallback';
import Footer from '@/components/core/footer';
import Navbar from '@/components/core/navbar';

import { websiteName } from '@/lib/commons/constants';

const inter = Inter({ subsets: ['latin'] });

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

  const nextCookies = cookies();
  const lang = nextCookies.get('lng')?.value;
  // first use locale from url params
  const localeValue = locale || lang || 'en';

  return (
    // https://github.com/pacocoursey/next-themes?tab=readme-ov-file#with-app
    <html lang={localeValue}>
      <head />
      <body className={inter.className}>
        <Suspense fallback={<FallbackComp />}>
          <Analytics />
        </Suspense>
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
        </div>
      </body>
    </html>
  )
}
