import { CvData } from './types/cpTypes';


export const cvData: CvData = {
    basicInfo: {
      firstName: 'Mouhamad',
      lastName: 'Thiam',
      civility: 'M',
      nationality: 'Senegal',
      addresse: 'Thies, Diamaguene',
      contacts: [],
      photoUrl: ''
    },
    entries: [
      {
        startDate: new Date('2020-03-11'),
        endDate: new Date('2021-01-31'),
        company: {
          name: 'Gembal Fokk',
          address: 'Nowhere',
          country: 'Randatu',
        },
        roles: [],
        achievements: [],
        technologies: [],
        summary: 'I supposedly '
      }
    ],
    education: [
      {
        startDate: new Date('2020-03-11'),
        endDate: new Date('2021-01-31'),
        university: {
          name: 'Gembal Fokk',
          address: 'Nowhere',
          country: 'Randatu',
        },
        diploma: 'Xaqataay'
      }]
  }