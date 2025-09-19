import clsx from "clsx";

export function Divider({
  soft = false,
  className,
  ...props
}: { soft?: boolean } & React.ComponentPropsWithoutRef<"hr">) {
  return (
    <hr
      role="presentation"
      {...props}
      className={clsx(
        className,
        "ui:w-full ui:border-t",
        soft && "ui:border-zinc-950/5 ui:dark:border-white/5",
        !soft && "ui:border-zinc-950/10 ui:dark:border-white/10",
      )}
    />
  );
}
