import {CvData, ICvBasicInformation, ICvEntry, ICvEducationEntry, IUniversity, ICompany} from './types/cpTypes';

const basicInfo: ICvBasicInformation = {
    firstName: 'Mouhamad Ndiankho',
    lastName: 'Thiam',
    civility: 'Mr',
    nationality: 'Senegal',
    address: 'Thies, Léona Niang',
    contacts: [{type: 'phone', contact: '+221 77 688 66 87'}, {type: 'email', contact: 'thiamouhamadpro@gmail.com'}],
    photoUrl: 'images/photo_dkgndianko.jpg',
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
    achievements: ['Refactoring accounting module', 'Setup module'],
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
    technologies: ['Java', 'Groovy', 'Grails', 'Spring MVC', 'MySQL', 'Android', 'SqLite', 'Jenkins'],
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
    technologies: ['Java', 'Springboot', 'OpenLDAP', 'Postgresql', 'MongoDb', /*'Thymeleaf',*/ 'JWT', 'Docker', 'Eureka', 'Camunda', 'MarchRM', /*'Archivematica',*/ 'Maven', 'Nexus', 'Jenkins', 'Ansible', 'Supervisord'],
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
    technologies: ['Python', 'FastApi', 'Django', 'JavaScript', 'NodeJs', 'Express', 'VueJs', 'Swagger', 'MongoDb', 'Postgresql', 'SqlAlchemy', 'Mongoose', 'Docker', 'Typescript', 'JWT', 'Uvicorn', 'Devpi', 'Heroku', 'Github Actions', 'Eureka', 'AWS S3'],
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
    technologies: ['Typescript', 'JavaScript', 'NodeJs', 'Express', 'Swagger', 'Mongoose', 'Docker'],
    summary: 'Inside a small team based on Senegal, I was head of the backend on remote basis location. Working directly with front-end team to deliver APIs for Travel industry. Consuming third party providers we were able to deliver restfull APIs for Tour, Car and Cruise with payment integration for two of them.'
};
const experience8: ICvEntry = {
    title: 'Engineering Lead',
    startDate: new Date('2020-12-14'),
    endDate: new Date('2022-12-16'),
    company: {
        name: 'Rocketrip Inc',
        address: 'New York',
        country: 'US',
        website: 'http://www.rocketrip.com'
    },
    roles: ['Chief Architect', 'Team Lead', 'Full stack developper', 'Scrum Master'],
    achievements: ['Sustainability Project', 'Travel Restrictions module', 'Reward capping', 'Knowledge Transfer', 'Planning', 'Evaluation', 'Code Review'],
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
    summary: 'As some apps are slow, we proposed to study the why and recommend ways to make them performant. We defined KPIs to monitor the performance with alerts and thresholds. We studied the architecture, code and deployment environment. At the end came up with concrete recommendations and guides to implement them.'
}
const experience11: ICvEntry = {
    title: 'Founder',
    startDate: new Date("2023-09-30"),
    company: {
        name: 'Cidemia SAS',
        address: 'Thies',
        country: 'Senegal',
        website: 'https://www.cidemia.sn'
    },
    roles: ["CEO"],
    achievements: ["Vote counting app", "Delivery System"],
    technologies: ["Python", "FastAPI", "MongoDB", "JWT"],
    summary: "As the chief of a newly created company with co-founders, I have the responsibility of paving the way for a fully functional company. I identify important projects and negotiate with with partners. And still I continue to code with our team. And we developed a vote result counting and reporting app."
}

const experience12: ICvEntry = {
    title: 'Application Performance Consultant',
    startDate: new Date("2025-01-12"),
    endDate: new Date("2025-01-30"),
    company: sensoft,
    roles: ["Consultant"],
    achievements: ["Architecture review", "Migration plan"],
    technologies: ["Java", "Grails", "MySQL", "Architecture", "Gitlab", "Backend", "MacOs", "Databases", "Programming"],
    summary: "As someone who worked in the past in that project, I have the responsibility of reviewing the architecture and defining a migration plan. I reviewed the entire codebase of the project and showed the actual size of the codebase, the complexity, and other code smells. At the end I proposed a new and more robust architecture with a 5-step migration plan."
}

const experience13: ICvEntry = {
    title: 'Back-end Developer',
    startDate: new Date("2025-08-11"),
    endDate: new Date("2026-02-11"),
    company: {
        name: 'SUSU',
        address: 'Paris',
        country: 'France',
        website: 'https://www.susu.fr'
    },
    roles: ["Backend Developer", "Integration Specialist", "Database Engineer", "DevOps Contributor"],
    achievements: ["Third-Party Administrator (TPA) Integration - Curacel", "B2B Quote & Contract Management System", "Catalog & Offer Management", "Notification & Communication Systems", "Beneficiary & Coverage Management", "Python 3.8 to 3.10 migration"],
    technologies: ["Python", "FastAPI", "PostgresQL", "SQLAlchemy", "Alembic", "Pydantic", "Poetry", "Odoo", "Slack", "Pytest", "Ruff", "AWS Parameter Store", "Docker", "ECR", "Github", "CircelCI", "MacOs", "Databases", "Programming"],
    summary: "My work is primarily focused on backend development using Python/FastAPI, implementing critical features for the health insurance platform including third-party integrations, B2B contract management, catalog management, and notification systems."
}

