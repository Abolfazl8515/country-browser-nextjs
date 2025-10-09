"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loading from "@/components/ui/Loading";
import useGetCountries from "@/hooks/useGetCountries";
import { numberWithCommas } from "@/utils/numberFormatter";
import { useParams } from "next/navigation";

function DetailPage() {
  const { countryName } = useParams();
  const { countries, isLoading } = useGetCountries("", countryName);
  const country = countries[0];
  const nativeNames = country?.name?.nativeName;
  const firstNative = nativeNames ? Object.values(nativeNames)[0] : null;

  return (
    <main className="w-full h-screen flex justify-center items-center">
      {isLoading ? (
        <Loading />
      ) : (
        <Card className="w-11/12 flex justify-center items-center rounded-xl border border-secondary-400 bg-card text-card-foreground shadow-sm hover:shadow-lg">
          <CardHeader className="w-full flex items-center gap-4">
            <div>
              <span className="md:w-40 md:h-40 w-20 h-20 rounded-full flex items-center justify-center bg-primary-600 text-secondary-50 md:text-6xl text-3xl">
                {country?.flag}
              </span>
            </div>
            <div>
              <CardTitle className="md:text-4xl text-2xl font-black dark:text-secondary-50">
                {country.name?.official}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="w-full space-y-3">
            <p className="w-11/12 text-secondary-50 bg-primary-600 p-3 rounded-4xl">
              Native name: {firstNative?.official || "N/A"}
            </p>
            <p className="w-11/12 text-secondary-50 bg-primary-600 p-3 rounded-4xl">
              capital: {country.capital}
            </p>
            <p className="w-11/12 text-secondary-50 bg-primary-600 p-3 rounded-4xl">
              region: {country.region}
            </p>
            <p className="w-11/12 text-secondary-50 bg-primary-600 p-3 rounded-4xl">
              sub region: {country.subregion}
            </p>
            <p className="w-11/12 text-secondary-50 bg-primary-600 p-3 rounded-4xl">
              population: {numberWithCommas(country.population)}
            </p>
          </CardContent>
        </Card>
      )}
    </main>
  );
}

export default DetailPage;
