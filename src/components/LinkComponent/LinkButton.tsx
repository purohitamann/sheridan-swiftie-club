import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
type Props = {
    LinkLabel: string,
    LinkUrl: string
}
export default function LinkComponent(Props: Props) {
    return (
        <div>

            <Button asChild>
                <Link href={Props.LinkUrl}>{Props.LinkLabel}</Link>
            </Button>
        </div>
    )
}

