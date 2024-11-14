import Navigation from '@/components/navigation'
import '@/app/globals.css'
import '@/app/styles.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='es'>
      <head>
        <meta charSet='UTF-8' />
        <meta name='description' content='Webpage del restaurante The Nanos' />
        <meta name='keywords' content='nanos, ñaños, the ñaños, the nanos, restaurante, restaurant, temuco, lican ray, villarrica, araucania, chile' />
        <meta name='author' content='JJ Studio' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' type='image/svg+xml' href='/logo.svg' />
        <title>The Ñaños</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
