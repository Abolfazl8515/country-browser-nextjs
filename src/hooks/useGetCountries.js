import { getCountriesApi } from "@/services/countryService";
import { useQuery } from "@tanstack/react-query";

export default function useGetCountries(query) {
  const { data, isLoading } = useQuery({
    queryKey: ["countries"],
    queryFn: () => getCountriesApi(query),
  });

  const countries = data || [];

  return { countries, isLoading };
}
