import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { SignInButton, SignedIn, SignedOut, UserButton, SignIn } from '@clerk/nextjs';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// import { getAuth, signInWithCustomToken } from "firebase/auth";
import Submission from './Submission';


const formSchema = z.object({
    eventId: z.number(),
    eventName: z.string(),
    eventCampus: z.string(),
    defaultEmail: z.string().min(2, {
        message: "You must login to RSVP",
    }),
    studentName: z.string().min(2, {
        message: "Please enter your full name, e.g., Taylor Alison Swift",
    }),
    studentEmail: z.string().email({
        message: "Please enter a valid email address",
    }),
    studentId: z.string().min(7, {
        message: "Please enter your student ID, e.g., 99XXXX96",
    }),
    message: z.string().optional(),
    termsAccepted: z.boolean().refine(val => val, {
        message: "You must accept the terms and conditions",
    }),
    date: z.date(),
});

type Props = {
    formTitle: string;
    formDescription: string;
    currentEventId: number;
    currentEventCampus?: string;
    className?: string;
};

export default function RSVPForm(formProps: Props) {
    const { isLoaded, isSignedIn, user } = useUser();
    const { formTitle, formDescription, currentEventId, currentEventCampus = 'Trafalgar Campus' } = formProps;
    const [modal, setModal] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            eventId: currentEventId,
            eventName: formTitle,
            eventCampus: currentEventCampus,
            defaultEmail: user?.primaryEmailAddress?.emailAddress || 'student@gmail.com',
            studentName: user?.fullName || '',
            studentEmail: '',
            studentId: "",
            message: '',
            termsAccepted: false,
            date: new Date(),
        },
    });

    if (!isLoaded) {
        return <p className="text-3xl text-white">Loading...</p>;
    }

    if (!isSignedIn) {
        return (
            <div className='flex flex-col justify-center items-center bg-slate-50 m-10'>
                <SignIn />
            </div>
        );
    }
    // async function authenticateWithFirebase() {
    //     const { user } = useUser(); // Clerk user object
    //     try {
    //         const firebaseToken = await user.getToken(); // Get token from Clerk
    //         const auth = getAuth();
    //         await signInWithCustomToken(auth, firebaseToken); // Sign in to Firebase with token
    //         console.log("Authenticated with Firebase!");
    //     } catch (error) {
    //         console.error("Error authenticating with Firebase:", error);
    //     }
    // }
    async function onSubmit(values: z.infer<typeof formSchema>) {

        try {
            // Add form data to Firestore

            await addDoc(collection(db, "paint-night-rsvps"), values);
            console.log("Form submitted successfully:", values);
            alert("RSVP submitted successfully!");
            setModal(true);
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit RSVP. Please try again.");
        }
        console.log("Form submitted:", values);
        // return (
        //     // <Submission />
        // )
    }

    return (
        <div className={`flex flex-col justify-center align-center items-center p-20 font-mono ${formProps.className}`}>
            <div>Hello, <strong> {user.firstName} {user.lastName}!</strong></div>
            <h1 className='italic'>{user.primaryEmailAddress?.emailAddress}</h1>
            <div className='flex flex-row align-middle justify-between text-center'>
                <p className='font-bold text-xs underline p-2 '>Is this your primary email address?</p>

                <div>


                    <SignedOut><SignInButton /></SignedOut>
                    <SignedIn><UserButton /></SignedIn>
                </div>
            </div>
            <h1>{formTitle}</h1>
            <p>{formDescription}</p>
            <h2>{currentEventId}</h2>

            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="defaultEmail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Default Email</FormLabel>
                                <FormControl>
                                    <Input {...field} value={user?.primaryEmailAddress?.emailAddress ? user?.primaryEmailAddress?.emailAddress.trim() : 'student@gmail.com'} />
                                </FormControl>
                                <FormDescription>
                                    This is your default email address.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="studentEmail"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Student Email</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Your student email"
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your Sheridan College credential.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="studentName"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Student Name</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Taylor Alison Swift"
                                    />
                                </FormControl>
                                <FormDescription>
                                    Please enter your full name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="studentId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Student ID</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="99XXXX96"
                                        type="number"
                                    />
                                </FormControl>
                                <FormDescription>
                                    Please enter your student ID.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Comments</FormLabel>
                                <FormControl>
                                    <Input
                                        {...field}
                                        placeholder="Anything else we should know?"
                                    />
                                </FormControl>
                                <FormDescription>
                                    You can leave any additional comments here.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="termsAccepted"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Terms and Conditions  </FormLabel>
                                <FormControl>

                                    <Checkbox

                                        checked={field.value}
                                        onCheckedChange={field.onChange}

                                    />
                                </FormControl>
                                <FormDescription>
                                    Do you consent to being photographed at the event?
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField control={form.control} name="date" render={() => <div></div>} />
                    <Button type="submit" className='w-full'>Submit</Button>
                    <Submission eventName={formProps.formTitle} open={modal} />
                </form>
            </Form>
        </div>
    );
}
