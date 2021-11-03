import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Gestión Proyectos</title>
      </Head>
      <p>Hola Mundo, Soy Next JS</p>
      <Link href='/Admin/usuarios'>
        <a className='cursor-pointer'>Ir a admin usuarios</a>
      </Link>
    </div>
  )
}

export default Home;
