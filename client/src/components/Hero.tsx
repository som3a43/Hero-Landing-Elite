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

      {/* Navy Blue Curvy Overlay (Right 1/3) */}
      <div className="absolute top-0 right-0 w-full md:w-[45%] lg:w-[35%] h-full z-20 pointer-events-none">
         <motion.div 
           initial={{ x: "100%" }}
           animate={{ x: 0 }}
           transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
           className="w-full h-full bg-background relative pointer-events-auto shadow-[-20px_0_40px_rgba(0,0,0,0.4)]"
           style={{
             clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 15% 85%, 20% 70%, 22% 55%, 20% 40%, 15% 25%, 5% 10%)",
             borderRadius: "0",
           }}
         >
           {/* Custom SVG Mask for a smoother "water-like" curve if clip-path is too rigid, 
               but for now using a more complex organic shape approximation */}
           <div className="absolute inset-0 w-full h-full flex flex-col justify-center px-12 md:px-16 lg:px-20">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 1, delay: 0.8 }}
               className="max-w-md ml-auto"
             >
               <h1 
                 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white font-bold leading-[1.1] mb-8"
                 data-testid="text-hero-title"
               >
                 Elite <br />
                 <span className="text-primary italic font-light">Harvest.</span>
               </h1>
               
               <p 
                 className="text-muted-foreground text-lg md:text-xl font-sans leading-relaxed font-light"
                 data-testid="text-hero-subtitle"
               >
                 Nurturing excellence from seed to table. Discover the pinnacle of agricultural precision 
                 and organic mastery tailored for the world's most discerning palates.
               </p>
               
               <div className="w-16 h-px bg-primary mt-12 opacity-60"></div>
             </motion.div>
           </div>

           {/* Decorative Curve via SVG Overlay for that "Water" feel */}
           <svg 
             className="absolute top-0 left-0 h-full w-[100px] -translate-x-[99%] pointer-events-none fill-background" 
             viewBox="0 0 100 1000" 
             preserveAspectRatio="none"
           >
             <path d="M100,0 C40,150 0,350 0,500 C0,650 40,850 100,1000 L100,0 Z" />
           </svg>
         </motion.div>
      </div>
    </section>
  );
}
