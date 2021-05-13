export interface IContact {
     type: string;
     contact: string;
 }

 export interface ICompany {
     name: string;
     address: string;
     country: string;
     website: string;
 }

 export interface IUniversity {
     name: string;
     address: string;
     country: string;
     website: string;
 }

 export interface ICvBasicInformation {
     firstName: string;
     lastName: string;
     civility: string;
     nationality: string;
     address: string;
     contacts: Array<IContact>;
     photoUrl: string;
 }

 export interface ICvEntry {
     title: string;
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
     field: string;
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

 export interface OldCvData {
     basicInfo: ICvBasicInformation;
     education: Array<ICvEducationEntry>;
     entries: Array<ICvEntry>;
 }


 export interface CvData {
    basicInfo: ICvBasicInformation;
    educations: Array<ICvEducationSection>;
    sections: Array<ICvEntrySection>;
}