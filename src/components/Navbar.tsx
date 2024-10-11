import React from 'react'
import Link from 'next/link'
export default function Navbar() {
    return (
        <div className="flex justify-center items-center space-x-6  py-6">
            <Link href="/" prefetch={false} className="hover:text-muted-foreground hover:font-bold text-base">Home</Link>
            <Link href="/evermorefund" prefetch={false} className="hover:text-muted-foreground hover:font-bold text-base">Donate</Link>
            <Link href="https://forms.gle/Fc63swf8ZpRHEG9r9" prefetch={false} className="hover:text-muted-foreground hover:font-bold text-base">Join The Team</Link>
            <Link href="https://sheridancollege.campuslabs.ca/engage/organization/sheridanswiftieclub/events" prefetch={false} className="hover:text-muted-foreground hover:font-bold text-base">Events</Link>
        </div>
    )
}


