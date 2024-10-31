import type { Site, Page, ProjectData } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  telegram: 'https://telegram.me/eldar_m4',
  vk: 'https://vk.com/id58690866',
  github: 'https://github.com/EldarMuhamethanov',
  linkedin: '',
  mail: 'mailto:eldarmy@mail.ru',
  instagram: 'https://www.instagram.com/lol.kek.chebureck/',
  discord: '',
}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Опыт работы',
  DESCRIPTION: 'Места, где я работал и что делал.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

export const EXPERIENCE = [
  {
    company: 'VK',
    location: 'Россия',
    position: 'Фронтенд разработчик',
    start: 'Июнь 2024',
    link: 'https://vk.com/',
    end: 'Текущий момент',
    tasks: [],
    achievements: [],
    stack: [
      'Git',
      'JavaScript',
      'TypeScript',
      'Redux',
      'SCSS',
      'React',
      'Webpack',
      'Адаптивная верстка',
      'HTML',
      'CSS',
    ],
  },
  {
    company: 'Кибер-Ром',
    location: 'Россия',
    position: 'Фронтенд разработчик',
    link: 'https://cyrm.ru',
    start: 'Февраль 2024',
    end: 'Май 2024',
    tasks: [
      'Реализация компонентов для uikit-а продукта',
      'Разработка фич для продуктов компании',
      'Избавление от легаси кода, рефакторинг',
    ],
    achievements: [
      'Внес немалый вклад в рефакторинг проекта',
      'Реализовал uikit для проекта',
    ],
    stack: [
      'Git',
      'JavaScript',
      'TypeScript',
      'Redux',
      'SCSS',
      'React',
      'Webpack',
      'Адаптивная верстка',
      'HTML',
      'CSS',
    ],
  },
  {
    company: 'iSpring',
    link: 'https://www.ispring.ru',
    location: 'Йошкар-Ола, Россия',
    position: 'Фронтенд разработчик',
    start: 'Январь 2020',
    end: 'Февраль 2024',
    tasks: [
      'Разработка продуктов для онлайн обучения.',
      'Написание новых компонентов для внутреннего uikit-а, а также доработка существующих.',
      'Разработка фич в продуктах iSpring Space, iSpring Learn (подробнее могу рассказать лично).',
      'Проектирование, оценка, планирование и разработка фич.',
      'Наставничество над стажерами.',
      'Выполнение support-задач.',
      'Доработки скриптов сборки.',
      "Поддержание работоспособности кода путем написания Uinit-тестов, snapshot'ных тестов, а также скриншотных тестов для дизайн системы.",
      'Поддержка работоспособности кода в основных браузерах: Chrome, Safari и Firefox.',
    ],
    achievements: [
      'Внедрил чат GPT в редактор статей Roll для генерации и редактирования текста.',
      'Внес большой вклад в рефакторинг редактора статей Roll, что привело к уменьшению легаси кода, что ускорило разработку будущих фич',
      'Разрабатывал фичу "Совместное редактирование", что позволило нескольким пользователям работать надо одним документом',
    ],
    stack: [
      'JavaScript',
      'HTML',
      'CSS',
      'React',
      'TypeScript',
      'Кроссбраузерная верстка',
      'Gulp',
      'Веб-разработка',
      'Node.js',
      'Nuxt.js',
    ],
  },
]

export const PROJECTS: ProjectData[] = [
  {
    id: 'smart-portal',
    name: 'Smart-portal',
    photos: [
      `${import.meta.env.BASE_URL}/smart-portal/logo.png`,
      `${import.meta.env.BASE_URL}/smart-portal/title-screen.png`,
      `${import.meta.env.BASE_URL}/smart-portal/screen1.png`,
      `${import.meta.env.BASE_URL}/smart-portal/screen2.png`,
    ],
    site: 'https://smart-portal.xyz/',
    githubUrl: 'https://github.com/EldarMuhamethanov/smart-portal',
    shortDescription:
      'SmartPortal - ваш универсальный инструмент для взаимодействия со смарт-контрактами',
    description: [
      `С помощью данного приложения, помимо вызова методов контрака, можно получить необходимые данные о смарт-контракте в сети Ethereum.`,
      `Например можно посмотреть ABI контракта, получить данные из слота в хранилище, исходный код, а также отслеживать события.`,
      `Для работы с реальными сетями вам необходим кошелек Metamask. А для работы с локальными сетями необходимо развернуть узел hardhat или Foundry.`,
    ],
    stack: [
      'React',
      'MobX',
      'Typescript',
      'Next.js',
      'i18next',
      'Web3.js',
      'Docker',
    ],
  },
]
