export interface AlbumProp {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnail: string;
}

export interface UserProp {
  id: string;
  name: string;
  username: string;
  email: string;
  image: {
    original: string;
  };
  address: Object;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string
  }
}

export interface PhotoProp {
  id: string;
  url: string;
}

export interface iDefault {
  search: string | null;
  setSearch: (e: any) => void 
}

