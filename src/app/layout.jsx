import { Poppins } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata = {
  title: 'Pooja Moukhede | MERN Stack Developer & Full Stack Engineer',
  description:
    'Portfolio of Pooja Moukhede, a Results-driven MERN Stack Developer with 4+ years of experience specializing in React.js, Node.js, WebSockets, real-time trading interfaces, and modern web applications.',
  keywords: [
    'Pooja Moukhede',
    'MERN Stack Developer',
    'React.js Developer',
    'Next.js Developer',
    'Full Stack Engineer',
    'WebSockets',
    'Portfolio',
  ],
  authors: [{ name: 'Pooja Moukhede' }],
  openGraph: {
    title: 'Pooja Moukhede | MERN Stack Developer',
    description:
      '4+ years of experience building high-performance, real-time web applications with React, Node.js, and WebSockets.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={poppins.variable}>
      <head>
        <link rel="icon" href="/img/Pooja..png" />
      </head>
      <body className="font-sans antialiased min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
