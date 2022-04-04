import React from "react";
import PropTypes from 'prop-types'
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	ResponsiveContainer,
} from "recharts";

/**
 * This component returns a RadarChart graphic with user's performance
 * @param {object} data performance data
 * @returns { React.ReactElement } RadarChart
 */

const Performance = (data) => {
	const performanceData = data.data.data ? data.data.data.data : "";
	const kind = data.data.data ? data.data.data.kind : "";

	/**
	 * dataArray stock the useful elements of 'performanceData' and 'kind' varaiables
	 */

	let dataArray = [];
	
	if (performanceData) {
		for (let i in kind) {
			// eslint-disable-next-line array-callback-return
			performanceData.map((d) => {
				// eslint-disable-next-line eqeqeq
				if (i == d.kind) {
					dataArray.push({
						value: d.value,
						kind: i,
						label: kind[i],
					});
				}
			});
		}
	}

	return (
		<div className="performance">
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart
					cx="50%"
					cy="50%"
					outerRadius="60%"
					data={dataArray}
					// @ts-ignore
					fill="white"
				>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis dataKey="label" fontSize={12} />
					<Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.7} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

Performance.propTypes = {
	data: PropTypes.object.isRequired
}

export default Performance;
