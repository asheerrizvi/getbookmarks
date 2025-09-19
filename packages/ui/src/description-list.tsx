import clsx from "clsx";

export function DescriptionList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"dl">) {
  return (
    <dl
      {...props}
      className={clsx(
        className,
        "ui:grid ui:grid-cols-1 ui:text-base/6 ui:sm:grid-cols-[min(50%,--spacing(80))_auto] ui:sm:text-sm/6",
      )}
    />
  );
}

export function DescriptionTerm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"dt">) {
  return (
    <dt
      {...props}
      className={clsx(
        className,
        "ui:col-start-1 ui:border-t ui:border-zinc-950/5 ui:pt-3 ui:text-zinc-500 ui:first:border-none ui:sm:border-t ui:sm:border-zinc-950/5 ui:sm:py-3 ui:dark:border-white/5 ui:dark:text-zinc-400 ui:sm:dark:border-white/5",
      )}
    />
  );
}

export function DescriptionDetails({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"dd">) {
  return (
    <dd
      {...props}
      className={clsx(
        className,
        "ui:pt-1 ui:pb-3 ui:text-zinc-950 ui:sm:border-t ui:sm:border-zinc-950/5 ui:sm:py-3 ui:sm:nth-2:border-none ui:dark:text-white ui:dark:sm:border-white/5",
      )}
    />
  );
}
