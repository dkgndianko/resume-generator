import { CvData } from './types/cpTypes';



export const cvData: CvData = {
    basicInfo: {
      firstName: 'Mouhamad',
      lastName: 'Thiam',
      civility: 'M',
      nationality: 'Senegal',
      address: 'Thies, Diamaguene',
      contacts: [{type: 'phone', contact: '+221 77 865 00 00'}, {type: 'email', contact: 'kooku@jii.com'}],
      photoUrl: 'https://avatars.githubusercontent.com/u/6567837?v=4'
    },
    entries: [
      {
        title: 'Njiit lu mag li',
        startDate: new Date('2020-03-11'),
        endDate: new Date('2021-01-31'),
        company: {
          name: 'Gembal Fokk',
          address: 'Nowhere',
          country: 'Randatu',
          website: 'http://www.naatxoona.com'
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