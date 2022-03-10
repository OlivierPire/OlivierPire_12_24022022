import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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
// import CallApi from "../CallApi";

const Home = () => {
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
			const getData = () => {
				axios.get(`http://localhost:3000/user/${userId}`).then((res) => {
					setMainData(res.data);
				});
				axios.get(`http://localhost:3000/user/${userId}/activity`).then((res) => {
					setActivityData(res.data);
				});
				axios
					.get(`http://localhost:3000/user/${userId}/average-sessions`)
					.then((res) => {
						setAverageSessions(res.data);
					});
				axios
					.get(`http://localhost:3000/user/${userId}/performance`)
					.then((res) => {
						setPerformanceData(res.data);
					});
			};
			getData();
		} else {
			navigate("/404");
		}
	}, [id, navigate, userId]);

	return (
		<div className="home">
			<NavbarTop />
			<NavbarLeft />
			<Activities data={activityData} />
			<AverageSessions data={averageSessions} />
			<Performance data={performanceData} />
			<Score data={mainData}/>
			<KeyData data={mainData} />
			<Header data={mainData} />
		</div>
	);
};

export default Home;
