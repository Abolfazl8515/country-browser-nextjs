import { getFilteredCountriesApi } from "@/services/countryService";
import { useQuery } from "@tanstack/react-query";

export default function useFilteredCountry(region) {
  const { data, isLoading: isLoadingFilter } = useQuery({
    queryKey: ["FilteredCountries", region],
    queryFn: () => getFilteredCountriesApi(region),
    enabled: !!region,
  });

  const filteredCountries = data || [];

  return { filteredCountries, isLoadingFilter };
}
