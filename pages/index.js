import Head from 'next/head';
import Image from 'next/image'
import Logo from '../public/images/logo.jpg'
import Background from '../public/images/home-vegetables-background.jpg'
import steak from '../public/images/steak.jpg'
import salad from '../public/images/salad.jpg'
import berries from '../public/images/berries.jpg'
import strawberries from '../public/images/strawberries.jpg'
import quotes from '../public/images/right-quote-sign.png'
import hector from '../public/images/hector.jpg'
import sandra from '../public/images/sandra.jpg'
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
      {/* Navigation bar */}
      <nav className='navbar'>
        <div className='logo'>
          <Image src={Logo} width={70} height={70}></Image>
        </div>
        <div>
          Iván Prieto | Nutriólogo
        </div>
      </nav>

      {/*Top section of landing page*/}
      <div className='body-container'>
        <div className='home-title'>
          Toma tu salud en tus propias manos
        </div>
        <div className='background-image'>
          <Image src={Background} width={400} height={700}></Image>
        </div>
      </div>

      {/* Picture bubbles section */}
      <div className='picture-bubbles'>
        <Image src={steak} className='bubble'></Image>
        <Image src={salad} className='bubble'></Image>
        <Image src={berries} className='bubble'></Image>
        <Image src={strawberries} className='bubble'></Image>
        {/* <Image src={} className='bubble'></Image> */}
      </div>

      {/* Table */}
      <table className='styled-table'>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>Data 3</td>
            <td>Data 3</td>
          </tr>
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
            <td>Data 6</td>
          </tr>
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
            <td>Data 6</td>
          </tr>
          <tr>
            <td>Data 4</td>
            <td>Data 5</td>
            <td>Data 6</td>
            <td>Data 6</td>
          </tr>
        </tbody>
      </table>

      {/* Testimonials */}
      <div className='testimonials-section-title'>
        <text >Testimonios</text>

      </div>
      <div className='testimonials'>
        <div className='testimonial'>
          <Image src={quotes} width={40} height={40}></Image>
          <div className='review-text'>
            <text className='review-title'>Recomendado!</text>
            <text className='review'>
              Estable un buen plan nutricional conforme
              a las necesidades del paciente con buenos resultados.
              En lo personal me ayudó a bajar de peso durante el postparto.
            </text>
          </div>
          <div className='review-bottom'>
            <Image className='review-picture' src={sandra} width={50} height={50}></Image>
            <text>Sandra Sanchez</text>
          </div>
        </div>
        <div className='testimonial'>
          <Image src={quotes} width={40} height={40}></Image>
          <div className='review-text'>
            <text className='review-title'>Se la rifa!</text>
            <text className='review'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum lacus erat, Lorem ipsum dolor sit amet, consectetur adipiscing elit,</text>
          </div>
          <div className='review-bottom'>
            <Image className='review-picture' src={hector} width={50} height={50}></Image>
            <text>Hector Sanchez </text>
          </div>
        </div>
        <div className='testimonial'>
          <Image src={quotes} width={40} height={40}></Image>
          <div className='review-text'>
            <text className='review-title'>Excelente Nutriologo!</text>
            <text className='review'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum lacus erat, Lorem ipsum dolor sit amet, consectetur adipiscing elit.</text>
          </div>
          <div className='review-bottom'>
            <Image className='review-picture' src={hector} width={50} height={50}></Image>
            <text>Pancho Garcia</text>
          </div>
        </div>
      </div>
    </div>
  )
}
