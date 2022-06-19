import React from "react";
import PropTypes from 'prop-types'
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

/**
 * This component display a BarChart graphic with user's daily activity
 * @param {object} data activity data
 * @returns {React.ReactElement} BarChart
 */

const Activities = (data) => {
	const activity = data.data.data ? data.data.data.sessions : "";
	
	const legendStyle = {
		position: "absolute",
		top: "22px",
		fontSize: "0.7em",
	};

	/**
	 * This function allow change the style of graphic tooltip, payload corresponds to "activity"
	 * @param {any} payload is "activity" variable
	 * @returns { React.ReactElement | null} calories and weight with units or null
	 */

	const TooltipStyle = ({ payload }) => {
		if (payload && payload.length) {
			// @ts-ignore
			return (
				<div
					className="tooltip"
					style={{
						background: "#E60000",
						padding: "15px 5px",
						color: "white",
					}}
				>
					<p>{payload[0].value}kg</p>
					<p>{payload[1].value}Kcal</p>
				</div>
			);
		}
		return null;
	};

	return (
		<div className="activities">
			<h2>Activité quotidienne</h2>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					width={500}
					height={300}
					data={activity}
					margin={{
						top: 85,
						right: 30,
						left: 20,
						bottom: 15,
					}}
				>
					<CartesianGrid strokeDasharray="3 1" 
					// @ts-ignore
					vertical="" />
					<XAxis
						padding={{ left: 12, right: 10 }}
						tickSize={20}
						tickLine={false}
						tickFormatter={(number) => number + 1}
					/>
					<YAxis
						tickLine={false}
						axisLine={false}
						orientation="right"
						dataKey="kilogram"
						domain={[60, 90]}
						ticks={[60, 75, 90]}
						yAxisId="rigth"
						scale="auto"
						allowDataOverflow={false}
						allowDecimals={false}
					/>
					<YAxis dataKey="calories" hide scale="auto" yAxisId="left" />
					<Tooltip content={<TooltipStyle payload={[activity]} />} />
					<Legend
						verticalAlign="top"
						align="right"
						// @ts-ignore
						wrapperStyle={legendStyle}
						iconType="circle"
					/>
					<Bar
						yAxisId="rigth"
						dataKey="kilogram"
						fill="#282D30"
						radius={[3, 3, 0, 0]}
						barSize={10}
						name="Poids (kg)"
					/>
					<Bar
						yAxisId="left"
						dataKey="calories"
						fill="#E60000"
						radius={[3, 3, 0, 0]}
						barSize={10}
						name="Calories brulées (kCal)"
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

Activities.propTypes = {
	data: PropTypes.object.isRequired
}

export default Activities;
