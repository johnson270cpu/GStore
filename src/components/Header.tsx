import { Link, useNavigate } from "react-router-dom";
import { Gamepad2, User, Users, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession } from "@/contexts/SessionContext";
import { supabase } from "@/integrations/supabase/client";
import { showSuccess, showError } from "@/utils/toast";

const Header = () => {
  const navigate = useNavigate();
  const { session, user, profile, isLoading } = useSession();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      showError(error.message);
    } else {
      showSuccess("Logged out successfully!");
      navigate("/login");
    }
  };

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
        {profile?.account_type === 'developer' && (
          <Link
            to="/upload-game"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Upload Game
          </Link>
        )}
        <Link
          to="/community"
          className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1"
        >
          <Users className="h-4 w-4" /> Community
        </Link>

        {!isLoading && (
          session ? (
            <>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/profile-settings">
                  <User className="h-5 w-5" />
                  <span className="sr-only">Profile Settings</span>
                </Link>
              </Button>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" /> Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="outline" size="sm" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button size="sm" asChild>
                <Link to="/signup">Sign Up</Link>
              </Button>
            </>
          )
        )}
      </nav>
    </header>
  );
};

export default Header;