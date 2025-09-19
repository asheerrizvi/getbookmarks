"use client";

import * as Headless from "@headlessui/react";
import clsx from "clsx";
import React, { forwardRef } from "react";
import { Link } from "./link";

const styles = {
  base: [
    // Base
    "ui:relative ui:isolate ui:inline-flex ui:items-baseline ui:justify-center ui:gap-x-2 ui:rounded-lg ui:border ui:text-base/6 ui:font-semibold",
    // Sizing
    "ui:px-[calc(--spacing(3.5)-1px)] ui:py-[calc(--spacing(2.5)-1px)] sm:ui:px-[calc(--spacing(3)-1px)] sm:ui:py-[calc(--spacing(1.5)-1px)] sm:ui:text-sm/6",
    // Focus
    "focus:ui:not-data-focus:outline-hidden ui:data-focus:outline-2 ui:data-focus:outline-offset-2 ui:data-focus:outline-blue-500",
    // Disabled
    "ui:data-disabled:opacity-50",
    // Icon
    "*:ui:data-[slot=icon]:-mx-0.5 *:ui:data-[slot=icon]:my-0.5 *:ui:data-[slot=icon]:size-5 *:ui:data-[slot=icon]:shrink-0 *:ui:data-[slot=icon]:self-center *:ui:data-[slot=icon]:text-(--btn-icon) sm:*:ui:data-[slot=icon]:my-1 sm:*:ui:data-[slot=icon]:size-4 ui:forced-colors:[--btn-icon:ButtonText] ui:forced-colors:data-hover:[--btn-icon:ButtonText]",
  ],
  solid: [
    // Optical border, implemented as the button background to avoid corner artifacts
    "ui:border-transparent ui:bg-(--btn-border)",
    // Dark mode: border is rendered on `after` so background is set to button background
    "dark:ui:bg-(--btn-bg)",
    // Button background, implemented as foreground layer to stack on top of pseudo-border layer
    "before:ui:absolute before:ui:inset-0 before:ui:-z-10 before:ui:rounded-[calc(var(--radius-lg)-1px)] before:ui:bg-(--btn-bg)",
    // Drop shadow, applied to the inset `before` layer so it blends with the border
    "before:ui:shadow-sm",
    // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
    "dark:before:ui:hidden",
    // Dark mode: Subtle white outline is applied using a border
    "dark:ui:border-white/5",
    // Shim/overlay, inset to match button foreground and used for hover state + highlight shadow
    "after:ui:absolute after:ui:inset-0 after:ui:-z-10 after:ui:rounded-[calc(var(--radius-lg)-1px)]",
    // Inner highlight shadow
    "after:ui:shadow-[inset_0_1px_--theme(--color-white/15%)]",
    // White overlay on hover
    "ui:data-active:after:bg-(--btn-hover-overlay) ui:data-hover:after:bg-(--btn-hover-overlay)",
    // Dark mode: `after` layer expands to cover entire button
    "dark:after:ui:-inset-px dark:after:ui:rounded-lg",
    // Disabled
    "ui:data-disabled:before:shadow-none ui:data-disabled:after:shadow-none",
  ],
  outline: [
    // Base
    "ui:border-zinc-950/10 ui:text-zinc-950 ui:data-active:bg-zinc-950/2.5 ui:data-hover:bg-zinc-950/2.5",
    // Dark mode
    "dark:ui:border-white/15 dark:ui:text-white dark:ui:[--btn-bg:transparent] dark:ui:data-active:bg-white/5 dark:ui:data-hover:bg-white/5",
    // Icon
    "ui:[--btn-icon:var(--color-zinc-500)] ui:data-active:[--btn-icon:var(--color-zinc-700)] ui:data-hover:[--btn-icon:var(--color-zinc-700)] dark:ui:data-active:[--btn-icon:var(--color-zinc-400)] dark:ui:data-hover:[--btn-icon:var(--color-zinc-400)]",
  ],
  plain: [
    // Base
    "ui:border-transparent ui:text-zinc-950 ui:data-active:bg-zinc-950/5 ui:data-hover:bg-zinc-950/5",
    // Dark mode
    "dark:ui:text-white dark:ui:data-active:bg-white/10 dark:ui:data-hover:bg-white/10",
    // Icon
    "ui:[--btn-icon:var(--color-zinc-500)] ui:data-active:[--btn-icon:var(--color-zinc-700)] ui:data-hover:[--btn-icon:var(--color-zinc-700)] dark:ui:[--btn-icon:var(--color-zinc-500)] dark:ui:data-active:[--btn-icon:var(--color-zinc-400)] dark:ui:data-hover:[--btn-icon:var(--color-zinc-400)]",
  ],
  colors: {
    "dark/zinc": [
      "ui:text-white ui:[--btn-bg:var(--color-zinc-900)] ui:[--btn-border:var(--color-zinc-950)]/90 ui:[--btn-hover-overlay:var(--color-white)]/10",
      "dark:ui:text-white dark:ui:[--btn-bg:var(--color-zinc-600)] dark:ui:[--btn-hover-overlay:var(--color-white)]/5",
      "ui:[--btn-icon:var(--color-zinc-400)] ui:data-active:[--btn-icon:var(--color-zinc-300)] ui:data-hover:[--btn-icon:var(--color-zinc-300)]",
    ],
    light: [
      "ui:text-zinc-950 ui:[--btn-bg:white] ui:[--btn-border:var(--color-zinc-950)]/10 ui:[--btn-hover-overlay:var(--color-zinc-950)]/2.5 ui:data-active:[--btn-border:var(--color-zinc-950)]/15 ui:data-hover:[--btn-border:var(--color-zinc-950)]/15",
      "dark:ui:text-white dark:ui:[--btn-hover-overlay:var(--color-white)]/5 dark:ui:[--btn-bg:var(--color-zinc-800)]",
      "ui:[--btn-icon:var(--color-zinc-500)] ui:data-active:[--btn-icon:var(--color-zinc-700)] ui:data-hover:[--btn-icon:var(--color-zinc-700)] dark:ui:[--btn-icon:var(--color-zinc-500)] dark:ui:data-active:[--btn-icon:var(--color-zinc-400)] dark:ui:data-hover:[--btn-icon:var(--color-zinc-400)]",
    ],
    "dark/white": [
      "ui:text-white ui:[--btn-bg:var(--color-zinc-900)] ui:[--btn-border:var(--color-zinc-950)]/90 ui:[--btn-hover-overlay:var(--color-white)]/10",
      "dark:ui:text-zinc-950 dark:ui:[--btn-bg:white] dark:ui:[--btn-hover-overlay:var(--color-zinc-950)]/5",
      "ui:[--btn-icon:var(--color-zinc-400)] ui:data-active:[--btn-icon:var(--color-zinc-300)] ui:data-hover:[--btn-icon:var(--color-zinc-300)] dark:ui:[--btn-icon:var(--color-zinc-500)] dark:ui:data-active:[--btn-icon:var(--color-zinc-400)] dark:ui:data-hover:[--btn-icon:var(--color-zinc-400)]",
    ],
    dark: [
      "ui:text-white ui:[--btn-bg:var(--color-zinc-900)] ui:[--btn-border:var(--color-zinc-950)]/90 ui:[--btn-hover-overlay:var(--color-white)]/10",
      "dark:ui:[--btn-hover-overlay:var(--color-white)]/5 dark:ui:[--btn-bg:var(--color-zinc-800)]",
      "ui:[--btn-icon:var(--color-zinc-400)] ui:data-active:[--btn-icon:var(--color-zinc-300)] ui:data-hover:[--btn-icon:var(--color-zinc-300)]",
    ],
    white: [
      "ui:text-zinc-950 ui:[--btn-bg:white] ui:[--btn-border:var(--color-zinc-950)]/10 ui:[--btn-hover-overlay:var(--color-zinc-950)]/2.5 ui:data-active:[--btn-border:var(--color-zinc-950)]/15 ui:data-hover:[--btn-border:var(--color-zinc-950)]/15",
      "dark:ui:[--btn-hover-overlay:var(--color-zinc-950)]/5",
      "ui:[--btn-icon:var(--color-zinc-400)] ui:data-active:[--btn-icon:var(--color-zinc-500)] ui:data-hover:[--btn-icon:var(--color-zinc-500)]",
    ],
    zinc: [
      "ui:text-white ui:[--btn-hover-overlay:var(--color-white)]/10 ui:[--btn-bg:var(--color-zinc-600)] ui:[--btn-border:var(--color-zinc-700)]/90",
      "dark:ui:[--btn-hover-overlay:var(--color-white)]/5",
      "ui:[--btn-icon:var(--color-zinc-400)] ui:data-active:[--btn-icon:var(--color-zinc-300)] ui:data-hover:[--btn-icon:var(--color-zinc-300)]",
    ],
    indigo: [
      "ui:text-white ui:[--btn-hover-overlay:var(--color-white)]/10 ui:[--btn-bg:var(--color-indigo-500)] ui:[--btn-border:var(--color-indigo-600)]/90",
      "ui:[--btn-icon:var(--color-indigo-300)] ui:data-active:[--btn-icon:var(--color-indigo-200)] ui:data-hover:[--btn-icon:var(--color-indigo-200)]",
    ],
    cyan: [
      "ui:text-cyan-950 ui:[--btn-bg:var(--color-cyan-300)] ui:[--btn-border:var(--color-cyan-400)]/80 ui:[--btn-hover-overlay:var(--color-white)]/25",
      "ui:[--btn-icon:var(--color-cyan-500)]",
    ],
    red: [
      "ui:text-white ui:[--btn-hover-overlay:var(--color-white)]/10 ui:[--btn-bg:var(--color-red-600)] ui:[--btn-border:var(--color-red-700)]/90",
      "ui:[--btn-icon:var(--color-red-300)] ui:data-active:[--btn-icon:var(--color-red-200)] ui:data-hover:[--btn-icon:var(--color-red-200)]",
    ],
    orange: [
      "ui:text-white ui:[--btn-hover-overlay:var(--color-white)]/10 ui:[--btn-bg:var(--color-orange-500)] ui:[--btn-border:var(--color-orange-600)]/90",
      "ui:[--btn-icon:var(--color-orange-300)] ui:data-active:[--btn-icon:var(--color-orange-200)] ui:data-hover:[--btn-icon:var(--color-orange-200)]",
    ],
    amber: [
      "ui:text-amber-950 ui:[--btn-hover-overlay:var(--color-white)]/25 ui:[--btn-bg:var(--color-amber-400)] ui:[--btn-border:var(--color-amber-500)]/80",
      "ui:[--btn-icon:var(--color-amber-600)]",
    ],
    yellow: [
      "ui:text-yellow-950 ui:[--btn-hover-overlay:var(--color-white)]/25 ui:[--btn-bg:var(--color-yellow-300)] ui:[--btn-border:var(--color-yellow-400)]/80",
      "ui:[--btn-icon:var(--color-yellow-600)] ui:data-active:[--btn-icon:var(--color-yellow-700)] ui:data-hover:[--btn-icon:var(--color-yellow-700)]",
    ],
    lime: [
      "ui:text-lime-950 ui:[--btn-hover-overlay:var(--color-white)]/25 ui:[--btn-bg:var(--color-lime-300)] ui:[--btn-border:var(--color-lime-400)]/80",
      "ui:[--btn-icon:var(--color-lime-600)] ui:data-active:[--btn-icon:var(--color-lime-700)] ui:data-hover:[--btn-icon:var(--color-lime-700)]",
    ],
    green: [
      "ui:text-white ui:[--btn-hover-overlay:var(--color-white)]/10 ui:[--btn-bg:var(--color-green-600)] ui:[--btn-border:var(--color-green-700)]/90",
      "ui:[--btn-icon:var(--color-white)]/60 ui:data-active:[--btn-icon:var(--color-white)]/80 ui:data-hover:[--btn-icon:var(--color-white)]/80",
    ],
    emerald: [
      "ui:text-white ui:[--btn-hover-overlay:var(--color-white)]/10 ui:[--btn-bg:var(--color-emerald-600)] ui:[--btn-border:var(--color-emerald-700)]/90",
      "ui:[--btn-icon:var(--color-white)]/60 ui:data-active:[--btn-icon:var(--color-white)]/80 ui:data-hover:[--btn-icon:var(--color-white)]/80",
    ],
    teal: [
      "ui:text-white ui:[--btn-hover-overlay:var(--color-white)]/10 ui:[--btn-bg:var(--color-teal-600)] ui:[--btn-border:var(--color-teal-700)]/90",
      "ui:[--btn-icon:var(--color-white)]/60 ui:data-active:[--btn-icon:var(--color-white)]/80 ui:data-hover:[--btn-icon:var(--color-white)]/80",
    ],
    sky: [
      "ui:text-white ui:[--btn-hover-overlay:var(--color-white)]/10 ui:[--btn-bg:var(--color-sky-500)] ui:[--btn-border:var(--color-sky-600)]/80",
      "ui:[--btn-icon:var(--color-white)]/60 ui:data-active:[--btn-icon:var(--color-white)]/80 ui:data-hover:[--btn-icon:var(--color-white)]/80",
    ],
    blue: [
      "ui:text-white ui:[--btn-hover-overlay:var(--color-white)]/10 ui:[--btn-bg:var(--color-blue-600)] ui:[--btn-border:var(--color-blue-700)]/90",
      "ui:[--btn-icon:var(--color-blue-400)] ui:data-active:[--btn-icon:var(--color-blue-300)] ui:data-hover:[--btn-icon:var(--color-blue-300)]",
    ],
    violet: [
      "ui:text-white ui:[--btn-hover-overlay:var(--color-white)]/10 ui:[--btn-bg:var(--color-violet-500)] ui:[--btn-border:var(--color-violet-600)]/90",
      "ui:[--btn-icon:var(--color-violet-300)] ui:data-active:[--btn-icon:var(--color-violet-200)] ui:data-hover:[--btn-icon:var(--color-violet-200)]",
    ],
    purple: [
      "ui:text-white ui:[--btn-hover-overlay:var(--color-white)]/10 ui:[--btn-bg:var(--color-purple-500)] ui:[--btn-border:var(--color-purple-600)]/90",
      "ui:[--btn-icon:var(--color-purple-300)] ui:data-active:[--btn-icon:var(--color-purple-200)] ui:data-hover:[--btn-icon:var(--color-purple-200)]",
    ],
    fuchsia: [
      "ui:text-white ui:[--btn-hover-overlay:var(--color-white)]/10 ui:[--btn-bg:var(--color-fuchsia-500)] ui:[--btn-border:var(--color-fuchsia-600)]/90",
      "ui:[--btn-icon:var(--color-fuchsia-300)] ui:data-active:[--btn-icon:var(--color-fuchsia-200)] ui:data-hover:[--btn-icon:var(--color-fuchsia-200)]",
    ],
    pink: [
      "ui:text-white ui:[--btn-hover-overlay:var(--color-white)]/10 ui:[--btn-bg:var(--color-pink-500)] ui:[--btn-border:var(--color-pink-600)]/90",
      "ui:[--btn-icon:var(--color-pink-300)] ui:data-active:[--btn-icon:var(--color-pink-200)] ui:data-hover:[--btn-icon:var(--color-pink-200)]",
    ],
    rose: [
      "ui:text-white ui:[--btn-hover-overlay:var(--color-white)]/10 ui:[--btn-bg:var(--color-rose-500)] ui:[--btn-border:var(--color-rose-600)]/90",
      "ui:[--btn-icon:var(--color-rose-300)] ui:data-active:[--btn-icon:var(--color-rose-200)] ui:data-hover:[--btn-icon:var(--color-rose-200)]",
    ],
  },
};

