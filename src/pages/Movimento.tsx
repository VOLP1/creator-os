import { motion } from "framer-motion";

const Movimento = () => {
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
            O movimento
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A +Creator é um movimento que busca regenerar as redes e garantir um futuro com mais saúde mental para jovens e criadores.
            Apoiamos iniciativas que devolvem autonomia e tempo aos creators, reduzindo o ciclo de exaustão.
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default Movimento;
