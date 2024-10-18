'use client';
import React, { useEffect } from 'react';

import Header from '../components/Header/Header';

import Body from '@/components/Body';
import ThemeWrapper from '@/components/ThemeWrapper/ThemeWrapper';

const Home: React.FC = () => {
  useEffect(() => {

    const audio = new Audio('/so-high-school-intro.mp3');
    audio.volume = 0.5;
    audio.play();
  }, []);

  return (
    <main className="flex flex-col min-h-screen">

      <ThemeWrapper>    <Header /></ThemeWrapper>

      <Body />


    </main>
  );
};

export default Home;
