import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
type Props = {
    LinkLabel: string,
    LinkUrl: string
}
export default function LinkComponent(Props: Props) {
    return (
        <div className=' hover:bg-destructive-foreground hover:text-accent-foreground'>


            <Link prefetch={false} href={Props.LinkUrl}>{Props.LinkLabel}</Link>

        </div>
    )
}

