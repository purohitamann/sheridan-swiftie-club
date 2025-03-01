"use client";

import { usePathname } from 'next/navigation';
import Header from './Header';

export default function HeaderWrapper() {
  const pathname = usePathname();
  
  // Don't show header on home page
  if (pathname === '/') {
    return null;
  }
  
  return <Header />;
}
