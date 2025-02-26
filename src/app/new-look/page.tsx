'use client';
import React, { useEffect } from 'react';

const Home: React.FC = () => {
  useEffect(() => {
    const audio = new Audio('/so-high-school-intro.mp3');
    audio.volume = 0.5;
    audio.play();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-white font-slack font-bold">
      <header className="flex flex-col justify-center items-center h-[100vh] text-center p-20">
        <p className="text-sm font-light text-[#36C5F0] p-3">Est Oct&#39;23</p>

        <ClubLogo />
        <p className="text-sm  text-[#ECB22E] p-3  ">Sheridan College, Trafalgar</p>
        
      </header>

      {/* <Body /> */}
    </main>
  );
};
const ClubLogo = () => {
 
    
        return (
          <div className="relative flex items-center justify-center  p-5 sm:h-20 h-16
              bg-[#2EB67D] rounded-lg shadow-lg border-4 border-white">
            
            {/* Club Name with ST Superscript */}
            <span className="text-white font-bold font-sans sm:text-2xl text-lg uppercase tracking-widest">
              Sheridan Swiftie Club <span className="align-super sm:text-lg text-xs">ST</span>
            </span>
          </div>
        );
  };
  
  
  
export default Home;

