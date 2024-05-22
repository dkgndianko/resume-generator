import { CvData, ICvBasicInformation, ICvEntry, ICvEducationEntry, IUniversity, ICompany } from './types/cpTypes';

const basicInfo: ICvBasicInformation = {
  firstName: 'Mouhamad',
  lastName: 'Thiam',
  civility: 'M',
  nationality: 'Senegal',
  address: 'Thies, Diamaguene',
  contacts: [{type: 'phone', contact: '+221 77 688 66 87'}, {type: 'email', contact: 'thiamouhamadpro@gmail.com'}],
  photoUrl: 'data:image/jpeg;base64,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'
}

const sensoft: ICompany = {
  name: 'Sensoft',
  address: 'Dakar',
  country: 'Senegal',
  website: 'http://www.sensoft.sn'
}

const freelanceCompany: ICompany = {
  name: 'Freelance',
  address: 'Keur Madiabel',
  country: 'Senegal',
  website: ''
}

const francoisRebelais: ICompany = {
  name: 'Computer Sciences Laboratory, François Rabelais University of Tours',
  address: 'Blois',
  country: 'France',
  website: 'https://lifat.univ-tours.fr/'
}

const misc1: ICvEntry = {
  title: 'Freelance translator',
  startDate: new Date('2012-05-03'),
  endDate: new Date('2012-08-20'),
  company: freelanceCompany,
  roles: ["Translation", "Reviewing"],
  achievements: [],
  technologies: [],
  summary: 'Translation and localization of Microsoft modules from English to Wolof'
};

const misc2: ICvEntry = {
  title: 'Junior developer',
  startDate: new Date('2012-08-03'),
  endDate: new Date('2012-09-30'),
  company: freelanceCompany,
  roles: ["Modeling", "Development"],
  achievements: [],
  technologies: ["Java", "Swing", "AWT", "MySQL"],
  summary: 'Development of drugstore management application'
};

const misc3: ICvEntry = {
  title: 'Junior developer',
  startDate: new Date('2014-04-03'),
  endDate: new Date('2014-09-30'),
  company: {...freelanceCompany, name: "Khoule & Freres"},
  roles: ["Modeling", "Development"],
  achievements: ["Deployed a SMS server in the Campus", "Ticketing platform for travelers"],
  technologies: ["PHP", "Kannel", "MySQL"],
  summary: 'Development of customer management application coupled to a messaging server. This application helps manage reservation for travelers and getting info for today news and retaurant menus at University Campus. Users do reservation and get info via SMS'
};

const misc4: ICvEntry = {
  title: 'Intern',
  startDate: new Date('2015-02-15'),
  endDate: new Date('2015-07-15'),
  company: francoisRebelais,
  roles: ["Deep study of Prolexbase (french lexical database)", "Making of an ontology", "mapping between the database and the ontology"],
  achievements: ["Integration of resources for the Semantic Web"],
  technologies: ["RDF", "OWL", "MySQL"],
  summary: 'An ontology on Prolexbase, a database of proper names in French, English, Polish, and other languages. The goal of this internship was to permit query over this database with Semantic Web tools and ensure the integration in the Linked Data.'
};

