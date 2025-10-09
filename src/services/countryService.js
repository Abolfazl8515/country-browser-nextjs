import http from "./httpService";

export async function getCountriesApi(query = "", search) {
  const endpoint = search ? `/name/${search}` : `/all?${query}`;
  const { data } = await http.get(endpoint);
  return data;
}
