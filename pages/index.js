import Head from 'next/head';
import Image from 'next/image'
import Logo from '../public/images/logo.jpg'
import Background from '../public/images/home-vegetables-background.jpg'
import { Inter } from 'next/font/google'

const name = 'Iván Prieto Nutricionista';
export const siteTitle = 'Iván Prieto Nutricionista';

export default function Home() {
  return (
    <div className='home-container'>
      {/* <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
      </Head> */}
      <nav className='navbar'>
        <div className='logo'>
          <Image src={Logo} width={70} height={70}></Image>
        </div>
        <div>
          Ivan Prieto Nutricionista
        </div>
        <div>
          Tabla
        </div>
      </nav>
      <nav className='body-container'>
        <div className='home-title'>
          Toma tu salud en tus propias manos
        </div>
        <div className='background-image'>
          <Image src={Background} width={400} height={700}></Image>
        </div>
      </nav>
    </div>
  )
}
