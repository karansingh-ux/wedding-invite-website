import type { Metadata, Viewport } from 'next';
import '@/styles/globals.css';
import { SmoothScrollProvider } from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Ananya & Dhruv — The Wedding Celebration',
  description: 'An interactive cinematic Gujarati × Tamil wedding celebration in Udaipur.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#FFF8EA',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-warm-ivory text-warm-brown antialiased selection:bg-butter-yellow selection:text-deep-maroon overflow-x-hidden">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
