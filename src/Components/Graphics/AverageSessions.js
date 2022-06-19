import React from "react";
import PropTypes from 'prop-types'
import {
	LineChart,
	Line,
	XAxis,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";

/**
 * This components display a LineChart with user's average sessions
 * @param {object} data average sessions data
 * @returns { React.ReactElement } LineChart
 */

const AverageSessions = (data) => {
	const averageSessions = data.data.data ? data.data.data.sessions : "";
	const legend = () => {
		return (
			<div style={{ color: "white", margin: 20, marginBottom: 50, opacity: 0.7 }}>
				<p>Durée moyenne des sessions</p>
			</div>
		);
	};
	
	/**
	 * This function allow change the style of graphic tooltip, and add a paragraph for time of sessions, payload corresponds to "averageSessions"
	 * @param {any} payload is "averageSessions" variable
	 * @returns { React.ReactElement | null } time of sessions with units (min)
	 */

	const TooltipStyle = ({ payload }) => {
		if (payload && payload.length) {
			// @ts-ignore
			return (
				<div
					className="tooltip"
					style={{
						background: "white",
						padding: "10px 5px",
					}}
				>
					<p>{payload[0].value} min</p>
				</div>
			);
		}
		return null;
	};

	return (
		<div className="average-sessions">
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
					onMouseMove={(e) => {
						// console.log(e);
						if (e.isTooltipActive === true) {
							let div = document.querySelector(".average-sessions");
							let windowWidth = div.clientWidth;
							let percentage = Math.round(
								(e.activeCoordinate.x / windowWidth) * 100
							);
							// @ts-ignore
							div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${percentage}%, rgba(175,0,0,1.5) ${percentage}%, rgba(175,0,0,1.5) 100%)`;
						}
					}}
					width={500}
					height={300}
					data={averageSessions}
					margin={{
						top: 5,
						right: 5,
						left: 5,
						bottom: 5,
					}}
				>
					{/* <CartesianGrid strokeDasharray="3 3" horizontal="" vertical="" /> */}
					<XAxis
						dataKey="day"
						axisLine={false}
						tickLine={false}
						tick={{ fill: "white", opacity: "0.7" }}
						tickFormatter={(day) => {
							const daysLetter = ["L", "M", "M", "J", "V", "S", "D"];
							return daysLetter[day - 1];
						}}
						allowDataOverflow={false}
					/>
					<Tooltip content={<TooltipStyle payload={[averageSessions]} />} />
					<Legend content={legend} verticalAlign="top" />
					<Line
						type="natural"
						dataKey="sessionLength"
						stroke="#fff"
						strokeWidth={2}
						dot={false}
						activeDot={{
							stroke: "#fff",
						}}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

AverageSessions.propTypes = {
	data: PropTypes.object.isRequired
}


export default AverageSessions;
