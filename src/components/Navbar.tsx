import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetClose, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Cinzel } from 'next/font/google';
const cinzel = Cinzel({ subsets: ['latin'], weight: '400' });

import NewsletterSignup from './NewsletterSignup';
export default function Navbar() {


    return (
        <div className={`${cinzel.className} flex flex-col  space-x-2 sm:flex-row align-center text-center justify-center items-center p-10 w-full h-full `}>
            <Link href="/" prefetch={false} className="hover:text-bordered hover:font-bold text-base p-1">Home</Link>
            <Link href="/evermorefund" prefetch={false} className="hover:text-bordered hover:font-bold text-base p-1">Donate</Link>
            <Link href="https://forms.gle/Fc63swf8ZpRHEG9r9" prefetch={false} className="hover:text-bordered hover:font-bold text-base p-1">Join The Team</Link>
            <Link href="https://sheridancollege.campuslabs.ca/engage/organization/sheridanswiftieclub/events" prefetch={false} className="hover:text-bordered hover:font-bold text-base p-1">Events</Link>


            {/* <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>Hover</TooltipTrigger>
                    <TooltipContent>
                        <p>Add to library</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider> */}

            <Sheet  >
                <SheetTrigger asChild>
                    <Button variant="link" className="disable hover:text-bordered hover:font-bold text-base text-inherit">Newsletter</Button>
                </SheetTrigger>
                <SheetContent className={`${cinzel.className} bg-[#E4E2DD] `}>
                    <SheetHeader>
                        <SheetTitle>Signup for our newsletter</SheetTitle>
                        <SheetDescription>
                            <p>Subscribe to our newsletter to stay up to date with what we&apos;re doing</p> <br />
                        </SheetDescription>
                    </SheetHeader >
                    <div className="lowercase">
                        <NewsletterSignup />
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit" className="w-full mt-5" variant="outline">Close</Button>

                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>



            {/* <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn> */}
        </div >
    );
}


