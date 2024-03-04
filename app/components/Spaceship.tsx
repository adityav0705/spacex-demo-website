"use client";

import Image from "next/image";
import { Ship } from "@/util/types/graphql";

const IMAGE_WIDTH = 500;
const IMAGE_HEIGHT = 500;

const Spaceship = ({ ship, handleClick }: { ship: Ship; handleClick: () => void }) => {
  return (
    <div
      className=" col-span-12 md:col-span-3 h-96 p-4  rounded-xl bg-gradient-to-r from-slate-900 to-zinc-900  border-2 relative cursor-pointer"
      onClick={handleClick}
    >
      {ship?.active && (
        <div className="absolute right-2 top-2 bg-white text-black rounded-full text-sm px-2 py-1">
          Active
        </div>
      )}
      <Image
        width={IMAGE_WIDTH}
        height={IMAGE_HEIGHT}
        src={ship.image || "/battleship.svg"}
        alt={ship.name || "Ship"}
        className="w-fyll h-64 object-cover rounded-xl"
      />
      <div className="pt-4">
        <p className="text-xl"> {ship.name}</p>
        <p className="text-lg"> {ship.class}</p>
      </div>
    </div>
  );
};

export default Spaceship;
