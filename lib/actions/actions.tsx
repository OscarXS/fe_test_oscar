"use server"

import { UserProp, AlbumProp } from "@/types/user.types";
import AlbumCard from '@/components/AlbumCard';

export const fetchAlbums = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?_limit=32`)
    const data = await response.json()
    
    return data;
  } catch(error) {
    console.log(error);
  }
}

export const fetchUsers = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await response.json()
    
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const fetchSingleUser = async (id: string) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const fetchUserPhotos = async (id: string) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos?userId=${id}/photos&_limit=16`)
    const data = await response.json()
    
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const queryAlbumData = async (value: string) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/albums?q=${value}`)
    const data = await response.json()
    
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const queryPhotoData = async (id: string, value: string) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/photos/?q=${value}`)
    const data = await response.json()
    
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const queryUserData = async (id: string, value: string) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?q=${value}`)
    const data = await response.json()
    
    return data;
  } catch (error) {
    console.log(error)
  }
}