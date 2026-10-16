import { CvData, ICvBasicInformation, ICvEntry, ICvEducationEntry, ICvSection, ICvSubSection, ICompany, IUniversity, IContact } from '../types/cpTypes';

/**
 * JSON-compatible types where dates are strings instead of Date objects
 */
export interface IJsonContact {
    type: string;
    contact: string;
}

export interface IJsonCompany {
    name: string;
    address: string;
    country: string;
    website: string;
}

export interface IJsonUniversity {
    name: string;
    address: string;
    country: string;
    website: string;
}

export interface IJsonBasicInformation {
    firstName: string;
    lastName: string;
    civility: string;
    nationality: string;
    address: string;
    contacts: Array<IJsonContact>;
    photoUrl: string;
}

export interface IJsonEntry {
    title: string;
    startDate: string;
    endDate?: string;
    company: IJsonCompany;
    roles: Array<string>;
    achievements: Array<string>;
    technologies: Array<string>;
    summary: string;
}

export interface IJsonEducationEntry {
    startDate: string;
    endDate?: string;
    university: IJsonUniversity;
    diploma: string;
    field: string;
    comment?: string;
}

export interface IJsonSubSection {
    title: string;
    items: Array<any>;
}

export interface IJsonEntrySection {
    title: string;
    items: Array<IJsonEntry>;
    subsections: Array<IJsonSubSection>;
}

export interface IJsonEducationSection {
    title: string;
    items: Array<IJsonEducationEntry>;
    subsections: Array<IJsonSubSection>;
}

export interface IJsonCvData {
    lang?: string;
    basicInfo: IJsonBasicInformation;
    sections: Array<IJsonEntrySection>;
    educations: Array<IJsonEducationSection>;
}

export interface ILoadedResumeData {
    cvData: CvData;
    lang: string;
}

/**
 * Parse a date string into a Date object
 * Handles ISO 8601 format and other common formats
 */
function parseDate(dateStr: string | undefined): Date | undefined {
    if (!dateStr) return undefined;
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
        throw new Error(`Invalid date format: ${dateStr}`);
    }
    return date;
}

/**
 * Convert JSON company to TypeScript company
 */
function jsonCompanyToCompany(json: IJsonCompany): ICompany {
    return {
        name: json.name,
        address: json.address,
        country: json.country,
        website: json.website
    };
}

/**
 * Convert JSON university to TypeScript university
 */
function jsonUniversityToUniversity(json: IJsonUniversity): IUniversity {
    return {
        name: json.name,
        address: json.address,
        country: json.country,
        website: json.website
    };
}

/**
 * Convert JSON basic info to TypeScript basic info
 */
function jsonBasicInfoToBasicInfo(json: IJsonBasicInformation): ICvBasicInformation {
    return {
        firstName: json.firstName,
        lastName: json.lastName,
        civility: json.civility,
        nationality: json.nationality,
        address: json.address,
        contacts: json.contacts.map((c): IContact => ({
            type: c.type,
            contact: c.contact
        })),
        photoUrl: json.photoUrl
    };
}

/**
 * Convert JSON entry to TypeScript entry
 */
function jsonEntryToEntry(json: IJsonEntry): ICvEntry {
    const startDate = parseDate(json.startDate);
    if (!startDate) {
        throw new Error(`Invalid startDate: ${json.startDate}`);
    }
    return {
        title: json.title,
        startDate: startDate,
        endDate: parseDate(json.endDate),
        company: jsonCompanyToCompany(json.company),
        roles: [...json.roles],
        achievements: [...json.achievements],
        technologies: [...json.technologies],
        summary: json.summary
    };
}

/**
 * Convert JSON education entry to TypeScript education entry
 */
function jsonEducationEntryToEducationEntry(json: IJsonEducationEntry): ICvEducationEntry {
    const startDate = parseDate(json.startDate);
    if (!startDate) {
        throw new Error(`Invalid startDate: ${json.startDate}`);
    }
    return {
        startDate: startDate,
        endDate: parseDate(json.endDate),
        university: jsonUniversityToUniversity(json.university),
        diploma: json.diploma,
        field: json.field,
        comment: json.comment
    };
}

