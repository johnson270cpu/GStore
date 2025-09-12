import Header from "@/components/Header";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Send } from "lucide-react";

const mockDiscussions = [
  {
    id: "1",
    title: "Issues with APK upload size limits",
    author: "GameDevPro",
    content:
      "Hey everyone, I've been encountering persistent issues with uploading larger APK files. It seems there's a size limit that's not clearly documented. Has anyone else faced this, and if so, what solutions have you found?",
    date: "2023-10-27",
    avatar: "https://github.com/shadcn.png",
    comments: [
      {
        id: "c1",
        author: "TechWizard",
        content:
          "Yes, I've hit that wall too! I usually split my APKs into smaller chunks or use asset delivery bundles if the platform supports it. What's your current file size?",
        date: "2023-10-27",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=TW",
      },
      {
        id: "c2",
        author: "IndieCreator",
        content:
          "Could it be a server-side timeout issue rather than a strict size limit? Sometimes increasing the timeout for uploads helps.",
        date: "2023-10-28",
        avatar: "https://api.dicebear.com/7.x/initials/svg?seed=IC",
      },
    ],
  },
  // Add more mock discussions if needed
];

const DiscussionDetail = () => {
  const { id } = useParams();
  const discussion = mockDiscussions.find((d) => d.id === id);

  if (!discussion) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 container py-8 text-center">
          <h1 className="text-3xl font-bold">Discussion Not Found</h1>
          <p className="text-muted-foreground mt-4">
            The discussion you are looking for does not exist.
          </p>
          <Button asChild className="mt-6">
            <Link to="/community">Back to Community</Link>
          </Button>
        </main>
        <MadeWithDyad />
      </div>
    );
  }

  const handlePostComment = () => {
    alert("Posting comment (simulated)");
    // TODO: Implement actual comment submission
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container py-8">
        <Button asChild variant="outline" className="mb-6">
          <Link to="/community">Back to Community</Link>
        </Button>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-3xl">{discussion.title}</CardTitle>
            <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
              <Avatar className="h-6 w-6">
                <AvatarImage src={discussion.avatar} alt={discussion.author} />
                <AvatarFallback>{discussion.author.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <span>{discussion.author}</span>
              <span>•</span>
              <span>{discussion.date}</span>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-lg">{discussion.content}</p>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-4">Comments ({discussion.comments.length})</h2>
        <div className="space-y-4 mb-6">
          {discussion.comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src={comment.avatar} alt={comment.author} />
                    <AvatarFallback>{comment.author.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <span>{comment.author}</span>
                  <span>•</span>
                  <span>{comment.date}</span>
                </div>
                <p>{comment.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-xl font-semibold mb-3">Post a Comment</h3>
            <div className="flex gap-2">
              <Textarea placeholder="Write your comment here..." className="flex-1 resize-none" />
              <Button size="icon" onClick={handlePostComment}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Post Comment</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default DiscussionDetail;