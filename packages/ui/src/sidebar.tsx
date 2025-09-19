'use client'

import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { LayoutGroup, motion } from 'motion/react'
import React, { forwardRef, useId } from 'react'
import { TouchTarget } from './button'
import { Link } from './link'

export function Sidebar({ className, ...props }: React.ComponentPropsWithoutRef<'nav'>) {
  return <nav {...props} className={clsx(className, 'ui:flex ui:h-full ui:min-h-0 ui:flex-col')} />
}

export function SidebarHeader({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'ui:flex ui:flex-col ui:border-b ui:border-zinc-950/5 ui:p-4 ui:dark:border-white/5 ui:[&>[data-slot=section]+[data-slot=section]]:mt-2.5'
      )}
    />
  )
}

export function SidebarBody({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'ui:flex ui:flex-1 ui:flex-col ui:overflow-y-auto ui:p-4 ui:[&>[data-slot=section]+[data-slot=section]]:mt-8'
      )}
    />
  )
}

export function SidebarFooter({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      {...props}
      className={clsx(
        className,
        'ui:flex ui:flex-col ui:border-t ui:border-zinc-950/5 ui:p-4 ui:dark:border-white/5 ui:[&>[data-slot=section]+[data-slot=section]]:mt-2.5'
      )}
    />
  )
}

export function SidebarSection({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  let id = useId()

  return (
    <LayoutGroup id={id}>
      <div {...props} data-slot="section" className={clsx(className, 'ui:flex ui:flex-col ui:gap-0.5')} />
    </LayoutGroup>
  )
}

export function SidebarDivider({ className, ...props }: React.ComponentPropsWithoutRef<'hr'>) {
  return <hr {...props} className={clsx(className, 'ui:my-4 ui:border-t ui:border-zinc-950/5 ui:lg:-mx-4 ui:dark:border-white/5')} />
}

export function SidebarSpacer({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) {
  return <div aria-hidden="true" {...props} className={clsx(className, 'ui:mt-8 ui:flex-1')} />
}

export function SidebarHeading({ className, ...props }: React.ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3 {...props} className={clsx(className, 'ui:mb-1 ui:px-2 ui:text-xs/6 ui:font-medium ui:text-zinc-500 ui:dark:text-zinc-400')} />
  )
}

export const SidebarItem = forwardRef(function SidebarItem(
  {
    current,
    className,
    children,
    ...props
  }: { current?: boolean; className?: string; children: React.ReactNode } & (
    | ({ href?: never } & Omit<Headless.ButtonProps, 'as' | 'className'>)
    | ({ href: string } & Omit<Headless.ButtonProps<typeof Link>, 'as' | 'className'>)
  ),
  ref: React.ForwardedRef<HTMLAnchorElement | HTMLButtonElement>
) {
  let classes = clsx(
    // Base
    'ui:flex ui:w-full ui:items-center ui:gap-3 ui:rounded-lg ui:px-2 ui:py-2.5 ui:text-left ui:text-base/6 ui:font-medium ui:text-zinc-950 ui:sm:py-2 ui:sm:text-sm/5',
    // Leading icon/icon-only
    'ui:*:data-[slot=icon]:size-6 ui:*:data-[slot=icon]:shrink-0 ui:*:data-[slot=icon]:fill-zinc-500 ui:sm:*:data-[slot=icon]:size-5',
    // Trailing icon (down chevron or similar)
    'ui:*:last:data-[slot=icon]:ml-auto ui:*:last:data-[slot=icon]:size-5 ui:sm:*:last:data-[slot=icon]:size-4',
    // Avatar
    'ui:*:data-[slot=avatar]:-m-0.5 ui:*:data-[slot=avatar]:size-7 ui:sm:*:data-[slot=avatar]:size-6',
    // Hover
    'ui:data-hover:bg-zinc-950/5 ui:data-hover:*:data-[slot=icon]:fill-zinc-950',
    // Active
    'ui:data-active:bg-zinc-950/5 ui:data-active:*:data-[slot=icon]:fill-zinc-950',
    // Current
    'ui:data-current:*:data-[slot=icon]:fill-zinc-950',
    // Dark mode
    'ui:dark:text-white ui:dark:*:data-[slot=icon]:fill-zinc-400',
    'ui:dark:data-hover:bg-white/5 ui:dark:data-hover:*:data-[slot=icon]:fill-white',
    'ui:dark:data-active:bg-white/5 ui:dark:data-active:*:data-[slot=icon]:fill-white',
    'ui:dark:data-current:*:data-[slot=icon]:fill-white'
  )

  return (
    <span className={clsx(className, 'ui:relative')}>
      {current && (
        <motion.span
          layoutId="current-indicator"
          className="ui:absolute ui:inset-y-2 ui:-left-4 ui:w-0.5 ui:rounded-full ui:bg-zinc-950 ui:dark:bg-white"
        />
      )}
      {typeof props.href === 'string' ? (
        <Headless.CloseButton
          as={Link}
          {...props}
          className={classes}
          data-current={current ? 'true' : undefined}
          ref={ref}
        >
          <TouchTarget>{children}</TouchTarget>
        </Headless.CloseButton>
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

export function SidebarLabel({ className, ...props }: React.ComponentPropsWithoutRef<'span'>) {
  return <span {...props} className={clsx(className, 'ui:truncate')} />
}
