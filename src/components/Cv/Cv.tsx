import React from "react";
import { OldCvData, CvData } from "../../types/cpTypes";
import { BasicInformation } from "../CvBasicInformation/CvBasicInformation";
import {SectionComponent} from "../CvSection/CvSection";
import { EducationSectionComponent } from "../CvEducation/CvEducationSection";
import { Entries } from "../CvEntry/CvEntry";
import "./Cv.css"
import { EducationEntry } from "../CvEducation/CvEducation";


export function OldCv ({basicInfo, entries, education}: OldCvData) {
    return <div className="cv">
        <BasicInformation {...basicInfo} />
        <div className="resume">
        <Entries entries={entries} />
        {education.map((education, i) => (<EducationEntry education={education} key={i} />))}
        </div>
    </div>;
}


export function Cv ({basicInfo, sections, educations}: CvData) {
    return <div className="cv">
        <BasicInformation {...basicInfo} />
        <div className="resume">
            {sections.map((section, i) => (<SectionComponent {...section} />))}
            {educations.map((education, i) => (<EducationSectionComponent {...education} />))}
        </div>
    </div>;
}
