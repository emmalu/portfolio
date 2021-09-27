import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlareIcon from '@material-ui/icons/Flare';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';


export default function AccordionSkills({data}) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const awards = data.filter(item => {
        return item.type === "award";
    });
    const certs = data.filter(item => {
        return item.type === "certification";
    });
    const skills = data.filter(item => {
        return item.type === "skill";
    });
    const langs = data.filter(item => {
        return item.type === "language";
    });
    const softies = data.filter(item => {
        return item.type === "soft";
    });

    return (
        <div>
            <Accordion expanded={expanded === 'certsPanel'} onChange={handleChange('certsPanel')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="certsPanel-content"
                id="certsPanel-header"
                >
                    <h6>Awards &amp; Certifications</h6>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-flow-col sm:auto-cols-fr">
                            {
                                certs.map( item => (
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg text-center sm:text-left">
                                        <div className="px-4 py-3">
                                            <VerifiedUserIcon/>
                                            <span className="font-bold text-xl mb-2 align-middle">{item.start}</span>
                                            <p className="text-ep-blue-dark text-base">
                                                {item.name}
                                            </p>
                                        </div>
                                        <div className="px-6 pt-1 pb-2">
                                            <span className="inline-block bg-ep-yellow hover:bg-ep-blue-light rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.org}</a>
                                            </span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="grid grid-cols-1 sm:grid-flow-col sm:auto-cols-fr">
                            {
                                awards.map( item => (
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg text-center sm:text-left">
                                        <div className="px-4 py-3">
                                            <EmojiEventsIcon />
                                            <span className="font-bold text-xl mb-2 align-middle">{item.start}</span>
                                            <p className="text-ep-blue-dark text-base">
                                                {item.name}
                                            </p>
                                        </div>
                                        <div className="px-6 pt-1 pb-2">
                                            <span className="inline-block bg-ep-yellow hover:bg-ep-blue-light rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                                <a href={item.link} target="_blank" rel="noopener noreferrer">{item.org}</a>
                                            </span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'langsPanel'} onChange={handleChange('langsPanel')}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="langsPanel-content"
                id="langsPanel-header"
                >
                    <h6>Languages, Software &amp; Other Talents</h6>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <div className="grid grid-cols-1 sm:grid-flow-col sm:auto-cols-fr">
                            {
                                langs.map( item => (
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg text-center sm:text-left">
                                        <div className="px-4 py-3">
                                            <LibraryBooksIcon />
                                            <div className="font-bold text-sm mb-2">{item.name}</div>
                                            <p className="text-ep-blue-dark text-sm">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="grid grid-cols-1 sm:grid-flow-col sm:auto-cols-fr">
                            {
                                skills.map( item => (
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg text-center sm:text-left">
                                        <div className="px-4 py-3">
                                            <DesktopMacIcon />
                                            <div className="font-bold text-sm mb-2">{item.name}</div>
                                            <p className="text-ep-blue-dark text-sm">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="grid grid-cols-1 sm:grid-flow-col sm:auto-cols-fr">
                            {
                                softies.map( item => (
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg text-center sm:text-left">
                                        <div className="px-4 py-3">
                                            <FlareIcon />
                                            <div className="font-bold text-sm mb-2">{item.name}</div>
                                            <p className="text-ep-blue-dark text-base">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div> 
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
