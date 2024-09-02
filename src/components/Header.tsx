import React, { useEffect } from 'react';
import LinkComponent from './LinkComponent/LinkComponent';

const Header: React.FC = () => {
    let audio: HTMLAudioElement | null = null;

    const playAudio = () => {
        if (audio) {
            audio.volume = 0.5;
            audio.play();
        }
    };

    useEffect(() => {

        if (typeof window !== 'undefined') {
            audio = new Audio('/so-high-school-intro.mp3');

            playAudio();
        }
    }, []);

    return (
        <div className="flex-col">
            <div>
                <h1
                    style={{ fontFamily: "Cinzel", color: "#E4E2DD" }}
                    className="text-6xl font-light"
                    onMouseEnter={playAudio}
                    onClick={playAudio}

                >
                    Sheridan Swiftie Club
                </h1>
            </div>
            <div >
                <LinkComponent />
            </div>

        </div>

    );
};

export default Header;
