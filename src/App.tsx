import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import UploadGame from "./pages/UploadGame";
import Browse from "./pages/Browse";
import GameDetails from "./pages/GameDetails";
import AdminDashboard from "./pages/AdminDashboard";
import ProfileSettings from "./pages/ProfileSettings";
import DeveloperCommunity from "./pages/DeveloperCommunity";
import DiscussionDetail from "./pages/DiscussionDetail";
import CategoryPage from "./pages/CategoryPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload-game" element={<UploadGame />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/game/:title" element={<GameDetails />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />
          <Route path="/community" element={<DeveloperCommunity />} />
          <Route path="/community/discussion/:id" element={<DiscussionDetail />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;