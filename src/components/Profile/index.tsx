import React from 'react'
import "./index.css";
import Image from 'next/image'
interface Props {
    fullName: string;
    profilePic: string;
    role: string;
    pronouns: string;
    description: string;
}
export default function index(props: Props) {
    return (
        <div className='flex flex-col justify-center items-center align-center pr-0 pl-0 sm:pr-40 sm:pl-40'>
            <div className=" flex md:flex-row flex-col justify-center items-center align-center  md:pt-10 md:pr-30 md:pl-30 text-[#E4E2DD] w-3/3 h-full rounded ">

                <div className="rounded flex justify-center ">
                    <Image className="profile radius-3xl w-4/5" src={props.profilePic} alt='profile-image' width={600} height={300}></Image>
                </div>

                <div className='rounded w-full h-50 text-wrap text-justify flex-col '>
                    <div className='flex '>
                        <h1 className="font-mono mr-1">{props.fullName} </h1>
                        <p className="font-extralight italic lowercase ">({props.pronouns})</p>
                    </div>

                    <p className="font-medium">{props.role}</p>

                    <div className="font-thin  text-sm">
                        <p>{props.description}</p>

                    </div>

                </div>
            </div>
        </div>
    )
}
