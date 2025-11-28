import { motion } from "framer-motion";

const Iniciativa = () => {
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
            Uma iniciativa +Creator
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A InfluIA surge como uma solução para o problema cíclico do criador de conteúdo: excesso de demandas, 
            decisões criativas sacrificadas para ganhar tempo e um ambiente de redes que cobra constância acima da qualidade.
          </motion.p>
        </div>
      </section>
    </main>
  );
};

export default Iniciativa;
