import React from 'react';
import LinkComponent from '../components/LinkComponent/LinkComponent';

const Body: React.FC = () => {
    return (
        <section className="flex flex-col justify-start items-center p-10 w-full h-full">
            <div className="flex flex-col justify-start items-center p-10 ">
                <div
                    style={{ fontFamily: 'Cinzel', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    className="flex flex-col justify-center items-center text-[#E4E2DD] text-lg gap-2 uppercase mt-20 p-10 text-wrap rounded-md max-w-lg text-center"
                >
                    <p>
                        The official website for <br />
                        <strong>the Sheridan Swiftie Club</strong>
                    </p>
                    <p>
                        We&#39;re your go-to at Sheridan for all things <i> Taylor Swift!</i> If you&#39;d like to learn more about the club, head to
                        Clubs Corner and search for us!
                    </p>
                </div>

                {/* Links Section */}
                <div className="flex-col text-center pt-10">
                    <LinkComponent />
                </div>

                {/* Footer */}
                <footer className="mt-12">
                    <div
                        style={{ fontFamily: 'Cinzel' }}
                        className="flex flex-col justify-center items-center p-8 text-center text-[#E4E2DD]"
                    >
                        <p className="text-sm p-2">Disclaimer: We&#39;re not affiliated with Taylor Nation</p>
                        <p className="text-sm p-1">Designed and developed by Sheridan Swiftie Club</p>
                        <p className="text-sm p-1">© 2024 Sheridan Swiftie Club</p>
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Body;
