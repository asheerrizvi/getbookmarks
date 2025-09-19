import * as Headless from "@headlessui/react";
import clsx from "clsx";
import type React from "react";

export function CheckboxGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="control"
      {...props}
      className={clsx(
        className,
        // Basic groups
        "ui:space-y-3",
        // With descriptions
        "ui:has-data-[slot=description]:space-y-6 ui:has-data-[slot=description]:**:data-[slot=label]:font-medium",
      )}
    />
  );
}

export function CheckboxField({
  className,
  ...props
}: { className?: string } & Omit<Headless.FieldProps, "as" | "className">) {
  return (
    <Headless.Field
      data-slot="field"
      {...props}
      className={clsx(
        className,
        // Base layout
        "ui:grid ui:grid-cols-[1.125rem_1fr] ui:gap-x-4 ui:gap-y-1 ui:sm:grid-cols-[1rem_1fr]",
        // Control layout
        "ui:*:data-[slot=control]:col-start-1 ui:*:data-[slot=control]:row-start-1 ui:*:data-[slot=control]:mt-0.75 ui:sm:*:data-[slot=control]:mt-1",
        // Label layout
        "ui:*:data-[slot=label]:col-start-2 ui:*:data-[slot=label]:row-start-1",
        // Description layout
        "ui:*:data-[slot=description]:col-start-2 ui:*:data-[slot=description]:row-start-2",
        // With description
        "ui:has-data-[slot=description]:**:data-[slot=label]:font-medium",
      )}
    />
  );
}

const base = [
  // Basic layout
  "ui:relative ui:isolate ui:flex ui:size-4.5 ui:items-center ui:justify-center ui:rounded-[0.3125rem] ui:sm:size-4",
  // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
  "ui:before:absolute ui:before:inset-0 ui:before:-z-10 ui:before:rounded-[calc(0.3125rem-1px)] ui:before:bg-white ui:before:shadow-sm",
  // Background color when checked
  "ui:group-data-checked:before:bg-(--checkbox-checked-bg)",
  // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
  "ui:dark:before:hidden",
  // Background color applied to control in dark mode
  "ui:dark:bg-white/5 ui:dark:group-data-checked:bg-(--checkbox-checked-bg)",
  // Border
  "ui:border ui:border-zinc-950/15 ui:group-data-checked:border-transparent ui:group-data-hover:group-data-checked:border-transparent ui:group-data-hover:border-zinc-950/30 ui:group-data-checked:bg-(--checkbox-checked-border)",
  "ui:dark:border-white/15 ui:dark:group-data-checked:border-white/5 ui:dark:group-data-hover:group-data-checked:border-white/5 ui:dark:group-data-hover:border-white/30",
  // Inner highlight shadow
  "ui:after:absolute ui:after:inset-0 ui:after:rounded-[calc(0.3125rem-1px)] ui:after:shadow-[inset_0_1px_--theme(--color-white/15%)]",
  "ui:dark:after:-inset-px ui:dark:after:hidden ui:dark:after:rounded-[0.3125rem] ui:dark:group-data-checked:after:block",
  // Focus ring
  "ui:group-data-focus:outline-2 ui:group-data-focus:outline-offset-2 ui:group-data-focus:outline-blue-500",
  // Disabled state
  "ui:group-data-disabled:opacity-50",
  "ui:group-data-disabled:border-zinc-950/25 ui:group-data-disabled:bg-zinc-950/5 ui:group-data-disabled:[--checkbox-check:var(--color-zinc-950)]/50 ui:group-data-disabled:before:bg-transparent",
  "ui:dark:group-data-disabled:border-white/20 ui:dark:group-data-disabled:bg-white/2.5 ui:dark:group-data-disabled:[--checkbox-check:var(--color-white)]/50 ui:dark:group-data-checked:group-data-disabled:after:hidden",
  // Forced colors mode
  "ui:forced-colors:[--checkbox-check:HighlightText] ui:forced-colors:[--checkbox-checked-bg:Highlight] ui:forced-colors:group-data-disabled:[--checkbox-check:Highlight]",
  "ui:dark:forced-colors:[--checkbox-check:HighlightText] ui:dark:forced-colors:[--checkbox-checked-bg:Highlight] ui:dark:forced-colors:group-data-disabled:[--checkbox-check:Highlight]",
];

