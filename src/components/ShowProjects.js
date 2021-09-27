import React from 'react';
import "fontsource-montserrat"; 
import LaunchIcon from '@material-ui/icons/Launch';

export default function WorkCards({data}) {
    return (
        <div className='grid md:grid-cols-3 md:gap-4 place-items-center'>
            {
                data.map((item,index) => (
                    <div className="flip-box px-2 py-2 shadow-lg mb-4" key={index}>
                        <div className="flip-box-inner">
                            <div className="flip-box-front bg-white">
                                <h2 className="text-ep-blue-dark text-lg lg:hidden pt-3">{item.project}</h2>
                                <img  className="object-contain object-top content-center" src={item.image} alt={item.project + " cover"} />
                            </div>
                            <div className="flip-box-back bg-white text-ep-blue-dark">
                                <div className="pt-3 px-3">
                                    <h2 className="font-semibold text-lg">{item.desc}</h2>
                                    <h6 className="text-sm py-3">{"Released in " + item.deployed}</h6>
                                    <button className="bg-ep-yellow hover:bg-ep-blue-light text-gray-700 font-bold py-2 px-4 rounded-full inline-flex items-center">
                                        <a  aria-label={`open ${item.project}`} href={item.link} target="_blank" rel="noopener noreferrer"><LaunchIcon /> Open</a>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
