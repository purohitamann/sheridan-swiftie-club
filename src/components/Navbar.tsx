import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="flex flex-col space-y-1 space-x-2 sm:flex-row align-center text-center justify-center items-center p-10 w-full h-full ">
            <Link href="/" prefetch={false} className="hover:text-bordered hover:font-bold text-base">Home</Link>
            <Link href="/evermorefund" prefetch={false} className="hover:text-bordered hover:font-bold text-base">Donate</Link>
            <Link href="https://forms.gle/Fc63swf8ZpRHEG9r9" prefetch={false} className="hover:text-bordered hover:font-bold text-base">Join The Team</Link>
            <Link href="https://sheridancollege.campuslabs.ca/engage/organization/sheridanswiftieclub/events" prefetch={false} className="hover:text-bordered hover:font-bold text-base">Events</Link>
            <Link href="/sign-in" className="hover:text-bordered hover:font-bold text-base">Sign-in</Link>
            {/* <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn> */}
        </div>
    );
}


