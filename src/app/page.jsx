"use client";
import CardCountry from "@/components/CardCountry";
import Loading from "@/components/ui/Loading";
import useGetCountries from "@/hooks/useGetCountries";

const QUERY = "fields=name,region,flag,capital,id";

export default function Home() {
  const { countries, isLoading } = useGetCountries(QUERY);

  return (
    <div className="w-full flex flex-wrap gap-3 justify-center">
      {isLoading ? (
        <Loading />
      ) : (
        countries?.map((country) => (
          <CardCountry
            key={Math.random()}
            capital={country.capital}
            flag={country.flag}
            name={country.name.official}
            region={country.region}
          />
        ))
      )}
    </div>
  );
}
