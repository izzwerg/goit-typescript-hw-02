import axios from "axios";

const key = "EnD6B5lfWwo0M37oW1ZyaPg6zXyDXM0xzDPsfkig_D8";
axios.defaults.baseURL = `https://api.unsplash.com/`;

export const getImg = async ({ searchTerm, page }) => {
  const params = new URLSearchParams({
    client_id: key,
    query: searchTerm.toLocaleLowerCase(),
    per_page: 6,
    page: page,
  });
  const data = await axios.get(`/search/photos?${params}`);
  return data;
};