import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";

function CardCountry({ flag, name, region, capital }) {
  return (
    <Link href={`/detail/${name}`}>
      <Card className="w-[280px] cursor-pointer rounded-xl border border-secondary-400 bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <CardHeader className="flex items-center gap-4">
          <div>
            <span className="w-20 h-20 rounded-full flex items-center justify-center bg-primary-600 text-secondary-50 text-2xl">
              {flag}
            </span>
          </div>
          <div>
            <CardTitle className="text-lg">{name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-secondary-50 bg-primary-600 p-3 rounded-4xl">
            capital: {capital}
          </p>
          <p className="text-secondary-50 bg-primary-600 p-3 rounded-4xl">
            region: {region}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default CardCountry;
