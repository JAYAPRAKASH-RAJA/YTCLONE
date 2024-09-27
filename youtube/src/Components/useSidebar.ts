import { useState } from 'preact/hooks';
// import { Location } from 'preact-router';

export const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const location = location();

  const toggleSidebar = () => {
   if(isSidebarOpen){
    setIsSidebarOpen(false)
   }
    else{
        setIsSidebarOpen(true)
    }
  };

  return { isSidebarOpen, toggleSidebar };
};
