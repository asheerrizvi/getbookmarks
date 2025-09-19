"use client";

import * as Headless from "@headlessui/react";
import clsx from "clsx";
import type React from "react";
import { Button } from "./button";
import { Link } from "./link";

export function Dropdown(props: Headless.MenuProps) {
  return <Headless.Menu {...props} />;
}

export function DropdownButton<T extends React.ElementType = typeof Button>({
  as = Button,
  ...props
}: { className?: string } & Omit<Headless.MenuButtonProps<T>, "className">) {
  return <Headless.MenuButton as={as} {...props} />;
}

export function DropdownMenu({
  anchor = "bottom",
  className,
  ...props
}: { className?: string } & Omit<Headless.MenuItemsProps, "as" | "className">) {
  return (
    <Headless.MenuItems
      {...props}
      transition
      anchor={anchor}
      className={clsx(
        className,
        // Anchor positioning
        "ui:[--anchor-gap:--spacing(2)] ui:[--anchor-padding:--spacing(1)] ui:data-[anchor~=end]:[--anchor-offset:6px] ui:data-[anchor~=start]:[--anchor-offset:-6px] ui:sm:data-[anchor~=end]:[--anchor-offset:4px] ui:sm:data-[anchor~=start]:[--anchor-offset:-4px]",
        // Base styles
        "ui:isolate ui:w-max ui:rounded-xl ui:p-1",
        // Invisible border that is only visible in `forced-colors` mode for accessibility purposes
        "ui:outline ui:outline-transparent ui:focus:outline-hidden",
        // Handle scrolling when menu won't fit in viewport
        "ui:overflow-y-auto",
        // Popover background
        "ui:bg-white/75 ui:backdrop-blur-xl ui:dark:bg-zinc-800/75",
        // Shadows
        "ui:shadow-lg ui:ring-1 ui:ring-zinc-950/10 ui:dark:ring-white/10 ui:dark:ring-inset",
        // Define grid at the menu level if subgrid is supported
        "ui:supports-[grid-template-columns:subgrid]:grid ui:supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]",
        // Transitions
        "ui:transition ui:data-leave:duration-100 ui:data-leave:ease-in ui:data-closed:data-leave:opacity-0",
      )}
    />
  );
}

export function DropdownItem({
  className,
  ...props
}: { className?: string } & (
  | ({ href?: never } & Omit<
      Headless.MenuItemProps<"button">,
      "as" | "className"
    >)
  | ({ href: string } & Omit<
      Headless.MenuItemProps<typeof Link>,
      "as" | "className"
    >)
)) {
  let classes = clsx(
    className,
    // Base styles
    "ui:group ui:cursor-default ui:rounded-lg ui:px-3.5 ui:py-2.5 ui:focus:outline-hidden ui:sm:px-3 ui:sm:py-1.5",
    // Text styles
    "ui:text-left ui:text-base/6 ui:text-zinc-950 ui:sm:text-sm/6 ui:dark:text-white ui:forced-colors:text-[CanvasText]",
    // Focus
    "ui:data-focus:bg-blue-500 ui:data-focus:text-white",
    // Disabled state
    "ui:data-disabled:opacity-50",
    // Forced colors mode
    "ui:forced-color-adjust-none ui:forced-colors:data-focus:bg-[Highlight] ui:forced-colors:data-focus:text-[HighlightText] ui:forced-colors:data-focus:*:data-[slot=icon]:text-[HighlightText]",
    // Use subgrid when available but fallback to an explicit grid layout if not
    "ui:col-span-full ui:grid ui:grid-cols-[auto_1fr_1.5rem_0.5rem_auto] ui:items-center ui:supports-[grid-template-columns:subgrid]:grid-cols-subgrid",
    // Icons
    "ui:*:data-[slot=icon]:col-start-1 ui:*:data-[slot=icon]:row-start-1 ui:*:data-[slot=icon]:mr-2.5 ui:*:data-[slot=icon]:-ml-0.5 ui:*:data-[slot=icon]:size-5 ui:sm:*:data-[slot=icon]:mr-2 ui:sm:*:data-[slot=icon]:size-4",
    "ui:*:data-[slot=icon]:text-zinc-500 ui:data-focus:*:data-[slot=icon]:text-white ui:dark:*:data-[slot=icon]:text-zinc-400 ui:dark:data-focus:*:data-[slot=icon]:text-white",
    // Avatar
    "ui:*:data-[slot=avatar]:mr-2.5 ui:*:data-[slot=avatar]:-ml-1 ui:*:data-[slot=avatar]:size-6 ui:sm:*:data-[slot=avatar]:mr-2 ui:sm:*:data-[slot=avatar]:size-5",
  );

  return typeof props.href === "string" ? (
    <Headless.MenuItem as={Link} {...props} className={classes} />
  ) : (
    <Headless.MenuItem
      as="button"
      type="button"
      {...props}
      className={classes}
    />
  );
}