const colors = {
  "dark/zinc": [
    "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-zinc-900)] ui:[--checkbox-checked-border:var(--color-zinc-950)]/90",
    "ui:dark:[--checkbox-checked-bg:var(--color-zinc-600)]",
  ],
  "dark/white": [
    "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-zinc-900)] ui:[--checkbox-checked-border:var(--color-zinc-950)]/90",
    "ui:dark:[--checkbox-check:var(--color-zinc-900)] ui:dark:[--checkbox-checked-bg:var(--color-white)] ui:dark:[--checkbox-checked-border:var(--color-zinc-950)]/15",
  ],
  white:
    "ui:[--checkbox-check:var(--color-zinc-900)] ui:[--checkbox-checked-bg:var(--color-white)] ui:[--checkbox-checked-border:var(--color-zinc-950)]/15",
  dark: "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-zinc-900)] ui:[--checkbox-checked-border:var(--color-zinc-950)]/90",
  zinc: "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-zinc-600)] ui:[--checkbox-checked-border:var(--color-zinc-700)]/90",
  red: "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-red-600)] ui:[--checkbox-checked-border:var(--color-red-700)]/90",
  orange:
    "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-orange-500)] ui:[--checkbox-checked-border:var(--color-orange-600)]/90",
  amber:
    "ui:[--checkbox-check:var(--color-amber-950)] ui:[--checkbox-checked-bg:var(--color-amber-400)] ui:[--checkbox-checked-border:var(--color-amber-500)]/80",
  yellow:
    "ui:[--checkbox-check:var(--color-yellow-950)] ui:[--checkbox-checked-bg:var(--color-yellow-300)] ui:[--checkbox-checked-border:var(--color-yellow-400)]/80",
  lime: "ui:[--checkbox-check:var(--color-lime-950)] ui:[--checkbox-checked-bg:var(--color-lime-300)] ui:[--checkbox-checked-border:var(--color-lime-400)]/80",
  green:
    "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-green-600)] ui:[--checkbox-checked-border:var(--color-green-700)]/90",
  emerald:
    "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-emerald-600)] ui:[--checkbox-checked-border:var(--color-emerald-700)]/90",
  teal: "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-teal-600)] ui:[--checkbox-checked-border:var(--color-teal-700)]/90",
  cyan: "ui:[--checkbox-check:var(--color-cyan-950)] ui:[--checkbox-checked-bg:var(--color-cyan-300)] ui:[--checkbox-checked-border:var(--color-cyan-400)]/80",
  sky: "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-sky-500)] ui:[--checkbox-checked-border:var(--color-sky-600)]/80",
  blue: "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-blue-600)] ui:[--checkbox-checked-border:var(--color-blue-700)]/90",
  indigo:
    "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-indigo-500)] ui:[--checkbox-checked-border:var(--color-indigo-600)]/90",
  violet:
    "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-violet-500)] ui:[--checkbox-checked-border:var(--color-violet-600)]/90",
  purple:
    "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-purple-500)] ui:[--checkbox-checked-border:var(--color-purple-600)]/90",
  fuchsia:
    "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-fuchsia-500)] ui:[--checkbox-checked-border:var(--color-fuchsia-600)]/90",
  pink: "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-pink-500)] ui:[--checkbox-checked-border:var(--color-pink-600)]/90",
  rose: "ui:[--checkbox-check:var(--color-white)] ui:[--checkbox-checked-bg:var(--color-rose-500)] ui:[--checkbox-checked-border:var(--color-rose-600)]/90",
};

type Color = keyof typeof colors;

export function Checkbox({
  color = "dark/zinc",
  className,
  ...props
}: {
  color?: Color;
  className?: string;
} & Omit<Headless.CheckboxProps, "as" | "className">) {
  return (
    <Headless.Checkbox
      data-slot="control"
      {...props}
      className={clsx(
        className,
        "ui:group ui:inline-flex ui:focus:outline-hidden",
      )}
    >
      <span className={clsx([base, colors[color]])}>
        <svg
          className="ui:size-4 ui:stroke-(--checkbox-check) ui:opacity-0 ui:group-data-checked:opacity-100 ui:sm:h-3.5 ui:sm:w-3.5"
          viewBox="0 0 14 14"
          fill="none"
        >
          {/* Checkmark icon */}
          <path
            className="ui:opacity-100 ui:group-data-indeterminate:opacity-0"
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Indeterminate icon */}
          <path
            className="ui:opacity-0 ui:group-data-indeterminate:opacity-100"
            d="M3 7H11"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Headless.Checkbox>
  );
}
