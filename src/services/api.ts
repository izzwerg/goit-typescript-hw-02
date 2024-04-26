import axios, { AxiosResponse } from "axios";
import { ParamsTypes, RequestParamsProps, ReturnTypes } from "./api.types";

const key = "EnD6B5lfWwo0M37oW1ZyaPg6zXyDXM0xzDPsfkig_D8";
axios.defaults.baseURL = `https://api.unsplash.com/`;

export const getImg = async ({ searchTerm, page }:RequestParamsProps):Promise<AxiosResponse<ReturnTypes>> => {
  const params: ParamsTypes = {
    client_id: key,
    query: searchTerm.toLocaleLowerCase(),
    per_page: 6,
    page: page,
  };
  const data = await axios.get<ReturnTypes>(`/search/photos`, {params});
  return data;
};