import { useState } from 'preact/hooks';


export const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
 

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
