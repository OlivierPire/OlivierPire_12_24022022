import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Components
import NavbarTop from "../Components/Navbar/NavbarTop";
import NavbarLeft from "../Components/Navbar/NavbarLeft";
import Header from "../Components/Header/Header";
import Activities from "../Components/Graphics/Activities";
import AverageSessions from "../Components/Graphics/AverageSessions";
import KeyData from "../Components/Graphics/KeyData";
import Performance from "../Components/Graphics/Performance";
import Score from "../Components/Graphics/Score";
import "../Styles/index.scss";
import { getAllDatas } from "../CallApi";

const Home = (access) => {
	const [mainData, setMainData] = useState(false);
	const [activityData, setActivityData] = useState(false);
	const [averageSessions, setAverageSessions] = useState(false);
	const [performanceData, setPerformanceData] = useState(false);
	const { id } = useParams();
	const userId = id;
	const navigate = useNavigate();

	useEffect(() => {
		// eslint-disable-next-line eqeqeq
		if (id == 12 || id == 18) {
			getAllDatas(userId).then(([activities, mainData, averageSessions, performanceData]) => {
				setActivityData(activities.data)
				setMainData(mainData.data)
				setAverageSessions(averageSessions.data)
				setPerformanceData(performanceData.data)
			})
		} else {
			navigate("/404");
		}
	}, [id, navigate, userId]);

	switch(access.access) {
		case 'activity' :
		return (
			<div className="graphics">
				<Activities data={activityData} />
			</div>
		)
		case 'today-score' :
		return (
			<div className="graphics">
				<Score data={mainData}/>
			</div>
		)
		case 'average-sessions' :
		return (
			<div className="graphics">
				<AverageSessions data={averageSessions} />
			</div>
		)
		case 'activities' :
		return (
			<div className="graphics">
				<Performance data={performanceData} />
			</div>
		)
		case 'key-data' :
		return (
			<div className="graphics">
				<KeyData data={mainData} />
			</div>
		)
		default : 
			return (
				<div className="home">
					<NavbarTop />
					<NavbarLeft />
					<Header data={mainData} />
					<div className="graphics">
						<Activities data={activityData} />
						<AverageSessions data={averageSessions} />
						<Performance data={performanceData} />
						<Score data={mainData}/>
						<KeyData data={mainData} />
					</div>
				</div>
			);
	}
};

export default Home;
