import { Link } from "react-router-dom";
import { Gamepad2, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-background border-b">
      <Link to="/" className="flex items-center justify-center">
        <Gamepad2 className="h-6 w-6 text-primary" />
        <span className="ml-2 font-bold text-lg text-gradient-brand">
          GStore
        </span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link
          to="/browse"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Browse
        </Link>
        <Link
          to="/upload-game"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Upload Game
        </Link>
        <Button variant="outline" size="sm" asChild>
          <Link to="/login">Login</Link>
        </Button>
        <Button size="sm" asChild>
          <Link to="/signup">Sign Up</Link>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link to="/profile-settings">
            <User className="h-5 w-5" />
            <span className="sr-only">Profile Settings</span>
          </Link>
        </Button>
      </nav>
    </header>
  );
};

export default Header;