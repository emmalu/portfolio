import React from 'react';
import HeadsetIcon from '@material-ui/icons/Headset';
import LanguageIcon from '@material-ui/icons/Language';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import TouchAppIcon from '@material-ui/icons/TouchApp';


export default function WorkCards({data}) {
    return (
        <div className="grid">
            <div className="grid-flow-row-dense">
            {
                data.map((item,index) => ( 
                    <div className="rounded overflow-hidden shadow-lg bg-white my-3" key={index}>
                        <div className="px-4 py-3"> 
                            <span className="font-bold text-xl mb-2">{item.name}: </span>
                            <span className="text-gray-700 text-base">{item.reason} </span>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-ep-yellow hover:bg-ep-blue-light rounded-lg px-3 py-1 text-base font-semibold text-gray-700 mx-2 my-2">
                                    { (item.type === "Read")
                                        ? <MenuBookIcon /> 
                                        : ( item.type === "Play")
                                            ? <TouchAppIcon />
                                            : ( item.type === "Web")
                                                ? <LanguageIcon />
                                                : <HeadsetIcon />
                                    }
                                    { (item.type === "Read" || item.type === "Web" )
                                        ? " Read / View" 
                                        : ( item.type === "Play")
                                            ? "Explore / Play"
                                            : "Listen / Watch"
                                    }    
                                </a>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    );
}
