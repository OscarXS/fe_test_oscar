/* eslint-disable no-unused-vars */

declare type SearchParamProps = {
    params: { [key: string]: string };
    searchParams: { [key: string]: string | string[] | undefined };
  };
  
  declare interface User extends SearchParamProps {
    id: string;
  }
  
  declare interface Photos extends SearchParamProps {
    id: string;
  }
  