import { ListChecksIcon, PieChartIcon, Star, UsersIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { teamLeaders } from "@/public/team-leaders";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import TeamDistributionChart from "./team-distribution-chart";
import SupportTicketsResolved from "./support-tickets-resolved";

function TeamsStats() {
  // mock data
  const totalTeams = 8;

  return (
    <>
      {/*  👉 auto-rows-fr：grid-auto-rows: minmax(0, 1fr) */}
      <div className="grid lg:grid-cols-3 gap-5 auto-rows-fr">
        {/* 👉：h-full 在1个column下，配合 auto-rows-fr 让每个grid item保持相同的高度*/}
        <Card className="h-full">
          {/* 👉：the default padding is too large */}
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>
          <CardContent className="flex  justify-between items-center">
            <div className="flex gap-2">
              <UsersIcon />
              <span className="text-5xl font-bold">{totalTeams}</span>
            </div>
            <Button size="xs" asChild>
              <Link href="/dashboard/teams">View all</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="h-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-base flex justify-between">
              Team leaders
              <Star className="text-yellow-500" />
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((teamLeader) => (
              <TooltipProvider
                key={`${teamLeader.firstName}${teamLeader.lastName}`}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Avatar>
                      {!!teamLeader.avatar && (
                        <Image
                          src={teamLeader.avatar}
                          alt={`${teamLeader.firstName} ${teamLeader.lastName} avatar`}
                        />
                      )}
                      <AvatarFallback>
                        {teamLeader.firstName[0]}
                        {teamLeader.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                  </TooltipTrigger>
                  <TooltipContent>
                    {teamLeader.firstName} {teamLeader.lastName}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="border h-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-base   flex justify-between">
              Team distribution <PieChartIcon />
            </CardTitle>
          </CardHeader>
          {/* 👉 the default padding bottom is not suitable */}
          <CardContent className="flex items-center gap-3 pb-0">
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>

      {/* chart */}
      <Card className="mt-4">
        <CardHeader>
          <CardTitle className="text-lg ">
            <span className="flex items-center gap-2">
              <ListChecksIcon /> <span>Support tickets resolved</span>
            </span>
          </CardTitle>
        </CardHeader>
        {/* 👉 CardContent has its own style, here we need to adjust a little */}
        <CardContent className="pl-0">
          <SupportTicketsResolved />{" "}
        </CardContent>
      </Card>
    </>
  );
}

export default TeamsStats;
