import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseStringify = (value: any) => JSON.parse(JSON.stringify(value));


export const getAlbums = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await response.json()
  
  return data;
}