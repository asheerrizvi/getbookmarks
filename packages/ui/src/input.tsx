"use client";

import * as Headless from "@headlessui/react";
import clsx from "clsx";
import React, { forwardRef } from "react";

export function InputGroup({
  children,
}: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      data-slot="control"
      className={clsx(
        "ui:relative ui:isolate ui:block",
        "ui:has-[[data-slot=icon]:first-child]:[&_input]:pl-10 ui:has-[[data-slot=icon]:last-child]:[&_input]:pr-10 ui:sm:has-[[data-slot=icon]:first-child]:[&_input]:pl-8 ui:sm:has-[[data-slot=icon]:last-child]:[&_input]:pr-8",
        "ui:*:data-[slot=icon]:pointer-events-none ui:*:data-[slot=icon]:absolute ui:*:data-[slot=icon]:top-3 ui:*:data-[slot=icon]:z-10 ui:*:data-[slot=icon]:size-5 ui:sm:*:data-[slot=icon]:top-2.5 ui:sm:*:data-[slot=icon]:size-4",
        "ui:[&>[data-slot=icon]:first-child]:left-3 ui:sm:[&>[data-slot=icon]:first-child]:left-2.5 ui:[&>[data-slot=icon]:last-child]:right-3 ui:sm:[&>[data-slot=icon]:last-child]:right-2.5",
        "ui:*:data-[slot=icon]:text-zinc-500 ui:dark:*:data-[slot=icon]:text-zinc-400",
      )}
    >
      {children}
    </span>
  );
}

const dateTypes = ["date", "datetime-local", "month", "time", "week"];
type DateType = (typeof dateTypes)[number];

export const Input = forwardRef(function Input(
  {
    className,
    ...props
  }: {
    className?: string;
    type?:
      | "email"
      | "number"
      | "password"
      | "search"
      | "tel"
      | "text"
      | "url"
      | DateType;
  } & Omit<Headless.InputProps, "as" | "className">,
  ref: React.ForwardedRef<HTMLInputElement>,
) {
  return (
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
      ])}
    >
      <Headless.Input
        ref={ref}
        {...props}
        className={clsx([
          // Date classes
          props.type &&
            dateTypes.includes(props.type) && [
              "ui:[&::-webkit-datetime-edit-fields-wrapper]:p-0",
              "ui:[&::-webkit-date-and-time-value]:min-h-[1.5em]",
              "ui:[&::-webkit-datetime-edit]:inline-flex",
              "ui:[&::-webkit-datetime-edit]:p-0",
              "ui:[&::-webkit-datetime-edit-year-field]:p-0",
              "ui:[&::-webkit-datetime-edit-month-field]:p-0",
              "ui:[&::-webkit-datetime-edit-day-field]:p-0",
              "ui:[&::-webkit-datetime-edit-hour-field]:p-0",
              "ui:[&::-webkit-datetime-edit-minute-field]:p-0",
              "ui:[&::-webkit-datetime-edit-second-field]:p-0",
              "ui:[&::-webkit-datetime-edit-millisecond-field]:p-0",
              "ui:[&::-webkit-datetime-edit-meridiem-field]:p-0",
            ],
          // Basic layout
          "ui:relative ui:block ui:w-full ui:appearance-none ui:rounded-lg ui:px-[calc(--spacing(3.5)-1px)] ui:py-[calc(--spacing(2.5)-1px)] ui:sm:px-[calc(--spacing(3)-1px)] ui:sm:py-[calc(--spacing(1.5)-1px)]",
          // Typography
          "ui:text-base/6 ui:text-zinc-950 ui:placeholder:text-zinc-500 ui:sm:text-sm/6 ui:dark:text-white",
          // Border
          "ui:border ui:border-zinc-950/10 ui:data-hover:border-zinc-950/20 ui:dark:border-white/10 ui:dark:data-hover:border-white/20",
          // Background color
          "ui:bg-transparent ui:dark:bg-white/5",
          // Hide default focus styles
          "ui:focus:outline-hidden",
          // Invalid state
          "ui:data-invalid:border-red-500 ui:data-invalid:data-hover:border-red-500 ui:dark:data-invalid:border-red-600 ui:dark:data-invalid:data-hover:border-red-600",
          // Disabled state
          "ui:data-disabled:border-zinc-950/20 ui:dark:data-disabled:border-white/15 ui:dark:data-disabled:bg-white/2.5 ui:dark:data-hover:data-disabled:border-white/15",
          // System icons
          "ui:dark:scheme-dark",
        ])}
      />
    </span>
  );
});
