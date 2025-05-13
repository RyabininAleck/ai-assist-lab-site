import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  bakai,
  gazprom,
  yoomoney,
} from "../assets";
import { links } from "../config";

export const navigation = [
  {
    id: "0",
    title: "особенности",
    url: "#features",
  },
  {
    id: "1",
    title: "цены",
    url: "#pricing",
  },
  // {
  //   id: "2", //todo
  //   title: "How to use",
  //   url: "#how-to-use",
  // },
  // {
  //   id: "3",  //todo
  //   title: "Roadmap",
  //   url: "#roadmap",
  // },
  {
    id: "4",
    title: "Обсудить проект",
    // url: links.sourceCode,
    url: "https://t.me/Ruabinin_Alexander",
    onlyMobile: true,
    external: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [ yourlogo,yoomoney, bakai, gazprom, yourlogo, ];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "On-Premise",
    description: "Решение для ваших собственных серверов",
    price: "0",
    features: [
      "Полный контроль над данными, инфраструктурой",
      "Интеграция с внутренними системами компании",
      "Безопасность на уровне корпоративных стандартов",
    ],
    premium: false,
  },
  {
    id: "1",
    title: "SaaS",
    description: "Подписка на облачное решение.",
    price: "9.99",
    features: [
      "Автоматические обновления и поддержка",
      "Масштабируемость под ваши задачи",
      "Приоритетная техническая поддержка"
    ],
    premium: true,
  },
  {
    id: "2",
    title: "IaaS",
    description: "Программный продукт с арендуемым серверным оборудованием",
    price: null,
    features: [
      "Аренда выделенных вычислительных ресурсов",
      "Масштабирование инфраструктуры по требованию",
      "Высокая доступность и отказоустойчивость",
      "Доступ к серверному оборудованию без капитальных вложений"
    ],
    premium: false,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Автоматизация рутинных задач",
    text: "LLM позволяет автоматизировать повторяющиеся процессы - от обработки запросов клиентов до генерации документации и отчетов.",
    backgroundUrl: "/src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Улучшение продукта через анализ обратной связи",
    text: "LLM способен быстро анализировать большие объемы отзывов, опросов и социальных сетей, выявляя главные проблемы и пожелания клиентов.",
    backgroundUrl: "/src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Персонализация и повышение конверсии",
    text: "Используя данные о клиентах, LLM генерирует персонализированные предложения, рекомендации и коммуникации.",
    backgroundUrl: "/src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Повышение эффективности поддержки",
    text: "LLM-чатботы и ассистенты обеспечивают круглосуточную поддержку, быстро и точно отвечают на вопросы, помогают решать проблемы без ожидания. ",
    backgroundUrl: "/src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Оптимизация закупок и снижение издержек",
    text: "Использование LLM для автоматизации анализа предложений от поставщиков позволяет быстрее находить лучшие условия на рынке",
    backgroundUrl: "/src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Создание интеллектуальных чат-ботов для продаж",
    text: "LLM-боты умеют выявлять потребности клиента, делать апселлы и кросс-продажи.",
    backgroundUrl: "/src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon1 ,
    imageUrl: benefitImage2,
  },
];

export const socials = [  {
    id: "0",
    title: "Telegram",
    iconUrl: telegram,
    url: "https://t.me/Ruabinin_Alexander",
  },
  // {
  //   id: "0",
  //   title: "Discord",
  //   iconUrl: discordBlack,
  //   url: "#",
  // },
  // {
  //   id: "1",
  //   title: "Twitter",
  //   iconUrl: twitter,
  //   url: "#",
  // },
  // {
  //   id: "2",
  //   title: "Instagram",
  //   iconUrl: instagram,
  //   url: "#",
  // },
  // {
  //   id: "3",
  //   title: "Telegram",
  //   iconUrl: telegram,
  //   url: "#",
  // },
  // {
  //   id: "4",
  //   title: "Facebook",
  //   iconUrl: facebook,
  //   url: "#",
  // },
];
