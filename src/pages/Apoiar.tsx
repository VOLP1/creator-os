import { motion } from "framer-motion";

const Apoiar = () => {
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
            Por quê e como apoiar?
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Contribua para o futuro das redes e apoie a saúde mental de criadores e jovens.
            Seu apoio acelera a construção de uma infraestrutura que devolve tempo e autonomia aos creators.
          </motion.p>

          <div className="space-y-6">
            <div className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <p className="text-muted-foreground">
                A InfluIA está em desenvolvimento e você pode nos apoiar:
                {" "}
                <a className="text-indigo-400 hover:text-indigo-300" href="https://benfeitoria.com" target="_blank" rel="noreferrer">
                  Link para o Crowdfunding
                </a>
              </p>
            </div>
            <div className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <p className="text-muted-foreground">
                Saiba mais sobre como apadrinhar o projeto e se tornar um investidor anjo entrando em contato em:
                {" "}
                <a className="text-foreground font-semibold" href="tel:+5561981772703">61 98177-2703</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Apoiar;
