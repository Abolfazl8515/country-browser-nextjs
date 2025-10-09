import { getCountriesApi } from "@/services/countryService";
import { useQuery } from "@tanstack/react-query";

export default function useGetCountries(query, search) {
  const { data, isLoading } = useQuery({
    queryKey: ["countries", search],
    queryFn: () => getCountriesApi(query, search),
  });

  const countries = data || [];

  return { countries, isLoading };
}
