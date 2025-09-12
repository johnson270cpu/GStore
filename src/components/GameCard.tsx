import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface GameCardProps {
  game: {
    title: string;
    developer: string;
    price: number | string;
    imageUrl: string;
  };
}

const GameCard = ({ game }: GameCardProps) => {
  const gameUrl = `/game/${game.title.toLowerCase().replace(/\s+/g, "-")}`;

  const displayPrice =
    typeof game.price === "number"
      ? game.price === 0
        ? "Free"
        : `$${game.price.toFixed(2)}`
      : game.price;

  return (
    <Card className="w-full flex flex-col">
      <CardHeader>
        <CardTitle>{game.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <Link to={gameUrl}>
          <img
            src={game.imageUrl}
            alt={game.title}
            className="w-full h-48 object-cover rounded-md mb-4 hover:opacity-80 transition-opacity"
          />
        </Link>
        <p className="text-sm text-muted-foreground">{game.developer}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center mt-auto">
        <p className="font-semibold">{displayPrice}</p>
        <Button asChild>
          <Link to={gameUrl}>View Game</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;