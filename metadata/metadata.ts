// Icons List. See https://devicon.dev/
const ICONS = {
  PHP: 'php-plain',
  CODEIGNITER: 'codeigniter-plain',
  LARAVEL: 'laravel-plain',
  COMPOSER: 'composer-plain',
  DRUPAL: 'drupal-plain',
  WORDPRESS: 'wordpress-plain',
  WOOCOMMERCE: 'woocommerce-plain',
  JS: 'javascript-plain',
  TS: 'typescript-plain',
  JQUERY: 'jquery-plain',
  D3JS: 'd3js-plain',
  REACT: 'react-original',
  REDUX: 'redux-original',
  GATSBY: 'gatsby-plain',
  ANGULAR: 'angularjs-plain',
  VUE: 'vuejs-plain',
  NUXT: 'nuxtjs-plain',
  MATERIALUI: 'materialui-plain',
  STORYBOOK: 'storybook-plain',
  NODE: 'nodejs-plain',
  DENO: 'denojs-original',
  EXPRESS: 'express-original',
  METEOR: 'meteor-plain',
  GRAPHQL: 'graphql-plain',
  SOCKETIO: 'socketio-original',
  JEST: 'jest-plain',
  MOCHA: 'mocha-plain',
  CUCUMBER: 'cucumber-plain',
  BABEL: 'babel-plain',
  WEBPACK: 'webpack-plain',
  NPM: 'npm-original-wordmark',
  YARN: 'yarn-plain',
  GO: 'go-original-wordmark',
  RUST: 'rust-plain',
  HTML5: 'html5-plain',
  CSS3: 'css3-plain',
  SASS: 'sass-orignal',
  TAILWIND: 'tailwindcss-plain',
  LESS: 'less-plain-wordmark',
  BOOTSTRAP: 'bootstrap-plain',
  MONGODB: 'mongodb-plain',
  MYSQL: 'mysql-plain',
  POSTGRES: 'postgresql-plain',
  AWS: 'amazonwebservices-original',
  AZURE: 'azure-plain',
  DIGITALOCEAN: 'digitalocean-plain',
  DOCKER: 'docker-plain',
  GIT: 'git-plain',
  GITHUB: 'github-original',
  GITLAB: 'gitlab-plain',
  LINKEDIN: 'linkedin-plain',
  JIRA: 'jira-plain',
  BITBUCKET: 'bitbucket-plain',
  CONFLUENCE: 'confluence-original',
  TRELLO: 'trello-plain',
  ESLINT: 'eslint-original',
  KAFKA: 'apachekafka-original',
  CIRCLECI: 'circleci-plain',
  BASH: 'bash-plain',
  VSCODE: 'vscode-plain',
  INTELLIJ: 'intellij-plain',
  WEBSTORM: 'webstorm-plain',
  JETBRAINS: 'jetbrains-plain',
};

// Manifest for PWA.
export const manifest = {
  name: 'Sam Huynh Website',
  short_name: 'Sam Huynh',
  start_url: '/',
  background_color: '#FFFFFF',
  theme_color: '#FFFFFF',
  display: 'standalone',
  icon: 'src/assets/img/website-icon.png',
};

