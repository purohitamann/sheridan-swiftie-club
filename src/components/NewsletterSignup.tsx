'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { addDoc, collection } from "firebase/firestore";
import { firestore } from "@/lib/firebase";  // Your Firebase setup
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';

// Form schema using Zod for validation
const formSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email address',
    }),
    date: z.date(),
});

export default function NewsLetterSignup() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    // Setup for react-hook-form using Zod resolver for validation
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            date: new Date(),
        },
    });

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        setStatus('loading');

        try {
            console.log(values);
            // Firebase Firestore operation to add the email to the "newsletters" collection
            await addDoc(collection(firestore, 'newsletters'), values);
            setStatus('success');
            setMessage('Thank you for subscribing to our newsletter!');
            form.reset(); // Reset the form after successful submission
        } catch (error) {
            console.error('Error creating user:', error);
            setStatus('error');
            setMessage(error instanceof Error ? error.message : 'An error occurred. Please try again.');
        }
    };

    return (
        <Card className="w-full max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Subscribe to Our Newsletter</CardTitle>
                <CardDescription>Stay updated with our latest news and events.</CardDescription>
            </CardHeader>
            <CardContent>
                {/* Form using react-hook-form */}
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)}>
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="email"
                                            placeholder="Your email"
                                            {...field}
                                            required
                                        />
                                    </FormControl>
                                    <FormDescription>We&apos;ll never share your email.</FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* <Button
                            type="submit"
                            // disabled={status === 'loading'}
                            className="w-full mt-4"
                        >
                            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                        </Button> */}
                        <Button type="submit" className="w-full">Subscribe</Button>
                        <FormField control={form.control} name="date" render={() => <div></div>} />
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-4">
                {status === 'success' && (
                    <div className="flex items-center text-green-600" aria-live="polite">
                        <CheckCircle2 className="mr-2 h-4 w-4" />
                        <span>{message}</span>
                    </div>
                )}
                {status === 'error' && (
                    <div className="flex items-center text-red-600" aria-live="polite">
                        <AlertCircle className="mr-2 h-4 w-4" />
                        <span>{message}</span>
                    </div>
                )}
            </CardFooter>
        </Card>
    );
}
