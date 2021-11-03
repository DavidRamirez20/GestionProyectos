import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <p>Hola Mundo, Soy Next JS</p>
      <Link href='/admin/usuarios'>
        <a className='cursor-pointer'>Ir a admin usuarios</a>
      </Link>
    </div>
  )
}

export default Home;
