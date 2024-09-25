'use client';
import React, { useEffect } from 'react';
import PlayButton from '../components/PlayButton'; // Adjust the path according to your folder structure
import Header from '../components/Header/Header'; // Import the new ClubName component
import Link from 'next/link';
import LinkComponent from '../components/LinkComponent/LinkComponent';
import Body from '@/components/Body';
import ThemeWrapper from '@/components/ThemeWrapper/ThemeWrapper';
import Article from '@/components/Article';
import Footer from '@/components/Footer';
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
