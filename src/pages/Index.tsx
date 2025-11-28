import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Shield, Leaf, Brain, User, MessageCircle, PhoneCall } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { useRef } from "react";

const Index = () => {
  

  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroBgY = useTransform(heroScroll, [0, 1], [0, -60]);

  const movementRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: movementScroll } = useScroll({ target: movementRef, offset: ["start end", "end start"] });
  const movementBgY = useTransform(movementScroll, [0, 1], [0, -80]);

  return (
    <main className="min-h-screen bg-[#050505] text-slate-100 overflow-hidden">
      {/* SECTION 1: THE HERO (Parallax "Neural Roots") */}
      <section ref={heroRef as any} className="relative h-screen flex items-center justify-center px-6">
        {/* Parallax background */}
        <motion.div style={{ y: heroBgY }} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1620641788421-7a1c3427a8a6?auto=format&fit=crop&q=80')" }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#050505_90%)]" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
          >
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span>Uma iniciativa +Creator</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-4 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            A Tecnologia deve servir à Essência, não substituí-la.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-slate-400 max-w-3xl mx-auto"
          >
            A Influ.IA é a resposta do movimento +Creator para o problema cíclico do criador. Regenerando a saúde mental e devolvendo a autonomia através de uma IA que cuida do que te exaure.
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
              className="bg-indigo-600/90 hover:bg-indigo-500 text-white shadow-[0_0_30px_rgba(99,102,241,0.35)] px-7 py-4 rounded-2xl border border-indigo-500/40"
              asChild
            >
              <a href="#beta">Testar a Influ.IA (Beta)</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/5 hover:bg-white/10 text-slate-100 border border-white/15 backdrop-blur-md rounded-2xl px-7 py-4"
              asChild
            >
              <a href="#manifesto">Ver o Manifesto</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE MOVEMENT (Split Screen "Organic Tech") */}
      <section ref={movementRef as any} className="relative min-h-screen px-6 py-24">
        {/* Parallax background */}
        <motion.div style={{ y: movementBgY }} className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533240332313-0db49b459ad6?auto=format&fit=crop&q=80')" }}
          />
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>

        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Sticky Text */}
          <div className="md:sticky md:top-24">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs tracking-[0.2em] font-semibold text-indigo-400"
            >
              O CONTEXTO
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 text-3xl md:text-5xl font-bold tracking-tight"
            >
              Regenerar as redes para salvar quem cria.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 space-y-4 text-slate-400"
            >
              <p>A internet adoeceu. O que era para ser um espaço de expressão virou uma linha de montagem de ansiedade.</p>
              <p>
                A <strong className="text-slate-100">+Creator</strong> não é uma empresa, é um movimento. Nossa missão é garantir um futuro com mais saúde mental para jovens e criadores.
              </p>
              <p>
                A Influ.IA não nasceu em uma sala de reunião focada em lucro. Ela surge como a ferramenta técnica necessária para quebrar o ciclo de exaustão que o sistema impõe.
              </p>
            </motion.div>
            <div className="mt-6"><Button asChild variant="outline"><a href="/o-movimento">Saiba mais</a></Button></div>
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
                {/* Glass core */}
                <div className="absolute inset-0 rounded-[40%] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-[0_0_50px_rgba(16,185,129,0.25)]" />
                {/* Leaf veins / circuit */}
                <div className="absolute inset-6 rounded-[40%] bg-[conic-gradient(from_180deg_at_50%_50%,rgba(16,185,129,0.25),transparent_60%,rgba(99,102,241,0.3))] blur-sm" />
                {/* Inner glow */}
                <div className="absolute inset-12 rounded-[40%] bg-[radial-gradient(circle_at_50%_40%,rgba(99,102,241,0.35),transparent_60%)]" />
                {/* Subtle float */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: [-6, 6, -6] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -inset-2 rounded-[40%] border border-indigo-500/20"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 3: THE PROBLEM (Digital Noise & Overwhelm) */}
      <section className="relative w-full bg-[#0a0a0a] px-6 py-32 overflow-hidden">
        {/* TV static noise overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-5 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.06)_0_2px,transparent_2px_4px)]" />

        {/* Interactive 70% Stat with orbiting task pills */}
        <div className="relative max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl text-slate-400 mb-8"
          >
            A Agência de Uma Pessoa Só.
          </motion.h2>

          <div className="relative inline-block">
            {/* Orbit ring */}
            <div className="absolute -inset-24 rounded-full border border-white/10" />
            {/* Pills orbit */}
            {[
              { label: "Roteiro", angle: 0 },
              { label: "Edição", angle: 90 },
              { label: "Directs", angle: 180 },
              { label: "Publi", angle: 270 },
            ].map((p, i) => (
              <motion.div
                key={i}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "0 0" }}
              >
                <div
                  className="translate-x-[180px] -translate-y-0"
                  style={{ transform: `translateX(180px) rotate(${p.angle}deg)` }}
                >
                  <div className="backdrop-blur-xl bg-white/8 border border-white/15 rounded-full px-3 py-1 text-xs text-slate-300 shadow-[0_0_18px_rgba(0,0,0,0.35)]">
                    {p.label}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Counter up 70% */}
            <Counter70 />
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-slate-400">dos Creators já enfrentaram <span className="text-red-400">Burnout</span>.</p>
          </div>
        </div>

        {/* Glitch Separator */}
        <div className="relative mt-28 mb-16 h-14">
          <div className="absolute inset-0 [background:repeating-linear-gradient(90deg,#111_0_12px,#181818_12px_24px)]" />
          <motion.div
            initial={{ clipPath: "polygon(0 60%, 15% 55%, 30% 62%, 50% 50%, 70% 58%, 85% 52%, 100% 60%, 100% 100%, 0 100%)" }}
            animate={{ clipPath: [
              "polygon(0 60%, 15% 55%, 30% 62%, 50% 50%, 70% 58%, 85% 52%, 100% 60%, 100% 100%, 0 100%)",
              "polygon(0 62%, 14% 57%, 32% 64%, 49% 52%, 71% 60%, 86% 54%, 100% 62%, 100% 100%, 0 100%)",
              "polygon(0 60%, 15% 55%, 30% 62%, 50% 50%, 70% 58%, 85% 52%, 100% 60%, 100% 100%, 0 100%)"
            ] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-gradient-to-r from-red-600/35 via-indigo-600/25 to-transparent mix-blend-screen" />
        </div>

        {/* Glitch Card */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              O Atalho que Mata a Arte.
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-4 text-slate-400 max-w-xl"
            >
              Na busca por tempo, economiza-se na alma. Roteiros genéricos geram um feed <span className="text-red-400">tóxico</span>, superficial — o criador perde sua essência.
            </motion.p>
          </div>
          <GlitchHoverCard />
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

      {/* SECTION 4: THE SOLUTION (Sticky Phone Experience) */}
      <section className="relative w-full min-h-screen bg-gradient-to-b from-slate-950 to-indigo-950 px-6 py-10 overflow-hidden">
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-[1fr_560px_1fr] gap-6">
          {/* Left/Right columns contain the scroll steps; center column holds the sticky phone */}
          <div className="space-y-32">
            {/* Step 1 - Left */}
            <div className="min-h-screen flex items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.5 }} transition={{ duration: 0.6 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_-12px_rgba(99,102,241,0.45)] max-w-md ml-auto">
                <h3 className="text-2xl font-bold tracking-tight">Gestão de Agenda</h3>
                <p className="mt-2 text-slate-300">Você pede, ela marca.</p>
              </motion.div>
            </div>
            {/* Step 3 - Left */}
            <div className="min-h-screen flex items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.5 }} transition={{ duration: 0.6 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_-12px_rgba(99,102,241,0.45)] max-w-md ml-auto">
                <h3 className="text-2xl font-bold tracking-tight">Inteligência Real</h3>
                <p className="mt-2 text-slate-300">Táticas validadas, não alucinações.</p>
              </motion.div>
            </div>
          </div>

          {/* Sticky phone center */}
          <div className="relative">
            <div className="sticky top-24">
              <PhoneSticky />
            </div>
          </div>

          <div className="space-y-32">
            {/* Step 2 - Right */}
            <div className="min-h-screen flex items-center">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ amount: 0.5 }} transition={{ duration: 0.6 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-[0_0_30px_-12px_rgba(37,99,235,0.45)] max-w-md mr-auto">
                <h3 className="text-2xl font-bold tracking-tight">CRM Automático</h3>
                <p className="mt-2 text-slate-300">Nunca mais perca um lead.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE APPEAL (Why Support?) */}
      <section className="relative min-h-[70vh] px-6 py-32 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1495616811223-4d98c6e9d869?auto=format&fit=crop&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[180px] bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.35),transparent_70%)] animate-pulse" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Não é sobre um app. É sobre o futuro da nossa atenção.
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed">
            Contribuir para a Influ.IA é votar em uma internet onde a tecnologia serve à saúde mental, não à exaustão.
            Ajude-nos a construir a ferramenta que devolve a vida aos criadores.
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
      <section className="relative px-6 py-24">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-x-0 bottom-0 h-[160px] bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.25),transparent_75%)]" />
        <div className="relative max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 shadow-[0_0_50px_-10px_rgba(251,191,36,0.35)]">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Quer apadrinhar o projeto?</h3>
            <p className="mt-4 text-slate-400 max-w-xl">Para grandes apoios e Investidores Anjo que buscam equity e participação estratégica.</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-11 w-11 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-emerald-300" />
              </div>
              <a href="tel:+5561981772703" className="text-lg font-semibold text-slate-100 hover:text-amber-300 transition">
                Fale conosco: (61) 98177-2703
              </a>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <PhoneCall className="w-4 h-4" /> <span>Atendimento privado para estruturação estratégica.</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 7: EDUCATIONAL FAQ (Accordion) */}
      <section className="relative px-6 py-32">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-x-0 bottom-0 h-[140px] bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.2),transparent_70%)]" />
        <div className="relative max-w-5xl mx-auto">
          <motion.h3 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-12">
            Perguntas Frequentes & Conceitos
          </motion.h3>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-10 shadow-[0_0_50px_-12px_rgba(251,191,36,0.3)]">
            <Accordion type="single" collapsible className="space-y-2">
              <AccordionItem value="item-1" className="border-white/10 rounded-xl px-4">
                <AccordionTrigger className="text-slate-100">Quem somos?</AccordionTrigger>
                <AccordionContent className="text-slate-400 leading-relaxed">
                  Somos a união da Singular (Venture Builder de tecnologia) e do Movimento +Creator (Iniciativa de regeneração digital). Tecnologia com propósito.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-white/10 rounded-xl px-4">
                <AccordionTrigger className="text-slate-100">O que é uma Startup?</AccordionTrigger>
                <AccordionContent className="text-slate-400 leading-relaxed">
                  Uma empresa de base tecnológica desenhada para crescer rápido (escala) em um cenário de incerteza, diferente de uma empresa tradicional.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-white/10 rounded-xl px-4">
                <AccordionTrigger className="text-slate-100">O que é Crowdfunding?</AccordionTrigger>
                <AccordionContent className="text-slate-400 leading-relaxed">
                  Financiamento Coletivo. É como uma "vaquinha", mas para empresas. Você apoia o nascimento do projeto e recebe recompensas ou participação.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-white/10 rounded-xl px-4">
                <AccordionTrigger className="text-slate-100">O que é o Algoritmo?</AccordionTrigger>
                <AccordionContent className="text-slate-400 leading-relaxed">
                  São as regras automáticas das redes sociais que decidem quem vê seu post. Hoje, elas forçam o criador a trabalhar sem parar. Nós mudamos isso.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* SECTION 8: FOOTER & FINAL CTA */}
      <footer className="relative px-6 py-32 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[#050505]" />
        <div className="absolute inset-x-0 bottom-0 h-[220px] bg-[radial-gradient(circle_at_bottom,rgba(251,191,36,0.4),transparent_75%)] animate-pulse" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-10">
            Faça parte da Regeneração.
          </motion.h2>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }} className="flex flex-col items-center gap-5">
            <Button size="lg" className="relative bg-amber-500 text-black font-semibold rounded-2xl px-10 py-5 shadow-[0_0_40px_rgba(251,191,36,0.55)]">
              <span className="absolute inset-0 rounded-2xl animate-pulse bg-amber-400/20" aria-hidden />
              <a href="https://benfeitoria.com" target="_blank" rel="noopener noreferrer">Apoiar na Benfeitoria</a>
            </Button>
            <a href="#beta-form" className="text-slate-300 text-sm underline decoration-amber-400/40 hover:decoration-amber-300">Formulário Beta</a>
          </motion.div>
          <p className="mt-12 text-xs text-slate-500">© 2025 Influ.IA - Uma empresa Singular.</p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
