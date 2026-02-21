
import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Scrollfolio | Interactive Sketch Portfolio',
  description: 'A highly creative, scroll-driven interactive portfolio website.',
};

export default function RootLayer({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Inter:wght@400;700&family=Source+Code+Pro:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased selection:bg-primary selection:text-black">
        {children}
      </body>
    </html>
  );
}
