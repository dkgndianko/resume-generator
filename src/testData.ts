import { CvData, OldCvData, ICvBasicInformation, ICvEntry, ICvEducationEntry } from './types/cpTypes';

const basicInfo: ICvBasicInformation = {
  firstName: 'Mouhamad',
  lastName: 'Thiam',
  civility: 'M',
  nationality: 'Senegal',
  address: 'Thies, Diamaguene',
  contacts: [{type: 'phone', contact: '+221 77 865 00 00'}, {type: 'email', contact: 'kooku@jii.com'}],
  photoUrl: 'data:image/jpeg;base64,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'
}

const entries: Array<ICvEntry> = [
  {
    title: 'Tech Lead',
    startDate: new Date('2021-02-14'),
    company: {
      name: 'Rocketrip Inc',
      address: 'New York',
      country: 'US',
      website: 'http://www.rocketrip.com'
    },
    roles: ['Chief Architect', 'Team Lead'],
    achievements: ['Follow KT', 'Fill Jira tickets'],
    technologies: ['Typescript', 'JavaScript', 'React', 'GraphQl'],
    summary: 'I supposedly gathered a team to go over Lac Rose. But unfortunately for us we didn\'t have horses to go quickly. At the last minute we found a mule.'
  },
  {
    title: 'Njiit lu mag li',
    startDate: new Date('2020-03-11'),
    endDate: new Date('2021-02-10'),
    company: {
      name: 'Gembal Fokk',
      address: 'Nowhere',
      country: 'Randatu',
      website: 'http://www.naatxoona.com'
    },
    roles: ['Team Manager', 'Technical Referer'],
    achievements: ['Built a microservice app', 'TDD on all projects', 'CI/CD'],
    technologies: ['Typescript', 'JavaScript', 'Python', 'FastApi', 'NodeJs', 'Express'],
    summary: 'I swear I have nothing to hide'
  }
]

const educations: Array<ICvEducationEntry> = [
  {
    startDate: new Date('2020-03-11'),
    endDate: new Date('2021-01-31'),
    university: {
      name: 'Gembal Fokk University',
      address: 'Nowhere',
      country: 'Randatu',
      website: 'https://gembalfokk.univ.nowhere'
    },
    diploma: 'Xaqataay',
    field: 'Reetaan'
  }
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