import React from "react";
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

const Activities = (data) => {
	const activity = data.data ? data.data.data.sessions : "";
	const legendStyle = {
		position: "absolute",
		top: "-20px",
	};

	return (
		<div className="activities">
			<h1>Activité quotidienne</h1>
			<ResponsiveContainer width="100%" height="100%">
				<BarChart
					width={500}
					height={300}
					data={activity}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 55,
					}}
				>
					<CartesianGrid strokeDasharray="3 1" vertical="" />
					<XAxis
                        scale='point'
						dataKey="day"
						tickSize={20}
						tickLine={false}
					/>
					<YAxis orientation="right" dataKey="kilogram" domain={[69, 71]} />
					<Tooltip />
					<Legend
						verticalAlign="top"
						align="right"
						wrapperStyle={legendStyle}
						iconType="circle"
					/>
					{/* payload à utiliser sur Legend  pour changer les noms legendes? */}
					<Bar
						dataKey="kilogram"
						fill="#282D30"
						radius={[3, 3, 0, 0]}
						barSize={10}
					/>
					<Bar
						dataKey="calories"
						fill="#E60000"
						radius={[3, 3, 0, 0]}
						barSize={10}
					/>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Activities;
