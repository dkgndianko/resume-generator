import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {formatDate } from '../../utilities/dateUtils';
import { ICvEducationEntry } from "../../types/cpTypes";
import './CvEducation.css';

export function EducationEntry ({education}: {education: ICvEducationEntry}) {
    return (
    <div className='education'>
        <div className='education-title'>
            <span className='education-diplomae'>
                {education.diploma}
            </span>
            {' '} in {' '}
            <span className='education-field'>
                {education.field}
            </span>
            {/* {(!!education.comment && (<span> ({education.comment})</span>))} */}
            <span className='education-university'>
            {' '} at {' '}
                <a href={education.university.website}>{education.university.name} ({education.university.country})<FontAwesomeIcon icon="external-link-alt" size="1x" /></a>
            </span>
        </div>
        <div className='education-duration'>{formatDate(education.startDate)}-{education.endDate?formatDate(education.endDate):'Present'}</div>
    </div>);
}
