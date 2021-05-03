import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ICvEntry, ICvSection } from "../../types/cpTypes";
import {Entry} from "../CvEntry/CvEntry";
// import "./CvSection.css";

export function SectionComponent ({title, items}: ICvSection<ICvEntry>) {
    return (
    <div>
        <div className="section-title-container">
            <i className="entries-icon">
                <FontAwesomeIcon icon="suitcase" size="2x" />
            </i>
            <span className="section-title">{title}</span>
        </div>
        {items.map((entry, i) => (<Entry entry={entry} key={i} />))}
        </div>);
}
