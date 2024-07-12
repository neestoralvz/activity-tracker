import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const createActivity = async (activityData) => {
  try {
    const response = await axios.post(`${API_URL}/activities`, activityData);
    return response.data; // response.data ya es un objeto JavaScript
  } catch (error) {
    throw error;
  }
};

export const getActivities = async () => {
  try {
    const response = await axios.get(`${API_URL}/activities`);
    return response.data; // response.data ya es un objeto JavaScript
  } catch (error) {
    throw error;
  }
};
