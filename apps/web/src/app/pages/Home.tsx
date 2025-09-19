import { Card } from "@repo/ui/card";
import { RequestInfo } from "rwsdk/worker";

export function Home({ ctx }: RequestInfo) {
  return (
    <Card title="Hi Asheer!" href="https://asheerrizvi.com">
      <p className="text-neutral-600">Welcome to this website!</p>
    </Card>

    // <div>
    //   <p>
    //     {ctx.user?.username
    //       ? `You are logged in as user ${ctx.user.username}`
    //       : "You are not logged in"}
    //   </p>
    // </div>
  );
}
