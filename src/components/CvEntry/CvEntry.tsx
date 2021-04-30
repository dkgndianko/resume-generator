import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ICvEntry } from "../../types/cpTypes";
import  "./CvEntry.css";

export function Entry ({entry}: {entry: ICvEntry}) {
    return <div className="entry">
        <div className="entry-title">
            {entry.title} {" "}
            <span className="entry-location">
            at <a href={entry.company.website} target="_blank" rel="noreferrer">{entry.company.name}</a>
            </span>
        </div>

        <div className="entry-duration">
            
        </div>
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