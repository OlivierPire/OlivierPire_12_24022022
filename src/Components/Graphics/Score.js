import React, { ReactElement } from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import PropTypes from 'prop-types'

/**
 * This component returns a RadialBarChart graphic with user's score in percentage
 * @param {any} data main Data
 * @returns { ReactElement } a RadialBarChart
 */

const Score = (data) => {
	const score = data.data ? data.data.data : "";

	let scoreArray = [
		{
			uv: 1,
			fill: "white",
		},
		{
			name: "aaa",
			uv: score.score ? score.score : score.todayScore,
			fill: "#FF0101",
		},
	];

	return (
		<div className="score">
			<h2>Score</h2>
			<h3>
				<span>
					{score.score ? score.score * 100 + "%" : score.todayScore * 100 + "%"}
				</span>{" "}
				de votre objectif
			</h3>
			<ResponsiveContainer width="100%" height="100%">
				<RadialBarChart
					cx="50%"
					cy="50%"
					innerRadius="80%"
					outerRadius="80%"
					barSize={10}
					data={scoreArray}
					startAngle={90}
					endAngle={450}
				>
					<RadialBar dataKey="uv" cornerRadius={10} />
				</RadialBarChart>
			</ResponsiveContainer>
		</div>
	);
};

Score.propTypes = {
	data: PropTypes.any.isRequired
}

export default Score;
