import './globals.css'

export const metadata = {
  title: 'Martin Cornejo — Mobile Developer',
  description: 'Senior Mobile Developer with 4+ years building scalable apps with React Native & Flutter. Based in San Juan, Argentina.',
  keywords: 'mobile developer, react native, flutter, san juan, argentina, iOS, android',
  openGraph: {
    title: 'Martin Cornejo — Mobile Developer',
    description: 'Senior Mobile Developer specializing in React Native & Flutter.',
    url: 'https://martincornejodev.vercel.app',
    siteName: 'Martin Cornejo Dev',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
