import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Submission from './Submission';

const formSchema = z.object({
    eventId: z.number(),
    eventName: z.string(),
    eventCampus: z.string(),
    studentName: z.string().min(2, {
        message: 'Please enter your full name, e.g., Taylor Alison Swift',
    }),
    studentEmail: z.string().email({
        message: 'Please enter a valid email address',
    }),
    studentId: z.string().min(7, {
        message: 'Please enter your student ID, e.g., 99XXXX96',
    }),
    message: z.string().optional(),
    termsAccepted: z.boolean().refine(val => val, {
        message: 'You must accept the terms and conditions',
    }),
    date: z.date(),
    registrationId: z.string().min(2, {
        message: 'Please enter your registration ID',
    }),
});

type Props = {
    formTitle: string;
    formDescription: string;
    currentEventId: number;
    currentEventCampus?: string;
    className?: string;
};

type User = {
    emailAddress: string;
    fullName: string;
    studentId: string;
    registrationId: string;
};

export default function RSVPForm(formProps: Props) {
    const [fullName, setFullName] = useState('');
    const [studentEmail, setStudentEmail] = useState('');
    const [registrationId, setRegistrationId] = useState<string>('');
    const [studentId, setStudentId] = useState('');

    const user: User = {
        emailAddress: studentEmail,
        fullName: fullName,
        studentId: studentId,
        registrationId: registrationId,
    };

    const { formTitle, formDescription, currentEventId, currentEventCampus = 'Trafalgar Campus' } = formProps;
    const [modal, setModal] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            eventId: currentEventId,
            eventName: formTitle,
            eventCampus: currentEventCampus,
            studentName: '',
            studentEmail: '',
            studentId: '',
            message: '',
            termsAccepted: false,
            date: new Date(),
            registrationId: '',
        },
    });

    useEffect(() => {
        if (studentId) {
            const generatedId = generateRegistrationId(new Date(), studentId);
            setRegistrationId(generatedId);
            form.setValue('registrationId', generatedId);
        }
    }, [studentId]);// eslint-disable-line 

    function generateRegistrationId(date: Date, studentId: string) {
        const id = Math.random().toString(36).substring(2, 10).toUpperCase();
        return `${id}${date.getUTCDate()}${studentId}`;
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            // Ensure registrationId is set before submission
            if (!values.registrationId) {
                const generatedId = generateRegistrationId(new Date(), values.studentId);
                setRegistrationId(generatedId);
                values.registrationId = generatedId;
            }

            // Save the registration to Firestore
            await addDoc(collection(firestore, 'paint-night-rsvps'), values);

            setModal(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit RSVP. Please try again.');
        }
    }

    return (
        <div className={`flex flex-col justify-center align-center items-center p-20 font-mono ${formProps.className}`}>
            <div><p className="text-lg text-[#0060FF]">Hello, <strong>{user.fullName || 'there'}!</strong></p></div>
            <div className="flex flex-row align-middle justify-between text-center">
                <div>
                    <Button onClick={() => { window.location.href = '/sign-in'; }} className="hover:text-bordered hover:font-bold text-base">Join our Newsletter</Button>
                </div>
            </div>
            <h1>{formTitle}</h1>
            <p>{formDescription}</p>
            <h2>{currentEventId}</h2>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                                        onChange={(e) => {
                                            setStudentEmail(e.target.value);
                                            form.setValue('studentEmail', e.target.value);
                                        }}
                                    />
                                </FormControl>
                                <FormDescription>This is your Sheridan College credential.</FormDescription>
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
                                        onChange={(e) => {
                                            setFullName(e.target.value);
                                            form.setValue('studentName', e.target.value);
                                        }}
                                    />
                                </FormControl>
                                <FormDescription>Please enter your full name.</FormDescription>
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
                                        onChange={(e) => {
                                            setStudentId(e.target.value);
                                            form.setValue('studentId', e.target.value);
                                        }}
                                    />
                                </FormControl>
                                <FormDescription>Please enter your student ID.</FormDescription>
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
                                    <Input {...field} placeholder="Anything else we should know?" />
                                </FormControl>
                                <FormDescription>You can leave any additional comments here.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="termsAccepted"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Terms and Conditions</FormLabel>
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormDescription>Do you consent to being photographed at the event?</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField control={form.control} name="date" render={() => <div></div>} />
                    <FormField control={form.control} name="registrationId" render={() => <div>{registrationId}</div>} />
                    <Button type="submit" className="w-full">Submit</Button>
                    <Submission eventName={formProps.formTitle} open={modal} user={user} />
                </form>
            </Form>
        </div>
    );
}
