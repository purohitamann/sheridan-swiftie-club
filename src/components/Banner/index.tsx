import React from 'react'
interface Props {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}
const index = (props: Props) => {
    return (
        <div style={{ fontFamily: 'Cinzel' }} className="flex flex-col justify-center items-center align-center sm:p-0  text-[#E4E2DD] w-full h-full rounded">
            <section className="flex flex-col justify-center items-center align-center  sm:p-0 text-[#E4E2DD] w-full h-full rounded">
                <h1 className="text-3xl sm:text-md">{props.title}</h1>
                <h3 className="text-xl sm:text-lg">{props.subtitle}</h3>
            </section>

            <section className="flex flex-col justify-center items-center align-center  sm:p-0 text-[#E4E2DD] w-full h-full rounded">
                {props.children}
            </section>
        </div>
    )
}

export default index
