import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, TrendingUp, Shield, Zap, Users, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-whatsapp.png";

const Index = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
            {...fadeInUp}
          >
            A Inteligência Operacional que faltava na{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Creator Economy
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Deixe a Influ.IA gerir a agenda, o CRM e a rotina. O criador foca na arte, nós focamos no negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg rounded-xl"
              asChild
            >
              <a href="https://benfeitoria.com" target="_blank" rel="noopener noreferrer">
                Acessar Rodada (Benfeitoria)
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="mt-16 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <img 
              src={heroImage} 
              alt="WhatsApp Interface demonstrando Influ.IA" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border border-border"
            />
          </motion.div>
        </div>
      </section>

      {/* The Context Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            O Sistema Operacional Atual está Quebrado.
          </motion.h2>

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
              >
                <div className="backdrop-blur-md bg-card border border-border rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-primary/50">
                  <card.icon className="w-12 h-12 text-primary mb-6" />
                  <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Alliance Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Uma Tecnologia com Propósito.</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A Influ.IA não nasceu apenas do mercado, nasceu de uma necessidade social.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="backdrop-blur-md bg-card border border-border rounded-2xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Users className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">A Chancela Moral</h3>
              <p className="text-muted-foreground leading-relaxed">
                O movimento +Creator (filantrópico) busca regenerar a saúde mental na internet. 
                Eles identificaram que o burnout é um problema estrutural.
              </p>
            </motion.div>

            <motion.div
              className="backdrop-blur-md bg-card border border-border rounded-2xl p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <Zap className="w-12 h-12 text-primary mb-6" />
              <h3 className="text-2xl font-bold mb-4">A Solução Técnica</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fomos selecionados e apoiados pelo movimento como a ferramenta capaz de 
                devolver o tempo e a sanidade ao criador.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Features - Bento Grid */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            O que a Influ.IA realmente faz?
          </motion.h2>

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
                className="backdrop-blur-md bg-card border border-border rounded-2xl p-8 group hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <feature.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investor Education */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            O Modelo de Investimento.
          </motion.h2>

          <div className="space-y-6">
            {[
              {
                term: "Startup",
                definition: "Empresa de Base Tecnológica: Diferente de um negócio tradicional, nosso ativo é a propriedade intelectual e a capacidade de escalar globalmente sem aumentar custos na mesma proporção."
              },
              {
                term: "Equity Crowdfunding",
                definition: "Uma modalidade regulada onde você adquire participação real na empresa. Você não é um doador, é um sócio investidor."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-md bg-card/50 border border-glass-border rounded-2xl p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">{item.term}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.definition}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Roadmap
          </motion.h2>

          <div className="space-y-6">
            {[
              { amount: "R$50k", milestone: "Infraestrutura de Alta Disponibilidade" },
              { amount: "R$100k", milestone: "Curadoria e Treinamento do Modelo (RAG)" },
              { amount: "R$250k", milestone: "Plataforma de Gestão para Sócios" },
              { amount: "R$500k", milestone: "Expansão Comercial" },
              { amount: "R$1M", milestone: "Influ.IA Studio (SaaS Web)" }
            ].map((step, index) => (
              <motion.div
                key={index}
                className="backdrop-blur-md bg-card border border-border rounded-xl p-6 flex items-center gap-6 group hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              >
                <div className="text-3xl font-bold text-primary min-w-[120px]">{step.amount}</div>
                <div className="text-lg text-foreground">{step.milestone}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-muted-foreground text-lg">
              Incubada pela Singular Venture. Apoiada pelo Movimento +Creator.
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
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
