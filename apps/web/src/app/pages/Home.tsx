import { Button } from "@repo/ui/button";
import { RequestInfo } from "rwsdk/worker";

export function Home({ ctx }: RequestInfo) {
  return (
    <Button>Save changes</Button>

    // <div>
    //   <p>
    //     {ctx.user?.username
    //       ? `You are logged in as user ${ctx.user.username}`
    //       : "You are not logged in"}
    //   </p>
    // </div>
  );
}
