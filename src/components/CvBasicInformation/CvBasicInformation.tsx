import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ICvBasicInformation } from '../../types/cpTypes';
import './CvBasicInformation.css';

export function BasicInformation ( {firstName, lastName, civility, address, contacts, photoUrl}: ICvBasicInformation) {
    const emails = contacts.filter(contact => contact.type === 'email').map(contact => contact.contact);
    const phones = contacts.filter(contact => contact.type === 'phone').map(contact => contact.contact);
    return (
    <div className="basicInfo">
        <div className="info">
            <div className="name-container">
                <i className="circle">
                    <FontAwesomeIcon icon="user" size="3x" />
                </i>

                <span className="landgate name">{civility} {firstName} {lastName}</span>
            </div>
            <div className="address">
                <FontAwesomeIcon icon="map-marker" size="4x" className="seagate" />
                <span className="landgate">{address}</span>
            </div>
            {emails.map((email, i) =>
                <div className="email" key={`e${i}`} >
                    <FontAwesomeIcon icon="at" size="3x" className="seagate" />
                    <span className="landgate">{email}</span>
                </div>
            )}

            {phones.map((phone, i) =>
                <div className="phone" key={`p${i}`} >
                    <FontAwesomeIcon icon="mobile" size="4x" className="seagate" />
                    <span className="landgate">{phone}</span>
                </div>
            )}
            </div>
        <div className="image">
            <img src={photoUrl} className="profile-photo" alt={`${lastName}`} />
        </div>
        {/* <br style="clear:both;"/> */}
    </div>
    );
}
