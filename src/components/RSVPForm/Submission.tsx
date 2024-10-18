import React from 'react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Kaushan_Script, Cinzel } from 'next/font/google';

const kaushan = Kaushan_Script({ subsets: ['latin'], weight: '400' });
const cinzel = Cinzel({ subsets: ['latin'], weight: '400' });

type SubmissionProps = {
    eventName: string;
    open: boolean;
    user: User;
};

type User = {
    emailAddress: string;
    fullName: string;
    registrationId: string;
    studentId: string;
};

export default function Submission({ eventName, open, user }: SubmissionProps) {
    return (
        <div>
            <AlertDialog open={open}>
                <AlertDialogContent className='bg-[#F1EBDB] text-center rounded text-[#0060FF]'>
                    <AlertDialogHeader>
                        <AlertDialogTitle className={`${kaushan.className}`}>Welcome to our secret garden!!!</AlertDialogTitle>
                        <AlertDialogDescription className={`text-center text-pink-400 ${cinzel.className}`}>
                            <br />
                            <div className='text-center text-[#0060FF]'>
                                <p className='lowercase'><strong className='font-mono'>{user.fullName}</strong>, We&apos;ve received your RSVP</p>

                                <p><i className='font-mono'> Email:</i> {user.emailAddress}</p>

                                <p><i className='font-mono'> Registration ID:</i> {user.registrationId}</p>
                            </div>
                            <br />
                            <p>We can&apos;t wait to see you at {eventName}!<br />
                                Please check your inbox in the coming days for more details.<br />
                                Shimmerrrr!!!
                            </p>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className={`${kaushan.className}`}>
                        <AlertDialogCancel onClick={() => window.location.reload()}>
                            Register for Someone else!
                        </AlertDialogCancel>
                        <AlertDialogAction onClick={() => window.location.href = '/swiftville'} className='bg-[#0060FF] text-white'>
                            Close
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
