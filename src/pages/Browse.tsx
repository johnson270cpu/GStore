"use client";

import { useState } from "react";
import Header from "@/components/Header";
import GameCard from "@/components/GameCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { cn } from "@/lib/utils";

const allGames = [
  {
    title: "Cybernetic Horizon",
    developer: "SynthCore Studios",
    price: 29.99,
    imageUrl: "https://placehold.co/400x400/6366f1/white?text=Cybernetic",
    category: "Action",
  },
  {
    title: "Mystic Forest",
    developer: "Enchanted Games",
    price: 19.99,
    imageUrl: "https://placehold.co/400x400/10b981/white?text=Mystic",
    category: "Adventure",
  },
  {
    title: "Galaxy Racers",
    developer: "Stellar Interactive",
    price: 0,
    imageUrl: "https://placehold.co/400x400/f97316/white?text=Galaxy",
    category: "Racing",
  },
  {
    title: "Dungeon Depths",
    developer: "PixelForge",
    price: 9.99,
    imageUrl: "https://placehold.co/400x400/be123c/white?text=Dungeon",
    category: "Role-Playing",
  },
  {
    title: "Space Frontiers",
    developer: "Cosmic Creations",
    price: 24.99,
    imageUrl: "https://placehold.co/400x400/14b8a6/white?text=Space",
    category: "Adventure",
  },
  {
    title: "Realm of Shadows",
    developer: "Arcane Arts",
    price: 14.99,
    imageUrl: "https://placehold.co/400x400/4f46e5/white?text=Realm",
    category: "Action",
  },
  {
    title: "Solitaire Saga",
    developer: "Card Masters",
    price: 0,
    imageUrl: "https://placehold.co/400x400/3b82f6/white?text=Solitaire",
    category: "Card",
  },
  {
    title: "Gridiron Glory",
    developer: "Sports Interactive",
    price: 39.99,
    imageUrl: "https://placehold.co/400x400/16a34a/white?text=Gridiron",
    category: "Sports",
  },
];

const categories = [
  "All",
  "Action",
  "Adventure",
  "Role-Playing",
  "Sports",
  "Racing",
  "Card",
  "Board",
  "Kids",
];

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredGames = allGames
    .filter((game) =>
      selectedCategory === "All" ? true : game.category === selectedCategory
    )
    .filter((game) =>
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
            <div className="flex justify-center flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category)}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
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