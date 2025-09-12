import Header from "@/components/Header";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import DiscussionCard from "@/components/DiscussionCard";
import { PlusCircle } from "lucide-react";

const mockDiscussions = [
  {
    id: "1",
    title: "Issues with APK upload size limits",
    author: "GameDevPro",
    replies: 15,
    lastActivity: "2 hours ago",
  },
  {
    id: "2",
    title: "Best practices for game monetization",
    author: "IndieCreator",
    replies: 8,
    lastActivity: "1 day ago",
  },
  {
    id: "3",
    title: "Seeking feedback on new puzzle game mechanics",
    author: "PuzzleMaster",
    replies: 22,
    lastActivity: "3 days ago",
  },
  {
    id: "4",
    title: "Integrating payment gateways for global reach",
    author: "GlobalDev",
    replies: 5,
    lastActivity: "5 days ago",
  },
];

const DeveloperCommunity = () => {
  const handleCreateTopic = () => {
    alert("Creating a new discussion topic (simulated)");
    // TODO: Navigate to a new topic creation form
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold tracking-tight">
            Developer Community
          </h1>
          <Button onClick={handleCreateTopic}>
            <PlusCircle className="mr-2 h-4 w-4" /> New Topic
          </Button>
        </div>

        <div className="space-y-4">
          {mockDiscussions.map((discussion) => (
            <DiscussionCard key={discussion.id} discussion={discussion} />
          ))}
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default DeveloperCommunity;