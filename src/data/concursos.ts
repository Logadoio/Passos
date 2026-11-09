/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * 
 * PASSOS ESTUDOS - CONFIGURAÇÃO DOS CONCURSOS E CARGOS
 * Edite diretamente aqui no Studio quando quiser adicionar ou alterar os dados.
 */

export interface Cargo {
  id: string;
  nome: string;     // Digite o nome do cargo (ex: "Recepcionista")
  preco: string;    // Digite o valor (ex: "R$ 97,00")
  link: string;     // Link de pagamento ou WhatsApp (opcional)
}

export interface Concurso {
  id: string;
  nome: string;                // Digite o nome do concurso (ex: "Câmara de Camocim")
  periodoInscricoes?: string;  // Período das inscrições
  cargos: Cargo[];             // Prateleira de cargos deste concurso
}

// Deixado em branco conforme solicitado para você preencher pelo Studio:
export const CONCURSOS: Concurso[] = [
  {
    id: '1',
    nome: 'Câmara Municipal de Camocim-CE',
    periodoInscricoes: 'INSCRIÇÕES DE 30 DE OUTUBRO A 12 DE NOVEMBRO DE 2026',
    cargos: [
      {
        id: '1',
        nome: '',
        preco: '',
        link: ''
      },
      {
        id: '2',
        nome: '',
        preco: '',
        link: ''
      },
      {
        id: '3',
        nome: '',
        preco: '',
        link: ''
      },
      {
        id: '4',
        nome: '',
        preco: '',
        link: ''
      },
      {
        id: '5',
        nome: '',
        preco: '',
        link: ''
      }
    ]
  }
];

// Seu WhatsApp de contato (opcional, adicione com DDD caso queira)
export const WHATSAPP_CONTATO = '';
