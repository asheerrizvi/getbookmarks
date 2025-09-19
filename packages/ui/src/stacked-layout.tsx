'use client'

import * as Headless from '@headlessui/react'
import React, { useState } from 'react'
import { NavbarItem } from './navbar'

function OpenMenuIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M2 6.75C2 6.33579 2.33579 6 2.75 6H17.25C17.6642 6 18 6.33579 18 6.75C18 7.16421 17.6642 7.5 17.25 7.5H2.75C2.33579 7.5 2 7.16421 2 6.75ZM2 13.25C2 12.8358 2.33579 12.5 2.75 12.5H17.25C17.6642 12.5 18 12.8358 18 13.25C18 13.6642 17.6642 14 17.25 14H2.75C2.33579 14 2 13.6642 2 13.25Z" />
    </svg>
  )
}

function CloseMenuIcon() {
  return (
    <svg data-slot="icon" viewBox="0 0 20 20" aria-hidden="true">
      <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
    </svg>
  )
}

function MobileSidebar({ open, close, children }: React.PropsWithChildren<{ open: boolean; close: () => void }>) {
  return (
    <Headless.Dialog open={open} onClose={close} className="lg:hidden">
      <Headless.DialogBackdrop
        transition
        className="ui:fixed ui:inset-0 ui:bg-black/30 ui:transition ui:data-closed:opacity-0 ui:data-enter:duration-300 ui:data-enter:ease-out ui:data-leave:duration-200 ui:data-leave:ease-in"
      />
      <Headless.DialogPanel
        transition
        className="ui:fixed ui:inset-y-0 ui:w-full ui:max-w-80 ui:p-2 ui:transition ui:duration-300 ui:ease-in-out ui:data-closed:-translate-x-full"
      >
        <div className="ui:flex ui:h-full ui:flex-col ui:rounded-lg ui:bg-white ui:shadow-xs ui:ring-1 ui:ring-zinc-950/5 ui:dark:bg-zinc-900 ui:dark:ring-white/10">
          <div className="ui:-mb-3 ui:px-4 ui:pt-3">
            <Headless.CloseButton as={NavbarItem} aria-label="Close navigation">
              <CloseMenuIcon />
            </Headless.CloseButton>
          </div>
          {children}
        </div>
      </Headless.DialogPanel>
    </Headless.Dialog>
  )
}

export function StackedLayout({
  navbar,
  sidebar,
  children,
}: React.PropsWithChildren<{ navbar: React.ReactNode; sidebar: React.ReactNode }>) {
  let [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className="ui:relative ui:isolate ui:flex ui:min-h-svh ui:w-full ui:flex-col ui:bg-white ui:lg:bg-zinc-100 ui:dark:bg-zinc-900 ui:dark:lg:bg-zinc-950">
      {/* Sidebar on mobile */}
      <MobileSidebar open={showSidebar} close={() => setShowSidebar(false)}>
        {sidebar}
      </MobileSidebar>

      {/* Navbar */}
      <header className="ui:flex ui:items-center ui:px-4">
        <div className="ui:py-2.5 ui:lg:hidden">
          <NavbarItem onClick={() => setShowSidebar(true)} aria-label="Open navigation">
            <OpenMenuIcon />
          </NavbarItem>
        </div>
        <div className="ui:min-w-0 ui:flex-1">{navbar}</div>
      </header>

      {/* Content */}
      <main className="ui:flex ui:flex-1 ui:flex-col ui:pb-2 ui:lg:px-2">
        <div className="ui:grow ui:p-6 ui:lg:rounded-lg ui:lg:bg-white ui:lg:p-10 ui:lg:shadow-xs ui:lg:ring-1 ui:lg:ring-zinc-950/5 ui:dark:lg:bg-zinc-900 ui:dark:lg:ring-white/10">
          <div className="ui:mx-auto ui:max-w-6xl">{children}</div>
        </div>
      </main>
    </div>
  )
}
