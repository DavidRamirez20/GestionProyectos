import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const index = () => {
   return (
      <div>
         <Head>
            <title>Admin Usuarios | Gestión Proyectos</title>
         </Head>
         <p>Página de admin de usuarios</p>
         <i className='fas fa-home'></i>
         <Link href='/'>
            <a>Ir al Home</a>
         </Link>
      </div>
   )
}

export default index
