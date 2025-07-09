import '../styles/globals.css';

export const metadata = {
  title: 'Experience AI | Landing Page',
  description: 'AI Based Expert Recommendation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" type="image/png" href="images/exAI.png" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
