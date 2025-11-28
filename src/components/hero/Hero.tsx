import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hero-whatsapp.png";
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  // remove pointer parallax - not useful on mobile; keep mobile-first behavior

  // prefers-reduced-motion fallback
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && "matchMedia" in window) {
      setReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    }
  }, []);

  // scroll-based parallax (works on mobile too)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fgY = useTransform(scrollYProgress, [0, 1], [0, 24]);

  // determine small screen at runtime to alter image loading strategy
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(max-width: 640px)");
      setIsSmallScreen(mq.matches);
      const handler = (e: MediaQueryListEvent) => setIsSmallScreen(e.matches);
      try {
        mq.addEventListener("change", handler);
        return () => mq.removeEventListener("change", handler);
      } catch (e) {
        // Safari fallback
        // @ts-ignore
        mq.addListener(handler);
        // @ts-ignore
        return () => mq.removeListener(handler);
      }
    }
    return;
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } }
  };

  return (
    <section
      ref={ref as any}
      className="relative min-h-[62vh] sm:min-h-screen flex items-center justify-center px-6 overflow-hidden"
      aria-label="Hero"
    >
      {/* Background layer (mobile-first: subtle) */}
      <motion.div style={{ y: reducedMotion ? 0 : bgY }} className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#050505]/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h1
          className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 tracking-tight leading-[1.05]"
          initial="hidden"
          animate="show"
          variants={titleVariants}
        >
          A Inteligência Operacional que faltava na
          <span className="block sm:inline bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent"> Creator Economy</span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-muted-foreground mb-6 max-w-xl mx-auto font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
        >
          Deixe a Influ.IA gerir a agenda, o CRM e a rotina. O criador foca na arte, nós focamos no negócio.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.45, delay: 0.25 }}>
          <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 sm:py-3 rounded-2xl shadow-xl hover:shadow-indigo-600/30 transition text-base sm:text-lg"
              asChild
            >
            <a href="https://benfeitoria.com" target="_blank" rel="noopener noreferrer">
              Acessar Rodada
            </a>
          </Button>
        </motion.div>
      </div>

      {/* Foreground mockup (responsive, mobile-first widths) */}
      {/* Foreground mockup (mobile-first: on small screens we render it below content and lazy-load) */}
      {isSmallScreen ? (
        <div className="relative z-10 mt-6 w-full max-w-sm mx-auto">
          <img
            src={heroImage}
            alt="Interface do produto"
            className="w-full rounded-2xl shadow-md border border-white/8 block"
            onLoad={() => setLoaded(true)}
            loading="lazy"
            decoding="async"
            width={800}
            height={533}
          />
        </div>
      ) : (
        <motion.div
          style={{ y: reducedMotion ? 0 : fgY }}
          className="absolute bottom-3 left-1/2 transform -translate-x-1/2 w-[92%] sm:w-[70%] md:w-[55%] lg:w-[45%]"
        >
          <motion.div transition={{ type: "spring", stiffness: 120, damping: 20 }}>
            <img
              src={heroImage}
              alt="Interface do produto"
              className="w-full rounded-2xl shadow-2xl border border-white/10 block"
              onLoad={() => setLoaded(true)}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={1200}
              height={800}
              style={{ display: "block" }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* simple preload overlay so mobile sees smooth entrance */}
      {!loaded && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 animate-pulse" />
        </div>
      )}
    </section>
  );
};

export default Hero;
