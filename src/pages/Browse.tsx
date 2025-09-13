"use client";

import { useState } from "react";
import Header from "@/components/Header";
import GameCard from "@/components/GameCard";
import { Input } from "@/components/ui/input";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

const allGames = [
  {
    title: "Cybernetic Horizon",
    developer: "SynthCore Studios",
    price: 29.99,
    imageUrl: "https://placehold.co/400x400/6366f1/white?text=Cybernetic",
    category: "Action",
    rating: 4.5,
  },
  {
    title: "Mystic Forest",
    developer: "Enchanted Games",
    price: 19.99,
    imageUrl: "https://placehold.co/400x400/10b981/white?text=Mystic",
    category: "Adventure",
    rating: 4.8,
  },
  {
    title: "Galaxy Racers",
    developer: "Stellar Interactive",
    price: 0,
    imageUrl: "https://placehold.co/400x400/f97316/white?text=Galaxy",
    category: "Racing",
    rating: 4.2,
  },
  {
    title: "Dungeon Depths",
    developer: "PixelForge",
    price: 9.99,
    imageUrl: "https://placehold.co/400x400/be123c/white?text=Dungeon",
    category: "Role-Playing",
    rating: 4.6,
  },
  {
    title: "Space Frontiers",
    developer: "Cosmic Creations",
    price: 24.99,
    imageUrl: "https://placehold.co/400x400/14b8a6/white?text=Space",
    category: "Adventure",
    rating: 4.3,
  },
  {
    title: "Realm of Shadows",
    developer: "Arcane Arts",
    price: 14.99,
    imageUrl: "https://placehold.co/400x400/4f46e5/white?text=Realm",
    category: "Action",
    rating: 4.9,
  },
  {
    title: "Solitaire Saga",
    developer: "Card Masters",
    price: 0,
    imageUrl: "https://placehold.co/400x400/3b82f6/white?text=Solitaire",
    category: "Card",
    rating: 4.7,
  },
  {
    title: "Gridiron Glory",
    developer: "Sports Interactive",
    price: 39.99,
    imageUrl: "https://placehold.co/400x400/16a34a/white?text=Gridiron",
    category: "Sports",
    rating: 4.1,
  },
];

const categories = [
  "Action",
  "Adventure",
  "Role-Playing",
  "Sports",
  "Racing",
  "Card",
];

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredGames = (category?: string) =>
    allGames
      .filter((game) => (category ? game.category === category : true))
      .filter((game) =>
        game.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

  const topRatedGames = [...allGames].sort((a, b) => (b.rating || 0) - (a.rating || 0));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-8">
        <div className="flex flex-col items-center text-center mb-8">
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

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">For you</TabsTrigger>
            <TabsTrigger value="top">Top charts</TabsTrigger>
            <TabsTrigger value="new">New</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="py-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {filteredGames().map((game) => (
                <GameCard key={game.title} game={game} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="top" className="py-6">
             <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {topRatedGames.slice(0, 10).map((game) => (
                <GameCard key={game.title} game={game} />
              ))}
            </div>
          </TabsContent>
           <TabsContent value="new" className="py-6">
            <p className="text-center text-muted-foreground">New games will be shown here.</p>
          </TabsContent>
           <TabsContent value="categories" className="py-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
              {categories.map(category => (
                <Link
                  to={`/category/${category.toLowerCase()}`}
                  key={category}
                  className="bg-card p-4 rounded-lg text-center font-semibold hover:bg-accent cursor-pointer transition-colors"
                >
                  {category}
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Browse;