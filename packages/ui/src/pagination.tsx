"use client";

import clsx from "clsx";
import type React from "react";
import { Button } from "./button";

export function Pagination({
  "aria-label": ariaLabel = "Page navigation",
  className,
  ...props
}: React.ComponentPropsWithoutRef<"nav">) {
  return (
    <nav
      aria-label={ariaLabel}
      {...props}
      className={clsx(className, "ui:flex ui:gap-x-2")}
    />
  );
}

export function PaginationPrevious({
  href = null,
  className,
  children = "Previous",
}: React.PropsWithChildren<{ href?: string | null; className?: string }>) {
  return (
    <span className={clsx(className, "ui:grow ui:basis-0")}>
      <Button
        {...(href === null ? { disabled: true } : { href })}
        plain
        aria-label="Previous page"
      >
        <svg
          className="ui:stroke-current"
          data-slot="icon"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M2.75 8H13.25M2.75 8L5.25 5.5M2.75 8L5.25 10.5"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {children}
      </Button>
    </span>
  );
}

export function PaginationNext({
  href = null,
  className,
  children = "Next",
}: React.PropsWithChildren<{ href?: string | null; className?: string }>) {
  return (
    <span
      className={clsx(className, "ui:flex ui:grow ui:basis-0 ui:justify-end")}
    >
      <Button
        {...(href === null ? { disabled: true } : { href })}
        plain
        aria-label="Next page"
      >
        {children}
        <svg
          className="ui:stroke-current"
          data-slot="icon"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M13.25 8L2.75 8M13.25 8L10.75 10.5M13.25 8L10.75 5.5"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </span>
  );
}

export function PaginationList({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      {...props}
      className={clsx(
        className,
        "ui:hidden ui:items-baseline ui:gap-x-2 ui:sm:flex",
      )}
    />
  );
}

export function PaginationPage({
  href,
  className,
  current = false,
  children,
}: React.PropsWithChildren<{
  href: string;
  className?: string;
  current?: boolean;
}>) {
  return (
    <Button
      href={href}
      plain
      aria-label={`Page ${children}`}
      aria-current={current ? "page" : undefined}
      className={clsx(
        className,
        "ui:min-w-9 ui:before:absolute ui:before:-inset-px ui:before:rounded-lg",
        current && "ui:before:bg-zinc-950/5 ui:dark:before:bg-white/10",
      )}
    >
      <span className="ui:-mx-0.5">{children}</span>
    </Button>
  );
}

export function PaginationGap({
  className,
  children = <>&hellip;</>,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      aria-hidden="true"
      {...props}
      className={clsx(
        className,
        "ui:w-9 ui:text-center ui:text-sm/6 ui:font-semibold ui:text-zinc-950 ui:select-none ui:dark:text-white",
      )}
    >
      {children}
    </span>
  );
}