type ButtonProps = (
  | { color?: keyof typeof styles.colors; outline?: never; plain?: never }
  | { color?: never; outline: true; plain?: never }
  | { color?: never; outline?: never; plain: true }
) & { className?: string; children: React.ReactNode } & (
    | ({ href?: never } & Omit<Headless.ButtonProps, "as" | "className">)
    | ({ href: string } & Omit<
        React.ComponentPropsWithoutRef<typeof Link>,
        "className"
      >)
  );

export const Button = forwardRef(function Button(
  { color, outline, plain, className, children, ...props }: ButtonProps,
  ref: React.ForwardedRef<HTMLElement>,
) {
  let classes = clsx(
    className,
    styles.base,
    outline
      ? styles.outline
      : plain
        ? styles.plain
        : clsx(styles.solid, styles.colors[color ?? "dark/zinc"]),
  );

  return typeof props.href === "string" ? (
    <Link
      {...props}
      className={classes}
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
    >
      <TouchTarget>{children}</TouchTarget>
    </Link>
  ) : (
    <Headless.Button
      {...props}
      className={clsx(classes, "ui:cursor-default")}
      ref={ref}
    >
      <TouchTarget>{children}</TouchTarget>
    </Headless.Button>
  );
});

/**
 * Expand the hit area to at least 44×44px on touch devices
 */
export function TouchTarget({ children }: { children: React.ReactNode }) {
  return (
    <>
      <span
        className="ui:absolute ui:top-1/2 ui:left-1/2 ui:size-[max(100%,2.75rem)] ui:-translate-x-1/2 ui:-translate-y-1/2 ui:pointer-fine:hidden"
        aria-hidden="true"
      />
      {children}
    </>
  );
}
