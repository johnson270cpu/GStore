import Header from "@/components/Header";
import GameCard from "@/components/GameCard";
import { MadeWithDyad } from "@/components/made-with-dyad";

const featuredGames = [
  {
    title: "Cybernetic Horizon",
    developer: "SynthCore Studios",
    price: "$29.99",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Mystic Forest",
    developer: "Enchanted Games",
    price: "$19.99",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Galaxy Racers",
    developer: "Stellar Interactive",
    price: "Free",
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Dungeon Depths",
    developer: "PixelForge",
    price: "$9.99",
    imageUrl: "/placeholder.svg",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/10">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              The Ultimate Destination for Indie Games
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl mx-auto mt-4">
              Discover, play, and support games from independent developers
              around the world.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter mb-8">
              Featured Games
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {featuredGames.map((game) => (
                <GameCard key={game.title} game={game} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;