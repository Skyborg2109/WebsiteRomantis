import { useEffect } from 'react';
import { FloatingHearts } from './components/FloatingHearts';
import { HeroSection } from './components/HeroSection';
import { PhotoGallery } from './components/PhotoGallery';
import { Timeline } from './components/Timeline';
import { LoveLetters } from './components/LoveLetters';
import { InteractiveCard } from './components/InteractiveCard';
import { MemoryBox } from './components/MemoryBox';
import { LoveQuotes } from './components/LoveQuotes';
import { FinalMessage } from './components/FinalMessage';

export default function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="relative">
      {/* Floating hearts background */}
      <FloatingHearts />
      
      {/* Main content */}
      <main className="relative z-10">
        <HeroSection />
        <PhotoGallery />
        <Timeline />
        <LoveLetters />
        <InteractiveCard />
        <MemoryBox />
        <LoveQuotes />
        <FinalMessage />
      </main>
    </div>
  );
}