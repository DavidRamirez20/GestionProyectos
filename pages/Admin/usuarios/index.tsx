import React from 'react'
import Link from 'next/link'

const index = () => {
   return (
      <div>
         <p>Página de admin de usuarios</p>
         <Link href='/'>
            <a>Ir al Home</a>
         </Link>
      </div>
   )
}

export default index
