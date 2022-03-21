import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const AverageSessions = (data) => {
	// console.log(data);
	const averageSessions = data.data ? data.data.data.sessions : "";
	// if(averageSessions) {
	//     averageSessions.map((d) => console.log(d.day))
	// }
	return (
		<div className="average-sessions">
			<ResponsiveContainer width="100%" height="100%">
				<LineChart
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
					<CartesianGrid strokeDasharray="3 3" horizontal="" vertical="" />
					<XAxis
						dataKey="day"
						axisLine={false}
						tickLine={false}
						tick={{ fill: "white", opacity: "0.7" }}
                        tickFormatter={(day) => {
                            const daysLetter = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
                            return daysLetter[day -1] 
                        }}
					/>
					<Tooltip />
					<Line
						type="natural"
						dataKey="sessionLength"
						stroke="#ffffff"
						dot={onmouseup}
						activeDot={{
							opacity: "30%",
							stroke: "#ffffff",
							r: 8,
							backgroundColor: "blue",
						}}
					/>
					{/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default AverageSessions;
