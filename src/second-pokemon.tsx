"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchSecondPokemonOptions } from "./fetch-mock";

export const SecondPokemon = () => {
  const {
    data: { name },
  } = useSuspenseQuery(fetchSecondPokemonOptions);

  return <p>{name}</p>;
};
