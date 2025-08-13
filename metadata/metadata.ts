import type { ManifestOptions } from 'vite-plugin-pwa';

// Icons List. See https://devicon.dev/
const ICONS = {
  ANGULAR: 'angular-plain',
  ASTRO: 'astro-plain',
  AWS: 'amazonwebservices-plain-wordmark',
  AZURE: 'azure-plain',
  BABEL: 'babel-plain',
  BASH: 'bash-plain',
  BITBUCKET: 'bitbucket-plain',
  BOOTSTRAP: 'bootstrap-plain',
  BUN: 'bun-plain',
  CIRCLECI: 'circleci-plain',
  CLOUDFLARE: 'cloudflare-plain',
  CLOUDFLARE_WORKER: 'cloudflareworkers-plain',
  CODEIGNITER: 'codeigniter-plain',
  COMPOSER: 'composer-plain',
  CONFLUENCE: 'confluence-plain',
  CSS3: 'css3-plain',
  CUCUMBER: 'cucumber-plain',
  D3JS: 'd3js-plain',
  DENO: 'denojs-original',
  DIGITALOCEAN: 'digitalocean-plain',
  DOCKER: 'docker-plain',
  DRUPAL: 'drupal-plain',
  DYNAMODB: 'dynamodb-plain',
  ESLINT: 'eslint-plain',
  EXPRESS: 'express-original',
  FASTIFY: 'fastify-plain',
  GATSBY: 'gatsby-plain',
  GIT: 'git-plain',
  GITHUB: 'github-original',
  GITHUB_ACTIONS: 'githubactions-plain',
  GITLAB: 'gitlab-plain',
  GO: 'go-original-wordmark',
  GRAPHQL: 'graphql-plain',
  HOMEBREW: 'homebrew-plain',
  HTML5: 'html5-plain',
  INTELLIJ: 'intellij-plain',
  JEST: 'jest-plain',
  JETBRAINS: 'jetbrains-plain',
  JIRA: 'jira-plain',
  JQUERY: 'jquery-plain',
  JS: 'javascript-plain',
  KAFKA: 'apachekafka-original',
  LARAVEL: 'laravel-plain',
  LESS: 'less-plain-wordmark',
  LINKEDIN: 'linkedin-plain',
  MARIADB: 'mariadb-original',
  MATERIALUI: 'materialui-plain',
  METEOR: 'meteor-plain',
  MOCHA: 'mocha-plain',
  MONGODB: 'mongodb-plain',
  MONGOOSE: 'mongoose-original',
  MYSQL: 'mysql-plain',
  OPENTELEMETRY: 'opentelemetry-plain',
  NESTJS: 'nestjs-original',
  NETLIFY: 'netlify-plain',
  NODE: 'nodejs-plain',
  NPM: 'npm-original-wordmark',
  NUXT: 'nuxtjs-plain',
  PHP: 'php-plain',
  PLAYWRIGHT: 'playwright-plain',
  PNPM: 'pnpm-plain',
  POSTGRES: 'postgresql-plain',
  PRISMA: 'prisma-original',
  REACT: 'react-original',
  REDIS: 'redis-plain',
  REDUX: 'redux-original',
  ROLLUP: 'rollup-plain',
  RUST: 'rust-plain',
  SASS: 'sass-plain',
  SOCKETIO: 'socketio-original',
  STORYBOOK: 'storybook-plain',
  TAILWIND: 'tailwindcss-plain',
  TRELLO: 'trello-plain',
  TRPC: 'trpc-plain',
  TS: 'typescript-plain',
  VSCODE: 'vscode-plain',
  VITE: 'vitejs-plain',
  VITEST: 'vitest-plain',
  VUE: 'vuejs-plain',
  WEBPACK: 'webpack-plain',
  WEBSTORM: 'webstorm-plain',
  WOOCOMMERCE: 'woocommerce-plain',
  WORDPRESS: 'wordpress-plain',
  YARN: 'yarn-plain',
};

export const iconClasses = Object.values(ICONS).map((icon) => `devicon-${icon}`);

// Manifest for PWA.
export const manifest: Partial<ManifestOptions> = {
  name: 'Sam Huynh Website',
  short_name: 'Sam Huynh',
  start_url: '/',
  background_color: '#FFFFFF',
  theme_color: '#FFFFFF',
  display: 'standalone',
  icons: [
    {
      src: 'src/img/website-icon.png',
    },
  ],
};

