import { fetchUserPhotos } from '@/lib/actions/actions';
import React from 'react'
import { MotionDiv } from './MotionDiv';
import Image from 'next/image';
import { AlbumProp, PhotoProp } from '@/types/user.types';

interface Prop {
    id: string
}

const UserPhotos = async ({id}: Prop) => {
    const data = await fetchUserPhotos(id); 

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-6">
        { 
            data.map((photo: AlbumProp, index: number) => (
                <Image
                    src={`${photo.url}`}
                    alt={`${photo.title} Album`}
                    key={index}
                    width={100}
                    height={100}
                    className="cover rounded-xl w-full"
                />
            ))
        } 
    </div>
  )
}

export default UserPhotos