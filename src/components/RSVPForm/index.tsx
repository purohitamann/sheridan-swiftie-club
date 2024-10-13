import React from 'react';
type Props = {
    formTitle: string;
    formDescription: string;

};
export default function RSVPForm(form: Props) {
    const { formTitle, formDescription } = form;
    return (

        <div>
            <h1>{formTitle}</h1>
            <p>{formDescription}</p>
            <form className="flex flex-col justify-center items-center bg-slate-50">
                <label htmlFor="name">Member Name:</label>
                <input type="text" id="name" name="name" />
                <label htmlFor="email">Student Email:</label>
                <input type="text" id="email" name="email" />
                <label htmlFor="phone">Student ID:</label>
                <input type="text" id="phone" name="phone" />
                <label htmlFor="comments">Comments:</label>
                <input type="text" id="comments" name="comments" />
                <label htmlFor='consent'>Do you consent to being photographed?</label>
                <input type="checkbox" id="consent" name="consent" required />
                <button type="submit">Submit</button>
            </form>

        </div>
    )
}