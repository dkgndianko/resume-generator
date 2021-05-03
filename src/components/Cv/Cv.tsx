import React from "react";
import { OldCvData, CvData } from "../../types/cpTypes";
import { BasicInformation } from "../CvBasicInformation/CvBasicInformation";
import {SectionComponent} from "../CvSection/CvSection";
import { EducationEntry } from "../CvEducation/CvEducation";
import { Entries } from "../CvEntry/CvEntry";
import "./Cv.css"


export function OldCv ({basicInfo, entries, education}: OldCvData) {
    return <div className="cv">
        <BasicInformation {...basicInfo} />
        <div className="resume">
        <Entries entries={entries} />
        {education.map((education, i) => (<EducationEntry key={i} />))}
        </div>
    </div>;
}


export function Cv ({basicInfo, sections, education}: CvData) {
    return <div className="cv">
        <BasicInformation {...basicInfo} />
        <div className="resume">
            <SectionComponent {...sections[0]} />
            {education.map((education, i) => (<EducationEntry key={i} />))}
        </div>
    </div>;
}
