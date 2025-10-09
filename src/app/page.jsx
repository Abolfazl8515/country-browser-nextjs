"use client";
import CardCountry from "@/components/CardCountry";
import Header from "@/components/Header";
import Loading from "@/components/ui/Loading";
import useFilteredCountry from "@/hooks/useFilteredCountry";
import useGetCountries from "@/hooks/useGetCountries";
import { useSearchParams } from "next/navigation";

const QUERY = "fields=name,region,flag,capital,id";

export default function Home() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const region = searchParams.get("region");
  const { countries, isLoading } = useGetCountries(QUERY, search);
  const { filteredCountries, isLoadingFilter } = useFilteredCountry(
    region ?? ""
  );
  const combined = [...(countries || []), ...(filteredCountries || [])];

  if (!isLoading && !isLoadingFilter && combined.length === 0) {
    return (
      <div className="w-full space-y-5">
        <Header />
        <main className="w-full flex flex-wrap gap-3 justify-center">
          <p>Nothing found</p>
        </main>
      </div>
    );
  }

  return (
    <div className="w-full space-y-5">
      <Header />
      <main className="w-full flex flex-wrap gap-3 justify-center">
        {isLoading || isLoadingFilter ? (
          <Loading />
        ) : (
          combined?.map((country) => (
            <CardCountry
              key={Math.random()}
              capital={country.capital}
              flag={country.flag}
              name={country.name.official}
              region={country.region}
            />
          ))
        )}
      </main>
    </div>
  );
}
