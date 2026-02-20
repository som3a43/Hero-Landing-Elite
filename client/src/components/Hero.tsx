import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images
import img1 from "@/assets/images/agri-1.png";
import img2 from "@/assets/images/agri-2.png";
import img3 from "@/assets/images/agri-3.png";

const images = [img1, img2, img3];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Sliding Images Background */}
      <div className="absolute inset-0 w-full h-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 w-full h-full"
            initial={{ x: "100%", opacity: 0.8 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-50%", opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="absolute inset-0 bg-black/20 z-10" /> {/* Subtle darkening over images */}
            <img
              src={images[currentIndex]}
              alt="Elite Agriculture"
              className="w-full h-full object-cover"
              data-testid={`img-hero-slider-${currentIndex}`}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navy Blue Falcon Wing Overlay (Bottom Row) */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 z-20 pointer-events-none">
         <motion.div 
           initial={{ y: "100%" }}
           animate={{ y: 0 }}
           transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           className="w-full h-full bg-background relative pointer-events-auto shadow-[0_-20px_40px_rgba(0,0,0,0.4)]"
           style={{
             clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 85% 15%, 70% 25%, 50% 30%, 30% 25%, 15% 15%, 0% 0%)",
           }}
         >
           <div className="absolute inset-0 w-full h-full flex items-center justify-center px-12 md:px-16 lg:px-24">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.8 }}
               className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-8"
             >
               <div className="flex-1">
                 <h1 
                   className="text-4xl md:text-5xl lg:text-6xl font-serif text-white font-bold leading-tight"
                   data-testid="text-hero-title"
                 >
                   Elite <span className="text-primary italic font-light">Harvest.</span>
                 </h1>
               </div>
               
               <div className="flex-[2] max-w-2xl">
                 <p 
                   className="text-muted-foreground text-base md:text-lg font-sans leading-relaxed font-light"
                   data-testid="text-hero-subtitle"
                 >
                   Nurturing excellence from seed to table. Discover the pinnacle of agricultural precision 
                   and organic mastery tailored for the world's most discerning palates.
                 </p>
               </div>
               
               <div className="hidden md:block w-16 h-px bg-primary opacity-60"></div>
             </motion.div>
           </div>
         </motion.div>
      </div>
    </section>
  );
}
