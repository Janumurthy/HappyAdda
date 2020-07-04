import React from 'react';

const Grid = ({ feature, columns, index, reverse }) => {
    const firstCol =  reverse ? index % 2 == 0 ? '1' : '3' : '1';
    const secondCol = reverse ? index % 2 == 0 ? '3' : '1' : '3';
    return (
        <div className={`grid grid-cols-${columns} gap-4 py-2`}>
            <div className={`col-span-${firstCol} flex items-center`}>
                { firstCol == '1' ? 
                    <img src={feature.src} /> 
                    : 
                    <div> 
                        <h2>{feature.title}</h2>
                        {feature.desc} 
                    </div> 
                }
            </div>
            <div className={`col-span-${secondCol} flex items-center`}>
                { secondCol == '3' ? 
                    <div> 
                        <h2>{feature.title}</h2>
                        {feature.desc} 
                    </div>  
                    : 
                    <img src={feature.src} /> 
                }
            </div>
        </div>
    )}

export default Grid;