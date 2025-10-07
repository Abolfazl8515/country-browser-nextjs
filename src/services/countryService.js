import http from "./httpService";

export async function getCountriesApi(query = "") {
  return http
    .get(`/?${query}`)
    .then((data) => data.data);
}
