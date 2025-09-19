import * as Headless from "@headlessui/react";
import clsx from "clsx";
import type React from "react";

export function Fieldset({
  className,
  ...props
}: { className?: string } & Omit<Headless.FieldsetProps, "as" | "className">) {
  return (
    <Headless.Fieldset
      {...props}
      className={clsx(
        className,
        "ui:*:data-[slot=text]:mt-1 ui:[&>*+[data-slot=control]]:mt-6",
      )}
    />
  );
}

export function Legend({
  className,
  ...props
}: { className?: string } & Omit<Headless.LegendProps, "as" | "className">) {
  return (
    <Headless.Legend
      data-slot="legend"
      {...props}
      className={clsx(
        className,
        "ui:text-base/6 ui:font-semibold ui:text-zinc-950 ui:data-disabled:opacity-50 ui:sm:text-sm/6 ui:dark:text-white",
      )}
    />
  );
}

export function FieldGroup({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      data-slot="control"
      {...props}
      className={clsx(className, "ui:space-y-8")}
    />
  );
}

export function Field({
  className,
  ...props
}: { className?: string } & Omit<Headless.FieldProps, "as" | "className">) {
  return (
    <Headless.Field
      {...props}
      className={clsx(
        className,
        "ui:[&>[data-slot=label]+[data-slot=control]]:mt-3",
        "ui:[&>[data-slot=label]+[data-slot=description]]:mt-1",
        "ui:[&>[data-slot=description]+[data-slot=control]]:mt-3",
        "ui:[&>[data-slot=control]+[data-slot=description]]:mt-3",
        "ui:[&>[data-slot=control]+[data-slot=error]]:mt-3",
        "ui:*:data-[slot=label]:font-medium",
      )}
    />
  );
}

export function Label({
  className,
  ...props
}: { className?: string } & Omit<Headless.LabelProps, "as" | "className">) {
  return (
    <Headless.Label
      data-slot="label"
      {...props}
      className={clsx(
        className,
        "ui:text-base/6 ui:text-zinc-950 ui:select-none ui:data-disabled:opacity-50 ui:sm:text-sm/6 ui:dark:text-white",
      )}
    />
  );
}

export function Description({
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
        "ui:text-base/6 ui:text-zinc-500 ui:data-disabled:opacity-50 ui:sm:text-sm/6 ui:dark:text-zinc-400",
      )}
    />
  );
}

export function ErrorMessage({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DescriptionProps,
  "as" | "className"
>) {
  return (
    <Headless.Description
      data-slot="error"
      {...props}
      className={clsx(
        className,
        "ui:text-base/6 ui:text-red-600 ui:data-disabled:opacity-50 ui:sm:text-sm/6 ui:dark:text-red-500",
      )}
    />
  );
}
