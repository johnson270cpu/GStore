import { Link } from "react-router-dom";
import { MessageSquare, User } from "lucide-react";

interface DiscussionCardProps {
  discussion: {
    id: string;
    title: string;
    author: string;
    replies: number;
    lastActivity: string;
  };
}

const DiscussionCard = ({ discussion }: DiscussionCardProps) => {
  return (
    <Link to={`/community/discussion/${discussion.id}`} className="block">
      <div className="bg-card p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-lg hover:text-primary transition-colors">
            {discussion.title}
          </h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <User className="h-4 w-4" /> {discussion.author}
            <span className="mx-2">•</span>
            <span>{discussion.lastActivity}</span>
          </p>
        </div>
        <div className="flex items-center gap-1 text-muted-foreground">
          <MessageSquare className="h-4 w-4" />
          <span>{discussion.replies}</span>
        </div>
      </div>
    </Link>
  );
};

export default DiscussionCard;