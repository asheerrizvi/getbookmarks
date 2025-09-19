import clsx from 'clsx'
import { Link } from './link'

export function Text({ className, ...props }: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      data-slot="text"
      {...props}
      className={clsx(className, 'ui:text-base/6 ui:text-zinc-500 ui:sm:text-sm/6 ui:dark:text-zinc-400')}
    />
  )
}

export function TextLink({ className, ...props }: React.ComponentPropsWithoutRef<typeof Link>) {
  return (
    <Link
      {...props}
      className={clsx(
        className,
        'ui:text-zinc-950 ui:underline ui:decoration-zinc-950/50 ui:data-hover:decoration-zinc-950 ui:dark:text-white ui:dark:decoration-white/50 ui:dark:data-hover:decoration-white'
      )}
    />
  )
}

export function Strong({ className, ...props }: React.ComponentPropsWithoutRef<'strong'>) {
  return <strong {...props} className={clsx(className, 'ui:font-medium ui:text-zinc-950 ui:dark:text-white')} />
}

export function Code({ className, ...props }: React.ComponentPropsWithoutRef<'code'>) {
  return (
    <code
      {...props}
      className={clsx(
        className,
        'ui:rounded-sm ui:border ui:border-zinc-950/10 ui:bg-zinc-950/2.5 ui:px-0.5 ui:text-sm ui:font-medium ui:text-zinc-950 ui:sm:text-[0.8125rem] ui:dark:border-white/20 ui:dark:bg-white/5 ui:dark:text-white'
      )}
    />
  )
}
