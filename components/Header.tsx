import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

const Header = ({ headerTitle, titleClassName}: { headerTitle?: string; titleClassName?: string}) => {
  return (
    <header className="flex items-center justify-between">
      {headerTitle ? (
        <h1 className={cn('text-18 font-bold text-white-1', titleClassName)}>{headerTitle}</h1>
      ): <div />}
      <Link href="/discover" className="text-16 font-semibold text-orange-1">
        See all
      </Link>
    </header>
  )
}

export default Header