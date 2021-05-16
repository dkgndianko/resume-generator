import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { ICvEntry } from "../../types/cpTypes";
import  "./CvEntry.css";
import {formatDate} from '../../utilities/dateUtils';

function SubEntry({faProps, name}: {faProps: FontAwesomeIconProps, name: string}) {
    return (
        <span className='sub-entry'>
            <FontAwesomeIcon {...faProps} />
            {" "} {name}:
        </span>
    );
}

export function Entry ({entry}: {entry: ICvEntry}) {
    return <div className="entry">
        <div className="entry-title">
            {entry.title} {" "}
            <span className="entry-location">
            at <a href={entry.company.website} target="_blank" rel="noreferrer">{entry.company.name} {" "}
            <FontAwesomeIcon icon="external-link-alt" size="1x" />
            </a>
            </span>
        </div>

        <div className="entry-duration">
            {formatDate(entry.startDate)} - {entry.endDate?formatDate(entry.endDate):"Now"}
        </div>
        <div className="entry-summary"><p><strong>{entry.summary}</strong></p></div>
        { entry.roles.length > 0 && (
            <div className="entry-roles">
                <SubEntry faProps={{icon: 'crown', size: '2x'}} name="Roles" />
                <ul>
                    {entry.roles.map((role, i) => (
                        <li key={i} className="entry-role">{role}</li>
                    ))}
                </ul>
            </div>
        )}

        { entry.achievements.length > 0 && (
            <div className="entry-achievements">
                <SubEntry faProps={{icon: 'trophy', size: '2x'}} name="Achievements" />
                <ul>
                    {entry.achievements.map((achievement, i) => (
                        <li key={i} className="entry-achievement">{achievement}</li>
                    ))}
                </ul>
            </div>
        )}

        { entry.technologies.length > 0 && (
            <div className="entry-technologies">
                Technologies:
                    {entry.technologies.map((techno, i) => (
                        <span className="techno">{techno}</span>
                    ))}
            </div>
        )}
    </div>;
}

export function Entries({entries}: {entries: ICvEntry[]}) {
    return <div>
        <i className="entries-icon">
            <FontAwesomeIcon icon="suitcase" size="2x" />
        </i>
        {entries.map((entry, i) => (<Entry entry={entry} key={i} />))}
        </div>;
}