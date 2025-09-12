import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface GameCardProps {
  game: {
    title: string;
    developer: string;
    price: string;
    imageUrl: string;
  };
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{game.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <p className="text-sm text-muted-foreground">{game.developer}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <p className="font-semibold">{game.price}</p>
        <Button>View Game</Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;