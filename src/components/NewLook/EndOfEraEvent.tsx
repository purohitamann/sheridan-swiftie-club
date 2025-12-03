'use client';
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { submitRSVPEndOfEra } from '@/lib/firebase';

interface RSVPFormData {
  studentId: string;
  studentEmail: string;
  eventDescription: string;
}

interface EndOfEraEventProps {
  showRSVP?: boolean;
}

const EndOfEraEvent: React.FC<EndOfEraEventProps> = ({ showRSVP = true }) => {
  const [isRSVPSubmitted, setIsRSVPSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<RSVPFormData>();

  const onSubmit = async (data: RSVPFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      await submitRSVPEndOfEra(data.studentId, data.studentEmail, data.eventDescription);
      setIsRSVPSubmitted(true);
      console.log('RSVP submitted successfully');
    } catch (error) {
      console.error('Error submitting RSVP:', error);
      setError(error instanceof Error ? error.message : 'Failed to submit RSVP. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isRSVPSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto bg-black border-orange-500 border-2">
        <CardContent className="pt-6 text-center">
          <div className="text-orange-500 text-2xl mb-4">🎬</div>
          <h3 className="text-orange-500 font-bold text-lg mb-2">You're RSVP'd!</h3>
          <p className="text-orange-300 text-sm">
            Thanks for RSVPing to the End of an Era Docu-Series Screening. We'll see you there!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto bg-black border-orange-500 border-2 shadow-lg shadow-orange-500/20">
      <CardHeader className="text-center pb-4">
        <CardTitle className="text-orange-500 font-bold text-2xl mb-2">
          🎬 End of an Era Docu-Series Screening
        </CardTitle>
        <CardDescription className="text-orange-300 text-lg">
          Join us for a special screening of Taylor Swift's "The End of an Era" documentary series
        </CardDescription>
        <div className="mt-4 text-orange-200">
          <p className="font-semibold">Date: December 12, 2025</p>
          <p className="font-semibold">Time: 12:00 PM - 3:00 PM</p>
          <p className="font-semibold">Location: Room C208 - Sheridan College Theatre, Trafalgar Campus</p>
        </div>
      </CardHeader>
      {showRSVP && (
        <CardContent>
          <div className="mb-4 p-4 bg-orange-900/20 border border-orange-500/30 rounded-lg">
            <h4 className="text-orange-400 font-bold mb-2">RSVP for this Event</h4>
            <p className="text-orange-300 text-sm mb-4">
              Please provide your student information to reserve your spot at this exclusive screening.
            </p>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-900 border border-red-500 text-red-200 rounded">
              {error}
            </div>
          )}

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="studentId"
                rules={{
                  required: 'Student ID is required',
                  pattern: {
                    value: /^[0-9]{9}$/,
                    message: 'Student ID must be 9 digits'
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-orange-500 font-medium">Student ID</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="text"
                        className="bg-black border-orange-500 text-orange-100 placeholder:text-orange-300 focus:border-orange-400 focus:ring-orange-400"
                        placeholder="Enter your 9-digit student ID"
                        maxLength={9}
                      />
                    </FormControl>
                    <FormMessage className="text-orange-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="studentEmail"
                rules={{
                  required: 'Student email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@sheridancollege\.ca$/i,
                    message: 'Must be a valid Sheridan student email (@sheridancollege.ca)'
                  }
                }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-orange-500 font-medium">Student Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        className="bg-black border-orange-500 text-orange-100 placeholder:text-orange-300 focus:border-orange-400 focus:ring-orange-400"
                        placeholder="your.name@sheridancollege.ca"
                      />
                    </FormControl>
                    <FormMessage className="text-orange-400" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="eventDescription"
                rules={{ required: 'Is there anything you would like to share?' }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-orange-500 font-medium">Is there anything you would like to share?</FormLabel>
                    <FormControl>
                      <textarea
                        {...field}
                        className="bg-black border-orange-500 text-orange-100 placeholder:text-orange-300 focus:border-orange-400 focus:ring-orange-400 w-full h-24 p-3 rounded resize-none"
                        placeholder="Your message..."
                      />
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
                    Submitting RSVP...
                  </>
                ) : (
                  'RSVP for Screening'
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      )}
    </Card>
  );
};

export default EndOfEraEvent;