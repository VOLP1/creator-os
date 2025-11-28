import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Shield, Leaf, Brain, User, MessageCircle, PhoneCall } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useRef, useState, useEffect } from "react";

const Index = () => {
  

  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroBgY = useTransform(heroScroll, [0, 1], [0, -100]);
  const heroBgScale = useTransform(heroScroll, [0, 1], [1, 1.2]);

  const movementRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: movementScroll } = useScroll({ target: movementRef, offset: ["start end", "end start"] });
  const movementBgY = useTransform(movementScroll, [0, 1], [100, -100]);

  const problemRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: problemScroll } = useScroll({ target: problemRef, offset: ["start end", "end start"] });
  const problemBgY = useTransform(problemScroll, [0, 1], [100, -100]);

  const solutionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: solutionScroll } = useScroll({ target: solutionRef, offset: ["start end", "end start"] });
  const solutionBgY = useTransform(solutionScroll, [0, 1], [100, -100]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 overflow-hidden">
      {/* SECTION 1: THE HERO (Parallax "Neural Roots") */}
      <section ref={heroRef as any} className="relative h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Parallax background with scale */}
        <motion.div 
          style={{ y: heroBgY, scale: heroBgScale }} 
          className="absolute inset-0 will-change-transform"
        >
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1763661478581-54cff2574c9a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 via-white/60 to-slate-50/80" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-sm text-indigo-700 shadow-lg shadow-indigo-100/50"
          >
            <Leaf className="w-4 h-4 text-emerald-600" />
            <span>Uma iniciativa +Creator</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 bg-clip-text text-transparent"
          >
            Uma ferramenta para criar conteúdo com performance e propósito
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium"
          >
            A InfluIA é sua ferramenta para economizar tempo e ter mais resultados na criação de conteúdo
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl shadow-indigo-200/50 px-7 py-4 rounded-2xl border border-indigo-400"
              asChild
            >
              <a href="#beta">Testar a Influ.IA (Beta)</a>
            </Button>
            
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE MOVEMENT (Split Screen "Organic Tech") */}
      <section ref={movementRef as any} className="relative min-h-screen px-6 py-24 overflow-hidden bg-gradient-to-b from-slate-100 via-indigo-50 to-white">
        {/* Enhanced Parallax background */}
        <motion.div 
          style={{ y: movementBgY }} 
          className="absolute inset-0 will-change-transform"
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-110 opacity-15"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80&w=2000')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-100/60 via-slate-50/80 to-white/90" />
        </motion.div>
        
        {/* Floating particles for depth */}
        <motion.div
          className="absolute top-32 left-1/4 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl z-[1]"
          animate={{ 
            x: [0, 80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-32 right-1/3 w-80 h-80 bg-indigo-400/15 rounded-full blur-3xl z-[1]"
          animate={{ 
            x: [0, -60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Sticky Text */}
          <div className="md:sticky md:top-24">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.2em] font-semibold text-indigo-600"
            >
              O CONTEXTO
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-900"
            >
              Regenerar as redes para salvar quem cria.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 space-y-4 text-slate-600"
            >
              <p>A internet adoeceu. O que era para ser um espaço de expressão virou uma linha de montagem de ansiedade.</p>
              <p>
                A <strong className="text-slate-900">+Creator</strong> não é uma empresa, é um movimento. Nossa missão é garantir um futuro com mais saúde mental para jovens e criadores.
              </p>
              <p>
                A Influ.IA não nasceu em uma sala de reunião focada em lucro. Ela surge como a ferramenta técnica necessária para quebrar o ciclo de exaustão que o sistema impõe.
              </p>
            </motion.div>
            <div className="mt-6"><Button asChild variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-100"><a href="/o-movimento">Saiba mais</a></Button></div>
          </div>

          {/* Right: Visual Concept */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[60vh] md:h-[70vh]"
          >
            {/* Floating organic-tech sculpture */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square">
                {/* Leaf veins / circuit */}
                <div className="absolute inset-6 rounded-[40%] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.3),transparent_60%,rgba(99,102,241,0.35))] blur-sm" />
                {/* Inner glow */}
                <div className="absolute inset-12 rounded-[40%] bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.4),transparent_60%)]" />
                {/* Subtle float */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -inset-2 rounded-[40%] border-2 border-indigo-300/30"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE PROBLEM (ULTRA Cinematic Burnout Journey) */}
      <section ref={problemRef as any} className="relative w-full bg-gradient-to-b from-white via-rose-50 to-red-50 px-6 py-20 md:py-32 overflow-hidden will-change-transform" style={{ perspective: '1000px' }}>
        {/* Multi-layer Parallax Background */}
        <motion.div 
          className="absolute inset-0 z-0 will-change-transform"
          style={{ y: problemBgY }}
        >
          {/* Layer 1: Far background (slowest) - OPTIMIZED: reduced blur */}
          <motion.div 
            className="absolute inset-0 bg-cover bg-center opacity-8 scale-125"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1499482125586-91609c0b5fd4?w=2000&q=80)',
            }}
            animate={{ 
              scale: [1.25, 1.3, 1.25],
              opacity: [0.08, 0.12, 0.08]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Layer 2: Mid depth with vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-rose-50/60 to-red-50/80" />
          
          {/* Layer 3: Color grading overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-rose-100/40 via-red-100/30 to-rose-50/40"
            animate={{ 
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
        </motion.div>
        
        {/* Cinematic Film Grain - OPTIMIZED: slower refresh */}
        <motion.div
          animate={{ 
            opacity: [0.02, 0.04, 0.02],
          }}
          transition={{ 
            duration: 0.3, 
            repeat: Infinity,
          }}
          className="pointer-events-none absolute inset-0 z-[1] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')] opacity-30 mix-blend-overlay" 
        />
        
        {/* Volumetric light rays - OPTIMIZED: reduced to 2, lighter colors */}
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-indigo-400/15 to-transparent z-[1]"
          animate={{ 
            opacity: [0.1, 0.25, 0.1],
            x: [-100, 100, -100]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-rose-400/12 to-transparent z-[1]"
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            x: [100, -100, 100]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />

        {/* Depth layers - OPTIMIZED: reduced from 12 to 6 particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-red-400/30 rounded-full z-[2]"
            style={{ 
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: `blur(${Math.random() * 2}px)`
            }}
            animate={{ 
              y: [0, -100 - Math.random() * 200, 0],
              x: [0, (Math.random() - 0.5) * 100, 0],
              opacity: [0, 0.3, 0],
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: 8 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}

        {/* Atmospheric fog layers - OPTIMIZED: added will-change */}
        <motion.div
          className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-indigo-300/15 rounded-full blur-[100px] z-[2] will-change-transform"
          animate={{ 
            x: [-100, 150, -100],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-rose-300/12 rounded-full blur-[120px] z-[2] will-change-transform"
          animate={{ 
            x: [100, -150, 100],
            y: [0, -100, 0],
            scale: [1, 1.4, 1],
            opacity: [0.06, 0.12, 0.06]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="relative max-w-5xl mx-auto z-10">
          {/* Cinematic Title Sequence - OPTIMIZED */}
          <motion.div
            initial={{ opacity: 0, scale: 1.3, rotateX: -25 }}
            whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1.8,
              type: "spring",
              stiffness: 40,
              damping: 15
            }}
            className="text-center mb-32"
          >
            {/* Subtitle fade in */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 bg-red-100 border border-red-300 rounded-full text-xs uppercase tracking-[0.3em] text-red-700 font-semibold shadow-lg">
                Capítulo III
              </span>
            </motion.div>

            {/* Main title with cinematic reveal - OPTIMIZED */}
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.6, type: "spring", stiffness: 50 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              <motion.span
                className="inline-block bg-gradient-to-r from-slate-900 via-red-700 to-indigo-800 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% auto' }}
              >
                O Problema
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 0.6, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="text-4xl md:text-5xl text-slate-500 font-light"
              >
                que Ninguém Vê
              </motion.span>
            </motion.h2>

            {/* Animated divider line */}
            <div className="relative w-full max-w-md mx-auto h-px my-8 overflow-hidden">
              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                whileInView={{ scaleX: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 1.2 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-400 to-red-400"
              />
              <motion.div
                animate={{ 
                  x: ['-100%', '200%']
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2
                }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-70"
              />
            </div>

            {/* Tagline - OPTIMIZED */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 1.4 }}
              className="text-lg md:text-2xl text-slate-600 font-light italic max-w-2xl mx-auto"
            >
              "A rotina exaustiva do criador de conteúdo"
            </motion.p>
          </motion.div>

          {/* MOBILE: Cinematic Story Cards - OPTIMIZED for performance */}
          <div className="md:hidden space-y-32">
            {/* Step 1: Multi-tasking Chaos - OPTIMIZED */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true, margin: "-50px", amount: 0.3 }}
              transition={{ 
                duration: 1.2,
                type: "spring",
                stiffness: 60,
                damping: 20
              }}
              className="space-y-6"
            >
              {/* Scene number with lens flare - OPTIMIZED */}
              <motion.div 
                className="flex items-center gap-4 mb-8"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <div className="relative">
                  <motion.span 
                    className="text-6xl font-black bg-gradient-to-br from-indigo-400 to-indigo-600 bg-clip-text text-transparent"
                    whileInView={{ 
                      scale: [1, 1.15, 1],
                      rotate: [0, 10, 0]
                    }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    01
                  </motion.span>
                  {/* Lens flare effect */}
                  <motion.div
                    className="absolute -inset-4 bg-indigo-500/20 rounded-full blur-2xl will-change-transform"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3]
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold leading-tight">Uma Linha de Produção<br/>de Uma Pessoa Só</h3>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-slate-700 text-base leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.9 }}
              >
                Roteiros, filmagens, edição de vídeo, gestão de agendas, negociações... <span className="text-indigo-700 font-semibold">O criador faz tudo sozinho.</span>
              </motion.p>
              
              {/* Card with depth - OPTIMIZED: removed heavy 3D transforms */}
              <motion.div 
                className="relative h-64 rounded-3xl overflow-hidden will-change-transform"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 1, type: "spring", stiffness: 80 }}
                style={{ 
                  boxShadow: '0 40px 80px -20px rgba(99, 102, 241, 0.4), 0 0 0 1px rgba(255,255,255,0.1)'
                }}
              >
                {/* Layered background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-slate-100" />
                
                {/* Animated grid - OPTIMIZED: slower animation */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }}
                  animate={{ 
                    backgroundPosition: ['0px 0px', '30px 30px']
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Task pills - OPTIMIZED: simpler animations */}
                <div className="absolute inset-0 flex flex-wrap gap-3 p-6 content-start">
                  {["Roteiro", "Edição", "Agenda", "Publis", "DMs", "Vendas", "Analytics", "Criação"].map((task, i) => (
                    <motion.div
                      key={task}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        delay: 0.8 + i * 0.08,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                      viewport={{ once: true }}
                      className="relative px-4 py-2 bg-indigo-100 border border-indigo-300 rounded-full text-sm text-indigo-800 font-medium backdrop-blur-md cursor-pointer shadow-sm"
                      style={{ 
                        boxShadow: '0 8px 20px -8px rgba(99, 102, 241, 0.6), inset 0 1px 0 rgba(255,255,255,0.2)'
                      }}
                    >
                      {task}
                      {/* Inner glow */}
                      <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full" />
                    </motion.div>
                  ))}
                </div>
                
                {/* Vignette overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
              </motion.div>
            </motion.div>

            {/* Step 2: Burnout Stat - DRAMATIC ZOOM & SHAKE */}
            <motion.div
              initial={{ opacity: 0, scale: 1.5, z: -600, rotateX: 30 }}
              whileInView={{ opacity: 1, scale: 1, z: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 1.6,
                type: "spring",
                stiffness: 45,
                damping: 18
              }}
              className="space-y-6"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Scene number with warning glow - OPTIMIZED */}
              <motion.div 
                className="flex items-center gap-4 mb-8"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <div className="relative">
                  <motion.span 
                    className="text-6xl font-black bg-gradient-to-br from-red-400 to-red-600 bg-clip-text text-transparent will-change-transform"
                    animate={{ 
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  >
                    02
                  </motion.span>
                  {/* Pulsing red alert - OPTIMIZED */}
                  <motion.div
                    className="absolute -inset-4 bg-red-500/20 rounded-full blur-2xl will-change-transform"
                    animate={{ 
                      scale: [1, 1.6, 1],
                      opacity: [0.2, 0.6, 0.2]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold leading-tight">O Resultado é<br/>Previsível</h3>
                </div>
              </motion.div>
              
              <motion.p 
                className="text-slate-700 text-base leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.9 }}
              >
                A sobrecarga leva ao <span className="text-red-700 font-semibold">esgotamento mental e criativo.</span>
              </motion.p>
              
              {/* Dramatic stat reveal card - OPTIMIZED */}
              <motion.div 
                className="relative h-80 rounded-3xl overflow-hidden will-change-transform"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.6, duration: 1, type: "spring", stiffness: 80, damping: 20 }}
                style={{ 
                  boxShadow: '0 50px 100px -20px rgba(248, 113, 113, 0.5), 0 0 0 1px rgba(248, 113, 113, 0.2)'
                }}
              >
                {/* Dark red gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-rose-50 to-white" />
                
                {/* Animated warning stripes - OPTIMIZED: slower */}
                <motion.div
                  className="absolute inset-0 opacity-10 will-change-transform"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(248, 113, 113, 0.3) 40px, rgba(248, 113, 113, 0.3) 80px)',
                  }}
                  animate={{ 
                    backgroundPosition: ['0px 0px', '80px 80px']
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                {/* Pulsing concentric warning rings - OPTIMIZED: 3→2 rings */}
                {[0, 1].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute inset-0 rounded-3xl border-2 border-red-500/30 will-change-transform"
                    animate={{ 
                      scale: [1, 1.3],
                      opacity: [0.4, 0]
                    }}
                    transition={{ 
                      duration: 2.4, 
                      repeat: Infinity,
                      delay: i * 1.2,
                      ease: "linear"
                    }}
                  />
                ))}
                
                {/* Center content - OPTIMIZED: removed rotate animation */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1, type: "spring", stiffness: 120, damping: 20 }}
                  >
                    <Counter70 />
                  </motion.div>
                  
                  <motion.p 
                    className="mt-8 text-sm text-slate-700 text-center px-6 uppercase tracking-[0.3em] font-semibold"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    dos creators já enfrentaram{" "}
                    <motion.span 
                      className="block mt-2 text-red-400 text-lg will-change-transform"
                      animate={{ 
                        opacity: [1, 0.6, 1]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                    >
                      BURNOUT
                    </motion.span>
                  </motion.p>
                </div>
                
                {/* Vignette */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,rgba(0,0,0,0.6)_100%)]" />
              </motion.div>
            </motion.div>

            {/* Step 3: The Shortcut with typing animation */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 0.9,
                type: "spring",
                stiffness: 60
              }}
              className="space-y-6"
            >
              <motion.div 
                className="flex items-center gap-4 mb-6"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <motion.span 
                  className="text-5xl font-black text-amber-500/40 will-change-transform"
                  animate={{ 
                    scale: [1, 1.08, 1]
                  }}
                  transition={{ delay: 0.4, duration: 2.5, repeat: Infinity, ease: "linear" }}
                >
                  03
                </motion.span>
                <h3 className="text-2xl font-bold">O Atalho Perigoso</h3>
              </motion.div>
              
              <motion.p 
                className="text-slate-400 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Para economizar tempo, criadores usam IAs para trabalhar POR elas: <span className="text-amber-400 font-medium">Mas se a essência do criador é criar...</span>
              </motion.p>
              
              <motion.div 
                className="relative h-64 rounded-2xl bg-gradient-to-br from-amber-950/20 via-slate-950 to-slate-950 border border-amber-500/20 p-6 flex flex-col justify-center shadow-2xl shadow-amber-900/20 overflow-hidden will-change-transform"
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
              >
                {/* Scanline effect - OPTIMIZED: slower */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent h-20 will-change-transform"
                  animate={{ 
                    y: ['0%', '400%']
                  }}
                  transition={{ 
                    duration: 4.5, 
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                  className="space-y-4 relative z-10"
                >
                  <motion.div 
                    className="flex items-center gap-3 text-sm text-slate-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <motion.div 
                      className="w-2.5 h-2.5 bg-green-500 rounded-full will-change-transform"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.5, 1]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <span>IA genérica gerando roteiro...</span>
                  </motion.div>
                  
                  <motion.div 
                    className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-xs text-slate-500 italic backdrop-blur-sm"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <motion.span
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ delay: 1, duration: 2 }}
                      className="inline-block overflow-hidden whitespace-nowrap"
                    >
                      "Olá pessoal, hoje vou mostrar 5 dicas para aumentar o engajamento..."
                    </motion.span>
                  </motion.div>
                  
                  <motion.p 
                    className="text-xs text-red-400 mt-3 font-medium flex items-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    <motion.span
                      className="will-change-transform"
                      animate={{ rotate: [0, 8, -8, 0] }}
                      transition={{ duration: 2, ease: "linear", repeat: Infinity }}
                    >
                      ❌
                    </motion.span>
                    Superficial. Sem alma. Genérico.
                  </motion.p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Step 4: The Consequence with dramatic entrance */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 0.9,
                type: "spring",
                stiffness: 60
              }}
              className="space-y-6"
            >
              <motion.div 
                className="flex items-center gap-4 mb-6"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.7 }}
              >
                <motion.span 
                  className="text-5xl font-black text-red-600/40 will-change-transform"
                  animate={{ 
                    scale: [1, 1.08, 1]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                >
                  04
                </motion.span>
                <h3 className="text-2xl font-bold">A Consequência</h3>
              </motion.div>
              
              <motion.p 
                className="text-slate-400 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Para quem cria: Fazer conteúdo se torna massante, pouco recompensador.
              </motion.p>

              <motion.p 
                className="text-slate-400 text-sm leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Para a audiência: Excesso de conteúdo genérico, superficial gera desinteresse e afastamento.
              </motion.p>
              
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100, damping: 20 }}
                className="will-change-transform"
              >
                <GlitchHoverCard />
              </motion.div>
            </motion.div>
          </div>

          {/* DESKTOP: Enhanced Cinematic Layout */}
          <div className="hidden md:block">
            <motion.div 
              className="text-center mb-24"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-3xl text-slate-400 mb-16 font-light"
              >
                A Agência de Uma Pessoa Só.
              </motion.h3>

              <div className="relative inline-block">
                {/* Desktop orbit with enhanced animations */}
                <div className="absolute -inset-40 -z-10">
                  <motion.div 
                    className="absolute inset-0 rounded-full border border-white/10"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {[
                    { label: "Roteiro", angle: 0, color: "indigo" },
                    { label: "Edição", angle: 90, color: "purple" },
                    { label: "Directs", angle: 180, color: "pink" },
                    { label: "Publi", angle: 270, color: "blue" },
                  ].map((p, i) => (
                    <motion.div
                      key={i}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      style={{ transformOrigin: "0 0" }}
                    >
                      <motion.div
                        className="translate-x-[240px]"
                        style={{ transform: `translateX(240px) rotate(${p.angle}deg)` }}
                        whileHover={{ scale: 1.2 }}
                      >
                        <motion.div 
                          className={`backdrop-blur-xl bg-white/8 border border-${p.color}-500/30 rounded-full px-4 py-2 text-sm text-slate-300 shadow-[0_0_24px_rgba(99,102,241,0.3)] cursor-pointer`}
                          animate={{ 
                            y: [0, -5, 0],
                            boxShadow: [
                              "0 0 24px rgba(99,102,241,0.3)",
                              "0 0 32px rgba(99,102,241,0.5)",
                              "0 0 24px rgba(99,102,241,0.3)"
                            ]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        >
                          {p.label}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                <div className="absolute inset-0 -z-5 bg-[radial-gradient(circle_at_center,transparent_20%,#050505_80%)]" />

                <motion.div 
                  className="relative z-10"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 1,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100
                  }}
                >
                  <Counter70 />
                </motion.div>
                
                <motion.p 
                  className="relative z-10 mt-6 text-sm uppercase tracking-[0.3em] text-slate-400"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  dos Creators já enfrentaram{" "}
                  <motion.span 
                    className="text-red-400 font-semibold"
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(248, 113, 113, 0.5)",
                        "0 0 20px rgba(248, 113, 113, 0.8)",
                        "0 0 10px rgba(248, 113, 113, 0.5)"
                      ]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity
                    }}
                  >
                    Burnout
                  </motion.span>
                  .
                </motion.p>
              </div>
            </motion.div>

            {/* Enhanced Glitch Separator */}
            <div className="relative mt-32 mb-20 h-16">
              <div className="absolute inset-0 [background:repeating-linear-gradient(90deg,#111_0_12px,#181818_12px_24px)]" />
              <motion.div
                initial={{ clipPath: "polygon(0 60%, 15% 55%, 30% 62%, 50% 50%, 70% 58%, 85% 52%, 100% 60%, 100% 100%, 0 100%)" }}
                animate={{ clipPath: [
                  "polygon(0 60%, 15% 55%, 30% 62%, 50% 50%, 70% 58%, 85% 52%, 100% 60%, 100% 100%, 0 100%)",
                  "polygon(0 62%, 14% 57%, 32% 64%, 49% 52%, 71% 60%, 86% 54%, 100% 62%, 100% 100%, 0 100%)",
                  "polygon(0 60%, 15% 55%, 30% 62%, 50% 50%, 70% 58%, 85% 52%, 100% 60%, 100% 100%, 0 100%)"
                ] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-r from-red-600/40 via-indigo-600/30 to-transparent mix-blend-screen" 
              />
              
              {/* Floating particles */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/40 rounded-full"
                  style={{ 
                    left: `${20 + i * 15}%`,
                    top: '50%'
                  }}
                  animate={{ 
                    y: [-20, 20, -20],
                    opacity: [0.2, 0.6, 0.2]
                  }}
                  transition={{ 
                    duration: 2 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>

            {/* Enhanced Glitch Card Section */}
            <motion.div 
              className="grid md:grid-cols-2 gap-12 items-center"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.2 }}
              >
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
                >
                  O Atalho que Mata a Arte.
                </motion.h3>
                
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="h-1 w-24 bg-gradient-to-r from-red-500 to-amber-500 rounded-full mb-6"
                />
                
                <motion.p
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-slate-400 text-lg leading-relaxed max-w-xl"
                >
                  Na busca por tempo, economiza-se na alma. Roteiros genéricos geram um feed{" "}
                  <motion.span 
                    className="text-red-400 font-semibold"
                    whileHover={{ 
                      scale: 1.05,
                      textShadow: "0 0 10px rgba(248, 113, 113, 0.8)"
                    }}
                  >
                    tóxico
                  </motion.span>
                  , superficial — o criador perde sua essência.
                </motion.p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: 0.3 }}
              >
                <GlitchHoverCard />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4) Por que existe a InfluIA / A solução */}
      <section className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.h3 className="text-3xl font-bold mb-4 tracking-tight" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Por que existe a InfluIA?
          </motion.h3>
          <p className="text-muted-foreground mb-6">A InfluIA poupa tempo onde ele deve ser poupado e devolve autonomia ao criador de conteúdo, promovendo conteúdos mais genuínos, com essência e valor.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Calendar, title: "Agenda & Operação", description: "Gestão de agenda, produção e execução sem fricção." },
              { icon: TrendingUp, title: "CRM & Parcerias", description: "Relacionamento e oportunidades organizadas em um só fluxo." },
              { icon: Shield, title: "WhatsApp-first", description: "Tudo acontece onde o creator já está, sem mais um app." },
            ].map((f, i) => (
              <motion.div key={i} className="bg-slate-950/50 border border-white/10 rounded-2xl p-6" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <f.icon className="w-10 h-10 text-indigo-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2 tracking-tight">{f.title}</h4>
                <p className="text-muted-foreground">{f.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-6">
            <Button asChild><a href="/influia">Ver mais funcionalidades</a></Button>
          </div>
        </div>
      </section>

      {/* SECTION 4: THE SOLUTION (Fixed Phone com JS) */}
      <section ref={solutionRef as any} className="relative w-full bg-gradient-to-b from-indigo-50 via-emerald-50 to-white overflow-hidden">
        {/* Parallax Background Image - Success/Solution */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: solutionBgY }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-12 scale-110"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2000&q=80)',
            }}
          />
          {/* Gradient overlay with brand colors */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/90 via-emerald-50/80 to-white/95" />
        </motion.div>
        
        {/* Animated gradient orbs for depth */}
        <motion.div
          className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl z-[1]"
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-400/25 rounded-full blur-3xl z-[1]"
          animate={{ 
            x: [0, -50, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* MOBILE: Fixed com JavaScript */}
        <div className="md:hidden px-6 py-20 relative z-10">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-slate-900">
              A Solução <span className="text-emerald-600">InfluIA</span>
            </h2>
            <p className="text-slate-600 text-lg">Seu copiloto de IA para criadores</p>
          </div>

          {/* Container com altura para scroll */}
          <div style={{ height: '500vh', position: 'relative' }}>
            {/* Phone will be fixed via Portal when scrolling */}
            <FixedPhoneSection />
          </div>
        </div>

        {/* DESKTOP: Sticky Scroll */}
        <div className="hidden md:block relative max-w-7xl mx-auto px-12 py-32 z-10">
          <div className="grid lg:grid-cols-[1fr_480px_1fr] gap-8">
            {/* Left column */}
            <div className="space-y-[60vh]">
              <div className="min-h-[60vh] flex items-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="bg-white/80 backdrop-blur-xl border-2 border-indigo-200 rounded-2xl p-6 shadow-xl shadow-indigo-200/50 max-w-md ml-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">Gestão de Agenda</h3>
                  <p className="mt-2 text-slate-600">Você pede, ela marca.</p>
                </motion.div>
              </div>
              <div className="min-h-[60vh] flex items-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="bg-white/80 backdrop-blur-xl border-2 border-indigo-200 rounded-2xl p-6 shadow-xl shadow-indigo-200/50 max-w-md ml-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">Inteligência Real</h3>
                  <p className="mt-2 text-slate-600">Táticas validadas, não alucinações.</p>
                </motion.div>
              </div>
            </div>

            {/* Sticky phone center */}
            <div className="relative">
              <div className="sticky top-24 flex justify-center">
                <PhoneStickyDesktop />
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-[60vh]">
              <div className="min-h-[60vh] flex items-center">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }} className="bg-white/80 backdrop-blur-xl border-2 border-emerald-200 rounded-2xl p-6 shadow-xl shadow-emerald-200/50 max-w-md mr-auto">
                  <h3 className="text-2xl font-bold tracking-tight text-slate-900">CRM Automático</h3>
                  <p className="mt-2 text-slate-600">Nunca mais perca um lead.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE APPEAL (Why Support?) */}
      <section className="relative min-h-[70vh] px-6 py-32 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white via-amber-50 to-orange-50">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495616811223-4d98c6e9d869?auto=format&fit=crop&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-orange-50/80 via-amber-50/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[180px] bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.25),transparent_70%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900">
            Não é sobre um app. É sobre o futuro da mente dos jovens.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed">
            Contribuir para a Influ.IA é votar em uma internet onde a tecnologia serve à saúde mental, não à exaustão.
            Apoiando a InfluIA você se torna parte de um movimento que luta para devolver propósito e saúde aos criadores.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }} className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded-2xl shadow-[0_0_30px_rgba(251,191,36,0.5)]" asChild>
              <a href="https://benfeitoria.com" target="_blank" rel="noopener noreferrer">Apoiar na Benfeitoria</a>
            </Button>
            <Button variant="outline" className="rounded-2xl border-white/20" asChild>
              <a href="/apoie">Outras formas de apoiar</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: THE VIP CONTACT (Angel Investor) */}
      <section className="relative px-6 py-24 bg-gradient-to-b from-orange-50 to-slate-50">
        <div className="absolute inset-x-0 bottom-0 h-[160px] bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.15),transparent_75%)]" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white border-2 border-amber-200 rounded-3xl p-10 shadow-2xl shadow-amber-200/50">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Quer apoiar com grandes valores e ter uma chance de ter parte da InfluIA?</h3>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-emerald-700" />
              </div>
              <a href="tel:+5561981772703" className="text-lg font-semibold text-slate-900 hover:text-amber-600 transition">
                Fale conosco: (61) 98177-2703
              </a>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <PhoneCall className="w-4 h-4" /> <span>Atendimento privado para conhecer a fundo planejamento e estratégias.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: EDUCATIONAL FAQ (Accordion) */}
      <section className="relative px-6 py-32 bg-slate-50">
        <div className="absolute inset-x-0 bottom-0 h-[140px] bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.15),transparent_70%)]" />
        <div className="relative max-w-5xl mx-auto">
          <motion.h3 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-12 text-slate-900">
            Perguntas Frequentes & Conceitos
          </motion.h3>
          <div className="bg-white border-2 border-indigo-200 rounded-3xl p-6 md:p-10 shadow-2xl shadow-indigo-200/40">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-1" className="border-slate-200 rounded-xl px-4">
                <AccordionTrigger className="text-slate-900">Quem somos?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  Somos a união da Singular (Venture Builder de tecnologia) e do Movimento +Creator (Iniciativa de regeneração digital). Tecnologia com propósito.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-slate-200 rounded-xl px-4">
                <AccordionTrigger className="text-slate-900">O que exatamente é a Influ.IA? É mais um gerador de conteúdo por Inteligência Artificial</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  A Influ.IA é mais do que um gerador. É uma Inteligência de Suporte apoiada pelo movimento +Creator. Foca em automatizar tudo o que exaure o criador (gestão, agenda, parcerias). Nossa tecnologia serve à essência do criador, não a substitui.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-slate-200 rounded-xl px-4">
                <AccordionTrigger className="text-slate-900">Para usar a Influ.IA, o criador precisa ser muito familiarizado com tecnologia?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  Não. Desenvolvemos a operação via WhatsApp e uma interface simplificada. O objetivo é ter baixo atrito: a tecnologia atua nos bastidores para facilitar a vida, e não complicá-la.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-slate-200 rounded-xl px-4">
                <AccordionTrigger className="text-slate-900">O que significa "Fricção Zero na operação via WhatsApp"?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  A fricção é a dificuldade ou o esforço que o usuário precisa fazer para usar um produto. Oferecer a operação via WhatsApp significa que o criador pode gerenciar a agenda, parcerias e tarefas sem sair do seu ambiente de trabalho principal. É a máxima facilidade para garantir o uso constante e a adesão.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border-slate-200 rounded-xl px-4">
                <AccordionTrigger className="text-slate-900">Quais são os principais diferenciais da Influ.IA em relação às outras ferramentas de mercado?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  O maior diferencial é a nossa filosofia: o foco não é na criação, mas na gestão eficiente e na essência. Nossas funcionalidades liberam o tempo do criador para que ele se dedique à sua autenticidade.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6" className="border-slate-200 rounded-xl px-4">
                <AccordionTrigger className="text-slate-900">O que é Crowdfunding?</AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  Financiamento Coletivo. É como uma "vaquinha", mas para empresas. Você apoia o nascimento do projeto e recebe recompensas ou participação.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION 8: FOOTER & FINAL CTA */}
      <footer className="relative px-6 py-32 text-center overflow-hidden bg-gradient-to-b from-slate-50 via-amber-50 to-orange-100">
        <div className="absolute inset-x-0 bottom-0 h-[220px] bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.3),transparent_75%)]" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-10 text-slate-900">
            Faça parte da Regeneração.
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="flex flex-col items-center gap-5">
            <Button size="lg" className="relative bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-2xl px-10 py-5 shadow-2xl shadow-amber-300/60">
              <span className="absolute inset-0 rounded-2xl bg-amber-400/30" aria-hidden />
              <a href="https://benfeitoria.com" target="_blank" rel="noopener noreferrer">Apoiar na Benfeitoria</a>
            </Button>
            <a href="#beta-form" className="text-slate-700 text-sm underline decoration-amber-500/60 hover:decoration-amber-500 font-medium">Formulário Beta</a>
          </motion.div>
          <p className="mt-12 text-xs text-slate-500">© 2025 Influ.IA - Uma empresa Singular.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
