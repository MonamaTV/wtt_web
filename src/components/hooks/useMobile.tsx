import { useState, useEffect } from 'react';

function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    }

    // Initial check on mount
    handleResize();

    // Listen to window resize events
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array to ensure the effect runs only on mount

  return isMobile;
}

export default useMobile;