/**
 * Convert JSON entry section to TypeScript entry section
 */
function jsonEntrySectionToSection(json: IJsonEntrySection): ICvSection<ICvEntry> {
    return {
        title: json.title,
        items: json.items.map(item => jsonEntryToEntry(item)),
        subsections: json.subsections.map((sub): ICvSubSection<ICvEntry> => ({
            title: sub.title,
            items: sub.items
        }))
    };
}

/**
 * Convert JSON education section to TypeScript education section
 */
function jsonEducationSectionToSection(json: IJsonEducationSection): ICvSection<ICvEducationEntry> {
    return {
        title: json.title,
        items: json.items.map(item => jsonEducationEntryToEducationEntry(item)),
        subsections: json.subsections.map((sub): ICvSubSection<ICvEducationEntry> => ({
            title: sub.title,
            items: sub.items
        }))
    };
}

/**
 * Convert JSON CV data to TypeScript CV data
 */
export function jsonCvDataToCvData(json: IJsonCvData): { cvData: CvData; lang: string } {
    const sections = json.sections.map(section => {
        const convertedSection = jsonEntrySectionToSection(section);
        return {
            ...convertedSection,
            items: sortEntriesByDateDesc(convertedSection.items)
        };
    });

    const educations = json.educations.map(section => {
        const convertedSection = jsonEducationSectionToSection(section);
        return {
            ...convertedSection,
            items: sortEducationsByDateDesc(convertedSection.items)
        };
    });

    return {
        lang: json.lang || 'en',
        cvData: {
            basicInfo: jsonBasicInfoToBasicInfo(json.basicInfo),
            sections,
            educations
        }
    };
}

/**
 * Sort entries by startDate in descending order (most recent first)
 */
function sortEntriesByDateDesc(entries: ICvEntry[]): ICvEntry[] {
    return entries.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
}

/**
 * Sort education entries by startDate in descending order (most recent first)
 */
function sortEducationsByDateDesc(entries: ICvEducationEntry[]): ICvEducationEntry[] {
    return entries.sort((a, b) => b.startDate.getTime() - a.startDate.getTime());
}

/**
 * Load resume data from a JSON file
 * @param filePath Path to the JSON file
 * @returns Promise<ILoadedResumeData>
 */
export async function loadResumeDataFromFile(filePath: string): Promise<ILoadedResumeData> {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`Failed to load resume data from ${filePath}: ${response.statusText}`);
        }
        const jsonData: IJsonCvData = await response.json();
        return jsonCvDataToCvData(jsonData);
    } catch (error) {
        console.error(`Error loading resume data from ${filePath}:`, error);
        throw error;
    }
}

/**
 * Load resume data from a JSON string
 * @param jsonString JSON string containing resume data
 * @returns ILoadedResumeData
 */
export function loadResumeDataFromString(jsonString: string): ILoadedResumeData {
    try {
        const jsonData: IJsonCvData = JSON.parse(jsonString);
        return jsonCvDataToCvData(jsonData);
    } catch (error) {
        console.error('Error parsing resume data JSON:', error);
        throw error;
    }
}

/**
 * Validate that a JSON object has the basic structure of resume data
 * @param data Any object to validate
 * @returns boolean
 */
export function isValidResumeData(data: any): boolean {
    if (!data || typeof data !== 'object') return false;
    if (!data.basicInfo || typeof data.basicInfo !== 'object') return false;
    if (!Array.isArray(data.sections)) return false;
    if (!Array.isArray(data.educations)) return false;
    
    // Basic validation of basicInfo
    const basicInfo = data.basicInfo;
    if (!basicInfo.firstName || !basicInfo.lastName || !basicInfo.contacts || !Array.isArray(basicInfo.contacts)) {
        return false;
    }
    
    return true;
}
