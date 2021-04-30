import React from "react";
import { CvData } from "../../types/cpTypes";
import { BasicInformation } from "../CvBasicInformation/CvBasicInformation";
import { EducationEntry } from "../CvEducation/CvEducation";
import { Entries } from "../CvEntry/CvEntry";
import "./Cv.css"


export function Cv ({basicInfo, entries, education}: CvData) {
    console.log(`We got the basic info: ${basicInfo}`)
    return <div className="cv">
        <BasicInformation {...basicInfo} />
        <div className="resume">
        <Entries entries={entries} />
        {education.map((education, i) => (<EducationEntry key={i} />))}
        </div>
    </div>;
}
