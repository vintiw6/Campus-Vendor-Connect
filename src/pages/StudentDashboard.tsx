
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { QrCode, User, Wallet, List } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const StudentDashboard = () => {
  // This data will come from Supabase later
  const mockData = {
    name: "John Doe",
    balance: 500,
    qrCode: "123456789",
    transactions: [
      { id: 1, date: "2025-04-19", amount: -50, description: "Lunch" },
      { id: 2, date: "2025-04-18", amount: 200, description: "Added funds" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Student Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <User className="text-gray-600" />
              <div>
                <CardTitle>Name</CardTitle>
                <p className="text-lg font-medium">{mockData.name}</p>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <QrCode className="text-gray-600" />
              <div>
                <CardTitle>QR Code</CardTitle>
                <p className="text-lg font-medium">{mockData.qrCode}</p>
              </div>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center space-x-4">
              <Wallet className="text-gray-600" />
              <div>
                <CardTitle>Balance</CardTitle>
                <p className="text-lg font-medium">₹{mockData.balance}</p>
              </div>
            </CardHeader>
          </Card>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center space-x-4">
            <List className="text-gray-600" />
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.transactions.map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{transaction.description}</TableCell>
                    <TableCell className={`text-right ${
                      transaction.amount < 0 ? 'text-red-600' : 'text-green-600'
                    }`}>
                      ₹{Math.abs(transaction.amount)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentDashboard;
