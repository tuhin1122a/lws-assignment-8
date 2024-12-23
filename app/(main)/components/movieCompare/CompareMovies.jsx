"use client";

import MovieCompareSlot from "./MovieCompareSlot";

import MovieCompareHeader from "./MovieCompareHeader";

import useCompare from "@/app/hooks/useCompare";
import NoCompareFound from "./NoCompareFound";

const CompareMovies = () => {
  const { state } = useCompare();

  return (
    <main className="container mx-auto px-4 pt-24 pb-8">
      <MovieCompareHeader />

      <div className="grid gap-6 md:grid-cols-2">
        {state?.compareSlotstate?.map((slot) => (
          <MovieCompareSlot key={slot.id} id={slot.id} movie={slot.movie} />
        ))}
      </div>

      {state?.compareSlotstate?.length === 0 && <NoCompareFound />}
    </main>
  );
};

export default CompareMovies;
