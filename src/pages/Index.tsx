import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Shield, Leaf, Brain, User, MessageCircle, PhoneCall } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useRef, useState, useEffect } from "react";

// Problem Steps Components - VERSÃO CINEMATOGRÁFICA UNIFICADA
const ProblemStep1 = () => (
  <div className="relative w-full h-full overflow-hidden">
    {/* Background image - tela cheia */}
    <div className="absolute inset-0">
      <img 
        src="/images/criadorfaztudo.webp" 
        alt="Criador trabalhando"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay gradient escuro */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
    </div>

    {/* Content - canto inferior esquerdo (estilo cinema) */}
    <div className="absolute bottom-20 left-8 right-8 z-10">
      {/* Badge superior */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-4"
      >
        <span className="inline-block px-4 py-1.5 bg-indigo-600/90 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider">
          Capítulo 01
        </span>
      </motion.div>

      {/* Título principal */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-4xl md:text-6xl font-black text-white mb-4 leading-[1.1] drop-shadow-2xl"
      >
        Uma Linha de Produção<br/>de Uma Pessoa Só
      </motion.h3>

      {/* Descrição */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-slate-100 text-base md:text-lg leading-relaxed max-w-[500px] drop-shadow-lg mb-6"
      >
        Roteiros, filmagens, edição de vídeo, gestão de agendas, negociações... <span className="text-indigo-300 font-semibold">O criador faz tudo sozinho.</span>
      </motion.p>

      {/* Task pills cinematográficos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex flex-wrap gap-2 max-w-[500px]"
      >
        {["Roteiro", "Edição", "Agenda", "Publis", "DMs", "Vendas"].map((task, i) => (
          <motion.div
            key={task}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              delay: 1 + i * 0.1,
              type: "spring",
              stiffness: 200
            }}
            className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-xs text-white font-medium"
          >
            {task}
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Letterbox bars - efeito cinema */}
    <div className="absolute top-0 left-0 right-0 h-16 bg-black/60 backdrop-blur-sm" />
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/60 backdrop-blur-sm" />
  </div>
);

const ProblemStep2 = () => {
  const stats = [
    {
      number: "67%",
      text: "dos criadores são afetados por problemas de saúde mental",
      source: "The Creator Mental Health Report",
      org: "Healthy Gamer & Stream Hatchet"
    },
    {
      number: "22,2%",
      text: "dos criadores sofriam de transtorno de ansiedade",
      source: "Fast Company Brasil",
      org: "Creators e Saúde Mental"
    },
    {
      number: "79%",
      text: "já experienciaram burnout",
      source: "Creator Economy Survey",
      org: "Mental Health & Stress"
    },
    {
      number: "78%",
      text: "dos influenciadores sofrem de burnout",
      source: "Awin & ShareASale",
      org: "Creator Burnout Survey 2022"
    },
    {
      number: "6,4%",
      text: "dos criadores sofrem de depressão",
      source: "Fast Company Brasil",
      org: "Saúde Mental Report"
    }
  ];

  const [currentStat, setCurrentStat] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Background image - tela cheia */}
      <div className="absolute inset-0">
        <img 
          src="/images/o-resultado.webp" 
          alt="Pessoa estressada"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay gradient vermelho escuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/80 to-black/50" />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      </div>

      {/* Content - canto inferior esquerdo */}
      <div className="absolute bottom-20 left-8 right-8 z-10">
        {/* Badge superior */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1.5 bg-red-600/90 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider">
            Capítulo 02
          </span>
        </motion.div>

        {/* Título principal */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-4xl md:text-6xl font-black text-white mb-4 leading-[1.1] drop-shadow-2xl"
        >
          O Resultado é<br/>Previsível
        </motion.h3>

        {/* Descrição */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-slate-100 text-base md:text-lg leading-relaxed max-w-[500px] drop-shadow-lg mb-6"
        >
          A sobrecarga leva ao <span className="text-red-300 font-semibold">esgotamento mental e criativo.</span>
        </motion.p>

        {/* Estatística rotativa - versão cinematográfica */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStat}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-black/40 backdrop-blur-md border border-red-500/30 rounded-2xl p-6 max-w-[500px]"
          >
            <div className="text-6xl md:text-7xl font-black text-red-400 mb-3 drop-shadow-lg">
              {stats[currentStat].number}
            </div>
            <p className="text-white text-sm md:text-base font-medium mb-3 leading-relaxed">
              {stats[currentStat].text}
            </p>
            <div className="text-slate-400 text-xs">
              <p className="font-semibold">{stats[currentStat].source}</p>
              <p className="opacity-70">{stats[currentStat].org}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex gap-2 mt-6"
        >
          {stats.map((_, i) => (
            <div
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === currentStat ? 'w-8 bg-red-400' : 'w-1 bg-white/30'
              }`}
            />
          ))}
        </motion.div>
      </div>

      {/* Letterbox bars */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-black/60 backdrop-blur-sm" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/60 backdrop-blur-sm" />
    </div>
  );
};

const ProblemStep3 = () => (
  <div className="relative w-full h-full overflow-hidden">
    {/* Background image - tela cheia */}
    <div className="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80" 
        alt="IA no celular"
        className="w-full h-full object-cover"
      />
      
      {/* Overlay gradient laranja escuro */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-orange-950/80 to-black/50" />
      
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.5)_100%)]" />
    </div>

    {/* Content - canto inferior esquerdo */}
    <div className="absolute bottom-20 left-8 right-8 z-10">
      {/* Badge superior */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-4"
      >
        <span className="inline-block px-4 py-1.5 bg-orange-600/90 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider">
          Capítulo 03
        </span>
      </motion.div>

      {/* Título principal */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-4xl md:text-6xl font-black text-white mb-4 leading-[1.1] drop-shadow-2xl"
      >
        O Atalho<br/>Perigoso
      </motion.h3>

      {/* Descrição */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-slate-100 text-base md:text-lg leading-relaxed max-w-[500px] drop-shadow-lg mb-6"
      >
        Para economizar tempo, criadores usam IAs para trabalhar <span className="text-orange-300 font-semibold">POR elas.</span>
      </motion.p>

      {/* Warning box cinematográfico */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="bg-black/40 backdrop-blur-md border border-orange-500/30 rounded-2xl p-6 max-w-[500px]"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-2xl font-bold">!</span>
          </div>
          <div className="flex-1">
            <p className="text-white text-sm font-semibold mb-2">Conteúdo genérico detectado</p>
            <p className="text-slate-300 text-xs leading-relaxed mb-3">
              "Olá pessoal, hoje vou mostrar 5 dicas para aumentar o engajamento..."
            </p>
            <p className="text-orange-400 text-xs font-medium">
              Sem personalidade. Sem alma. Sem você.
            </p>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Letterbox bars */}
    <div className="absolute top-0 left-0 right-0 h-16 bg-black/60 backdrop-blur-sm" />
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/60 backdrop-blur-sm" />
  </div>
);

const ProblemStep4 = () => (
  <div className="relative w-full h-full overflow-hidden">
    {/* Background image - tela cheia - SPLIT SCREEN */}
    <div className="absolute inset-0 flex">
      {/* Left half - Burnout */}
      <div className="relative w-1/2">
        <img 
          src="/images/burnoutcriativo.webp"  
          alt="Burnout"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30" />
      </div>
      
      {/* Right half - Audiência entediada */}
      <div className="relative w-1/2">
        <img 
          src="/images/semgraca1.webp" 
          alt="Audiência entediada"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30" />
      </div>
      
      {/* Vignette geral */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
    </div>

    {/* Content - canto inferior esquerdo (estilo Netflix/cinema) */}
    <div className="absolute bottom-20 left-8 right-8 z-10">
      {/* Badge superior */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="mb-4"
      >
        <span className="inline-block px-4 py-1.5 bg-red-600/90 backdrop-blur-md rounded-full text-xs font-bold text-white uppercase tracking-wider">
          Capítulo 04
        </span>
      </motion.div>

      {/* Título principal */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-4xl md:text-5xl font-black text-white mb-3 leading-[1.1] drop-shadow-2xl"
      >
        As<br/>Consequências
      </motion.h3>

      {/* Descrição */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="space-y-3 max-w-[420px]"
      >
        <p className="text-slate-200 text-sm leading-relaxed drop-shadow-lg">
          <span className="text-red-300 font-semibold">Para o criador:</span> Burnout criativo. Fazer conteúdo se torna massante e pouco recompensador.
        </p>
        <p className="text-slate-200 text-sm leading-relaxed drop-shadow-lg">
          <span className="text-red-300 font-semibold">Para a audiência:</span> Conteúdo genérico gera desinteresse e afastamento.
        </p>
      </motion.div>
    </div>

    {/* Letterbox bars - efeito cinema */}
    <div className="absolute top-0 left-0 right-0 h-16 bg-black/60 backdrop-blur-sm" />
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-black/60 backdrop-blur-sm" />
  </div>
);

// Simple Problem Cards for Mobile - ESTÁTICO E CLARO
const SimpleProblemCards = () => {
  const problems = [
    {
      number: "01",
      title: "Uma Linha de Produção de Uma Pessoa Só",
      description: "Roteiros, filmagens, edição de vídeo, gestão de agendas, negociações... O criador faz tudo sozinho.",
      image: "/images/criadorfaztudo.webp",
      color: "indigo",
      tasks: ["Roteiro", "Edição", "Agenda", "Publis", "DMs", "Vendas"]
    },
    {
      number: "02",
      title: "O Resultado é Previsível",
      description: "A sobrecarga leva ao esgotamento mental e criativo.",
      image: "/images/o-resultado.webp",
      color: "red",
      stat: "70%",
      statText: "dos criadores já enfrentaram burnout"
    },
    {
      number: "03",
      title: "O Atalho Perigoso",
      description: "Para economizar tempo, criadores usam IAs para trabalhar POR elas.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80",
      color: "orange",
      warning: "Conteúdo genérico detectado",
      warningText: "Sem personalidade. Sem alma. Sem você."
    },
    {
      number: "04",
      title: "As Consequências",
      description: "Para o criador: Burnout criativo. Para a audiência: Conteúdo sem graça que afasta.",
      image: "/images/burnoutcriativo.webp",
      color: "red",
      dual: true
    }
  ];

  const colorMap: Record<string, { badge: string; border: string; text: string }> = {
    indigo: { badge: "bg-indigo-600", border: "border-indigo-200", text: "text-indigo-600" },
    red: { badge: "bg-red-600", border: "border-red-200", text: "text-red-600" },
    orange: { badge: "bg-orange-600", border: "border-orange-200", text: "text-orange-600" }
  };

  return (
    <div className="space-y-8 pb-16">
      {problems.map((problem, i) => {
        const colors = colorMap[problem.color];
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`bg-white border-2 ${colors.border} rounded-3xl overflow-hidden shadow-lg`}
          >
            {/* Image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={problem.image} 
                alt={problem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              
              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className={`inline-block px-3 py-1 ${colors.badge} rounded-full text-xs font-bold text-white uppercase tracking-wider`}>
                  Capítulo {problem.number}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {problem.description}
              </p>

              {/* Tasks pills */}
              {problem.tasks && (
                <div className="flex flex-wrap gap-2">
                  {problem.tasks.map((task, j) => (
                    <span
                      key={j}
                      className={`px-3 py-1 ${colors.badge} bg-opacity-10 ${colors.text} rounded-full text-xs font-medium`}
                    >
                      {task}
                    </span>
                  ))}
                </div>
              )}

              {/* Stat */}
              {problem.stat && (
                <div className={`mt-4 p-4 bg-gradient-to-br from-${problem.color}-50 to-white rounded-xl border ${colors.border}`}>
                  <div className={`text-5xl font-black ${colors.text} mb-2`}>
                    {problem.stat}
                  </div>
                  <p className="text-sm text-slate-700 font-medium">
                    {problem.statText}
                  </p>
                </div>
              )}

              {/* Warning */}
              {problem.warning && (
                <div className="mt-4 p-4 bg-orange-50 border border-orange-200 rounded-xl">
                  <p className="text-sm font-semibold text-orange-900 mb-1">
                    ⚠️ {problem.warning}
                  </p>
                  <p className="text-xs text-orange-700">
                    {problem.warningText}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        );
      })}

      {/* Scroll indicator - MAIS VISÍVEL */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-center py-12"
      >
        <div className="inline-flex flex-col items-center gap-3 px-6 py-4 bg-gradient-to-br from-indigo-50 to-emerald-50 rounded-2xl border-2 border-indigo-200 shadow-lg">
          <p className="text-slate-700 text-base font-semibold">Continue scrollando para ver mais</p>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-4xl text-indigo-600"
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

// Problem Cinematic Section - COM SCROLL SUAVE IGUAL AO TELEFONE
const ProblemCinematicSection = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current) return;
          
          const rect = containerRef.current.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Calcula scroll progress igual à seção do telefone
          const sectionStart = windowHeight;
          const sectionScrolled = sectionStart - rect.top;
          const totalHeight = rect.height;
          const progress = Math.max(0, sectionScrolled) / totalHeight;
          setScrollProgress(Math.min(Math.max(progress, 0), 1));
          
          // isFixed quando o topo da seção alcançou o topo da viewport
          const shouldBeFixed = rect.top <= 0 && rect.bottom >= windowHeight;
          setIsFixed(shouldBeFixed);
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calcula posição do Capítulo 1 - sobe de baixo até ficar fixo no topo
  const getStep1Transform = () => {
    // AJUSTE AQUI: Aumente o valor 0.15 para DIMINUIR a velocidade de subida
    // 0.10 = muito rápido | 0.15 = médio | 0.20 = devagar | 0.25 = muito devagar
    const RISE_DURATION = 0.15; // <-- AJUSTE ESTE VALOR
    
    if (scrollProgress < RISE_DURATION) {
      // Durante os primeiros X% do scroll, sobe de baixo (100vh) até o topo (0)
      const riseProgress = scrollProgress / RISE_DURATION;
      const translateY = 100 - (riseProgress * 100); // 100vh -> 0vh
      return `translateY(${translateY}vh)`;
    }
    // Depois de X%, fica fixo no topo (0)
    return 'translateY(0vh)';
  };

  return (
    <div ref={containerRef} className="relative" style={{ height: '600vh' }}>
      {/* Step 1 - SOBE de baixo junto com o scroll até ficar fixo - FICA ATÉ 30% */}
      {scrollProgress < 0.30 && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-white transition-transform duration-100 ease-linear"
          style={{
            transform: getStep1Transform()
          }}
        >
          <ProblemStep1 />
        </div>
      )}

      {/* Step 2 - FADE + ZOOM dramático (burnout/resultado previsível) - COMEÇA EM 30% */}
      <AnimatePresence>
        {isFixed && scrollProgress >= 0.30 && scrollProgress < 0.50 && (
          <motion.div
            initial={{ opacity: 0, scale: 1.3 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.4, 0, 0.2, 1] // easeInOutCubic
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-white"
          >
            <ProblemStep2 />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 3 - SLIDE DA DIREITA + ROTAÇÃO (atalho perigoso) - COMEÇA EM 50% */}
      <AnimatePresence>
        {isFixed && scrollProgress >= 0.50 && scrollProgress < 0.70 && (
          <motion.div
            initial={{ x: '100%', rotateY: -15 }}
            animate={{ x: 0, rotateY: 0 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{ 
              duration: 0.7, 
              ease: [0.22, 1, 0.36, 1] // easeOutExpo
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-white"
            style={{ perspective: '1000px' }}
          >
            <ProblemStep3 />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Step 4 - GLITCH EFFECT (As Consequências - Unificado) - COMEÇA EM 70% */}
      <AnimatePresence>
        {isFixed && scrollProgress >= 0.70 && (
          <motion.div
            initial={{ 
              x: [0, -10, 10, -10, 0],
              opacity: 0,
              filter: 'blur(10px)'
            }}
            animate={{ 
              x: 0,
              opacity: 1,
              filter: 'blur(0px)'
            }}
            exit={{ 
              opacity: 0,
              filter: 'blur(20px)'
            }}
            transition={{ 
              duration: 0.5,
              ease: 'easeOut'
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center px-6 bg-white"
          >
            <ProblemStep4 />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Index = () => {
  const problemRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: problemScroll } = useScroll({ target: problemRef, offset: ["start end", "end start"] });
  const problemBgY = useTransform(problemScroll, [0, 1], [100, -100]);

  const solutionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: solutionScroll } = useScroll({ target: solutionRef, offset: ["start end", "end start"] });
  const solutionBgY = useTransform(solutionScroll, [0, 1], [100, -100]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900 overflow-hidden">
      {/* SECTION 1 + 2 COMBINADAS: HERO COM TELEFONE */}
      <section ref={solutionRef as any} className="relative bg-gradient-to-b from-indigo-50 via-emerald-50 to-white">
        {/* Parallax Background Image - Success/Solution */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y: solutionBgY }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 scale-110"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=2000&q=80)',
            }}
          />
          {/* Gradient overlay with brand colors */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-emerald-50/40 to-white/60" />
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

        {/* HERO - Primeira tela - SIMPLIFICADO */}
        <div className="relative h-screen flex items-center justify-center px-6 overflow-visible z-10">
          {/* Simple background - sem parallax complexo */}
          <div className="absolute inset-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: "url('/images/front1.webp')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/40 via-white/60 to-slate-50/80" />
          </div>

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
              Resultados Sem Abrir Mão de Propósito
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
                <a href="https://wa.me/556198483937" target="_blank" rel="noopener noreferrer" aria-label="Testar a InfluIA via WhatsApp">Testar a Influ.IA (Beta)</a>
              </Button>
              
            </motion.div>
          </div>
        </div>

        {/* TELEFONE - Começa visível na parte inferior da home (preview) */}
        {/* MOBILE: Telefone com Swipe Horizontal */}
        <div className="md:hidden relative z-20 bg-white py-12">
          <div className="text-center mb-8 px-6">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">A Solução</h2>
            <p className="text-slate-600">
              Veja como a InfluIA facilita seu dia a dia
            </p>
          </div>
          <PhoneMobileSwipeable />
        </div>

        {/* DESKTOP: Sticky Scroll */}
        <div className="hidden md:block relative z-20">
          <PhoneStickyDesktopWithScroll />
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
          {/* Cinematic Title Sequence - MINIMALISTA E ELEGANTE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
              duration: 1.2,
              ease: [0.4, 0, 0.2, 1]
            }}
            className="text-center mb-20 md:mb-32"
          >
            {/* Badge estilo cinema */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              
            </motion.div>

            {/* Título principal - estilo cinematográfico minimalista */}
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[1.1]"
            >
              <span className="block text-slate-900">
                O Problema
              </span>
              <span className="block text-slate-400 text-4xl md:text-5xl lg:text-6xl font-light mt-2">
                que Ninguém Vê
              </span>
            </motion.h2>

            {/* Linha divisória minimalista */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="w-24 h-1 bg-gradient-to-r from-indigo-500 via-red-500 to-orange-500 mx-auto mb-6 rounded-full"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg md:text-2xl text-slate-600 font-light italic max-w-2xl mx-auto"
            >
              "A rotina exaustiva do criador de conteúdo"
            </motion.p>
          </motion.div>

          {/* MOBILE: Cinematic Story Cards - DESATIVADO TEMPORARIAMENTE */}
          <div className="hidden">
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

      {/* MOBILE ONLY: Problem Section com cards simples e claros */}
      <div className="md:hidden px-6 py-12">
        <SimpleProblemCards />
      </div>

      {/* 4) A Solução InfluIA - REMODELADA CINEMATOGRÁFICA */}
      <section className="relative min-h-screen py-32 px-6 overflow-hidden bg-gradient-to-b from-white via-emerald-50/30 to-white">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
        
        {/* Glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto">
          {/* Header cinematográfico */}
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
            >
              <span className="inline-block bg-gradient-to-r from-slate-900 via-emerald-600 to-indigo-700 bg-clip-text text-transparent">
                A Solução
              </span>
              <br />
              <motion.span
                className="inline-block bg-gradient-to-r from-emerald-400 via-indigo-500 to-rose-400 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: '200% auto' }}
              >
                Influ.IA
              </motion.span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-indigo-500 mx-auto mb-8 rounded-full"
            />

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            >
              A única ferramenta projetada para <span className="font-semibold text-emerald-700">proteger o tempo e a essência</span> do criador.
              Automatizamos o operacional para que seu foco seja total na criação autêntica.
            </motion.p>
          </div>

          {/* Cards de funcionalidades - Grid cinematográfico */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {[
              {
                icon: Calendar,
                title: "Agenda & Operação",
                description: "Cuidamos de todos os prazos, tarefas e agendamentos. A Influ.IA gerencia o fluxo de trabalho para que você não perca o foco.",
                gradient: "from-emerald-600 to-emerald-400",
                bgGlow: "bg-emerald-500/20",
              },
              {
                icon: TrendingUp,
                title: "CRM & Parcerias",
                description: "Centralize o contato, histórico e follow-up de todas as suas parcerias em um lugar fácil, maximizando oportunidades.",
                gradient: "from-indigo-600 to-violet-400",
                bgGlow: "bg-indigo-500/20",
              },
              {
                icon: Shield,
                title: "WhatsApp-first",
                description: "Funciona diretamente no WhatsApp. Sem baixar apps, opera no ambiente que já faz parte do seu dia. Fricção zero.",
                gradient: "from-teal-600 to-emerald-400",
                bgGlow: "bg-teal-500/20",
              },
              {
                icon: Brain,
                title: "Inteligência Estratégica",
                description: "Nossa IA não cria por você, cria com você. Usa dados de mercado para apoiar seu processo criativo com autenticidade.",
                gradient: "from-violet-600 to-indigo-400",
                bgGlow: "bg-violet-500/20",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.7, 
                  delay: i * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                className="group relative"
              >
                {/* Card */}
                <div className="relative h-full bg-white border border-slate-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                  {/* Gradient glow on hover */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`} />
                  
                  {/* Icon com gradiente */}
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} mb-6 shadow-lg`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Título */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-emerald-600 transition-all duration-300">
                    {feature.title}
                  </h3>

                  {/* Descrição */}
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-50 to-transparent rounded-bl-[100px] opacity-50" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Final da seção */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center pt-8"
          >
            <p className="text-slate-500 text-sm italic mb-6">
              Tecnologia que serve à essência, não a substitui
            </p>
          </motion.div>
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
            
          </motion.div>
        </div>
      </section>

      {/* SECTION 6: THE VIP CONTACT (Angel Investor) */}
      <section className="relative px-6 py-24 bg-gradient-to-b from-orange-50 to-slate-50">
        <div className="absolute inset-x-0 bottom-0 h-[160px] bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.15),transparent_75%)]" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white border-2 border-amber-200 rounded-3xl p-10 shadow-2xl shadow-amber-200/50">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">Quer apoiar com grandes valores e ter uma chance de ter parte da InfluIA?</h3>
            <div className="mt-6 flex justify-center">
              <Button size="default" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl px-6 py-3 shadow-md" asChild>
                <a href="https://wa.me/5561981772703" target="_blank" rel="noopener noreferrer" aria-label="Fale conosco via WhatsApp">Fale conosco</a>
              </Button>
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
  // Map progress to step visibility (INICIA VISÍVEL)
  const step1Opacity = useTransform(scrollYProgress, [0.0, 0.2], [1, 1]);
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

// Desktop wrapper com scroll que move o telefone de baixo para cima
const PhoneStickyDesktopWithScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calcula progress desde quando a seção começa a aparecer
      const sectionStart = windowHeight;
      const sectionScrolled = sectionStart - rect.top;
      const totalHeight = rect.height;
      
      const progress = Math.max(0, sectionScrolled) / totalHeight;
      setScrollProgress(Math.min(Math.max(progress, 0), 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interpolação suave para desktop - sobe IMEDIATAMENTE
  const getPhonePosition = () => {
    if (scrollProgress < 0.15) {
      const bottomProgress = scrollProgress / 0.15;
      const bottomValue = -55 + (bottomProgress * 105);
      
      if (bottomValue < 50) {
        return { bottom: `${bottomValue}%`, top: undefined };
      } else {
        return { bottom: undefined, top: '50%' };
      }
    }
    return { bottom: undefined, top: '50%' };
  };
  
  const phonePos = getPhonePosition();
  
  // Opacity: desaparece no final da seção
  const phoneOpacity = scrollProgress > 0.85 ? Math.max(0, 1 - ((scrollProgress - 0.85) / 0.15)) : 1;

  return (
    <div ref={containerRef} className="relative" style={{ height: '400vh' }}>
      {/* Phone - SOBE GRADUALMENTE e DESAPARECE NO FINAL */}
      <div
        className="fixed z-50 pointer-events-none flex items-center justify-center"
        style={{ 
          bottom: phonePos.bottom,
          top: phonePos.top,
          left: '50%',
          transform: phonePos.top ? 'translate(-50%, -50%)' : 'translateX(-50%)',
          opacity: phoneOpacity,
          transition: 'bottom 0.1s linear, top 0.1s linear, opacity 0.3s ease-out'
        }}
      >
        <PhoneStickyDesktop />
      </div>

      {/* Cards que aparecem em sequência vertical */}
      <div className="absolute inset-0 space-y-[100vh] max-w-2xl mx-auto px-12">
        
        {/* Card 1: Gestão de Agenda */}
        <div className="min-h-screen flex items-start pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 60 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ duration: 0.8 }} 
            className="bg-white border-2 border-indigo-200 rounded-3xl p-8 shadow-2xl shadow-indigo-200/50 w-full max-w-md mx-auto"
          >
            <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-4">
              Recurso #1
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">Gestão de Agenda</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Você pede, ela marca. A InfluIA gerencia sua agenda de forma inteligente, lembrando compromissos e otimizando seu tempo.
            </p>
          </motion.div>
        </div>

        {/* Card 2: Inteligência Real */}
        <div className="min-h-screen flex items-center">
          <motion.div 
            initial={{ opacity: 0, y: 60 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ duration: 0.8 }} 
            className="bg-white border-2 border-indigo-200 rounded-3xl p-8 shadow-2xl shadow-indigo-200/50 w-full max-w-md mx-auto"
          >
            <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-4">
              Recurso #2
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">Inteligência Real</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Táticas validadas, não alucinações. Nossa IA é treinada com estratégias reais de criadores de sucesso.
            </p>
          </motion.div>
        </div>

        {/* Card 3: CRM Automático */}
        <div className="min-h-screen flex items-end pb-20">
          <motion.div 
            initial={{ opacity: 0, y: 60 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ duration: 0.8 }} 
            className="bg-white border-2 border-emerald-200 rounded-3xl p-8 shadow-2xl shadow-emerald-200/50 w-full max-w-md mx-auto"
          >
            <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full mb-4">
              Recurso #3
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 mb-3">CRM Automático</h3>
            <p className="text-slate-600 text-lg leading-relaxed">
              Nunca mais perca um lead. A InfluIA organiza e acompanha automaticamente suas parcerias e oportunidades.
            </p>
          </motion.div>
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
    <div style={{ width: '280px', margin: '0 auto' }}>
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

// Mobile phone with HORIZONTAL SWIPE for features
const PhoneMobileSwipeable = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const features = [
    {
      title: "Gestão de Agenda",
      user: "Marca uma reunião com a Singular amanhã às 14h.",
      ai: "Feito! Convite enviado e CRM atualizado. Bloqueie sua tarde para preparação.",
      color: "emerald"
    },
    {
      title: "Inteligência Criativa",
      user: "Quero falar sobre burnout criativo. Me ajuda a estruturar?",
      ai: "Que tal começar com sua experiência pessoal? Use storytelling + dados de pesquisa. Gancho: 'Acordo às 6h mas não crio nada até as 14h'",
      color: "indigo"
    },
    {
      title: "CRM Automático",
      user: "Organiza as marcas que ofereceram publi esse mês.",
      ai: "3 marcas tech (R$ 5-8k), 2 lifestyle (R$ 3k), 1 saúde (R$ 10k). Melhor fit: marca tech alinhada com seu nicho.",
      color: "violet"
    }
  ];

  const currentFeature = features[currentSlide];

  return (
    <div className="relative w-full max-w-sm mx-auto px-4 py-12">
      {/* Title above phone */}
      <motion.div 
        key={currentSlide}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-6"
      >
        <h3 className="text-2xl font-bold text-slate-900">{currentFeature.title}</h3>
      </motion.div>

      {/* Phone mockup - FIXED NO CENTRO */}
      <div className="relative w-full max-w-[280px] mx-auto">
        <div className="relative aspect-[9/19] rounded-[36px] bg-gradient-to-br from-slate-900 to-black border-4 border-slate-700 shadow-2xl">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20" />
          
          {/* Screen */}
          <div className="absolute inset-3 rounded-[28px] bg-slate-950 overflow-hidden flex flex-col">
            {/* Header */}
            <div className="h-16 px-4 flex items-center gap-3 border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm shrink-0">
              <div className={`h-10 w-10 rounded-full bg-gradient-to-br from-${currentFeature.color}-400 to-${currentFeature.color}-600 flex items-center justify-center shrink-0`}>
                <Brain className="h-5 w-5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-white">Influ.IA</p>
                <p className="text-xs text-emerald-400">● online</p>
              </div>
            </div>

            {/* Chat body - SWIPEABLE */}
            <div className="flex-1 p-4 space-y-3 overflow-hidden min-h-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3"
                >
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="max-w-[80%] bg-indigo-600 text-white px-4 py-3 rounded-2xl rounded-br-md text-sm font-medium shadow-lg">
                      {currentFeature.user}
                    </div>
                  </div>

                  {/* AI response */}
                  <div className="flex justify-start">
                    <div className="max-w-[80%] bg-blue-600 text-white px-4 py-3 rounded-2xl rounded-bl-md text-sm font-medium shadow-lg">
                      {currentFeature.ai}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
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

      {/* Swipe dots indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {features.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === currentSlide 
                ? 'w-8 bg-indigo-600' 
                : 'w-2 bg-slate-300 hover:bg-slate-400'
            }`}
            aria-label={`Ver funcionalidade ${i + 1}`}
          />
        ))}
      </div>

      {/* Swipe instruction */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center mt-6"
      >
        <p className="text-sm text-slate-500">
          ← Deslize ou clique nas bolinhas →
        </p>
      </motion.div>

      {/* Navigation buttons (visible touch targets) */}
      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentSlide((prev) => (prev > 0 ? prev - 1 : features.length - 1))}
          className="px-4 py-2 bg-white border-2 border-slate-200 rounded-xl text-slate-700 font-medium hover:border-indigo-300 hover:text-indigo-600 transition-colors"
        >
          ← Anterior
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev < features.length - 1 ? prev + 1 : 0))}
          className="px-4 py-2 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors"
        >
          Próximo →
        </button>
      </div>

      {/* Feature description below */}
      <motion.div
        key={`desc-${currentSlide}`}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="mt-8 text-center"
      >
        <p className="text-slate-600 leading-relaxed">
          {currentSlide === 0 && "A InfluIA gerencia sua agenda de forma inteligente, lembrando compromissos e otimizando seu tempo."}
          {currentSlide === 1 && "Táticas validadas, não alucinações. Nossa IA é treinada com estratégias reais de criadores de sucesso."}
          {currentSlide === 2 && "Nunca mais perca um lead. A InfluIA organiza e acompanha automaticamente suas parcerias e oportunidades."}
        </p>
      </motion.div>
    </div>
  );
};

