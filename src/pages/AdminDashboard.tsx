import Header from "@/components/Header";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const pendingGames = [
  {
    title: "Cosmic Voyager",
    developer: "Galaxy Interactive",
    dateSubmitted: "2023-10-27",
  },
  {
    title: "Pixel Kingdom",
    developer: "RetroForge",
    dateSubmitted: "2023-10-26",
  },
  {
    title: "Aqua Adventure",
    developer: "Deep Blue Studios",
    dateSubmitted: "2023-10-25",
  },
];

const AdminDashboard = () => {
  const handleApprove = (title: string) => {
    // TODO: Connect to backend to update game status
    alert(`Approved ${title}!`);
  };

  const handleReject = (title: string) => {
    // TODO: Connect to backend to update game status
    alert(`Rejected ${title}.`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 p-4 md:p-8">
        <Card>
          <CardHeader>
            <CardTitle>Admin Dashboard</CardTitle>
            <CardDescription>
              Review and approve new game submissions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Game Title</TableHead>
                  <TableHead>Developer</TableHead>
                  <TableHead>Date Submitted</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingGames.map((game) => (
                  <TableRow key={game.title}>
                    <TableCell className="font-medium">{game.title}</TableCell>
                    <TableCell>{game.developer}</TableCell>
                    <TableCell>{game.dateSubmitted}</TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleApprove(game.title)}
                      >
                        Approve
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleReject(game.title)}
                      >
                        Reject
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default AdminDashboard;