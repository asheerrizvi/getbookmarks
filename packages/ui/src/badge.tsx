"use client";

import * as Headless from "@headlessui/react";
import clsx from "clsx";
import React, { forwardRef } from "react";
import { TouchTarget } from "./button";
import { Link } from "./link";

const colors = {
  red: "ui:bg-red-500/15 ui:text-red-700 ui:group-data-hover:bg-red-500/25 ui:dark:bg-red-500/10 ui:dark:text-red-400 ui:dark:group-data-hover:bg-red-500/20",
  orange:
    "ui:bg-orange-500/15 ui:text-orange-700 ui:group-data-hover:bg-orange-500/25 ui:dark:bg-orange-500/10 ui:dark:text-orange-400 ui:dark:group-data-hover:bg-orange-500/20",
  amber:
    "ui:bg-amber-400/20 ui:text-amber-700 ui:group-data-hover:bg-amber-400/30 ui:dark:bg-amber-400/10 ui:dark:text-amber-400 ui:dark:group-data-hover:bg-amber-400/15",
  yellow:
    "ui:bg-yellow-400/20 ui:text-yellow-700 ui:group-data-hover:bg-yellow-400/30 ui:dark:bg-yellow-400/10 ui:dark:text-yellow-300 ui:dark:group-data-hover:bg-yellow-400/15",
  lime: "ui:bg-lime-400/20 ui:text-lime-700 ui:group-data-hover:bg-lime-400/30 ui:dark:bg-lime-400/10 ui:dark:text-lime-300 ui:dark:group-data-hover:bg-lime-400/15",
  green:
    "ui:bg-green-500/15 ui:text-green-700 ui:group-data-hover:bg-green-500/25 ui:dark:bg-green-500/10 ui:dark:text-green-400 ui:dark:group-data-hover:bg-green-500/20",
  emerald:
    "ui:bg-emerald-500/15 ui:text-emerald-700 ui:group-data-hover:bg-emerald-500/25 ui:dark:bg-emerald-500/10 ui:dark:text-emerald-400 ui:dark:group-data-hover:bg-emerald-500/20",
  teal: "ui:bg-teal-500/15 ui:text-teal-700 ui:group-data-hover:bg-teal-500/25 ui:dark:bg-teal-500/10 ui:dark:text-teal-300 ui:dark:group-data-hover:bg-teal-500/20",
  cyan: "ui:bg-cyan-400/20 ui:text-cyan-700 ui:group-data-hover:bg-cyan-400/30 ui:dark:bg-cyan-400/10 ui:dark:text-cyan-300 ui:dark:group-data-hover:bg-cyan-400/15",
  sky: "ui:bg-sky-500/15 ui:text-sky-700 ui:group-data-hover:bg-sky-500/25 ui:dark:bg-sky-500/10 ui:dark:text-sky-300 ui:dark:group-data-hover:bg-sky-500/20",
  blue: "ui:bg-blue-500/15 ui:text-blue-700 ui:group-data-hover:bg-blue-500/25 ui:dark:text-blue-400 ui:dark:group-data-hover:bg-blue-500/25",
  indigo:
    "ui:bg-indigo-500/15 ui:text-indigo-700 ui:group-data-hover:bg-indigo-500/25 ui:dark:text-indigo-400 ui:dark:group-data-hover:bg-indigo-500/20",
  violet:
    "ui:bg-violet-500/15 ui:text-violet-700 ui:group-data-hover:bg-violet-500/25 ui:dark:text-violet-400 ui:dark:group-data-hover:bg-violet-500/20",
  purple:
    "ui:bg-purple-500/15 ui:text-purple-700 ui:group-data-hover:bg-purple-500/25 ui:dark:text-purple-400 ui:dark:group-data-hover:bg-purple-500/20",
  fuchsia:
    "ui:bg-fuchsia-400/15 ui:text-fuchsia-700 ui:group-data-hover:bg-fuchsia-400/25 ui:dark:bg-fuchsia-400/10 ui:dark:text-fuchsia-400 ui:dark:group-data-hover:bg-fuchsia-400/20",
  pink: "ui:bg-pink-400/15 ui:text-pink-700 ui:group-data-hover:bg-pink-400/25 ui:dark:bg-pink-400/10 ui:dark:text-pink-400 ui:dark:group-data-hover:bg-pink-400/20",
  rose: "ui:bg-rose-400/15 ui:text-rose-700 ui:group-data-hover:bg-rose-400/25 ui:dark:bg-rose-400/10 ui:dark:text-rose-400 ui:dark:group-data-hover:bg-rose-400/20",
  zinc: "ui:bg-zinc-600/10 ui:text-zinc-700 ui:group-data-hover:bg-zinc-600/20 ui:dark:bg-white/5 ui:dark:text-zinc-400 ui:dark:group-data-hover:bg-white/10",
};

type BadgeProps = { color?: keyof typeof colors };

export function Badge({
  color = "zinc",
  className,
  ...props
}: BadgeProps & React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      {...props}
      className={clsx(
        className,
        "ui:inline-flex ui:items-center ui:gap-x-1.5 ui:rounded-md ui:px-1.5 ui:py-0.5 ui:text-sm/5 ui:font-medium ui:sm:text-xs/5 ui:forced-colors:outline",
        colors[color],
      )}
    />
  );
}

export const BadgeButton = forwardRef(function BadgeButton(
  {
    color = "zinc",
    className,
    children,
    ...props
  }: BadgeProps & { className?: string; children: React.ReactNode } & (
      | ({ href?: never } & Omit<Headless.ButtonProps, "as" | "className">)
      | ({ href: string } & Omit<
          React.ComponentPropsWithoutRef<typeof Link>,
          "className"
        >)
    ),
  ref: React.ForwardedRef<HTMLElement>,
) {
  let classes = clsx(
    className,
    "ui:group ui:relative ui:inline-flex ui:rounded-md ui:focus:not-data-focus:outline-hidden ui:data-focus:outline-2 ui:data-focus:outline-offset-2 ui:data-focus:outline-blue-500",
  );

  return typeof props.href === "string" ? (
    <Link
      {...props}
      className={classes}
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
    >
      <TouchTarget>
        <Badge color={color}>{children}</Badge>
      </TouchTarget>
    </Link>
  ) : (
    <Headless.Button {...props} className={classes} ref={ref}>
      <TouchTarget>
        <Badge color={color}>{children}</Badge>
      </TouchTarget>
    </Headless.Button>
  );
});
