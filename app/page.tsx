"use client"

import { useState } from "react"
import DarkTheme from '@/components/DarkTheme'
import NavMenu from '@/components/NavMenu'
import AlbumCard from "@/components/AlbumCard";
import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"


export default function Home() {
  const [search, setSearch] = useState<string | null>("")
  const searchTerm = search
  console.log(search)

  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-50">
        
        <NavMenu />
        
        <div className="flex w-full justify-between items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <div className="relative end flex">
            <form className="ml-auto flex flex-1 sm:flex-initial">
                <div className="relative md:ml-25">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                    type="search"
                    placeholder="Search Albums..." 
                    onChange={(e: any) => setSearch(e.target.value)}
                    className="pl-8 w-25 lg:w-[1020px] "
                    /> 
                </div>
            </form>
          </div>
          <DarkTheme />
        </div>

      </header>
      <main className="w-full px-5 max-w-[900px] flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 mx-auto">
        <div className="flex items-center">
          <h1 className="text-lg font-semibold md:text-2xl">Albums</h1>
        </div> 
        <AlbumCard searchTerm={searchTerm} />
      </main>
    </div>
  )
}