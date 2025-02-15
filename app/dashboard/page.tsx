import EmployeesStats from "@/components/dashboard/employees/employees-stats";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function DashBoardPage() {
  return (
    <Tabs defaultValue="employees">
      <TabsList className="mb-4">
        <TabsTrigger value="employees">Employees stats</TabsTrigger>
        <TabsTrigger value="teams">Teams stats</TabsTrigger>
      </TabsList>
      <TabsContent value="employees">
        <EmployeesStats />
      </TabsContent>
      <TabsContent value="teams">
        <div className="flex space-x-2">
          <Card>4</Card>
          <Card>5</Card>
          <Card>6</Card>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default DashBoardPage;
