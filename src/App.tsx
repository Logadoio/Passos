/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShoppingCart, Instagram } from 'lucide-react';
import { CONCURSOS, Cargo, WHATSAPP_CONTATO } from './data/concursos';

export default function App() {
  const comprarCurso = (concursoNome: string, cargo: Cargo) => {
    if (cargo.link) {
      window.open(cargo.link, '_blank');
      return;
    }
    if (WHATSAPP_CONTATO) {
      const msg = encodeURIComponent(
        `Olá! Tenho interesse no curso preparatório para o cargo de ${cargo.nome || 'concurso'} do ${concursoNome || 'concurso'}.`
      );
      window.open(`https://wa.me/${WHATSAPP_CONTATO}?text=${msg}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-subtle-dots text-white flex flex-col justify-between p-4 sm:p-8 relative overflow-hidden">
      {/* Elementos visuais sutis: textura de bolinhas finas e pequenas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Matriz de pontinhos delicados no canto superior esquerdo */}
        <div className="absolute top-8 left-8 grid grid-cols-4 gap-2 opacity-30 hidden sm:grid">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[#d4af37]" />
          ))}
        </div>

        {/* Matriz de pontinhos delicados no canto superior direito */}
        <div className="absolute top-12 right-8 grid grid-cols-4 gap-2 opacity-30 hidden sm:grid">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[#d4af37]" />
          ))}
        </div>

        {/* Matriz de pontinhos no rodapé esquerdo */}
        <div className="absolute bottom-16 left-12 grid grid-cols-3 gap-2.5 opacity-25 hidden sm:grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-[#d4af37]" />
          ))}
        </div>

        {/* Bolinhas brilhantes finas e pequenas espalhadas com pulsação suave */}
        <div className="absolute top-1/4 left-[15%] w-2 h-2 rounded-full bg-[#f3df8a]/60 shadow-[0_0_8px_#d4af37] animate-twinkle-1" />
        <div className="absolute top-1/3 right-[12%] w-1.5 h-1.5 rounded-full bg-[#d4af37]/70 shadow-[0_0_6px_#d4af37] animate-twinkle-2" />
        <div className="absolute top-2/3 left-[8%] w-1.5 h-1.5 rounded-full bg-[#f3df8a]/50 shadow-[0_0_6px_#d4af37] animate-twinkle-3" />
        <div className="absolute bottom-1/4 right-[18%] w-2 h-2 rounded-full bg-[#d4af37]/60 shadow-[0_0_8px_#d4af37] animate-twinkle-1" />
        <div className="absolute top-16 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#f3df8a]/40 animate-twinkle-2" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        {/* Breve apresentação: Somente a Logo e o Nome "Passos Estudos" */}
        <section className="flex flex-col items-center justify-center text-center pt-6 pb-10">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-[#d4af37] shadow-[0_0_25px_rgba(212,175,55,0.35)] mb-4">
            <img
              src="/assets/aistudio/image_2ceab8d2.png"
              alt="Passos Estudos"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wider text-white">
            PASSOS <span className="text-[#d4af37]">ESTUDOS</span>
          </h1>
        </section>

        {/* Lista de Concursos Flutuando */}
        <main className="space-y-12 pb-12">
          {CONCURSOS.map((concurso) => (
            <div
              key={concurso.id}
              className="floating-concurso rounded-3xl bg-[#0a1c36] border-2 border-[#1b3a63] p-6 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all"
            >
              {/* Topo do Concurso */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-[#18365f]">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-2.5">
                    {/* Inscrições Abertas - Dourado com Brilho Suavizado */}
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#d4af37]/15 via-[#f3df8a]/20 to-[#d4af37]/15 border border-[#d4af37]/80 shadow-[0_0_12px_rgba(212,175,55,0.35)]">
                      <span className="w-2 h-2 rounded-full bg-[#d4af37] shadow-[0_0_6px_#d4af37]" />
                      <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#f9e9a4] drop-shadow-[0_0_4px_rgba(212,175,55,0.4)]">
                        Inscrições Abertas
                      </span>
                    </div>

                    {concurso.periodoInscricoes && (
                      <span className="text-xs sm:text-sm font-extrabold tracking-wider uppercase text-[#f3df8a] drop-shadow-[0_0_6px_rgba(212,175,55,0.25)]">
                        {concurso.periodoInscricoes}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white">
                    {concurso.nome}
                  </h2>
                </div>
              </div>

              {/* Prateleira de Cargos dentro do Concurso */}
              <div className="pt-6">
                <span className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-4">
                  Prateleira de Cargos:
                </span>

                {/* Prateleira dos Cargos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {concurso.cargos.map((cargo) => (
                    <div
                      key={cargo.id}
                      className="rounded-2xl bg-[#08162b] border border-[#1b3a63] p-5 flex flex-col justify-between hover:border-[#d4af37]/70 transition-colors shadow-lg"
                    >
                      <div>
                        <span className="text-[10px] text-[#d4af37] uppercase font-bold tracking-wider block mb-1">
                          Cargo
                        </span>
                        <h3 className="text-base font-bold text-white min-h-[1.5rem]">
                          {cargo.nome || 'Nome do Cargo'}
                        </h3>

                        {/* Preço */}
                        <div className="my-5 pt-3 border-t border-[#132d54]">
                          <span className="text-[10px] text-slate-400 uppercase tracking-wider block mb-0.5">
                            Valor do Curso
                          </span>
                          <div className="text-2xl font-extrabold text-[#d4af37]">
                            {cargo.preco || 'R$ --'}
                          </div>
                        </div>
                      </div>

                      {/* Botão de Compra */}
                      <button
                        onClick={() => comprarCurso(concurso.nome, cargo)}
                        className="w-full py-2.5 px-3 rounded-xl font-bold text-xs bg-gradient-to-r from-[#f3df8a] via-[#d4af37] to-[#c59b27] text-[#08162b] hover:brightness-110 shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer mt-2"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Comprar Curso</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>

      {/* Rodapé */}
      <footer className="text-center pt-8 border-t border-[#132d54] text-xs text-slate-400">
        <p className="flex items-center justify-center gap-2">
          <a
            href="https://instagram.com/passosestudo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#d4af37] transition-colors"
          >
            <Instagram className="w-4 h-4 text-[#d4af37]" />
            <span>@passosestudo</span>
          </a>
          <span className="text-slate-600">·</span>
          <span>© Passos Estudos</span>
        </p>
      </footer>
    </div>
  );
}
