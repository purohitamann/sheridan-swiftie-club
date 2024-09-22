import React from 'react';
import LinkComponent from '../components/LinkComponent/LinkComponent';
import Article from '../components/Article';
import Footer from '../components/Footer';
import Executives from '../components/Executives';
const Body: React.FC = () => {
    return (
        <section className="flex flex-col justify-start items-center p-10 w-full h-full">
            <div className="flex flex-col justify-start items-center  ">
                <div
                    style={{ fontFamily: 'Cinzel' }}
                    className="flex flex-col justify-center items-center text-[#E4E2DD] text-lg gap-2 m-20  text-wrap rounded-md max-w-3xl text-center"
                >
                    <p>
                        The official website for <br />
                        <strong>the Sheridan Swiftie Club</strong>
                    </p>
                    <p>

                        Welcome to the Sheridan Swiftie Club! We are a fan community dedicated to celebrating all things Taylor Swift. Whether you&#39;re a casual listener or a superfan, you&#39;ll find a place here at Sheridan&#39;s Trafalgar Campus to connect, share, and celebrate her music, style, and impact.
                    </p>
                    <p>
                        Join us for events, discussions, and more. We can&#39;t wait to meet you!
                    </p>
                </div>
                <section className="flex flex-col justify-center items-center align-center p-10 text-[#E4E2DD] w-3/3 h-full rounded">
                    <Executives />
                </section>


                <div className="flex-col text-center pt-10">
                    <LinkComponent />
                </div>

                <Footer />

            </div>
        </section>
    );
};

export default Body;
