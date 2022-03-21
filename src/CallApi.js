import axios from "axios";

const getActivities = (userId) => {
	return axios
		.get(`http://localhost:3000/user/${userId}/activity`)
};

const getMainData = (userId) => {
	return axios.get(`http://localhost:3000/user/${userId}`)
};

const getAverageSessions = (userId) => {
	return axios
		.get(`http://localhost:3000/user/${userId}/average-sessions`)
		
};

const getPerformanceData = (userId) => {
	return axios
		.get(`http://localhost:3000/user/${userId}/performance`)
};

const getAllDatas = (userId) => {
    return Promise.all([getActivities(userId), getMainData(userId), getAverageSessions(userId), getPerformanceData(userId)])
}

export {getActivities, getMainData, getAverageSessions, getPerformanceData, getAllDatas};
