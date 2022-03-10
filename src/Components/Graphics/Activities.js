import React from 'react';
import * as d3 from "d3"

const graph = () => {
    let dataset = [69, 70, 71]
    d3.select(".activities")
    .selectAll("p")
    .data(dataset)
    .enter()
    .append("p")
    .text(function(d) { return d; })
}
const Activities = () => {
    return (
        <div className='activities'>
            {graph()}
        </div>
    );
};


export default Activities;