import React from 'react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
// import {
//     Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
// } from "@/components/ui/tooltip"
export default function Navbar() {
    return (
        <div className="flex flex-col  space-x-2 sm:flex-row align-center text-center justify-center items-center p-10 w-full h-full ">
            <Link href="/" prefetch={false} className="hover:text-bordered hover:font-bold text-base p-1">Home</Link>
            <Link href="/evermorefund" prefetch={false} className="hover:text-bordered hover:font-bold text-base p-1">Donate</Link>
            <Link href="https://forms.gle/Fc63swf8ZpRHEG9r9" prefetch={false} className="hover:text-bordered hover:font-bold text-base p-1">Join The Team</Link>
            <Link href="https://sheridancollege.campuslabs.ca/engage/organization/sheridanswiftieclub/events" prefetch={false} className="hover:text-bordered hover:font-bold text-base p-1">Events</Link>


            {/* href="/sign-in" */}
            <Button variant="link" className="disabled hover:text-bordered hover:font-bold text-base p1">Newsletter</Button>

            {/* <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>Hover</TooltipTrigger>
                    <TooltipContent>
                        <p>Add to library</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider> */}

            {/* <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline" className="disable hover:text-bordered hover:font-bold text-base p1">Open</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Edit profile</SheetTitle>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" value="Pedro Duarte" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input id="username" value="@peduarte" className="col-span-3" />
                        </div>
                    </div>
                    <SheetFooter>
                        <SheetClose asChild>
                            <Button type="submit">Save changes</Button>
                        </SheetClose>
                    </SheetFooter>
                </SheetContent>
            </Sheet>

 */}

            {/* <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn> */}
        </div >
    );
}


