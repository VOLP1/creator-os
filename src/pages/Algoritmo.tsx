import { motion } from "framer-motion";

const Algoritmo = () => {
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
            Algoritmo (em palavras simples)
          </motion.h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            A InfluIA funciona como um "COO Digital": integra agenda, CRM e comunicação (WhatsApp), aplicando inteligência ao processo.
            Em vez de sugerir qualquer conteúdo, ela aprende com seu contexto e estratégia (RAG) e ajuda você a executar com qualidade e constância,
            sem sacrificar a essência criativa.
          </p>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Coleta contexto e preferências (briefing, calendário, metas)</li>
            <li>Organiza tarefas e compromissos (produção, reuniões, entregas)</li>
            <li>Gera recomendações táticas (não roteiros genéricos) baseadas em objetivos</li>
            <li>Registra relacionamento e performance para melhoria contínua</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Algoritmo;