const experience1: ICvEntry = {
  title: 'Senior Developer',
  startDate: new Date('2015-08-03'),
  endDate: new Date('2016-02-05'),
  company: sensoft,
  roles: [],
  achievements: [],
  technologies: ['Java', 'Grails', 'Spring MVC', 'MySQL'],
  summary: 'As principal developer working directly with the Lead developer, I was independent. I successfully built an accounting core module and settings module for a money transfer app.'
};
const experience2: ICvEntry = {
  title: 'Lead Developer',
  startDate: new Date('2016-02-12'),
  endDate: new Date('2017-02-01'),
  company: sensoft,
  roles: ['Tech Lead', 'Senior Developer',],
  achievements: ['Transactions module for money transfer app', 'Back office module for money transfer app'],
  technologies: ['Java', 'Grails', 'Spring MVC', 'MySQL', 'Android', 'SqLite', 'Jenkins'],
  summary: 'In that position I was a lead full-stack developer. We built a web and mobile (Android) money transfer app for several transactions: Sending, Payment, Refund, Cash In, Cash Out.'
}
const experience3: ICvEntry = {
  title: 'Project Manager',
  startDate: new Date('2017-02-10'),
  endDate: new Date('2017-12-31'),
  company: sensoft,
  roles: ['Project Management', 'Integration', 'Interfacing'],
  achievements: ['Bank mobility project (ACEP FEKKSILA Senegal)', 'On site fund collection automation (FUCEC Togo)', 'Small savings digitization (ASUSU SA Niger)', 'Digitization of transactions (CTISN Senegal)'],
  technologies: [],
  summary: 'I jumped in the world of project management to widen my knowledge. But at the same time I still get my hand in code. We were able to help some financial institutions to make their fund collection or transactions digital. We developed a mobile app interfacing with existing banking information systems.'
};
const experience4: ICvEntry = {
  title: 'Chief of Development Unit',
  startDate: new Date('2017-04-01'),
  endDate: new Date('2018-09-20'),
  company: sensoft,
  roles: ['Team Manager', 'R & D', 'Chief Architect'],
  achievements: ['NFC card reader/writer module', 'Mobile payment solution', 'API gateway', 'KYC & Anti money laudering and terrorist financing module', 'Security module (OTP, password rules)', 'Dynamic dashboard'],
  technologies: ['Java', 'Grails', 'Spring MVC', 'MySQL', 'Oracle', 'SQL Server', 'NFC', 'Android', 'SqLite', 'Jenkins'],
  summary: 'I was working with web and mobile technologies and focused on financial apps. With my R&D role I was working on PoC projects to lead the team on the way to do things.'
};
const experience5: ICvEntry = {
  title: 'Senior Engineering Consultant',
  startDate: new Date('2018-10-03'),
  endDate: new Date('2019-05-31'),
  company: {
    name: 'MNS Consulting',
    address: 'Dakar',
    country: 'Senegal',
    website: 'http://www.mns-consulting.com'
  },
  roles: ['Digital Architect', 'Tech Leader', 'Senior Developer', /*'Scrum Master',*/ 'DevOps'],
  achievements: ['Technical specs', 'Technical costs', 'Architecture proposals'],
  technologies: ['Java', 'Springboot', 'OpenLDAP', 'Postgresql', 'MongoDb', /*'Thymeleaf',*/ 'JWT', 'Eureka', 'Camunda', 'MarchRM', /*'Archivematica',*/ 'Maven', 'Nexus', 'Jenkins', 'Ansible', 'Supervisord'],
  summary: 'I was head of the developement team and was directly dealing with project owners. We developed and delivered to Congo Brazaville State a single portal app for company creation.'
};
const experience6: ICvEntry = {
  title: 'Backend Team Leader',
  startDate: new Date('2019-06-11'),
  endDate: new Date('2020-03-29'),
  company: {
    name: 'CTS',
    address: 'Nowhere',
    country: 'US',
    website: 'http://www.ctsfares.com'
  },
  roles: ['Team Manager', 'Technical Referer', 'Chief Architect', 'Scrum Master', 'Mentor', 'DevOps'],
  achievements: ['Built a microservice app', 'TDD on all projects', 'CI/CD', 'Mentoring interns', 'Code reviews'],
  technologies: ['Python', 'FastApi', 'Django', 'JavaScript', 'NodeJs', 'Express', 'VueJs', 'Swagger', 'MongoDb', 'Postgresql', 'SqlAlchemy', 'Mongoose', 'Typescript', 'JWT', 'Uvicorn', 'Devpi', 'Heroku', 'Github Actions', 'Eureka'],
  summary: 'As lead of a team mixed with Senior and Junior developers, I was able to bring new air of best practices in the developement process and in code base. I made team adopt TDD, PRs, code review and introduced CI/CD. I was able to split an existing Django app to several micro services for more scalability and used by leader companies in the travel business.'
};
const experience7: ICvEntry = {
  title: 'Backend Team Leader',
  startDate: new Date('2020-03-29'),
  endDate: new Date('2020-12-10'),
  company: {
    name: 'Mondee',
    address: 'Nowhere',
    country: 'US',
    website: 'http://www.mondee.com'
  },
  roles: ['Team Manager', 'Technical Referer', 'Chief Architect', 'Scrum Master'],
  achievements: ['Built a microservice app', 'TDD on all projects', 'CI/CD'],
  technologies: ['Typescript', 'JavaScript', 'NodeJs', 'Express', 'Swagger', 'Mongoose'],
  summary: 'Inside a small team based on Senegal, I was head of the backend on remote basis location. Working directly with front-end team to deliver APIs for Travel industry. Consuming third party providers we were able to deliver restfull APIs for Tour, Car and Cruise with payment integration for two of them.'
};
const experience8: ICvEntry = {
  title: 'Team Leader',
  startDate: new Date('2020-12-14'),
  endDate: new Date('2022-12-16'),
  company: {
    name: 'Rocketrip Inc',
    address: 'New York',
    country: 'US',
    website: 'http://www.rocketrip.com'
  },
  roles: ['Chief Architect', 'Team Lead', 'Full stack developper', 'Scrum Master'],
  achievements: ['Sustainability Project', 'Travel Restrictions module', 'Knowledge Transfer', 'Planning', 'Evaluation', 'Code Review'],
  technologies: ['Python', 'Django', 'Typescript', 'JavaScript', 'React', 'Express', 'GraphQl', 'Graphene', 'MySQL', 'MongoDb', 'Lerna', 'Docker', 'Redis', 'RabbitMQ', 'Celery', 'AWS', 'Datadog', 'Sentry', 'Mixpanel', 'Sendgrid', 'Zendesk', 'Intercom'],
  summary: 'As Team Leader, I\'m responsible of technology choices, team management, and code quality. This position is fully remote. I work with DevOps team for CI/CD part of the project and with Project Owner to define what to do next and plan for deliveries. We took over an existing app focused on Business Travel. We added a sustainability module for C02 emissions and travel restrictions features (CoVid19 tests or quarantine, visa, etc.).'
};
const experience9: ICvEntry = {
  title: 'Full-stack Developer (freelance)',
  startDate: new Date("2022-01-26"),
  endDate: new Date("2022-07-08"),
  company: {
    name: 'Tentamus',
    address: 'Berlin',
    country: 'Germany',
    website: 'https://www.tentamus.com'
  },
  roles: ["Architect", "Full stack developer", "Data Analyst", "DevOps"],
  achievements: ["Trending app", "Analytics database", "Security", "Data sync", "CI/CD"],
  technologies: ["React", "Grails", "Groovy", "Java", "SQL Server", "Docker", "Javascript", "Webpack", "Highcharts", "Tailwind CSS"],
  summary: 'Taking over an existing portal app, refactored it and defined the CI/CD pipeline. We added security, data sync, set up an analytics database and developed a new React app based on Figma design.'
}
const experience10: ICvEntry = {
  title: 'Application Performance Specialist (freelance)',
  startDate: new Date("2022-12-19"),
  endDate: new Date("2023-09-30"),
  company: {
    name: 'Sonatel',
    address: 'Cite Keur Gorgui, Dakar',
    country: 'Senegal',
    website: 'https://www.sonatel.sn'
  },
  roles: ["App performance specialist"],
  achievements: ["Defined KPIs to mesure performance", "Dashboard on Kibana", "recommendations with implementation guides"],
  technologies: ["Java", "Spring Boot", "Kibana", "Elastic APM"],
  summary: 'As some apps are slow, we proposed to study the why and recommend ways to make them performant. We studied the architecture and code. We defined KPIs to monitor the performance and came up with recommendations and guides to implement them.'
}
const entries: Array<ICvEntry> = [
  experience10,
  experience9,
  experience8,
  experience7,
  experience6,
  experience5,
  experience4,
  experience3,
  experience2,
  experience1,
  misc4,
  misc3,
  misc2,
]

