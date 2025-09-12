import { Link } from "react-router-dom";
import { Star } from "lucide-react";

interface GameCardProps {
  game: {
    title: string;
    developer: string;
    price: number | string;
    imageUrl: string;
    rating?: number;
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
    <Link to={gameUrl} className="w-full space-y-2 group">
      <div className="overflow-hidden rounded-lg aspect-square">
        <img
          src={game.imageUrl}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col">
        <p className="font-semibold truncate">{game.title}</p>
        <p className="text-sm text-muted-foreground">{game.developer}</p>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <span>{game.rating?.toFixed(1) || "New"}</span>
          {game.rating && <Star className="w-3 h-3 fill-current" />}
          <span className="ml-auto font-semibold text-foreground">
            {displayPrice}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;