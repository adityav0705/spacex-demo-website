"use client";

import apiCalls from "@/graphql";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import SpaceCardGrid from "./components/SpaceCardGrid";
import { cacheAndNetwork } from "./constants/fetchPolicy";
import { ShipsQuery, Ship } from "@/util/types/graphql";

export default function Home() {
  const { data } = useQuery<ShipsQuery>(apiCalls.queries.ships, {
    fetchPolicy: cacheAndNetwork,
  });

  if (!data) return null;

  return (
    <main className="min-h-screen p-4 md:p-14">
      <div className="flex gap-8 pb-6">
        <Image width={50} height={50} src="/spaceShip.png" alt="space ship" />
        <p className="text-4xl">Ships</p>
      </div>
      <SpaceCardGrid ships={data.ships as Ship[]} />
    </main>
  );
}
