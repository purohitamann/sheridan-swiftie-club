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
    open: boolean;
    user: User;
    position: string;
};

type User = {
    emailAddress: string;
    fullName: string;
};

export default function Submission({ open, user, position }: SubmissionProps) {
    return (
        <div>
            <AlertDialog open={open}>
                <AlertDialogContent className='bg-[#F1EBDB] text-center rounded text-[#0060FF]'>
                    <AlertDialogHeader>
                        <AlertDialogTitle className={`${kaushan.className}`}>Thank You for Joining the Team!</AlertDialogTitle>
                        <AlertDialogDescription className={`text-center text-pink-400 ${cinzel.className}`}>
                            <br />
                            <div className='text-center text-[#0060FF]'>
                                <p className='lowercase'><strong className='font-mono'>{user.fullName}</strong>, your application for the <strong>{position}</strong> position has been received.</p>
                                <p><i className='font-mono'> Email:</i> {user.emailAddress}</p>
                            </div>
                            <br />
                            <p>We appreciate your interest in joining the Sheridan Swiftie Club Executive Team!<br />
                                Please keep an eye on your email for updates regarding the next steps.<br />
                                Stay Swiftie!</p>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter className={`${kaushan.className}`}>
                        <AlertDialogCancel onClick={() => window.location.reload()}>
                            Submit Another Application
                        </AlertDialogCancel>
                        <AlertDialogAction onClick={() => window.location.href = '/team'}>
                            Close
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}
