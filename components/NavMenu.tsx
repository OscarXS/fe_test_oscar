import React from 'react'
import Link from 'next/link'
import { LibraryBig } from 'lucide-react'

const NavMenu = () => {
  return (
    <div className="flex gap-1">
      <nav className="w-[50px] md:w-[350px] flex-col md:gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:text-sm lg:gap-6">
          <Link href="/" className="flex items-center md:gap-2 text-lg font-semibold md:text-base" >
            <LibraryBig className="h-6 w-6" />
            <span className='hidden md:block'>Album Library Assessment</span>
          </Link>
      </nav>
      <div className="border-r h-full w-[1px]"></div>
    </div>
  )
}

export default NavMenu