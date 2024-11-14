import Link from 'next/link'
import Image from 'next/image'

const links = [{
  label: 'Historia',
  key: 'about',
  route: '/about',
  target: '_self'
}, {
  label: 'Galería',
  key: 'gallery',
  route: '/gallery',
  target: '_self'
}, {
  label: 'Menú',
  key: 'menu',
  route: '/menu',
  target: '_self'
}, {
  logo: 'nanosLogo',
  key: 'nanosLogo',
  route: '/',
  src: './logo.svg',
  target: '_self'
}, {
  label: 'Sucursales',
  key: 'location',
  route: '/location',
  target: '_self'
}, {
  label: 'Reservas',
  key: 'schedule',
  route: '/schedule',
  target: '_self'
}, {
  label: 'Contacto',
  key: 'contact',
  route: '/contact',
  target: '_self'
}, {
  logo: 'facebookLogo',
  key: 'facebookLogo',
  route: 'https://web.facebook.com/thenanosrestaurant/',
  src: '/facebookLogo.svg',
  target: '_blank'
}, {
  logo: 'instagramLogo',
  key: 'instagramLogo',
  route: 'https://www.instagram.com/thenanosrestaurant/',
  src: '/instagramLogo.svg',
  target: '_blank'
}]

export default function Navigation () {
  return (
    <header>
      <nav>
        <ul className='nav__ul'>
          {links.map(({ label, key, route, src, target }) => (
            (!label)
              ? (<li key={key} className='nav__logo'><Link href={route} target={target}><Image src={src} alt='logo restaurante the nanos' fill /></Link></li>)
              : (<li key={key} className='nav__text'><Link href={route} target={target}>{label}</Link></li>)
          ))}
        </ul>
      </nav>
    </header>
  )
}