const ugb: IUniversity = {
  name: 'Gaston Berger University',
  address: 'Saint Louis',
  country: 'Senegal',
  website: 'https://ugb.sn/'
};
const education1: ICvEducationEntry = {
  startDate: new Date('2009-11-12'),
  endDate: new Date('2011-08-12'),
  university: ugb,
  diploma: 'Associate degree',
  field: 'Applied Mathematics and Computer Sciences',
  comment: 'with honnors'
};
const education2: ICvEducationEntry = {
  startDate: new Date('2012-03-27'),
  endDate: new Date('2012-12-10'),
  university: ugb,
  diploma: 'Bachelor',
  field: 'Computer Sciences',
  comment: 'with honnors'
};
const education3: ICvEducationEntry =   {
  startDate: new Date('2013-01-15'),
  endDate: new Date('2013-12-31'),
  university: ugb,
  diploma: 'Master\'s degree',
  field: 'Computer Sciences',
  comment: 'with honnors'
};
const education4: ICvEducationEntry = {
  startDate: new Date('2014-03-27'),
  endDate: new Date('2014-12-31'),
  university: ugb,
  diploma: 'Postgraduate degree',
  field: 'Computer Sciences',
  comment: 'with honnors'
};
const educations: Array<ICvEducationEntry> = [
  education4,
  education3,
  education2,
  education1
];