export type SiteMetadata = {
  title: string;
  url: string;
  description: string;
  manifest: Partial<ManifestOptions>;
};

export type SocialLink = {
  icon: string;
  name: string;
  url: string;
};

export type Job = {
  title: string;
  companyName: string;
  duration: string;
  description: string[];
  techIcons: string[];
};

export type School = {
  institute: string;
  degree: string;
  major: string;
  duration: string;
};

export type Project = {
  title: string;
  description: string;
  url?: string;
};

export type Skill = {
  title: string;
  description: string[];
};

export type PersonalInformation = {
  firstName: string;
  lastName: string;
  bio: string;
  socialLinks: SocialLink[];
  email: string;
  address: string;
  experience: Job[];
  education: School[];
  projects: Project[];
  skills: Skill[];
  techStack: string[];
};

export type Metadata = {
  site: SiteMetadata;
  personalInformation: PersonalInformation;
};

const metadata: Metadata = {
  site: {
    title: 'Sam Huynh',
    url: 'https://me.samh.page',
    description: 'Online profile of Sam Huynh.',
    manifest,
  },
  personalInformation: {
    firstName: 'Sam',
    lastName: 'Huynh',
    bio: 'I have always been passionate about computers, and how technology can bring the world closer. That was the reason why I walked down the path of Software Development. Besides my studies, I have worked in a lot of Agile teams of up to 10 people, delivering high quality responsive web applications on different platforms (PHP, NodeJS) for clients in different industries (retail, sports, and education.)',
    socialLinks: [
      {
        icon: ICONS.GITHUB,
        name: 'Github',
        url: 'https://github.com/samhwang',
      },
      {
        icon: ICONS.LINKEDIN,
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/samhwang2112/',
      },
    ],
    email: 'samhwang2112.dev@gmail.com',
    address: 'Melbourne, Victoria, Australia',
    experience: [
      {
        title: 'Senior Full Stack Software Engineer',
        companyName: 'Lyka Pet Food',
        duration: 'Jun 2023 - Current',
        description: [
          "Migrated the backend system's NetSuite ERP integration from a batch-based approach to an event-driven architecture, reducing the amount of event loss from 20% to under 1%, enabling on-time monthly/quarterly reports for the Finance team.",
          "Implemented Segments analytics integration for customer metadata capture pipeline into Lyka's backend API, creating automated data flow to warehouse destinations, contributing to the organisational data-driven initiative that now powers monthly stakeholder reports and reduces manual data processing by over 80%.",
          'Implemented and maintained Orders, Products, Fulfilments management and Courier and Printer Integration microservices as part of the legacy monolith to event-driven microservices migration while participating in on-call, maintaining 99.99% uptime across all services, supporting the platform that is now processing $140M revenue through orders and subscriptions.',
          'Tech stack: PHP (Laravel), TypeScript (Vue, Nuxt, Node, NestJS), Postgres, MySQL, AWS (EventBridge, SQS, DynamoDB, Lambda, CDK, ECS), GitHub Actions, LaunchDarkly, OpenTelemetry',
        ],
        techIcons: [
          ICONS.JS,
          ICONS.TS,
          ICONS.NODE,
          ICONS.NESTJS,
          ICONS.VUE,
          ICONS.NUXT,
          ICONS.ASTRO,
          ICONS.HTML5,
          ICONS.CSS3,
          ICONS.TAILWIND,
          ICONS.NPM,
          ICONS.YARN,
          ICONS.ESLINT,
          ICONS.VITE,
          ICONS.VITEST,
          ICONS.PLAYWRIGHT,
          ICONS.PHP,
          ICONS.COMPOSER,
          ICONS.LARAVEL,
          ICONS.MYSQL,
          ICONS.MARIADB,
          ICONS.POSTGRES,
          ICONS.DYNAMODB,
          ICONS.REDIS,
          ICONS.OPENTELEMETRY,
          ICONS.AWS,
          ICONS.DOCKER,
          ICONS.GITHUB,
          ICONS.GITHUB_ACTIONS,
          ICONS.BITBUCKET,
          ICONS.JIRA,
        ],
      },
      {
        title: 'Full Stack Software Engineer',
        companyName: 'HungryHungry',
        duration: 'Jun 2021 - Jun 2023',
        description: [
          'Spearheaded the migration from the legacy monolith (PHP/Drupal/Angular) into event-driven microservices architecture, improving development velocity and reducing system downtime by 70%.',
          'Built and maintained the internal React UI Components Library based on the Design System, reducing frontend development time by 40% and eliminating design inconsistency across 10 applications.',
          'Maintained 99.99% service uptime over weekends and holiday seasons, directly supporting peak traffic of up to 2000 requests per second.',
          'Tech stack: JavaScript/TypeScript (Node, Express, Fastify, Serverless Framework, React, Angular), PHP (Drupal), Apache Kafka, AWS (Lambda, AWS Aurora, SQS, ECS, CDK, Cognito, CodeArtifact), BuildKite',
        ],
        techIcons: [
          ICONS.JS,
          ICONS.TS,
          ICONS.JQUERY,
          ICONS.REACT,
          ICONS.ANGULAR,
          ICONS.NODE,
          ICONS.EXPRESS,
          ICONS.SOCKETIO,
          ICONS.FASTIFY,
          ICONS.PRISMA,
          ICONS.DYNAMODB,
          ICONS.NPM,
          ICONS.STORYBOOK,
          ICONS.VITE,
          ICONS.VITEST,
          ICONS.JEST,
          ICONS.ESLINT,
          ICONS.WEBPACK,
          ICONS.ROLLUP,
          ICONS.PHP,
          ICONS.DRUPAL,
          ICONS.MYSQL,
          ICONS.MARIADB,
          ICONS.HTML5,
          ICONS.CSS3,
          ICONS.SASS,
          ICONS.TAILWIND,
          ICONS.AWS,
          ICONS.KAFKA,
          ICONS.DOCKER,
          ICONS.BITBUCKET,
          ICONS.JIRA,
          ICONS.CONFLUENCE,
        ],
      },
      {
        title: 'Full Stack Software Developer',
        companyName: 'Hertz Asia-Pacific',
        duration: 'Oct 2019 - Jun 2021',
        description: [
          "Led the migration of the Flexicar's website from the external design studio's hosting to Hertz's internal infrastructure through containerization and an automated deployment pipeline, keeping deployment time under 15 minutes overall and enabling continuous delivery.",
          'Rebuilt the customer portal for past journey information for Hertz and the real-time shuttle bus tracking and booking portal for Ace and Firefly brands, reducing the number of customer service calls needed for day-to-day operations.',
          "Implemented a multitude of Hertz's booking API integrations with insurance partners and franchisees, error monitoring system, rental analytics reports and tracking systems and dashboards, reducing the amount of manual work needed for Hertz's admin team to contact the partners manually for incidents.",
          'Tech stack: JavaScript (React, Redux, Node, Express, EJS, Serverless Framework, Socket.IO), GraphQL (Apollo), MongoDB, GitHub Actions, AWS (Lambda, Elastic Beanstalk, SQS)',
        ],
        techIcons: [
          ICONS.JS,
          ICONS.JQUERY,
          ICONS.REACT,
          ICONS.REDUX,
          ICONS.MATERIALUI,
          ICONS.STORYBOOK,
          ICONS.NODE,
          ICONS.EXPRESS,
          ICONS.MONGOOSE,
          ICONS.SOCKETIO,
          ICONS.GRAPHQL,
          ICONS.JEST,
          ICONS.MOCHA,
          ICONS.NPM,
          ICONS.YARN,
          ICONS.PHP,
          ICONS.COMPOSER,
          ICONS.WORDPRESS,
          ICONS.HTML5,
          ICONS.CSS3,
          ICONS.SASS,
          ICONS.LESS,
          ICONS.MYSQL,
          ICONS.MONGODB,
          ICONS.AWS,
          ICONS.DOCKER,
          ICONS.GITHUB,
          ICONS.JIRA,
          ICONS.CONFLUENCE,
        ],
      },
      {
        title: 'Web Application Developer',
        companyName: 'Bonntech Business Solutions',
        duration: 'May 2019 - Oct 2019',
        description: [
          'Introduced an internal version control system, a package repository and a project scaffolding process to reduce project setup time from 1 hour of manual work into a 5-minute script, eliminating code inconsistencies across future projects.',
          'Provided technical support for existing high-value clients (Royal Derby Hotel, Optical Alliance, …), ensuring 100% client retention.',
          'Tech stack: PHP (CodeIgniter, Composer, Packagist), Apache, MySQL, Docker',
        ],
        techIcons: [ICONS.PHP, ICONS.COMPOSER, ICONS.JS, ICONS.BOOTSTRAP, ICONS.CSS3, ICONS.LESS, ICONS.SASS, ICONS.MYSQL, ICONS.DOCKER, ICONS.GITLAB],
      },
      {
        title: 'Software Developer',
        companyName: 'ClassCom',
        duration: 'January 2019 - April 2019',
        description: [
          'Collaborated on feature development and cross-browser compatibility testing for education platform, contributing to 100% on-time fortnightly deployments throughout contract period.',
          'Tech stack: JavaScript (mainly Node, Express, Meteor, Mocha & CucumberJS), MongoDB, Azure DevOps, CircleCI',
        ],
        techIcons: [
          ICONS.JS,
          ICONS.NODE,
          ICONS.METEOR,
          ICONS.MOCHA,
          ICONS.CUCUMBER,
          ICONS.HTML5,
          ICONS.CSS3,
          ICONS.LESS,
          ICONS.MONGODB,
          ICONS.NPM,
          ICONS.AZURE,
        ],
      },
      {
        title: 'PHP Developer Intern',
        companyName: 'Psych Press',
        duration: 'Jun 2017 - Sep 2017',
        description: [
          'Collaborated on building three inhouse projects for Psych Press closely with the psychology team on a weekly basis.',
          'Tech stack: PHP 7 (CodeIgniter, Laravel, Moodle), JavaScript (jQuery, Bootstrap, D3js, ChartJS), CSS (MaterializeCSS), Microsoft SQL Server, AWS EC2',
        ],
        techIcons: [ICONS.PHP, ICONS.LARAVEL, ICONS.JS, ICONS.JQUERY, ICONS.D3JS, ICONS.BOOTSTRAP, ICONS.HTML5, ICONS.CSS3, ICONS.AWS, ICONS.BITBUCKET],
      },
      {
        title: 'Web Developer',
        companyName: 'Mint n Co. Accessories',
        duration: 'Oct 2015 - Feb 2016',
        description: [
          'Designed and built the e-commerce site for Mint and Co. Accessories from the ground up.',
          'Provided regular maintenance to ensure 99.9% site availability.',
          'Tech stack: PHP (WordPress, WooCommerce), JavaScript (jQuery, Bootstrap), MySQL, CPanel/Apache, PayPal Gateway API',
        ],
        techIcons: [ICONS.PHP, ICONS.WORDPRESS, ICONS.WOOCOMMERCE, ICONS.BOOTSTRAP, ICONS.HTML5, ICONS.CSS3, ICONS.JS, ICONS.MYSQL],
      },
      {
        title: 'PHP Developer',
        companyName: 'Right Left Communication',
        duration: 'Sep 2014 - Feb 2015',
        description: [
          'Developed, supported, monitored and maintained 4 websites for different clients from various industries.',
          'Tech stack: PHP (Joomla), JavaScript (jQuery, Bootstrap), MySQL, CPanel/Apache',
        ],
        techIcons: [ICONS.PHP, ICONS.BOOTSTRAP, ICONS.HTML5, ICONS.CSS3, ICONS.JS, ICONS.JQUERY, ICONS.MYSQL],
      },
    ],
    education: [
      {
        institute: 'Navitas Professionals',
        degree: 'Professional Year Program in Computer Science',
        major: 'incl. Cert IV in Business',
        duration: 'Oct 2016 - Oct 2017',
      },
      {
        institute: 'RMIT University',
        degree: 'Bachelor of Information Technology',
        major: '',
        duration: 'Oct 2012 - Dec 2015',
      },
    ],
    projects: [
      {
        title: 'My GitHub code repository',
        description:
          'The host of my many curious projects, from setting up a custom firmware to my keyboard and my own shell configs, to testing and learning new programming languages and techniques.',
        url: 'https://github.com/samhwang',
      },
      {
        title: 'My Resume page',
        description: "The page you're viewing right now! Hosted on Cloudflare Pages, built with the Vite & React.",
        url: 'https://me.samh.page',
      },
      {
        title: 'VAIT Discord Bot',
        description:
          'A Discord bot for the Vietnamese Aussies in IT Community, comes with built-in community requested and admin features. Built with DiscordJS and TypeScript.',
        url: 'https://github.com/viet-aus-it/vait-discord-bot',
      },
      {
        title: 'Arrange Brewfile',
        description: 'A CLI tool to arrange Brew bundle file alphabetically. Handy for checking this file in Git after dumping Brew bundles.',
        url: 'https://github.com/samhwang/arrange-brewfile',
      },
      {
        title: 'tRPC Netlify Functions Adapter',
        description: 'An adpater to run a standalone tRPC server on Netlify Functions',
        url: 'https://github.com/samhwang/trpc-utils/tree/master/libraries/trpc-netlify-functions',
      },
    ],
    skills: [
      {
        title: 'Professional Proficiency',
        description: [
          'Backend: PHP, NodeJS/TypeScript (Meteor, Express, Fastify, Serverless Framework)',
          'Frontend: jQuery, React (Redux, Gatsby, Storybook), HTML5, CSS, LESS, SASS & Tailwind',
          'Testing: Jest, Mocha, Vitest, React Testing Framework',
          'Event Streaming: Apache Kafka, AWS SQS, SocketIO',
          'Databases and data modelling: SQL (MariaDB/MySQL, PostgreSQL, AWS RDS, Aurora, PlanetScale) and NoSQL (MongoDB, DynamoDB)',
          'Server & Hosting configuration: Apache, NGINX, Vercel',
          'Scripting: Bash',
          'Container orchestration: Docker, Docker Compose & AWS ECS',
          'Package management and build tools: Composer, NPM (AWS CodeArtifact), Yarn, Babel, Webpack, Vite, SWC, ESBuild',
          'Version control with Git and collaboration: GitHub, BitBucket and AWS CodeCommit',
          'Continuous Integration and Continuous Delivery: CircleCI, BuildKite, GitHub Actions',
          'Amazon Web Services tools: EC2, Lambda, Elastic Beanstalk, Elastic Load Balancer, SQS, SES, SNS, CloudWatch, S3, CloudFront, RDS, Aurora',
          'Infrastructure as Code: AWS Cloud Development Kit (AWS CDK), AWS CloudFormation',
          'Services tracing & error monitoring tools: Sentry, Datadog',
          'Project Management tools: JIRA, Confluence, Trello, Asana',
          'IDE: Visual Studio Code, JetBrains IDE (IntelliJ IDEA, WebStorm)',
          'Microsoft Office Suite and similar Google tools',
          'Adobe Creative Suite: Photoshop, Lightroom, Bridge',
        ],
      },
      {
        title: 'Learning',
        description: ['Golang', 'Rust', 'Deno', 'Bun'],
      },
    ],
    techStack: [
      ICONS.PHP,
      ICONS.COMPOSER,
      ICONS.JS,
      ICONS.TS,
      ICONS.NODE,
      ICONS.DENO,
      ICONS.BUN,
      ICONS.EXPRESS,
      ICONS.FASTIFY,
      ICONS.REACT,
      ICONS.REDUX,
      ICONS.GATSBY,
      ICONS.STORYBOOK,
      ICONS.JEST,
      ICONS.VITEST,
      ICONS.MOCHA,
      ICONS.JQUERY,
      ICONS.BABEL,
      ICONS.WEBPACK,
      ICONS.ROLLUP,
      ICONS.VITE,
      ICONS.ESLINT,
      ICONS.NPM,
      ICONS.YARN,
      ICONS.PNPM,
      ICONS.GO,
      ICONS.RUST,
      ICONS.HTML5,
      ICONS.CSS3,
      ICONS.LESS,
      ICONS.SASS,
      ICONS.TAILWIND,
      ICONS.MONGODB,
      ICONS.MONGOOSE,
      ICONS.MYSQL,
      ICONS.POSTGRES,
      ICONS.DYNAMODB,
      ICONS.DOCKER,
      ICONS.AWS,
      ICONS.DIGITALOCEAN,
      ICONS.NETLIFY,
      ICONS.CLOUDFLARE,
      ICONS.CLOUDFLARE_WORKER,
      ICONS.KAFKA,
      ICONS.SOCKETIO,
      ICONS.GIT,
      ICONS.GITHUB,
      ICONS.GITHUB_ACTIONS,
      ICONS.CIRCLECI,
      ICONS.GITLAB,
      ICONS.BITBUCKET,
      ICONS.TRELLO,
      ICONS.JIRA,
      ICONS.CONFLUENCE,
      ICONS.BASH,
      ICONS.VSCODE,
      ICONS.JETBRAINS,
      ICONS.INTELLIJ,
      ICONS.WEBSTORM,
    ],
  },
};

export default metadata;
