"use client";

import * as Headless from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";

export function Combobox<T>({
  options,
  displayValue,
  filter,
  anchor = "bottom",
  className,
  placeholder,
  autoFocus,
  "aria-label": ariaLabel,
  children,
  ...props
}: {
  options: T[];
  displayValue: (value: T | null) => string | undefined;
  filter?: (value: T, query: string) => boolean;
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
  "aria-label"?: string;
  children: (value: NonNullable<T>) => React.ReactElement;
} & Omit<Headless.ComboboxProps<T, false>, "as" | "multiple" | "children"> & {
    anchor?: "top" | "bottom";
  }) {
  const [query, setQuery] = useState("");

  const filteredOptions =
    query === ""
      ? options
      : options.filter((option) =>
          filter
            ? filter(option, query)
            : displayValue(option)?.toLowerCase().includes(query.toLowerCase()),
        );

  return (
    <Headless.Combobox
      {...props}
      multiple={false}
      virtual={{ options: filteredOptions }}
      onClose={() => setQuery("")}
    >
      <span
        data-slot="control"
        className={clsx([
          className,
          // Basic layout
          "ui:relative ui:block ui:w-full",
          // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
          "ui:before:absolute ui:before:inset-px ui:before:rounded-[calc(var(--radius-lg)-1px)] ui:before:bg-white ui:before:shadow-sm",
          // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
          "ui:dark:before:hidden",
          // Focus ring
          "ui:after:pointer-events-none ui:after:absolute ui:after:inset-0 ui:after:rounded-lg ui:after:ring-transparent ui:after:ring-inset ui:sm:focus-within:after:ring-2 ui:sm:focus-within:after:ring-blue-500",
          // Disabled state
          "ui:has-data-disabled:opacity-50 ui:has-data-disabled:before:bg-zinc-950/5 ui:has-data-disabled:before:shadow-none",
          // Invalid state
          "ui:has-data-invalid:before:shadow-red-500/10",
        ])}
      >
        <Headless.ComboboxInput
          autoFocus={autoFocus}
          data-slot="control"
          aria-label={ariaLabel}
          displayValue={(option: T) => displayValue(option) ?? ""}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          className={clsx([
            className,
            // Basic layout
            "ui:relative ui:block ui:w-full ui:appearance-none ui:rounded-lg ui:py-[calc(--spacing(2.5)-1px)] ui:sm:py-[calc(--spacing(1.5)-1px)]",
            // Horizontal padding
            "ui:pr-[calc(--spacing(10)-1px)] ui:pl-[calc(--spacing(3.5)-1px)] ui:sm:pr-[calc(--spacing(9)-1px)] ui:sm:pl-[calc(--spacing(3)-1px)]",
            // Typography
            "ui:text-base/6 ui:text-zinc-950 ui:placeholder:text-zinc-500 ui:sm:text-sm/6 ui:dark:text-white",
            // Border
            "ui:border ui:border-zinc-950/10 ui:data-hover:border-zinc-950/20 ui:dark:border-white/10 ui:dark:data-hover:border-white/20",
            // Background color
            "ui:bg-transparent ui:dark:bg-white/5",
            // Hide default focus styles
            "ui:focus:outline-hidden",
            // Invalid state
            "ui:data-invalid:border-red-500 ui:data-invalid:data-hover:border-red-500 ui:dark:data-invalid:border-red-500 ui:dark:data-invalid:data-hover:border-red-500",
            // Disabled state
            "ui:data-disabled:border-zinc-950/20 ui:dark:data-disabled:border-white/15 ui:dark:data-disabled:bg-white/2.5 ui:dark:data-hover:data-disabled:border-white/15",
            // System icons
            "ui:dark:scheme-dark",
          ])}
        />
        <Headless.ComboboxButton className="ui:group ui:absolute ui:inset-y-0 ui:right-0 ui:flex ui:items-center ui:px-2">
          <svg
            className="ui:size-5 ui:stroke-zinc-500 ui:group-data-disabled:stroke-zinc-600 ui:group-data-hover:stroke-zinc-700 ui:sm:size-4 ui:dark:stroke-zinc-400 ui:dark:group-data-hover:stroke-zinc-300 ui:forced-colors:stroke-[CanvasText]"
            viewBox="0 0 16 16"
            aria-hidden="true"
            fill="none"
          >
            <path
              d="M5.75 10.75L8 13L10.25 10.75"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.25 5.25L8 3L5.75 5.25"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Headless.ComboboxButton>
      </span>
      <Headless.ComboboxOptions
        transition
        anchor={anchor}
        className={clsx(
          // Anchor positioning
          "ui:[--anchor-gap:--spacing(2)] ui:[--anchor-padding:--spacing(4)] ui:sm:data-[anchor~=start]:[--anchor-offset:-4px]",
          // Base styles,
          "ui:isolate ui:min-w-[calc(var(--input-width)+8px)] ui:scroll-py-1 ui:rounded-xl ui:p-1 ui:select-none ui:empty:invisible",
          // Invisible border that is only visible in `forced-colors` mode for accessibility purposes
          "ui:outline ui:outline-transparent ui:focus:outline-hidden",
          // Handle scrolling when menu won't fit in viewport
          "ui:overflow-y-scroll ui:overscroll-contain",
          // Popover background
          "ui:bg-white/75 ui:backdrop-blur-xl ui:dark:bg-zinc-800/75",
          // Shadows
          "ui:shadow-lg ui:ring-1 ui:ring-zinc-950/10 ui:dark:ring-white/10 ui:dark:ring-inset",
          // Transitions
          "ui:transition-opacity ui:duration-100 ui:ease-in ui:data-closed:data-leave:opacity-0 ui:data-transition:pointer-events-none",
        )}
      >
        {({ option }) => children(option)}
      </Headless.ComboboxOptions>
    </Headless.Combobox>
  );
}

