import type { ExperienceData, Page, ProjectData, JobStatus } from './types'

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

export const PORTFOLIO_PAGE: Page = {
  TITLE: 'Портфолио',
  DESCRIPTION: 'Коллекция моих проектов и разработок',
}

export const WORK: Page = {
  TITLE: 'Опыт работы',
  DESCRIPTION: 'Места, где я работал и что делал.',
}

export const EXPERIENCE: ExperienceData[] = [
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
      '/smart-portal/logo.png',
      '/smart-portal/title-screen.png',
      '/smart-portal/screen1.png',
      '/smart-portal/screen2.png',
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
  {
    id: 'markup',
    name: 'MarkUp',
    photos: [
      '/markup/logo.png',
      '/markup/Screen1.png',
      '/markup/Screen2.png',
      '/markup/Screen3.png',
      '/markup/Screen4.png',
    ],
    site: 'https://markup-wine.vercel.app',
    githubUrl: 'https://github.com/EldarMuhamethanov/markup',
    shortDescription:
      'MarkUp - удобный и высокотехнологичный онлайн редактор markdown',
    description: [
      `С помощью данного приложения можно редактировать markdown и сразу видеть результат работы в виде html`,
      `Есть возможность экспортировать получившийся код в такие форматы как HTML, PDF, в файл с расширением .md`,
    ],
    stack: ['React', 'MobX', 'Typescript', 'Next.js'],
  },
]

export const JOB_STATUS: JobStatus = 'not-looking'
