import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

interface ScrollToTopProps {
  currentPage?: string;
}

export function ScrollToTop({
  currentPage = "home",
}: ScrollToTopProps) {
  const [visible, setVisible] = useState(false);
  const [isHighlightSection, setIsHighlightSection] = useState(false);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkPosition = () => {
      // Calculate 60% of the page scroll height
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollThreshold = scrollHeight * 0.6;
      
      // Show button if scrolled down more than 60% of the page
      setVisible(window.scrollY > scrollThreshold);

      // Debounce the color transition check
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }

      debounceTimer.current = setTimeout(() => {
        // Elements that should trigger the gold circle: Vision/Mission or Footer
        const visionMission = document.getElementById("vision-mission");
        const footer = document.querySelector("footer");
        
        // Button position relative to the viewport
        const buttonRect = {
          right: 32,
          bottom: 32,
          width: 40,
          height: 40
        };
        
        // Calculate the absolute position of the button in the viewport
        const buttonX = window.innerWidth - buttonRect.right - (buttonRect.width / 2);
        const buttonY = window.innerHeight - buttonRect.bottom - (buttonRect.height / 2);
        
        let highlight = false;
        
        // Check for intersection with Vision/Mission
        if (visionMission) {
          const rect = visionMission.getBoundingClientRect();
          if (
            buttonX >= rect.left && 
            buttonX <= rect.right && 
            buttonY >= rect.top && 
            buttonY <= rect.bottom
          ) {
            highlight = true;
          }
        }
        
        // Check for intersection with Footer if not already highlighted
        if (!highlight && footer) {
          const rect = footer.getBoundingClientRect();
          if (
            buttonX >= rect.left && 
            buttonX <= rect.right && 
            buttonY >= rect.top && 
            buttonY <= rect.bottom
          ) {
            highlight = true;
          }
        }
        
        setIsHighlightSection(highlight);
      }, 30); // Reduced from 100ms to 30ms for faster response
    };

    const handleScroll = () => {
      // Calculate 60% threshold dynamically
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollThreshold = scrollHeight * 0.6;
      
      // Immediately set visibility for smooth appearance
      if ((window.scrollY > scrollThreshold) !== visible) {
        setVisible(window.scrollY > scrollThreshold);
      }
      checkPosition();
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    checkPosition();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [visible]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Safe class name helper
  const getButtonClass = (isActive: boolean) => {
    const base = "fixed bottom-8 right-8 p-2.5 rounded-full shadow-lg z-50 flex items-center justify-center transition-transform hover:scale-110";
    return base.toString();
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 0.9, // 5% smaller than the previous 0.95 or standard 1.0. The user said "5% smaller". Let's use 0.9.
            backgroundColor: isHighlightSection ? '#C9A870' : '#1E293B'
          }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ 
            duration: 0.2,
            backgroundColor: { duration: 0.2, ease: [0.4, 0, 0.2, 1] } // Faster, more fluid easing curve
          }}
          onClick={scrollToTop}
          className={getButtonClass(visible)}
          aria-label="Scroll to top"
        >
          <motion.div
            animate={{
              color: isHighlightSection ? '#1E293B' : '#C9A870'
            }}
            transition={{ duration: 0.2, ease: [0.4, 0, 0.2, 1] }} // Faster, more fluid easing curve
          >
            <ArrowUp className="h-4.5 w-4.5" strokeWidth={2.5} />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}