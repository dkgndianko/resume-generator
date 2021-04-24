export interface IContact {
     type: string;
     contact: string;
 }

 export interface ICompany {
     name: string;
     address: string;
     country: string;
 }

 export interface IUniversity {
     name: string;
     address: string;
     country: string;
 }

 export interface ICvBasicInformation {
     firstName: string;
     lastName: string;
     civility: string;
     nationality: string;
     addresse: string;
     contacts: Array<IContact>;
     photoUrl: string;
 }

 export interface ICvEntry {
     startDate: Date;
     endDate?: Date;
     company: ICompany;
     roles: Array<string>;
     achievements: Array<string>;
     technologies: Array<string>;
     summary: string;
 }

 export interface ICvEducationEntry {
     startDate: Date;
     endDate?: Date;
     university: IUniversity;
     diploma: string;
 }

 export interface ICvSubSection<T> {
     title: string;
     items: Array<T>;
 }

 export interface ICvSection<T> {
     title: string;
     items: Array<T>;
     subsections: Array<ICvSubSection<T>>;
 }

 
 export type ICvEntrySection = ICvSection<ICvEntry>;
 export type ICvEntrySubSection = ICvSubSection<ICvEntry>;
 export type ICvEducationSection = ICvSection<ICvEducationEntry>;
 export type ICvEducationSubSection = ICvSubSection<ICvEducationEntry>;

 export interface CvData {
     basicInfo: ICvBasicInformation;
     education: Array<ICvEducationEntry>;
     entries: Array<ICvEntry>;
 }