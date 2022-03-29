import React, { useEffect, useState, ReactElement } from "react";
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
import PropTypes from 'prop-types'

/**
 * This is the homepage, it retrieves the data with useEffect, verify specific paths, and display all components
 * @param {any} access 
 * @returns { ReactElement } all components
 */

const Home = (access) => {
	const [mainData, setMainData] = useState(false);
	const [activityData, setActivityData] = useState(false);
	const [averageSessions, setAverageSessions] = useState(false);
	const [performanceData, setPerformanceData] = useState(false);
	const { id } = useParams();
	const userId = id;
	const navigate = useNavigate();

	useEffect(() => {
		// @ts-ignore
		// eslint-disable-next-line eqeqeq
		if (id == 12 || id == 18) {
			getAllDatas(userId).then(
				([activities, mainData, averageSessions, performanceData]) => {
					setActivityData(activities.data);
					setMainData(mainData.data);
					setAverageSessions(averageSessions.data);
					setPerformanceData(performanceData.data);
				}
			);
		} else {
			navigate("/404");
		}
	}, [id, navigate, userId]);

	/**
	 * This switch verify access, so if url match with the case, the page return the good elements
	 */

	switch (access.access) {
		case "activity":
			return (
				<div className="home">
					<NavbarTop />
					<NavbarLeft />
					<Header data={mainData} />
					<div className="graphics graph_alone">
						<Activities data={activityData} />
					</div>
				</div>
			);
		case "today-score":
			return (
				<div className="home">
					<NavbarTop />
					<NavbarLeft />
					<Header data={mainData} />
					<div className="graphics graph_alone">
						<Score data={mainData} />
					</div>
				</div>
			);
		case "average-sessions":
			return (
				<div className="home">
					<NavbarTop />
					<NavbarLeft />
					<Header data={mainData} />
					<div className="graphics graph_alone">
						<AverageSessions data={averageSessions} />
					</div>
				</div>
			);
		case "activities":
			return (
				<div className="home">
					<NavbarTop />
					<NavbarLeft />
					<Header data={mainData} />
					<div className="graphics graph_alone">
						<Performance data={performanceData} />
					</div>
				</div>
			);
		case "key-data":
			return (
				<div className="home">
					<NavbarTop />
					<NavbarLeft />
					<Header data={mainData} />
					<div className="graphics graph_alone">
						<KeyData data={mainData} />
					</div>
				</div>
			);
		default:
			return (
				<div className="home">
					<NavbarTop />
					<NavbarLeft />
					<Header data={mainData} />
					<div className="graphics">
						<Activities data={activityData} />
						<AverageSessions data={averageSessions} />
						<Performance data={performanceData} />
						<Score data={mainData} />
						<KeyData data={mainData} />
					</div>
				</div>
			);
	}
};

Home.propTypes = {
	data: PropTypes.any
}

export default Home;
