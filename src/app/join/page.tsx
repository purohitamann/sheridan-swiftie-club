'use client';
/* eslint-disable */
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Submission from './submission'; // Import Submission component
import { z } from 'zod';
import { addDoc, collection } from 'firebase/firestore';
import { firestore, storage } from '@/lib/firebase';

// Define the type for submissionData
interface SubmissionData {
    fullName: string;
    emailAddress: string;
    position: string;
}

// Define Zod schema for validation
const formSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email format'),
    phone: z.string().min(10, 'Phone number must be at least 10 characters'),
    linkedin: z.string().url('Invalid LinkedIn URL').optional(),
    reason: z.string().min(10, 'Reason must be at least 10 characters'),
    position: z.string().min(1, 'Position is required'),
});

export default function Page() {

    const [selectedPosition, setSelectedPosition] = useState('');
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submissionData, setSubmissionData] = useState<SubmissionData | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.target as HTMLFormElement;
        const formData = new FormData(form);

        // Add selectedPosition to formData
        formData.append('position', selectedPosition);

        // Extract form data into a regular object
        const data = Object.fromEntries(formData);

        // Zod validation
        const result = formSchema.safeParse(data);
        if (!result.success) {
            // Handle validation errors
            const errorMap = result.error.flatten().fieldErrors;
            const formattedErrors = Object.keys(errorMap).reduce((acc, key) => {
                if ((errorMap as Record<string, string[]>)[key]) {
                    acc[key] = (errorMap as Record<string, string[]>)[key][0];
                }
                return acc;
            }, {} as Record<string, string>);
            setErrors(formattedErrors);
            return;
        }

        // Handle file upload if present
        const fileInput = form.elements.namedItem('resume') as HTMLInputElement;
        let resumeURL = '';
        if (fileInput?.files && fileInput.files[0]) {
            const file = fileInput.files[0];
            const storageRef = ref(storage, `resumes/${file.name}`);
            try {
                await uploadBytes(storageRef, file);
                resumeURL = await getDownloadURL(storageRef);
            } catch (error) {
                console.error('Error uploading file:', error);
                alert('Failed to upload resume. Please try again.');
                return;
            }
        }

        // Add resume URL to the submission data
        const submissionPayload = { ...data, resume: resumeURL };

        // Save form data to Firestore
        try {
            await addDoc(collection(firestore, 'submissions'), submissionPayload);
            setSubmissionData({ fullName: data.name as string, emailAddress: data.email as string, position: selectedPosition });
            setDialogOpen(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Failed to submit. Please try again.');
        }

        setErrors({});
    }

    return (
        <div className='w-full flex flex-col justify-center items-center bg-[#1e1e1e] relative text-[#E4E2DD]'>
            <div className='w-full h-full flex flex-col justify-center items-center '>
                <div className="flex flex-col w-full pb-20 justify-center text-[#E4E2DD] items-center text-sm sm:text-lg rounded-md text-center">
                    <div className="w-full pt-20 sm:pt-40">
                        <Navbar />
                    </div>
                    <p className="text-center px-4">Join the Sheridan Swiftie Club Executive Team</p>
                    <p className="text-center px-4">Fill out the form below to apply for a position on the executive team.</p>
                    <div className="w-full max-w-lg px-4">
                        <p>We&apos;re currently looking for:</p>
                        <br />
                        <div className="flex justify-center items-start text-left space-y-4 lowercase italic">
                            <ol className="list-decimal space-y-5 list-inside">
                                <li className='flex flex-col border-x-4 border-blue-500  bg-[#cac9c7] text-[#1e1e1e] p-8 rounded'><p className='font-bold uppercase'>Social Media Coordinator (1)</p>
                                    <p className='font-bold'>Description: </p>
                                    <p className='font-thin normal text-sm'>Creating and managing social media content for the club, including posts on social media platforms such as Instagram. Mandatory attendance for all events.</p>
                                </li>
                                <li className='flex flex-col  border-x-4 border-pink-500 bg-[#cac9c7] text-[#1e1e1e] p-8 rounded'>
                                    <p className='font-bold uppercase'>Events Coordinator (1)</p>
                                    <p className='font-bold'>Description: </p>
                                    <p className='font-thin normal text-sm'>Planning and executing events for the club, including hosting meetups, pop-ups and social gatherings. Mandatory attendance for all events.</p>
                                </li>
                                <li className='flex flex-col  border-x-4 border-blue-500 bg-[#cac9c7] text-[#1e1e1e] p-8 rounded'>
                                    <p className='font-bold uppercase'>Site Contributor - Full Stack (3)</p>
                                    <p className='font-bold'>Description: </p>
                                    <p className='font-thin normal text-sm'>work with other site contributors to design and implement new features for the website. basic React, Firebase and Tailwind knowledge is required.</p>
                                </li>
                                <li className='flex flex-col  border-x-4 border-pink-500 bg-[#cac9c7] text-[#1e1e1e] p-8 rounded'>
                                    <p className='font-bold uppercase'>Site Contributor - UI/UX (1)</p>
                                    <p className='font-bold'>Description: </p>
                                    <p className='font-thin normal text-sm'>Work with other site contributors to design and implement new features for the website.</p>
                                </li>
                                <li className='flex flex-col  border-x-4 border-blue-500 bg-[#cac9c7] text-[#1e1e1e] p-8 rounded'>
                                    <p className='font-bold uppercase'>Site Contributor - Creative Writing (1)</p>
                                    <p className='font-bold'>Description: </p>
                                    <p className='font-thin normal text-sm'>Planning content for the website, including blog posts, social media posts, and other content. Work with Social Media Coordinator to create content.</p>
                                </li>
                            </ol>
                        </div>
                        <div className="space-y-4 mt-4">
                            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                                <div>
                                    <Input
                                        placeholder="Name"
                                        name="name"
                                        required
                                        className="w-full placeholder:text-[#E4E2DD] focus:ring focus:ring-blue-500 sm:w-[90%] lg:w-full"
                                    />
                                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                </div>
                                <div>
                                    <Input
                                        placeholder="Email"
                                        type="email"
                                        name="email"
                                        required
                                        className="w-full placeholder:text-[#E4E2DD] focus:ring focus:ring-blue-500 sm:w-[90%] lg:w-full"
                                    />
                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>
                                <div>
                                    <Input
                                        placeholder="Phone"
                                        type="tel"
                                        name="phone"
                                        required
                                        className="w-full placeholder:text-[#E4E2DD] focus:ring focus:ring-blue-500 sm:w-[90%] lg:w-full"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                                </div>
                                <div>
                                    <Input
                                        placeholder="LinkedIn"
                                        name="linkedin"
                                        className="w-full placeholder:text-[#E4E2DD] focus:ring focus:ring-blue-500 sm:w-[90%] lg:w-full"
                                    />
                                    {errors.linkedin && <p className="text-red-500 text-sm">{errors.linkedin}</p>}
                                </div>
                                <div>
                                    <Select onValueChange={setSelectedPosition}>
                                        <SelectTrigger className="w-full sm:w-[90%] lg:w-full">
                                            <SelectValue placeholder="Position" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="social-media-coordinator">Social Media Coordinator</SelectItem>
                                            <SelectItem value="events-coordinator">Events Coordinator</SelectItem>
                                            <SelectItem value="site-contributor-full-stack">Site Contributor - Full Stack</SelectItem>
                                            <SelectItem value="site-contributor-ui-ux">Site Contributor - UI/UX</SelectItem>
                                            <SelectItem value="site-contributor-creative-writing">Site Contributor - Creative Writing</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {errors.position && <p className="text-red-500 text-sm">{errors.position}</p>}
                                </div>
                                <div>
                                    <Textarea
                                        placeholder="Why do you want to join the Sheridan Swiftie Club Executive Team?"
                                        name="reason"
                                        required
                                        className="w-full placeholder:text-[#E4E2DD] focus:ring focus:ring-blue-500 sm:w-[90%] lg:w-full"
                                    />
                                    {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
                                </div>
                                <div>
                                    <div className="grid placeholder:text-[#E4E2DD] w-full max-w-sm items-center gap-1.5 sm:w-[90%] lg:w-full">
                                        <Label htmlFor="picture">Resume</Label>
                                        <Input id="picture" type="file" name="resume" className="w-full text-[#E4E2DD] placeholder:text-[#E4E2DD] sm:w-[90%] lg:w-full" />
                                    </div>
                                </div>
                                <Button variant="default" type="submit" className=" bg-blue-700 text-white font-bold py-2 px-4 border border-x-pink-400 rounded">
                                    Submit
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
                {submissionData && (
                    <Submission
                        open={dialogOpen}
                        user={{ fullName: submissionData.fullName, emailAddress: submissionData.emailAddress }}
                        position={submissionData.position}
                    />
                )}
            </div>
            <div className='pt-20'>
                <Footer />
            </div>
        </div>
    );
}
