import { motion } from "framer-motion";

const InfluIA = () => {
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
            A InfluIA
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Como esse problema afeta o creator? Rotina demandante, múltiplas funções (roteirização, edição, agenda, parcerias, gravações) e pouco espaço para criação genuína.
            Muitos tentam "otimizar" usando IAs para gerar roteiros automáticos e editar vídeos. Mas se a essência do criador é criar,
            e ele para justamente de fazer isso, a consequência é a desistência e a produção massiva de conteúdo superficial.
          </motion.p>

          <div className="space-y-6">
            <div className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <p className="text-muted-foreground">
                "70% dos creators estão em, ou já tiveram burnout" — Fonte a confirmar e publicar aqui.
              </p>
            </div>
            <div className="bg-slate-950/50 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
              <p className="text-muted-foreground">
                Imagens ilustrativas: creator frustrado, posts de dancinhas e exemplos de feed tóxico (a ser inserido na versão completa).
              </p>
            </div>
          </div>

          <motion.h2 className="text-3xl font-bold mt-12 mb-4 tracking-tight">Por que existe a InfluIA?</motion.h2>
          <p className="text-muted-foreground mb-6">
            A solução é poupar tempo onde ele deve ser poupado. A InfluIA devolve autonomia ao criador de conteúdo e promove a criação de conteúdos mais genuínos,
            com essência e valor.
          </p>

          <motion.h3 className="text-2xl font-bold mb-4 tracking-tight">Lista de funcionalidades</motion.h3>
          <ul className="list-disc list-inside text-muted-foreground space-y-2">
            <li>Gestão de agenda e produção (integrações com calendário e tarefas)</li>
            <li>CRM simplificado para parcerias e relacionamento</li>
            <li>Operação via WhatsApp para fricção zero</li>
            <li>Inteligência aplicada ao processo (RAG com foco em conversão e qualidade)</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default InfluIA;
