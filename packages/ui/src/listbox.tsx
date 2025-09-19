"use client";

import * as Headless from "@headlessui/react";
import clsx from "clsx";
import { Fragment } from "react";

export function Listbox<T>({
  className,
  placeholder,
  autoFocus,
  "aria-label": ariaLabel,
  children: options,
  ...props
}: {
  className?: string;
  placeholder?: React.ReactNode;
  autoFocus?: boolean;
  "aria-label"?: string;
  children?: React.ReactNode;
} & Omit<Headless.ListboxProps<typeof Fragment, T>, "as" | "multiple">) {
  return (
    <Headless.Listbox {...props} multiple={false}>
      <Headless.ListboxButton
        autoFocus={autoFocus}
        data-slot="control"
        aria-label={ariaLabel}
        className={clsx([
          className,
          // Basic layout
          "ui:group ui:relative ui:block ui:w-full",
          // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
          "ui:before:absolute ui:before:inset-px ui:before:rounded-[calc(var(--radius-lg)-1px)] ui:before:bg-white ui:before:shadow-sm",
          // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
          "ui:dark:before:hidden",
          // Hide default focus styles
          "ui:focus:outline-hidden",
          // Focus ring
          "ui:after:pointer-events-none ui:after:absolute ui:after:inset-0 ui:after:rounded-lg ui:after:ring-transparent ui:after:ring-inset ui:data-focus:after:ring-2 ui:data-focus:after:ring-blue-500",
          // Disabled state
          "ui:data-disabled:opacity-50 ui:data-disabled:before:bg-zinc-950/5 ui:data-disabled:before:shadow-none",
        ])}
      >
        <Headless.ListboxSelectedOption
          as="span"
          options={options}
          placeholder={
            placeholder && (
              <span className="ui:block ui:truncate ui:text-zinc-500">
                {placeholder}
              </span>
            )
          }
          className={clsx([
            // Basic layout
            "ui:relative ui:block ui:w-full ui:appearance-none ui:rounded-lg ui:py-[calc(--spacing(2.5)-1px)] ui:sm:py-[calc(--spacing(1.5)-1px)]",
            // Set minimum height for when no value is selected
            "ui:min-h-11 ui:sm:min-h-9",
            // Horizontal padding
            "ui:pr-[calc(--spacing(7)-1px)] ui:pl-[calc(--spacing(3.5)-1px)] ui:sm:pl-[calc(--spacing(3)-1px)]",
            // Typography
            "ui:text-left ui:text-base/6 ui:text-zinc-950 ui:placeholder:text-zinc-500 ui:sm:text-sm/6 ui:dark:text-white ui:forced-colors:text-[CanvasText]",
            // Border
            "ui:border ui:border-zinc-950/10 ui:group-data-active:border-zinc-950/20 ui:group-data-hover:border-zinc-950/20 ui:dark:border-white/10 ui:dark:group-data-active:border-white/20 ui:dark:group-data-hover:border-white/20",
            // Background color
            "ui:bg-transparent ui:dark:bg-white/5",
            // Invalid state
            "ui:group-data-invalid:border-red-500 ui:group-data-hover:group-data-invalid:border-red-500 ui:dark:group-data-invalid:border-red-600 ui:dark:data-hover:group-data-invalid:border-red-600",
            // Disabled state
            "ui:group-data-disabled:border-zinc-950/20 ui:group-data-disabled:opacity-100 ui:dark:group-data-disabled:border-white/15 ui:dark:group-data-disabled:bg-white/2.5 ui:dark:group-data-disabled:data-hover:border-white/15",
          ])}
        />
        <span className="ui:pointer-events-none ui:absolute ui:inset-y-0 ui:right-0 ui:flex ui:items-center ui:pr-2">
          <svg
            className="ui:size-5 ui:stroke-zinc-500 ui:group-data-disabled:stroke-zinc-600 ui:sm:size-4 ui:dark:stroke-zinc-400 ui:forced-colors:stroke-[CanvasText]"
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
        </span>
      </Headless.ListboxButton>
      <Headless.ListboxOptions
        transition
        anchor="selection start"
        className={clsx(
          // Anchor positioning
          "ui:[--anchor-offset:-1.625rem] ui:[--anchor-padding:--spacing(4)] ui:sm:[--anchor-offset:-1.375rem]",
          // Base styles
          "ui:isolate ui:w-max ui:min-w-[calc(var(--button-width)+1.75rem)] ui:scroll-py-1 ui:rounded-xl ui:p-1 ui:select-none",
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
        {options}
      </Headless.ListboxOptions>
    </Headless.Listbox>
  );
}

export function ListboxOption<T>({
  children,
  className,
  ...props
}: { className?: string; children?: React.ReactNode } & Omit<
  Headless.ListboxOptionProps<"div", T>,
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
    <Headless.ListboxOption as={Fragment} {...props}>
      {({ selectedOption }) => {
        if (selectedOption) {
          return (
            <div className={clsx(className, sharedClasses)}>{children}</div>
          );
        }

        return (
          <div
            className={clsx(
              // Basic layout
              "ui:group/option ui:grid ui:cursor-default ui:grid-cols-[--spacing(5)_1fr] ui:items-baseline ui:gap-x-2 ui:rounded-lg ui:py-2.5 ui:pr-3.5 ui:pl-2 ui:sm:grid-cols-[--spacing(4)_1fr] ui:sm:py-1.5 ui:sm:pr-3 ui:sm:pl-1.5",
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
            <svg
              className="ui:relative ui:hidden ui:size-5 ui:self-center ui:stroke-current ui:group-data-selected/option:inline ui:sm:size-4"
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
            <span className={clsx(className, sharedClasses, "ui:col-start-2")}>
              {children}
            </span>
          </div>
        );
      }}
    </Headless.ListboxOption>
  );
}

export function ListboxLabel({
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

export function ListboxDescription({
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
