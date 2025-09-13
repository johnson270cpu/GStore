import Header from "@/components/Header";
import GameCard from "@/components/GameCard";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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

const CategoryPage = () => {
  const { categoryName } = useParams();
  const games = allGames.filter(
    (game) => game.category.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-8">
        <div className="mb-8">
          <Button asChild variant="outline">
            <Link to="/browse">Back to Browse</Link>
          </Button>
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mt-4">
            {categoryName} Games
          </h1>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {games.length > 0 ? (
            games.map((game) => <GameCard key={game.title} game={game} />)
          ) : (
            <p className="col-span-full text-center text-muted-foreground">
              No games found in this category.
            </p>
          )}
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default CategoryPage;