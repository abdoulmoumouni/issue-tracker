"use client"
import Link from 'next/link'
import React from 'react'
import { AiFillBug} from "react-icons/ai"

import { usePathname } from 'next/navigation'

import classNames from 'classnames'

const NavBar = () => {
  const pathname = usePathname()
  console.log(pathname)
  const link = [
    {name: "Dashboard", href: "/"},
    {name: "Issues", href: "/issues"},
  ]
  return (
    <nav className='flex space-x-6 border-b mb-5 px-5 h-14 items-center'>
        <Link href="/"><AiFillBug/></Link>
        <ul className=' flex space-x-6'>
          {link.map(link => (
            // <Link key={link.href} className={`${usePathname === link.href ? "text-zinc-900":"text-zinc-500"} hover:text-zinc-900 transition-colors`} href={link.href}>{link.name}</Link>
            <Link key={link.href} className={
              classNames({
                "text-zinc-900": pathname === link.href,
                "text-zinc-500": pathname !== link.href,
                "hover:text-zinc-800 transition-colors": true
              })
            } href={link.href}>{link.name}</Link>
          ))}
        </ul>
    </nav>
  )
}

export default NavBar