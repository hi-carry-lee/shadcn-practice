import {
  BadgeCheckIcon,
  BadgeXIcon,
  LaptopIcon,
  PartyPopperIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundX,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import Link from "next/link";
import { Button } from "../../ui/button";
import { Avatar, AvatarFallback } from "../../ui/avatar";
import tf from "@/public/tf.jpg";
import Image from "next/image";
import WorkLocationTrends from "./work-location";

function EmployeesStats() {
  // mock data
  const totalEmployees = 100;
  const employeePresent = 80;
  const employeePresentPercentage = (employeePresent / totalEmployees) * 100;

  return (
    <>
      {/*  👉 auto-rows-fr：grid-auto-rows: minmax(0, 1fr) */}
      <div className="grid lg:grid-cols-3 gap-5 auto-rows-fr">
        {/* 👉：h-full 在1个column下，配合 auto-rows-fr 让每个grid item保持相同的高度*/}
        <Card className="h-full">
          {/* 👉：the default padding is too large */}
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total employees</CardTitle>
          </CardHeader>
          <CardContent className="flex  justify-between items-center">
            <div className="flex gap-2">
              <UserIcon />
              <span className="text-5xl font-bold">{totalEmployees}</span>
            </div>
            <Button size="xs" asChild>
              <Link href="/dashboard/employees">View all</Link>
            </Button>
          </CardContent>
        </Card>
        <Card className="h-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employees present</CardTitle>
          </CardHeader>
          <CardContent className="flex  flex-col justify-between">
            <div className="flex gap-2">
              {employeePresentPercentage > 75 ? (
                <UserCheck2Icon />
              ) : (
                <UserRoundX />
              )}

              <span className="text-5xl font-bold">{employeePresent}</span>
            </div>
          </CardContent>
          <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground mt-auto">
            {employeePresentPercentage > 75 ? (
              <span className="text-green-500 text-xs flex items-center gap-1">
                <BadgeCheckIcon /> {employeePresentPercentage}% of employees are
                present
              </span>
            ) : (
              <span className="text-red-500 text-xs flex items-center gap-1">
                <BadgeXIcon /> Only {employeePresentPercentage}% of employees
                are present
              </span>
            )}
          </CardFooter>
        </Card>
        <Card className="border border-pink-600 h-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Employee of the month</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center gap-3">
            <Avatar>
              <Image src={tf} className="round-full" alt="Sarah Brown avatar" />
              <AvatarFallback>Sarah Brown</AvatarFallback>
            </Avatar>
            <span className="text-2xl">Sarah Brown!</span>
          </CardContent>
          <CardFooter className="flex gap-2 items-center text-xs text-muted-foreground">
            <span className="text-gray-400 text-xs flex items-center gap-1">
              <PartyPopperIcon className="text-pink-500" />
              Congratulations, Colin!
            </span>
          </CardFooter>
        </Card>
      </div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-lg ">
            <span className="flex items-center gap-2">
              <LaptopIcon /> Employee work location trends
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <WorkLocationTrends />
        </CardContent>
      </Card>
    </>
  );
}

export default EmployeesStats;