// Sticky phone centerpiece with step-reactive chat content
const PhoneSticky = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start center", "end center"] });
  // Map progress to step thresholds
  const step1 = useTransform(scrollYProgress, [0.0, 0.33], [1, 0]);
  const step2 = useTransform(scrollYProgress, [0.33, 0.66], [1, 0]);
  const step3 = useTransform(scrollYProgress, [0.66, 1.0], [1, 0]);

  return (
    <div ref={containerRef} className="relative mx-auto w-[480px] h-[920px]">
      {/* Phone body */}
      <div className="relative w-full h-full rounded-[40px] bg-black/85 border-2 border-white/15 shadow-[0_60px_160px_-60px_rgba(37,99,235,0.35)]">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-8 bg-black rounded-b-2xl" />
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
          <div className="p-5 space-y-4">
            {/* Step 1 bubble */}
            <motion.div style={{ opacity: step1 }} className="flex justify-start">
              <div className="max-w-[80%] bg-white/5 text-slate-200 px-4 py-3 rounded-2xl rounded-bl-sm border border-white/10">
                Reunião agendada com investidor para 14h.
              </div>
            </motion.div>
            {/* Step 2 bubble */}
            <motion.div style={{ opacity: step2 }} className="flex justify-start">
              <div className="max-w-[80%] bg-white/5 text-slate-200 px-4 py-3 rounded-2xl rounded-bl-sm border border-white/10">
                Lead cadastrado no Pipedrive e follow-up programado.
              </div>
            </motion.div>
            {/* Step 3 bubble */}
            <motion.div style={{ opacity: step3 }} className="flex justify-start">
              <div className="max-w-[80%] bg-white/5 text-slate-200 px-4 py-3 rounded-2xl rounded-bl-sm border border-white/10">
                Aqui está o roteiro baseado na técnica AIDA para seu vídeo.
              </div>
            </motion.div>
          </div>
          {/* Input */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/30 border-t border-white/10">
            <div className="h-12 bg-white/5 border border-white/10 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
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

// CounterUp to 70% component
const Counter70 = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  // Map progress to 0..70
  const value = useTransform(progress, (p) => Math.round(Math.min(70, p * 90))); // faster ramp, capped at 70
  return (
    <div ref={ref} className="relative">
      <motion.span
        className="text-[120px] leading-none font-bold tracking-tight bg-gradient-to-b from-red-500 to-red-700 bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(185,28,28,0.35)]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.span style={{}}>{value.get()}</motion.span>%
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