const metadata = {
  siteTitle: 'Sam Huynh',
  siteUrl: 'https://samhwang.github.io',
  siteDescription: 'Online profile of Sam Huynh.',
  manifest,
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
        duration: 'Jun 2023 - Present',
        description: [],
        technologies: [
          'Front-end: Vue, Nuxt, TailwindCSS',
          'Back-end: PHP (Laravel)',
          'Testing: Vitest, PHPUnit, Playwright',
        ],
        techIcons: [
          ICONS.JS,
          ICONS.TS,
          ICONS.VUE,
          ICONS.NUXT,
          ICONS.HTML5,
          ICONS.CSS3,
          ICONS.TAILWIND,
          ICONS.NPM,
          ICONS.PHP,
          ICONS.LARAVEL,
          ICONS.MYSQL,
          ICONS.AWS,
          ICONS.DOCKER,
          ICONS.GITHUB,
          ICONS.BITBUCKET,
          ICONS.JIRA,
        ]
      },
      {
        title: 'Full Stack Software Engineer',
        companyName: 'HungryHungry',
        duration: 'Jun 2021 - Jun 2023',
        description: [
          "Spearheaded the migration process for HH's PHP/Drupal Backend System legacy monolith into Node/TypeScript microservices.",
          "Built and maintained HH's UI React Components Library based on the Design System to streamline the UI Apps creation process, and various internal NPM packages on CodeArtifact.",
          'Automated microservices deployment using BuildKite CI/CD pipelines.',
          'Assisted in interviewing and onboarding new staff members.',
          "Integrated payments provider (Stripe, AfterPay) into HH's Payments service, and AWS Cognito into the Customer Identity service.",
          'Took part in being the Engineer-on-Call to maintain 99.99% service uptime over busy periods.',
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
          ICONS.NPM,
          ICONS.STORYBOOK,
          ICONS.JEST,
          ICONS.ESLINT,
          ICONS.WEBPACK,
          ICONS.PHP,
          ICONS.DRUPAL,
          ICONS.MYSQL,
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
        technologies: [
          'Front-end: React, Angular, Emotion.sh, SASS',
          'Back-end: PHP (Drupal), JavaScript/TypeScript, NodeJS (Express, Fastify, Serverless Framework)',
          'Testing: Jest, Vitest, Storybook, React Testing Library',
          'JS Code Bundler: Rollup, Webpack, ESBuild, SWC',
          "Built and maintained HH's microservices internal REST APIs",
          'Docker containers & AWS Elastic Container Services (Fargate)',
          "Integrated payments provider (Stripe, AfterPay, Braintree) into HH's system",
          "Integrated AWS Cognito into HH's Identity Service",
          'Event Streaming with SocketIO, SQS and Kafka',
          'Database: MySQL/MariaDB, AWS RDS Aurora Serverless, DynamoDB',
          'AWS (Lambda, S3, SQS, SES, SNS, ECS, ELB, CodeArtifact, CloudFront, Route 53, CloudFormation)',
          'Deploy Infrastructure as Code using AWS Cloud Development Kit (CDK) and CloudFormation',
          'Monorepo Management with Turborepo',
          'Ran, built and maintained CI/CD pipeline with BuildKite',
          'Error and Metrics reporting with Datadog',
        ],
      },
      {
        title: 'Full Stack Software Developer',
        companyName: 'Hertz Australia',
        duration: 'Oct 2019 - Jun 2021',
        description: [
          'Built the Github Actions and GitHub packages pipeline to publish the Flexicar website docker images, along with setting up APIs to access GitHub packages for cleaning up when necessary',
          "Built new feature into Hertz's booking API, including but not limited to integrations with insurance partners and franchisee, error monitoring, reporting rental analytics and tracking systems, using GraphQL (Apollo), MongoDB, NodeJS (Express), EJS, ReactJS, Sentry and web sockets on AWS Serverless platform, with a dashboard on Elastic Beanstalk.",
          "Rebuilt Hertz's customer portal for past journey information tand the shuttle bus tracking and booking portal, using React/Redux and Material UI",
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
        technologies: [
          'Front-end: React, EJS, jQuery, Bootstrap, Material UI, Jest, Storybook, SocketIO',
          'Back-end: PHP7 (Wordpress), NodeJS (Express)',
          'HTML5, CSS3 and CSS pre-processors like SASS and LESS',
          'GraphQL (Apollo) and REST API',
          'Docker containers & docker-compose',
          'Database: MySQL & MongoDB',
          'Serverless architecture and websockets',
          'AWS (Lambda, Elastic Beanstalk, SQS, SES, SNS, CloudWatch, S3, CloudFront)',
          'CI/CD: GitHub Actions pipeline and GitHub Container Registry',
          'Project management using JIRA and Confluence',
          'Error reporting and monitoring: Sentry, Dashbird',
        ],
      },
      {
        title: 'Web Application Developer',
        companyName: 'Bonntech Business Solutions',
        duration: 'May 2019 - Oct 2019',
        description: [
          'Built the base framework, along with its own create and update script to speed up the initial setup for future projects.',
          "Assisted in setting up Bonntech's central Git repository and private Composer Packagist for internal projects and libraries.",
        ],
        techIcons: [ICONS.PHP, ICONS.COMPOSER, ICONS.JS, ICONS.BOOTSTRAP, ICONS.CSS3, ICONS.LESS, ICONS.SASS, ICONS.MYSQL, ICONS.DOCKER, ICONS.GITLAB],
        technologies: [
          'PHP 7.3, using CodeIgniter framework and Composer package manager with self-hosted Packagist',
          'MySQL database management and data modelling',
          'HTML5, CSS, JavaScript (jQuery, Bootstrap, Datatables, and AJAX)',
          'Apache server configurations',
          'Built containerized development environments with Docker',
        ],
      },
      {
        title: 'Software Developer',
        companyName: 'Classcom',
        duration: 'Jan 2019 - Apr 2019',
        description: [
          'Collaborated on building new core features of the ClassCom project',
          'Created automated test and build scripts and participated in code reviews in a bi-weekly release schedule.',
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
        technologies: [
          'JavaScript, using the Meteor full stack framework (with Node/Express for backend processing, Blaze for templating, CSS pre-processing with LESS)',
          'Automated test scripting with CucumberJS and Mocha.',
          'MongoDB database and data modelling.',
          'REST APIs',
          'Project management using Azure DevOps',
        ],
      },
      {
        title: 'PHP Developer Intern',
        companyName: 'Psych Press',
        duration: 'Jun 2017 - Sep 2017',
        description: ['Collaborated on building three inhouse projects for Psych Press closely with the psychology team on a weekly basis.'],
        techIcons: [ICONS.PHP, ICONS.LARAVEL, ICONS.JS, ICONS.JQUERY, ICONS.D3JS, ICONS.BOOTSTRAP, ICONS.HTML5, ICONS.CSS3, ICONS.AWS, ICONS.BITBUCKET],
        technologies: [
          'PHP 7, using CodeIgniter, Laravel and Moodle framework.',
          'JavaScript (AJAX, jQuery, Bootstrap, D3js and ChartJS) and CSS (MaterializeCSS)',
          'Microsoft SQL Server Database',
          'Migration from Microsoft servers to Amazon Web Services EC2 Linux instances',
        ],
      },
      {
        title: 'Web Developer',
        companyName: 'Mint n Co. Accessories',
        duration: 'Oct 2015 - Feb 2016',
        description: [
          'Designed and built the e-commerce site for Mint and Co. Accessories from the ground up.',
          'Provided regular maintenance to ensure 99.9% site availability.',
        ],
        techIcons: [ICONS.PHP, ICONS.WORDPRESS, ICONS.WOOCOMMERCE, ICONS.BOOTSTRAP, ICONS.HTML5, ICONS.CSS3, ICONS.JS, ICONS.MYSQL],
        technologies: [
          'CPanel hosting control panel for Apache server',
          'PHP using the Wordpress framework and WooCommerce e-commerce plugin',
          'MySQL database',
          'JavaScript (jQuery, Bootstrap)',
          'Paypal Gateway API',
        ],
      },
      {
        title: 'PHP Developer',
        companyName: 'Right Left Communication',
        duration: 'Sep 2014 - Feb 2015',
        description: ['Developed, supported, monitored and maintained 4 websites for different clients from various industries.'],
        techIcons: [ICONS.PHP, ICONS.BOOTSTRAP, ICONS.HTML5, ICONS.CSS3, ICONS.JS, ICONS.JQUERY, ICONS.MYSQL],
        technologies: ['CPanel hosting control panel for Apache server', 'PHP using the Joomla framework', 'JavaScript (jQuery, Bootstrap)', 'MySQL database'],
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
        description: "The page you're viewing right now! Hosted on Netlify, built with the Vite & React.",
        url: 'https://me.samh.page',
      },
      {
        title: 'VAIT Discord Bot',
        description:
          'A Discord bot for the Vietnamese Aussies in IT Community, comes with built-in community requested and admin features. Built with DiscordJS and TypeScript.',
        url: 'https://github.com/viet-aus-it/vait-discord-bot',
      },
      {
        title: 'BitWarden to 1Password',
        description: 'A CLI tool to convert BitWarden exports into acceptable formats for 1Password, easing the transition process',
        url: 'https://github.com/samhwang/bitwarden-to-1password',
      },
      {
        title: 'tRPC Netlify Functions Adapter',
        description: 'An adpater to run a standalone tRPC server on Netlify Functions',
        url: 'https://github.com/samhwang/trpc-utils/tree/main/packages/netlify-functions',
      }
    ],
    skills: [
      {
        title: 'Professional Proficiency',
        description: [
          'Backend: PHP 7, NodeJS/TypeScript (Meteor, Express, Fastify, Serverless Framework)',
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
        description: ['Golang', 'Rust', 'Deno'],
      },
    ],
    techStack: [
      ICONS.PHP,
      ICONS.COMPOSER,
      ICONS.JS,
      ICONS.TS,
      ICONS.NODE,
      ICONS.DENO,
      ICONS.EXPRESS,
      ICONS.REACT,
      ICONS.REDUX,
      ICONS.GATSBY,
      ICONS.STORYBOOK,
      ICONS.JEST,
      ICONS.MOCHA,
      ICONS.JQUERY,
      ICONS.BABEL,
      ICONS.WEBPACK,
      ICONS.ESLINT,
      ICONS.NPM,
      ICONS.YARN,
      ICONS.GO,
      ICONS.RUST,
      ICONS.HTML5,
      ICONS.CSS3,
      ICONS.LESS,
      ICONS.SASS,
      ICONS.TAILWIND,
      ICONS.MONGODB,
      ICONS.MYSQL,
      ICONS.POSTGRES,
      ICONS.DOCKER,
      ICONS.AWS,
      ICONS.DIGITALOCEAN,
      ICONS.KAFKA,
      ICONS.SOCKETIO,
      ICONS.GIT,
      ICONS.GITHUB,
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
