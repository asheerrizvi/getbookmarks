import { Button } from "@repo/ui/button";
import { RequestInfo } from "rwsdk/worker";

export function Home({ ctx }: RequestInfo) {
  return (
    <div>
      <p className="text-blue-600">
        {ctx.user?.username
          ? `You are logged in as user ${ctx.user.username}`
          : "You are not logged in"}
      </p>
      <Button>Click me!</Button>
    </div>
  );
}
