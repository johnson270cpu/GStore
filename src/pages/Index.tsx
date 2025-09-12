import Header from "@/components/Header";
import GameCard from "@/components/GameCard";
import { MadeWithDyad } from "@/components/made-with-dyad";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const featuredGames = [
  {
    title: "Cybernetic Horizon",
    developer: "SynthCore",
    price: 29.99,
    imageUrl: "/placeholder.svg",
    rating: 4.5,
  },
  {
    title: "Mystic Forest",
    developer: "Enchanted",
    price: 19.99,
    imageUrl: "/placeholder.svg",
    rating: 4.8,
  },
  {
    title: "Galaxy Racers",
    developer: "Stellar",
    price: 0,
    imageUrl: "/placeholder.svg",
    rating: 4.2,
  },
  {
    title: "Dungeon Depths",
    developer: "PixelForge",
    price: 9.99,
    imageUrl: "/placeholder.svg",
    rating: 4.6,
  },
  {
    title: "Space Frontiers",
    developer: "Cosmic",
    price: 24.99,
    imageUrl: "/placeholder.svg",
    rating: 4.3,
  },
];

const newReleases = [
  {
    title: "Realm of Shadows",
    developer: "Arcane Arts",
    price: 14.99,
    imageUrl: "/placeholder.svg",
    rating: 4.9,
  },
  {
    title: "Aqua Adventure",
    developer: "Deep Blue",
    price: 0,
    imageUrl: "/placeholder.svg",
  },
  {
    title: "Pixel Kingdom",
    developer: "RetroForge",
    price: 4.99,
    imageUrl: "/placeholder.svg",
    rating: 4.7,
  },
  {
    title: "Cosmic Voyager",
    developer: "Galaxy Int.",
    price: 19.99,
    imageUrl: "/placeholder.svg",
  },
  {
    title: "City Skylines II",
    developer: "Paradox",
    price: 49.99,
    imageUrl: "/placeholder.svg",
    rating: 3.8,
  },
];

const GameCarousel = ({ title, games }) => (
  <section className="w-full py-8">
    <h2 className="text-2xl font-bold tracking-tight mb-4">{title}</h2>
    <Carousel opts={{ align: "start", loop: true }}>
      <CarouselContent>
        {games.map((game) => (
          <CarouselItem key={game.title} className="basis-1/2 md:basis-1/3 lg:basis-1/5">
            <GameCard game={game} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-12" />
      <CarouselNext className="mr-12" />
    </Carousel>
  </section>
);

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container">
        <GameCarousel title="Featured Games" games={featuredGames} />
        <GameCarousel title="New Releases" games={newReleases} />
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;