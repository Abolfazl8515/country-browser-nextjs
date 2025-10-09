import http from "./httpService";

export async function getCountriesApi(query = "", search) {
  const endpoint = search ? `/name/${search}` : `/all?${query}`;
  const { data } = await http.get(endpoint);
  return data;
}

export async function getFilteredCountriesApi(region) {
  const { data } = await http.get(`/region/${region}`);
  return data;
}
