import axios from "axios";
import PropTypes from 'prop-types'

/**
 * The axios get activity data 
 * @param {string} userId user id
 * @returns activity data
 */

const getActivities = (userId) => {
	return axios
		.get(`http://localhost:3000/user/${userId}/activity`)
};

/**
 * The axios get main data 
 * @param {string} userId user id
 * @returns main data
 */

const getMainData = (userId) => {
	return axios.get(`http://localhost:3000/user/${userId}`)
};

/**
 * The axios get average sessions data 
 * @param {string} userId user id
 * @returns average sessions data
 */

const getAverageSessions = (userId) => {
	return axios
		.get(`http://localhost:3000/user/${userId}/average-sessions`)
		
};

/**
 * The axios get performance data 
 * @param {string} userId user id
 * @returns performance data
 */

const getPerformanceData = (userId) => {
	return axios
		.get(`http://localhost:3000/user/${userId}/performance`)
};

/**
 * The promise checks that all data is resolved, and returns all functions with data
 * @param {string} userId user id
 * @returns all datas
 */

const getAllDatas = (userId) => {
    return Promise.all([getActivities(userId), getMainData(userId), getAverageSessions(userId), getPerformanceData(userId)])
}

getActivities.propTypes = {
	userId: PropTypes.string.isRequired
}

getMainData.propTypes = {
	userId: PropTypes.string.isRequired
}

getAverageSessions.propTypes = {
	userId: PropTypes.string.isRequired
}

getPerformanceData.propTypes = {
	userId: PropTypes.string.isRequired
}

getAllDatas.propTypes = {
	userId: PropTypes.string.isRequired
}


export {getActivities, getMainData, getAverageSessions, getPerformanceData, getAllDatas};
