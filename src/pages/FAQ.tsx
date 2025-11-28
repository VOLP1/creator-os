import { motion } from "framer-motion";

const FAQ = () => {
  const items = [
    { q: "Quem somos?", a: "+Creator, Singular, InfluIA — organizações e iniciativa alinhadas à regeneração das redes. (Extrair do Playbook)" },
    { q: "O que é uma Startup?", a: "Empresa de base tecnológica com capacidade de escalar globalmente, focada em produto e propriedade intelectual." },
    { q: "O que é uma campanha de Crowdfunding?", a: "Financiamento coletivo. Em Equity Crowdfunding você adquire participação na empresa (casos: Nubank em pré-IPO não, mas há exemplos de startups que cresceram via crowdfund regulado)." },
  ];

  return (
    <main className="min-h-screen grid-background text-foreground">
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            FAQ
          </motion.h1>
          <div className="space-y-6">
            {items.map((item, i) => (
              <div key={i} className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2 tracking-tight">{item.q}</h3>
                <p className="text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;
