import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faSuitcase, faUser, faMapMarker, faAt, faMobile, faExternalLinkAlt, faTrophy, faCrown, faGraduationCap } from '@fortawesome/free-solid-svg-icons'



export const loadFontAwesome = () => {
    //@ts-ignore
    library.add(faCheckSquare, faCoffee, faSuitcase, faUser, faMapMarker, faAt, faMobile, faExternalLinkAlt, faTrophy, faCrown, faGraduationCap);
}