// Sticky phone centerpiece with step-reactive chat content (Desktop)
const PhoneStickyDesktop = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  // Map progress to step visibility (fade in and STAY)
  const step1Opacity = useTransform(scrollYProgress, [0.0, 0.2], [0, 1]);
  const step2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const step3Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);

  return (
    <div ref={containerRef} className="relative w-[400px] h-[780px]">
      {/* Phone body */}
      <div className="relative w-full h-full rounded-[40px] bg-black/85 border-2 border-white/15 shadow-[0_60px_160px_-60px_rgba(37,99,235,0.35)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-10" />
        {/* Screen */}
        <div className="absolute inset-3 rounded-[34px] bg-slate-950 border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="h-14 px-5 flex items-center gap-3 border-b border-white/10 bg-black/30">
            <div className="h-9 w-9 rounded-full bg-emerald-500/20 border border-emerald-400/40" />
            <div>
              <p className="text-sm font-semibold">Influ.IA</p>
              <p className="text-xs text-slate-400">online • seguro</p>
            </div>
          </div>
          {/* Chat body */}
          <div className="p-5 space-y-3">
            {/* User message */}
            <motion.div style={{ opacity: step1Opacity }} className="flex justify-end">
              <div className="max-w-[85%] bg-indigo-600 text-white px-4 py-2 rounded-2xl rounded-br-sm shadow-lg">
                Marca uma reunião com a Singular amanhã às 14h.
              </div>
            </motion.div>
            {/* Typing indicator */}
            <motion.div style={{ opacity: step2Opacity }} className="flex justify-start">
              <div className="bg-white/10 text-slate-300 px-4 py-2 rounded-2xl rounded-bl-sm border border-white/10">
                Checando agenda...
              </div>
            </motion.div>
            {/* Final response */}
            <motion.div style={{ opacity: step3Opacity }} className="flex justify-start">
              <div className="max-w-[85%] bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-lg">
                Feito! Convite enviado e CRM atualizado. Bloqueie sua tarde para preparação.
              </div>
            </motion.div>
          </div>
          {/* Input */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 border-t border-white/10">
            <div className="h-11 bg-white/5 border border-white/10 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile phone mockup with scroll-reactive chat (Overlay Scrollytelling)
const PhoneMobileSticky = ({ currentStep }: { currentStep: number }) => {
  const conversations = [
    {
      user: "Quero falar sobre burnout criativo. Me ajuda a estruturar?",
      typing: "Analisando tema...",
      ai: "Que tal começar com sua experiência pessoal? Use storytelling + dados de pesquisa. Gancho: 'Acordo às 6h mas não crio nada até as 14h'"
    },
    {
      user: "Monta meu calendário editorial da próxima semana.",
      typing: "Checando tendências e timing...",
      ai: "Seg - reel educativo (18h), Qua - carrossel de dicas (12h), Sex - bastidor (20h). Foco: autenticidade."
    },
    {
      user: "Organiza as marcas que ofereceram publi esse mês.",
      typing: "Categorizando ofertas...",
      ai: "3 marcas tech (R$ 5-8k), 2 lifestyle (R$ 3k), 1 saúde (R$ 10k). Melhor fit: marca tech alinhada com seu nicho."
    }
  ];

  const activeConvo = conversations[currentStep - 1] || conversations[0];

  return (
    <div style={{ width: '340px', margin: '0 auto' }}>
      <div className="relative w-full aspect-[9/19] rounded-[36px] bg-gradient-to-br from-slate-900 to-black border-4 border-slate-700 shadow-2xl shadow-indigo-500/30">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20" />
        
        {/* Screen */}
        <div className="absolute inset-3 rounded-[28px] bg-slate-950 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="h-16 px-4 flex items-center gap-3 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm shrink-0">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shrink-0">
              <Brain className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white">Influ.IA</p>
              <p className="text-xs text-emerald-400">● online</p>
            </div>
          </div>

          {/* Chat body */}
          <div className="flex-1 p-4 space-y-3 overflow-hidden min-h-0">
            {/* User message */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              key={`user-${currentStep}`}
              className="flex justify-end"
            >
              <div className="max-w-[80%] bg-indigo-600 text-white px-4 py-3 rounded-2xl rounded-br-md text-sm font-medium shadow-lg">
                {activeConvo.user}
              </div>
            </motion.div>

            {/* Typing indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              key={`typing-${currentStep}`}
              className="flex justify-start"
            >
              <div className="bg-slate-800 text-slate-300 px-4 py-3 rounded-2xl rounded-bl-md text-sm border border-slate-700">
                {activeConvo.typing}
              </div>
            </motion.div>

            {/* AI response */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              key={`ai-${currentStep}`}
              className="flex justify-start"
            >
              <div className="max-w-[80%] bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-bl-md text-sm font-medium shadow-lg">
                {activeConvo.ai}
              </div>
            </motion.div>
          </div>

          {/* Input bar */}
          <div className="p-3 border-t border-slate-800 bg-slate-900/50 backdrop-blur-sm shrink-0">
            <div className="h-11 bg-slate-800 border border-slate-700 rounded-xl flex items-center px-4">
              <MessageCircle className="h-4 w-4 text-slate-500" />
            </div>
          </div>
        </div>

        {/* Power button */}
        <div className="absolute right-0 top-24 w-1 h-12 bg-slate-700 rounded-l-sm" />
      </div>
    </div>
  );
};

// Fixed phone section with cards
const FixedPhoneSection = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if section is in viewport
      const shouldBeFixed = rect.top <= 0 && rect.bottom >= windowHeight;
      setIsFixed(shouldBeFixed);
      
      if (shouldBeFixed) {
        const totalScrollHeight = rect.height - windowHeight;
        const currentScroll = Math.abs(rect.top);
        const progress = currentScroll / totalScrollHeight;
        setScrollProgress(Math.min(Math.max(progress, 0), 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStep = scrollProgress < 0.33 ? 1 : scrollProgress < 0.66 ? 2 : 3;

  return (
    <>
      {/* Tall container for scrolling */}
      <div ref={containerRef} style={{ height: '500vh', position: 'relative' }}>
        {/* Cards that scroll */}
        <div style={{ position: 'absolute', top: '80vh', left: 0, right: 0, zIndex: 10, padding: '0 1.5rem' }}>
          <div style={{ marginBottom: '120vh' }}>
            <FeatureCardMobile
              icon={Brain}
              title="Potencialize Suas Ideias Criativas"
              description="Você tem a ideia, a IA estrutura. Sugestões de ganchos, ângulos narrativos e técnicas de storytelling para turbinar seu conteúdo."
              step={1}
            />
          </div>
          
          <div style={{ marginBottom: '120vh' }}>
            <FeatureCardMobile
              icon={Calendar}
              title="Calendário Editorial Inteligente"
              description="Planeje sua semana baseado em tendências, melhor timing e performance. A IA sugere, você decide."
              step={2}
            />
          </div>

          <div>
            <FeatureCardMobile
              icon={TrendingUp}
              title="Organize Oportunidades de Publi"
              description="Categorize ofertas de marcas, analise fit com seu nicho e priorize as melhores oportunidades comerciais."
              step={3}
            />
          </div>
        </div>
      </div>

      {/* Fixed phone */}
      <AnimatePresence>
        {isFixed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%', y: '-50%' }}
            exit={{ opacity: 0, scale: 0.8, x: '-50%', y: '-50%' }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              zIndex: 0,
              pointerEvents: 'none',
              width: '90vw',
              maxWidth: '380px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <PhoneMobileSticky currentStep={currentStep} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Scroll-triggered phone that updates based on viewport position
const ScrollTriggerPhone = () => {
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const section4Top = document.querySelector('section')?.offsetTop || 0;
      const relativeScroll = scrollY - section4Top;

      // Update step based on scroll position
      if (relativeScroll > 800) {
        setCurrentStep(2);
      } else {
        setCurrentStep(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <PhoneMobileSticky currentStep={currentStep} />;
};

// Mobile feature card with heavy glassmorphism
const FeatureCardMobile = ({ icon: Icon, title, description, step }: { icon: any; title: string; description: string; step: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full"
    >
      <div className="bg-black/70 backdrop-blur-xl border-2 border-white/20 rounded-3xl p-8 shadow-[0_20px_70px_-20px_rgba(79,70,229,0.6)]">
        <div className="flex items-start gap-5">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center flex-shrink-0 shadow-lg">
            <Icon className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
            <p className="text-slate-300 text-base leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Glitch portrait component (inline for now; can be extracted later)
const GlitchPortrait = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const glitchShift = useTransform(scrollYProgress, [0, 1], [0, 12]);
  const glitchHue = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const glitchFilter = useTransform(glitchHue, (h) => `saturate(0.85) hue-rotate(${h}deg)`);

  return (
    <motion.div
      ref={ref}
      className="relative w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative rounded-2xl overflow-hidden group">
        {/* Base image */}
        <motion.img
          src="https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?auto=format&fit=crop&q=80"
          alt="Retrato cansado de creator"
          className="w-full h-auto object-cover select-none"
          style={{ filter: glitchFilter }}
          draggable={false}
        />
        {/* Glitch layers */}
        <motion.div
          aria-hidden
          style={{ x: glitchShift }}
          className="absolute inset-0 mix-blend-screen opacity-40 group-hover:opacity-60 transition-opacity duration-500"
        >
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(99,102,241,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(300deg,rgba(239,68,68,0.2),transparent_55%)]" />
        </motion.div>
  {/* Noise overlay simplified */}
  <div className="pointer-events-none absolute inset-0 opacity-15 bg-[repeating-linear-gradient(45deg,#ffffff0d_0_2px,transparent_2px_4px)]" />
  {/* Frame */}
  <div className="absolute inset-0 rounded-2xl ring-1 ring-white/15" />
      </div>
      <p className="mt-4 text-xs text-slate-500">Degradação da essência criativa representada pelo efeito glitch.</p>
    </motion.div>
  );
};

// CounterUp to 70% component with useInView fix
const Counter70 = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = 70;
    const duration = 1500; // 1.5 seconds
    const increment = end / (duration / 16); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <div ref={ref} className="relative">
      <motion.span
        className="text-[120px] leading-none font-bold tracking-tight text-red-500 drop-shadow-[0_0_14px_rgba(239,68,68,0.45)]"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8 }}
      >
        {count}%
      </motion.span>
    </div>
  );
};

// Glitch hover image card
const GlitchHoverCard = () => {
  return (
    <div className="relative w-full max-w-xl mx-auto rounded-2xl overflow-hidden group bg-white/5 backdrop-blur-xl border border-white/10">
      <div className="grid grid-cols-1">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?auto=format&fit=crop&q=80"
            alt="Criador cansado em sala escura"
            className="w-full h-auto object-cover select-none"
            draggable={false}
          />
          {/* Glitch RGB layers on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 mix-blend-screen">
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(239,68,68,0.25),transparent_60%)] translate-x-1" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(59,130,246,0.25),transparent_60%)] -translate-x-1" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(16,185,129,0.25),transparent_60%)] translate-y-1" />
          </div>
          {/* Subtle shift on hover */}
          <div className="absolute inset-0 group-hover:animate-pulse" />
        </div>
      </div>
    </div>
  );
};
