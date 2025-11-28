import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

type Props = {
  children: React.ReactNode;
};

/**
 * SmoothScrollProvider
 * - Inicializa Lenis (smooth scroll) para toda a aplicação.
 * - Envolve a árvore React em um container que pode ser usado para parallax baseado em scroll.
 * - DESABILITADO temporariamente para permitir position: sticky funcionar
 */
const SmoothScrollProvider: React.FC<Props> = ({ children }) => {
  useEffect(() => {
    // LENIS DESABILITADO - quebra position: sticky
    // Uncomment abaixo para reativar smooth scroll
    /*
    let lenis: any = null;
    let rafId: number | null = null;
    let idleId: number | null = null;

    const start = () => {
      try {
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smooth: true,
          direction: "vertical",
          gestureDirection: "vertical",
          lerp: 0.08,
          infinite: false,
        });

        function raf(time: number) {
          if (!lenis) return;
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }

        rafId = requestAnimationFrame(raf);
      } catch (e) {}
    };

    if (typeof (window as any).requestIdleCallback === "function") {
      idleId = (window as any).requestIdleCallback(() => start(), { timeout: 500 });
    } else {
      const t = setTimeout(() => start(), 300);
      idleId = Number(t);
    }

    return () => {
      try {
        if (idleId != null && typeof (window as any).cancelIdleCallback === "function") {
          (window as any).cancelIdleCallback(idleId);
        } else if (idleId != null) {
          clearTimeout(idleId as any);
        }
      } catch (e) {}
      try {
        if (rafId) cancelAnimationFrame(rafId);
      } catch (e) {}
      try {
        if (lenis) lenis.destroy();
      } catch (e) {}
    };
    */
  }, []);

  return <div data-scroll-container>{children}</div>;
};

export default SmoothScrollProvider;
