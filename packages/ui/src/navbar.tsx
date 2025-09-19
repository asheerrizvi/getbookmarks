'use client'

import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { LayoutGroup, motion } from 'motion/react'
import React, { forwardRef, useId } from 'react'
import { TouchTarget } from './button'
import { Link } from './link'

export function Navbar({ className, ...props }: React.ComponentPropsWithoutRef<'nav'>) {
  return <nav {...props} className={clsx(className, 'ui:flex ui:flex-1 ui:items-center ui:gap-4 ui:py-2.5')} />
}

export function NavbarDivider({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div aria-hidden="true" {...props} className={clsx(className, 'ui:h-6 ui:w-px ui:bg-zinc-950/10 ui:dark:bg-white/10')} />
}

export function NavbarSection({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <LayoutGroup id={id}>
      <div {...props} className={clsx(className, 'ui:flex ui:items-center ui:gap-3')} />
    </LayoutGroup>
  )
}

export function NavbarSpacer({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div aria-hidden="true" {...props} className={clsx(className, 'ui:-ml-4 ui:flex-1')} />
}

export const NavbarItem = forwardRef(function NavbarItem(
  {
    current,
    className,
    children,
    ...props
  }: { current?: boolean; className?: string; children: React.ReactNode } & (
    | ({ href?: never } & Omit<Headless.ButtonProps, 'as' | 'className'>)
    | ({ href: string } & Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'>)
  ),
  ref: React.ForwardedRef<HTMLAnchorElement | HTMLButtonElement>
) {
  let classes = clsx(
    // Base
    'ui:relative ui:flex ui:min-w-0 ui:items-center ui:gap-3 ui:rounded-lg ui:p-2 ui:text-left ui:text-base/6 ui:font-medium ui:text-zinc-950 ui:sm:text-sm/5',
    // Leading icon/icon-only
    'ui:*:data-[slot=icon]:size-6 ui:*:data-[slot=icon]:shrink-0 ui:*:data-[slot=icon]:fill-zinc-500 ui:sm:*:data-[slot=icon]:size-5',
    // Trailing icon (down chevron or similar)
    'ui:*:not-nth-2:last:data-[slot=icon]:ml-auto ui:*:not-nth-2:last:data-[slot=icon]:size-5 ui:sm:*:not-nth-2:last:data-[slot=icon]:size-4',
    // Avatar
    'ui:*:data-[slot=avatar]:-m-0.5 ui:*:data-[slot=avatar]:size-7 ui:*:data-[slot=avatar]:[--avatar-radius:var(--radius-md)] ui:sm:*:data-[slot=avatar]:size-6',
    // Hover
    'ui:data-hover:bg-zinc-950/5 ui:data-hover:*:data-[slot=icon]:fill-zinc-950',
    // Active
    'ui:data-active:bg-zinc-950/5 ui:data-active:*:data-[slot=icon]:fill-zinc-950',
    // Dark mode
    'ui:dark:text-white ui:dark:*:data-[slot=icon]:fill-zinc-400',
    'ui:dark:data-hover:bg-white/5 ui:dark:data-hover:*:data-[slot=icon]:fill-white',
    'ui:dark:data-active:bg-white/5 ui:dark:data-active:*:data-[slot=icon]:fill-white'
  )

  return (
    <span className={clsx(className, 'ui:relative')}>
      {current && (
        <motion.span
          layoutId="current-indicator"
          className="ui:absolute ui:inset-x-2 ui:-bottom-2.5 ui:h-0.5 ui:rounded-full ui:bg-zinc-950 ui:dark:bg-white"
        />
      )}
      {typeof props.href === 'string' ? (
        <Link
          {...props}
          className={classes}
          data-current={current ? 'true' : undefined}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
        >
          <TouchTarget>{children}</TouchTarget>
        </Link>
      ) : (
        <Headless.Button
          {...props}
          className={clsx('ui:cursor-default', classes)}
          data-current={current ? 'true' : undefined}
          ref={ref}
        >
          <TouchTarget>{children}</TouchTarget>
        </Headless.Button>
      )}
    </span>
  )
})

export function NavbarLabel({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) {
  return <span {...props} className={clsx(className, 'ui:truncate')} />
}
