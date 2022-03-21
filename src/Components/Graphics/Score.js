import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const Score = (data) => {
    // console.log(data);
    const score = data.data ? data.data.data : "";
    console.log(score);
    // console.log(score);

    let scoreArray = [
        {
            uv: 1,
            fill: 'white',
          },
        {   
            name: "aaa",
            uv: score.score ? score.score : score.todayScore,
            fill: '#FF0101'
        }
    ];

    console.log(scoreArray);

    return (
        <div className='score'>
            <h2>Score</h2>            
            <h3><span>{score.score? score.score * 100 + "%": score.todayScore * 100 + "%"}</span> de votre objectif</h3>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart cx="50%" cy="50%" innerRadius="80%" outerRadius="80%" barSize={10} data={scoreArray} startAngle={90}>
                    <RadialBar
                        dataKey="uv"
                        cornerRadius={10}
                    />
                    
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Score;