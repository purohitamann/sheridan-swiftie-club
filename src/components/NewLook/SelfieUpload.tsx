'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { submitGiveawayEntry } from '@/lib/firebase';

interface SelfieUploadFormData {
  name: string;
  email: string;
  selfie: FileList;
}

const SelfieUpload: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const form = useForm<SelfieUploadFormData>();

  const onSubmit = async (data: SelfieUploadFormData) => {
    if (!selectedFile) {
      setError('Please select a selfie to upload');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await submitGiveawayEntry(data.name, data.email, selectedFile);
      setIsSubmitted(true);
      console.log('Giveaway entry submitted successfully');
    } catch (error) {
      console.error('Error submitting giveaway entry:', error);
      setError('Failed to submit your entry. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto bg-black border-orange-500 border-2">
        <CardContent className="pt-6 text-center">
          <div className="text-orange-500 text-2xl mb-4"></div>
          <h3 className="text-orange-500 font-bold text-lg mb-2">You're in the raffle!</h3>
          <p className="text-orange-300 text-sm">
            Thanks for uploading your selfie. Good luck winning those movie tickets!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md  mx-auto bg-black border-orange-500 border-2 shadow-lg shadow-orange-500/20">
      <CardHeader className="text-center pb-4 ">
        <CardTitle className="text-orange-500 font-bold text-xl mb-2">
        Movie Ticket Giveaway
        </CardTitle>
        <CardDescription className="text-orange-300">
          Upload your selfie for a chance to win 2x movie tickets! 
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="mb-4 p-3 bg-red-900 border border-red-500 text-red-200 rounded">
            {error}
          </div>
        )}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              rules={{ required: 'Name is required' }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-orange-500 font-medium">Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-black border-orange-500 text-orange-100 placeholder:text-orange-300 focus:border-orange-400 focus:ring-orange-400"
                      placeholder="Enter your name"
                    />
                  </FormControl>
                  <FormMessage className="text-orange-400" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              rules={{ 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-orange-500 font-medium">Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="email"
                      className="bg-black border-orange-500 text-orange-100 placeholder:text-orange-300 focus:border-orange-400 focus:ring-orange-400"
                      placeholder="Enter your email"
                    />
                  </FormControl>
                  <FormMessage className="text-orange-400" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="selfie"
              rules={{ required: 'Please upload a selfie' }}
              render={({ field: { onChange, ...field } }) => (
                <FormItem>
                  <FormLabel className="text-orange-500 font-medium">Upload Your Selfie</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        type="file"
                        accept="image/*"
                        name={field.name}
                        ref={field.ref}
                        onBlur={field.onBlur}
                        disabled={field.disabled}
                        onChange={(e) => {
                          onChange(e.target.files);
                          handleFileChange(e);
                        }}
                        className="bg-black border-orange-500 text-orange-100 file:bg-orange-500 file:text-black file:border-0 file:rounded file:px-3 file:py-1 file:mr-3 hover:file:bg-orange-400 cursor-pointer"
                      />
                      {selectedFile && (
                        <p className="text-orange-300 text-xs mt-1">
                          Selected: {selectedFile.name}
                        </p>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage className="text-orange-400" />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-2 px-4 rounded transition-colors duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"></div>
                  Uploading...
                </>
              ) : (
                'Enter Giveaway'
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default SelfieUpload;