// Fixed phone section with cards
const FixedPhoneSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !phoneRef.current) return;
      
      requestAnimationFrame(() => {
        if (!containerRef.current || !phoneRef.current) return;
        
        const rect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const sectionStart = windowHeight;
        const sectionScrolled = sectionStart - rect.top;
        const totalHeight = rect.height;
        
        const progress = Math.max(0, Math.min(1, Math.max(0, sectionScrolled) / totalHeight));
        
        // Atualiza scrollProgress apenas para os cards (menos frequente)
        setScrollProgress(progress);
        
        // Atualiza posição do telefone via CSS (super fluido, sem re-render)
        const phone = phoneRef.current;
        
        if (progress < 0.15) {
          const bottomProgress = progress / 0.15;
          const bottomValue = -60 + (bottomProgress * 110);
          
          if (bottomValue < 50) {
            phone.style.bottom = `${bottomValue}%`;
            phone.style.top = 'auto';
            phone.style.transform = 'translateX(-50%)';
          } else {
            phone.style.bottom = 'auto';
            phone.style.top = '50%';
            phone.style.transform = 'translate(-50%, -50%)';
          }
        } else {
          phone.style.bottom = 'auto';
          phone.style.top = '50%';
          phone.style.transform = 'translate(-50%, -50%)';
        }
        
        // Opacity: desaparece no final da seção
        const phoneOpacity = progress > 0.85 ? Math.max(0, 1 - ((progress - 0.85) / 0.15)) : 1;
        phone.style.opacity = phoneOpacity.toString();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentStep = scrollProgress < 0.33 ? 1 : scrollProgress < 0.66 ? 2 : 3;

  return (
    <div ref={containerRef} className="relative" style={{ height: '500vh' }}>
      {/* Fixed phone - SUPER FLUIDO COM MANIPULAÇÃO DIRETA DO DOM */}
      <div
        ref={phoneRef}
        className="fixed z-10 pointer-events-none flex items-center justify-center"
        style={{ 
          left: '50%',
          width: '280px',
          height: 'auto',
          willChange: 'transform, opacity'
        }}
      >
        <PhoneMobileSticky currentStep={currentStep} />
      </div>

      {/* Card 1 - EMBAIXO, MESMA POSIÇÃO DOS OUTROS */}
      <AnimatePresence>
        {scrollProgress >= 0.15 && scrollProgress < 0.35 && scrollProgress < 0.85 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-[5%] left-0 right-0 px-6 z-30"
          >
            <FeatureCardMobile
              icon={Brain}
              title="Potencialize Suas Ideias Criativas"
              description="Você tem a ideia, a IA estrutura. Sugestões de ganchos e storytelling."
              step={1}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card 2 - SEMPRE EMBAIXO */}
      <AnimatePresence>
        {scrollProgress >= 0.35 && scrollProgress < 0.68 && scrollProgress < 0.85 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-[5%] left-0 right-0 px-6 z-30"
          >
            <FeatureCardMobile
              icon={Calendar}
              title="Calendário Editorial Inteligente"
              description="Planeje baseado em tendências, timing e performance."
              step={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Card 3 - SEMPRE EMBAIXO */}
      <AnimatePresence>
        {scrollProgress >= 0.68 && scrollProgress < 0.85 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-[10%] left-0 right-0 px-6 z-30"
          >
            <FeatureCardMobile
              icon={TrendingUp}
              title="Organize Oportunidades de Publi"
              description="Categorize ofertas e priorize as melhores oportunidades."
              step={3}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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
      <div className="bg-white/95 backdrop-blur-md border-2 border-indigo-200 rounded-3xl p-8 shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/50 transition-all duration-300">
        <div className="flex items-start gap-5">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center flex-shrink-0 shadow-lg">
            <Icon className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3 text-slate-900">{title}</h3>
            <p className="text-slate-700 text-base leading-relaxed">{description}</p>
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
