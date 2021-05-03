import { CvData, OldCvData, ICvBasicInformation, ICvEntry, ICvEducationEntry } from './types/cpTypes';

const basicInfo: ICvBasicInformation = {
  firstName: 'Mouhamad',
  lastName: 'Thiam',
  civility: 'M',
  nationality: 'Senegal',
  address: 'Thies, Diamaguene',
  contacts: [{type: 'phone', contact: '+221 77 865 00 00'}, {type: 'email', contact: 'kooku@jii.com'}],
  photoUrl: 'https://avatars.githubusercontent.com/u/6567837?v=4'
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

const education: Array<ICvEducationEntry> = [
  {
    startDate: new Date('2020-03-11'),
    endDate: new Date('2021-01-31'),
    university: {
      name: 'Gembal Fokk',
      address: 'Nowhere',
      country: 'Randatu',
    },
    diploma: 'Xaqataay'
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
    education
}