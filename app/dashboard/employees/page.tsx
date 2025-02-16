import { employees } from "@/public/employees";
import { setTimeout } from "timers/promises";
import { columns } from "./columns";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";

async function EmployeesPage() {
  await setTimeout(2000);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={employees} />
      </CardContent>
    </Card>
  );
}

export default EmployeesPage;