/*
export const cvData: OldCvData = {
    basicInfo,
    entries,
    education
}
*/

export const cvData: CvData = {
    basicInfo,
    sections: [
      {
        title: 'Experiences',
        items: entries,
        subsections: []
    }
  ],
  educations: [
      {
        title: 'Education',
        items: educations,
        subsections: []
      }
    ]
}
const ugb_fr: IUniversity = {
  ...ugb,
  name: 'l\'Université Gaston Berger',
  country: 'Sénégal'
}
const frenchCvData: CvData = {
  basicInfo,
    sections: [
      {
        title: 'Expériences',
        items: [
          {...experience8,
          roles: ['Architecte en chef', 'Chef d\'équipe',  'Développeur full stack', 'Scrum Master'],
          achievements: ['Projet d\'environnement durable', 'Module de restrictions de voyage', 'Transfert de compétence', 'Plannification', 'Évaluation', 'Revue de code'],
          summary: 'En tant que chef d\'équipe, j\'ai la resposabilité des choix technologiques, la gestion de l\'équipe, et la qualité du code. C\'est un poste à distance. Je travaille avec l\'équipe de DevOps sur les parties Intégration Continue et Déploiement Continue du projet, mais aussi avec le Project Owner pour définir les prochaines étapes du travail ainsi que le plan de livraison. Nous avons hérité d\'une application focalisée sur les voyages d\'affaire. Nous avons ajouté un module d\'environnment durable pour les émissions de CO2 et des fonctionnalités de restrictions de voyage (tests CoVid19 ou quarantaine, visa, etc.).'
        },
        {...experience7,
          roles: ['Chef d\'équipe', 'Référant Technique', 'Architecte en Chef', 'Scrum Master'],
          achievements: ['Construction d\'application micro services', 'Développement Dirigé par des Test', 'Intégration Continue / Déploiement Continu'],
          summary: 'Dans une équipe basée au Sénégal et travaillant à distance, j\'ai été le chef du Backend. Nous avons travaillé en étroite collaboration avec l\'équipe du front-end en fournissant des APIs dans l\'industrie du Voyage. En consommant des APIs tierces, nous étions en mesure de fournir des APIs REST pour les Tours, Location de voiture et les croisières avec l\'intégration du paiement sur deux d\'entre elles.'
        },
        {...experience6,
          roles: ['Chef d\'équipe', 'Référant Technique', 'Architecte en Chef ', 'Scrum Master', 'Mentor', 'DevOps'],
          achievements: ['Construction d\'application micro services', 'Développement Dirigé par les Tests', 'Intégration Continue / Déploiement Continue', 'Tutorat des stagiaires', 'Revue de code'],
          summary: 'En tant que chef d\'une équipe composée de développeurs séniors et de juniors, j\'ai été en mesure d\'apporter du souffle neuf de bonnes pratiques dans le processus de développement mais aussi du base de code. J\'ai fait adopter à l\'équipe le Développement dirigé par les tests, les Pull Requests, la revue de code ainsi que l\'introduction de l\'intégration continue et du déploiement continu. J\'ai été en mesure de séparer une application Django monolithique existante en plusieurs micro services pour plus d\'évolutivité.'
        },
        {...experience5,
          title: 'Ingénieur Consultant Sénior',
          roles: ['Architecte Digital', 'Directeur Technique', 'Développeur Sénior', 'Scrum Master', 'DevOps'],
          achievements: ['Spécifications techniques', 'Propositions d\'architecture', 'Développement'],
          summary: 'J\'ai été chef de l\'équipe de développement et travaillais  directment avec les chefs de project. Nous avons développé et délivré au Gouvernement du Congo Brazzaville un portail unique pour la création d\'entreprises.'
        },
        {...experience4,
          title: 'Chef d\'unité de Développement',
          roles: ['Chef d\'équipe', 'Recherche & Développement', 'Architecte en chef'],
          achievements: ['Module d\'écriture/lecture de cartes NFC', 'Solution de paiement mobile', 'Passerelle d\'API', 'Module de lutte anti blanchiment de capitaux et financement du terrorisme', 'Module de sécurité (OTP, contraintes de mot de passe, etc.)', 'Tableau de bord dynamique'],
          summary: 'Je travaillais avec les technologies web et mobile et focalisé sur les applications financières. Avec mon rôle de Recherche et Développement je concevais des projets de preuve de concept pour donner à l\'équipe des moyens de faire le choses.'
        },
        {...experience3,
          title: 'Chef de Projet',
          roles: ['Gestion de Projet', 'Intégration', 'Interfaçage'],
          achievements: ['Projet de banque mobile (ACEP FEKKISILA Sénégal)', 'Automatisation des collectes sur site (FUCEC Togo)', 'Digitalisation de la petite épargne (ASUSU SA Niger)', 'Digitalisation des transactions (CTISN Sénégal)'],
          summary: 'Je me suis plongé dans le monde de la gestion de projet pour élargir mes connaissances. Mais en même temps je continuais à développer. Nous avons pû aider des institutions financières à rendre digitales leurs transactions et collectes de fonds. Nous avons développé une application mobile qui s\'interface avec les systèmes d\'information bancaires.'
        },
        {...experience2,
          title: 'Développeur en Chef',
          roles: ['Développeur Senior', 'Lead Tech'],
          achievements: ['Module Transactions pour une application de transfert d\'argent', 'Module Back office pour une application de transfert d\'argent'],
          summary: 'À ce poste j\'étais le développeur en chef full-stack. Nous avons développé une application web et mobile (Android) de transfert d\'argent avec différents types de transactions: Envoi, Paiement, Remboursement, Dépôt de fonds, Appel de fonds'
        },
        {...experience1,
          title: 'Développeur Sénior',
          roles: [],
          achievements: [],
          summary: 'En tant que développeur principal travaillant sous la supervision du Développeur en chef, j\'étais indépendant. J\'ai réalisé avec succès un module de comptabilité et un module de paramétrage pour une application de transfert d\'argent.'
        },
        ],
        subsections: []
    }
  ],
  educations: [
      {
        title: 'Éducation',
        items: [
          {...education4, university: ugb_fr, diploma: "DEA (Master II)", field: "Informatique", comment: "Avec mention"},
          {...education3, university: ugb_fr, diploma: "Maitrise", field: "Informatique", comment: "Avec mention"},
          {...education2, university: ugb_fr, diploma: "Licence", field: "Informatique", comment: "Avec mention"},
          {...education1, university: ugb_fr, diploma: "DEUG II", field: "Math Appliquées et Informatique", comment: "Avec mention"}
        ],
        subsections: []
      }
    ]
}

export const defaultCvData = cvData

const translatedCVData: {[lang: string]: CvData} = {
  "en": cvData,
  "fr": frenchCvData
}

export function getCVData(lang: string) {
  return translatedCVData[lang] || defaultCvData
}