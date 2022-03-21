import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const Performance = (data) => {
    const performanceData = data.data ? data.data.data.data : "";
    const kind = data.data ? data.data.data.kind : "";

    let dataArray = [];

    console.log(performanceData);
    console.log(kind);

    if(performanceData) {
      for(let i in kind) {
        // eslint-disable-next-line array-callback-return
        performanceData.map((k) => 
         { 
           // eslint-disable-next-line eqeqeq
           if(i == k.kind) {
            dataArray.push({
              "value": k.value,
              "kind": i,
              "label": kind[i]
            })
          }}
        )
      }
    }

    return (
        <div className='performance'>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="68%" data={dataArray} fill='white'>
                    <PolarGrid radialLines={false}/>
                    <PolarAngleAxis dataKey="label" fontSize={12}/>
                    <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.7} /> 
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Performance;