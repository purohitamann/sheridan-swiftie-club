import React, { useEffect, useRef, useState } from 'react';
import Confetti from 'react-confetti';
import './Header.css';
const Header: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const customColors = ['#000000', '#FFFFFF', '#808080', '#E4E2DD'];
    const [isConfettiVisible, setConfettiVisible] = useState(false);
    const [hasPlayedAudio, setHasPlayedAudio] = useState(false);

    const playAudio = () => {
        if (audioRef.current && !hasPlayedAudio) {
            audioRef.current.volume = 0.8;
            audioRef.current.play();
            setConfettiVisible(true);
            // setHasPlayedAudio(true); // Mark audio as played

        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined' && !hasPlayedAudio) {
            audioRef.current = new Audio('/so-high-school-intro.mp3');
            playAudio();

        }

    }, [hasPlayedAudio]);

    return (
        <header className=" flex flex-col justify-center items-center h-[100vh] text-center p-20 ">
            <p style={{ fontFamily: "Cinzel" }} className="text-sm font-light text-[#e4e2ddc6] p-3">Est Oct&#39;23</p>
            <h1
                style={{ fontFamily: "Cinzel", color: "#E4E2DD" }}
                className="text-6xl sm:text-xl md:text-xl font-light"
                onMouseEnter={playAudio}
                onClick={playAudio}
                onMouseLeave={playAudio}
                onTouchMove={playAudio}

            >
                Sheridan Swiftie Club
            </h1>
            <p style={{ fontFamily: "Cinzel" }} className="text-sm font-light text-[#e4e2ddc6] p-3">Sheridan College, Trafalgar</p>
            {isConfettiVisible && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    numberOfPieces={200}
                    recycle={true}
                    colors={customColors}
                    gravity={0.009}
                    wind={0.004}
                    opacity={0.8}
                    drawShape={(ctx) => {
                        ctx.beginPath();
                        for (let i = 0; i < 22; i++) {
                            const angle = 0.35 * i;
                            const x = (0.2 + 1.5 * angle) * Math.cos(angle);
                            const y = (0.2 + 1.5 * angle) * Math.sin(angle);
                            ctx.lineTo(x, y);
                        }
                        ctx.stroke();
                        ctx.closePath();
                    }}
                />
            )}

        </header>
    );
};

export default Header;
