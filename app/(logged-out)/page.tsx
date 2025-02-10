import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";

function LandingPage() {
  return (
    <>
      <h1 className="flex items-center gap-2">
        <PersonStandingIcon size={50} className="text-pink-500" />
        SupportMe
      </h1>
      <p className="mx-auto">The best dashboard to manage customer support</p>
      <div className="flex gap-2 items-center ">
        <Button asChild>
          <Link href="/login">Log in</Link>
        </Button>
        <small>or</small>
        <Button asChild variant="outline">
          <Link href="/register">Sign up</Link>
        </Button>
      </div>
    </>
  );
}

export default LandingPage;
