import React from 'react';

interface Props {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

const Banner: React.FC<Props> = ({ title, subtitle, children }) => {
    return (
        <div style={{ fontFamily: 'Cinzel' }} className="flex flex-col justify-center items-center  sm:p-0 text-[#E4E2DD] w-full h-full rounded">
            <section className="flex flex-col justify-center items-center sm:p-0 text-[#E4E2DD] w-full h-full rounded">
                <h1 className="text-3xl sm:text-4xl">{title}</h1> {/* Text scales up on larger screens */}
                <h3 className="text-xl sm:text-2xl">{subtitle}</h3> {/* Text scales up on larger screens */}
            </section>

            <section className="flex flex-col justify-center items-center sm:p-0 text-[#E4E2DD] w-full h-full rounded">
                {children}
            </section>
        </div>
    );
};

export default Banner;
