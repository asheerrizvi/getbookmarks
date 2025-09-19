import clsx from "clsx";

type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;

export function Heading({ className, level = 1, ...props }: HeadingProps) {
  let Element: `h${typeof level}` = `h${level}`;

  return (
    <Element
      {...props}
      className={clsx(
        className,
        "ui:text-2xl/8 ui:font-semibold ui:text-zinc-950 ui:sm:text-xl/8 ui:dark:text-white",
      )}
    />
  );
}

export function Subheading({ className, level = 2, ...props }: HeadingProps) {
  let Element: `h${typeof level}` = `h${level}`;

  return (
    <Element
      {...props}
      className={clsx(
        className,
        "ui:text-base/7 ui:font-semibold ui:text-zinc-950 ui:sm:text-sm/6 ui:dark:text-white",
      )}
    />
  );
}
