const HERO_VIDEO_ID = "INedqS_TZaQ";

export const HERO_VIDEO_SRC =
  `https://www.youtube.com/embed/${HERO_VIDEO_ID}` +
  `?controls=0&modestbranding=1&autoplay=1&mute=1&loop=1&playlist=${HERO_VIDEO_ID}`;

export const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.197!2d-46.6918!3d-23.5505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce579f4b0b0b0b%3A0x0!2sRua%20Jeric%C3%B3%2C%20193%20-%20Vila%20Madalena%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1234567890";

const LINE_BREAK = "\n";
const EMPTY_LINE = " ";
const COLLAPSIBLE_LINE_BREAK = " \n";

export const AGENCY_COPY = [
  "SOMOS UMA AGÊNCIA ESPECIALIZADA EM COMUNICAÇÃO PARA O MERCADO HEALTH CARE, COM EXPERIÊNCIA NA CONSTRUÇÃO DE MARCAS, CAMPANHAS E EXPERIÊNCIAS QUE CONECTAM CONHECIMENTO, PESSOAS E RESULTADOS.",
  EMPTY_LINE,
  "NOSSA ATUAÇÃO INTEGRA ESTRATÉGIA, CRIAÇÃO E PRODUÇÃO PARA DESENVOLVER SOLUÇÕES CONSISTENTES EM DIFERENTES CANAIS E MOMENTOS DA JORNADA DE COMUNICAÇÃO.",
].join(LINE_BREAK);

export const SOCIO_COPY =
  "NOSSO COMPROMISSO EM ATENDER À CRESCENTE NECESSIDADE DE REVISAR PADRÕES VIGENTES PARA QUE O SUCESSO SEJA ALCANÇADO PONDERANDO-SE OS IMPACTOS SOCIAIS E AMBIENTAIS CONSEQUENTES DA ATUAÇÃO DA EMPRESA.";

export const CLIENTS_COPY =
  "NOSSA PRESENÇA É RECONHECIDA EM LABORATÓRIOS NACIONAIS E MULTINACIONAIS.";

export const CONTACT_COPY =
  "ESTAMOS PRONTOS PARA CRIAR SOLUÇÕES QUE CONECTAM ESTRATÉGIA, CRIATIVIDADE E INOVAÇÃO.";

export type Stat = {
  left: number;
  width: number;
  labelWidth: number;
  iconOffset: number;
  pre: string;
  value: string;
  label: string;
};

export const stats: Stat[] = [
  {
    left: 673,
    width: 147,
    labelWidth: 145,
    iconOffset: 1,
    pre: "MAIS DE",
    value: "200",
    label: "MARCAS",
  },
  {
    left: 942,
    width: 147,
    labelWidth: 145,
    iconOffset: 1,
    pre: "",
    value: "400",
    label: ["VISUAL", "AIDS"].join(LINE_BREAK),
  },
  {
    left: 1211,
    width: 214,
    labelWidth: 205,
    iconOffset: 9,
    pre: "",
    value: "112",
    label: ["FEIRAS E", "CONGRESSOS"].join(LINE_BREAK),
  },
  {
    left: 1504,
    width: 187,
    labelWidth: 178,
    iconOffset: 9,
    pre: "",
    value: "15",
    label: ["PROGRAMAS DE", "SUPORTE AO", "PACIENTE"].join(LINE_BREAK),
  },
];

export type Certificate = {
  src: string;
  intrinsic: { width: number; height: number };
  design: { left: number; width: number };
};

export const certificates: Certificate[] = [
  {
    src: "/home/cert-1.png",
    intrinsic: { width: 645, height: 381 },
    design: { left: 1291, width: 171 },
  },
  {
    src: "/home/cert-2.png",
    intrinsic: { width: 413, height: 381 },
    design: { left: 1514, width: 109 },
  },
  {
    src: "/home/cert-3.png",
    intrinsic: { width: 501, height: 381 },
    design: { left: 1675, width: 132 },
  },
];

export const clientLogoIds = Array.from({ length: 29 }, (_, i) => i + 16);

export const portfolioItems = [
  { lines: ["CASES DE", "SUCESSO"], href: "/portfolio/cases-sucesso.pdf" },
  { lines: ["STANDS"], href: "/portfolio/stands.pdf" },
  { lines: ["VÍDEOS"], href: "/portfolio/videos" },
  { lines: ["REDES", "SOCIAIS"], href: "/portfolio/redes-sociais" },
  { lines: ["SITES &", "VA's"], href: "/portfolio/sites-vas" },
  { lines: ["AÇÕES", "AWARENESS"], href: "/portfolio/awareness.pdf" },
].map(({ lines, href }) => ({
  id: lines.join("-"),
  label: lines.join(COLLAPSIBLE_LINE_BREAK),
  href,
}));

export type ContactRow = {
  src: string;
  intrinsic: { width: number; height: number };
  design: { width: number; top: number };
  text: string;
  href: string;
};

export const contactRows: ContactRow[] = [
  {
    src: "/home/icon-whatsapp.svg",
    intrinsic: { width: 29, height: 29 },
    design: { width: 29.3, top: 6 },
    text: "WHATSAPP: +55 11 98564-4535",
    href: "https://api.whatsapp.com/send?phone=5511985644535&text=Oi!%20Por%20favor,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20os%20servi%C3%A7os."
  },
  {
    src: "/home/icon-address.svg",
    intrinsic: { width: 28, height: 39 },
    design: { width: 28.15, top: 8 },
    text: [
      "ENDEREÇO: RUA JERICÓ, 193 – CJ. 32",
      "VILA MADALENA SÃO PAULO/SP – BRASIL",
    ].join(LINE_BREAK),
    href: "https://www.google.com/maps?cid=8509020019810472022&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=pt&source=embed"
  },
  {
    src: "/home/icon-email.svg",
    intrinsic: { width: 36, height: 26 },
    design: { width: 36.36, top: 9 },
    text: ["E-MAIL:", "ATENDIMENTO@GREENEWGROUP.COM"].join(LINE_BREAK),
    href: "mailto:atendimento@greenewgroup.com"
  },
];
