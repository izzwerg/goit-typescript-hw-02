import { ImgProps } from "../components/App/App.types";

export interface RequestParamsProps {
  searchTerm: string;
  page: number;
}

export interface ParamsTypes {
    client_id: string;
    query: string;
    per_page: number;
    page: number;
}

export interface ReturnTypes{
    results: ImgProps[];
    total_pages: number;
}