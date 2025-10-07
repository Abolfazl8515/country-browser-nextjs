import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

function CardCountry() {
  return (
    <Card className="w-[280px] rounded-xl border border-secondary-400 bg-card text-card-foreground shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <CardHeader className="flex items-center gap-4">
        <div>
          <span className="w-20 h-20 rounded-full flex items-center justify-center bg-primary-600 text-secondary-50 text-2xl">
            LT
          </span>
        </div>
        <div>
          <CardTitle className="text-lg">John Doe</CardTitle>
          <CardDescription className="text-sm text-secondary-500">
            Frontend Developer
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <p className="text-sm text-secondary-400">
          Passionate about building accessible, performant, and beautiful UIs
          with React and Tailwind CSS.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <button className="bg-primary-500 text-white px-4 py-2 rounded-lg shadow-sm hover:bg-primary-600 dark:hover:bg-primary-400 transition-colors duration-200">
          Follow
        </button>
        <span className="text-xs text-secondary-400">Joined Oct 2025</span>
      </CardFooter>
    </Card>
  );
}

export default CardCountry;
