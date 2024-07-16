"use client"

import Image from "next/image";
import { MotionDiv } from "./MotionDiv";
import Link from "next/link";
import { fetchAlbums, fetchUsers } from "@/lib/actions/actions"
import { AlbumProp } from "@/types/user.types";
import { cache, useEffect, useState } from "react";
import axios from 'axios';

interface iDefault {
  searchTerm: string | null;
}

interface Prop {
  album: AlbumProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export default function AlbumCard({ searchTerm }: iDefault) {
  const [loading, setLoading] = useState(false);
  const [albums, setAlbums] = useState<any>([]);

  useEffect(() => {
    setLoading(true);

    const fetchAlbums = cache(async () => {
      const albums = await axios.get(`https://jsonplaceholder.typicode.com/albums/1/photos?_limit=32`);
      setAlbums(albums.data);
      console.log(albums.data)
      setLoading(false);
    });


    fetchAlbums();
  }, [albums.data]);


  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
    { 
      albums.filter((item:AlbumProp) => {
        return searchTerm?.toLowerCase() === "" ? item : item.title.toLowerCase().includes(searchTerm!)
      }).map((album: AlbumProp, index: number) => (
        <MotionDiv 
        variants={variants}
        initial="hidden"
        animate="visible"
        key={index}
        transition={{
          delay: index * 0.1,
          ease: "easeInOut",
          duration: 0.5
        }} 
        viewport={{ amount: 0 }}
        className="max-w-sm rounded relative w-full">
          <Link href={`/user/${album.id}`} >
            <div className="relative w-full ">
                <Image
                src={album.url}
                alt={album.albumId}
                width={200}
                height={200}
                className="cover rounded-xl max-h-[200px]"
                />
            </div>
            <div className="py-4 flex flex-col gap-3">
              <div className="">
                <h3 className="text-lg font-bold tracking-tight">
                  {album.title}
                </h3> 
              </div>
            </div>
          </Link>
        </MotionDiv> 
      ))
    } 
    </section> 
  );
};