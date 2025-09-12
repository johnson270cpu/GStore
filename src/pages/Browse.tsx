"use client";

import { useState } from "react";
import Header from "@/components/Header";
import GameCard from "@/components/GameCard";
import { Input } from "@/components/ui/input";
import { MadeWithDyad } from "@/components/made-with-dyad";

const allGames = [
  {
    title: "Cybernetic Horizon",
    developer: "SynthCore Studios",
    price: 29.99,
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Mystic Forest",
    developer: "Enchanted Games",
    price: 19.99,
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Galaxy Racers",
    developer: "Stellar Interactive",
    price: 0,
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Dungeon Depths",
    developer: "PixelForge",
    price: 9.99,
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Space Frontiers",
    developer: "Cosmic Creations",
    price: 24.99,
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Realm of Shadows",
    developer: "Arcane Arts",
    price: 14.99,
    imageUrl: "/placeholder.svg",
  },
];

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGames = allGames.filter((game) =>
    game.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Browse Games
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl mt-4">
                Find your next favorite game from our collection.
              </p>
              <div className="w-full max-w-md mt-6">
                <Input
                  type="text"
                  placeholder="Search for a game..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {filteredGames.length > 0 ? (
                filteredGames.map((game) => (
                  <GameCard key={game.title} game={game} />
                ))
              ) : (
                <p className="col-span-full text-center text-muted-foreground">
                  No games found matching your search.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Browse;