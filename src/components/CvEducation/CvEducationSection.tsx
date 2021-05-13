import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ICvEducationSection } from "../../types/cpTypes";
import {EducationEntry} from "./CvEducation"
import './CvEducationSection.css';


export function EducationSectionComponent ({title, items}: ICvEducationSection) {
    return (
    <div>
        <div className="educations-title-container">
            <i className="educations-icon">
                <FontAwesomeIcon icon="graduation-cap" size="2x" />
            </i>
            <span className="educations-title">{title}</span>
        </div>
        {items.map((entry, i) => (<EducationEntry education={entry} key={i} />))}
        </div>);
}