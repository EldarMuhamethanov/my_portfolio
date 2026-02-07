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
    tasks: [
        'Разрабатываю и поддерживаю UI-компоненты VKUI (React, TypeScript): дизайн API, реализация и рефакторинг.',
        'Обеспечиваю доступность и качество: a11y-правки, тесты (unit/integration/snapshot) и code review.',
        'Оптимизирую производительность и размер сборки: lazy-loading, оптимизации рендера и bundle-size.',
        'Веду документацию и демо (Storybook, примеры, migration-гайды) для разработчиков и дизайна.',
        'Настраиваю CI/CD и релизный процесс: сборка пакетов, публикация и управление версиями.',
        'Работаю с open-source-сообществом и кросс-функциональными командами: review PR, issues.',
    ]
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
      '/smart-portal/screen1.png',
      '/smart-portal/screen2.png',
      '/smart-portal/screen3.png',
      '/smart-portal/screen4.png',
      '/smart-portal/screen5.png',
      '/smart-portal/screen6.png',
      '/smart-portal/screen7.png',
      '/smart-portal/screen8.png',
    ],
    site: 'https://smart-portal.vercel.app/',
    githubUrl: 'https://github.com/EldarMuhamethanov/smart-portal',
    shortDescription:
      'SmartPortal - ваш универсальный инструмент для взаимодействия со смарт-контрактами',
    description: [
      {
        type: 'header',
        text: '🚀 Ваш универсальный инструмент для работы со смарт-контрактами',
        level: 1,
      },
      {
        type: 'paragraph',
        text: 'Smart Portal предоставляет мощный и интуитивно понятный интерфейс для взаимодействия со смарт-контрактами в различных блокчейн-сетях. Независимо от того, являетесь ли вы разработчиком, исследователем или просто интересуетесь блокчейном, наше приложение поможет вам легко работать с контрактами.',
      },
      {
        type: 'header',
        text: '✨ Основные возможности',
        level: 2,
      },
      {
        type: 'list',
        items: [
          '🦊 Поддержка MetaMask: Легко подключайтесь к публичным сетям через MetaMask и взаимодействуйте с контрактами в основной сети Ethereum, тестовых сетях и других EVM-совместимых блокчейнах.',
          '💻 Локальная разработка: Работайте с локальными сетями через Hardhat или Foundry для тестирования и разработки. Идеально подходит для локальной разработки и тестирования.',
          '🔧 Удобное взаимодействие: Вызывайте методы контракта, просматривайте их параметры и результаты выполнения. Поддержка как верифицированных, так и неверифицированных контрактов с возможностью создания пользовательских методов.',
          '📦 Доступ к хранилищу: Читайте данные напрямую из слотов хранилища контракта. Особенно полезно при работе с неверифицированными контрактами или при необходимости низкоуровневого доступа к данным.',
        ],
      },
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
      {
        type: 'paragraph',
        text: '📝 MarkUp - это современный редактор Markdown, созданный для удобного написания документации, заметок и статей. Наш редактор сочетает в себе простоту использования и мощный функционал для эффективной работы с текстом.',
      },
      {
        type: 'header',
        text: '⚡ Умное редактирование',
        level: 2,
      },
      {
        type: 'list',
        items: [
          '🎨 Подсветка синтаксиса в реальном времени',
          '📊 Поддержка таблиц',
          '🖼️ Вставка изображений и ссылок',
          '📝 Нумерованные и маркированные списки',
        ],
      },
      {
        type: 'header',
        text: '👁️ Мгновенный предпросмотр',
        level: 2,
      },
      {
        type: 'list',
        items: [
          '⚡ Разделение экрана редактор/предпросмотр',
          '📏 Настраиваемые размеры панелей',
          '🔄 Синхронизированная прокрутка',
          '🖥️ Полноэкранный режим для каждой панели',
        ],
      },
      {
        type: 'header',
        text: '📤 Гибкий экспорт',
        level: 2,
      },
      {
        type: 'list',
        items: [
          '📑 Экспорт в PDF с сохранением стилей',
          '🌐 Конвертация в HTML',
          '📝 Сохранение в формате Markdown',
          '📋 Копирование в буфер обмена',
        ],
      },
      {
        type: 'header',
        text: '🎯 Дополнительные возможности',
        level: 2,
      },
      {
        type: 'list',
        items: [
          '⌨️ Быстрые горячие клавиши',
          '🎨 Настраиваемый интерфейс',
          '📱 Оптимизация для мобильных устройств',
        ],
      },
    ],
    stack: ['React', 'MobX', 'Typescript', 'Next.js', 'Immer js'],
  },
]

export const JOB_STATUS: JobStatus = 'not-looking'
