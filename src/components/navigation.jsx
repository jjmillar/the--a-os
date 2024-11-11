import Link from 'next/link'

const links = [{
  label: 'Nosotros',
  key: 'about',
  route: '/about'
}, {
  label: 'Menú',
  key: 'menu',
  route: '/menu'
}, {
  label: 'Locales',
  key: 'location',
  route: '/location'
}, {
  label: 'Reservas',
  key: 'schedule',
  route: '/schedule'
}, {
  label: 'Contacto',
  key: 'contact',
  route: '/contact'
}]

export default function Navigation () {
  return (
    <header>
      <nav>
        <ul>
          {links.map(({ label, key, route }) => (
            <li key={key}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
