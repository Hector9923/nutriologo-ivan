import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='home-container'>
      <nav>
        HELLO WORLD
      </nav>
      <h1>
        CAMBIA TU ALIMENTACION MENDIGO MARRANO -Ivan Prieto Nutricionista
      </h1>
    </main>
  )
}
