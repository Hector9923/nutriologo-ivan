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
      {/* Navigation bar */}
      <nav className='navbar'>
        <div className='logo'>
          <Image src={Logo} width={120} height={120}></Image>
        </div>
        <span>Nutriologo Iván Prieto</span>
        <a href='/contactame'>
          Contáctame
        </a>
      </nav>

      {/*Top section of landing page*/}
      <div className='body-container'>
        <div className='home-title'>
          La salud no significa un retorno al estado original, sino el éxito al lidiar con el cambio constante.
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
      <div className='styled-table'>
        <p style={{ marginBottom: '20px', fontSize: '30px' }}>Un ejemplo de mi trabajo de lo que es parte de una dieta saludable</p>
      </div>
      <table className='styled-table'>
        <thead>
          <tr>
            <th>Comida</th>
            <th>Ingredientes</th>
            <th>Tamaño de la Porción</th>
            <th>Beneficios</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desayuno</td>
            <td>Quinoa, Espinacas, Tomates Cherry, Aguacate</td>
            <td>1 taza de quinoa, 1 taza de espinacas, 1/2 taza de tomates cherry, 1/2 aguacate</td>
            <td>Proporciona nutrientes esenciales, fibra y grasas saludables. Aumenta la energía y apoya la digestión.</td>
          </tr>
          <tr>
            <td>Almuerzo</td>
            <td>Pechuga de Pollo a la Parrilla, Arroz Integral, Brócoli, Aceite de Oliva</td>
            <td>6 oz de pollo, 1 taza de arroz integral, 1 taza de brócoli, 1 cucharada de aceite de oliva</td>
            <td>Alto en proteínas para la salud muscular, carbohidratos complejos para una energía sostenida y grasas saludables para la salud del corazón.</td>
          </tr>
          <tr>
            <td>Merienda</td>
            <td>Yogur Griego, Bayas Variadas, Almendras</td>
            <td>1 taza de yogur, 1/2 taza de bayas variadas, 1/4 taza de almendras</td>
            <td>Rico en probióticos, antioxidantes y grasas saludables. Apoya la salud intestinal y proporciona un impulso rápido de energía.</td>
          </tr>
          <tr>
            <td>Cena</td>
            <td>Salmón, Quinoa, Espárragos, Limón</td>
            <td>6 oz de salmón, 1 taza de quinoa, 1 taza de espárragos, 1 rodaja de limón</td>
            <td>Ácidos grasos omega-3 para la salud del corazón, proteína completa y una variedad de vitaminas y minerales.</td>
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
              Establece un buen plan nutricional conforme
              a las necesidades del paciente con buenos resultados.
              En lo personal, me ayudó a bajar de peso durante el postparto.
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
            <text className='review-title'>Excelente trabajo y resultados</text>
            <text className='review'>La clave para tener buena salud es tener una buena alimentación, mi cuerpo y mi vida han cambiado desde que cambié de una mala dieta a una buena dieta con Iván Prieto</text>
          </div>
          <div className='review-bottom'>
            <Image className='review-picture' src={hector} width={50} height={50}></Image>
            <text>Hector Sanchez </text>
          </div>
        </div>
        <div className='testimonial'>
          <Image src={quotes} width={40} height={40}></Image>
          <div className='review-text'>
            <text className='review-title'>Recomendado!</text>
            <text className='review'>Muy buena atención al paciente, explica su plan de trabajo.</text>
          </div>
          <div className='review-bottom'>
            <Image className='review-picture' src={hector} width={50} height={50}></Image>
            <text>David Carrillo</text>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className='navbar'>
        <p>Av.5 de Mayo 404 Interior #1 Centro, Nuevo Casas Grandes, Chihuahua 31700</p>
      </div>
    </div>
  )
}
