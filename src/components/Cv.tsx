import React from "react";
import { CvData } from "../types/cpTypes";
import { BasicInformation } from "./CvBasicInformation";
import { EducationEntry } from "./CvEducation";
import { Entry } from "./CvEntry";


export function Cv ({basicInfo, entries, education}: CvData) {
    console.log(`We got the basic info: ${basicInfo}`)
    return <div>
        <BasicInformation/>
        {entries.map(entry => (<Entry />))}
        {education.map(education => (<EducationEntry/>))}
    </div>;
}
