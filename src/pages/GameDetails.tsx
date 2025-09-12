import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import { MadeWithDyad } from "@/components/made-with-dyad";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CreditCard, Wallet } from "lucide-react";

// Mock data - in a real app, this would come from an API
const allGames = [
  {
    title: "Cybernetic Horizon",
    developer: "SynthCore Studios",
    price: 29.99,
    imageUrl: "/placeholder.svg",
    description:
      "A fast-paced cyberpunk shooter set in a dystopian future. Explore the neon-lit streets of Neo-Kyoto and uncover a corporate conspiracy.",
  },
  {
    title: "Mystic Forest",
    developer: "Enchanted Games",
    price: 19.99,
    imageUrl: "/placeholder.svg",
    description:
      "An atmospheric adventure game where you play as a forest spirit. Solve puzzles, meet whimsical creatures, and restore balance to the ancient woods.",
  },
  {
    title: "Galaxy Racers",
    developer: "Stellar Interactive",
    price: 0,
    imageUrl: "/placeholder.svg",
    description:
      "A high-speed, anti-gravity racing game set across the galaxy. Compete against other pilots on exotic tracks and upgrade your ship to become the champion.",
  },
  {
    title: "Dungeon Depths",
    developer: "PixelForge",
    price: 9.99,
    imageUrl: "/placeholder.svg",
    description:
      "A classic roguelike dungeon crawler. Fight monsters, collect loot, and see how deep you can go in an ever-changing dungeon.",
  },
  {
    title: "Space Frontiers",
    developer: "Cosmic Creations",
    price: 24.99,
    imageUrl: "/placeholder.svg",
    description:
      "Explore a vast, procedurally generated galaxy in this open-world space simulation. Trade, fight, and build your empire among the stars.",
  },
  {
    title: "Realm of Shadows",
    developer: "Arcane Arts",
    price: 14.99,
    imageUrl: "/placeholder.svg",
    description:
      "A stealth-action game where you play as an assassin in a dark fantasy world. Use shadows and magic to eliminate your targets.",
  },
];

const GameDetails = () => {
  const { title } = useParams();
  const game = allGames.find(
    (g) => g.title.toLowerCase().replace(/\s+/g, "-") === title
  );

  if (!game) {
    return <div>Game not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-video items-center justify-center p-0 rounded-lg overflow-hidden">
                          <img
                            src={game.imageUrl}
                            alt={`${game.title} screenshot ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold">{game.title}</h1>
            <p className="text-lg text-muted-foreground">by {game.developer}</p>
            <p>{game.description}</p>

            <Separator className="my-4" />

            {game.price > 0 ? (
              <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">
                  Buy Now: ${game.price.toFixed(2)}
                </h2>
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="w-full">
                    <CreditCard className="mr-2 h-5 w-5" /> Pay with Card
                  </Button>
                  <Button size="lg" variant="outline" className="w-full">
                    <Wallet className="mr-2 h-5 w-5" /> Pay with PayPal
                  </Button>
                </div>
              </Card>
            ) : (
              <Button size="lg">Download for Free</Button>
            )}
          </div>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default GameDetails;