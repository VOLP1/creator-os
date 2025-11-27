import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Shield, Zap, Users, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-whatsapp.png";
import { useRef } from "react";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  return (
    <main ref={containerRef} className="min-h-screen grid-background text-foreground overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Parallax Background Image */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{ y: heroY }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/50 to-[#050505]" />
        </motion.div>
        
        <motion.div 
          className="relative z-10 max-w-6xl mx-auto text-center"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-[1.1]"
            >
              A Inteligência Operacional que faltava na{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                Creator Economy
              </span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium"
            >
              Deixe a Influ.IA gerir a agenda, o CRM e a rotina. O criador foca na arte, nós focamos no negócio.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button 
                size="lg" 
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-12 py-7 text-lg rounded-2xl shadow-2xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-500 border border-indigo-500/20"
                asChild
              >
                <a href="https://benfeitoria.com" target="_blank" rel="noopener noreferrer">
                  Acessar Rodada (Benfeitoria)
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="mt-20 relative"
            >
              <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full" />
              <img 
                src={heroImage} 
                alt="WhatsApp Interface demonstrando Influ.IA" 
                className="relative w-full max-w-4xl mx-auto rounded-3xl shadow-2xl border border-white/10"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* The Context Section - Problem/Chaos Background */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Parallax Problem Background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            O Sistema Operacional Atual está Quebrado.
          </motion.h2>
          
          <motion.p
            className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Burnout não é lifestyle. É sintoma de um sistema que precisa de infraestrutura.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "A Ilusão da Liberdade",
                description: "O criador moderno virou um gestor de planilhas que trabalha 14h por dia. Isso é insustentável."
              },
              {
                icon: TrendingUp,
                title: "Instabilidade",
                description: "As regras de distribuição mudam sem aviso. A Influ.IA atua como o escudo que adapta a estratégia do criador em tempo real."
              },
              {
                icon: Zap,
                title: "Não é só um Chatbot",
                description: "É um COO Digital que agenda reuniões, gere leads e organiza a produção."
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:border-indigo-500/50 transition-all duration-500">
                  <card.icon className="w-12 h-12 text-indigo-400 mb-6" />
                  <h3 className="text-2xl font-bold mb-4 tracking-tight">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alliance Section - Nature vs Tech */}
      <section className="relative py-32 px-6 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Uma Tecnologia com Propósito.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A Influ.IA não nasceu apenas do mercado, nasceu de uma necessidade social.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {/* +Creator Card with Nature Background */}
            <motion.div
              className="relative overflow-hidden rounded-2xl group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80')"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-transparent" />
              <div className="relative bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:border-green-500/50 transition-all duration-500">
                <Users className="w-12 h-12 text-green-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 tracking-tight">A Chancela Moral</h3>
                <p className="text-muted-foreground leading-relaxed">
                  O movimento +Creator (filantrópico) busca regenerar a saúde mental na internet. 
                  Eles identificaram que o burnout é um problema estrutural.
                </p>
              </div>
            </motion.div>

            {/* Influ.IA Card with Tech Background */}
            <motion.div
              className="relative overflow-hidden rounded-2xl group"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -5 }}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                style={{
                  backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80')"
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent" />
              <div className="relative bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 h-full hover:border-indigo-500/50 transition-all duration-500">
                <Zap className="w-12 h-12 text-indigo-400 mb-6" />
                <h3 className="text-2xl font-bold mb-4 tracking-tight">A Solução Técnica</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fomos selecionados e apoiados pelo movimento como a ferramenta capaz de 
                  devolver o tempo e a sanidade ao criador.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Features - Bento Grid */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            O que a Influ.IA realmente faz?
          </motion.h2>

          <motion.p
            className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Agenda. CRM. Operação no WhatsApp.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Calendar,
                title: "Gestão Executiva",
                description: "Integração nativa com Google Calendar e CRMs."
              },
              {
                icon: TrendingUp,
                title: "Inteligência de Venda",
                description: "RAG treinado com metodologias de conversão, não textos genéricos."
              },
              {
                icon: Shield,
                title: "Fricção Zero",
                description: "Tudo acontece dentro do WhatsApp, sem apps extras."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
              >
                <feature.icon className="w-12 h-12 text-indigo-400 mb-6" />
                <h3 className="text-xl font-bold mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Education */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            O Modelo de Investimento.
          </motion.h2>

          <motion.p
            className="text-center text-xl text-muted-foreground mb-16 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Não é doação. É participação.
          </motion.p>

          <div className="space-y-6">
            {[
              {
                term: "Startup",
                subtitle: "Escala Global",
                definition: "Empresa de Base Tecnológica: Diferente de um negócio tradicional, nosso ativo é a propriedade intelectual e a capacidade de escalar globalmente sem aumentar custos na mesma proporção."
              },
              {
                term: "Equity Crowdfunding",
                subtitle: "Seja Sócio",
                definition: "Uma modalidade regulada onde você adquire participação real na empresa. Você não é um doador, é um sócio investidor."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-indigo-500/50 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-indigo-400 tracking-tight">{item.term}</h3>
                  <span className="text-sm font-medium text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                    {item.subtitle}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.definition}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap - Future/Cyberpunk Background */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Parallax Future Background */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-center mb-16 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Roadmap
          </motion.h2>

          <div className="space-y-4">
            {[
              { amount: "R$50k", milestone: "Infraestrutura de Alta Disponibilidade" },
              { amount: "R$100k", milestone: "Curadoria e Treinamento do Modelo (RAG)" },
              { amount: "R$250k", milestone: "Plataforma de Gestão para Sócios" },
              { amount: "R$500k", milestone: "Expansão Comercial" },
              { amount: "R$1M", milestone: "Influ.IA Studio (SaaS Web)" }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6 flex items-center gap-6 hover:border-indigo-500/50 transition-all duration-500"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5, x: 5 }}
              >
                <div className="text-3xl font-bold text-indigo-400 min-w-[120px] tracking-tight">{step.amount}</div>
                <div className="text-lg text-foreground font-medium">{step.milestone}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-muted-foreground text-lg font-medium">
              Incubada pela Singular Venture. Apoiada pelo Movimento +Creator.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-slate-950/50 backdrop-blur-xl border-indigo-500/50 text-indigo-400 hover:bg-indigo-600 hover:text-white px-12 py-7 text-lg rounded-2xl transition-all duration-500"
              asChild
            >
              <a href="https://benfeitoria.com" target="_blank" rel="noopener noreferrer">
                Ver detalhes na Benfeitoria
              </a>
            </Button>
          </motion.div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