const experience14: ICvEntry = {
    title: 'Back-end Developer',
    startDate: new Date("2026-01-26"),
    endDate: new Date("2026-07-03"),
    company: {
        name: 'Efficity',
        address: 'Paris',
        country: 'France',
        website: 'https://www.efficity.com'
    },
    roles: ["Back-end Developer"],
    achievements: [
        "🔗Diffusion export result tracking system",
        "🏠Property post-sale re-estimation system",
        "📧Paid diffusion email sending rules refactoring",
        "🏢Contact management for rental property diffusion",
        "🔄Diffusion suspension at compromise debriefing"
    ],
    technologies: ["Python", "Django", "PostgresQL", "Celery", "Gilab", "ArgoCD", "MacOs", "Databases", "Programming"],
    summary: "During this work I demonstrated strong full-stack development skills with emphasis on real estate platform features, particularly around property listings, diffusion management, and integration with external services."
}
const entries: Array<ICvEntry> = [
    experience14,
    experience13,
    experience12,
    experience11,
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
    /*misc4,
    misc3,
    misc2,*/
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
const education3: ICvEducationEntry = {
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
                {
                    ...experience11,
                    title: "Fondateur",
                    roles: ["Directeur Général"],
                    achievements: ["Application de décompte de résultats de vote"],
                    summary: "Chef d'une entité nouvellement créée avec des associés, j'ai la responsabilité de mettre en place les bases pour le bon fonctionnement. J'identifie les projets prioritaires, procède aux négociations avec les partenaires. Et pendant tout ce temps je continue à développer avec l'équipe. C'est ainsi que nous avons développpé une application de remontée et de décompte des résultats de vote."
                }
                ,
                {
                    ...experience10,
                    title: "Spécialiste en Performance d'Applications (freelance)",
                    roles: ['Etude de performance'],
                    achievements: ['KPIs', 'Tableaux de bord', 'Optimisation', 'Revue de code'],
                    summary: "En tant que consultant à la SONATEL, j'ai aidé à expliquer la lenteur de certaines applications. J'ai d'abord défini des indicateurs de performance (KPI) pour les applications. Ensuite j'ai créé des tableaux de bord avec des alertes de dépassement de seuil. J'ai aussi étudié les performances en analysant les données ainsi que le code et l'environnement de déploiement.  J'ai finalement détecté des goulots et proposé des pistes d'amélioration concrètes."
                }
                ,
                {
                    ...experience9,
                    title: 'Développeur Full stack (freelance)',
                    roles: ["Architecte", "Développeur full stack", "Analyse de données", "DevOps"],
                    achievements: ["Application de tendances", "Base de données Analytique", "Securité", "Synchronisation de donnée", "CI/CD"],
                    summary: "Ayant pris en main une application existante, je l'ai complètement restructurée et revu son architecture. J'ai enrichi la sécurtié, ajouté la synchronisation de données, mis en place une base de données analytique et développé une application React utilisant le design défini avec Figma."
                }
                ,
                {
                    ...experience8,
                    roles: ['Architecte en chef', 'Chef d\'équipe', 'Développeur full stack', 'Scrum Master'],
                    achievements: ['Projet d\'environnement durable', 'Module de restrictions de voyage', 'Plafonnement des récompenses', 'Transfert de compétence', 'Plannification', 'Évaluation', 'Revue de code'],
                    summary: 'En tant que chef d\'équipe, j\'ai la resposabilité des choix technologiques, la gestion de l\'équipe, et la qualité du code. C\'est un poste à distance. Je travaille avec l\'équipe de DevOps sur les parties Intégration Continue et Déploiement Continue du projet, mais aussi avec le Project Owner pour définir les prochaines étapes du travail ainsi que le plan de livraison. Nous avons hérité d\'une application focalisée sur les voyages d\'affaire. Nous avons ajouté un module d\'environnment durable pour les émissions de CO2 et des fonctionnalités de restrictions de voyage (tests CoVid19 ou quarantaine, visa, etc.), plafonnement de récompense par itinéraire.'
                },
                {
                    ...experience7,
                    roles: ['Chef d\'équipe', 'Référant Technique', 'Architecte en Chef', 'Scrum Master'],
                    achievements: ['Construction d\'application micro services', 'Développement Dirigé par des Test', 'Intégration Continue / Déploiement Continu'],
                    summary: 'Dans une équipe basée au Sénégal et travaillant à distance, j\'ai été le chef du Backend. Nous avons travaillé en étroite collaboration avec l\'équipe du front-end en fournissant des APIs dans l\'industrie du Voyage. En consommant des APIs tierces, nous étions en mesure de fournir des APIs REST pour les Tours, Location de voiture et les croisières avec l\'intégration du paiement sur deux d\'entre elles.'
                },
                {
                    ...experience6,
                    roles: ['Chef d\'équipe', 'Référant Technique', 'Architecte en Chef ', 'Scrum Master', 'Mentor', 'DevOps'],
                    achievements: ['Construction d\'application micro services', 'Développement Dirigé par les Tests', 'Intégration Continue / Déploiement Continue', 'Tutorat des stagiaires', 'Revue de code'],
                    summary: 'En tant que chef d\'une équipe composée de développeurs séniors et de juniors, j\'ai été en mesure d\'apporter du souffle neuf de bonnes pratiques dans le processus de développement mais aussi du base de code. J\'ai fait adopter à l\'équipe le Développement dirigé par les tests, les Pull Requests, la revue de code ainsi que l\'introduction de l\'intégration continue et du déploiement continu. J\'ai été en mesure de séparer une application Django monolithique existante en plusieurs micro services pour plus d\'évolutivité.'
                },
                {
                    ...experience5,
                    title: 'Ingénieur Consultant Sénior',
                    roles: ['Architecte Digital', 'Directeur Technique', 'Développeur Sénior', 'Scrum Master', 'DevOps'],
                    achievements: ['Spécifications techniques', 'Propositions d\'architecture', 'Développement'],
                    summary: 'J\'ai été chef de l\'équipe de développement et travaillais  directment avec les chefs de project. Nous avons développé et délivré au Gouvernement du Congo Brazzaville un portail unique pour la création d\'entreprises.'
                },
                {
                    ...experience4,
                    title: 'Chef d\'unité de Développement',
                    roles: ['Chef d\'équipe', 'Recherche & Développement', 'Architecte en chef'],
                    achievements: ['Module d\'écriture/lecture de cartes NFC', 'Solution de paiement mobile', 'Passerelle d\'API', 'Module LBCFT', 'Module de sécurité', 'Tableau de bord dynamique'],
                    summary: 'Je travaillais avec les technologies web et mobile et focalisé sur les applications financières. Avec mon rôle de Recherche et Développement je concevais des projets de preuve de concept pour donner à l\'équipe des moyens de faire le choses.'
                },
                {
                    ...experience3,
                    title: 'Chef de Projet',
                    roles: ['Gestion de Projet', 'Intégration', 'Interfaçage'],
                    achievements: ['Projet de banque mobile (ACEP FEKKISILA Sénégal)', 'Automatisation des collectes sur site (FUCEC Togo)', 'Digitalisation de la petite épargne (ASUSU SA Niger)', 'Digitalisation des transactions (CTISN Sénégal)'],
                    summary: 'Je me suis plongé dans le monde de la gestion de projet pour élargir mes connaissances. Mais en même temps je continuais à développer. Nous avons pû aider des institutions financières à rendre digitales leurs transactions et collectes de fonds. Nous avons développé une application mobile qui s\'interface avec les systèmes d\'information bancaires.'
                },
                {
                    ...experience2,
                    title: 'Développeur principal',
                    roles: ['Développeur web senior', 'Développeur mobile sénior'],
                    achievements: ['Module de transactions', 'Module comptabilité', 'Module back office'],
                    summary: "À ce poste j'étais le développeur principal full-stack sur un projet d'application de transfert d'argent. Nous avons développé une application web et mobile (Android) de transfert d'argent avec différents types de transactions: Envoi, Paiement, Remboursement, Dépôt de fonds, Appel de fonds"
                },
                {
                    ...experience1,
                    title: 'Développeur Sénior',
                    roles: [],
                    achievements: ['Refactor du modile de comptabilité', 'Module de paramétrage'],
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
                {
                    ...education4,
                    university: ugb_fr,
                    diploma: "DEA (Master II)",
                    field: "Informatique",
                    comment: "Avec mention"
                },
                {
                    ...education3,
                    university: ugb_fr,
                    diploma: "Maitrise",
                    field: "Informatique",
                    comment: "Avec mention"
                },
                {...education2, university: ugb_fr, diploma: "Licence", field: "Informatique", comment: "Avec mention"},
                {
                    ...education1,
                    university: ugb_fr,
                    diploma: "DEUG II",
                    field: "Math Appliquées et Informatique",
                    comment: "Avec mention"
                }
            ],
            subsections: []
        }
    ]
}

export const defaultCvData = cvData

const translatedCVData: { [lang: string]: CvData } = {
    "en": cvData,
    "fr": frenchCvData
}

export function getCVData(lang: string) {
    return translatedCVData[lang] || defaultCvData
}
