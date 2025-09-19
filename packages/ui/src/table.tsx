'use client'

import clsx from 'clsx'
import type React from 'react'
import { createContext, useContext, useState } from 'react'
import { Link } from './link'

const TableContext = createContext<{ bleed: boolean; dense: boolean; grid: boolean; striped: boolean }>({
  bleed: false,
  dense: false,
  grid: false,
  striped: false,
})

export function Table({
  bleed = false,
  dense = false,
  grid = false,
  striped = false,
  className,
  children,
  ...props
}: { bleed?: boolean; dense?: boolean; grid?: boolean; striped?: boolean } & React.ComponentPropsWithoutRef<'div'>) {
  return (
    <TableContext.Provider value={{ bleed, dense, grid, striped } as React.ContextType<typeof TableContext>}>
      <div className="ui:flow-root">
        <div {...props} className={clsx(className, 'ui:-mx-(--gutter) ui:overflow-x-auto ui:whitespace-nowrap')}>
          <div className={clsx('ui:inline-block ui:min-w-full ui:align-middle', !bleed && 'ui:sm:px-(--gutter)')}>
            <table className="ui:min-w-full ui:text-left ui:text-sm/6 ui:text-zinc-950 ui:dark:text-white">{children}</table>
          </div>
        </div>
      </div>
    </TableContext.Provider>
  )
}

export function TableHead({ className, ...props }: React.ComponentPropsWithoutRef<'thead'>) {
  return <thead {...props} className={clsx(className, 'ui:text-zinc-500 ui:dark:text-zinc-400')} />
}

export function TableBody(props: React.ComponentPropsWithoutRef<'tbody'>) {
  return <tbody {...props} />
}

const TableRowContext = createContext<{ href?: string; target?: string; title?: string }>({
  href: undefined,
  target: undefined,
  title: undefined,
})

export function TableRow({
  href,
  target,
  title,
  className,
  ...props
}: { href?: string; target?: string; title?: string } & React.ComponentPropsWithoutRef<'tr'>) {
  let { striped } = useContext(TableContext)

  return (
    <TableRowContext.Provider value={{ href, target, title } as React.ContextType<typeof TableRowContext>}>
      <tr
        {...props}
        className={clsx(
          className,
          href &&
            'ui:has-[[data-row-link][data-focus]]:outline-2 ui:has-[[data-row-link][data-focus]]:-outline-offset-2 ui:has-[[data-row-link][data-focus]]:outline-blue-500 ui:dark:focus-within:bg-white/2.5',
          striped && 'ui:even:bg-zinc-950/2.5 ui:dark:even:bg-white/2.5',
          href && striped && 'ui:hover:bg-zinc-950/5 ui:dark:hover:bg-white/5',
          href && !striped && 'ui:hover:bg-zinc-950/2.5 ui:dark:hover:bg-white/2.5'
        )}
      />
    </TableRowContext.Provider>
  )
}

export function TableHeader({ className, ...props }: React.ComponentPropsWithoutRef<'th'>) {
  let { bleed, grid } = useContext(TableContext)

  return (
    <th
      {...props}
      className={clsx(
        className,
        'ui:border-b ui:border-b-zinc-950/10 ui:px-4 ui:py-2 ui:font-medium ui:first:pl-(--gutter,--spacing(2)) ui:last:pr-(--gutter,--spacing(2)) ui:dark:border-b-white/10',
        grid && 'ui:border-l ui:border-l-zinc-950/5 ui:first:border-l-0 ui:dark:border-l-white/5',
        !bleed && 'ui:sm:first:pl-1 ui:sm:last:pr-1'
      )}
    />
  )
}

export function TableCell({ className, children, ...props }: React.ComponentPropsWithoutRef<'td'>) {
  let { bleed, dense, grid, striped } = useContext(TableContext)
  let { href, target, title } = useContext(TableRowContext)
  let [cellRef, setCellRef] = useState<HTMLElement | null>(null)

  return (
    <td
      ref={href ? setCellRef : undefined}
      {...props}
      className={clsx(
        className,
        'ui:relative ui:px-4 ui:first:pl-(--gutter,--spacing(2)) ui:last:pr-(--gutter,--spacing(2))',
        !striped && 'ui:border-b ui:border-zinc-950/5 ui:dark:border-white/5',
        grid && 'ui:border-l ui:border-l-zinc-950/5 ui:first:border-l-0 ui:dark:border-l-white/5',
        dense ? 'ui:py-2.5' : 'ui:py-4',
        !bleed && 'ui:sm:first:pl-1 ui:sm:last:pr-1'
      )}
    >
      {href && (
        <Link
          data-row-link
          href={href}
          target={target}
          aria-label={title}
          tabIndex={cellRef?.previousElementSibling === null ? 0 : -1}
          className="ui:absolute ui:inset-0 ui:focus:outline-hidden"
        />
      )}
      {children}
    </td>
  )
}
