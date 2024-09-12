import  { createContext } from 'preact';
import { useState } from 'preact/hooks';
import { useEffect } from 'preact/hooks';
import { useContext } from 'preact/hooks';

const WindowWidthContext = createContext<number>(window.innerWidth);

export const WindowWidthProvider = ({ children }: { children: React.ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <WindowWidthContext.Provider value={windowWidth}>
      {children}
    </WindowWidthContext.Provider>
  );
};

export const useWindowWidth = () => useContext(WindowWidthContext);