export function ComboboxOption<T>({
  children,
  className,
  ...props
}: { className?: string; children?: React.ReactNode } & Omit<
  Headless.ComboboxOptionProps<"div", T>,
  "as" | "className"
>) {
  let sharedClasses = clsx(
    // Base
    "ui:flex ui:min-w-0 ui:items-center",
    // Icons
    "ui:*:data-[slot=icon]:size-5 ui:*:data-[slot=icon]:shrink-0 ui:sm:*:data-[slot=icon]:size-4",
    "ui:*:data-[slot=icon]:text-zinc-500 ui:group-data-focus/option:*:data-[slot=icon]:text-white ui:dark:*:data-[slot=icon]:text-zinc-400",
    "ui:forced-colors:*:data-[slot=icon]:text-[CanvasText] ui:forced-colors:group-data-focus/option:*:data-[slot=icon]:text-[Canvas]",
    // Avatars
    "ui:*:data-[slot=avatar]:-mx-0.5 ui:*:data-[slot=avatar]:size-6 ui:sm:*:data-[slot=avatar]:size-5",
  );

  return (
    <Headless.ComboboxOption
      {...props}
      className={clsx(
        // Basic layout
        "ui:group/option ui:grid ui:w-full ui:cursor-default ui:grid-cols-[1fr_--spacing(5)] ui:items-baseline ui:gap-x-2 ui:rounded-lg ui:py-2.5 ui:pr-2 ui:pl-3.5 ui:sm:grid-cols-[1fr_--spacing(4)] ui:sm:py-1.5 ui:sm:pr-2 ui:sm:pl-3",
        // Typography
        "ui:text-base/6 ui:text-zinc-950 ui:sm:text-sm/6 ui:dark:text-white ui:forced-colors:text-[CanvasText]",
        // Focus
        "ui:outline-hidden ui:data-focus:bg-blue-500 ui:data-focus:text-white",
        // Forced colors mode
        "ui:forced-color-adjust-none ui:forced-colors:data-focus:bg-[Highlight] ui:forced-colors:data-focus:text-[HighlightText]",
        // Disabled
        "ui:data-disabled:opacity-50",
      )}
    >
      <span className={clsx(className, sharedClasses)}>{children}</span>
      <svg
        className="ui:relative ui:col-start-2 ui:hidden ui:size-5 ui:self-center ui:stroke-current ui:group-data-selected/option:inline ui:sm:size-4"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M4 8.5l3 3L12 4"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Headless.ComboboxOption>
  );
}

export function ComboboxLabel({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      {...props}
      className={clsx(
        className,
        "ui:ml-2.5 ui:truncate ui:first:ml-0 ui:sm:ml-2 ui:sm:first:ml-0",
      )}
    />
  );
}

export function ComboboxDescription({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      {...props}
      className={clsx(
        className,
        "ui:flex ui:flex-1 ui:overflow-hidden ui:text-zinc-500 ui:group-data-focus/option:text-white ui:before:w-2 ui:before:min-w-0 ui:before:shrink ui:dark:text-zinc-400",
      )}
    >
      <span className="ui:flex-1 ui:truncate">{children}</span>
    </span>
  );
}
