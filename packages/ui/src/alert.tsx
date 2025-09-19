"use client";

import * as Headless from "@headlessui/react";
import clsx from "clsx";
import type React from "react";
import { Text } from "./text";

const sizes = {
  xs: "ui:sm:max-w-xs",
  sm: "ui:sm:max-w-sm",
  md: "ui:sm:max-w-md",
  lg: "ui:sm:max-w-lg",
  xl: "ui:sm:max-w-xl",
  "2xl": "ui:sm:max-w-2xl",
  "3xl": "ui:sm:max-w-3xl",
  "4xl": "ui:sm:max-w-4xl",
  "5xl": "ui:sm:max-w-5xl",
};

export function Alert({
  size = "md",
  className,
  children,
  ...props
}: {
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
} & Omit<Headless.DialogProps, "as" | "className">) {
  return (
    <Headless.Dialog {...props}>
      <Headless.DialogBackdrop
        transition
        className="ui:fixed ui:inset-0 ui:flex ui:w-screen ui:justify-center ui:overflow-y-auto ui:bg-zinc-950/15 ui:px-2 ui:py-2 ui:transition ui:duration-100 ui:focus:outline-0 ui:data-closed:opacity-0 ui:data-enter:ease-out ui:data-leave:ease-in ui:sm:px-6 ui:sm:py-8 ui:lg:px-8 ui:lg:py-16 ui:dark:bg-zinc-950/50"
      />

      <div className="ui:fixed ui:inset-0 ui:w-screen ui:overflow-y-auto ui:pt-6 ui:sm:pt-0">
        <div className="ui:grid ui:min-h-full ui:grid-rows-[1fr_auto_1fr] ui:justify-items-center ui:p-8 ui:sm:grid-rows-[1fr_auto_3fr] ui:sm:p-4">
          <Headless.DialogPanel
            transition
            className={clsx(
              className,
              sizes[size],
              "ui:row-start-2 ui:w-full ui:rounded-2xl ui:bg-white ui:p-8 ui:shadow-lg ui:ring-1 ui:ring-zinc-950/10 ui:sm:rounded-2xl ui:sm:p-6 ui:dark:bg-zinc-900 ui:dark:ring-white/10 ui:forced-colors:outline",
              "ui:transition ui:duration-100 ui:will-change-transform ui:data-closed:opacity-0 ui:data-enter:ease-out ui:data-closed:data-enter:scale-95 ui:data-leave:ease-in",
            )}
          >
            {children}
          </Headless.DialogPanel>
        </div>
      </div>
    </Headless.Dialog>
  );
}

export function AlertTitle({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DialogTitleProps,
  "as" | "className"
>) {
  return (
    <Headless.DialogTitle
      {...props}
      className={clsx(
        className,
        "ui:text-center ui:text-base/6 ui:font-semibold ui:text-balance ui:text-zinc-950 ui:sm:text-left ui:sm:text-sm/6 ui:sm:text-wrap ui:dark:text-white",
      )}
    />
  );
}

export function AlertDescription({
  className,
  ...props
}: { className?: string } & Omit<
  Headless.DescriptionProps<typeof Text>,
  "as" | "className"
>) {
  return (
    <Headless.Description
      as={Text}
      {...props}
      className={clsx(
        className,
        "ui:mt-2 ui:text-center ui:text-pretty ui:sm:text-left",
      )}
    />
  );
}

export function AlertBody({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return <div {...props} className={clsx(className, "ui:mt-4")} />;
}

export function AlertActions({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        "ui:mt-6 ui:flex ui:flex-col-reverse ui:items-center ui:justify-end ui:gap-3 ui:*:w-full ui:sm:mt-4 ui:sm:flex-row ui:sm:*:w-auto",
      )}
    />
  );
}
