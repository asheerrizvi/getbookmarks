import * as Headless from "@headlessui/react";
import clsx from "clsx";
import React, { forwardRef } from "react";
import { TouchTarget } from "./button";
import { Link } from "./link";

type AvatarProps = {
  src?: string | null;
  square?: boolean;
  initials?: string;
  alt?: string;
  className?: string;
};

export function Avatar({
  src = null,
  square = false,
  initials,
  alt = "",
  className,
  ...props
}: AvatarProps & React.ComponentPropsWithoutRef<"span">) {
  return (
    <span
      data-slot="avatar"
      {...props}
      className={clsx(
        className,
        // Basic layout
        "ui:inline-grid ui:shrink-0 ui:align-middle ui:[--avatar-radius:20%] ui:*:col-start-1 ui:*:row-start-1",
        "ui:outline ui:-outline-offset-1 ui:outline-black/10 ui:dark:outline-white/10",
        // Border radius
        square
          ? "ui:rounded-(--avatar-radius) ui:*:rounded-(--avatar-radius)"
          : "ui:rounded-full ui:*:rounded-full",
      )}
    >
      {initials && (
        <svg
          className="ui:size-full ui:fill-current ui:p-[5%] ui:text-[48px] ui:font-medium ui:uppercase ui:select-none"
          viewBox="0 0 100 100"
          aria-hidden={alt ? undefined : "true"}
        >
          {alt && <title>{alt}</title>}
          <text
            x="50%"
            y="50%"
            alignmentBaseline="middle"
            dominantBaseline="middle"
            textAnchor="middle"
            dy=".125em"
          >
            {initials}
          </text>
        </svg>
      )}
      {src && <img className="ui:size-full" src={src} alt={alt} />}
    </span>
  );
}

export const AvatarButton = forwardRef(function AvatarButton(
  {
    src,
    square = false,
    initials,
    alt,
    className,
    ...props
  }: AvatarProps &
    (
      | ({ href?: never } & Omit<Headless.ButtonProps, "as" | "className">)
      | ({ href: string } & Omit<
          React.ComponentPropsWithoutRef<typeof Link>,
          "className"
        >)
    ),
  ref: React.ForwardedRef<HTMLButtonElement>,
) {
  let classes = clsx(
    className,
    square ? "ui:rounded-[20%]" : "ui:rounded-full",
    "ui:relative ui:inline-grid ui:focus:not-data-focus:outline-hidden ui:data-focus:outline-2 ui:data-focus:outline-offset-2 ui:data-focus:outline-blue-500",
  );

  return typeof props.href === "string" ? (
    <Link
      {...props}
      className={classes}
      ref={ref as React.ForwardedRef<HTMLAnchorElement>}
    >
      <TouchTarget>
        <Avatar src={src} square={square} initials={initials} alt={alt} />
      </TouchTarget>
    </Link>
  ) : (
    <Headless.Button {...props} className={classes} ref={ref}>
      <TouchTarget>
        <Avatar src={src} square={square} initials={initials} alt={alt} />
      </TouchTarget>
    </Headless.Button>
  );
});
