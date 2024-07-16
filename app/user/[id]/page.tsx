import React from 'react'
import { fetchSingleUser } from '@/lib/actions/actions';
import UserPage from '@/components/UserPage';
import NavMenu from '@/components/NavMenu';
import DarkTheme from '@/components/DarkTheme';


export default async function SingleUser({ params: {id} }: SearchParamProps) {
  
  const user = await fetchSingleUser(id);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <header className="sticky top-0 flex h-16 justify-between items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
        
        <NavMenu />
        
        <div className="flex items-center md:ml-auto">
          <DarkTheme />
        </div>

      </header>
      <UserPage user={user} id={id} /> 
    </div>
  )
}