export function DropdownHeader({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "ui:col-span-5 ui:px-3.5 ui:pt-2.5 ui:pb-1 ui:sm:px-3",
      )}
    />
  );
}

export function DropdownSection({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.MenuSectionProps,
  "as" | "className"
>) {
  return (
    <Headless.MenuSection
      {...props}
      className={clsx(
        className,
        // Define grid at the section level instead of the item level if subgrid is supported
        "ui:col-span-full ui:supports-[grid-template-columns:subgrid]:grid ui:supports-[grid-template-columns:subgrid]:grid-cols-[auto_1fr_1.5rem_0.5rem_auto]",
      )}
    />
  );
}

export function DropdownHeading({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.MenuHeadingProps,
  "as" | "className"
>) {
  return (
    <Headless.MenuHeading
      {...props}
      className={clsx(
        className,
        "ui:col-span-full ui:grid ui:grid-cols-[1fr_auto] ui:gap-x-12 ui:px-3.5 ui:pt-2 ui:pb-1 ui:text-sm/5 ui:font-medium ui:text-zinc-500 ui:sm:px-3 ui:sm:text-xs/5 ui:dark:text-zinc-400",
      )}
    />
  );
}

export function DropdownDivider({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.MenuSeparatorProps,
  "as" | "className"
>) {
  return (
    <Headless.MenuSeparator
      {...props}
      className={clsx(
        className,
        "ui:col-span-full ui:mx-3.5 ui:my-1 ui:h-px ui:border-0 ui:bg-zinc-950/5 ui:sm:mx-3 ui:dark:bg-white/10 ui:forced-colors:bg-[CanvasText]",
      )}
    />
  );
}

export function DropdownLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      data-slot="label"
      className={clsx(className, "ui:col-start-2 ui:row-start-1")}
      {...props}
    />
  );
}

export function DropdownDescription({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DescriptionProps,
  "as" | "className"
>) {
  return (
    <Headless.Description
      data-slot="description"
      {...props}
      className={clsx(
        className,
        "ui:col-span-2 ui:col-start-2 ui:row-start-2 ui:text-sm/5 ui:text-zinc-500 ui:group-data-focus:text-white ui:sm:text-xs/5 ui:dark:text-zinc-400 ui:forced-colors:group-data-focus:text-[HighlightText]",
      )}
    />
  );
}

export function DropdownShortcut({
  keys,
  className,
  ...props
}: { keys: string | string[]; className?: string } & Omit<
  Headless.DescriptionProps<"kbd">,
  "as" | "className"
>) {
  return (
    <Headless.Description
      as="kbd"
      {...props}
      className={clsx(
        className,
        "ui:col-start-5 ui:row-start-1 ui:flex ui:justify-self-end",
      )}
    >
      {(Array.isArray(keys) ? keys : keys.split("")).map((char, index) => (
        <kbd
          key={index}
          className={clsx([
            "ui:min-w-[2ch] ui:text-center ui:font-sans ui:text-zinc-400 ui:capitalize ui:group-data-focus:text-white ui:forced-colors:group-data-focus:text-[HighlightText]",
            // Make sure key names that are longer than one character (like "Tab") have extra space
            index > 0 && char.length > 1 && "ui:pl-1",
          ])}
        >
          {char}
        </kbd>
      ))}
    </Headless.Description>
  );
}
